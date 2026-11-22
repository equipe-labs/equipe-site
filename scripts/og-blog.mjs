// Social images for blog articles: one 1200x630 PNG per article and language -> public/og/blog/<lang>-<slug>.png
// Same look as scripts/og.mjs (paper background, grid, wordmark, blue glow), with the article title as the headline.
// Run: node scripts/og-blog.mjs [slug]   (Chrome draws the text with the system fonts, so run it on a Mac; Hangul needs them)
import sharp from 'sharp';
import { mkdir, readFile, readdir, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const W = 1200, H = 630;
const only = process.argv[2];
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Apple SD Gothic Neo','Hiragino Sans','PingFang SC',system-ui,sans-serif";
const WORDMARK = (await readFile('public/brand/wordmark.svg', 'utf8')).replace('<svg ', '<svg height="46" ');
const MARK = `<svg viewBox="0 0 100 100" width="64" height="64"><rect width="100" height="100" rx="22" fill="#2A2B31"/><path fill="#EFEDE7" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="#3F6FF5"/></svg>`;

function card(lang, title, kicker, tags) {
  const cjk = lang === 'ko';
  const size = title.length > (cjk ? 34 : 62) ? (cjk ? 54 : 60) : cjk ? 62 : 70;
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: ${W}px; height: ${H}px; overflow: hidden; }
  body { font-family: ${SANS}; color: #15161A; background: #F6F5F1; position: relative; -webkit-font-smoothing: antialiased; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(to right, #0A0A0C12 1px, transparent 1px), linear-gradient(to bottom, #0A0A0C12 1px, transparent 1px); background-size: 30px 30px; -webkit-mask-image: radial-gradient(80% 90% at 20% 30%, #000, transparent 75%); }
  .glow { position: absolute; right: -120px; top: -160px; width: 640px; height: 640px; border-radius: 50%; background: radial-gradient(closest-side, #1D4ED81F, transparent); }
  .brand { position: absolute; left: 72px; top: 60px; display: flex; align-items: center; gap: 16px; }
  .k { position: absolute; right: 72px; top: 70px; font: 600 22px ui-monospace, 'SF Mono', Menlo, monospace; color: #1D4ED8; }
  h1 { position: absolute; left: 72px; right: 72px; top: 190px; margin: 0; font-size: ${size}px; line-height: ${cjk ? 1.22 : 1.06}; letter-spacing: ${cjk ? '-0.02em' : '-0.04em'}; font-weight: 700; word-break: keep-all; text-wrap: balance; }
  .t { position: absolute; left: 72px; bottom: 56px; display: flex; gap: 10px; }
  .t span { font-size: 22px; font-weight: 600; color: #4F5159; border: 1.5px solid #0A0A0C2E; border-radius: 99px; padding: 6px 16px; }
  </style></head><body><div class="grid"></div><div class="glow"></div>
  <div class="brand">${MARK}${WORDMARK}</div><div class="k">${esc(kicker)}</div>
  <h1>${esc(title)}</h1>
  <div class="t">${tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div></body></html>`;
}

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function render(html, out) {
  if (!existsSync(CHROME)) throw new Error('Google Chrome is needed to draw the text');
  const dir = await mkdtemp(join(tmpdir(), 'ogb-'));
  const f = join(dir, 'og.html');
  await writeFile(f, '<!doctype html>' + html);
  // Chrome headless can idle after writing the screenshot: poll for the file, then stop it.
  const child = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', `--user-data-dir=${join(dir, 'p')}`, `--window-size=${W},${H}`, `--screenshot=${resolve(out)}`, `file://${f}`], { stdio: 'ignore' });
  for (let i = 0; i < 300 && !existsSync(out); i++) await new Promise((r) => setTimeout(r, 100));
  await new Promise((r) => setTimeout(r, 300)); // let the PNG finish writing
  child.kill('SIGKILL');
  await new Promise((r) => setTimeout(r, 500)); await rm(dir, { recursive: true, force: true, maxRetries: 5 }).catch(() => {});
  if (!existsSync(out)) throw new Error(`Chrome did not write ${out}`);
}

const front = (src) => {
  const m = src.match(/^---\n([\s\S]*?)\n---/)[1];
  const title = m.match(/^title:\s*"?(.*?)"?\s*$/m)[1];
  const tags = JSON.parse(m.match(/^tags:\s*(\[.*\])\s*$/m)[1]);
  return { title: title.replace(/\\"/g, '"'), tags };
};
await mkdir('public/og/blog', { recursive: true });
for (const lang of ['en', 'ko']) {
  const kicker = lang === 'en' ? 'equipe.im/blog' : 'equipe.im/ko/blog';
  for (const file of (await readdir(`src/content/blog/${lang}`)).filter((x) => x.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    if (only && only !== slug) continue;
    const { title, tags } = front(await readFile(`src/content/blog/${lang}/${file}`, 'utf8'));
    const out = `public/og/blog/${lang}-${slug}.png`;
    if (!only && !process.env.FORCE && existsSync(out)) continue; // only new articles; FORCE=1 redraws all, or pass a slug
    await render(card(lang, title, kicker, tags.slice(0, 3)), out);
    const meta = await sharp(out).metadata();
    console.log(`${out} ${meta.width}x${meta.height}`);
  }
}
