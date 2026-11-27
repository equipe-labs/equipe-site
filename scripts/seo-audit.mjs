// Thin-content guard: reads a finished build (dist/ and dist/seo/pages.json from scripts/sitemaps.mjs) and lists pages
// search engines are likely to skip or fold together:
//   thin        fewer than MIN_UNIQUE words of their own once the section's template text is taken out
//   untranslated a language version whose text is mostly the English page (a cross-language duplicate)
//   near-dup    two pages of the same section and language that say almost the same thing
// Usage: node scripts/seo-audit.mjs [--md report.md] [--json report.json] [--fail]   (--fail: exit 1 when anything is found)
import { readFile, writeFile } from 'node:fs/promises';
import { pageText } from './sitemaps.mjs';

const MIN_UNIQUE = 250;
const CJK = /[぀-ヿ㐀-鿿가-힯]/g;
const CJK1 = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/;
const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };

// Word-equivalents: Latin words, plus CJK characters / 2 (a Korean or Japanese word is about two characters).
const words = (s) => (s.replace(CJK, ' ').match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length + Math.round((s.match(CJK) || []).length / 2);
const tokens = (s) => (s.toLowerCase().match(/[\p{L}\p{N}]+/gu) || []).flatMap((w) => (CJK1.test(w) ? [...w] : [w]));
const shingles = (toks, n) => { const out = new Set(); for (let i = 0; i + n <= toks.length; i++) out.add(toks.slice(i, i + n).join(' ')); return out; };
const jaccard = (a, b) => { if (!a.size || !b.size) return 0; let x = 0; for (const v of a) if (b.has(v)) x++; return x / (a.size + b.size - x); };

const manifest = JSON.parse(await readFile('dist/seo/pages.json', 'utf8'));
const rows = [];
for (const [url, p] of Object.entries(manifest.pages)) {
  const html = await readFile(`dist${new URL(url).pathname}index.html`, 'utf8');
  const t = pageText(html);
  rows.push({ url, ...p, title: t.title, blocks: t.blocks });
}
// Template text: a block that appears on half or more of a section's pages in one language (4 pages or more).
const groups = new Map();
for (const r of rows) { const k = `${r.section}|${r.locale}`; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(r); }
for (const list of groups.values()) {
  const seen = new Map();
  for (const r of list) for (const b of new Set(r.blocks)) seen.set(b, (seen.get(b) || 0) + 1);
  for (const r of list) {
    const own = list.length >= 4 ? r.blocks.filter((b) => seen.get(b) < Math.max(2, list.length / 2)) : r.blocks;
    r.words = words(r.blocks.join(' '));
    r.unique = words(own.join(' '));
    r.sh3 = shingles(tokens(r.blocks.join(' ')), 3);
    r.sh5 = shingles(tokens(own.join(' ')), 5);
  }
}
const byUrl = new Map(rows.map((r) => [r.url, r]));
const enOf = (r) => r.url.replace(/^https:\/\/equipe\.im\/(ko|ja|zh-cn|es|pt-br|de|fr)\//, 'https://equipe.im/');

const findings = [];
for (const r of rows) {
  if (r.unique < MIN_UNIQUE) findings.push({ kind: 'thin', url: r.url, section: r.section, locale: r.locale, words: r.words, unique: r.unique, detail: `${r.unique} own words (${r.words} with template)` });
  if (r.locale !== 'en') {
    const en = byUrl.get(enOf(r));
    if (en) { const j = jaccard(r.sh3, en.sh3); if (j >= 0.5) findings.push({ kind: 'untranslated', url: r.url, section: r.section, locale: r.locale, words: r.words, unique: r.unique, detail: `${Math.round(j * 100)}% the same text as ${en.url.replace('https://equipe.im', '')}` }); }
  }
}
for (const list of groups.values()) {
  for (let i = 0; i < list.length; i++) for (let k = i + 1; k < list.length; k++) {
    const j = jaccard(list[i].sh5, list[k].sh5);
    if (j >= 0.6) findings.push({ kind: 'near-dup', url: list[i].url, section: list[i].section, locale: list[i].locale, words: list[i].words, unique: list[i].unique, detail: `${Math.round(j * 100)}% the same as ${list[k].url.replace('https://equipe.im', '')}` });
  }
}
const count = (k) => findings.filter((f) => f.kind === k).length;
console.log(`seo-audit: ${rows.length} pages, ${count('thin')} thin, ${count('untranslated')} untranslated, ${count('near-dup')} near-duplicate pairs`);
if (opt('--json')) await writeFile(opt('--json'), JSON.stringify({ built: manifest.built, pages: rows.map(({ url, section, locale, words: w, unique }) => ({ url, section, locale, words: w, unique })), findings }, null, 1));
if (opt('--md')) {
  const line = (f) => `| ${f.kind} | ${f.url.replace('https://equipe.im', '')} | ${f.section} | ${f.locale} | ${f.words} | ${f.unique} | ${f.detail} |`;
  await writeFile(opt('--md'), `| Kind | Page | Section | Lang | Words | Own words | Detail |\n|---|---|---|---|---|---|---|\n${findings.map(line).join('\n')}\n`);
}
if (args.includes('--fail') && findings.length) process.exit(1);
