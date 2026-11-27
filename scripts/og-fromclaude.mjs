// Social images for /from-claude/: public/og/tools/from-claude-<locale slug or en>.png.
// The page's own headline, and paste -> live: a code card, an arrow, the app running at its own equipe.page address.
// Run: node scripts/og-fromclaude.mjs   (Chrome draws the text with the system fonts: run it on a Mac)
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { render, report, theme, baseCss, logo, esc, BLUE, CJK } from './og-shared.mjs';

const T = theme('light');
await mkdir('public/og/tools', { recursive: true });
const LOCS = [['en', 'en'], ['ko', 'ko'], ['ja', 'ja'], ['zh-cn', 'zh-CN'], ['es', 'es'], ['pt-br', 'pt-BR'], ['de', 'de'], ['fr', 'fr']];

// The headline and the "live" word come from the locale files (plain TS objects): read them as text.
async function words(code) {
  const src = await readFile(`src/data/aitool/${code}.ts`, 'utf8');
  const page = src.slice(src.indexOf("'from-claude': {"));
  const h1 = (page.match(/\bh1: '((?:[^'\\]|\\.)*)'/) || [])[1].replace(/\\'/g, "'");
  const working = (src.match(/\bworking: '((?:[^'\\]|\\.)*)'/) || [])[1].replace(/\\'/g, "'");
  return { h1, working };
}
const code = [
  ['k', 'export default function'], ['f', ' Mortgage'], ['p', '() {'],
].map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join('');
const lines = [
  `<span class="k">import</span> { useState } <span class="k">from</span> <span class="s">"react"</span>;`,
  `<span class="k">import</span> { Card } <span class="k">from</span> <span class="s">"@/ui/card"</span>;`,
  '',
  code,
  `  <span class="k">const</span> [rate, setRate] = useState(<span class="n">6.5</span>);`,
  `  <span class="k">return</span> &lt;<span class="f">Card</span>&gt;…&lt;/<span class="f">Card</span>&gt;;`,
  '}',
];

for (const [slug, lc] of LOCS) {
  const w = await words(lc);
  const cjk = CJK(lc);
  const html = `<html lang="${lc}"><head><meta charset="utf-8"><style>${baseCss(T)}
    h1 { position: absolute; left: 72px; top: 168px; width: 500px; margin: 0; font-size: ${cjk ? 54 : 62}px; line-height: ${cjk ? 1.24 : 1.05}; font-weight: 700; letter-spacing: ${cjk ? '-0.02em' : '-0.04em'}; word-break: keep-all; }
    .u { position: absolute; left: 72px; bottom: 60px; font-size: 24px; font-weight: 600; color: ${BLUE}; margin: 0; }
    .code { position: absolute; left: 596px; top: 92px; width: 340px; padding: 20px 22px; border-radius: 22px; background: #F6F7F9; border: 1.5px solid ${T.line}; font: 500 14.5px/1.75 'SF Mono', Menlo, monospace; color: #3A3D45; white-space: pre; box-shadow: 0 24px 50px -32px ${T.shadow}; }
    .code .k { color: ${BLUE}; } .code .s { color: #6B7280; } .code .f { color: #0D0D0D; font-weight: 700; } .code .n { color: #0D0D0D; }
    .arrow { position: absolute; left: 604px; top: 352px; width: 56px; height: 56px; border-radius: 50%; background: ${BLUE}; display: grid; place-items: center; box-shadow: 0 12px 26px -10px ${BLUE}; z-index: 3; }
    .arrow svg { width: 28px; height: 28px; fill: none; stroke: #fff; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; }
    .win { position: absolute; right: 60px; top: 330px; width: 470px; border-radius: 22px; overflow: hidden; background: #fff; border: 1.5px solid ${T.line}; box-shadow: 0 34px 70px -30px ${T.shadow}; z-index: 2; }
    .bar { display: flex; align-items: center; gap: 12px; height: 46px; padding: 0 16px; background: #F6F7F9; border-bottom: 1.5px solid ${T.line}; }
    .dots { display: flex; gap: 6px; } .dots i { width: 10px; height: 10px; border-radius: 50%; background: #0000001F; }
    .addr { flex: 1; height: 28px; border-radius: 9px; background: #fff; border: 1.5px solid ${T.line}; display: flex; align-items: center; gap: 6px; padding: 0 12px; font-size: 15px; font-weight: 500; color: #363636; }
    .addr svg { width: 13px; height: 13px; fill: none; stroke: #363636; stroke-width: 2.4; }
    .live { display: inline-flex; align-items: center; gap: 7px; height: 28px; padding: 0 12px; border-radius: 99px; background: ${BLUE}14; color: #2550D6; font-size: 15px; font-weight: 650; }
    .live::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: ${BLUE}; }
    .app { padding: 22px 24px 24px; }
    .t { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 14px; }
    .sl { height: 8px; border-radius: 99px; background: #E5E7EB; margin: 10px 0 18px; position: relative; } .sl b { position: absolute; left: 0; top: 0; bottom: 0; width: 58%; border-radius: 99px; background: #0D0D0D; }
    .pay { border-radius: 16px; background: ${BLUE}10; padding: 14px; text-align: center; } .pay b { display: block; font-size: 34px; letter-spacing: -0.03em; color: #1E44C4; }
  </style></head><body><div class="glow"></div>${logo(false, 48, 40)}
    <h1>${esc(w.h1)}</h1>
    <div class="code">${lines.join('\n')}</div>
    <div class="arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    <div class="win"><div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="addr"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>mortgage.equipe.page</span><span class="live">${esc(w.working)}</span></div>
      <div class="app"><div class="t">Mortgage</div><div class="sl"><b></b></div><div class="pay"><b>$2,275</b></div></div></div>
    <p class="u">equipe.im/from-claude</p></body></html>`;
  const out = `public/og/tools/from-claude-${slug}.png`;
  await render(html, out);
  await writeFile(out, await sharp(out).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer());
  await report(out);
}
