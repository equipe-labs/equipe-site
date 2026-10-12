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
| `environment` | `production` / `preview` / `local` |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | 방문 URL에 있을 때만 |
| `ai_source` | AI 유입일 때만. `chatgpt`, `perplexity`, `claude`, `gemini`, `copilot`, … |

**AI 유입 분류**: 방문 시 `document.referrer`의 호스트를 `ai-sources.ts`의 목록과 비교한다. 서브도메인도 맞는다. referrer가 없으면 `utm_source`(ChatGPT는 링크에 `utm_source=chatgpt.com`을 붙인다)로 한 번 더 본다. 새 AI 서비스는 `AI_SOURCES`에 한 줄 추가하면 된다.

## 이벤트 사전

이름은 `snake_case`. 공통 속성은 위 표를 따로 붙이지 않는다.

| 이벤트 | 속성 | 발생 시점 |
|---|---|---|
| `$pageview` | — | 페이지 로드 후 PostHog가 뜨면 한 번. (수동 전송: 공통 속성을 먼저 등록하기 위해) |
| `cta_github_click` | `location`: `hero` / `header` / `footer` | GitHub로 가는 CTA·링크 클릭 |
| `install_command_copy` | `command`: `install` / `run` / `try` | 시작하기 코드 블록의 복사 버튼 클릭 |
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
