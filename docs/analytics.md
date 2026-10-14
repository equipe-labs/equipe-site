# 분석: PostHog

방문과 핵심 행동을 PostHog로 추적한다. 설정은 코드 두 곳에 모여 있다.

| 파일 | 역할 |
|---|---|
| `src/components/Analytics.astro` | 빌드 시 설정을 읽어 스크립트를 넣는다. 키가 없으면 **아무것도 렌더링하지 않는다** |
| `src/analytics/client.ts` | PostHog 지연 로드, 공통 속성, 클릭·스크롤·FAQ 추적 |
| `src/analytics/ai-sources.ts` | AI 유입 도메인 목록(**여기 한 곳에서만 관리**) |

## 설정 (환경변수)

| 변수 | 필수 | 설명 |
|---|---|---|
| `PUBLIC_POSTHOG_KEY` | 예 | PostHog 프로젝트 키(`phc_…`). **없으면 스크립트를 넣지 않는다**(로컬, 포크) |
| `PUBLIC_POSTHOG_HOST` | 아니오 | PostHog 앱 주소. 기본 `https://us.posthog.com`. 이벤트 수집 주소가 아니다 |

- Vercel → Project → Settings → Environment Variables에 `PUBLIC_POSTHOG_KEY`를 Production과 Preview **둘 다** 넣는다(같은 Production 키).
- 수집은 항상 같은 도메인의 `/ingest`로 간다(`vercel.json`이 PostHog로 전달, 광고 차단기에 덜 걸린다). 리전은 `docs/deploy.md` 참고.
- `PUBLIC_*` 값은 빌드 때 번들에 박힌다. 값을 바꾸면 다시 배포해야 한다.

### Production과 섞이지 않게

모든 이벤트에 `environment` 속성이 붙는다. 값은 Vercel이 빌드 때 주는 `VERCEL_ENV`(`production` / `preview`), 그 외(로컬 빌드)는 `local`.
**PostHog의 대시보드·인사이트에는 `environment = production` 필터를 건다**(또는 프로젝트 전역 필터/Cohort로 고정). Preview에서 이벤트가 들어오는지 확인할 때는 Live events에서 `environment = preview`로 본다. `astro dev`는 키가 없으면 전혀 보내지 않는다.

## 개인정보: 쿠키 없는 모드

`persistence: 'memory'`로 초기화한다. 쿠키, localStorage, sessionStorage에 PostHog 데이터를 **쓰지 않으므로** EU 동의 배너가 필요 없다. 세션 녹화·설문·자동 캡처·피처 플래그는 꺼 두었고, 사람(person) 프로필은 만들지 않는다(`person_profiles: 'identified_only'`).

**트레이드오프**
- 식별자가 메모리에만 있어서 **페이지를 이동하거나 새로고침하면 새 방문자**로 센다. 언어를 바꿔 다른 페이지로 가면 한 사람이 둘로 보인다.
- 따라서 "고유 방문자"는 **과대 집계**되고, 재방문율·리텐션·방문자 단위 퍼널은 믿을 수 없다. 페이지뷰 수, 유입 경로, 이벤트 수, 이벤트 발생 비율은 정확하다.
- 이 사이트는 한 페이지 랜딩이라 영향이 작다. 재방문 분석이 필요해지면 동의 배너와 함께 `persistence: 'localStorage+cookie'`로 바꾸는 것을 새 티켓으로 다룬다.

사이트의 다른 localStorage 사용(`equipe-lang-dismissed`, 언어 배너 닫음 기억)은 PostHog와 무관하다.

## 성능

PostHog는 `posthog-js`의 slim 빌드(약 50KB gzip)를 **동적 import**한다. 첫 렌더링과 `load` 이벤트 이후, 브라우저가 한가할 때(`requestIdleCallback`, 최대 4초) 또는 첫 사용자 입력 시 불러온다. 그 전에 발생한 이벤트는 큐에 쌓였다가 로드 후 전송된다.

## 모든 이벤트의 공통 속성

