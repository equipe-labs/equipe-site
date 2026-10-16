// Creates or updates the "equipe.im KPI" dashboard in PostHog. Safe to re-run: panels are matched by
// name and updated in place, missing ones are added. Panel definitions live here, so the dashboard is
// reviewed like code. See docs/analytics.md.
//
// Env: POSTHOG_PERSONAL_API_KEY (phx_…, scopes: dashboard:write, insight:write, action:write, project:read),
//      POSTHOG_PROJECT_ID (number in the PostHog URL), POSTHOG_APP_HOST (default https://us.posthog.com).
//      DRY_RUN=1 prints the panels without calling PostHog.
import { pathToFileURL } from 'node:url';

export const DASHBOARD = 'equipe.im KPI';
export const CONVERSION_ACTION = 'GitHub 전환 (CTA 클릭 또는 설치 명령 복사)';

const PROD = [{ key: 'environment', value: ['production'], operator: 'exact', type: 'event' }];
const ev = (event, extra = {}) => ({ kind: 'EventsNode', event, name: event, ...extra });
const pv = (extra) => ev('$pageview', { math: 'total', custom_name: '방문(페이지 로드)', ...extra });
const trends = (series, { interval = 'day', from = '-30d', breakdown, display = 'ActionsLineGraph', props = PROD } = {}) => ({
  kind: 'InsightVizNode',
  source: {
    kind: 'TrendsQuery',
    series,
    interval,
    dateRange: { date_from: from },
    properties: props,
    ...(breakdown ? { breakdownFilter: { breakdown, breakdown_type: 'event', breakdown_limit: 12 } } : {}),
    trendsFilter: { display },
  },
});
const funnel = (actionId, breakdown) => ({
  kind: 'InsightVizNode',
  source: {
    kind: 'FunnelsQuery',
    series: [pv(), { kind: 'ActionsNode', id: actionId, name: CONVERSION_ACTION }],
    dateRange: { date_from: '-30d' },
    properties: PROD,
    ...(breakdown ? { breakdownFilter: { breakdown, breakdown_type: 'event', breakdown_limit: 12 } } : {}),
    funnelsFilter: { funnelVizType: 'steps', funnelWindowInterval: 1, funnelWindowIntervalUnit: 'hour', funnelOrderType: 'ordered' },
  },
});
const table = (query) => ({ kind: 'DataTableNode', source: { kind: 'HogQLQuery', query: query.replace(/\s+/g, ' ').trim() } });

const SITE_WHERE = "properties.environment = 'production' AND timestamp > now() - INTERVAL 30 DAY";
const CONVERTED = "event IN ('cta_github_click', 'install_command_copy', 'desktop_download_click')";
// Per-visit conversion: with cookieless tracking one distinct_id = one page load (docs/analytics.md).
const scorecard = (dim, label) =>
  table(`
    SELECT ${dim} AS ${label},
      countIf(event = '$pageview') AS visits,
      uniqIf(distinct_id, ${CONVERTED}) AS converted_visits,
      round(100 * uniqIf(distinct_id, ${CONVERTED}) / greatest(countIf(event = '$pageview'), 1), 1) AS conversion_pct,
      countIf(event = 'cta_github_click') AS github_clicks,
      countIf(event = 'install_command_copy') AS install_copies
    FROM events
    WHERE ${SITE_WHERE} AND (event = '$pageview' OR ${CONVERTED})
    GROUP BY ${label}
    ORDER BY visits DESC
    LIMIT 20`);

const LATEST = (event) => `
  SELECT max(properties.date) FROM events WHERE event = '${event}' AND timestamp > now() - INTERVAL 7 DAY`;

const FEW = ' 데이터가 적을 때(주 방문 100 미만 또는 수집 7일 미만)는 방향만 보고 결정하지 않는다.';

