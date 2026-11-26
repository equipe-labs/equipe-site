// Social images for blog articles: one 1200x630 PNG per article and language -> public/og/blog/v2/<lang>-<slug>.png
// Same look as the home image (scripts/og-home.mjs): equipe blue with the soft glow, the white logo, the article title
// large in white, the article's category as a small label (sentence case), and the roles at the bottom.
// The folder name (v2) busts social caches; bump it when the look changes.
// Run: node scripts/og-blog.mjs [slug]   (FORCE=1 redraws all; Chrome draws the text with the Mac's system fonts)
import { mkdir, readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { BASE_CSS, CJK, esc, glyph, logo, render, report } from './og-shared.mjs';

const DIR = 'public/og/blog/v2';
const only = process.argv[2];

// Categories and their words come from src/data/blog.ts (it imports astro:content, so it is read as text).
const BLOG_SRC = await readFile('src/data/blog.ts', 'utf8');
const CATEGORY_TAGS = Object.fromEntries([...BLOG_SRC.matchAll(/^\s+(compare|money|safety|grow|build): \[([^\]]*)\]/gm)].map(([, k, v]) => [k, v.split(',').map((x) => x.trim().replace(/'/g, ''))]));
const categoryOf = (tags) => Object.keys(CATEGORY_TAGS).find((c) => tags.some((t) => CATEGORY_TAGS[c].includes(t))) ?? 'basics';
const catLabel = (lang, c) => {
  const seg = BLOG_SRC.slice(BLOG_SRC.indexOf(`  ${lang}: {`, BLOG_SRC.indexOf('export const BLOG_UI')));
  return seg.match(new RegExp(`\\b${c}: '([^']*)'`))[1];
};

function card(lang, title, label, site) {
  const cjk = CJK(lang);
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>${BASE_CSS}
  .cat { position: absolute; right: 72px; top: 70px; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; padding: 8px 18px; border-radius: 99px; background: #FFFFFF26; box-shadow: inset 0 0 0 1px #FFFFFF40; }
  .t { position: absolute; left: 72px; right: 96px; top: 184px; height: 320px; display: flex; align-items: center; }
  h1 { margin: 0; font-size: 80px; font-weight: 700; line-height: ${cjk ? 1.18 : 1.04}; letter-spacing: ${cjk ? '-0.03em' : '-0.042em'}; word-break: keep-all; overflow-wrap: break-word; text-wrap: balance; }
  .foot { position: absolute; left: 72px; right: 72px; bottom: 60px; display: flex; align-items: center; justify-content: space-between; font-size: 22px; font-weight: 600; color: #FFFFFFD9; letter-spacing: -0.01em; }
  .tiles { display: flex; gap: 8px; }
  .tile { width: 40px; height: 40px; border-radius: 30%; display: grid; place-items: center; background: #FFFFFF1F; box-shadow: inset 0 0 0 1px #FFFFFF33; color: #FFFFFF; }
  .tile.pm { background: #FFFFFF; color: #2550D6; box-shadow: none; }
  .tile svg { width: 22px; height: 22px; }
  </style></head><body><div class="glow"></div>
  ${logo()}${label ? `<div class="cat">${esc(label)}</div>` : ''}
  <div class="t"><h1 id="h">${esc(title)}</h1></div>
  <div class="foot"><span>${esc(site)}</span><span class="tiles">${['pm', 'engineer', 'designer', 'qa', 'data'].map((k) => `<span class="tile${k === 'pm' ? ' pm' : ''}">${glyph(k)}</span>`).join('')}</span></div>
  <script>
  (function () { // long titles shrink until they fit the box (at most four lines)
    var h = document.getElementById('h'), size = 80;
    while ((h.offsetHeight > 320 || h.scrollWidth > h.clientWidth) && size > 52) { size -= 2; h.style.fontSize = size + 'px'; }
  })();
  </script></body></html>`;
}

const front = (src) => {
  const m = src.match(/^---\n([\s\S]*?)\n---/)[1];
  const title = m.match(/^title:\s*"?(.*?)"?\s*$/m)[1];
  const tags = JSON.parse(m.match(/^tags:\s*(\[.*\])\s*$/m)[1]);
  return { title: title.replace(/\\"/g, '"'), tags };
};
await mkdir(DIR, { recursive: true });
for (const lang of ['en', 'ko']) {
  const site = lang === 'en' ? 'equipe.im/blog' : 'equipe.im/ko/blog';
  for (const file of (await readdir(`src/content/blog/${lang}`)).filter((x) => x.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '');
    if (only && only !== slug) continue;
    const { title, tags } = front(await readFile(`src/content/blog/${lang}/${file}`, 'utf8'));
    const out = `${DIR}/${lang}-${slug}.png`;
    if (!only && !process.env.FORCE && existsSync(out)) continue; // only new articles; FORCE=1 redraws all, or pass a slug
    await render(card(lang, title, catLabel(lang, categoryOf(tags)), site), out);
    await report(out);
  }
}
