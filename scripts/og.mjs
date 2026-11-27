// Export the /pricing and /blog social images (1200x630 PNG, also the twitter:image) into public/og/v4/, next to the
// home images from scripts/og-home.mjs (same look: mostly white, the logo, the web app's panel on the right):
//   pricing-<slug>.png  /pricing: the free start and the Team plan's lowest price (src/data/plan.ts).
//   blog-<slug>.png     /blog: the latest three articles (English and Korean only, like the blog).
// The card parts follow the web app: the role marks (runtime/agent/brand-assets.js in
// equipe-cloud, drawn in one neutral tone with the PM in equipe blue) and the primary button.
// The folder name (v4) busts social caches;
// bump it when the look changes. Also writes public/favicon.ico (32x32 PNG in an ICO container) from public/favicon.svg.
// Run: node scripts/og.mjs   (needs sharp and Google Chrome; Chrome draws the text with the Mac's system fonts)
import sharp from 'sharp';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { LOCALES } from '../src/i18n/locales.ts';
import { TIERS } from '../src/data/plan.ts';
import { baseCss, theme, CJK, H, br, esc, glyph, logo, render, report } from './og-shared.mjs';

const DIR = process.env.OUT || 'public/og/v4';
const T = theme(), DARK = process.env.THEME === 'dark';
const ROLE_KEYS = ['pm', 'engineer', 'designer', 'qa', 'data']; // the order of team.roles in src/i18n

// The frame every card shares: white with a very soft glow, the logo, a left column (headline, line under it), the team,
// and a panel from the web app on the right. THEME=dark draws the charcoal version (previews only).
// The headline shrinks until the left column fits above the team row (long languages).
function page(lang, m, { h, sub, right, css = '' }) {
  const cjk = CJK(lang);
  const names = m.team.roles.map((r) => esc(r.name)).join(' · ');
  const tiles = ROLE_KEYS.map((k, i) => `<span class="tile${i === 0 ? ' pm' : ''}">${glyph(k)}</span>`).join('');
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>
  ${baseCss(T)}
  .l { position: absolute; left: 72px; top: 170px; width: 500px; }
  h1 { margin: 0; font-size: 72px; font-weight: 700; line-height: ${cjk ? 1.16 : 1.0}; letter-spacing: ${cjk ? '-0.03em' : '-0.042em'}; word-break: ${lang === 'ja' ? 'auto-phrase' : 'keep-all'}; overflow-wrap: break-word; text-wrap: balance; }
  .sub { margin: 24px 0 0; font-size: 25px; line-height: 1.36; color: ${T.mute}; font-weight: 500; letter-spacing: ${cjk ? '-0.01em' : '-0.012em'}; word-break: ${lang === 'ja' ? 'auto-phrase' : 'keep-all'}; text-wrap: pretty; }
  .team { position: absolute; left: 72px; bottom: 58px; display: flex; align-items: center; gap: 16px; font-size: 19px; color: ${T.mute}; font-weight: 500; white-space: nowrap; }
  .tiles { display: inline-flex; gap: 6px; }
  .tile { width: 38px; height: 38px; border-radius: 30%; display: grid; place-items: center; background: ${T.sunken}; color: ${T.text2}; box-shadow: inset 0 0 0 1px ${T.line}; }
  .tile svg { width: 21px; height: 21px; }
  .tile.pm, .av.pm { background: ${T.chip}; color: ${T.chipInk}; box-shadow: inset 0 0 0 1px ${T.chipLine}; }
  .card { position: absolute; left: 640px; top: 60px; width: 488px; border-radius: 22px; background: ${DARK ? '#202126' : '#FFFFFF'}; color: ${T.ink}; box-shadow: 0 30px 70px -30px ${T.shadow}, 0 2px 8px ${T.shadow.slice(0, 7)}12, 0 0 0 1px ${T.winEdge}; }
  .av { width: 32px; height: 32px; flex: none; border-radius: 30%; display: grid; place-items: center; background: ${T.sunken}; color: ${T.text2}; box-shadow: inset 0 0 0 1px ${T.line}; }
  .av svg { width: 18px; height: 18px; }
  .btn { flex: none; font-size: 15px; font-weight: 600; color: #FFFFFF; background: #2F5BEA; padding: 8px 15px; border-radius: 10px; box-shadow: 0 1px 2px #1E44C433; }
  .mu { color: ${T.mute}; }
  ${css}
  </style></head><body><div class="glow"></div>
  ${logo(DARK)}
  <div class="l" id="l"><h1 id="h">${br(h)}</h1>${sub ? `<p class="sub" id="s">${esc(sub)}</p>` : ''}</div>
  <div class="team"><span class="tiles">${tiles}</span><span>${names}</span></div>
  ${right}
  <script>
  (function () {
    var l = document.getElementById('l'), h = document.getElementById('h'), s = document.getElementById('s');
    var room = ${H} - 30 - 170 - 58 - 38 - 32, size = 72, sub = 25;
    while (l.offsetHeight > room && size > 46) { size -= 2; h.style.fontSize = size + 'px'; if (s && size < 60 && sub > 21) { sub -= 1; s.style.fontSize = sub + 'px'; } }
  })();
  </script></body></html>`;
}


function pricingCard(lang, m) {
  const P = m.pages.pricing, pl = m.plans;
  const [first, ...rest] = P.lead.split(/(?<=[.!?。！？])\s*/u).filter(Boolean);
  const from = `$${TIERS[0].month}`;
  const right = `<div class="card pr">
    <div class="pl"><div class="pn">${esc(pl.free.name)}</div><div class="pp"><b>${esc(pl.free.price)}</b><span class="mu">${esc(pl.free.per)}</span></div><p class="mu">${esc(pl.free.text)}</p></div>
    <div class="pl"><div class="pn">${esc(pl.team.name)}</div><div class="pp"><b>${from}</b><span class="mu">${esc(pl.picker.perMonth)}</span></div><p class="mu">${esc(pl.team.text)}</p></div>
    <div class="est"><span class="av pm">${glyph('pm', 2.2)}</span><span>${esc(pl.estimate.title)}</span></div>
  </div>`;
  const css = `
  .pr { padding: 10px 28px 22px; }
  .pl { padding: 18px 0 18px; border-bottom: 1px solid ${T.line}; }
  .pn { font-size: 18px; font-weight: 600; }
  .pp { display: flex; align-items: baseline; gap: 8px; margin-top: 4px; } .pp b { font-size: 56px; font-weight: 700; letter-spacing: -0.04em; line-height: 1.05; } .pp span { font-size: 20px; font-weight: 500; }
  .pl p { margin: 8px 0 0; font-size: 16px; line-height: 1.4; }
  .est { display: flex; align-items: center; gap: 12px; margin-top: 18px; font-size: 17px; font-weight: 600; }`;
  return page(lang, m, { h: first, sub: rest.join(' '), right, css });
}

function blogCard(lang, m, ui, posts) {
  const right = `<div class="card bl"><ul>${posts.map((p) => `<li><span class="bt">${esc(p.title)}</span></li>`).join('')}</ul></div>`;
  const css = `
  .bl { padding: 4px 28px; top: 50%; transform: translateY(-50%); margin-top: -24px; }
  .bl ul { list-style: none; margin: 0; padding: 0; }
  .bl li { display: grid; gap: 6px; padding: 22px 0; border-bottom: 1px solid ${T.line}; } .bl li:last-child { border-bottom: 0; }
  .bt { font-size: 22px; font-weight: 600; line-height: 1.3; letter-spacing: -0.012em; word-break: keep-all; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }`;
  return page(lang, m, { h: ui.h1, sub: ui.lead, right, css });
}

const front = (src) => {
  const f = src.match(/^---\n([\s\S]*?)\n---/)[1];
  return { title: f.match(/^title:\s*"?(.*?)"?\s*$/m)[1].replace(/\\"/g, '"'), date: f.match(/^date:\s*(\S+)/m)[1], tags: JSON.parse(f.match(/^tags:\s*(\[.*\])\s*$/m)[1]) };
};
// The blog's heading and lead per language (src/data/blog.ts imports astro:content, so its words are read as text).
const BLOG_SRC = await readFile('src/data/blog.ts', 'utf8');
const BLOG_LANGS = JSON.parse(BLOG_SRC.match(/BLOG_LANGS = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
const blogUi = (lang) => {
  const seg = BLOG_SRC.slice(BLOG_SRC.indexOf(`  ${lang}: {`, BLOG_SRC.indexOf('export const BLOG_UI')));
  const get = (k) => seg.match(new RegExp(`\\b${k}:\\s*'((?:[^'\\\\]|\\\\.)*)'`))[1].replace(/\\'/g, "'");
  return { h1: get('h1'), lead: get('lead') };
};

