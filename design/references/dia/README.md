# Dia — 폰에서 CTA가 "Send download link"(공유 시트)로 바뀜

- 링크: https://www.diabrowser.com/ (2026-11-08 방문; 1440, **iPhone UA(LinkedIn 인앱) 390**)
- 찾은 곳: 라이브 사이트 직접
- 방향: **폰** (주) + 3 (창 하나가 오브젝트)
- 스크린샷: `1440.jpg` — "Download Dia for free ↓", `390-iphone-ua.jpg` — 같은 자리 버튼이 "Send download link"

## 무엇을 배울지
레이아웃은 그대로 두고 폰 UA일 때 **버튼 글자와 동작만** 바꾼다. 누르면 `navigator.share({ title: "Download Dia for desktop", url: "https://www.diabrowser.com/download" })` 를 호출 → iOS 공유 시트로 메모/메일/에어드롭으로 "나에게 보내기". 서버·이메일 수집 없이 가장 가벼운 해법 (공유 시트 호출은 스텁으로 확인함).
주의: LinkedIn 인앱 브라우저에서 `navigator.share`가 안 될 수 있으니 우리는 "링크 복사" 대체가 필요.

## 가져오지 않을 것
Dia 로고·워드마크, 큰 세리프 "DIA" 레터링, 노란 블러 배경(따뜻한 AI 무드), 카피.

## 타입 / 색
- h1 Exposure VAR(세리프) 38.8px/500, 본문 ABC Oracle
- 배경 노랑(P3 0.88/0.72/0.27) → 하단 #FBFAF6, CTA 검정 알약
