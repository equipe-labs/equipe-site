// Social images for /features/ai/ (AI in your product): one 1200x630 PNG per language -> public/og/ai-<slug>.png
// (English: ai-en.png, also used by ai.equipe.im/docs). Same look as scripts/og-blog.mjs, with the page's h1 as the headline
// and three feature names as tags, beside the sample chat (a made-up travel agency with its own monogram, no AI sparkle).
// Plain page colour: no grid, no glow. Run: node scripts/og-ai.mjs   (Chrome draws the text with the system fonts: run it on a Mac)
import sharp from 'sharp';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { AI_COPY } from '../src/data/productai.ts';
import { LOCALES } from '../src/i18n/locales.ts';

const W = 1200, H = 630;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Apple SD Gothic Neo','Hiragino Sans','PingFang SC',system-ui,sans-serif";
const WORDMARK = (await readFile('public/brand/wordmark.svg', 'utf8')).replace('<svg ', '<svg height="46" ');
const MARK = `<svg viewBox="0 0 100 100" width="64" height="64"><rect width="100" height="100" rx="22" fill="#2A2B31"/><path fill="#EFEDE7" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="#2F5BEA"/></svg>`;

function card(lang, title, kicker, tags, q, a) {
  const cjk = ['ko', 'ja', 'zh-CN'].includes(lang);
  const size = title.length > (cjk ? 34 : 62) ? (cjk ? 54 : 60) : cjk ? 62 : 70;
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: ${W}px; height: ${H}px; overflow: hidden; }
  body { font-family: ${SANS}; color: #15161A; background: #F6F5F1; position: relative; -webkit-font-smoothing: antialiased; }
  .brand { position: absolute; left: 72px; top: 60px; display: flex; align-items: center; gap: 16px; }
  .k { position: absolute; right: 72px; top: 76px; font-size: 22px; font-weight: 500; color: #4F5159; }
  h1 { position: absolute; left: 72px; right: 72px; top: 168px; margin: 0; font-size: ${size}px; line-height: ${cjk ? 1.22 : 1.06}; letter-spacing: ${cjk ? '-0.02em' : '-0.04em'}; font-weight: 700; word-break: keep-all; text-wrap: balance; }
  .t { position: absolute; left: 72px; bottom: 64px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; max-width: 440px; }
  .t span { font-size: 22px; font-weight: 600; color: #15161A; border: 1.5px solid #0A0A0C24; background: #FFFFFF; border-radius: 10px; padding: 7px 16px; }
  .chat { position: absolute; right: 72px; bottom: 64px; width: 560px; padding: 22px 24px 26px; background: #FFFFFF; border: 1.5px solid #0A0A0C1F; border-radius: 18px; }
  .who { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 1.5px solid #0A0A0C14; font-size: 22px; font-weight: 600; }
  .mono { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 10px; background: #15161A; color: #FFFFFF; font-size: 16px; font-weight: 650; }
  .me { margin: 20px 0 0 auto; width: fit-content; max-width: 80%; padding: 10px 18px; border-radius: 20px; background: #EFEEEA; font-size: 22px; }
  .ai { margin: 16px 0 0; max-width: 92%; font-size: 22px; line-height: 1.4; color: #4F5159; }
  </style></head><body>
  <div class="brand">${MARK}${WORDMARK}</div><div class="k">${esc(kicker)}</div>
  <h1>${esc(title)}</h1>
  <div class="t">${tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
  <div class="chat"><div class="who"><span class="mono">SD</span>Sunny Days Travel</div><p class="me">${esc(q)}</p><p class="ai">${esc(a)}</p></div></body></html>`;
}

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function render(html, out) {
  if (!existsSync(CHROME)) throw new Error('Google Chrome is needed to draw the text');
  const dir = await mkdtemp(join(tmpdir(), 'oga-'));
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

for (const l of LOCALES) {
  const c = AI_COPY[l.code];
  const out = `public/og/ai-${l.slug || 'en'}.png`;
  const tags = [c.features.support.title, c.features.translate.title, c.features.reviews.title];
  await render(card(l.lang, c.page.h1.replace(/[.。]$/, ''), `equipe.im${l.slug ? '/' + l.slug : ''}/features/ai`, tags, c.vis.support.q, c.vis.support.a), out);
  const meta = await sharp(out).metadata();
  console.log(`${out} ${meta.width}x${meta.height}`);
}
