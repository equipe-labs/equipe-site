# 배포: Vercel + equipe.im

사이트는 Vercel이 GitHub 리포를 보고 자동으로 빌드·배포한다.

| 이벤트 | 결과 |
|---|---|
| `main`에 push(머지) | **Production** 배포 → `https://equipe.im` |
| PR 생성·업데이트 | **Preview** 배포 → PR에 Vercel 봇이 미리보기 URL 코멘트, 커밋에 `Vercel` 체크 |

canonical 호스트는 **`https://equipe.im`** 하나다. `www.equipe.im`, `http://`, `*.vercel.app`은 모두 여기로 모이거나 검색에서 빠진다.

배포 설정은 전부 리포의 [`vercel.json`](../vercel.json)에 있다. Vercel 대시보드에서 바꾸는 것은 도메인과 요금제뿐이다.

---

## 사람이 할 일 (체크리스트)

- [ ] **요금제 확인** — Hobby는 비상업 용도 전용이다. equipe가 상업 프로젝트라면 **Pro**로 만든다. Pro가 필요하면 팀(Team)을 만들어 그 아래에 프로젝트를 둔다.
- [ ] **리포 import** — Vercel → Add New → Project → `equipe-labs/equipe-site` Import
  - GitHub 앱 권한에서 `equipe-labs` 조직의 이 리포 접근을 허용한다.
  - Framework Preset: **Astro** (자동 감지). Build/Output/Install 설정은 `vercel.json`과 `package.json`이 정하므로 **건드리지 않는다**.
  - Root Directory: 리포 루트(그대로)
  - Environment Variables: 지금은 없음
  - Deploy를 누르면 첫 Production 배포가 `equipe-site-*.vercel.app`에 뜬다.
- [ ] **Production 브랜치가 `main`인지 확인** — Project → Settings → Environments → Production → Branch Tracking
- [ ] **도메인 추가** — Project → Settings → Domains
  1. `equipe.im` 추가 → Production에 연결
  2. `www.equipe.im` 추가 → **리다이렉트 없이** Production에 연결
     - 추가할 때 Vercel이 "www를 equipe.im으로 리다이렉트" 옵션(307/308)을 제안하는데, 고르지 않아도 된다. `vercel.json`이 www → `https://equipe.im` **301**을 처리한다. 대시보드에서 리다이렉트를 걸면 그쪽이 먼저 적용돼 308이 된다(동작상 문제는 없다).
  3. 도메인을 Vercel에서 샀으므로 DNS 레코드는 Vercel이 자동으로 만든다. 두 도메인 모두 **Valid Configuration**이 뜨고 인증서가 발급될 때까지 기다린다(보통 몇 분).
- [ ] **(권장) Preview 보호 설정 확인** — Settings → Deployment Protection. 기본값(Standard Protection)이면 Preview URL은 Vercel 로그인한 팀원만 열 수 있다. 외부 사람에게 Preview를 보여줄 일이 있으면 끄거나 Shareable Link를 쓴다. 어느 쪽이든 Preview는 `noindex`다.
- [ ] **(권장) 브랜치 보호** — GitHub → Settings → Branches → `main` 규칙에서 `Vercel` 체크를 required로 지정
- [ ] **기존 GitHub Pages 끄기** — T-3 설정을 이미 했다면 리포 Settings → Pages에서 Custom domain을 지우고 Source를 None으로. 조직 Pages에 `equipe.im` 소유 확인을 해 뒀다면 그대로 둬도 된다(탈취 방지 용도로 무해).
- [ ] 이 PR의 Preview URL과 머지 후 Production을 아래 "확인" 절의 curl로 점검

---

## `vercel.json`이 하는 일

### 리다이렉트

| 요청 | 응답 |
|---|---|
| `https://www.equipe.im/<path>` | **301** → `https://equipe.im/<path>` |
| `http://equipe.im/...` | **308** → `https://...` (Vercel 플랫폼이 자동으로 처리하며 상태 코드를 바꿀 수 없다. 308은 301과 같은 영구 리다이렉트로, 검색엔진도 동일하게 취급한다) |
| `/ko` 처럼 슬래시 없는 페이지 경로 | **301** → `/ko/` |

**trailing slash 정책: 페이지는 항상 `/`로 끝난다.** `astro.config.mjs`의 `trailingSlash: 'always'`와 맞춰 canonical·sitemap·실제 URL이 같다.
파일(`/og.png`, `/llms.txt`처럼 마지막 경로에 `.`이 있는 것), `/ingest/*`, `/_vercel/*`은 리다이렉트하지 않는다.
Vercel의 내장 `"trailingSlash": true`를 쓰지 않은 이유: `/ingest/array/<key>/config` 같은 PostHog 요청까지 리다이렉트해 분석 요청이 깨지기 때문이다.

### 보안 헤더 (모든 응답)

