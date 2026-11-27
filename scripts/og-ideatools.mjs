// Social images for the startup idea validator and the privacy policy generator, one per language:
//   public/og/tools/idea-validator-<slug>.png, public/og/tools/privacy-policy-generator-<slug>.png (the pages)
//   public/og/idea/<verdict>-<slug>.png (a shared idea check: cloud platform/src/free-tools.js ideaSharePage picks it)
// The words come from the tools' own copy files (src/data/ideacheck/i18n, src/data/privacygen/i18n).
// Run: node scripts/og-ideatools.mjs   (Chrome draws the text with the system fonts: run it on a Mac)
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { render, report, theme, baseCss, logo, esc, CJK, BLUE } from './og-shared.mjs';

const T = theme('light');
const LOCALES = [['en', ''], ['ko', 'ko'], ['ja', 'ja'], ['zh-CN', 'zh-cn'], ['es', 'es'], ['pt-BR', 'pt-br'], ['de', 'de'], ['fr', 'fr']];
const LANG = { en: 'en', ko: 'ko', ja: 'ja', 'zh-CN': 'zh-CN', es: 'es', 'pt-BR': 'pt-BR', de: 'de', fr: 'fr' };
await mkdir('public/og/idea', { recursive: true });
await mkdir('public/og/tools', { recursive: true });

const css = (cjk) => `${baseCss(T)}
  h1 { position: absolute; left: 72px; top: 178px; width: 1040px; margin: 0; font-size: ${cjk ? 66 : 74}px; line-height: ${cjk ? 1.22 : 1.06}; font-weight: 700; letter-spacing: ${cjk ? '-0.02em' : '-0.04em'}; word-break: keep-all; }
  .pill { position: absolute; left: 72px; top: 160px; display: inline-flex; align-items: center; gap: 12px; height: 56px; padding: 0 24px; border-radius: 99px; font-size: 28px; font-weight: 700; }
  .pill svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round; }
  .pill.promising { background: ${T.chip}; color: ${T.chipInk}; } .pill.test_first { background: ${T.sunken}; color: ${T.ink}; } .pill.rethink { background: #F59E0B26; color: #B45309; }
  .v h1 { top: 250px; font-size: ${cjk ? 58 : 64}px; }
  .tags { position: absolute; left: 72px; bottom: 120px; width: 1060px; display: flex; flex-wrap: wrap; gap: 12px; }
  .tags span { font-size: 22px; font-weight: 600; color: ${T.text2}; background: #FFFFFF; border: 1.5px solid ${T.line}; border-radius: 10px; padding: 7px 16px; }
  .u { position: absolute; left: 72px; bottom: 56px; margin: 0; font-size: 24px; font-weight: 600; color: ${BLUE}; }`;
const ICON = { promising: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', test_first: '<path d="M7 12h10"/>', rethink: '<path d="M4 22V4"/><path d="M4 4h12l-2 4 2 4H4"/>' };
const page = (lang, body, cls = '') => `<html lang="${lang}"><head><meta charset="utf-8"><style>${css(CJK(lang))}</style></head><body class="${cls}"><div class="glow"></div>${logo(false, 48, 40)}${body}</body></html>`;
const tags = (xs) => `<div class="tags">${xs.map((x) => `<span>${esc(x)}</span>`).join('')}</div>`;

for (const [code, slug] of LOCALES) {
  const lang = LANG[code], s = slug || 'en';
  const I = (await import(`../src/data/ideacheck/i18n/${code}.ts`)).default;
  const P = (await import(`../src/data/privacygen/i18n/${code}.ts`)).default;
  const R = I.result;
  const ideaTags = [R.who, R.competitors, R.risk, R.plan];
  let out = `public/og/tools/idea-validator-${s}.png`;
  await render(page(lang, `<h1>${esc(I.page.h1)}</h1>${tags(ideaTags)}<p class="u">equipe.im/tools/idea-validator</p>`), out); await report(out);
  for (const v of ['promising', 'test_first', 'rethink']) {
    out = `public/og/idea/${v}-${s}.png`;
    await render(page(lang, `<span class="pill ${v}"><svg viewBox="0 0 24 24">${ICON[v]}</svg>${esc(R.verdicts[v].title)}</span><h1>${esc(I.hub.name)}</h1>${tags(ideaTags)}<p class="u">equipe.im/tools/idea-validator</p>`, 'v'), out); await report(out);
  }
  out = `public/og/tools/privacy-policy-generator-${s}.png`;
  await render(page(lang, `<h1>${esc(P.page.h1)}</h1>${tags(['GDPR', 'CCPA', 'PIPA', P.out.md, P.out.html])}<p class="u">equipe.im/tools/privacy-policy-generator</p>`), out); await report(out);
}
// Palette PNGs: about a quarter of the size, no visible change (flat colours and text).
for (const d of ['public/og/idea', 'public/og/tools']) for (const f of await readdir(d)) {
  if (!/^(idea-validator|privacy-policy-generator|promising|test_first|rethink)-/.test(f)) continue;
  const p = `${d}/${f}`; await writeFile(p, await sharp(p).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer());
}
