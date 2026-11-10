# T-521 레퍼런스 보드 — "조용한 관제실"

규칙: 패턴과 레이아웃은 배우고 베껴도 된다. **로고·브랜드 마크·카피는 절대 가져오지 않는다.**
방향: 1 = 계기판/콘솔 + 실제 제품 창 히어로 · 2 = 조용한 타입 중심 + 타임라인/로그 · 3 = 제품 오브젝트(창/카드 하나) 히어로 · 폰 = 맥 전용 제품의 폰 방문자 다음 행동

## 2026-11-08 심층 재조사

사람이 네 차례의 방향 시안을 모두 거절한 뒤, 기존 19개 폴더를 다시 보고 8개 사이트를 새로 캡처했다. 새 비교 보드 [`board.png`](board.png)와 [`board.json`](board.json)은 13곳을 제품 증거·구조·리듬·타입·색 기준으로 비교한다. 결론과 다음 제작법은 [`2026-11-08-deep-research.md`](2026-11-08-deep-research.md)에 있다.

- **계속 볼 기준점:** Cursor, Linear, Flighty, Dessn, Proof, Granola, Dia.
- **반면교사:** Offloop, Tines, Superhuman 현재 홈, Attio 현재 홈.
- **핵심 결론:** 생성 이미지보다 실제 equipe의 `지표 → PM 판단 → 역할별 작업 → QA → 공개 결정 → 배포 → 재측정`을 브랜드의 시각 문법으로 삼는다.

아래 표는 첫 패스에서 고른 아홉 곳이다.

| slug | 링크 | 배울 것 (한 줄) | 방향 |
|---|---|---|---|
| [granola](granola/) | https://www.granola.ai/ | iPhone이면 주 버튼 "iOS 앱", 보조 "데스크톱 앱" → 바텀시트에서 이메일로 "맥에서 열 링크" 보내기 | 폰, 3 |
| [dia](dia/) | https://www.diabrowser.com/ | 폰 UA일 때 같은 자리 버튼을 "Send download link"로 바꾸고 `navigator.share`로 나에게 보내기 | 폰, 3 |
| [warp](warp/) | https://www.warp.dev/ | `fig. 1` 캡션 액자 속 회색 점 격자에 몇 칸만 켜짐 + `· live` 모노 라벨 = 살아있음 | 1 |
| [cursor](cursor/) | https://cursor.com/ | 제품 창 왼쪽 열을 `IN PROGRESS / READY FOR REVIEW`로 묶은 작업 목록이 히어로 | 1 |
| [zed](zed/) | https://zed.dev/ | 작은 세리프 마스트헤드 + 이탤릭 모노 설명, 바로 아래 진짜 앱 창(파란 점 몇 개) | 2, 3 |
| [amp](amp/) | https://ampcode.com/ | 실제 작업 제목 칩이 흐리게 떠다니고, `0:16 사건` 모노 타임스탬프 챕터 로그 | 2 |
| [21st-onboarding-timeline](21st-onboarding-timeline/) | https://21st.dev/@ephraimduncan/components/onboarding-06 | ✓ 완료 / ● Running now… / ○ Upcoming 세 상태 세로 로그 | 2 (1의 패널) |
| [ghostty](ghostty/) | https://ghostty.org/ | 다크 #0F0F11 위 창 프레임 하나 안에서 조용한 애니메이션, 아래 한 문장 + 버튼 둘 | 3 |
| [linear](linear/) | https://linear.app/ | (이미 아는 기준점) 이슈 창 Activity 로그 + 떠 있는 에이전트 패널, 다크 #08090A 기준값 | 1, 3 |

## 피할 것 (보드 전체)
Amp·Dia의 블러 글로우/따뜻한 그라데이션 배경, 보라 그라데이션·오브·반짝이·로봇. 레퍼런스 중 어느 것도 보라 AI 무드는 아님.

## 폰 방문자 메모
- 폭만 390으로 줄이면(데스크톱 UA) Granola·Dia 모두 데스크톱 버튼 그대로 — **UA 감지로 바뀐다**. 위 `390-iphone-ua*.jpg` 는 iPhone + LinkedIn 인앱 UA로 촬영.
- Raycast·Linear·Zed·Warp·Cursor는 폰에서 별도 처리 없음(다운로드 숨김 / 가입 / 그대로).

## 출처 메모
- Lapa Ninja: 첫 검색 후 Cloudflare 차단(403) — 우회하지 않음.
- Mobbin: 첫 패스에서는 무료 계정에서 Granola iOS 앱 페이지만 확보했다(`granola/mobbin-ios-app.jpg`). 심층 재조사 때 `equipe design refs sources`는 로그인 안 됨으로 표시되어 새 탐색을 생략했다.
- 21st.dev: Timeline 목록에서 1개.
