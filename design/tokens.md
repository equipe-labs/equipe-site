디자인 토큰은 `equipe/design/tokens.json`(생성 파일, 손으로 고치지 않음)이 정본이다. 2026-10-19 이전의 사이트 값 표는 git 기록(`design/tokens.md`, 커밋 34d1d67)에 있다.

## 사이트 CSS 역할

사이트는 `tokens.json`의 역할 일부를 `src/styles/global.css`의 CSS 변수로 옮겨 쓴다. 새 역할은 여기 먼저 적고, 값은 `tokens.json`에서 그대로 가져온다(사이트용 값을 따로 만들지 않는다).

### 오류색 `--err` (T-774)

입력 오류 문구·잘못된 입력칸 테두리·대비 미달 표시처럼 "잘못됨·파괴적"을 알리는 글자와 선에 쓴다. 정본은 공용 시스템의 `color.err`.

| 모드 | `--err` | 출처 |
|---|---|---|
| 라이트 | `#AD2E27` | `color.err` → `color.raw.red.700` |
| 다크 | `#EE7B74` | `color.err` `$extensions.mode.dark` → `color.raw.red.300` |

명암비(WCAG 2.x 상대 휘도로 계산, 사이트 실제 바탕값 기준):

| 바탕 | 라이트 | 다크 | 기준 |
|---|---|---|---|
| `--bg` (#F6F5F1 / #0A0A0C) | 6.02:1 | 7.27:1 | 글자 4.5:1 통과 |
| `--surface` (#FFFFFF / #16171A) — 카드·입력칸 | 6.57:1 | 6.59:1 | 글자 4.5:1, 입력칸 테두리 3:1 통과 |
| `--code-bg` (#EAE7E0 / #17171C) | 5.32:1 | 6.57:1 | 글자 4.5:1 통과 |

규칙:
- 글자와 1px 이상 테두리에만 쓴다. 바탕을 칠할 땐 `color.err-fill`·`color.err-bg`가 사이트에 역할로 들어온 뒤에 쓴다(지금은 없음 — 필요해지면 이 표에 먼저 추가).
- 색만으로 오류를 알리지 않는다: 문구를 함께 두고, 입력칸엔 `aria-invalid="true"`와 `aria-describedby`로 문구를 잇는다.
- 다크에서 라이트 값(`#AD2E27`)을 쓰지 않는다 — `--surface` 위 2.73:1로 테두리 기준 미달. 변수 하나가 모드를 따라 바뀌므로 모드별 덮어쓰기 규칙을 따로 두지 않는다.
- 사이트 안에서 오류 빨강을 직접 적지 않는다(`#b3261e`·`#ff8a80`처럼 만든 값 금지).

적용 전/후(remix 잘못된 hex 상태, 390폭, 라이트·다크): `design/shots/t774/remix-invalid-hex-390-compare.png`. 전: T-304 첫 구현의 `#b3261e`/`#ff8a80` — 다크 입력칸 테두리가 `#b3261e`라 `--surface` 위 2.74:1로 3:1 미달. 후: `var(--err)`.

### 홈 다듬기 역할 `--strong`·`--display`·`--shadow-window`·`--window-edge`·`--muted-inverse` (T-2)

홈 다듬기 명세(`design/home-polish-spec.md` §0·P9)에서 쓰는 역할. 두 모드 모두 값이 있다.

| 역할 | 라이트 | 다크 | 출처 | 쓰는 곳 |
|---|---|---|---|---|
| `--strong` | `#74767D` | `#7C7E85` | `color.border-strong` (warm.350 / 400) — 지금 `app.css`에만 있음, `global.css`로 올림 | 조용한 밑줄, 창 제목줄 점 |
| `--display` | `clamp(48px, 5.6vw, 80px)` | 같음 | `type.display` 56을 폭에 따라 80까지 | 히어로 h1, 마지막 h2만 |
| `--shadow-window` | `0 32px 64px -32px rgb(10 10 12 / .28), 0 2px 6px 0 rgb(10 10 12 / .06)` | `0 32px 64px -24px rgb(0 0 0 / .7)` | `elevation.overlay`를 히어로 창 깊이로 | 모든 `.win` |
| `--window-edge` | `transparent` | `rgb(239 237 231 / .14)` | `--text`의 14% (`.evs` 창 테두리와 같음) | 다크에서 창이 바탕에 묻히지 않게 1px 테두리 |
| `--muted-inverse` | `#A3A5AB` | `#4F5159` | 반대 모드의 `--muted` | 뒤집힌 띠(`.evs`)의 흐린 글자 — 지금 직접 적힌 hex를 대신함 |

명암비(WCAG 2.x 계산):
- `--strong`(UI 전용): `--bg` 위 4.16 / 4.88, `--ap-sunken` 위 3.67 / 4.65 — UI 3:1 통과. 글자에는 쓰지 않는다.
- `--muted-inverse`: 뒤집힌 띠 바탕(`--void` / `--bone`) 위 8.03 / 7.25 — 글자 4.5:1 통과.
