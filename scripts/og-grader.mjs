// Social images for the free tools: public/og/grader/<0..100>.png and na.png (a shared website report shows its own score;
// cloud platform/src/free-tools.js sharePage picks the file), plus the page images public/og/tools/{grader,ai-visibility,tools}.png.
// No language on the score images (one set for every locale): the number, the five areas as small marks, the address.
// Run: node scripts/og-grader.mjs [--only=72]   (Chrome draws the text with the system fonts: run it on a Mac)
import { mkdir } from 'node:fs/promises';
import { render, report, theme, baseCss, logo, esc, BLUE } from './og-shared.mjs';

const T = theme('light');
const only = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7);
await mkdir('public/og/grader', { recursive: true });
await mkdir('public/og/tools', { recursive: true });

// The gauge: a full ring with a small gap at the bottom, equipe blue for the score, a soft track for the rest.
function gauge(score, size = 380) {
  const r = 160, c = 2 * Math.PI * r, gap = 0.06, track = c * (1 - gap), val = score == null ? 0 : track * (score / 100);
  const rot = 90 + (gap * 360) / 2;
  return `<svg viewBox="0 0 400 400" width="${size}" height="${size}" aria-hidden="true"><g transform="rotate(${rot} 200 200)" fill="none" stroke-linecap="round" stroke-width="30">
    <circle cx="200" cy="200" r="${r}" stroke="${T.sunken}" stroke-dasharray="${track} ${c}"/>
    ${val > 0 ? `<circle cx="200" cy="200" r="${r}" stroke="${BLUE}" stroke-dasharray="${val} ${c}"/>` : ''}</g></svg>`;
}

const css = `${baseCss(T)}
  .g { position: absolute; right: 96px; top: 125px; width: 380px; height: 380px; }
  .n { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; }
  .n b { display: block; font-size: 148px; line-height: 1; font-weight: 700; letter-spacing: -0.05em; font-variant-numeric: tabular-nums; }
  .n i { display: block; margin-top: 6px; font-style: normal; font-size: 30px; font-weight: 600; color: ${T.mute}; }
  h1 { position: absolute; left: 72px; top: 196px; width: 600px; margin: 0; font-size: 68px; line-height: 1.04; font-weight: 700; letter-spacing: -0.04em; }
  .tags { position: absolute; left: 72px; top: 382px; width: 600px; display: flex; flex-wrap: wrap; gap: 12px; }
  .tags span { font-size: 22px; font-weight: 600; color: ${T.text2}; background: #FFFFFF; border: 1.5px solid ${T.line}; border-radius: 10px; padding: 7px 16px; }
  .u { position: absolute; left: 72px; bottom: 60px; font-size: 24px; font-weight: 600; color: ${BLUE}; }`;
const AREAS = ['Speed', 'Search', 'Mobile', 'Accessibility', 'AI'];

const scorePage = (score, head) => `<html lang="en"><head><meta charset="utf-8"><style>${css}</style></head><body><div class="glow"></div>${logo(false, 48, 40)}
  <h1>${esc(head)}</h1><div class="tags">${AREAS.map((a) => `<span>${a}</span>`).join('')}</div>
  <div class="g">${gauge(score)}<div class="n"><div><b>${score == null ? '?' : score}</b><i>/ 100</i></div></div></div>
  <p class="u">equipe.im/grader</p></body></html>`;

const textPage = (head, tags, url, big) => `<html lang="en"><head><meta charset="utf-8"><style>${css}
  h1 { width: 1000px; top: 190px; font-size: 76px; } .tags { top: 400px; width: 1000px; }</style></head><body><div class="glow"></div>${logo(false, 48, 40)}
  <h1>${esc(head)}</h1><div class="tags">${tags.map((a) => `<span>${esc(a)}</span>`).join('')}</div><p class="u">${esc(url)}</p>${big || ''}</body></html>`;

const scores = only ? [only === 'na' ? null : Number(only)] : [null, ...Array.from({ length: 101 }, (_, i) => i)];
for (const s of scores) {
  const out = `public/og/grader/${s == null ? 'na' : s}.png`;
  await render(scorePage(s, 'Website report'), out);
  if (s == null || s % 25 === 0) await report(out);
}
if (!only) {
  await render(scorePage(null, 'How good is your website?'), 'public/og/tools/grader.png'); await report('public/og/tools/grader.png');
  await render(textPage('Does ChatGPT know your business?', ['ChatGPT', 'Claude', 'Free check'], 'equipe.im/ai-visibility'), 'public/og/tools/ai-visibility.png'); await report('public/og/tools/ai-visibility.png');
  await render(textPage('Free tools for your business', ['Website grader', 'AI visibility', 'No sign-up'], 'equipe.im/tools'), 'public/og/tools/tools.png'); await report('public/og/tools/tools.png');
}
// Palette PNGs: about a quarter of the size, no visible change (flat colours and text).
import sharp from 'sharp';
import { readdir, writeFile } from 'node:fs/promises';
for (const d of ['public/og/grader', 'public/og/tools']) for (const f of await readdir(d)) {
  const p = `${d}/${f}`; await writeFile(p, await sharp(p).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer());
}
