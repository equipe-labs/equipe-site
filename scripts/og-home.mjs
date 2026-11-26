// Export the home social image (1200x630 PNG, also the twitter:image) into public/og/v3/<slug>.png, one per language
// (English is `en`); every page without its own image uses it too. public/og.png is a copy of the English one.
//   Left, on equipe blue: the logo, "Your AI startup team." and "Builds it. Grows it. No coding needed.", the roles.
//   Right: the web app's team chat, bleeding off the edge: the progress strip (Plan, Make, Check, Live), the PM's reply
//   and the plan card with each member's steps. The shop is Tidepool Ceramics, the live demo at tidepool.equipe.page;
//   the words are an example and carry no numbers.
// Colours are the web app's light tokens (equipe-cloud web/src STYLE :root): action #2F5BEA, accent #2550D6, text
// #0D0D0D, muted #5D5D5D, line #0000001A. Role marks: runtime/agent/brand-assets.js ROLE_GLYPHS, neutral, PM in blue.
// Product words (strip steps, role names, "n of m") follow runtime/agent/locales/*.json.
// Chrome draws at 2x and the result is scaled down to 1200x630, so text stays crisp and the file stays small enough for
// every link preview (WhatsApp skips images over about 300 KB). The folder name (v3) busts social caches; bump it when
// the look changes. Run: node scripts/og-home.mjs   (needs sharp and Google Chrome with the Mac's system fonts)
import sharp from 'sharp';
import { copyFile, mkdir, readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { LOCALES } from '../src/i18n/locales.ts';

const W = 1200, H = 630, SCALE = 2;
const DIR = 'public/og/v3';
const BLUE = '#2F5BEA';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const br = (s) => esc(s).replace(/\n/g, '<br>');
const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Apple SD Gothic Neo','Pretendard Variable','Hiragino Sans','PingFang SC',system-ui,sans-serif";
// The dark wordmark (light letters), drawn all white on the blue.
const WORDMARK = (await readFile('public/brand/wordmark-dark.svg', 'utf8')).replace('<svg ', '<svg height="40" ').replace(/<title>.*?<\/title>/, '').replace(/fill="#[0-9A-Fa-f]{6}"/g, 'fill="#FFFFFF"');
const MARK = `<svg viewBox="0 0 100 100" width="48" height="48" aria-hidden="true"><rect width="100" height="100" rx="22" fill="#FFFFFF"/><path fill="#0D0D0D" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="${BLUE}"/></svg>`;
const GLYPHS = {
  pm: '<circle cx="12" cy="12" r="9.5"/><path d="m15.8 8.2-1.6 4.9a1.8 1.8 0 0 1-1.1 1.1l-4.9 1.6 1.6-4.9a1.8 1.8 0 0 1 1.1-1.1z"/>',
  engineer: '<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M2.5 8.5h19"/><path d="M6.5 6.2h.01M9.5 6.2h.01"/>',
  designer: '<path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4z"/><path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2l3.3 12.7a1 1 0 0 0 .8.7L13 18"/><path d="m2.3 2.3 7.3 7.3"/><circle cx="11" cy="11" r="2"/>',
  qa: '<circle cx="12" cy="12" r="9.5"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
};
const glyph = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GLYPHS[k]}</svg>`;
const tile = (k) => `<span class="tile${k === 'pm' ? ' pm' : ''}">${glyph(k)}</span>`;
const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

// h: headline, sub: the line under it, chat: the app's "Chat", steps: the progress strip, fe/de: role names,
// on: progress title, who: who is working, msg: the PM's reply, plan: the plan card title, of: "2 of 4", s: three steps.
const WORDS = {
  en: { h: 'Your AI startup team.', sub: 'Builds it. Grows it.\nNo coding needed.', chat: 'Chat', steps: ['Plan', 'Make', 'Check', 'Live'], fe: 'Frontend engineer', de: 'Designer', on: 'Your shop is on its way', who: 'Kai is building · Theo is designing', msg: 'On it. Kai builds the shop, Theo designs it, then Ava checks it on phones.', plan: 'Ceramics shop for the autumn batch', of: '2 of 4', s: ['Shop with every mug and bowl', 'Checkout for small batches', 'Colors and type for the shop'] },
  ko: { h: '나만의\nAI 스타트업 팀.', sub: '만들고, 키워요.\n코딩은 몰라도 돼요.', chat: '채팅', steps: ['계획', '제작', '확인', '공개'], fe: '프론트엔드 개발자', de: '디자이너', on: '가게를 만들고 있어요', who: 'Kai 만드는 중 · Theo 디자인 중', msg: '맡겨 주세요. Kai가 가게를 만들고, Theo가 디자인하고, Ava가 폰에서 확인해요.', plan: '가을 신작 도자기 가게', of: '4단계 중 2', s: ['머그와 그릇을 모두 담은 가게', '소량 판매용 결제', '가게 색과 글꼴'] },
  ja: { h: 'あなたの\nAIスタートアップチーム。', sub: '作る。伸ばす。\nコードは要りません。', chat: 'チャット', steps: ['計画', '制作', '確認', '公開'], fe: 'フロントエンドエンジニア', de: 'デザイナー', on: 'ショップを作っています', who: 'Kai 制作中 · Theo デザイン中', msg: 'お任せください。Kaiがショップを作り、Theoがデザインし、Avaがスマホで確認します。', plan: '秋の新作の陶器ショップ', of: '2 / 4', s: ['マグとボウルを全部並べたショップ', '少量販売向けの決済', 'ショップの色と書体'] },
  'zh-CN': { h: '你的\nAI 创业团队。', sub: '帮你做出来，帮你做大。\n不用写代码。', chat: '聊天', steps: ['计划', '制作', '检查', '上线'], fe: '前端工程师', de: '设计师', on: '你的店铺正在搭建', who: 'Kai 在开发 · Theo 在设计', msg: '交给我们。Kai 搭建店铺，Theo 负责设计，Ava 在手机上检查。', plan: '秋季新品陶瓷店', of: '2 / 4', s: ['展示所有杯子和碗的店铺', '适合小批量的结账', '店铺的配色和字体'] },
  es: { h: 'Tu equipo de startup con IA.', sub: 'Lo construye. Lo hace crecer.\nSin programar.', chat: 'Chat', steps: ['Plan', 'Hacer', 'Revisar', 'Publicado'], fe: 'Ingeniero frontend', de: 'Diseñador', on: 'Tu tienda está en camino', who: 'Kai construye · Theo diseña', msg: 'Hecho. Kai construye la tienda, Theo la diseña y Ava la revisa en el móvil.', plan: 'Tienda de cerámica para la colección de otoño', of: '2 de 4', s: ['Tienda con cada taza y cuenco', 'Pago para tiradas pequeñas', 'Colores y tipografía de la tienda'] },
  'pt-BR': { h: 'Seu time de startup com IA.', sub: 'Constrói. Faz crescer.\nSem programar.', chat: 'Chat', steps: ['Plano', 'Fazer', 'Revisar', 'No ar'], fe: 'Engenheiro frontend', de: 'Designer', on: 'Sua loja está a caminho', who: 'Kai constrói · Theo desenha', msg: 'Deixa com a gente. Kai constrói a loja, Theo cuida do design e Ava testa no celular.', plan: 'Loja de cerâmica para a coleção de outono', of: '2 de 4', s: ['Loja com cada caneca e tigela', 'Checkout para pequenos lotes', 'Cores e fontes da loja'] },
  de: { h: 'Dein KI-Startup-Team.', sub: 'Baut es. Lässt es wachsen.\nOhne Programmieren.', chat: 'Chat', steps: ['Planen', 'Machen', 'Prüfen', 'Live'], fe: 'Frontend-Entwickler', de: 'Designer', on: 'Dein Shop entsteht', who: 'Kai baut · Theo gestaltet', msg: 'Mache ich. Kai baut den Shop, Theo gestaltet ihn, und Ava prüft ihn auf dem Handy.', plan: 'Keramik‑Shop für die Herbstkollektion', of: '2 von 4', s: ['Shop mit jeder Tasse und Schale', 'Checkout für kleine Auflagen', 'Farben und Schrift für den Shop'] },
  fr: { h: 'Votre équipe de startup IA.', sub: 'Elle construit. Elle fait grandir.\nSans coder.', chat: 'Discussion', steps: ['Plan', 'Création', 'Vérif.', 'En ligne'], fe: 'Ingénieur frontend', de: 'Designer', on: 'Votre boutique arrive', who: 'Kai construit · Theo dessine', msg: 'C’est parti. Kai construit la boutique, Theo s’occupe du design et Ava la teste sur mobile.', plan: 'Boutique de céramique pour la collection d’automne', of: '2 sur 4', s: ['Boutique avec chaque tasse et bol', 'Paiement pour petites séries', 'Couleurs et typo de la boutique'] },
};
const CJK = (lang) => /^(ko|ja|zh)/.test(lang);

function home(lang, m, c) {
  const cjk = CJK(lang);
  const roles = m.team.roles.map((r) => esc(r.name)).join(' · ');
  const strip = c.steps.map((s, i) => `<div class="seg${i < 1 ? ' on' : i === 1 ? ' cur' : ''}"><i></i><span>${esc(s)}</span></div>`).join('');
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: ${W}px; height: ${H}px; overflow: hidden; }
  * { box-sizing: border-box; }
  body { font-family: ${SANS}; color: #FFFFFF; position: relative; -webkit-font-smoothing: antialiased; letter-spacing: -0.011em;
    background: radial-gradient(120% 90% at 85% 0%, #4E74ED 0%, ${BLUE} 45%, #2550D6 100%); }
  .brand { position: absolute; left: 72px; top: 64px; display: flex; align-items: center; gap: 14px; }
  .l { position: absolute; left: 72px; top: 170px; width: 470px; }
  h1 { margin: 0; font-size: 76px; line-height: ${cjk ? 1.14 : 1.0}; font-weight: 700; letter-spacing: ${cjk ? '-0.03em' : '-0.045em'}; word-break: ${lang === 'ja' ? 'auto-phrase' : 'keep-all'}; text-wrap: balance; }
  .sub { margin: 26px 0 0; font-size: 28px; line-height: 1.32; color: #FFFFFFD9; font-weight: 500; letter-spacing: ${cjk ? '-0.01em' : '-0.015em'}; word-break: keep-all; }
  .foot { position: absolute; left: 72px; bottom: 62px; width: 480px; font-size: 21px; font-weight: 600; color: #FFFFFFD9; letter-spacing: -0.01em; white-space: nowrap; }
  .win { position: absolute; left: 590px; top: 76px; width: 680px; height: 640px; border-radius: 24px; background: #FFFFFF; color: #0D0D0D; box-shadow: 0 40px 90px -30px #0B1E6B99, 0 0 0 1px #FFFFFF33; overflow: hidden; }
  .bar { display: flex; align-items: center; padding: 16px 24px; border-bottom: 1px solid #0000001A; }
  .tiles { display: flex; } .tiles .tile { width: 28px; height: 28px; margin-right: -4px; } .tiles .tile svg { width: 16px; height: 16px; }
  .bar b { margin-left: 16px; font-size: 18px; font-weight: 600; }
  .tile { width: 30px; height: 30px; flex: none; border-radius: 30%; display: grid; place-items: center; background: #F4F4F4; color: #363636; box-shadow: inset 0 0 0 1px #0000001A; }
  .tile svg { width: 17px; height: 17px; }
  .tile.pm { background: #EEF2FD; color: #2550D6; box-shadow: inset 0 0 0 1px #2550D640; }
  .prog { padding: 16px 24px; border-bottom: 1px solid #0000001A; }
  .prog .t { font-size: 16px; font-weight: 600; } .prog .s { font-size: 14px; color: #5D5D5D; margin: 2px 0 14px; }
  .strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .seg i { display: block; height: 4px; border-radius: 4px; background: #0000001A; }
  .seg.on i { background: #2550D6AA; } .seg.cur i { background: linear-gradient(90deg, #2550D6AA, ${BLUE}); }
  .seg span { display: block; margin-top: 7px; font-size: 13.5px; color: #5D5D5D; } .seg.cur span { color: #2550D6; font-weight: 600; }
  .body { padding: 20px 24px; }
  .who { display: flex; align-items: center; gap: 9px; margin: 0 0 6px; font-size: 15px; } .who b, .mr b { font-weight: 600; } .r { color: #5D5D5D; }
  .msg { font-size: 15.5px; line-height: 1.45; margin: 0 0 16px; max-width: 470px; word-break: keep-all; }
  .plan { width: 440px; border-radius: 16px; background: #FFFFFF; box-shadow: inset 0 0 0 1px #0000001A; padding: 16px 18px 12px; }
  .ph { display: flex; align-items: flex-start; gap: 11px; padding-bottom: 12px; margin-bottom: 6px; border-bottom: 1px solid #0000001A; }
  .ph b { flex: 1; font-size: 15.5px; font-weight: 600; line-height: 1.3; letter-spacing: -0.012em; }
  .pc { font-size: 14px; color: #5D5D5D; white-space: nowrap; padding-top: 1px; }
  .spin { width: 22px; height: 22px; flex: none; border-radius: 50%; border: 2.5px solid #0000001A; border-top-color: ${BLUE}; border-right-color: ${BLUE}; transform: rotate(-20deg); }
  .mr { display: flex; align-items: center; gap: 10px; padding: 9px 0 5px; font-size: 14.5px; }
  .step { display: flex; align-items: center; gap: 12px; font-size: 14.5px; color: #5D5D5D; padding: 6px; margin: 0 -6px; border-radius: 9px; }
  .step.now { background: #2F5BEA14; color: #0D0D0D; font-weight: 600; }
  .ck, .sp, .ring { width: 18px; height: 18px; flex: none; margin-left: 6px; display: grid; place-items: center; border-radius: 50%; }
  .ck { background: #F4F4F4; box-shadow: inset 0 0 0 1px #0000001A; color: #363636; } .ck svg { width: 11px; height: 11px; }
  .sp { border: 2px solid #2550D633; border-top-color: ${BLUE}; transform: rotate(30deg); }
  .ring { border: 1.6px solid #5D5D5D; }
  </style></head><body>
  <div class="brand">${MARK}${WORDMARK}</div>
  <div class="l" id="l"><h1 id="h">${br(c.h)}</h1><p class="sub" id="s">${br(c.sub)}</p></div>
  <div class="foot" id="f">${roles}</div>
  <div class="win">
    <div class="bar"><span class="tiles">${['pm', 'engineer', 'designer', 'qa'].map(tile).join('')}</span><b>${esc(c.chat)}</b></div>
    <div class="prog"><div class="t">${esc(c.on)}</div><div class="s">${esc(c.who)}</div><div class="strip">${strip}</div></div>
    <div class="body">
      <div class="who">${tile('pm')}<b>Mia</b><span class="r">PM</span></div>
      <p class="msg">${esc(c.msg)}</p>
      <div class="plan">
        <div class="ph"><span class="spin"></span><b>${esc(c.plan)}</b><span class="pc">${esc(c.of)}</span></div>
        <div class="mr">${tile('engineer')}<b>Kai</b><span class="r">${esc(c.fe)}</span></div>
        <div class="step"><span class="ck">${CHECK}</span>${esc(c.s[0])}</div>
        <div class="step now"><span class="sp"></span>${esc(c.s[1])}</div>
        <div class="mr">${tile('designer')}<b>Theo</b><span class="r">${esc(c.de)}</span></div>
        <div class="step"><span class="ring"></span>${esc(c.s[2])}</div>
      </div>
    </div>
  </div>
  <script>
  (function () {
    // Long languages: the headline (then the line under it) shrinks until the column clears the roles line;
    // the roles line shrinks until it fits beside the chat.
    var l = document.getElementById('l'), h = document.getElementById('h'), s = document.getElementById('s'), f = document.getElementById('f');
    var room = ${H} - 170 - 62 - 25 - 36, size = 76, sub = 28, fs = 21;
    while ((l.offsetHeight > room || h.scrollWidth > h.clientWidth) && size > 48) { size -= 2; h.style.fontSize = size + 'px'; if (size < 64 && sub > 23) { sub -= 1; s.style.fontSize = sub + 'px'; } }
    while (f.scrollWidth > 490 && fs > 15) { fs -= 1; f.style.fontSize = fs + 'px'; }
  })();
  </script></body></html>`;
}

