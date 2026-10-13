# SEO/GEO 점검과 검색엔진 등록

이 문서만 따라 하면 런칭 후 점검과 Google·Bing 등록을 끝낼 수 있다.
계정 작업(Search Console, Bing Webmaster Tools, Vercel DNS)은 사람이 한다.

- canonical 호스트: `https://equipe.im` (`www`, `http`는 여기로 301/308. [deploy.md](deploy.md))
- 언어 8개: `/` (en), `/ko/`, `/ja/`, `/zh-cn/`, `/es/`, `/pt-br/`, `/de/`, `/fr/`
- sitemap: `https://equipe.im/sitemap-index.xml` (→ `sitemap-0.xml`, 언어별 `xhtml:link` alternate 포함)

---

## 0. 순서 요약

1. `main`에 사이트가 병합되고 Production 배포가 끝났는지 확인한다(§1의 스크립트가 통과해야 한다).
2. §2 수동 점검: OG 미리보기, 구조화 데이터, Lighthouse.
3. §3 Google Search Console 등록(DNS TXT) → sitemap 제출.
4. §4 Bing Webmaster Tools 등록(Search Console에서 가져오기).
5. (선택) §5 네이버 서치어드바이저. IndexNow는 §6 참고(지금은 보류).

---

## 1. 자동 점검: `scripts/seo-check.mjs`

의존성 없는 Node 스크립트다. 라이브 사이트를 그대로 검사한다.

```sh
node scripts/seo-check.mjs                          # Production (https://equipe.im)
npm run build && npx astro preview                  # 로컬 빌드를 검사할 때
node scripts/seo-check.mjs http://localhost:4321
```

검사 항목(하나라도 실패하면 exit 1):

| 구분 | 항목 |
|---|---|
| 호스트 (Production만) | `https://www.` → apex, `http://` → `https://`, `/ko` → `/ko/` 리다이렉트, HSTS 등 보안 헤더, `equipe.im`에 `X-Robots-Tag` 없음 |
| 언어 페이지 8개 | 200 응답, `<html lang>`, canonical이 자기 자신, `noindex` 없음 |
| hreflang | 8개 언어 모두 + `x-default` → `/`, 양방향(서로 가리킴) |
| OG/Twitter | `og:title/description/url/image/locale`, `og:url` = canonical, `summary_large_image`, `og.png` 1200×630 PNG |
| JSON-LD | 파싱 가능, `Organization`·`WebSite`·`SoftwareApplication`·`FAQPage` 존재, FAQ 질문·답 완비, `inLanguage` 일치 |
| 크롤링 파일 | `robots.txt` 200·`Disallow: /` 없음·Sitemap 줄, sitemap에 8개 URL과 각 URL의 alternate 8개, `llms.txt` 200·텍스트 |

언어를 추가하면 스크립트 위쪽 `LOCALES`도 `src/i18n/locales.ts`에 맞춰 고친다.

---

## 2. 수동 점검 (도구가 브라우저·계정을 요구하는 것)

### OG 미리보기

| 대상 | 방법 | 확인할 것 |
|---|---|---|
| X | 글쓰기 창에 `https://equipe.im/` 붙여넣기(게시하지 않아도 카드가 보인다). Card Validator는 미리보기 기능이 없어졌다 | 큰 이미지 카드, 제목·설명 |
| LinkedIn | <https://www.linkedin.com/post-inspector/> 에 URL 입력 | 이미지, 제목. 예전 캐시가 보이면 여기서 다시 긁는다 |
| Slack | 아무 채널·DM에 URL 붙여넣기 | 링크 미리보기(unfurl)에 이미지·설명 |
| Discord | 아무 채널에 URL 붙여넣기 | 임베드 카드 |
| 언어별 | `https://equipe.im/ko/`를 한 번 더 붙여넣기 | 제목·설명이 한국어 |

### 구조화 데이터

- **Google 리치 결과 기준은 바뀌었다(2026-10 기준).**
  - **FAQ**: Google은 2026-05-07부터 FAQ 리치 결과를 모든 사이트에서 끝냈고, 2026-06부터 Rich Results Test도 FAQ를 지원하지 않는다. 그래서 "Rich Results Test로 FAQ 확인"은 더 이상 할 수 없다. `FAQPage` 마크업은 Bing, AI 답변 엔진(GEO)이 질문·답을 정확히 읽게 해 주므로 **그대로 둔다.**
  - **SoftwareApplication**: Google 리치 결과는 `aggregateRating` 또는 `review`가 **필수**다. equipe에는 실제 평점이 없으므로 Rich Results Test는 "리치 결과 대상 아님/필수 항목 누락"을 보여 주는 것이 **예상된 결과**다. 평점을 지어내 넣으면 Google 정책 위반(수동 조치 대상)이므로 넣지 않는다.
