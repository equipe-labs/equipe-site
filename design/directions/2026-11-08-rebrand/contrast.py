# WCAG 2.x contrast for every text pair each direction uses, light and dark. Reads the CSS variables straight from dir_*.py.
import re, sys, json
def lum(h):
  h=h.lstrip('#'); r,g,b=[int(h[i:i+2],16)/255 for i in (0,2,4)]
  f=lambda c: c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
  return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)
def cr(a,b):
  la,lb=sorted([lum(a),lum(b)],reverse=True); return (la+0.05)/(lb+0.05)
PAIRS=[('tx','bg','본문'),('mu','bg','보조 글자'),('mu','sf','보조 글자·면 위'),('sig','bg','신호색 글자'),('sig','sf','신호색 글자·면 위'),('on-pri','pri','주 버튼'),('tx','sf','글자·면 위')]
out={}
for d in 'abc':
  css=open(f'dir_{d}.py').read()
  light=dict(re.findall(r'--([a-z-]+):(#[0-9A-Fa-f]{6})', css.split('@media (prefers-color-scheme:dark)')[0].split(':root{',1)[1].split('}',1)[0]))
  dark=dict(light); dark.update(re.findall(r'--([a-z-]+):(#[0-9A-Fa-f]{6})', css.split('@media (prefers-color-scheme:dark){:root{',1)[1].split('}}',1)[0]))
  pairs=PAIRS+([('on-go','go','승인 버튼(파랑)'),('on-inv','inv','반전 띠 글자'),('inv-mu','inv','반전 띠 보조')] if d=='c' else [])
  out[d]={}
  for name,t in (('light',light),('dark',dark)):
    out[d][name]=[(lab,f'{t[a]} on {t[b]}',round(cr(t[a],t[b]),2)) for a,b,lab in pairs]
for d in out:
  for th in out[d]:
    for lab,p,v in out[d][th]:
      print(d,th,f'{v:5.2f}', 'AA' if v>=4.5 else ('AA-large' if v>=3 else 'FAIL'), lab, p)
json.dump(out,open('contrast.json','w'),ensure_ascii=False,indent=1)
