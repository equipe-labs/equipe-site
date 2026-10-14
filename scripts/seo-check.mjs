#!/usr/bin/env node
// SEO/GEO smoke check for equipe.im. No dependencies (Node 24 fetch).
//
//   node scripts/seo-check.mjs                         # production: https://equipe.im
//   node scripts/seo-check.mjs http://localhost:4321   # `npm run preview`
//
// Against production it also checks www/http redirects and security headers.
// Against any other host those checks are skipped, and absolute URLs on
// https://equipe.im are fetched from the given base instead.
// Exit code 1 if anything fails. See docs/seo.md.

const CANONICAL = 'https://equipe.im';
const base = (process.argv[2] ?? CANONICAL).replace(/\/$/, '');
const isProd = base === CANONICAL;

// Keep in sync with src/i18n/locales.ts.
const LOCALES = [
  { lang: 'en', path: '/' },
  { lang: 'ko', path: '/ko/' },
  { lang: 'ja', path: '/ja/' },
  { lang: 'zh-CN', path: '/zh-cn/' },
  { lang: 'es', path: '/es/' },
  { lang: 'pt-BR', path: '/pt-br/' },
  { lang: 'de', path: '/de/' },
  { lang: 'fr', path: '/fr/' },
];

let failures = 0;
const ok = (msg) => console.log(`  ok    ${msg}`);
const fail = (msg) => {
  failures++;
  console.log(`  FAIL  ${msg}`);
};
const check = (cond, msg) => (cond ? ok(msg) : fail(msg));
const section = (title) => console.log(`\n${title}`);

// Map a canonical absolute URL onto the base being tested.
const local = (url) => (url.startsWith(CANONICAL) ? base + url.slice(CANONICAL.length) : url);
const get = (url, init) => fetch(local(url), { redirect: 'manual', ...init });

const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
const tags = (html, re) => [...html.matchAll(re)].map((m) => m[0]);
const meta = (html, key) =>
  tags(html, /<meta\s[^>]*>/g)
    .filter((t) => attr(t, 'property') === key || attr(t, 'name') === key)
    .map((t) => attr(t, 'content'));

// --- Hosts and redirects (production only) ---------------------------------
if (isProd) {
  section('Hosts and redirects');
  for (const [from, to] of [
    ['https://www.equipe.im/', 'https://equipe.im/'],
    ['https://www.equipe.im/ko/', 'https://equipe.im/ko/'],
    ['http://equipe.im/', 'https://equipe.im/'],
    ['https://equipe.im/ko', 'https://equipe.im/ko/'],
  ]) {
    const res = await fetch(from, { redirect: 'manual' }).catch((e) => ({ status: 0, e }));
    const loc = res.headers?.get('location');
    const target = loc && new URL(loc, from).href;
    check([301, 308].includes(res.status) && target === to, `${from} -> ${res.status} ${target ?? ''}`);
  }
  const res = await fetch(`${CANONICAL}/`);
  for (const h of ['strict-transport-security', 'x-content-type-options', 'referrer-policy']) {
    check(res.headers.has(h), `header ${h}`);
  }
  check(!res.headers.has('x-robots-tag'), 'no x-robots-tag on equipe.im');
}