| 속성 | 값 |
|---|---|
| `locale` | 현재 페이지 언어(`<html lang>`, 예 `ko`, `pt-BR`) |
| `browser_language` | `navigator.language` |
| `browser_language_base` | 브라우저 언어의 앞부분(`pt-PT` → `pt`) |
| `browser_language_supported` | 브라우저 언어에 맞는 페이지가 있으면 `true`. 기본 언어가 같으면 지원으로 본다(`pt-PT` → `pt-BR`). 중국어는 간체만(`zh-TW`는 미지원) |
| `channel` | 유입 채널: `ai` / `search` / `social` / `github` / `direct` / `referral` / `internal`. 아래 **유입 채널** 참고 |
| `environment` | `production` / `preview` / `local` |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | 방문 URL에 있을 때만 |
| `ai_source` | AI 유입일 때만. `chatgpt`, `perplexity`, `claude`, `gemini`, `copilot`, … |

**AI 유입 분류**: 방문 시 `document.referrer`의 호스트를 `ai-sources.ts`의 목록과 비교한다. 서브도메인도 맞는다. referrer가 없으면 `utm_source`(ChatGPT는 링크에 `utm_source=chatgpt.com`을 붙인다)로 한 번 더 본다. 새 AI 서비스는 `AI_SOURCES`에 한 줄 추가하면 된다.

**유입 채널**(`src/analytics/channels.ts`): `ai_source`가 있으면 `ai`. 아니면 referrer 호스트로 `github`(github.com), `search`(Google, Bing, Naver, DuckDuckGo 등), `social`(X, Hacker News, Reddit, LinkedIn 등), 같은 사이트면 `internal`(언어 전환 등 사이트 안 이동), 그 밖은 `referral`. referrer가 없으면 `utm_source`로 한 번 더 보고, 그래도 없으면 `direct`. 목록은 그 파일 한 곳에서 고친다. 이 속성은 T-11 배포 이후 이벤트부터 붙는다.

## 이벤트 사전

이름은 `snake_case`. 공통 속성은 위 표를 따로 붙이지 않는다.

| 이벤트 | 속성 | 발생 시점 |
|---|---|---|
| `$pageview` | — | 페이지 로드 후 PostHog가 뜨면 한 번. (수동 전송: 공통 속성을 먼저 등록하기 위해) |
| `cta_github_click` | `location`: `hero` / `header` / `footer` | GitHub로 가는 CTA·링크 클릭 |
| `install_command_copy` | `command`: `install` / `install_brew` / `run` / `try`, `location`: `hero`(히어로의 brew 명령에만) | 설치 명령 복사 버튼 클릭 |
| `language_switch` | `from`, `to`(hreflang 값), `source`: `menu` / `banner` | 언어 메뉴 항목 또는 언어 배너 링크 클릭 |
| `language_banner_shown` | `from`, `suggested` | 언어 제안 배너가 실제로 화면에 나타남 |
| `language_banner_dismissed` | `from`, `suggested` | 배너의 닫기(×) 클릭 |
| `faq_open` | `question_id`: `faq-1`, `faq-2`, … | FAQ 항목이 열림(닫힐 때는 안 보냄). id는 `en.ts`의 `faq.items` 순서이며 언어와 무관 |
| `outbound_click` | `url`, `host` | 위 `data-ph`가 없는 그 밖의 외부 링크 클릭 |
| `scroll_depth` | `percent`: `25` / `50` / `75` / `100` | 해당 지점을 처음 지날 때 페이지 로드당 한 번씩 |

`cta_github_click`을 보낸 링크는 `outbound_click`을 **중복으로 보내지 않는다**.

## 새 이벤트 추가하는 법

1. **클릭이면 HTML만 고친다.** 요소에 `data-ph="이벤트_이름"`을 붙이고, 속성은 `data-ph-<이름>`으로 준다(camelCase는 snake_case로 바뀐다).
   ```html
   <a href="…" data-ph="newsletter_click" data-ph-location="footer">…</a>
   ```
2. **클릭이 아니면** 코드에서 `window.eqTrack('이벤트_이름', { 속성: 값 })`을 부른다. PostHog가 뜨기 전에도 안전하고, 분석이 꺼져 있으면(`window.eqTrack` 없음) 아무 일도 안 한다: `if (window.eqTrack) window.eqTrack(...)`.
3. 위 **이벤트 사전**에 이름, 속성, 발생 시점을 적는다. 사전에 없는 이벤트는 만들지 않는다.
4. 이름은 `snake_case`, 동사는 끝에(`..._click`, `..._copy`, `..._open`). 속성 값에 사용자가 입력한 텍스트나 번역된 문구를 넣지 않는다(언어마다 달라져 집계가 갈라진다. id나 고정 코드를 쓴다).

