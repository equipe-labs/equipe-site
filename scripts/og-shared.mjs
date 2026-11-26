// The parts every equipe social image shares (scripts/og.mjs, scripts/og-blog.mjs; scripts/og-home.mjs draws the same
// look): equipe blue with the soft glow from the home hero, the white logo, the system fonts and the Chrome renderer.
// Chrome draws at 2x and the result is scaled down to 1200x630, so text stays crisp at every preview size.
import sharp from 'sharp';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

export const W = 1200, H = 630, SCALE = 2;
export const BLUE = '#2F5BEA';
export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export const br = (s) => esc(s).replace(/\n/g, '<br>');
export const CJK = (lang) => /^(ko|ja|zh)/.test(lang);
export const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Apple SD Gothic Neo','Pretendard Variable','Hiragino Sans','PingFang SC',system-ui,sans-serif";

// The dark wordmark (light letters), drawn all white on the blue.
const WORDMARK_SRC = (await readFile('public/brand/wordmark-dark.svg', 'utf8')).replace(/<title>.*?<\/title>/, '').replace(/fill="#[0-9A-Fa-f]{6}"/g, 'fill="#FFFFFF"');
export const wordmark = (h = 40) => WORDMARK_SRC.replace('<svg ', `<svg height="${h}" `);
// The app mark on a white tile: dark "e", blue dot.
export const mark = (s = 48) => `<svg viewBox="0 0 100 100" width="${s}" height="${s}" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#FFFFFF"/><path fill="#0D0D0D" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="${BLUE}"/></svg>`;
export const logo = (s = 48, h = 40) => `<div class="brand">${mark(s)}${wordmark(h)}</div>`;

// The blue page: the brand blue, lighter where the glow sits (top right), deeper at the bottom left.
export const BASE_CSS = `
  html, body { margin: 0; width: ${W}px; height: ${H}px; overflow: hidden; }
  * { box-sizing: border-box; }
  body { font-family: ${SANS}; color: #FFFFFF; position: relative; -webkit-font-smoothing: antialiased; letter-spacing: -0.011em;
    background: radial-gradient(120% 90% at 85% 0%, #4E74ED 0%, ${BLUE} 45%, #2550D6 100%); }
  .glow { position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: radial-gradient(closest-side, #FFFFFF2E, #FFFFFF00); pointer-events: none; }
  .brand { position: absolute; left: 72px; top: 64px; display: flex; align-items: center; gap: 14px; }`;

// The web app's role marks (equipe-cloud runtime/agent/brand-assets.js ROLE_GLYPHS): 24px line icons.
export const GLYPHS = {
  pm: '<circle cx="12" cy="12" r="9.5"/><path d="m15.8 8.2-1.6 4.9a1.8 1.8 0 0 1-1.1 1.1l-4.9 1.6 1.6-4.9a1.8 1.8 0 0 1 1.1-1.1z"/>',
  engineer: '<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M2.5 8.5h19"/><path d="M6.5 6.2h.01M9.5 6.2h.01"/>',
  designer: '<path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4z"/><path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2l3.3 12.7a1 1 0 0 0 .8.7L13 18"/><path d="m2.3 2.3 7.3 7.3"/><circle cx="11" cy="11" r="2"/>',
  qa: '<circle cx="12" cy="12" r="9.5"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  data: '<path d="M3.5 3.5v15a2 2 0 0 0 2 2h15"/><path d="M17.5 16.5v-7M12.5 16.5V6.5M7.5 16.5v-3"/>',
};
export const glyph = (k, w = 2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GLYPHS[k]}</svg>`;

// Chrome draws the text with the system's San Francisco and Apple SD Gothic Neo (librsvg in sharp cannot reach them).
// The window is taller than the picture (headless Chrome's viewport can come out short of --window-size); the top
// 1200x630 is kept. Run on a Mac with Google Chrome.
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
export async function render(html, out, { w = W, h = H } = {}) {
  if (!existsSync(CHROME)) throw new Error('Google Chrome is needed to draw the text');
  const dir = await mkdtemp(join(tmpdir(), 'og-'));
  const f = join(dir, 'og.html'), shot = join(dir, 'shot.png');
  await writeFile(f, '<!doctype html>' + html);
  // Chrome headless can idle after writing the screenshot: poll for the file, then stop it.
  const child = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--force-device-scale-factor=${SCALE}`, '--force-color-profile=srgb', `--user-data-dir=${join(dir, 'p')}`, `--window-size=${w},${h + 200}`, `--screenshot=${shot}`, `file://${f}`], { stdio: 'ignore' });
  for (let i = 0; i < 300 && !existsSync(shot); i++) await new Promise((r) => setTimeout(r, 100));
  await new Promise((r) => setTimeout(r, 400));
  child.kill('SIGKILL');
  if (!existsSync(shot)) throw new Error(`Chrome did not write ${out}`);
  await sharp(shot).extract({ left: 0, top: 0, width: w * SCALE, height: h * SCALE }).resize(w, h, { kernel: 'lanczos3' }).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(resolve(out));
  await new Promise((r) => setTimeout(r, 300)); await rm(dir, { recursive: true, force: true, maxRetries: 5 }).catch(() => {});
}
export const report = async (out) => { const meta = await sharp(out).metadata(); console.log(`${out} ${meta.width}x${meta.height} ${Math.round((await readFile(out)).length / 1024)} KB`); };
