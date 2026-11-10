# T-521 최종 라운드 — 세 방향 공통 규격 (2026-11-10)

equipe.im(Mac 앱 equipe의 소개 사이트) 리브랜딩. 세 방향은 같은 이야기, 같은 문구를 쓰고 **구조·서체·색·키 비주얼(제품 장면의 모양과 빛)** 로 다르다.

## 왜 다시 하는가 (사람의 말)
- 앞선 네 라운드를 모두 거절: "퀄리티가 아쉬워", "걍 뭔가 존나 AI 슬롭 같아", "다 별론데".
- 감도 기준은 **Cursor(cursor.com), Linear(linear.app)** — 사람이 "이 정도면 됐다"고 고른 두 곳.
- 실패 원인(리서치 결론): ① 같은 뼈대(제목+CTA+앱 창)에 색·서체만 바꿈 ② 축소해 못 읽는 앱 스크린샷 ③ 생성 이미지가 의미를 대신함 ④ 승인 카드만 반복, 그 전에 팀이 한 일이 안 보임.

## 품질 기준 — 이게 전부다
- **읽히는 제품 장면이 키 비주얼이다.** 실제 앱 기능을 HTML/CSS로 선명하게 다시 그린다(축소 스크린샷 금지). 장면 속 글자는 1440에서 최소 13px, 390에서 최소 12px.
- **공예의 층**: 정확한 정렬(4/8px 격자), 숫자는 tabular-nums, 장면에 빛·깊이(아주 약한 위쪽 빛, 1px 안쪽 하이라이트 테두리, 부드러운 긴 그림자, 2~3% 노이즈 그레인 정도) — 단 장식이 제품보다 앞서면 안 된다.
- 한 방향 안에서 색은 중립 + 신호색 하나. 신호색은 '살아 있음'(작업 중 불빛)과 '내 결정' 두 곳에만.
- **금지**: 보라·파랑 그라데이션, 빛나는 구, 반짝이 아이콘, 로봇·마스코트, 모든 헤딩 위 작은 라벨(eyebrow), 띄어 쓴 대문자 라벨, 한 단어만 색칠, 카드 안의 카드, 이모지 아이콘, 모든 것 가운데 정렬, 근거 없는 수치·고객 로고·후기.
- 로고: `e.` 와 워드마크 `equipe.` — 글자는 서체로, 점만 `#3F6FF5`(로고에만, 다른 데 이 파랑 쓰지 않기).
- 한국어: `word-break: keep-all; line-break: strict;`, 제목 줄바꿈은 의미 단위(예: "최고의 스타트업 팀을 드려요." 에서 '스타트업 팀'을 가르지 않기).

## 잠긴 것
- 이름 equipe(소문자), 로고 e., 한 줄 문구:
  - en: **Your whole startup team. You just approve.**
  - ko: **최고의 스타트업 팀을 드려요. 승인만 하세요.**

## 한 사이클 이야기 (모든 방향 공통, 실제 사례)
equipe 스쿼드가 이 사이트에서 실제로 겪은 일(2026-11-02 유입 리뷰). 마지막 개선 수치는 아직 없으니 쓰지 않는다.

| # | 역할 | ko | en |
|---|---|---|---|
| 1 | data · 지표 | LinkedIn 유입 18건 · 다운로드 클릭 0 / 대부분 iPhone 앱 안 브라우저 | 18 visits from LinkedIn · 0 download clicks / Mostly the iPhone in-app browser |
| 2 | PM · 판단 | 폰에서 Mac 설치로 가는 길이 없어요. 폰 첫 화면에 'Mac으로 링크 보내기'를 넣어 볼게요. | Phones have no way to the Mac install. Let's put "Send to my Mac" on the phone's first screen. |
| 3 | designer · 설계 | 폰 첫 화면 시안 3개 | Three options for the phone's first screen |
| 4 | frontend · 구현 | 공유 시트로 링크 보내기 · 8개 언어 | Link via the share sheet · 8 languages |
| 5 | QA · 검증 | 320·360·390 폭, 라이트·다크 통과 | Passed at 320, 360, 390 · light and dark |
| 6 | 나 · 결정 | 새 폰 동선을 공개할까요? — [공개] [아니요] / 공개하면 배포하고 2주 뒤 다시 재요. | Ship the new phone flow? — [Ship] [Not yet] / It ships, then gets measured again in two weeks. |
| 7 | data · 다시 측정 | 2주 뒤 다시 측정 | Measured again in two weeks |

장면 속 [공개] 버튼은 **제품 화면 안의 버튼**으로 보여야 한다(앱 창·카드 안, 키캡 `⌘↵` 정도). 페이지의 행동 버튼(다운로드)과 헷갈리지 않게 생김새를 다르게.

