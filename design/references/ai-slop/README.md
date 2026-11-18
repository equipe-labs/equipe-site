# AI 슬롭으로 읽히는 것과 아닌 것

조사일 2026-11-08. 계기: round3 세 안(a·b·c)이 "걍 뭔가 존나 AI 슬롭 같아"로 반려됨. 기준선은 Cursor(`../cursor/1440.jpg`)와 Linear(`../linear/1440.jpg`).

**한 줄 결론.** 우리는 1세대 슬롭(보라 그라데이션·글로우·유리·아이콘 카드 3개)은 피했다. 그 대신 **2세대 슬롭**에 정확히 들어갔다. "근흑 배경 + 포인트색 하나", "크림·세리프 웜 에디토리얼", "모노스페이스 라벨, `A · B · C` 메타 줄, 링크마다 화살표"가 그것이다. 보라를 금지하면 그다음으로 흔한 모양으로 옮겨 갈 뿐이라는 지적이 바로 이 경우다([Capital & Compute, 2026-09](https://capitalandcompute.net/blog/fix-ai-slop-design/)). 세 안은 뼈대가 같다. 헤드라인, 서브, CTA 둘, 모노 메타 줄, 오른쪽이나 아래의 "T-5 Publish the pricing page?" 카드까지 똑같고 폰트와 색만 바꿔 입혔다. 그림도 빛도 없다.

출처 성격: 대부분 개발자·디자이너 블로그, 도구 문서, YC 영상의 요약본이다. 정량 자료는 Krebs의 Show HN 분석 하나뿐이다. YC 영상 두 편은 원본 YouTube 대신 요약 페이지로 확인했다.

---

## 슬롭 신호 (tells)

### 레이아웃
- 가운데 정렬 히어로, 그 위의 알약 배지, 버튼 둘, 로고 줄, 기능 카드 3개 — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [prg.sh](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- 아이콘을 얹은 같은 모양의 카드 3개나 6개 그리드 (Show HN의 20.1%) — [Krebs](https://adriankrebs.ch/blog/design-slop/), [GIGAZINE 요약](http://gigazine.net/gsc_news/en/20260423-design-slop)
- 카드 안의 카드 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop), [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 숫자 띠 (사용자 수, 가동률, 별점; 12.2%) — [Krebs](https://adriankrebs.ch/blog/design-slop/)
- 순서가 아닌 내용에 붙인 01/02/03 번호 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop), [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 모든 구간에 같은 간격을 둔 단조로운 리듬 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 내용보다 먼저 정해 둔 구조 ("구조는 내용 다음에") — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 어디서 본 것 같은 히어로와 카드 배치 — [dev.to (lyd)](https://dev.to/lyd_lyd_d4869af25d33ce0eb/why-do-ai-generated-websites-all-look-the-same-k2j)

### 타입
- 모든 글자를 Inter로, 특히 가운데 정렬 히어로 — [Krebs](https://adriankrebs.ch/blog/design-slop/), [prg.sh](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- 유행 폰트 Space Grotesk·Instrument Serif·Geist·Syne·Fraunces (15.8%) — [GIGAZINE 요약](http://gigazine.net/gsc_news/en/20260423-design-slop), [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 이탤릭 세리프 디스플레이 헤드라인, 또는 Inter 헤드라인 속 세리프 이탤릭 한 단어 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop), [Krebs](https://adriankrebs.ch/blog/design-slop/)
- 문장 전체를 거대하게 키운 헤드라인, 자간을 짓눌러 좁힌 디스플레이 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 크기 차이가 작아 납작한 위계 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 자간을 벌린 대문자 아이브로우, 모노스페이스 라벨 — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [Krebs](https://adriankrebs.ch/blog/design-slop/)

### 색
- 보라·인디고 주색, 보라→파랑 그라데이션 글자 — [prg.sh](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website), [Krebs](https://adriankrebs.ch/blog/design-slop/)
- 상시 다크 모드와 중간 회색 본문, 겨우 통과하는 대비 (20.3%) — [Krebs](https://adriankrebs.ch/blog/design-slop/)
- 근흑 배경에 네온 포인트 하나 (기술 회사의 "기본 답") — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 크림 배경, 세리프 디스플레이, 테라코타 포인트 (2세대 "웜 에디토리얼") — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 어두운 바탕, 흐린 그라데이션, 빛나는 장식 ("Linear 효과" 모방) — [Daryl Ginn, The Linear effect (2023)](https://rectangle.substack.com/p/the-linear-effect), [LogRocket](https://blog.logrocket.com/ux-design/linear-design)
- 이유 없이 고른 색 (제품에서 나오지 않은 팔레트) — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)

### 컴포넌트·표면
- 기본값 그대로의 shadcn/ui (23.5%) — [Krebs](https://adriankrebs.ch/blog/design-slop/), [GIGAZINE 요약](http://gigazine.net/gsc_news/en/20260423-design-slop)
- 글래스모피즘, backdrop-blur 내비 — [Krebs](https://adriankrebs.ch/blog/design-slop/), [LogRocket](https://blog.logrocket.com/ux-design/linear-design)
- 카드 위쪽이나 왼쪽의 색 띠 — [Krebs](https://adriankrebs.ch/blog/design-slop/)
- 헤어라인 테두리와 넓고 흐린 그림자의 조합, 어디에나 같은 큰 라운드 (작은 카드에 24px 이상) — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop), [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 비편집 콘텐츠에 헤어라인 괘선, 직각, 신문식 촘촘한 단 — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 링크마다 붙은 화살표 `→` — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 똑같은 Lucide 아이콘 (zap, sparkles, rocket…) — [검색 요약에 인용된 dev.to 글들](https://dev.to/alanwest/how-to-fix-the-ai-generated-look-in-your-frontend-1ahh) (원문 문장은 미확인)

### 카피
- "Elevate your workflow"류 빈말, 출처 없는 지표 — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- streamline·empower·supercharge 같은 유행어, "X가 아니라 Y" 경구 리듬, 엠대시 남발 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- `A · B · C` 메타 문자열 — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- 라벨, 서브라벨, 도움말이 같은 말을 되풀이 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 무엇인지 5초 안에 알 수 없는 헤드라인, 재치를 앞세운 문구 — Ryo Lu (Cursor 디자인 총괄), [YC 2025-11-20 요약](https://summify.io/discover/cursor-head-of-design-roasts-startup-websites-RynySr)

### 모션
- 모든 구간에 같은 페이드·슬라이드업, 튀는 이징, 올라가는 숫자 — [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 스크롤 재킹, 의미 없는 호버 애니메이션 — Raphael Schaad, [YC 2026-03-06 요약](https://summify.io/discover/common-mistakes-with-vibe-coded-websites-DNSXlB)
- 끊기는 호버 효과, 정신 사나운 애니메이션, 들쭉날쭉한 스타일 — Ryo Lu, [YC 요약](https://summify.io/discover/cursor-head-of-design-roasts-startup-websites-RynySr)

### 이미지
- "지능"을 설명하지 않고 암시만 하는 흐린 추상 그라데이션 ("디지털 인상주의") — [DesignRush, 2026-06](https://www.designrush.com/agency/website-design-development/trends/ai-startup-homepage-design)
- 손으로 그린 듯한 어설픈 SVG 마스코트나 일러스트 — [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)
- 제품이 실제로 낸 결과 대신 설명이나 다시 그린 도식 — [superdesign](https://superdesign.dev/blog/fix-generic-ai-landing-page) (요약 인용, 원문 문장은 미확인)

### 왜 생기나
- 모델은 가장 많이 링크된 예시를 배운다. 그래서 다음 주면 스타트업 사이트가 다 같아진다 — [YC 2026-03 요약](https://summify.io/discover/common-mistakes-with-vibe-coded-websites-DNSXlB)
- Tailwind 데모의 `bg-indigo-500`이 퍼졌다. 모델이 내놓는 건 튜토리얼들의 중앙값이다 — [prg.sh, 2025-10](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- 신호 하나는 증거가 아니다. 문제는 출력을 그대로 쓰는 것이다 (Show HN 1,590곳 중 22%가 신호 4개 이상) — [Krebs, 2026-04-20](https://adriankrebs.ch/blog/design-slop/)

---

## 우리 세 안에서 걸리는 것

좌표는 1440×900 폴드 기준(x, y px)이다. "출처"가 붙은 항목은 위 신호와 연결되고, 붙지 않은 판단은 미확인으로 표시했다.

### 공통 (세 안 모두)
- **뼈대가 같다.** 헤드라인 "Your whole startup team. You just approve.", 같은 서브, `Download for Mac` + `Or install the CLI →`, 모노 메타 줄, 같은 T-5 장면. 차이는 폰트와 색뿐이다. 구조가 내용보다 먼저 정해졌다는 신호다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **키 비주얼이 없다.** 그림도, 빛도, 질감도 없는 평평한 단색 배경이다. Cursor는 유화 위에 앱을 띄우고(`../cursor/1440.jpg`, y 350 아래), Linear는 제품 프레임 아래로 빛이 떨어진다(`../linear/1440.jpg`, y 520 아래). 우리 화면에는 시선이 머물 곳이 없다.
- **`A · B · C` 모노 메타 줄**: "Free and open source · macOS 12+ · Runs on your Claude or ChatGPT plan". a는 y≈328, b는 y≈568, c는 y≈593 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **화살표 링크** "Or install the CLI →", 그리고 b는 내비 CTA에도 `→`를 붙였다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **상시 다크, 중간 회색 서브** ([Krebs](https://adriankrebs.ch/blog/design-slop/)).
- **제품을 HTML로 다시 그린 도식.** 실제 앱 캡처가 아니다. 상태 점, 모노 상태어, 키캡 `[1]` `[2]`가 "그럴듯한 대시보드"의 문법이다 (미확인, 판단).
- **헤드라인이 슬로건이다.** "무엇인가"(맥 앱? 에이전트? 범주명)가 없다. Cursor의 "Cursor is your coding agent for…", Linear의 "The product development system for…"는 범주 명사로 시작한다 (Ryo Lu의 명확성 원칙, [YC 요약](https://summify.io/discover/cursor-head-of-design-roasts-startup-websites-RynySr)). 두 박자 마침표 리듬도 AI 카피 냄새가 난다 (미확인).

### a — 풀폭 앱 목업형
- **헤드라인 (x150–820, y105–225)**: 굵고 자간이 좁은 산세리프 두 문장. Inter 계열에 문장 전체를 크게 키웠다 ([Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)). Linear도 크고 자간이 좁다. 그래서 이것만으로 슬롭은 아니다. 다만 아래에 받쳐 주는 게 없어서 "Linear를 흉내 낸 템플릿"으로 읽힌다 (미확인).
- **앱 프레임 (x152–1287, y375–900)**: 빛도 깊이도 없는 근흑 바탕에 헤어라인만 겹겹이 있다. 상단 상태줄 "Now · members 6 · working 3 · waiting on you 1"(y≈394)은 또 하나의 모노 메타 줄이고, "How T-5 got here"(y≈646)도 모노 라벨이다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **주황 점 (designer/backend 행, "Working")**: 근흑 바탕에 포인트색 하나. 기술 회사의 기본 답이다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **결정 카드 (x925–1270, y430–612)**: 패널 안에 두꺼운 흰 테두리 라운드 카드가 들어 있다. 카드 속 카드다 ([Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)).
- **CTA 중복**: 내비 오른쪽 위 흰 버튼과 히어로 흰 버튼이 같은 말을 한다. 사소하지만 템플릿 냄새가 난다 (미확인).

### b — 세리프 웜 에디토리얼
- **헤드라인 (x170–560, y150–370)**: 크림색 압축 세리프 디스플레이로, Instrument Serif 계열 인상이다. 유행 폰트 목록과 "이탤릭·세리프 디스플레이 헤드라인" 신호에 걸린다 ([Krebs](https://adriankrebs.ch/blog/design-slop/), [Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)). 실제 폰트명은 미확인이다.
- **팔레트 전체**: 따뜻한 근흑, 크림 글자, 초록 포인트. Capital & Compute가 2세대 웜 에디토리얼 기본값과 근흑+네온 하나로 이름 붙인 조합 둘을 섞었다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **알약 CTA (x170–343, y497–540)**: 완전히 둥근 크림 알약 버튼이다. 기본값 느낌이 난다 (미확인).
- **오른쪽 카드 (x803–1270, y155–607)**: 큰 라운드(약 24px), 헤어라인 테두리. 카드 안의 강조 행(y420–507)이 또 카드다 ([Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)). 카드 제목 "Right now, in the squad"에 세리프, 본문에 산세리프, 시각에 모노. 한 화면에 서체 셋이다.
- **초록 화살표 문장 (y≈528)** "→ Approve, and frontend publishes…": 화살표 장식이다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **캡션 "One frame of the moving scene. Sample data." (y≈632)**: 비주얼이 진짜가 아니라고 스스로 말한다 (미확인, 판단).
- **빈 띠 (y640–760)와 y763의 배경색 전환**: 내용 없이 면만 바뀌어 미완성처럼 보인다 (미확인).

### c — 2단 SaaS 히어로
- **배치 자체**: 왼쪽 헤드라인과 CTA, 오른쪽 제품 카드. "the same hero section"의 표준형이다 ([dev.to (lyd)](https://dev.to/lyd_lyd_d4869af25d33ce0eb/why-do-ai-generated-websites-all-look-the-same-k2j)).
- **숫자 띠 (y776–840)** "● 222 tickets · 20 days · 1 person approving": 숫자 배너와 모노 메타 줄이 겹쳤다 ([Krebs](https://adriankrebs.ch/blog/design-slop/), [Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **모노 3중첩**: 메타 줄(y≈593), 캡션(y≈636), 숫자 띠(y≈808), 표의 상태어 "Working/Done/Your turn"까지 모노다. 장식용 모노다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
- **파란 버튼 "Publish now Recommended [1]" (x739–981, y545–589)**: 페이지에서 유일한 채도 높은 색이다. 히어로의 흰 주 버튼과 주 버튼 문법이 둘로 갈린다. 일관성이 깨진다는 지적이다 ([YC 요약](https://summify.io/discover/common-mistakes-with-vibe-coded-websites-DNSXlB)). Tailwind blue 기본값인지는 미확인이다.
- **결정 패널 (x712–1311, y363–615)**: 두꺼운 흰 테두리 박스가 표 아래에 붙었다. a와 같은 카드 속 강조 상자다.
- **헤어라인 행 목록 (y175–360)**: 점, 티켓번호, 역할, 제목, 결과, 상태. 정보는 맞지만 그림이 아니라 표다. 폴드에서 감정이 생기지 않는다 (미확인).

---

## 공예처럼 보이게 하는 것

1. **키 비주얼을 먼저 정한다. 레이아웃은 그다음이다.** Cursor는 유화 풍경 위에 실제 앱 창을 얹는다(`../cursor/1440.jpg` y350–900, [saasui.design 패턴 설명](https://www.saasui.design/pattern/landing/cursor)). Linear는 제품 프레임에 빛의 감쇠를 준다(`../linear/1440.jpg` y520 아래). 단, 흐린 보라 블롭이나 글로우 같은 "Linear 효과" 복제는 안 된다 ([Ginn](https://rectangle.substack.com/p/the-linear-effect)). 그림이나 빛은 equipe만의 것이어야 한다.
2. **실제 제품 화면을 진짜처럼 보여 준다.** Cursor는 "Mission Control" 플랜 문서, 모델 선택기 "Grok 4.7", 겹친 CLI 창, `+135 -21` diff를 보여 준다. Linear는 실제 이슈 DRV-8852, 활동 로그, 에이전트 채팅 "Thinking…"을 보여 준다. 다시 그린 도식이나 "Sample data" 캡션 대신 진짜 앱 캡처를 쓴다 (두 스크린샷; [superdesign](https://superdesign.dev/blog/fix-generic-ai-landing-page); 에이전트가 무엇과 연결되는지 보여 주라는 Ryo Lu, [YC 요약](https://summify.io/discover/cursor-head-of-design-roasts-startup-websites-RynySr)).
3. **헤드라인은 범주 명사로, 평이하게.** "X is your … for …" / "The … system for …". 5초 안에 무엇이고 누구를 위한 것인지 알게 한다 (두 스크린샷; [Ryo Lu 요약](https://summify.io/discover/cursor-head-of-design-roasts-startup-websites-RynySr)). Cursor는 헤드라인을 크게 키우지 않았다(약 28px, 보통 굵기). 자신감은 크기에서 나오지 않는다 (`../cursor/1440.jpg` y165–230).
4. **장식을 걷어낸다.** 모노 메타 줄, 아이브로우, 링크마다 붙은 화살표, 캡션, 숫자 띠를 뺀다. Linear의 서브는 한 줄이고 링크는 "New Loops →" 하나다(`../linear/1440.jpg` y440). Cursor는 버튼 둘과 내비뿐이다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
5. **구조는 느껴지게, 보이지 않게.** 테두리와 구분선을 줄이고 대비를 낮춘다. 크롬(사이드바, 탭)은 물러나고 과업 내용이 앞에 선다. 강조는 두꺼운 흰 테두리가 아니라 밝기와 위계로 준다 ([Linear, A calmer interface, 2026-03-12](https://linear.app/now/behind-the-latest-design-refresh)).
6. **색은 제품에서 끌어내고, 토큰마다 조율한다.** Linear는 차가운 파랑기 회색을 덜 채도 있는 따뜻한 회색으로 옮기면서 탁해지지 않게 hue·chroma·lightness를 토큰별로 맞췄다 ([Linear](https://linear.app/now/behind-the-latest-design-refresh)). "근흑+포인트 하나"나 "크림+세리프" 같은 기본 답이 아니라 브리프에서 나온 팔레트여야 한다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/)).
7. **포인트색은 의미가 있을 때만.** Cursor 화면에서 채도는 주황 "Build" 버튼과 diff의 초록·빨강에만 있다. 상태 점마다 색을 칠하지 않는다 (`../cursor/1440.jpg` x1207–1251 y465, x218–268 y726).
8. **서체 수를 줄이고 위계를 벌린다.** 한 화면에 세리프, 산세리프, 모노 셋이면 많다. 크기 단계가 붙어 있으면 위계가 납작해진다 ([Impeccable](https://924b8765.impeccable-2rv.pages.dev/slop)). Inter 자체가 죄는 아니다. Linear도 산세리프 하나로 크래프트를 낸다. 실행의 문제다 (Linear 사이트 서체명은 미확인).
9. **모션은 한 번의 연출, 아니면 사용자 행동에 대한 반응.** 모든 구간에 페이드업을 걸지 않고, 스크롤 재킹도 하지 않는다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [Schaad 요약](https://summify.io/discover/common-mistakes-with-vibe-coded-websites-DNSXlB)).
10. **기준선을 복제하지 않는다.** Ryo Lu는 Notion이나 Cursor와 너무 비슷해 보이는 사이트를 지적했다 ([YC 요약](https://summify.io/discover/cursor-head-of-design-roasts-startup-websites-RynySr)). Cursor와 Linear에서 가져올 것은 태도(실물, 절제, 고유한 그림이나 빛)다. 모양은 가져오지 않는다.
11. **규칙을 문서로 박고 기계로 검사한다.** DESIGN.md에 색, 타입, 레이아웃 규칙을 적고, 위 신호를 스캐너나 체크리스트로 돌린 뒤에 보여 준다 ([Capital & Compute](https://capitalandcompute.net/blog/fix-ai-slop-design/), [Impeccable 저장소](https://github.com/pbakaus/impeccable)).

---

### 참고: 확인 못 한 것
- YC 영상 두 편(Ryo Lu 2025-11-20, Raphael Schaad 2026-03-06)은 원본 YouTube URL과 대본을 확인하지 못했다. 요약 페이지 문장만 인용했다.
- Anthony Hobday의 Linear 사이트 비평(anthonyhobday.com/blog/20230119.html)은 현재 404다. "다크 모드는 빛 효과를 가능하게 한다"는 문장은 검색 스니펫으로만 봤다. 미확인.
- X/Twitter, Bluesky 스레드와 Hacker News 원 스레드는 직접 열지 못했다. HN 쪽은 Krebs 글과 GIGAZINE 기사로 간접 확인한 것이다.
- Cursor 홈페이지 유화 배경의 작가나 의도를 다룬 1차 자료는 찾지 못했다. 미확인.