// --- Locale pages ------------------------------------------------------------
section('Locale pages (status, canonical, hreflang, OG, JSON-LD)');
const pages = new Map();
for (const { lang, path } of LOCALES) {
  const url = CANONICAL + path;
  const res = await get(url);
  const html = res.status === 200 ? await res.text() : '';
  pages.set(url, html);
  check(res.status === 200, `${path} ${res.status}`);
  if (!html) continue;

  check(attr(html.match(/<html[^>]*>/)?.[0] ?? '', 'lang') === lang, `${path} <html lang="${lang}">`);
  const canon = tags(html, /<link\s[^>]*rel="canonical"[^>]*>/g);
  check(canon.length === 1 && attr(canon[0], 'href') === url, `${path} canonical is itself`);
  check(meta(html, 'robots').every((c) => !/noindex/.test(c)), `${path} not noindex`);

  const alts = Object.fromEntries(
    tags(html, /<link\s[^>]*rel="alternate"[^>]*hreflang[^>]*>/g).map((t) => [attr(t, 'hreflang'), attr(t, 'href')]),
  );
  const expected = Object.fromEntries(LOCALES.map((l) => [l.lang, CANONICAL + l.path]));
  check(
    LOCALES.every((l) => alts[l.lang] === expected[l.lang]),
    `${path} hreflang lists all ${LOCALES.length} languages incl. itself`,
  );
  check(alts['x-default'] === `${CANONICAL}/`, `${path} x-default -> /`);

  for (const key of ['og:title', 'og:description', 'og:url', 'og:image', 'og:image:width', 'og:image:height', 'og:image:type', 'og:locale', 'twitter:card']) {
    check(meta(html, key).length === 1 && meta(html, key)[0], `${path} ${key}`);
  }
  check(meta(html, 'og:url')[0] === url, `${path} og:url matches canonical`);
  check(meta(html, 'twitter:card')[0] === 'summary_large_image', `${path} twitter:card summary_large_image`);

  const blocks = tags(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/g);
  const types = [];
  for (const b of blocks) {
    try {
      const data = JSON.parse(b.replace(/^<script[^>]*>|<\/script>$/g, ''));
      types.push(data['@type']);
      if (data['@type'] === 'Organization') check(/\.png$/.test(data.logo ?? ''), `${path} Organization logo is PNG`);
      if (data['@type'] === 'FAQPage') {
        const qs = data.mainEntity ?? [];
        check(
          qs.length > 0 && qs.every((q) => q.name && q.acceptedAnswer?.text),
          `${path} FAQPage has ${qs.length} complete Q&A`,
        );
        check(data.inLanguage === lang, `${path} FAQPage inLanguage ${lang}`);
      }
      if (data['@type'] === 'SoftwareApplication') {
        check(
          data.name && data.offers?.price !== undefined && data.applicationCategory && data.operatingSystem,
          `${path} SoftwareApplication has name/offers/category/OS`,
        );
      }
    } catch (e) {
      fail(`${path} JSON-LD parse error: ${e.message}`);
    }
  }
  for (const t of ['Organization', 'WebSite', 'SoftwareApplication', 'FAQPage']) {
    check(types.includes(t), `${path} JSON-LD ${t}`);
  }
}

// hreflang must be reciprocal: every page a page points at points back.
section('hreflang reciprocity');
for (const [url, html] of pages) {
  if (!html) continue;
  const targets = tags(html, /<link\s[^>]*rel="alternate"[^>]*hreflang[^>]*>/g).map((t) => attr(t, 'href'));
  const missing = targets.filter((t) => {
    const other = pages.get(t);
    return !other || !other.includes(`href="${url}"`);
  });
  check(missing.length === 0, `${url.slice(CANONICAL.length)} <-> ${missing.length ? missing.join(', ') : 'all'}`);
}