- 그래서 통과 기준은 **문법 유효성**으로 잡는다.
  1. <https://validator.schema.org/> 에 `https://equipe.im/` 과 `https://equipe.im/ko/` 를 넣는다.
  2. `Organization`, `WebSite`, `SoftwareApplication`, `FAQPage` 4개가 오류 0으로 나오면 통과(경고는 기록만).
  3. 참고로 <https://search.google.com/test/rich-results> 도 돌려 결과를 기록한다(위 이유로 SoftwareApplication은 비대상이 정상).

### Lighthouse

T-4의 기준 수치 문서는 리포에 없다. [i18n.md](i18n.md)의 "영어 페이지 Lighthouse 100 유지"를 기준으로 삼고, 4개 카테고리를 기록한다.

- 가장 쉬운 방법: <https://pagespeed.web.dev/> 에 `https://equipe.im/` 과 `https://equipe.im/ko/` (원하면 `/ja/`, `/zh-cn/`도)를 넣고 **모바일** 결과를 본다.
- 로컬 CLI(Chrome 필요):

  ```sh
  for p in "" ko/ ja/; do
    npx lighthouse "https://equipe.im/$p" --quiet --chrome-flags=--headless=new \
      --only-categories=performance,accessibility,best-practices,seo \
      --output=json --output-path="lh-${p%/}.json"
  done
  ```

- 기준: en Performance 100, 나머지 카테고리 ≥ 95. CJK 페이지는 시스템 폰트만 쓰므로 en과 비슷해야 한다. 미달이면 후속 티켓.

---

## 3. Google Search Console

**도메인 속성**으로 등록한다. `https://`, `http://`, `www`가 한 속성에 다 들어가고 소유권 확인이 DNS TXT 한 번으로 끝난다.

1. <https://search.google.com/search-console> → 속성 추가 → **도메인** → `equipe.im` 입력 → 계속.
2. Google이 보여 주는 `google-site-verification=...` 값을 복사한다(창은 열어 둔다).
3. **Vercel에 TXT 레코드 추가** (도메인을 Vercel에서 샀으므로 DNS도 Vercel이 관리한다)
   - Vercel 대시보드 → 팀 → **Domains** → `equipe.im` → **DNS Records** → Add
   - Name: **비워 둔다**(apex). Type: `TXT`. Value: 복사한 `google-site-verification=...` 전체. TTL 기본값.
   - CLI로 하려면: `vercel dns add equipe.im '' TXT 'google-site-verification=...'`
   - 기존 레코드(A/ALIAS, CNAME, CAA 등)는 **건드리지 않는다.** TXT는 여러 개 있어도 된다.
4. 몇 분 뒤 Search Console에서 **확인**. 실패하면 `dig +short TXT equipe.im` 으로 값이 보이는지 확인하고 다시 누른다(최대 몇 시간 걸릴 수 있다).
   - 확인 후에도 **TXT 레코드는 지우지 않는다.** 지우면 소유권이 풀린다.
5. **Sitemaps** → `https://equipe.im/sitemap-index.xml` 제출. 상태가 "성공"이고 발견된 URL이 **8**이면 된다.
6. **URL 검사**에 `https://equipe.im/` 를 넣고 → "실시간 URL 테스트" → "색인 생성 요청". `/ko/` 등 나머지 7개 언어도 같은 방식으로 요청해도 된다(하루 할당량 내).
7. 며칠 뒤 확인할 것
   - **페이지(색인 생성)**: 8개가 "색인 생성됨". "중복, Google이 다른 표준을 선택함"이 언어 페이지에 뜨면 hreflang/canonical 문제이므로 후속 티켓.
   - **HTTPS**, **Core Web Vitals**: 경고 없음(트래픽이 적으면 데이터 없음이 정상).
   - 국제 타겟팅 보고서는 Google이 없앴다. hreflang 오류는 URL 검사로만 본다.
8. (권장) 설정 → 사용자 및 권한에서 팀원을 추가한다. 소유자는 최소 2명.

## 4. Bing Webmaster Tools

Google 등록을 먼저 끝냈다면 **가져오기**가 가장 빠르다. 소유권 확인과 sitemap이 한 번에 넘어온다.

1. <https://www.bing.com/webmasters> → Microsoft 계정(또는 Google 계정)으로 로그인.
2. **Import your sites from GSC** → Google 계정 연결 → `equipe.im` 선택 → Import.
   - 가져오기를 쓰지 않을 때: "Add your site manually" → `https://equipe.im/` → **DNS 확인**을 골라 Bing이 주는 CNAME(또는 TXT) 레코드를 §3과 같은 방법으로 Vercel DNS에 추가한다.
