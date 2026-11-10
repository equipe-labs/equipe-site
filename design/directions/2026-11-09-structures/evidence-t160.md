# 다음 구조 라운드의 실제 사건 — T-160

이전 T-42·T-71 수락 장면은 결정 자체는 실제였지만, 작업 결과와 QA 근거가 캡처에 없었다. 새 라운드는 결과와 검증 자료가 함께 남은 T-160 한 건을 쓴다.

## 사건

- 팀의 일: 데스크톱 8화면에 디자인 시스템 v1 토큰 적용.
- 결과 증거: 라이트·다크 전후 화면 16쌍. 이 폴더에는 대표 두 쌍과 적용 후 원본 두 장을 복사했다.
- 엔지니어 검증: `cargo test -p equipe-desktop` 490건 통과.
- 디자인 검증: T-170 Design QA 통과, 결함 0건.
- 접근성 증거: 다크 action 위 text 16.9:1, 다크 accent 위 background 9.25:1 등 AA 통과.
- 사람의 결정: T-160을 수락할지 한 건만 결정하면 된다.

## 출처

- 티켓 사실: equipe 보드의 T-160 review note, 2026-11-09 확인.
- 화면 원본: `/Users/abel/.equipe/worktrees/equipe/t160-6adf0a80/design/docs/t160-shots/`.
- 복사한 대표 그림:
  - `evidence/t160-inbox-before-after-dark.png`
  - `evidence/t160-board-before-after-dark.png`
  - `evidence/t160-inbox-after-dark.png`
  - `evidence/t160-board-after-dark.png`

## 다음 키 비주얼 원칙

1. 제목보다 실제 적용 후 화면이 먼저 보이게 한다.
2. 전후 비교 한 쌍, `490 tests`, `Design QA · 0 blockers`, 대비 수치 하나를 같은 사건의 증거로 붙인다.
3. 사람의 행동은 `T-160 수락` 한 개로 끝낸다.
4. 화면을 장식용으로 흐리거나 축소하지 않는다. 읽을 수 있는 실제 픽셀을 쓴다.
5. 모바일 첫 화면은 `결과 화면 → 검증 → 수락` 순으로 한 축에 놓고, Mac 앱 받기 링크를 기기 상황에 맞게 제공한다.

## 미확인

- T-160 수락 직후 자동으로 시작되는 다음 티켓은 보드에서 확인하지 못했다. 새 시안에는 다음 티켓을 꾸며 넣지 않는다.