실제 앱에 있는 것만 그린다: 사이드바(새 대화 · PM 대화 · 확인 필요 n · 작업 중 n · 티켓 · 로드맵 · 지표 · 디자인 시스템), 멤버 목록과 상태(작업 중 / 쉬는 중 / 허락 요청 / 내 차례), 티켓 번호(T-123)와 상태(제안 · 할 일 · 작업 중 · 내 차례 · 끝남), 지표 카드(PostHog 기준), 결정 카드(질문 + 선택지 + 추천 표시), 디자인 QA 통과 표시, 티켓 브랜치. 없는 기능(자동 배포 버튼, 채팅 봇 아바타 등)은 그리지 않는다.

## 페이지 구성 (모든 방향 같은 섹션, 배치는 방향마다)
1. **첫 화면** — 내비(로고, How it works / 작동 방식, Design, GitHub, 언어), 잠긴 한 줄 문구, 보조 문장, 행동, 키 비주얼(제품 장면).
   - 보조 문장 ko: "PM·디자이너·엔지니어·QA가 지표를 보고 스스로 다음 일을 정해요. 내 Mac에서, 쓰던 Claude·ChatGPT 요금제로." en: "A PM, designer, engineers and QA read the numbers and pick the next job themselves. On your Mac, on the Claude or ChatGPT plan you already pay for."
   - 데스크톱 행동: [Mac용 다운로드 / Download for Mac] (주 행동, `data-primary`) + 그 아래 한 줄 "무료 · macOS 14 이상 · Apple 실리콘 / Free · macOS 14+ · Apple silicon".
   - **폰(390) 행동**: 주 행동 [Mac으로 링크 보내기 / Send to my Mac] (공유 시트), 보조 [iPhone 앱 받기 / Get the iPhone app]. 한 줄 "equipe는 Mac에서 일해요. 폰은 승인하는 곳이에요. / The squad works on your Mac. Your phone is where you approve." 다운로드 버튼을 폰에 그대로 두지 않는다.
   - 3초 안에: 팀이 일하는 근거 + 한 사이클 + 나에게 온 결정 한 건이 같이 읽혀야 한다.
2. **한 사이클** — 제목 ko "지표에서 다음 개선까지, 팀이 이어서 해요." en "From a number to the next fix, the team carries it." 위 7단계 전체.
3. **결정은 내가** — 제목 ko "공개·발송·결제 전엔 꼭 먼저 물어봐요." en "Before anything ships, gets sent or costs money, the squad asks." 세 가지: 공개(새 폰 동선을 공개할까요?) · 돈(도메인 갱신 $12를 결제할까요? / Renew the domain for $12?) · 브랜드(첫 화면 문구 두 안 중 어느 쪽? / Which of two headlines?). 각 한 줄.
4. **팀** — 제목 ko "서로 다른 전문가가 한 목표로." en "Different experts, one goal." 역할: PM, designer, frontend, backend, QA, data, marketing — 각자 지금 하는 일 한 줄(위 사이클과 맞게; backend "링크 보내기 API 없이 공유 시트로 결정", marketing "LinkedIn 글 초안"(쉬는 중이어도 됨)).
5. **마무리** — 한 줄 문구 다시 + 다운로드(폰에선 링크 보내기) + 푸터(개인정보처리방침, GitHub, © 2026 Umbriles Inc.).

## 파일 규칙
- 자기 폴더 `design/directions/2026-11-10-final/<dir>/` 안에만 쓴다. 다른 폴더·사이트 코드는 건드리지 않는다.
- `page.html` 한 장(+ 같은 폴더의 `style.css` 가능). `location.search`의 `theme=dark|light`, `lang=ko|en`을 읽어 `<html data-theme lang>`을 바꾼다. 문구는 en·ko 둘 다 페이지 안에.
- `tokens.json` — DTCG 형식(`$type`, `$value`)의 색(라이트·다크), 글꼴, 크기 단계, 간격, 반경. CSS 변수는 이 값만 쓴다.
- 반응형: 390에서 가로 넘침 없음, 글자 잘림 없음. 320에서도 깨지지 않게.
- 글꼴은 Google Fonts `<link>`(OFL) 또는 로컬 Pretendard(설치돼 있음, 페이지에 `font-family: Pretendard` + 대체로 Pretendard CDN `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`).
- 움직임은 넣어도 되지만 렌더는 정지 상태로 의미가 다 읽혀야 하고, `prefers-reduced-motion`이면 멈춘다.

## 렌더
`python3 design/directions/2026-11-10-final/render.py <page.html> <out-dir> [--first] [--only=1440-dark-ko]`
- `--first`: 첫 화면만(1440×900, 390×844). 없으면 전체 페이지. 2배율 PNG.
- Read 도구로 그림을 직접 보고 고친다. 최소 3번은 보고-고치기를 돌린다: 정렬, 리듬, 대비, 한국어 줄바꿈, 390 첫 화면에서 행동 버튼이 보이는지.