/** Panels in display order. `actionId` is the id of the conversion action. */
export function panels(actionId) {
  return [
    // ── 1. 한눈에: 어느 언어/채널이 성과를 내는가 ──
    {
      name: '① 채널별 성과표 (30일)',
      description: '유입 채널마다 방문, 전환(GitHub CTA 클릭 또는 설치 명령 복사)한 방문, 전환율. "어느 채널이 성과를 내는가"의 답.' + FEW,
      query: scorecard("coalesce(properties.channel, '(미분류)')", 'channel'),
    },
    {
      name: '② 언어별 성과표 (30일)',
      description: '페이지 언어(locale)마다 방문, 전환 방문, 전환율. "어느 언어가 성과를 내는가"의 답.' + FEW,
      query: scorecard('properties.locale', 'locale'),
    },
    {
      name: '③ GitHub star 추이',
      description: 'equipe-labs/equipe의 star 수(매일 수집한 값). 수집을 시작한 날부터 쌓인다.',
      query: trends([ev('github_repo_snapshot', { math: 'max', math_property: 'stars', custom_name: 'stars' })], { from: '-90d', props: [] }),
    },
    // ── 2. 방문 ──
    {
      name: '방문: 일별',
      description: '페이지 로드 수. 쿠키 없는 수집이라 "방문자"는 페이지 로드와 거의 같다(재방문 구분 불가).',
      query: trends([pv()], { interval: 'day' }),
    },
    {
      name: '방문: 주별',
      description: '주 단위 방문. 주간 회의에서 지난주와 비교하는 기준값.',
      query: trends([pv()], { interval: 'week', from: '-90d', display: 'ActionsBar' }),
    },
    {
      name: '방문: 언어(locale)별',
      description: '방문한 페이지의 언어.',
      query: trends([pv()], { breakdown: 'locale', display: 'ActionsBar' }),
    },
    {
      name: '방문: 국가별 (30일)',
      description: 'PostHog GeoIP 기준 국가.',
      query: trends([pv()], { breakdown: '$geoip_country_name', display: 'ActionsBarValue' }),
    },
    {
      name: '방문: 유입 채널별',
      description: 'channel = search / ai / social / github / direct / referral / internal(사이트 안 이동). 분류 규칙은 src/analytics/channels.ts.',
      query: trends([pv()], { breakdown: 'channel', display: 'ActionsBar' }),
    },
    // ── 3. AI 유입 ──
    {
      name: 'AI 유입: ai_source별 추이',
      description: 'ChatGPT, Perplexity, Claude 등 AI 서비스에서 온 방문. 목록은 src/analytics/ai-sources.ts.',
      query: trends([pv()], {
        breakdown: 'ai_source',
        display: 'ActionsBar',
        props: [...PROD, { key: 'ai_source', operator: 'is_set', type: 'event' }],
      }),
    },
    // ── 4. 전환 ──
    {
      name: '전환 퍼널: 방문 → GitHub 전환',
      description: '같은 페이지 로드 안에서 방문 후 cta_github_click 또는 install_command_copy가 일어난 비율.',
      query: funnel(actionId),
    },
    {
      name: '전환 퍼널: 언어별',
      description: '언어(locale)별 전환율. 성과표 ②와 같은 값을 퍼널로 본다.',
      query: funnel(actionId, 'locale'),
    },
    {
      name: '전환 퍼널: 채널별',
      description: '유입 채널별 전환율. 성과표 ①과 같은 값을 퍼널로 본다.',
      query: funnel(actionId, 'channel'),
    },
    // ── 5. GitHub 성과 ──
    {
      name: '리포 views / clones (일별)',
      description: 'GitHub 트래픽 API의 일별 값. GitHub는 14일치만 주므로 매일 수집해 쌓는다. 같은 날을 여러 번 받아도 최댓값을 쓰므로 중복되지 않는다.',
      query: trends(
        [
          ev('github_traffic_day', { math: 'max', math_property: 'views', custom_name: 'views' }),
          ev('github_traffic_day', { math: 'max', math_property: 'views_uniques', custom_name: 'views (고유)' }),
          ev('github_traffic_day', { math: 'max', math_property: 'clones', custom_name: 'clones' }),
          ev('github_traffic_day', { math: 'max', math_property: 'clones_uniques', custom_name: 'clones (고유)' }),
        ],
        { from: '-90d', props: [] },
      ),
    },
    {
      name: '리포 유입 중 equipe.im 비중 (%)',
      description: 'GitHub가 주는 상위 10개 referrer의 최근 14일 views 합계 중 equipe.im의 비중. 매일 그 시점의 값.',
      query: trends(
        [
          ev('github_repo_snapshot', { math: 'max', math_property: 'site_referrer_share_pct', custom_name: 'views 비중 %' }),
          ev('github_repo_snapshot', { math: 'max', math_property: 'site_referrer_uniques_share_pct', custom_name: '고유 방문자 비중 %' }),
        ],
        { from: '-90d', props: [] },
      ),
    },
    {
      name: '리포 referrer (최근 14일, 최신 수집)',
      description: 'GitHub 리포로 들어온 상위 referrer. equipe.im의 순위를 본다.',
      query: table(`
        SELECT properties.referrer AS referrer, max(properties.count) AS views, max(properties.uniques) AS uniques,
          any(properties.is_site) AS is_equipe_im
        FROM events
        WHERE event = 'github_referrer' AND timestamp > now() - INTERVAL 7 DAY AND properties.date = (${LATEST('github_referrer')})
        GROUP BY referrer ORDER BY views DESC`),
    },
    {
      name: '리포 인기 경로 (최근 14일, 최신 수집)',
      description: 'GitHub 리포에서 많이 본 페이지(README, docs, releases 등).',
      query: table(`
        SELECT properties.path AS path, max(properties.count) AS views, max(properties.uniques) AS uniques
        FROM events
        WHERE event = 'github_popular_path' AND timestamp > now() - INTERVAL 7 DAY AND properties.date = (${LATEST('github_popular_path')})
        GROUP BY path ORDER BY views DESC`),
    },
    // ── 6. 언어 확장 판단 ──
    {
      name: '언어 확장: 지원하지 않는 브라우저 언어 비중',
      description: '방문 중 브라우저 언어에 맞는 페이지가 없는 비율(true = 지원, false = 미지원).',
      query: trends([pv()], { breakdown: 'browser_language_supported', display: 'ActionsPie' }),
    },
    {
      name: '언어 확장: 2차 언어 후보 (30일)',
      description: '지원하지 않는 브라우저 언어를 방문 수 순으로. 전체 방문 대비 비중이 꾸준히 5% 이상이면 번역 후보.',
      query: table(`
        SELECT properties.browser_language_base AS browser_language, count() AS visits,
          round(100 * count() / greatest((SELECT count() FROM events WHERE event = '$pageview' AND ${SITE_WHERE}), 1), 1) AS pct_of_all_visits,
          round(100 * uniqIf(distinct_id, ${CONVERTED}) / greatest(countIf(event = '$pageview'), 1), 1) AS conversion_pct
        FROM events
        WHERE ${SITE_WHERE} AND event = '$pageview' AND toString(properties.browser_language_supported) = 'false'
        GROUP BY browser_language ORDER BY visits DESC LIMIT 20`),
    },
  ];
}