- `Strict-Transport-Security: max-age=63072000; includeSubDomains` (2년). `preload`는 일부러 뺐다. HSTS preload 목록에 올리면 되돌리기 어렵기 때문에, 서브도메인 계획이 정해진 뒤에 따로 결정한다.
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()`

### 캐시

- `/_astro/*` (Astro가 파일명에 해시를 붙인 CSS·JS·폰트): `public, max-age=31536000, immutable`
- 그 밖의 모든 것(HTML, `og.png`, `robots.txt` 등 해시 없는 파일): `public, max-age=0, must-revalidate`. Vercel CDN은 배포마다 캐시를 비우므로 새 배포가 바로 보인다.
- `/ingest/*`는 PostHog 응답의 캐시 헤더를 그대로 둔다.

### Preview는 검색에서 제외

- 호스트가 `equipe.im`이 **아닌** 모든 응답에 `X-Robots-Tag: noindex`를 붙인다. Preview URL과 `*.vercel.app` Production 별칭이 모두 해당한다.
- canonical은 빌드 시 `astro.config.mjs`의 `site`(`https://equipe.im`)로 만들어지므로, Preview에서도 항상 `https://equipe.im/...`을 가리킨다.

### PostHog 리버스 프록시

| 경로 | 전달처 |
|---|---|
| `/ingest/static/*` | `https://us-assets.i.posthog.com/static/*` |
| `/ingest/*` | `https://us.i.posthog.com/*` |

- 리전은 **US**로 잡았다. 분석 티켓이 아직 없어서 PostHog 기본값을 따랐다. PostHog 프로젝트를 **EU**에 만들면 두 줄을 `eu-assets.i.posthog.com`, `eu.i.posthog.com`으로 바꾼다. 리전은 PostHog 프로젝트 생성 시 정해지고 나중에 못 바꾼다.
- 클라이언트 설정(분석 티켓에서): `posthog.init(KEY, { api_host: '/ingest', ui_host: 'https://us.posthog.com' })`

---

## 확인

Preview(이 PR에 달린 URL)에서:

```sh
P=https://<preview-url>
curl -sI $P/ | grep -i -E '^(HTTP|x-robots-tag)'        # 200, x-robots-tag: noindex
curl -s  $P/ | grep -o '<link rel="canonical"[^>]*>'    # href="https://equipe.im/"
curl -sI $P/ingest/flags/?v=2 | head -1                  # PostHog가 응답(4xx여도 PostHog 응답이면 전달된 것)
```

> Preview에 Deployment Protection이 켜져 있으면 curl은 401을 받는다. 브라우저(로그인 상태)의 개발자 도구 → Network에서 응답 헤더를 보거나, Settings → Deployment Protection → Protection Bypass for Automation 토큰을 `-H "x-vercel-protection-bypass: <token>"`으로 붙인다.

머지 후 Production에서:

```sh
curl -sI https://equipe.im/          | grep -i -E '^(HTTP|strict-transport|x-content-type|referrer-policy|permissions-policy|cache-control|x-robots-tag)'
#   HTTP/2 200, 보안 헤더 4개, cache-control: public, max-age=0, must-revalidate, x-robots-tag 없음
curl -sI https://www.equipe.im/      | grep -i -E '^(HTTP|location)'   # 301 → https://equipe.im/
curl -sI http://equipe.im/           | grep -i -E '^(HTTP|location)'   # 308 → https://equipe.im/
curl -sI http://www.equipe.im/       | grep -i -E '^(HTTP|location)'   # 308 → https://www... → 301 → https://equipe.im/
curl -sI https://equipe.im/$(curl -s https://equipe.im/ | grep -o '_astro/[^"]*\.css' | head -1) | grep -i cache-control
#   public, max-age=31536000, immutable
curl -sI https://equipe.im/ingest/static/array.js | head -1          # HTTP/2 200 (PostHog JS)
```

---

## 나중에 서버 기능이 필요해지면

지금은 `output: 'static'`이라 `dist/`의 정적 파일만 올라간다. API 라우트나 SSR 페이지가 필요해지면:

1. `npx astro add vercel` — `@astrojs/vercel` 어댑터를 설치하고 `astro.config.mjs`에 `adapter: vercel()`를 넣는다.
2. 페이지는 기본 정적(prerender)으로 두고, 서버에서 돌 라우트에만 `export const prerender = false`를 붙인다. (전체를 SSR로 바꾸려면 `output: 'server'`.)
3. `vercel.json`의 `outputDirectory`를 지운다. 어댑터가 Vercel Build Output(`.vercel/output`)을 직접 만든다.
4. 비밀 값은 Vercel → Settings → Environment Variables에 Production/Preview를 나눠 넣는다.

`vercel.json`의 리다이렉트·헤더·rewrite는 어댑터를 써도 그대로 적용된다.
