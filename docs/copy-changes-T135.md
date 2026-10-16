# T-135 문구 변경 표 (2026-10-16)

근거는 equipe 저장소의 릴리스 커밋과 `docs/DESKTOP.md`. 8개 언어 모두 같은 구조로 고쳤다(ko·en 먼저, 나머지 6개는 용어집 기준으로 번역). 확신이 낮은 표현은 `design/i18n/review-notes.md` 흐름대로 원어민 검수에 맡긴다.

| 위치 | 전 | 후 | 근거 |
|---|---|---|---|
| hero.shotAlt/Caption | "앱 시안 · 준비 중" 허가 요청 시안 | 실제 데스크톱 앱 티켓 화면(목록, 맨 위에 당신 차례·검토) | 0.46.0 티켓 화면, 0.42.0 사이드바 |
| features (새 섹션) | 없음 | 역할/보드, 격리된 브랜치, 결정 카드, 여러 프로젝트, 데스크톱 앱, 폰·다른 맥 6개 | 0.44.0 결정 카드, 0.41.0 프로젝트별 대화, 0.42.0·0.46.0·0.47.0, 0.38.0 8개 언어, 0.38.1 자동 업데이트, 0.39.0 QR 페어링, docs/DESKTOP.md "Remote" |
| apps.intro | 폰이 알려주고 Face ID로 승인 | 데스크톱 앱은 지금 받을 수 있음 + 모바일 앱이 알려줌 | docs/DESKTOP.md "Shipping the app" |
| apps.soon | 곧 출시 | 준비 중 (iOS는 심사 준비, 공개 전) | squad 기억 ios-app-store-launch |
| apps.req | macOS 12+ · Apple Silicon·Intel | + 서명·공증됨 | desktop-dmg.sh (arm64+x86_64), 서명 기억 desktop-signing-credentials |
| apps.items[0] text/alt | 스쿼드·보드·PM 대화 / 시안 alt | 스쿼드·티켓·PM 대화 / 실제 결정 화면 alt | 0.44.0 |
| apps.items[1].text | 승인이 필요할 때만 알려줌 | + QR 코드로 연결 | 0.39.0, README `equipe pair` |
| apps.caption | 화면은 시안 · 모바일 곧 | 폰 화면만 시안 · 모바일 앱은 준비 중 | 데스크톱 이미지가 실제 화면으로 바뀜 |
| apps.notify.title | 앱이 나오면 | 모바일 앱이 나오면 | 데스크톱은 이미 출시 |
| faq 프로덕션 | 인수인계와 소통 채널이 다음 | 데스크톱 앱·폰·Telegram으로 따라갈 수 있음, 인수인계가 다음 | README (`equipe telegram setup`, `equipe pair`) |
| faq 추가 2개 | 없음 | "데스크톱 앱이 있나요?", "폰에서 스쿼드를 따라갈 수 있나요?" (끝에 추가해 기존 faq-N 분석 ID 유지) | 위와 같음 |
| llms.txt | 앱은 곧 나옴, 미출시 | 데스크톱 출시(DMG 링크), 모바일 준비 중, 프로젝트·결정 카드 | 위와 같음 |
| JSON-LD | — | SoftwareApplication에 featureList | features 섹션 |

⌘K는 "모든 일 검색"(앱의 `settings.key_search_all`)으로만 적었다. 명령 팔레트가 아니다.

## 바꾼 이미지

| 파일 | 변경 |
|---|---|
| `src/assets/desktop-approval.png` | 삭제. `desktop-tickets.png`(앱 실제 화면, 티켓 목록)로 교체: 히어로 |
| `public/apps/desktop-approval.webp` | 삭제. `public/apps/desktop-decision.webp`(앱 실제 화면, 허가 요청과 결정 카드)로 교체: 앱 카드 |
| `docs/screenshots/desktop-app/` | 원본 캡처 4장(받은 편지함, 결정, 티켓 목록, 보드). 가상 squad 'demo' 데이터이고 실제 작업은 나오지 않는다 |

캡처는 앱의 snapshot 개발 도구(`--features snapshot`)로 임시 홈의 가짜 데몬에 붙여 만들었다. 0.47.0, 영어 UI, 1440×798.

## 정렬·간격 변경

- 토큰: `--s-1…9`(4·8·12·16·24·32·48·72·112), `--r-1/2`, `--bw-1/2`, `--tap`, `--wrap`, `--measure`, `--gutter`, `--section-y`. 흩어져 있던 값(10, 22, 28, 40, 1.5px 등)을 걷어 냈다. T-106·T-115 덧붙임 규칙은 본 규칙에 합쳤다.
- 복사 버튼: 코드 상자 안에서 글자를 가리지 않게 옆 칸으로, 첫 줄 세로 중앙에 맞춤(모바일에서 글자 위에 겹치던 것 해소). 좁은 화면에서는 코드가 줄바꿈된다.
- 단계 카드: 번호 배지를 도식 위에서 제목 옆으로, 카드 사이 화살표를 도식 세로 중앙에 맞춤.
- 짧은 인라인 명령(`brew upgrade equipe` 등)은 줄바꿈하지 않음.
- 칩은 두 줄이 되어도 어색하지 않게 모서리를 14px로, 링크 줄·푸터 링크는 점 구분 대신 줄바꿈되는 간격으로.
- 앱 카드: 폰 시안을 카드 남는 공간의 세로 중앙에. 지원 페이지 끝의 개인정보 링크 간격.
- 제목 `text-wrap: balance`, 문단 `pretty`.

스크린샷: `docs/screenshots/before/`, `docs/screenshots/after/` (홈 8개 언어 × 390·768·1024·1440, 개인정보·지원은 en·ko·de, 404는 en). 가로 넘침 검사는 전 조합 통과.
