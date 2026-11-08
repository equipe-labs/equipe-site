# One comparison sheet per direction (sheet-a.html …), rendered to PNG by `equipe design render --widths 2000`.
import json, os
from parts import FONTS
K = json.load(open('contrast.json'))

D = {
 'a': dict(name='A · 관제 패널', en='Console', thesis='실제 앱 창이 첫 화면의 주인공. 계기판처럼 촘촘하고, 앰버 불빛만 켜져 있어요. 승인 카드 아래에 T-5가 거기까지 온 길과 승인 뒤 일이 보여요.',
   tags=[('레이아웃','왼쪽 제목 아래 실제 앱 창을 꽉 차게 · 3칸 패널 · 가는 선 격자'),('밀도','높음 — 계기판'),('움직임','작업 중 불빛이 숨 쉬고, 진행 막대가 차고, 결정 카드가 오른쪽에 들어와요')],
   en_font=("Geist", "Geist", 'OFL 1.1 · Vercel · Google Fonts'), mono=("Geist Mono","'Geist Mono'",'OFL 1.1'), ko_font=("Pretendard","Pretendard",'OFL 1.1 · github.com/orioncactus/pretendard'),
   head_en="'Geist'", head_ko='Pretendard', w_en=600, w_ko=600,
   sw=[('bg','바탕'),('sf','면'),('tx','글자'),('mu','보조'),('sig','신호(앰버)')],
   q='(나)에 가까워요 — 창의 구조·문구·흐름은 실제 앱 그대로, 색만 사이트 테마(앰버 불빛). 앱과 거의 같아 (가)로 돌리기도 쉬워요.',
   phone='제목 바로 아래 ‘Mac으로 링크 보내기’(공유 시트: AirDrop·메시지·메일, 안 되면 ‘링크 복사’) + ‘iPhone 앱 받기’. 앱 창은 그 아래에 3줄로 줄여요.',
   risk='Linear와 가장 닮았어요. 우리 표시는 e. 로고와 승인 카드뿐이라, 앰버 불빛을 끝까지 지켜야 해요.'),
 'b': dict(name='B · 근무 일지', en='Log', thesis='스쿼드가 지금 하는 일과 내 승인을 기다리는 한 건을 일지처럼 보여 줘요. 세리프 제목, 따뜻한 먹색과 종이, 초록 불빛 하나.',
   tags=[('레이아웃','세리프 제목 왼쪽 · ‘지금 하는 일 + 승인 대기 1건’ 기록 카드 오른쪽 · 단계는 줄 친 목록 · 앱 창은 둘째 섹션'),('밀도','낮음 — 넓은 여백'),('움직임','작업 줄이 차례로 끝나고, 승인 대기 줄이 맨 아래로 와요. 지난 기록은 접혀요')],
   en_font=("Instrument Serif + Inter", "'Instrument Serif'", 'OFL 1.1 · Google Fonts (둘 다)'), mono=("JetBrains Mono","'JetBrains Mono'",'OFL 1.1'), ko_font=("마루 부리 + Pretendard","MaruBuri",'마루 부리: 나눔 글꼴과 같은 오픈 라이선스(OFL 기반, 산돌구름 안내 — 네이버 원문 미확인) · Pretendard OFL 1.1'),
   head_en="'Instrument Serif'", head_ko='MaruBuri', w_en=400, w_ko=600,
   sw=[('bg','바탕'),('sf','면'),('tx','글자'),('mu','보조'),('sig','신호(초록)')],
   q='(나) — 첫 화면은 앱 창 대신 ‘스쿼드 기록’(실제 대화·티켓 흐름)으로 답하고, 앱 창은 둘째 섹션에 작게 둬요. 앱과 모양이 달라도 덜 드러나요.',
   phone='제목 아래 링크 보내기(안 되면 링크 복사)·iPhone 앱 받기, 그 아래 ‘지금, 스쿼드에서’ 카드. 폰에서도 ‘이미 일하고 있다’를 보여 줘요.',
   risk='세리프·종이 느낌이 ‘정확한 관제실’보다 잡지에 가까워요. 비개발자에게 가장 따뜻하지만, Linear·Raycast 취향과는 가장 멀어요.'),
 'c': dict(name='C · 점 하나', en='One dot', thesis='결정 카드 한 장이 첫 화면의 주인공. 무채색 위에서 파랑은 내가 누를 ‘승인’ 버튼 하나뿐이에요. (추천보다 과감한 안)',
   tags=[('레이아웃','포스터처럼 세 줄 제목 왼쪽 · 팀의 일 목록 끝 T-5 줄에 붙은 결정 카드 · 큰 제목 섹션'),('밀도','중간 — 큰 글자, 적은 물체'),('움직임','팀 목록 위로 카드가 떠오르고, ‘지금 공개’가 눌리고, Live 줄이 나와요')],
   en_font=("IBM Plex Sans", "'IBM Plex Sans'", 'OFL 1.1 · Google Fonts'), mono=("IBM Plex Mono","'IBM Plex Mono'",'OFL 1.1'), ko_font=("IBM Plex Sans KR","'IBM Plex Sans KR'",'OFL 1.1 · Google Fonts'),
   head_en="'IBM Plex Sans'", head_ko="'IBM Plex Sans KR'", w_en=600, w_ko=600,
   sw=[('bg','바탕'),('sf','면'),('tx','글자'),('mu','보조'),('go','승인(로고 파랑)')],
   q='(나)→(다) — 결정 카드가 사이트의 얼굴이 되니, 앱의 결정 카드도 같은 파란 ‘승인’ 버튼이면 좋아요. 고르면 앱 카드만 맞추는 티켓을 따로 제안해요.',
   phone='제목 → ‘Mac으로 링크 보내기’ → ‘iPhone 앱 받기’ 다음에 결정 카드(예시 표시). LinkedIn 앱 안 브라우저처럼 공유가 안 되면 ‘링크 복사’.',
   risk='로고 점의 파랑을 쓰니 ‘버릴 것: 파랑’과 부딪혀 보일 수 있어요(사이트의 옛 강조 파랑이 아니라 로고 점 색). 카드가 크고 버튼이 파래서 ‘팀’보다 ‘확인 창’이 먼저 보일 수 있어요.'),
}