## 확인하는 법

- **Preview**: PR의 Preview URL을 열고 PostHog → Live events에서 `environment = preview`로 `$pageview`, 클릭 이벤트가 들어오는지 본다.
- **광고 차단기**: uBlock Origin을 켠 채로 같은 Preview를 열어도 `/ingest/...` 요청이 200으로 나가고 Live events에 보이는지 본다.
- **쿠키 없음**: 개발자 도구 → Application → Cookies / Local Storage / Session Storage에 `ph_*` 항목이 없어야 한다.
- **로컬에서 보기**: `PUBLIC_POSTHOG_KEY=phc_… npm run build && npm run preview`. `/ingest`는 Vercel 규칙이라 로컬에서는 404다. 이벤트 전송 자체는 Preview 배포에서 확인한다.

## KPI 대시보드: equipe.im KPI

**링크**: <!-- 대시보드를 만든 뒤 아래 주소를 실제 링크로 바꾼다 --> `https://us.posthog.com/project/<PROJECT_ID>/dashboard/<ID>` (아직 생성 전)

사이트 방문이 GitHub 성과(star, 리포 방문, clone)로 이어지는지 한 곳에서 본다. 패널 정의는 `scripts/posthog-dashboard.mjs`에 코드로 있고, Actions → **PostHog KPI dashboard** → Run workflow로 만들거나 갱신한다(같은 이름의 패널은 덮어쓴다). PostHog 화면에서 직접 고친 내용은 다음 실행 때 덮어써지므로 패널은 스크립트에서 고친다.

### GitHub 트래픽 수집

GitHub 트래픽 API는 최근 14일치만 준다. `.github/workflows/github-traffic.yml`이 매일 03:17 UTC에 `scripts/github-traffic.mjs`를 돌려 `equipe-labs/equipe`의 값을 PostHog로 보낸다. 실패하면 GitHub가 Actions 실패 메일을 보낸다. **14일 넘게 멈추면 그 기간 데이터는 복구할 수 없다.**

| 이벤트 | 주기 | 속성 |
|---|---|---|
| `github_traffic_day` | 매 실행, 14일 창의 하루마다 1개(그날 12:00 UTC 시각) | `date`, `views`, `views_uniques`, `clones`, `clones_uniques` |
| `github_repo_snapshot` | 매 실행 1개 | `stars`, `forks`, `watchers`, `open_issues`, 14일 합계 `views_14d`·`clones_14d`(+`_uniques`), `referrer_views_14d`, `site_referrer_views_14d`, `site_referrer_share_pct`, `site_referrer_uniques_share_pct` |
| `github_referrer` | 매 실행, 상위 referrer마다(최대 10) | `date`, `referrer`, `count`, `uniques`, `is_site` |
| `github_popular_path` | 매 실행, 인기 경로마다(최대 10) | `date`, `path`, `title`, `count`, `uniques` |

모두 `distinct_id = github-traffic-bot`, `environment = production`, 사람 프로필은 만들지 않는다. 매일 14일 창 전체를 다시 보내므로 같은 날이 여러 번 들어간다. 이벤트 id는 날짜로 고정되고, 대시보드는 하루 단위 **최댓값**(max)으로 읽어서 중복 집계되지 않는다. 이 이벤트를 합계(total)로 집계하지 않는다.

### 지표 정의

| 지표 | 정의 | 패널 |
|---|---|---|
| 방문 | `$pageview` 수(`environment = production`). 쿠키 없는 수집이라 방문자 ≈ 페이지 로드다 | 방문: 일별·주별·언어별·국가별·채널별 |
| 국가 | PostHog GeoIP의 `$geoip_country_name` | 방문: 국가별 |
| AI 유입 | `ai_source`가 있는 방문 | AI 유입 |
| 전환 | 같은 페이지 로드 안에서 `cta_github_click` 또는 `install_command_copy`가 한 번 이상 일어남. PostHog Action "GitHub 전환"으로 묶었다 | 전환 퍼널, 성과표 |
| 전환율 | 전환한 방문 ÷ 방문 | 성과표 ①②, 전환 퍼널 |
| star | 수집 시점의 `stargazers_count` | ③ GitHub star 추이 |
| 리포 views / clones | GitHub 트래픽 API의 일별 값(고유 값은 GitHub가 센 고유 방문자) | 리포 views / clones |
| equipe.im 비중 | GitHub 상위 10개 referrer의 최근 14일 views 합계 중 equipe.im의 비율. 상위 10개 밖 referrer는 GitHub가 주지 않아 분모에 없다 | 리포 유입 중 equipe.im 비중 |
| 2차 언어 후보 | `browser_language_supported = false`인 방문을 `browser_language_base`별로 센 것과 전체 방문 대비 비중 | 언어 확장 두 패널 |

