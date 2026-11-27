// Social images for blog articles: one 1200x630 PNG per article and language -> public/og/blog/v3/<lang>-<slug>.png
// Same look as the home image (scripts/og-home.mjs): white with a very soft glow, the logo, the article title large in
// near-black, the article's category as a small blue chip (sentence case; the one accent), the roles at the bottom.
// The folder name (v3) busts social caches; bump it when the look changes.
// Run: node scripts/og-blog.mjs [slug]   (FORCE=1 redraws all; THEME=dark OUT=<dir> draws the dark look for previews;
// Chrome draws the text with the Mac's system fonts)
import { mkdir, readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { baseCss, theme, CJK, esc, glyph, logo, render, report } from './og-shared.mjs';

const DIR = process.env.OUT || 'public/og/blog/v3';
const T = theme(), DARK = process.env.THEME === 'dark';
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
  return `<html lang="${lang}"><head><meta charset="utf-8"><style>${baseCss(T)}
  .cat { position: absolute; right: 72px; top: 71px; font-size: 21px; font-weight: 600; letter-spacing: -0.01em; padding: 8px 18px; border-radius: 99px; color: ${T.chipInk}; background: ${T.chip}; box-shadow: inset 0 0 0 1px ${T.chipLine}; }
  .t { position: absolute; left: 72px; right: 96px; top: 184px; height: 320px; display: flex; align-items: center; }
  h1 { margin: 0; font-size: 80px; font-weight: 700; line-height: ${cjk ? 1.18 : 1.04}; letter-spacing: ${cjk ? '-0.03em' : '-0.042em'}; word-break: keep-all; overflow-wrap: break-word; text-wrap: balance; }
  .foot { position: absolute; left: 72px; right: 72px; bottom: 60px; display: flex; align-items: center; justify-content: space-between; font-size: 22px; font-weight: 600; color: ${T.mute}; letter-spacing: -0.01em; }
  .tiles { display: flex; gap: 8px; }
  .tile { width: 40px; height: 40px; border-radius: 30%; display: grid; place-items: center; background: ${T.sunken}; box-shadow: inset 0 0 0 1px ${T.line}; color: ${T.text2}; }
  .tile svg { width: 22px; height: 22px; }
  </style></head><body><div class="glow"></div>
  ${logo(DARK)}${label ? `<div class="cat">${esc(label)}</div>` : ''}
  <div class="t"><h1 id="h">${esc(title)}</h1></div>
  <div class="foot"><span>${esc(site)}</span><span class="tiles">${['pm', 'engineer', 'designer', 'qa', 'data'].map((k) => `<span class="tile">${glyph(k)}</span>`).join('')}</span></div>
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
