// After `astro build`: split the one sitemap @astrojs/sitemap writes into one sitemap per section and language, with a
// real lastmod per page, and publish the page manifest the indexing monitor and IndexNow pings read.
//
//   dist/sitemap-index.xml (and /sitemap.xml, the same index)   -> sitemap-<section>-<locale>.xml
//   dist/seo/pages.json                                         -> every listed URL: section, locale, content hash, lastmod
//
// lastmod: a page keeps the date from the live manifest (https://equipe.im/seo/pages.json) while its words are the same;
// a new page or changed words get this build's time. Only the visible text of <main> plus the title and description
// count, so a new script bundle or a footer change does not mark all 500+ pages as changed.
// Pages with a robots noindex are left out. Run by `npm run build`; SITEMAP_PREV=off skips the network (local runs).
import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';

const SITE = 'https://equipe.im';
const INDEXNOW_KEY = '117d2ffce74b545350c9c162572066c4'; // public/<key>.txt
const DIST = 'dist';
const LOCALES = ['ko', 'ja', 'zh-cn', 'es', 'pt-br', 'de', 'fr'];
// Path's first segment -> section. Everything else (home, pricing, about, legal...) is "pages"; from-* guides are "from".
const SECTIONS = new Set(['blog', 'tools', 'websites', 'vs', 'alternatives', 'app', 'customers', 'features', 'about']);
export function classify(url) {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '');
  let parts = path ? path.split('/') : [];
  const locale = LOCALES.includes(parts[0]) ? parts.shift() : 'en';
  const first = parts[0] || '';
  const section = first.startsWith('from-') ? 'from' : SECTIONS.has(first) && (first !== 'about' || parts.length > 1) ? first : 'pages';
  return { locale, section };
}

const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
/** Visible text of a built page's <main> (falls back to <body>), title and description. */
export function pageText(html) {
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] || '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '');
  const m = html.match(/<main[\s>][\s\S]*<\/main>/) || html.match(/<body[\s>][\s\S]*<\/body>/);
  const body = decode((m ? m[0] : html)
    .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<template[\s\S]*?<\/template>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, '\n')).split('\n').map((x) => x.replace(/\s+/g, ' ').trim()).filter(Boolean);
  return { title, desc, blocks: body };
}
export const noindexed = (html) => /<meta name="robots" content="[^"]*noindex/i.test(html);
const fileOf = (url) => `${DIST}${new URL(url).pathname}index.html`;
const xmlEsc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function previous() {
  if (process.env.SITEMAP_PREV === 'off') return {};
  try {
    const r = await fetch(process.env.SITEMAP_PREV || `${SITE}/seo/pages.json`, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) return {};
    return (await r.json()).pages || {};
  } catch { return {}; }
}

async function main() {
  const now = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const raw = (await readdir(DIST)).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  const entries = [];
  for (const f of raw) {
    const xml = await readFile(`${DIST}/${f}`, 'utf8');
    for (const u of xml.match(/<url>[\s\S]*?<\/url>/g) || []) {
      const loc = u.match(/<loc>([^<]+)<\/loc>/)[1];
      const alts = [...u.matchAll(/<xhtml:link rel="alternate" hreflang="([^"]+)" href="([^"]+)"\/>/g)].map((a) => [a[1], a[2]]);
      entries.push({ loc, alts });
    }
  }
  const prev = await previous();
  const pages = {};
  const groups = new Map();
  let changed = 0, dropped = 0;
  for (const e of entries) {
    const file = fileOf(e.loc);
    if (!existsSync(file)) continue;
    const html = await readFile(file, 'utf8');
    if (noindexed(html)) { dropped++; continue; }
    const t = pageText(html);
    const h = createHash('sha1').update([t.title, t.desc, ...t.blocks].join('\n')).digest('hex').slice(0, 16);
    const { locale, section } = classify(e.loc);
    const old = prev[e.loc];
    const lastmod = old && old.h === h && old.lastmod ? old.lastmod : now;
    if (lastmod === now) changed++;
    pages[e.loc] = { section, locale, h, lastmod };
    const key = `${section}-${locale}`;
    if (!groups.has(key)) groups.set(key, []);
    // Only alternates that are themselves listed (a noindexed translation must not be advertised).
    groups.get(key).push({ ...e, lastmod });
  }
  // Drop alternates pointing at pages that were left out.
  for (const list of groups.values()) for (const e of list) e.alts = e.alts.filter(([, href]) => pages[href]);

  for (const f of raw) await unlink(`${DIST}/${f}`);
  const index = [];
  for (const [key, list] of [...groups.entries()].sort()) {
    list.sort((a, b) => a.loc.localeCompare(b.loc));
    const body = list.map((e) => `<url><loc>${xmlEsc(e.loc)}</loc><lastmod>${e.lastmod}</lastmod>${e.alts.length > 1 ? e.alts.map(([l, href]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${xmlEsc(href)}"/>`).join('') : ''}</url>`).join('');
    await writeFile(`${DIST}/sitemap-${key}.xml`, `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>\n`);
    index.push({ loc: `${SITE}/sitemap-${key}.xml`, lastmod: list.map((e) => e.lastmod).sort().at(-1) });
  }
  const idx = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${index.map((s) => `<sitemap><loc>${s.loc}</loc><lastmod>${s.lastmod}</lastmod></sitemap>`).join('')}</sitemapindex>\n`;
  await writeFile(`${DIST}/sitemap-index.xml`, idx);
  await writeFile(`${DIST}/sitemap.xml`, idx);
  // IndexNow (Bing, Yandex, Naver, Seznam): the new or changed pages of a production build. Sent from here because the
  // shared endpoint refuses pings from Cloudflare Workers (429); equipe-cloud's monitor reads the result in the manifest.
  let indexnow = null;
  const fresh = Object.entries(pages).filter(([, p]) => p.lastmod === now).map(([u]) => u);
  if (process.env.VERCEL_ENV === 'production' && fresh.length) {
    try {
      const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host: 'equipe.im', key: INDEXNOW_KEY, keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`, urlList: fresh.slice(0, 10000) }), signal: AbortSignal.timeout(10000) });
      indexnow = { status: r.status, urls: fresh.length, at: now };
    } catch (e) { indexnow = { status: 0, urls: fresh.length, at: now }; }
  }
  await mkdir(`${DIST}/seo`, { recursive: true });
  await writeFile(`${DIST}/seo/pages.json`, JSON.stringify({ built: now, sitemaps: index.map((s) => s.loc), indexnow, pages }));
  console.log(`sitemaps: ${Object.keys(pages).length} URLs in ${index.length} sitemaps, ${changed} new or changed, ${dropped} noindex left out, previous manifest ${Object.keys(prev).length ? 'used' : 'not found'}${indexnow ? `, IndexNow ${indexnow.status}` : ''}`);
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
