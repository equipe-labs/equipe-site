// node --test 'scripts/*.test.mjs'
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildEvents, stableUuid } from './github-traffic.mjs';

const input = {
  repo: 'equipe-labs/equipe',
  siteHost: 'equipe.im',
  now: new Date('2026-10-13T03:00:00Z'),
  repoInfo: { stargazers_count: 120, forks_count: 7, subscribers_count: 4, open_issues_count: 3 },
  views: {
    count: 30,
    uniques: 12,
    views: [
      { timestamp: '2026-10-11T00:00:00Z', count: 10, uniques: 4 },
      { timestamp: '2026-10-12T00:00:00Z', count: 20, uniques: 8 },
    ],
  },
  clones: { count: 5, uniques: 2, clones: [{ timestamp: '2026-10-12T00:00:00Z', count: 5, uniques: 2 }] },
  referrers: [
    { referrer: 'equipe.im', count: 15, uniques: 6 },
    { referrer: 'news.ycombinator.com', count: 5, uniques: 4 },
  ],
  paths: [{ path: '/equipe-labs/equipe', title: 'equipe', count: 25, uniques: 10 }],
};

test('one github_traffic_day per day, merged views and clones, zero-filled', () => {
  const days = buildEvents(input).filter((e) => e.event === 'github_traffic_day');
  assert.deepEqual(
    days.map((e) => [e.timestamp, e.properties.views, e.properties.clones]),
    [
      ['2026-10-11T12:00:00Z', 10, 0],
      ['2026-10-12T12:00:00Z', 20, 5],
    ],
  );
});

test('re-running yields the same uuids for the same day', () => {
  const a = buildEvents(input);
  const b = buildEvents({ ...input, now: new Date('2026-10-13T20:00:00Z') });
  assert.deepEqual(
    a.map((e) => e.uuid),
    b.map((e) => e.uuid),
  );
  assert.match(stableUuid('x'), /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
});

test('snapshot carries stars and the site share of referrer views', () => {
  const snap = buildEvents(input).find((e) => e.event === 'github_repo_snapshot').properties;
  assert.equal(snap.stars, 120);
  assert.equal(snap.site_referrer_views_14d, 15);
  assert.equal(snap.site_referrer_share_pct, 75);
  assert.equal(snap.site_referrer_uniques_share_pct, 60);
  assert.equal(snap.environment, 'production');
});

test('referrer and path rows', () => {
  const ev = buildEvents(input);
  const refs = ev.filter((e) => e.event === 'github_referrer');
  assert.deepEqual(
    refs.map((e) => [e.properties.referrer, e.properties.is_site]),
    [
      ['equipe.im', true],
      ['news.ycombinator.com', false],
    ],
  );
  assert.equal(ev.filter((e) => e.event === 'github_popular_path').length, 1);
});

test('empty traffic still produces a snapshot without dividing by zero', () => {
  const ev = buildEvents({ ...input, views: { count: 0, uniques: 0, views: [] }, clones: { count: 0, uniques: 0, clones: [] }, referrers: [], paths: [] });
  assert.equal(ev.length, 1);
  assert.equal(ev[0].properties.site_referrer_share_pct, 0);
});
