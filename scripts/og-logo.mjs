// Social images for the logo maker page: public/og/logo/tool-<locale>.png. The three marks on the right are real outputs
// of the logo maker's quality check (2026-11-28: a Korean-French bakery, a dog groomer, a bike workshop's lettermark),
// kept in scripts/og-logo-samples. A shared logo's image is made by the platform from the logo itself (free-logo.js ogPng).
// Run: node scripts/og-logo.mjs   (Chrome draws the text with the system fonts: run it on a Mac)
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { render, report, theme, baseCss, logo, esc, BLUE } from './og-shared.mjs';

const T = theme('light');
await mkdir('public/og/logo', { recursive: true });
const mark = async (f) => (await readFile(`scripts/og-logo-samples/${f}.svg`, 'utf8')).replace(/^<svg /, '<svg width="96" height="96" ');
const M = { bakery: await mark('bakery'), groomer: await mark('groomer'), bikes: await mark('bikes') };
const L = {
  en: ['Make a logo in a minute', ['Vector logos', 'Name spelled right', 'Free brand kit']],
  ko: ['1분 만에 로고 만들기', ['벡터 로고', '철자 걱정 없는 이름', '무료 브랜드 키트']],
  ja: ['1分でロゴを作る', ['ベクターロゴ', '正しい綴りの店名', '無料ブランドキット']],
  'zh-cn': ['一分钟做好 Logo', ['矢量 Logo', '店名不会拼错', '免费品牌套件']],
  es: ['Crea un logo en un minuto', ['Logos vectoriales', 'Nombre bien escrito', 'Kit de marca gratis']],
  'pt-br': ['Crie um logo em um minuto', ['Logos em vetor', 'Nome escrito certo', 'Kit de marca grátis']],
  de: ['Ein Logo in einer Minute', ['Vektor-Logos', 'Name richtig geschrieben', 'Gratis Brand-Kit']],
  fr: ['Un logo en une minute', ['Logos vectoriels', 'Nom bien écrit', 'Kit de marque gratuit']],
};
const css = `${baseCss(T)}
  h1 { position: absolute; left: 72px; top: 178px; width: 560px; margin: 0; font-size: 64px; line-height: 1.06; font-weight: 700; letter-spacing: -0.035em; }
  .tags { position: absolute; left: 72px; top: 400px; width: 560px; display: flex; flex-wrap: wrap; gap: 12px; }
  .tags span { font-size: 22px; font-weight: 600; color: ${T.text2}; background: #FFFFFF; border: 1.5px solid ${T.line}; border-radius: 10px; padding: 7px 16px; }
  .u { position: absolute; left: 72px; bottom: 60px; font-size: 24px; font-weight: 600; color: ${BLUE}; }
  .cards { position: absolute; right: 72px; top: 120px; width: 440px; display: grid; gap: 16px; }
  .c { display: flex; align-items: center; gap: 22px; padding: 18px 26px; border-radius: 22px; background: #FFFFFF; border: 1.5px solid ${T.line}; box-shadow: 0 24px 50px -34px ${T.shadow}; }
  .c b { font-size: 32px; letter-spacing: -0.02em; }
  .c.s b { font-family: Georgia, 'Times New Roman', serif; font-weight: 700; }`;
for (const [loc, [head, tags]] of Object.entries(L)) {
  const html = `<html lang="${loc}"><head><meta charset="utf-8"><style>${css}</style></head><body><div class="glow"></div>${logo(false, 48, 40)}
  <h1>${esc(head)}</h1><div class="tags">${tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
  <div class="cards">
    <div class="c s">${M.bakery}<b>Maison Hana</b></div>
    <div class="c">${M.groomer}<b>Fluff &amp; Co</b></div>
    <div class="c">${M.bikes}<b>Northside Cycles</b></div>
  </div>
  <p class="u">equipe.im/logo-maker</p></body></html>`;
  const out = `public/og/logo/tool-${loc === 'en' ? 'en' : loc}.png`;
  await render(html, out);
  await writeFile(out, await sharp(out).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer());
}
await report('public/og/logo/tool-en.png');
