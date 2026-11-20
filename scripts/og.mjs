// Export the social images: one 1200x630 PNG per language -> public/og/<slug>.png
// (English is `en`). The tagline is each language's meta.ogImageAlt without the "equipe — " prefix.
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

function svg(lang, tagline) {
  const lines = wrap(tagline);
  const y0 = lines.length > 1 ? 488 : 520;
  const text = lines
    .map((l, i) => `<text x="80" y="${y0 + i * 46}" font-family="${SANS}" font-size="${SIZE}" fill="#4F5159">${esc(l)}</text>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="630" viewBox="0 0 1200 630" lang="${lang}"><rect width="1200" height="630" fill="#F6F5F1"/><g transform="translate(80 170) scale(1.6)"><rect width="100" height="100" rx="22" fill="#0A0A0C"/><path fill="#EFEDE7" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="#3F6FF5"/></g><text x="80" y="${lines.length > 1 ? 420 : 450}" font-family="${SANS}" font-size="96" font-weight="700" letter-spacing="-2" fill="#15161A">equipe</text>${text}<text x="80" y="590" font-family="'SF Mono',ui-monospace,Menlo,monospace" font-size="26" fill="#1D4ED8">equipe.im</text></svg>`;
}

// Chrome draws the text with the system's San Francisco (librsvg in sharp cannot reach it); without Chrome, sharp renders with Inter or a fallback.
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function render(svgText, out) {
  if (!existsSync(CHROME)) return void (await sharp(Buffer.from(svgText), { density: 96 }).resize(W, 630).png().toFile(out));
  const dir = await mkdtemp(join(tmpdir(), 'og-'));
  const html = join(dir, 'og.html');
  await writeFile(html, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;overflow:hidden}svg{display:block}</style>${svgText}`);
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
  await render(svg(l.lang, tagline), out);
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
