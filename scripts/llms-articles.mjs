// After `astro build`: append the blog's article lists and the Facts page to dist/llms.txt, so the list always matches
// src/content/blog (public/llms.txt stays the hand-written part). Run by `npm run build`.
import { readFile, readdir, writeFile } from 'node:fs/promises';
// Plan prices in public/llms.txt are {{tokens}} from the one price table (src/data/plan.ts); fill them here.
import { fillPlan } from '../src/data/plan.ts';

const pick = (fm, key) => fm.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1]?.replace(/\\"/g, '"') ?? '';
async function list(lang) {
  const dir = `src/content/blog/${lang}`;
  const rows = [];
  for (const f of (await readdir(dir)).filter((x) => x.endsWith('.md'))) {
    const fm = (await readFile(`${dir}/${f}`, 'utf8')).match(/^---\n([\s\S]*?)\n---/)[1];
    if (/^draft:\s*true/m.test(fm)) continue;
    rows.push({ slug: f.replace(/\.md$/, ''), title: pick(fm, 'title'), desc: pick(fm, 'description'), date: pick(fm, 'date') });
  }
  return rows.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}
const en = await list('en');
const ko = await list('ko');
const line = (prefix) => (r) => `- [${r.title}](https://equipe.im${prefix}/blog/${r.slug}/): ${r.desc}`;
const out = `

## Facts

Short, citable statements about what equipe is, who runs it (Umbriles Inc.), pricing, security and data handling: https://equipe.im/facts/ (Korean: https://equipe.im/ko/facts/)

## Articles (blog)

Guides for people who cannot code. Written by the equipe team; competitor facts come from official pages with the date they were read. Feed: https://equipe.im/blog/rss.xml

${en.map(line('')).join('\n')}

### Korean (한국어)

Feed: https://equipe.im/ko/blog/rss.xml

${ko.map(line('/ko')).join('\n')}
`;
const file = 'dist/llms.txt';
const base = fillPlan((await readFile(file, 'utf8')).replace(/\s+$/, ''));
if (base.includes('## Articles (blog)')) throw new Error('dist/llms.txt already has the articles section');
await writeFile(file, base + '\n' + out);
console.log(`llms.txt: ${en.length} English and ${ko.length} Korean articles listed`);