### 매주 볼 것과 결정 (월요일, 10분)

1. **성과표 ①②**(맨 위): 지난 30일 채널별·언어별 방문과 전환율. "어느 언어/채널이 성과를 내는가"는 여기서 답한다. 방문 100 미만인 행은 비율이 흔들리니 방향만 본다.
2. **star 추이, 리포 views, equipe.im 비중**: 사이트가 리포 유입을 실제로 만드는지. 비중이 오르는데 star가 평평하면 README 첫 화면을 개선할 차례다.
3. **AI 유입**: 늘고 있는 AI 서비스가 있으면 `llms.txt`와 FAQ를 그 질문에 맞춰 보강한다.
4. **언어 확장**: 미지원 언어 하나가 4주 연속 전체 방문의 5% 이상이면 번역 티켓을 만든다.

| 이런 걸 보면 | 이렇게 결정한다 |
|---|---|
| 한 언어의 방문은 많은데 전환율이 다른 언어의 절반 이하 | 그 언어의 히어로·CTA 번역을 다시 본다(디자이너 티켓) |
| 한 채널의 전환율이 가장 높다 | 그 채널에 콘텐츠를 더 낸다(예: `search`면 SEO 글, `social`이면 발표 글) |
| 방문은 느는데 전체 전환율이 떨어진다 | 유입 질이 바뀐 것. 채널 성과표에서 어느 채널이 끌어내렸는지 본다 |
| equipe.im 비중이 낮고 리포 views는 높다 | 리포 유입은 다른 곳이 만든다. 리포 referrer 표에서 1위 출처를 확인하고 그쪽과 연결한다 |
| 수집 패널이 비었다 | Actions의 "GitHub traffic to PostHog" 실행 기록을 본다. 14일 안에 고쳐야 데이터가 안 빈다 |

### 처음 설정 체크리스트 (사람이 할 일)

- [ ] **GitHub 토큰**: `equipe-labs/equipe`에 대한 fine-grained PAT. Repository access = `equipe-labs/equipe`만, 권한 = **Administration: Read-only**(트래픽 API에 필요) + Metadata: Read-only. 조직 정책상 승인이 필요하면 조직 관리자가 승인한다. 만료일을 정하면 캘린더에 갱신 알림을 둔다
- [ ] `equipe-labs/equipe-site` → Settings → Secrets and variables → Actions → **Secrets**
  - `GH_TRAFFIC_TOKEN`: 위 토큰
  - `POSTHOG_PROJECT_KEY`: 사이트와 같은 `phc_…` 키(Vercel의 `PUBLIC_POSTHOG_KEY` 값)
  - `POSTHOG_PERSONAL_API_KEY`: PostHog → Settings → Personal API keys에서 발급(`phx_…`). 범위: 이 프로젝트, scopes = `dashboard:write`, `insight:write`, `action:write`, `project:read`
- [ ] 같은 화면 **Variables**: `POSTHOG_PROJECT_ID`(PostHog URL의 `/project/<숫자>`). EU 리전이면 `POSTHOG_HOST = https://eu.i.posthog.com`, `POSTHOG_APP_HOST = https://eu.posthog.com`도 넣는다
- [ ] 이 브랜치를 main에 머지(예약 실행은 기본 브랜치에서만 돈다) → Actions → **GitHub traffic to PostHog** → Run workflow로 첫 수집
- [ ] Actions → **PostHog KPI dashboard** → Run workflow. 로그 마지막 줄의 대시보드 링크를 위 **링크**에 넣는다
- [ ] 다른 사람에게 보여줄 때: 대시보드 → Share → 팀원 초대 또는 공개 링크(공개 링크는 누구나 볼 수 있으니 필요할 때만)
