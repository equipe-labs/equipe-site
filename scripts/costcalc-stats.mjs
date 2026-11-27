// Refreshes src/data/costcalc-stats.json: what real equipe builds cost, for the app cost calculator (/tools/app-cost-calculator/).
// Reads equipe-cloud's D1 (read-only SELECTs through wrangler) and writes aggregates only: no team, name, idea or URL.
//   CLOUD_WEB=/path/to/equipe-cloud/web node scripts/costcalc-stats.mjs
// Real teams = teams.is_test = 0. Spend = credit_ledger debits of kind usage (AI work) and team_time (the cloud computer),
// which is what the person pays in credits. "First live" = the first successful deploy (deploy_log ok = 1, class ok).
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const cwd = process.env.CLOUD_WEB;
if (!cwd) { console.error('Set CLOUD_WEB to equipe-cloud/web'); process.exit(1); }
const q = (sql) => JSON.parse(execFileSync('npx', ['wrangler', 'd1', 'execute', 'equipe-app', '--remote', '--json', '--command', sql], { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }))[0].results;

const SPEND = "l.kind IN ('usage','team_time')";
const rows = q(`SELECT t.created_at c,
  (SELECT min(at) FROM deploy_log d WHERE d.team=t.slug AND d.ok=1 AND d.class='ok') live,
  (SELECT -sum(amount_micros) FROM credit_ledger l WHERE l.team=t.slug AND ${SPEND}) spent,
  (SELECT -sum(amount_micros) FROM credit_ledger l WHERE l.team=t.slug AND ${SPEND} AND l.created_at <= t.created_at + 7*86400) week,
  (SELECT -sum(amount_micros) FROM credit_ledger l WHERE l.team=t.slug AND ${SPEND} AND l.created_at <= (SELECT min(at) FROM deploy_log d WHERE d.team=t.slug AND d.ok=1 AND d.class='ok')) first,
  (SELECT count(*) FROM usage_tickets u WHERE u.team=t.slug) items
  FROM teams t WHERE t.is_test = 0`);
const items = q(`SELECT u.spent_micros s FROM usage_tickets u JOIN teams t ON t.slug=u.team WHERE t.is_test=0 AND u.spent_micros>0`).map((r) => r.s);

const quant = (v, p) => { const s = [...v].sort((a, b) => a - b); const i = (s.length - 1) * p, lo = Math.floor(i), hi = Math.ceil(i); return s[lo] + (s[hi] - s[lo]) * (i - lo); };
const cr = (micros) => Math.round(micros / 10_000); // 100 credits = $1
const live = rows.filter((r) => r.live);
const perItem = rows.filter((r) => r.items > 0 && r.spent > 0).map((r) => r.spent / r.items);
const out = {
  asOf: new Date().toISOString().slice(0, 10),
  projects: rows.length,
  firstLive: {
    n: live.length,
    credits: { p25: cr(quant(live.map((r) => r.first || 0), 0.25)), median: cr(quant(live.map((r) => r.first || 0), 0.5)), p75: cr(quant(live.map((r) => r.first || 0), 0.75)) },
    minutes: { median: Math.round(quant(live.map((r) => r.live - r.c), 0.5) / 60) },
  },
  firstWeek: { n: rows.length, credits: { p25: cr(quant(rows.map((r) => r.week || 0), 0.25)), median: cr(quant(rows.map((r) => r.week || 0), 0.5)), p75: cr(quant(rows.map((r) => r.week || 0), 0.75)) } },
  // All-in cost of one piece of work (AI work, the PM's planning and review, deploys and the cloud computer), per project.
  perItem: { n: perItem.length, workItems: items.length, credits: { p25: cr(quant(perItem, 0.25)), median: cr(quant(perItem, 0.5)), p75: cr(quant(perItem, 0.75)) } },
  // One piece of work alone (the AI work of that item only).
  itemOnly: { n: items.length, credits: { p25: cr(quant(items, 0.25)), median: cr(quant(items, 0.5)), p75: cr(quant(items, 0.75)) } },
};
writeFileSync(new URL('../src/data/costcalc-stats.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(out);
