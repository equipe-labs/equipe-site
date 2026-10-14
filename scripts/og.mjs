// Export the social images: one 1200x630 PNG per language -> public/og/<slug>.png
// (English is `en`). The tagline is each language's meta.ogImageAlt without the "equipe — " prefix.
// public/og.png stays as a copy of the English image for links already shared.
// Also writes public/favicon.ico (32x32 PNG in an ICO container) from public/favicon.svg.
// Run: node scripts/og.mjs   (needs sharp; CJK text uses the system's fonts, so run it on a Mac)
import sharp from 'sharp';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { LOCALES } from '../src/i18n/locales.ts';

const W = 1200;
const MAX_WIDTH = 1040;
const SIZE = 36;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Rough advance width: full-width for CJK, about half for the rest.
const wide = (ch) => /[ᄀ-ᇿ⺀-꓏가-힯豈-﫿＀-￯]/.test(ch);
const width = (s) => [...s].reduce((n, ch) => n + (wide(ch) ? SIZE : SIZE * 0.52), 0);

function wrap(text) {
  const tokens = text.match(/[⺀-꓏가-힯＀-￯]|[^\s⺀-꓏가-힯＀-￯]+\s*|\s+/gu) ?? [text];
  const lines = [''];
  for (const tok of tokens) {
    const cur = lines.at(-1);
    if (cur && width(cur + tok.trimEnd()) > MAX_WIDTH) lines.push(tok.trimStart());
    else lines[lines.length - 1] = cur + tok;
  }
  return lines.map((l) => l.trim());
}

const SANS = "Inter,'Apple SD Gothic Neo','Hiragino Sans','PingFang SC',system-ui,sans-serif";

function svg(lang, tagline) {
  const lines = wrap(tagline);
  const y0 = lines.length > 1 ? 488 : 520;
  const text = lines
    .map((l, i) => `<text x="80" y="${y0 + i * 46}" font-family="${SANS}" font-size="${SIZE}" fill="#57544C">${esc(l)}</text>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="630" viewBox="0 0 1200 630" lang="${lang}"><rect width="1200" height="630" fill="#FAF8F4"/><g fill="#1D4ED8"><circle cx="150" cy="215" r="34" opacity=".55"/><circle cx="238" cy="215" r="34" opacity=".55"/><circle cx="150" cy="303" r="34" opacity=".55"/><circle cx="238" cy="303" r="34"/></g><text x="80" y="${lines.length > 1 ? 420 : 450}" font-family="${SANS}" font-size="96" font-weight="700" letter-spacing="-2" fill="#1A1A17">equipe</text>${text}<text x="80" y="590" font-family="ui-monospace,monospace" font-size="26" fill="#1D4ED8">equipe.im</text></svg>`;
}

await mkdir('public/og', { recursive: true });
for (const l of LOCALES) {
  const { default: msgs } = await import(`../src/i18n/${l.code}.ts`).catch(() => ({}));
  const m = msgs ?? (await import('../src/i18n/en.ts')).en;
  if (!msgs && l.code !== 'en') continue; // no translation, no page, no image
  const tagline = m.meta.ogImageAlt.replace(/^equipe\s*—\s*/, '');
  const name = l.slug || 'en';
  const out = `public/og/${name}.png`;
  await sharp(Buffer.from(svg(l.lang, tagline)), { density: 96 }).resize(W, 630).png().toFile(out);
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
