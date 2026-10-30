# design 변경 기록

토큰·컴포넌트·브랜드 변경을 한 줄씩. 형식: 날짜 — 무엇 — 이유 — 영향.

- 2026-10-19 — `design/`을 표준 구조로 정리(T-153, T-149 기준): 로고·파비콘·앱 아이콘·OG 파일을 `assets/logo/`로 이동, `guidelines.md`·`CHANGELOG.md` 추가, `tokens.md`는 생성된 `tokens.json` 링크 한 줄로 대체 — 프로젝트 간 구조 통일 — 사이트 빌드와 라이브 자산은 변화 없음(`public/`은 그대로).
- 2026-10-31 — 사이트를 브랜드 v1 기초 토큰으로(T-175): 로고를 `e.` 타일로(파비콘·앱 아이콘·apple-touch-icon·logo.png·OG 8장 재생성), 중립색 6개(bg·surface·code-bg·text·muted·line)를 v1 값으로, 카드 반지름 14→12px, `--dot` #3F6FF5 추가, ko에 Pretendard Variable 서브셋 자체 호스팅(`font-display: swap`, 사용 한글 52 KB + 예비 251 KB). 레이아웃·문구 그대로 — 감사 T-158 #1·#2·#14·#29 — 카드 면이 라이트에서 배경보다 밝아짐, 다크 배경이 더 어두워짐. 전/후 사진은 `design/shots-t175/`(후만; 전은 `/tmp`).
