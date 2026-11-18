# Writes kv-a.html (새벽 조정), kv-b.html (밤의 건물), kv-c.html (벽에 든 빛).
# One layout for all three: same copy, type, spacing, and the real app scene at the same place and scale (1x).
# Only the page tone and the art band behind the app change, so the person compares the pictures.
import sys
from kv import *
ART = dict(a=sys.argv[1], b=sys.argv[2], c=sys.argv[3])

COMMON = r'''
.hero{position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:44px 40px 0}
h1{font-size:52px}
.lead{margin-top:14px;font-size:18px;max-width:600px}
.act{display:flex;align-items:center;gap:16px;margin-top:22px}
.req{margin-top:10px;font-size:14px;color:var(--mu)}
.band{position:relative;overflow:hidden;height:860px;margin-top:40px}
.band .art{background-repeat:no-repeat}
.scene{position:absolute;z-index:2;left:max(40px,calc(50% - 600px));top:48px;width:940px}
.scene .phone{display:none}
@media (max-width:640px){.top nav{display:none}.top{padding:0 20px}.hero{padding:32px 20px 0}h1{font-size:30px}.lead{font-size:16px;margin-top:12px}.act{margin-top:18px;flex-direction:column;align-items:stretch}.req{display:none}
 .band{height:640px;margin-top:24px}.scene{left:20px;top:150px;width:350px}.scene .desk{display:none}.scene .phone{display:block}}
'''
def hero():
  return (f'<section class="hero"><h1>{H1}</h1><p class="lead">{LEAD}</p>'
          f'<div class="act"><a class="cta dk" href="#" data-primary>Mac용 다운로드</a>{PHONE}</div><p class="req">{SUB}</p></section>')
def band(art, extra=''):
  return (f'<div class="band"><div class="art" style="background-image:url({art});{extra}"></div><div class="scene">'
          f'<div class="desk">{win("app/scene-desk.png")}</div><div class="phone">{win("app/scene-phone.png")}</div></div></div>')

# A — 새벽 조정: paper page; the painting is an inset rounded panel (Cursor); the crew rows beside the app on the right.
A_CSS = r'''
:root{--bg:#EEEDE8;--tx:#16171A;--mu:#55575D;--pri:#16171A;--on-pri:#F5F4F0}
.band{margin:40px 40px 0;border-radius:18px;background:linear-gradient(180deg,#C9B39C 0%,#A7A39C 45%,#7A8088 100%)}
.band .art{background-image:url(art/rowing-4-panel.jpg)!important;background-size:cover;background-position:center}
@media (max-width:640px){.band{margin:24px 0 0;border-radius:0}.band .art{background-image:url(art/rowing-4.png)!important;background-size:auto 300px;background-position:80% top}}
'''
# B — 밤의 건물: dark page; the band is the night street, one floor lit to the right of the app.
B_CSS = r'''
:root{--bg:#0D1015;--tx:#F2F1EC;--mu:#B4B6BA;--pri:#F2F1EC;--on-pri:#0D1015}
.band{background:#22282F}
.band .art{background-size:960px auto;background-position:right 0 top 40px}
.band::before{content:"";position:absolute;left:0;right:0;top:0;height:80px;z-index:1;background:linear-gradient(#0D1015,rgba(13,16,21,0))}
@media (max-width:640px){.band .art{background-size:auto 300px;background-position:72% -60px}}
'''
# C — 벽에 든 빛: near-black page; low evening light on the wall right of the app; the light never falls on the app or the copy.
C_CSS = r'''
:root{--bg:#0B0B0C;--tx:#EDEDEA;--mu:#ADADA8;--pri:#EDEDEA;--on-pri:#0B0B0C}
.band{background:#121210}
.band .art{background-size:auto 860px;background-position:right top;opacity:.8}
@media (max-width:640px){.band .art{background-size:auto 640px;background-position:96% top;opacity:.7}}
'''
for k, css in (('a', A_CSS), ('b', B_CSS), ('c', C_CSS)):
  open(f'kv-{k}.html', 'w').write(page(COMMON + css, f'{top()}<main>{hero()}{band(ART[k])}</main>'))
print('written')
