// Social images for the business name generator: public/og/names/<kind>.png (a shared result shows its business type's
// image; cloud platform/src/free-names.js sharePage picks the file) and public/og/names/tool.png (the page itself).
// English only, like the grader's images: the headline, three plain tags and a domain card (no invented names).
// Run: node scripts/og-names.mjs   (Chrome draws the text with the system fonts: run it on a Mac)
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { render, report, theme, baseCss, logo, esc, BLUE } from './og-shared.mjs';

const T = theme('light');
await mkdir('public/og/names', { recursive: true });
const KINDS = {
  cafe: 'a café', bakery: 'a bakery', restaurant: 'a restaurant', beauty: 'a beauty salon', fitness: 'a fitness studio', shop: 'a shop',
  app: 'an app', agency: 'an agency', health: 'a clinic', consulting: 'a consultancy', photo: 'a photo studio', pets: 'a pet business',
  education: 'a school', home: 'a home service', other: 'a business',
};
const css = `${baseCss(T)}
  h1 { position: absolute; left: 72px; top: 178px; width: 560px; margin: 0; font-size: 66px; line-height: 1.05; font-weight: 700; letter-spacing: -0.04em; }
  .tags { position: absolute; left: 72px; top: 400px; width: 560px; display: flex; flex-wrap: wrap; gap: 12px; }
  .tags span { font-size: 22px; font-weight: 600; color: ${T.text2}; background: #FFFFFF; border: 1.5px solid ${T.line}; border-radius: 10px; padding: 7px 16px; }
  .u { position: absolute; left: 72px; bottom: 60px; font-size: 24px; font-weight: 600; color: ${BLUE}; }
  .cards { position: absolute; right: 72px; top: 150px; width: 430px; display: grid; gap: 16px; }
  .c { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 24px 26px; border-radius: 22px; background: #FFFFFF; border: 1.5px solid ${T.line}; box-shadow: 0 24px 50px -34px ${T.shadow}; }
  .c b { font-size: 30px; letter-spacing: -0.02em; }
  .c i { font-style: normal; font-size: 19px; font-weight: 600; padding: 6px 14px; border-radius: 99px; background: ${T.chip}; color: ${T.chipInk}; white-space: nowrap; }
  .c.m i { background: ${T.sunken}; color: ${T.mute}; }
  .c small { display: block; margin-top: 6px; font-size: 18px; color: ${T.mute}; }`;
const page = (head) => `<html lang="en"><head><meta charset="utf-8"><style>${css}</style></head><body><div class="glow"></div>${logo(false, 48, 40)}
  <h1>${esc(head)}</h1><div class="tags"><span>10 names</span><span>Live .com check</span><span>Logo</span></div>
  <div class="cards">
    <div class="c"><div><b>yourname.com</b><small>per year, renewal shown</small></div><i>Available</i></div>
    <div class="c m"><div><b>yourname.co</b><small>also checked</small></div><i>Checked</i></div>
    <div class="c m"><div><b>theyourname.com</b><small>one more option</small></div><i>Checked</i></div>
  </div>
  <p class="u">equipe.im/business-name-generator</p></body></html>`;
for (const [k, what] of Object.entries(KINDS)) { await render(page(`Name ideas for ${what}`), `public/og/names/${k}.png`); }
await render(page('Find a name for your business'), 'public/og/names/tool.png');
await report('public/og/names/tool.png'); await report('public/og/names/bakery.png');
for (const f of await readdir('public/og/names')) { const p = `public/og/names/${f}`; await writeFile(p, await sharp(p).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer()); }
