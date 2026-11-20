// Export the social images: one 1200x630 PNG per language -> public/og/<slug>.png
// (English is `en`): the logo, the hero headline and approve line, the five roles and the example app on a phone.
// public/og.png stays as a copy of the English image for links already shared.
// Also writes public/favicon.ico (32x32 PNG in an ICO container) from public/favicon.svg.
// Run: node scripts/og.mjs   (needs sharp; CJK text uses the system's fonts, so run it on a Mac)
import sharp from 'sharp';
import { copyFile, mkdir, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { LOCALES } from '../src/i18n/locales.ts';

const W = 1200;
const MAX_WIDTH = 1040;
const SIZE = 36;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Rough advance width: full-width for CJK, about half for the rest.
const wide = (ch) => /[ᄀ-ᇿ⺀-꓏가-힯豈-﫿＀-￯]/.test(ch);
const width = (s) => [...s].reduce((n, ch) => n + (wide(ch) ? SIZE : SIZE * 0.52), 0);

function wrap(text) {
  // Chinese and Japanese may break between any two characters; Korean breaks between words, like the site (keep-all).
  const tokens = text.match(/[⺀-꓏＀-￯]|[^\s⺀-꓏＀-￯]+\s*|\s+/gu) ?? [text];
  const lines = [''];
  for (const tok of tokens) {
    const cur = lines.at(-1);
    if (cur && width(cur + tok.trimEnd()) > MAX_WIDTH) lines.push(tok.trimStart());
    else lines[lines.length - 1] = cur + tok;
  }
  return lines.map((l) => l.trim());
}

// San Francisco first, as on the site (drawn by Chrome below), then Inter and the CJK fonts.
const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,'Apple SD Gothic Neo','Hiragino Sans','PingFang SC',system-ui,sans-serif";

// The card: logo, headline, the five roles, and a slice of the shipped app on a phone (iphone.css, same as the site).
const IPHONE_CSS = await (await import('node:fs/promises')).readFile('src/styles/iphone.css', 'utf8');
const WORDMARK = (await (await import('node:fs/promises')).readFile('public/brand/wordmark.svg', 'utf8')).replace('<svg ', '<svg height="46" ');
const ROLES = JSON.parse(await (await import('node:fs/promises')).readFile('src/data/roles.json', 'utf8'));
const ROLE_ICONS = ['pm', 'engineer', 'designer', 'qa', 'data'].map((k) => ROLES[k].path);
const ROLE_COLORS = ['#3F6FF5', '#2F9E55', '#D6498E', '#E2822E', '#1B8A8F'];
function card(lang, m) {
  const title = m.hero.title;
  const a = m.scene.app;
  const roles = m.team.roles.map((r, i) => `<span class="r" style="--c:${ROLE_COLORS[i]}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ROLE_ICONS[i]}</svg></span>`).join('');
  const names = m.team.roles.map((r) => esc(r.name)).join(' · ');
  const habits = a.habits.map((h, i) => `<li class="${i < 2 ? 'done' : 'todo'}"><span class="st-hi st-hi${i}"></span><span class="st-hn">${esc(h)}</span><span class="st-ck"><svg viewBox="0 0 24 24"><path d="M6 12.5l4 4L18 8"/></svg></span></li>`).join('');
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>
  ${IPHONE_CSS}
  :root { --sans: ${SANS}; --accent: #1D4ED8; }
  html, body { margin: 0; width: ${W}px; height: 630px; overflow: hidden; }
  body { font-family: var(--sans); color: #15161A; background: #F6F5F1; position: relative; -webkit-font-smoothing: antialiased; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(to right, #0A0A0C12 1px, transparent 1px), linear-gradient(to bottom, #0A0A0C12 1px, transparent 1px); background-size: 30px 30px; -webkit-mask-image: radial-gradient(80% 90% at 20% 30%, #000, transparent 75%); }
  .glow { position: absolute; right: -120px; top: -160px; width: 640px; height: 640px; border-radius: 50%; background: radial-gradient(closest-side, #1D4ED81F, transparent); }
  .l { position: absolute; left: 72px; top: 64px; width: 660px; }
  .brand { display: flex; align-items: center; gap: 16px; font-size: 40px; font-weight: 700; letter-spacing: -0.04em; }
  h1 { margin: 56px 0 0; font-size: ${lang === 'en' ? 76 : 64}px; line-height: ${/^(ko|ja|zh)/.test(lang) ? 1.18 : 1.0}; letter-spacing: ${/^(ko|ja|zh)/.test(lang) ? '-0.02em' : '-0.04em'}; font-weight: 700; word-break: keep-all; }
  p { margin: 22px 0 0; font-size: 28px; line-height: 1.3; color: #4F5159; font-weight: 500; word-break: keep-all; }
  .team { position: absolute; left: 72px; bottom: 58px; display: flex; align-items: center; gap: 14px; font-size: 20px; color: #4F5159; font-weight: 500; }
  .rs { display: inline-flex; } .r { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; margin-left: -9px; background: color-mix(in srgb, var(--c) 18%, #fff); color: var(--c); box-shadow: 0 0 0 3px #F6F5F1; } .r:first-child { margin-left: 0; }
  .r svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .url { position: absolute; right: 72px; top: 40px; font: 600 22px ui-monospace, 'SF Mono', Menlo, monospace; color: #1D4ED8; }
  .phone { position: absolute; right: 120px; top: 100px; transform: rotate(4deg); }
  .phone .iph { --w: 300px; }
  </style></head><body><div class="grid"></div><div class="glow"></div>
  <div class="l"><div class="brand"><svg viewBox="0 0 100 100" width="64" height="64"><rect width="100" height="100" rx="22" fill="#0A0A0C"/><path fill="#EFEDE7" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="#3F6FF5"/></svg>${WORDMARK}</div>
  <h1>${title.split('\n').map(esc).join('<br>')}</h1><p>${esc(m.hero.approve)}</p></div>
  <div class="team"><span class="rs">${roles}</span><span>${names}</span></div>
  <div class="url">equipe.im</div>
  <div class="phone"><figure class="iph" style="--w:300px"><div class="iph-frame"><i class="iph-btn iph-act"></i><i class="iph-btn iph-vup"></i><i class="iph-btn iph-vdn"></i><i class="iph-btn iph-pwr"></i><div class="iph-screen">
    <div class="iph-status"><span class="iph-time">9:41</span><span class="iph-island"></span><span class="iph-glyphs"></span></div>
    <div class="iph-content"><div class="st"><div class="st-top"><div><span class="st-date">${esc(a.today)}</span><b class="st-greet">${esc(a.greet)}</b></div><span class="st-me">M</span></div>
    <div class="st-streak"><div class="st-streak-n"><b>12</b><span>${esc(a.streak)}</span></div><div class="st-week">${['M','T','W','T','F','S','S'].map((d, i) => `<span class="${i < 5 ? 'on' : i === 5 ? 'cur' : ''}"><i></i>${d}</span>`).join('')}</div></div>
    <ul class="st-habits">${habits}</ul></div></div><i class="iph-home"></i></div><i class="iph-glare"></i></div></figure></div>
  </body></html>`;
}

// Chrome draws the text with the system's San Francisco (librsvg in sharp cannot reach it); without Chrome, sharp renders with Inter or a fallback.
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function render(svgText, out) {
  if (!existsSync(CHROME)) return void (await sharp(Buffer.from(svgText), { density: 96 }).resize(W, 630).png().toFile(out));
  const dir = await mkdtemp(join(tmpdir(), 'og-'));
  const html = join(dir, 'og.html');
  await writeFile(html, svgText.startsWith('<html') ? '<!doctype html>' + svgText : `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;overflow:hidden}svg{display:block}</style>${svgText}`);
  // Chrome may exit non-zero after writing the screenshot; the file is what counts.
  try { execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', `--user-data-dir=${join(dir, 'p')}`, `--window-size=${W},630`, `--screenshot=${resolve(out)}`, `file://${html}`], { stdio: 'ignore', timeout: 30000, killSignal: 'SIGKILL' }); } catch {}
  if (!existsSync(out)) throw new Error(`Chrome did not write ${out}`);
  await rm(dir, { recursive: true, force: true });
}

await mkdir('public/og', { recursive: true });
for (const l of LOCALES) {
  const { default: msgs } = await import(`../src/i18n/${l.code}.ts`).catch(() => ({}));
  const m = msgs ?? (await import('../src/i18n/en.ts')).en;
  if (!msgs && l.code !== 'en') continue; // no translation, no page, no image
  const tagline = m.meta.ogImageAlt.replace(/^equipe\s*—\s*/, '');
  const name = l.slug || 'en';
  const out = `public/og/${name}.png`;
  await render(card(l.lang, m), out);
  const meta = await sharp(out).metadata();
  console.log(`${out} ${meta.width}x${meta.height}  ${tagline}`);
}
await copyFile('public/og/en.png', 'public/og.png');

// favicon.ico: one 32x32 PNG image inside an ICO header.
const png = await sharp('public/favicon.svg', { density: 384 }).resize(32, 32).png().toBuffer();
const head = Buffer.alloc(22);
head.writeUInt16LE(1, 2); // type: icon
head.writeUInt16LE(1, 4); // one image
head[6] = 32; // width
head[7] = 32; // height
head.writeUInt16LE(1, 12); // planes
head.writeUInt16LE(32, 14); // bits per pixel
head.writeUInt32LE(png.length, 14 + 4);
head.writeUInt32LE(22, 18); // data offset
await writeFile('public/favicon.ico', Buffer.concat([head, png]));
console.log('public/favicon.ico 32x32');
