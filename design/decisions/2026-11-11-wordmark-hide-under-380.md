# 2026-11-11 — 379px 이하에서 헤더 워드마크를 시각적으로 숨긴다 (T-266 규칙 기록)

규칙: 폭 379px 이하에서는 헤더의 워드마크 글자(`.brand .bt`, "equipe")를 시각적으로 숨기고 마크(e.)만 남긴다. 글자는 지우지 않고 `.sr-only`와 같은 방식(1×1 상자 + `clip-path: inset(50%)`)으로 숨기므로, 홈 링크는 스크린 리더에서 계속 "equipe"라는 이름을 가진다. `.brand`는 터치 영역(`--tap`, 44px)을 지킨다.
코드: `src/styles/global.css` — `@media (max-width: 379px)` 블록 (T-266).

Picture:
- 360px, fr (가장 긴 다운로드 버튼): [`t791/home-fr-360.png`](t791/home-fr-360.png) — 마크 · 언어 · "Télécharger pour Mac"
- 380px, fr (워드마크가 돌아오는 첫 폭): [`t791/home-fr-380.png`](t791/home-fr-380.png)
- 360px, 디자인 페이지: [`t791/design-fr-360.png`](t791/design-fr-360.png)
- 320px, de: [`t791/home-de-320.png`](t791/home-de-320.png)

Why: 360px 폰에서 브랜드 + 언어 + 다운로드 버튼을 8개 언어 모두 한 줄에 넣기 위해서다. 워드마크까지 두면 긴 언어(fr "Télécharger pour Mac" 등)에서 헤더가 넘친다(T-266에서 320px 넘침을 고치며 정함, `global.css`의 주석). 사이트의 주 행동은 Mac 앱 다운로드라서(squad 메모리 `site-primary-cta-macos-app`) 버튼을 줄이거나 숨기는 대신, 마크만으로도 알아볼 수 있는 워드마크가 물러난다. 마크는 앱 아이콘과 같은 모양이고, 380px부터는 워드마크가 다시 보인다.

Passed over: T-266에 따로 적힌 다른 안은 없다.

Lint: `equipe design lint --render`의 floor 규칙 `text-clipped`가 360px에서 `span.bt cuts off "equipe"`로 이 규칙을 잡는다(T-698, T-755에서도 나옴). 이건 잘린 글자가 아니라 스크린 리더용으로 남긴 글자다. floor 규칙은 waiver로 넘길 수 없어서(`--waive text-clipped`는 "floor rule and is never waived"로 거절된다), 고칠 곳은 이 저장소가 아니라 lint 쪽이다. lint가 시각적으로만 숨긴 글자(≤1×1 상자이면서 `clip-path: inset(50%)` 또는 `clip: rect(0 0 0 0)`)를 잘린 글자로 세지 않도록 equipe에 고침 티켓을 따로 냈다. 그 조건을 이 사이트 홈·디자인 페이지에 8개 언어 × 320/360/379/380px로 돌려 보니 `span.bt`만 빠지고, 홈의 다른 잘림(`div.wrap.w.heroshot`, `div.ap` 등)은 그대로 남았다: [`t791/clip-check.txt`](t791/clip-check.txt) (스크립트 [`t791/clip-check.mjs`](t791/clip-check.mjs)).

Ticket: T-266 (규칙), T-791 (기록)