async function main() {
  const env = process.env;
  const host = (env.POSTHOG_APP_HOST || 'https://us.posthog.com').replace(/\/$/, '');
  const project = env.POSTHOG_PROJECT_ID;
  const key = env.POSTHOG_PERSONAL_API_KEY;
  if (env.DRY_RUN === '1') return console.log(JSON.stringify(panels(0), null, 2));
  if (!project || !key) throw new Error('POSTHOG_PROJECT_ID and POSTHOG_PERSONAL_API_KEY are required');

  const api = async (method, path, body) => {
    const res = await fetch(`${host}/api/projects/${project}${path}`, {
      method,
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${await res.text()}`);
    return res.json();
  };
  const all = async (path) => {
    const out = [];
    for (let next = path; next; ) {
      const page = await api('GET', next);
      out.push(...page.results);
      next = page.next ? page.next.slice(page.next.indexOf(`/api/projects/${project}`) + `/api/projects/${project}`.length) : null;
    }
    return out;
  };

  let action = (await all('/actions/?limit=200')).find((a) => a.name === CONVERSION_ACTION && !a.deleted);
  if (!action) {
    action = await api('POST', '/actions/', {
      name: CONVERSION_ACTION,
      description: 'equipe.im에서 GitHub로 이어지는 행동. KPI 대시보드 퍼널의 2단계.',
      steps: [{ event: 'cta_github_click' }, { event: 'install_command_copy' }],
    });
  }

  let dash = (await all('/dashboards/?limit=200')).find((d) => d.name === DASHBOARD && !d.deleted);
  if (!dash) {
    dash = await api('POST', '/dashboards/', {
      name: DASHBOARD,
      pinned: true,
      description: '사이트 방문이 GitHub 성과(star, 리포 방문, clone)로 이어지는지 보는 대시보드. 지표 정의와 주간 가이드: equipe-site/docs/analytics.md',
    });
  }
  const tiles = (await api('GET', `/dashboards/${dash.id}/`)).tiles ?? [];
  const existing = new Map(tiles.filter((t) => t.insight && !t.deleted).map((t) => [t.insight.name, t.insight.id]));

  for (const p of panels(action.id)) {
    const body = { name: p.name, description: p.description, query: p.query };
    const id = existing.get(p.name);
    if (id) await api('PATCH', `/insights/${id}/`, body);
    else await api('POST', '/insights/', { ...body, dashboards: [dash.id] });
    console.log(`${id ? 'updated' : 'created'}: ${p.name}`);
  }
  console.log(`\n${host}/project/${project}/dashboard/${dash.id}`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