// Chrome draws the text with the system's San Francisco and Apple SD Gothic Neo (librsvg in sharp cannot reach them).
// The window is taller than the picture (headless Chrome's viewport can come out short of --window-size); the top
// 1200x630 is kept.
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function render(html, out) {
  if (!existsSync(CHROME)) throw new Error('Google Chrome is needed to draw the text');
  const dir = await mkdtemp(join(tmpdir(), 'og-'));
  const f = join(dir, 'og.html'), shot = join(dir, 'shot.png');
  await writeFile(f, '<!doctype html>' + html);
  const child = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--force-device-scale-factor=${SCALE}`, '--force-color-profile=srgb', `--user-data-dir=${join(dir, 'p')}`, `--window-size=${W},${H + 200}`, `--screenshot=${shot}`, `file://${f}`], { stdio: 'ignore' });
  for (let i = 0; i < 300 && !existsSync(shot); i++) await new Promise((r) => setTimeout(r, 100));
  await new Promise((r) => setTimeout(r, 400));
  child.kill('SIGKILL');
  if (!existsSync(shot)) throw new Error(`Chrome did not write ${out}`);
  await sharp(shot).extract({ left: 0, top: 0, width: W * SCALE, height: H * SCALE }).resize(W, H, { kernel: 'lanczos3' }).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(resolve(out));
  await new Promise((r) => setTimeout(r, 300)); await rm(dir, { recursive: true, force: true, maxRetries: 5 }).catch(() => {});
}

await mkdir(DIR, { recursive: true });
for (const l of LOCALES) {
  const { default: msgs } = await import(`../src/i18n/${l.code}.ts`).catch(() => ({}));
  if (!msgs && l.code !== 'en') continue; // no translation, no page, no image
  const m = msgs ?? (await import('../src/i18n/en.ts')).en;
  const out = `${DIR}/${l.slug || 'en'}.png`;
  await render(home(l.lang, m, WORDS[l.code] ?? WORDS.en), out);
  const meta = await sharp(out).metadata();
  console.log(`${out} ${meta.width}x${meta.height} ${Math.round((await readFile(out)).length / 1024)} KB`);
}
await copyFile(`${DIR}/en.png`, 'public/og.png');