def css_vars(d, theme):
  import re
  s = open(f'dir_{d}.py').read()
  light = dict(re.findall(r'--([a-z-]+):(#[0-9A-Fa-f]{6})', s.split(':root{',1)[1].split('}',1)[0]))
  if theme == 'light': return light
  dark = dict(light); dark.update(re.findall(r'--([a-z-]+):(#[0-9A-Fa-f]{6})', s.split('@media (prefers-color-scheme:dark){:root{',1)[1].split('}}',1)[0])); return dark

def sheet(d):
  x = D[d]
  sw = ''
  for th, lab in (('dark','다크'),('light','라이트')):
    v = css_vars(d, th)
    sw += f'<div class="swr"><span class="thl">{lab}</span>' + ''.join(f'<div class="sw"><i style="background:{v[k]}"></i><b>{n}</b><code>{v[k]}</code></div>' for k, n in x['sw']) + '</div>'
  rows = ''
  for th, lab in (('dark','다크'),('light','라이트')):
    for name, pair, val in K[d][th]:
      rows += f'<tr><td>{lab}</td><td>{name}</td><td><code>{pair}</code></td><td class="n">{val:.2f}</td><td>{"AA ✓" if val >= 4.5 else "AA 큰 글자만"}</td></tr>'
  rc = ''.join(f'<img src="rc/{d}-{t}.png" alt="">' for t in ('dark','light') if os.path.exists(f'rc/{d}-{t}.png'))
  rc = f'<div class="blk"><h3>Realtime Colors에 입혀 본 그림</h3><div class="rc">{rc}</div></div>' if rc else ''
  fold = lambda l, w, t: f'crops/{d}-{l}-{w}-{t}-fold.png'
  return f'''<!doctype html><html lang="ko"><head><meta charset="utf-8">{FONTS[d]}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}body{{width:2000px;background:#E9E9E6;color:#111;font:400 18px/1.5 Pretendard,system-ui;padding:56px;word-break:keep-all}}
h1{{font:700 56px/1.1 Pretendard;letter-spacing:-.02em}}h1 small{{font-size:24px;color:#666;font-weight:500;margin-left:14px}}
.th{{font-size:24px;margin-top:10px;max-width:1500px}}
.tags{{display:flex;gap:28px;margin-top:20px}}.tags div{{flex:1;background:#fff;border-radius:10px;padding:14px 18px;font-size:16px}}.tags b{{display:block;font-size:13px;color:#666;font-weight:600}}
.g1{{display:grid;grid-template-columns:1240px 1fr;gap:24px;margin-top:32px}}
img{{display:block;width:100%;border-radius:8px;box-shadow:0 0 0 1px rgba(0,0,0,.12)}}
.lab{{font-size:14px;color:#555;margin:8px 0 0}}
.ph{{display:grid;grid-template-columns:repeat(4,1fr) 1.15fr;gap:20px;margin-top:28px;align-items:start}}
.blk{{background:#fff;border-radius:12px;padding:24px;margin-top:24px}}.blk h3{{font-size:20px;margin-bottom:14px}}
.g3{{display:grid;grid-template-columns:1fr 1fr;gap:24px}}
.swr{{display:flex;gap:10px;align-items:center;margin-bottom:12px}}.thl{{width:56px;font-size:14px;color:#666}}
.sw{{flex:1}}.sw i{{display:block;height:54px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}}.sw b{{display:block;font-size:13px;margin-top:6px}}.sw code{{font-size:12px;color:#555}}
table{{border-collapse:collapse;width:100%;font-size:14px}}td{{padding:5px 8px;border-bottom:1px solid #eee}}td.n{{font-weight:700;text-align:right}}code{{font-family:ui-monospace,monospace}}
.sp1{{font-family:{x['head_en']};font-weight:{x['w_en']};font-size:52px;line-height:1.05;letter-spacing:-.02em}}
.sp2{{font-family:{x['head_ko']};font-weight:{x['w_ko']};font-size:40px;line-height:1.25;margin-top:10px;letter-spacing:-.02em}}
.sp3{{font-family:{x['mono'][1]};font-size:16px;margin-top:10px;color:#444}}
.fl{{font-size:15px;margin-top:14px;color:#333}}.fl li{{margin-left:18px}}
.ans p{{margin-bottom:12px}}.ans b{{display:block;font-size:14px;color:#666}}
.rc{{display:grid;grid-template-columns:1fr 1fr;gap:16px}}
</style></head><body>
<h1>{x['name']}<small>{x['en']}</small></h1><p class="th">{x['thesis']}</p>
<div class="tags">{''.join(f'<div><b>{a}</b>{b}</div>' for a,b in x['tags'])}</div>
<div class="g1"><div><img src="{fold('en',1440,'dark')}" alt=""><p class="lab">1440 · 다크 · en — 첫 화면</p></div>
<div><img src="{fold('ko',1440,'light')}" alt=""><p class="lab">1440 · 라이트 · ko — 첫 화면</p>
<div class="blk" style="margin-top:16px"><h3>색 팔레트</h3>{sw}</div></div></div>
<div class="ph">
<div><img src="{fold('en',390,'dark')}" alt=""><p class="lab">390 · 다크 · en</p></div>
<div><img src="{fold('ko',390,'dark')}" alt=""><p class="lab">390 · 다크 · ko</p></div>
<div><img src="{fold('en',390,'light')}" alt=""><p class="lab">390 · 라이트 · en</p></div>
<div><img src="{fold('ko',390,'light')}" alt=""><p class="lab">390 · 라이트 · ko</p></div>
<div><img src="crops/{d}-ko-1440-dark-full.png" alt="" style="max-height:1180px;object-fit:cover;object-position:top"><p class="lab">1440 · 다크 · ko — 페이지 전체(첫 화면 → 작동 방식 → 승인 → 폰 앱 → 마무리)</p></div>
</div>
<div class="g3">
<div class="blk"><h3>글꼴 짝</h3><div class="sp1">Your whole startup team.</div><div class="sp2">최고의 스타트업 팀을 드려요.</div><div class="sp3">T-5 · 13:05 · 222 tickets</div>
<ul class="fl"><li><b>영문</b> {x['en_font'][0]} — {x['en_font'][2]}</li><li><b>한국어</b> {x['ko_font'][0]} — {x['ko_font'][2]}</li><li><b>숫자·코드</b> {x['mono'][0]} — {x['mono'][2]}</li></ul></div>
<div class="blk"><h3>글자 대비 (WCAG, 계산값)</h3><table>{rows}</table></div>
</div>
<div class="blk ans"><h3>질문에 대한 답</h3><p><b>제품 화면 (가·나·다)</b>{x['q']}</p><p><b>폰 방문자의 다음 행동</b>{x['phone']}</p><p><b>위험</b>{x['risk']}</p></div>
{rc}
</body></html>'''

for d in 'abc':
  open(f'sheet-{d}.html', 'w').write(sheet(d))
print('sheets written')
