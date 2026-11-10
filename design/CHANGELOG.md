# design 변경 기록

토큰·컴포넌트·브랜드 변경을 한 줄씩. 형식: 날짜 — 무엇 — 이유 — 영향.

- 2026-10-19 — `design/`을 표준 구조로 정리(T-153, T-149 기준): 로고·파비콘·앱 아이콘·OG 파일을 `assets/logo/`로 이동, `guidelines.md`·`CHANGELOG.md` 추가, `tokens.md`는 생성된 `tokens.json` 링크 한 줄로 대체 — 프로젝트 간 구조 통일 — 사이트 빌드와 라이브 자산은 변화 없음(`public/`은 그대로).
- 2026-10-31 — 사이트를 브랜드 v1 기초 토큰으로(T-175): 로고를 `e.` 타일로(파비콘·앱 아이콘·apple-touch-icon·logo.png·OG 8장 재생성), 중립색 6개(bg·surface·code-bg·text·muted·line)를 v1 값으로, 카드 반지름 14→12px, `--dot` #3F6FF5 추가, ko에 Pretendard Variable 서브셋 자체 호스팅(`font-display: swap`, 사용 한글 52 KB + 예비 251 KB). 레이아웃·문구 그대로 — 감사 T-158 #1·#2·#14·#29 — 카드 면이 라이트에서 배경보다 밝아짐, 다크 배경이 더 어두워짐. 전/후 사진은 `design/shots-t175/`(전은 라이트만).
- 2026-11-11 — 사이트 오류색 역할 `--err` 정의(T-774): 라이트 #AD2E27·다크 #EE7B74(공용 `color.err`), 명암비는 `tokens.md`에 — /design/library가 만든 #b3261e·#ff8a80 대신 공용 값으로, 다크 입력칸 테두리 2.74:1 → 6.59:1 — `global.css`·`library.css` 적용은 frontend 티켓으로. 전/후 사진 `design/shots/t774/`.
