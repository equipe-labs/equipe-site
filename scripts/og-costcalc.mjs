// Social images for the app cost calculator: one 1200x630 PNG per language for the calculator, and one per language and
// app type for the type pages (where shared estimates open) -> public/og/costcalc/<lang>[-<type>].png
// Same look as the other social images (og-shared.mjs): white, soft glow, the logo, the title large, then the three
// columns with the type's default estimate; equipe's column is the one tinted blue.
// Run: node scripts/og-costcalc.mjs   (FORCE=1 redraws all; draws only missing files otherwise)
import { mkdir } from 'node:fs/promises';
import { existsSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';
import { baseCss, theme, CJK, esc, logo, render, report } from './og-shared.mjs';
import { TYPES, MODEL, DEFAULT_PICK, estimate, PLAN_MONTH_USD } from '../src/data/costcalc/model.ts';

const DIR = 'public/og/costcalc';
const T = theme();
const LOCALES = [['en', 'en', 'en'], ['ko', 'ko', 'ko'], ['ja', 'ja', 'ja'], ['zh-cn', 'zh-CN', 'zh-CN'], ['es', 'es', 'es'], ['pt-br', 'pt-BR', 'pt-BR'], ['de', 'de', 'de'], ['fr', 'fr', 'fr']];
const usd = (n) => n.toLocaleString('en-US');
const rng = (a, b) => (a === b ? `$${usd(a)}` : `$${usd(a)}–$${usd(b)}`);
const fill = (s, v) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));

function card(lang, c, title, e) {
  const cjk = CJK(lang);
  const col = (h, big, sub, eq) => `<div class="col${eq ? ' eq' : ''}"><div class="h">${esc(h)}</div><div class="big">${esc(big)}</div><div class="s">${esc(sub)}</div></div>`;
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>${baseCss(T)}
  .t { position: absolute; left: 72px; right: 72px; top: 150px; height: 160px; display: flex; align-items: center; }
  h1 { margin: 0; font-size: 64px; font-weight: 700; line-height: ${cjk ? 1.2 : 1.05}; letter-spacing: ${cjk ? '-0.03em' : '-0.04em'}; word-break: keep-all; text-wrap: balance; }
  .cols { position: absolute; left: 72px; right: 72px; bottom: 64px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .col { padding: 26px 26px 24px; border-radius: 24px; background: ${T.sunken}; box-shadow: inset 0 0 0 1px ${T.line}; }
  .col.eq { background: ${T.chip}; box-shadow: inset 0 0 0 1.5px ${T.chipLine}; }
  .h { font-size: 22px; font-weight: 600; color: ${T.text2}; }
  .big { margin-top: 14px; font-size: 36px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .eq .big { color: ${T.chipInk}; }
  .s { margin-top: 8px; font-size: 19px; color: ${T.mute}; }
  </style></head><body><div class="glow"></div>${logo(false)}
  <div class="t"><h1 id="h">${esc(title)}</h1></div>
  <div class="cols">
    ${col(c.cols.agency.title, rng(e.agency[0], e.agency[1]), c.cols.agency.sub, false)}
    ${col(c.cols.diy.title, rng(e.diy[0], e.diy[1]), c.cols.diy.sub, false)}
    ${col(c.cols.equipe.title, `$${usd(Math.round(e.credits[0] / 100))}–$${usd(Math.round(e.credits[1] / 100))}`, `+ $${PLAN_MONTH_USD}/mo`, true)}
  </div>
  <script>(function(){var h=document.getElementById('h'),s=64;while(h.offsetHeight>160&&s>40){s-=2;h.style.fontSize=s+'px';}})();</script>
  </body></html>`;
}

await mkdir(DIR, { recursive: true });
for (const [slug, code, lang] of LOCALES) {
  const c = (await import(`../src/data/costcalc/i18n/${code}.ts`)).default;
  const jobs = [[`${DIR}/${slug}.png`, c.page.h1, estimate(DEFAULT_PICK('website'))]];
  for (const t of TYPES) jobs.push([`${DIR}/${slug}-${t}.png`, fill(c.typePage.h1, { Type: c.types[t].name, a: c.types[t].a }), estimate(DEFAULT_PICK(t))]);
  for (const [out, title, e] of jobs) {
    if (process.env.ONLY && !out.includes(process.env.ONLY)) continue; // ONLY=marketplace redraws just those
    if (!process.env.FORCE && !process.env.ONLY && existsSync(out)) continue;
    await render(card(lang, c, title, e), out);
    // 88 images: a 128-colour palette keeps each near 45 KB with no visible change.
    writeFileSync(out, await sharp(out).png({ palette: true, quality: 90, effort: 10, colors: 128 }).toBuffer());
    await report(out);
  }
}
void MODEL;
