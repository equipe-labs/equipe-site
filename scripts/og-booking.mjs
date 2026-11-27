// Social images for the free booking page maker: public/og/tools/booking-page-<locale slug or en>.png.
// The page's own headline next to a small booking card (services, a day strip, times), drawn in equipe blue.
// Run: node scripts/og-booking.mjs   (Chrome draws the text with the system fonts: run it on a Mac)
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { render, report, theme, baseCss, logo, esc, BLUE, CJK } from './og-shared.mjs';

const T = theme('light');
await mkdir('public/og/tools', { recursive: true });
const LOCS = [['en', 'en'], ['ko', 'ko'], ['ja', 'ja'], ['zh-cn', 'zh-CN'], ['es', 'es'], ['pt-br', 'pt-BR'], ['de', 'de'], ['fr', 'fr']];

// The headline and sample business come from the locale files (plain TS objects): read them as text.
async function words(code) {
  const src = await readFile(`src/data/bookingpage/${code}.ts`, 'utf8');
  const pick = (k) => (src.match(new RegExp(`\\b${k}: '((?:[^'\\\\]|\\\\.)*)'`)) || [])[1]?.replace(/\\'/g, "'") || '';
  const svc = [...src.matchAll(/\{ n: '((?:[^'\\]|\\.)*)', d: (\d+), p: '((?:[^'\\]|\\.)*)' \}/g)].map((m) => ({ n: m[1].replace(/\\'/g, "'"), p: m[3] }));
  return { h1: pick('h1'), name: src.match(/sample: \{\s*name: '((?:[^'\\]|\\.)*)'/)[1].replace(/\\'/g, "'"), book: pick('book'), svc };
}

for (const [slug, code] of LOCS) {
  const w = await words(code);
  const cjk = CJK(code);
  const days = Array.from({ length: 5 }, (_, i) => new Date(Date.UTC(2026, 11, 7 + i)));
  const fD = new Intl.DateTimeFormat(code, { weekday: 'short', timeZone: 'UTC' });
  const html = `<html lang="${code}"><head><meta charset="utf-8"><style>${baseCss(T)}
    h1 { position: absolute; left: 72px; top: 170px; width: 560px; margin: 0; font-size: ${cjk ? 60 : 70}px; line-height: ${cjk ? 1.22 : 1.04}; font-weight: 700; letter-spacing: ${cjk ? '-0.02em' : '-0.04em'}; word-break: keep-all; }
    .u { position: absolute; left: 72px; bottom: 60px; font-size: 24px; font-weight: 600; color: ${BLUE}; margin: 0; }
    .card { position: absolute; right: 72px; top: 70px; width: 440px; padding: 28px; border-radius: 28px; background: #FFFFFF; border: 1.5px solid ${T.line}; box-shadow: 0 30px 60px -30px ${T.shadow}; }
    .nm { font-size: 26px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 18px; }
    .sv { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 16px; border: 1.5px solid ${T.line}; margin-bottom: 10px; font-size: 19px; }
    .sv b { flex: 1; font-weight: 600; } .sv span { font-weight: 650; }
    .sv i { width: 22px; height: 22px; border-radius: 50%; border: 1.5px solid ${T.line}; }
    .sv.on { border-color: ${BLUE}; background: ${BLUE}12; } .sv.on i { background: ${BLUE}; border-color: ${BLUE}; }
    .ds { display: flex; gap: 8px; margin: 16px 0 12px; } .d { flex: 1; text-align: center; padding: 10px 0; border-radius: 14px; border: 1.5px solid ${T.line}; font-size: 15px; color: ${T.mute}; }
    .d b { display: block; font-size: 21px; color: ${T.ink}; } .d.on { background: ${BLUE}; border-color: ${BLUE}; color: #fff; } .d.on b { color: #fff; }
    .bt { margin-top: 14px; height: 54px; border-radius: 16px; background: ${BLUE}; color: #fff; display: grid; place-items: center; font-size: 20px; font-weight: 650; }
  </style></head><body><div class="glow"></div>${logo(false, 48, 40)}
    <h1>${esc(w.h1)}</h1>
    <div class="card"><div class="nm">${esc(w.name)}</div>
      ${w.svc.slice(0, 3).map((s, i) => `<div class="sv${i === 0 ? ' on' : ''}"><i></i><b>${esc(s.n)}</b><span>${esc(s.p)}</span></div>`).join('')}
      <div class="ds">${days.map((d, i) => `<div class="d${i === 1 ? ' on' : ''}">${esc(fD.format(d))}<b>${d.getUTCDate()}</b></div>`).join('')}</div>
      <div class="bt">${esc(w.book)}</div></div>
    <p class="u">equipe.im/tools/booking-page</p></body></html>`;
  const out = `public/og/tools/booking-page-${slug}.png`;
  await render(html, out);
  await writeFile(out, await sharp(out).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer());
  await report(out);
}
