// Snapshot the engine's recent release notes into src/data/changelog.json for /changelog.
// Read-only: uses the GitHub API through the `gh` CLI. Run: node scripts/changelog.mjs [count]
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const n = Number(process.argv[2] || 24);
const list = JSON.parse(execFileSync('gh', ['release', 'list', '-R', 'equipe-labs/equipe', '--limit', String(n), '--json', 'tagName,publishedAt'], { encoding: 'utf8' }));
const out = [];
for (const r of list) {
  const body = execFileSync('gh', ['release', 'view', r.tagName, '-R', 'equipe-labs/equipe', '--json', 'body', '-q', '.body'], { encoding: 'utf8' });
  const m = body.match(/## What's new\s*\n([\s\S]*?)(\n## |\n\*\*Full Changelog|$)/);
  const items = (m ? m[1] : '').split('\n').map((l) => l.replace(/^[-*]\s+/, '').trim()).filter(Boolean);
  if (items.length) out.push({ version: r.tagName, date: r.publishedAt.slice(0, 10), items, url: `https://github.com/equipe-labs/equipe/releases/tag/${r.tagName}` });
}
writeFileSync('src/data/changelog.json', JSON.stringify(out, null, 1) + '\n');
console.log(`${out.length} releases`);