3. **Sitemaps**에 `https://equipe.im/sitemap-index.xml` 이 있는지 확인하고, 없으면 제출.
4. **URL Inspection**으로 `https://equipe.im/` 확인, "Request indexing".
5. Bing 색인은 ChatGPT Search·Copilot 등 여러 AI 답변 엔진의 출처로 쓰인다. GEO 관점에서 Google만큼 중요하다.

## 5. (선택) 네이버 서치어드바이저

한국어 페이지(`/ko/`) 유입을 노린다면 등록한다. 네이버는 DNS 확인을 지원하지 않아 **HTML 파일 업로드**나 **메타 태그** 방식이고, 그래서 리포 변경(티켓)이 필요하다.

1. <https://searchadvisor.naver.com/> → 웹마스터 도구 → 사이트 등록 → `https://equipe.im`
2. "HTML 파일 업로드"를 고르고 받은 `naver<hash>.html` 파일을 리포의 `public/`에 넣는 티켓을 만든다(배포 후 확인 클릭).
3. 요청 → 사이트맵 제출에 `https://equipe.im/sitemap-index.xml`.
4. robots.txt는 이미 모든 봇을 허용하므로(Yeti 포함) 고칠 것은 없다.

## 6. IndexNow: 지금은 보류

IndexNow는 URL이 바뀌었을 때 Bing·Yandex·Naver·Seznam 등에 즉시 알리는 프로토콜이다. **Google은 지원하지 않는다.**

보류하는 이유:
- 페이지가 8개이고 자주 바뀌지 않는다. Bing은 제출된 sitemap을 주기적으로 읽으므로 이득이 작다.
- 정적 사이트라 "배포 후 핑"을 자동화하려면 GitHub Action이나 Vercel Deploy Hook 연동이 따로 필요하다.

블로그·문서처럼 페이지가 자주 추가되면 그때 적용한다. 방법:
1. 32자 이상 임의 키를 만들고 `public/<key>.txt`(내용은 키 그대로)를 추가한다.
2. 배포 후 바뀐 URL을 보낸다:

   ```sh
   curl -s -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json' -d '{
     "host": "equipe.im", "key": "<key>", "keyLocation": "https://equipe.im/<key>.txt",
     "urlList": ["https://equipe.im/", "https://equipe.im/ko/"]
   }'
   ```
3. 응답 200/202면 성공. Bing Webmaster Tools → IndexNow 메뉴에서 수신 내역이 보인다.

---

## 7. 점검 기록

### 2026-10-13 (T-5)

**라이브(https://equipe.im): 점검 불가.** 모든 경로(`/`, `/ko/`, `/robots.txt`, `www`)가 **404**다. `main` 브랜치에 사이트 코드가 아직 병합되지 않아(첫 커밋만 있음) Production 배포에 페이지가 없다. 병합·배포 뒤 §1~§2를 다시 돌린다.

**로컬 빌드(T-8 + T-9 병합본, `astro preview`)**: `scripts/seo-check.mjs` **188개 항목 전부 통과**.

| 항목 | 로컬 빌드 | 라이브 |
|---|---|---|
| 8개 언어 페이지 200, `<html lang>` | 통과 | 404 |
| canonical 자기 자신 | 통과 | 미확인 |
| hreflang 8개 + x-default, 양방향 | 통과 | 미확인 |
| sitemap 8 URL, URL마다 alternate 8개 | 통과 | 미확인 |
| robots.txt, llms.txt | 통과 | 404 |
| JSON-LD 4종 파싱·필수 필드 | 통과 | 미확인 |
| OG 태그, og.png 1200×630 (37 KB) | 통과 | 미확인 |
| HTTPS·www→apex·보안 헤더 | 해당 없음(설정은 `vercel.json`에 있음) | 미확인 |
| OG 미리보기(X/Slack/Discord/LinkedIn) | 해당 없음 | 미확인 |
| Lighthouse | 샌드박스에서 Chrome 실행 불가로 측정 못 함 | 미확인 |
| Rich Results Test | §2: FAQ는 Google이 지원 종료, SoftwareApplication은 평점이 없어 비대상이 정상 | 미확인 |

**남은 개선점(필수 아님)**
- `og:image:width`/`og:image:height`/`og:image:type` 메타가 없다. 넣으면 일부 플랫폼이 첫 공유 때 이미지를 바로 그린다.
- `Organization.logo`가 SVG(`favicon.svg`)다. Google은 112×112 이상 래스터 로고를 권장하므로 PNG 로고로 바꾸는 편이 안전하다.
