// Export the /pricing and /blog social images (1200x630 PNG, also the twitter:image) into public/og/v2/
// (the home image, used by every other page, comes from scripts/og-home.mjs into public/og/v3/):
//   pricing-<slug>.png  /pricing: the free start and the Team plan's lowest price (src/data/plan.ts).
//   blog-<slug>.png     /blog: the latest three articles (English and Korean only, like the blog).
// The card parts follow the web app: the role marks (runtime/agent/brand-assets.js in
// equipe-cloud, drawn in one neutral tone with the PM in equipe blue) and the primary button.
// The folder name (v2) busts social caches;
// bump it when the look changes. Also writes public/favicon.ico (32x32 PNG in an ICO container) from public/favicon.svg.
// Run: node scripts/og.mjs   (needs sharp and Google Chrome; Chrome draws the text with the Mac's system fonts)
import sharp from 'sharp';
import { mkdir, readFile, readdir, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { LOCALES } from '../src/i18n/locales.ts';
import { TIERS } from '../src/data/plan.ts';

const W = 1200, H = 630;
const DIR = 'public/og/v2';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const br = (s) => esc(s).replace(/\n/g, '<br>');
const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Apple SD Gothic Neo','Pretendard Variable','Hiragino Sans','PingFang SC',system-ui,sans-serif";
const WORDMARK = (await readFile('public/brand/wordmark.svg', 'utf8')).replace('<svg ', '<svg height="38" ').replace(/<title>.*?<\/title>/, '');
const MARK = `<svg viewBox="0 0 100 100" width="52" height="52" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#2A2B31"/><path fill="#EFEDE7" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="#2F5BEA"/></svg>`;
// The web app's role marks (equipe-cloud runtime/agent/brand-assets.js ROLE_GLYPHS): 24px line icons.
const GLYPHS = {
  pm: '<circle cx="12" cy="12" r="9.5"/><path d="m15.8 8.2-1.6 4.9a1.8 1.8 0 0 1-1.1 1.1l-4.9 1.6 1.6-4.9a1.8 1.8 0 0 1 1.1-1.1z"/>',
  engineer: '<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M2.5 8.5h19"/><path d="M6.5 6.2h.01M9.5 6.2h.01"/>',
  designer: '<path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4z"/><path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2l3.3 12.7a1 1 0 0 0 .8.7L13 18"/><path d="m2.3 2.3 7.3 7.3"/><circle cx="11" cy="11" r="2"/>',
  qa: '<circle cx="12" cy="12" r="9.5"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  data: '<path d="M3.5 3.5v15a2 2 0 0 0 2 2h15"/><path d="M17.5 16.5v-7M12.5 16.5V6.5M7.5 16.5v-3"/>',
};
const ROLE_KEYS = ['pm', 'engineer', 'designer', 'qa', 'data']; // the order of team.roles in src/i18n
const glyph = (k, w = 2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GLYPHS[k]}</svg>`;
const LOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

const CJK = (lang) => /^(ko|ja|zh)/.test(lang);

// The frame every card shares: paper background, logo, a left column (headline, line under it), the team, a right panel.
// The headline shrinks until the left column fits above the team row (long languages).
function page(lang, m, { h, sub, right, css = '' }) {
  const cjk = CJK(lang);
  const names = m.team.roles.map((r) => esc(r.name)).join(' · ');
  const tiles = ROLE_KEYS.map((k, i) => `<span class="tile${i === 0 ? ' pm' : ''}">${glyph(k)}</span>`).join('');
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: ${W}px; height: ${H}px; overflow: hidden; }
  body { font-family: ${SANS}; color: #15161A; background: #F6F5F1; position: relative; -webkit-font-smoothing: antialiased; }
  .brand { position: absolute; left: 72px; top: 60px; display: flex; align-items: center; gap: 14px; }
  .l { position: absolute; left: 72px; top: 164px; width: 500px; }
  h1 { margin: 0; font-size: 72px; font-weight: 700; line-height: ${cjk ? 1.16 : 1.0}; letter-spacing: ${cjk ? '-0.03em' : '-0.042em'}; word-break: ${lang === 'ja' ? 'auto-phrase' : 'keep-all'}; overflow-wrap: break-word; text-wrap: balance; }
  .sub { margin: 24px 0 0; font-size: 25px; line-height: 1.36; color: #55575E; font-weight: 500; letter-spacing: ${cjk ? '-0.01em' : '-0.012em'}; word-break: ${lang === 'ja' ? 'auto-phrase' : 'keep-all'}; text-wrap: pretty; }
  .team { position: absolute; left: 72px; bottom: 58px; display: flex; align-items: center; gap: 16px; font-size: 19px; color: #55575E; font-weight: 500; white-space: nowrap; }
  .tiles { display: inline-flex; gap: 6px; }
  .tile { width: 38px; height: 38px; border-radius: 30%; display: grid; place-items: center; background: #FFFFFF; color: #363636; box-shadow: inset 0 0 0 1px #0000001A; }
  .tile svg { width: 21px; height: 21px; }
  .tile.pm, .av.pm { background: #2F5BEA14; color: #2550D6; box-shadow: inset 0 0 0 1px #2F5BEA33; }
  .card { position: absolute; left: 640px; top: 60px; width: 488px; box-sizing: border-box; border-radius: 22px; background: #FFFFFF; box-shadow: 0 24px 60px -24px #15161A40, 0 2px 8px #15161A12, 0 0 0 1px #0000001A; }
  .av { width: 32px; height: 32px; flex: none; border-radius: 30%; display: grid; place-items: center; background: #F4F4F4; color: #363636; box-shadow: inset 0 0 0 1px #0000001A; }
  .av svg { width: 18px; height: 18px; }
  .btn { flex: none; font-size: 15px; font-weight: 600; color: #FFFFFF; background: #2F5BEA; padding: 8px 15px; border-radius: 10px; box-shadow: 0 1px 2px #1E44C433; }
  .mu { color: #5D5D5D; }
  ${css}
  </style></head><body>
  <div class="brand">${MARK}${WORDMARK}</div>
  <div class="l" id="l"><h1 id="h">${br(h)}</h1>${sub ? `<p class="sub" id="s">${esc(sub)}</p>` : ''}</div>
  <div class="team"><span class="tiles">${tiles}</span><span>${names}</span></div>
  ${right}
  <script>
  (function () {
    var l = document.getElementById('l'), h = document.getElementById('h'), s = document.getElementById('s');
    var room = 600 - 164 - 58 - 38 - 32, size = 72, sub = 25;
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
  .pl { padding: 18px 0 18px; border-bottom: 1px solid #0000001A; }
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
  .bl li { display: grid; gap: 6px; padding: 22px 0; border-bottom: 1px solid #0000001A; } .bl li:last-child { border-bottom: 0; }
  .bt { font-size: 22px; font-weight: 600; line-height: 1.3; letter-spacing: -0.012em; word-break: keep-all; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }`;
  return page(lang, m, { h: ui.h1, sub: ui.lead, right, css });
}

