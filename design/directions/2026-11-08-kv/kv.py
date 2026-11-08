# Key-visual round (T-521): one generated artwork + the real desktop app screen (UI map inbox/decision) + the headline.
# Each key visual differs by its art and how the window sits on it; type stays Pretendard so the picture is what's compared.
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
_p, _c = open(os.path.join(HERE, 'wordmark_path.txt')).read().split('\n')[:2]

def wordmark(h=22):
  w = round(h * 2.653, 1)
  return (f'<a class="logo" href="#" aria-label="equipe"><svg width="{w}" height="{h}" viewBox="0 10 265.3 82" aria-hidden="true">'
          f'<path fill="currentColor" d="{_p}"/>{_c}</svg></a>')

FONT = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">'

BASE = r'''
*{box-sizing:border-box;margin:0;padding:0}
body{font:400 16px/1.55 Pretendard,system-ui,sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all;background:var(--bg);color:var(--tx)}
a{color:inherit;text-decoration:none}
.top{position:relative;z-index:3;display:flex;align-items:center;gap:28px;height:64px;max-width:1280px;margin:0 auto;padding:0 40px}
.top nav{display:flex;gap:24px;font-size:14px;color:var(--mu)}.logo{display:flex;margin-right:12px}
.top .dl{margin-left:auto;font-size:14px;font-weight:500;height:34px;display:inline-flex;align-items:center;padding:0 14px;border-radius:8px;background:var(--pri);color:var(--on-pri)}
h1{font-weight:600;letter-spacing:-.035em;line-height:1.12}
.lead{color:var(--mu)}
.cta{display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 20px;border-radius:10px;background:var(--pri);color:var(--on-pri);font-weight:500;font-size:16px}
.sub{font-size:13px;color:var(--mu)}
.win{border-radius:12px;overflow:hidden;background:#141414;box-shadow:0 0 0 1px rgba(255,255,255,.10),0 40px 80px -20px rgba(0,0,0,.55),0 12px 24px -8px rgba(0,0,0,.4)}
.win .bar{height:30px;display:flex;align-items:center;gap:7px;padding:0 12px;background:#1b1b1b;border-bottom:1px solid rgba(255,255,255,.06)}
.win .bar i{width:11px;height:11px;border-radius:50%;background:#3a3a3a}
.win img{display:block;width:100%}
.art{position:absolute;inset:0;background-size:cover;background-position:center}
.cap{font-size:12px;color:var(--mu)}
.ph{display:none}
.cta2{display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 20px;border-radius:10px;border:1px solid color-mix(in srgb,var(--tx) 22%,transparent);font-weight:500;font-size:16px}
@media (max-width:640px){.dk{display:none!important}.ph{display:flex;flex-direction:column;gap:10px;width:100%}.ph .cta,.ph .cta2{width:100%;justify-content:center;margin:0}.top .dl{display:none}}
'''

def win(src):
  return f'<div class="win" role="img" aria-label="equipe 데스크톱 앱 — 확인 필요 화면"><div class="bar"><i></i><i></i><i></i></div><img src="{src}" alt=""></div>'

def top(nav=True):
  n = '<nav><a href="#">작동 방식</a><a href="#">폰 앱</a><a href="#">Design</a><a href="#">GitHub</a></nav>' if nav else ''
  return f'<header class="top">{wordmark(22)}{n}<a class="dl" href="#">Mac용 다운로드</a></header>'

H1 = '최고의 스타트업 팀을 드려요.<br>승인만 하세요.'
LEAD = '기획·디자인·개발을 한 팀이 맡아요. 공개·발송·결제만 내게 물어요.'
PHONE = '<div class="ph"><a class="cta" href="#">Mac으로 링크 보내기</a><a class="cta2" href="#">iPhone 앱 받기</a></div>'
SUB = "무료 오픈소스 · macOS 12 이상 · 쓰던 Claude·ChatGPT 요금제 그대로"

def page(css, body):
  return f'<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">{FONT}<style>{BASE}{css}</style></head><body>{body}</body></html>'