await mkdir(DIR, { recursive: true });
for (const l of LOCALES) {
  const { default: msgs } = await import(`../src/i18n/${l.code}.ts`).catch(() => ({}));
  if (!msgs && l.code !== 'en') continue; // no translation, no page, no image
  const m = msgs ?? (await import('../src/i18n/en.ts')).en;
  const name = l.slug || 'en';
  const pricing = `${DIR}/pricing-${name}.png`;
  await render(pricingCard(l.lang, m), pricing); await report(pricing);
  if (BLOG_LANGS.includes(l.code) && existsSync(`src/content/blog/${l.code}`)) {
    const posts = await Promise.all((await readdir(`src/content/blog/${l.code}`)).filter((x) => x.endsWith('.md')).map(async (x) => front(await readFile(`src/content/blog/${l.code}/${x}`, 'utf8'))));
    posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    const blog = `${DIR}/blog-${name}.png`;
    await render(blogCard(l.lang, m, blogUi(l.code), posts.slice(0, 3)), blog); await report(blog);
  }
}

// favicon.ico: one 32x32 PNG image inside an ICO header.
const png = await sharp('public/favicon.svg', { density: 384 }).resize(32, 32).png().toBuffer();
const head = Buffer.alloc(22);
head.writeUInt16LE(1, 2); // type: icon
head.writeUInt16LE(1, 4); // one image
head[6] = 32; // width
head[7] = 32; // height
head.writeUInt16LE(1, 10); // planes
head.writeUInt16LE(32, 12); // bits per pixel
head.writeUInt32LE(png.length, 14); // image size
head.writeUInt32LE(22, 18); // data offset
await writeFile('public/favicon.ico', Buffer.concat([head, png]));
console.log('public/favicon.ico 32x32');