// Chrome draws the text with the system's San Francisco and Apple SD Gothic Neo (librsvg in sharp cannot reach them).
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function render(html, out) {
  if (!existsSync(CHROME)) throw new Error('Google Chrome is needed to draw the text');
  const dir = await mkdtemp(join(tmpdir(), 'og-'));
  const f = join(dir, 'og.html'), shot = join(dir, 'shot.png');
  await writeFile(f, '<!doctype html>' + html);
  // Chrome headless can idle after writing the screenshot: poll for the file, then stop it.
  const child = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--force-color-profile=srgb', `--user-data-dir=${join(dir, 'p')}`, `--window-size=${W},${H}`, `--screenshot=${shot}`, `file://${f}`], { stdio: 'ignore' });
  for (let i = 0; i < 300 && !existsSync(shot); i++) await new Promise((r) => setTimeout(r, 100));
  await new Promise((r) => setTimeout(r, 300));
  child.kill('SIGKILL');
  if (!existsSync(shot)) throw new Error(`Chrome did not write ${out}`);
  // Palette PNG: crisp text, a fraction of the size (link previews fetch it on slow connections too).
  await sharp(shot).png({ palette: true, quality: 92, effort: 10, compressionLevel: 9 }).toFile(resolve(out));
  await new Promise((r) => setTimeout(r, 300)); await rm(dir, { recursive: true, force: true, maxRetries: 5 }).catch(() => {});
}
const report = async (out) => { const meta = await sharp(out).metadata(); console.log(`${out} ${meta.width}x${meta.height} ${Math.round((await readFile(out)).length / 1024)} KB`); };

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
