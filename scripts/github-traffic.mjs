// Daily collector: GitHub repo traffic + stars -> PostHog. Run by .github/workflows/github-traffic.yml.
// GitHub keeps only the last 14 days of traffic, so this runs every day. See docs/analytics.md.
//
// Env: GH_TRAFFIC_TOKEN (read access to the repo's traffic), POSTHOG_PROJECT_KEY (phc_…),
//      POSTHOG_HOST (default https://us.i.posthog.com), REPO (default equipe-labs/equipe),
//      SITE_HOST (default equipe.im), DRY_RUN=1 prints the events instead of sending them.
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';

const DISTINCT_ID = 'github-traffic-bot';

/** Stable UUID for a key, so re-sending the same day produces the same event id. */
export function stableUuid(key) {
  const h = createHash('sha256').update(key).digest('hex');
  // Format as a v4-shaped UUID (version and variant nibbles set).
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-${((parseInt(h[16], 16) & 3) | 8).toString(16)}${h.slice(17, 20)}-${h.slice(20, 32)}`;
}

const base = (repo) => ({
  repo,
  environment: 'production',
  $process_person_profile: false,
});

/**
 * Turn the GitHub API responses into PostHog events.
 * - github_traffic_day: one per day in GitHub's 14-day window, timestamped at noon UTC of that day and
 *   with a stable uuid. Each run re-sends the whole window; dashboards read it with "max" per day,
 *   so a resent day never double-counts (and a day that grew later shows its final number).
 * - github_repo_snapshot: one per run — stars, forks, and the 14-day referrer totals incl. the site's share.
 * - github_referrer / github_popular_path: one per row of GitHub's top-10 lists, per run.
 */
export function buildEvents({ repo, siteHost, now, repoInfo, views, clones, referrers, paths }) {
  const events = [];
  const byDay = new Map();
  const day = (ts) => ts.slice(0, 10);
  for (const v of views.views ?? []) byDay.set(day(v.timestamp), { views: v.count, views_uniques: v.uniques });
  for (const c of clones.clones ?? []) {
    const d = day(c.timestamp);
    byDay.set(d, { ...(byDay.get(d) ?? {}), clones: c.count, clones_uniques: c.uniques });
  }
  for (const [d, counts] of [...byDay].sort()) {
    events.push({
      event: 'github_traffic_day',
      distinct_id: DISTINCT_ID,
      uuid: stableUuid(`${repo}|${d}`),
      timestamp: `${d}T12:00:00Z`,
      properties: { ...base(repo), date: d, views: 0, views_uniques: 0, clones: 0, clones_uniques: 0, ...counts },
    });
  }

  const ts = now.toISOString();
  const snapDay = ts.slice(0, 10);
  const isSite = (r) => r.referrer === siteHost || r.referrer.endsWith('.' + siteHost);
  const refTotal = referrers.reduce((s, r) => s + r.count, 0);
  const refUniques = referrers.reduce((s, r) => s + r.uniques, 0);
  const site = referrers.filter(isSite);
  const siteCount = site.reduce((s, r) => s + r.count, 0);
  const siteUniques = site.reduce((s, r) => s + r.uniques, 0);
  const pct = (a, b) => (b ? Math.round((a / b) * 1000) / 10 : 0);

  events.push({
    event: 'github_repo_snapshot',
    distinct_id: DISTINCT_ID,
    uuid: stableUuid(`${repo}|snapshot|${snapDay}`),
    timestamp: ts,
    properties: {
      ...base(repo),
      date: snapDay,
      stars: repoInfo.stargazers_count,
      forks: repoInfo.forks_count,
      watchers: repoInfo.subscribers_count,
      open_issues: repoInfo.open_issues_count,
      views_14d: views.count,
      views_uniques_14d: views.uniques,
      clones_14d: clones.count,
      clones_uniques_14d: clones.uniques,
      // GitHub only lists the top 10 referrers, so "total" means total of those 10.
      referrer_views_14d: refTotal,
      referrer_uniques_14d: refUniques,
      site_referrer_views_14d: siteCount,
      site_referrer_uniques_14d: siteUniques,
      site_referrer_share_pct: pct(siteCount, refTotal),
      site_referrer_uniques_share_pct: pct(siteUniques, refUniques),
    },
  });
  for (const r of referrers) {
    events.push({
      event: 'github_referrer',
      distinct_id: DISTINCT_ID,
      uuid: stableUuid(`${repo}|referrer|${snapDay}|${r.referrer}`),
      timestamp: ts,
      properties: { ...base(repo), date: snapDay, referrer: r.referrer, count: r.count, uniques: r.uniques, is_site: isSite(r) },
    });
  }
  for (const p of paths) {
    events.push({
      event: 'github_popular_path',
      distinct_id: DISTINCT_ID,
      uuid: stableUuid(`${repo}|path|${snapDay}|${p.path}`),
      timestamp: ts,
      properties: { ...base(repo), date: snapDay, path: p.path, title: p.title, count: p.count, uniques: p.uniques },
    });
  }
  return events;
}

async function gh(path, token) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
  });
  if (!res.ok) throw new Error(`GitHub ${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function main() {
  const env = process.env;
  const repo = env.REPO || 'equipe-labs/equipe';
  const siteHost = env.SITE_HOST || 'equipe.im';
  const token = env.GH_TRAFFIC_TOKEN;
  const key = env.POSTHOG_PROJECT_KEY;
  const host = (env.POSTHOG_HOST || 'https://us.i.posthog.com').replace(/\/$/, '');
  const dry = env.DRY_RUN === '1';
  if (!token) throw new Error('GH_TRAFFIC_TOKEN is not set');
  if (!key && !dry) throw new Error('POSTHOG_PROJECT_KEY is not set');

  const [repoInfo, views, clones, referrers, paths] = await Promise.all([
    gh(`/repos/${repo}`, token),
    gh(`/repos/${repo}/traffic/views?per=day`, token),
    gh(`/repos/${repo}/traffic/clones?per=day`, token),
    gh(`/repos/${repo}/traffic/popular/referrers`, token),
    gh(`/repos/${repo}/traffic/popular/paths`, token),
  ]);
  const events = buildEvents({ repo, siteHost, now: new Date(), repoInfo, views, clones, referrers, paths });

  if (dry) return console.log(JSON.stringify(events, null, 2));
  const res = await fetch(`${host}/batch/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: key, historical_migration: false, batch: events }),
  });
  if (!res.ok) throw new Error(`PostHog /batch: ${res.status} ${await res.text()}`);
  const snap = events.find((e) => e.event === 'github_repo_snapshot').properties;
  console.log(
    `Sent ${events.length} events for ${repo}: stars=${snap.stars}, views_14d=${snap.views_14d}, clones_14d=${snap.clones_14d}, ` +
      `${siteHost} share of referrer views=${snap.site_referrer_share_pct}%`,
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