// --- OG images, favicon, 404 ---------------------------------------------------
section('OG images (one per language), favicon, 404');
for (const { lang, path } of LOCALES) {
  const html = pages.get(CANONICAL + path);
  const src = html && meta(html, 'og:image')[0];
  const slug = path === '/' ? 'en' : path.replaceAll('/', '');
  check(src === `${CANONICAL}/og/${slug}.png`, `${path} og:image is its own language image (${src})`);
  if (!src) continue;
  check(meta(html, 'og:image:width')[0] === '1200' && meta(html, 'og:image:height')[0] === '630', `${path} og:image size meta 1200x630`);
  const res = await get(src);
  const buf = Buffer.from(await res.arrayBuffer());
  check(res.status === 200 && /image\/png/.test(res.headers.get('content-type') ?? ''), `${path} ${src.slice(CANONICAL.length)} ${res.status} ${res.headers.get('content-type')}`);
  // PNG IHDR: width at byte 16, height at byte 20.
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  check(w === 1200 && h === 630, `${path} image ${w}x${h} (want 1200x630)`);
  check(buf.length < 5_000_000, `${path} image ${Math.round(buf.length / 1024)} KB (< 5 MB for X)`);
}
{
  const res = await get(`${CANONICAL}/favicon.ico`);
  const buf = Buffer.from(await res.arrayBuffer());
  check(res.status === 200 && buf.readUInt16LE(2) === 1, `favicon.ico ${res.status}, ICO file`);
  check(buf[6] === 32 && buf[7] === 32, 'favicon.ico 32x32');

  const nf = await get(`${CANONICAL}/no-such-page-seo-check/`);
  const body = await nf.text();
  check(nf.status === 404, `unknown path -> ${nf.status} (want 404)`);
  check(meta(body, 'robots').some((c) => /noindex/.test(c)), '404 page is noindex');
  check(/href="\/"/.test(body), '404 page links home');
}

// --- robots.txt, sitemap, llms.txt ------------------------------------------
section('robots.txt, sitemap, llms.txt');
{
  const res = await get(`${CANONICAL}/robots.txt`);
  const body = await res.text();
  check(res.status === 200, `robots.txt ${res.status}`);
  check(!/^\s*Disallow:\s*\/\s*$/m.test(body), 'robots.txt does not disallow /');
  const sm = body.match(/^Sitemap:\s*(\S+)/m)?.[1];
  check(sm === `${CANONICAL}/sitemap-index.xml`, `robots.txt Sitemap: ${sm}`);

  const idx = await get(`${CANONICAL}/sitemap-index.xml`);
  const idxBody = await idx.text();
  check(idx.status === 200, `sitemap-index.xml ${idx.status}`);
  const locs = [...idxBody.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = new Map();
  for (const loc of locs) {
    const r = await get(loc);
    const xml = await r.text();
    check(r.status === 200, `${loc.slice(CANONICAL.length)} ${r.status}`);
    for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const u = m[1].match(/<loc>([^<]+)<\/loc>/)[1];
      urls.set(u, [...m[1].matchAll(/hreflang="([^"]+)"/g)].map((x) => x[1]));
    }
  }
  check(
    LOCALES.every((l) => urls.has(CANONICAL + l.path)),
    `sitemap lists all ${LOCALES.length} locale URLs (${urls.size} total)`,
  );
  check(
    [...idxBody.matchAll(/<loc>/g)].length > 0 && !/\/404\//.test([...urls.keys()].join(' ')),
    'sitemap does not list the 404 page',
  );
  const lastmods = [];
  for (const loc of locs) lastmods.push(...(await (await get(loc)).text()).matchAll(/<lastmod>([^<]+)<\/lastmod>/g));
  check(lastmods.length >= urls.size && lastmods.every((m) => !Number.isNaN(Date.parse(m[1]))), `sitemap: every URL has a valid <lastmod> (${lastmods.length})`);
  check(
    LOCALES.every((l) => (urls.get(CANONICAL + l.path) ?? []).length === LOCALES.length),
    'sitemap: every URL has xhtml:link alternates for all languages',
  );

  const llms = await get(`${CANONICAL}/llms.txt`);
  const llmsBody = await llms.text();
  check(llms.status === 200 && /^# /.test(llmsBody), `llms.txt ${llms.status}, starts with "# "`);
  check(/text\/plain|text\/markdown/.test(llms.headers.get('content-type') ?? ''), `llms.txt content-type ${llms.headers.get('content-type')}`);
}

console.log(`\n${failures === 0 ? 'All checks passed' : `${failures} check(s) failed`} (${base})`);
process.exit(failures === 0 ? 0 : 1);
