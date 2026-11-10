"""T-521 key-visual ideation round 4.

The person asked to decide the key visual before another full-page direction.  All
three concepts therefore keep the same type, copy, and controls.  Only the
visual structure changes.  Each one combines an original generated photograph
with a real equipe decision panel captured from the desktop UI map.
"""
from pathlib import Path
import sys

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
from kv import FONT, BASE, wordmark, H1, LEAD, SUB  # noqa: E402

COMMON = r"""
:root{--bg:#0b0b0a;--tx:#f2f0e9;--mu:#b9b4a8;--pri:#f2f0e9;--on-pri:#11110f}
html,body{min-height:100%} body{background:#0b0b0a;overflow-x:hidden}
.top{height:60px}.top nav{color:#aaa69d}.top .dl{background:#f2f0e9;color:#11110f}
.fold{position:relative;min-height:900px;overflow:hidden}
.copy{position:relative;z-index:5;max-width:1280px;margin:0 auto;padding:46px 40px 0}
h1{font-size:54px;max-width:760px}.lead{font-size:18px;max-width:650px;margin-top:14px}
.actions{display:flex;align-items:center;gap:16px;margin-top:22px}.req{font-size:14px;color:var(--mu);margin-top:10px}
.mobile-actions{display:none}.visual{position:absolute;inset:300px 0 0;overflow:hidden}
.art{position:absolute;inset:0;background-repeat:no-repeat;background-size:cover}
.product{position:absolute;z-index:3;overflow:hidden;border-radius:12px;background:#141414;
  box-shadow:0 0 0 1px rgba(255,255,255,.12),0 36px 90px rgba(0,0,0,.55)}
.product>img{display:block;width:100%}.mobile-product{display:none}
@media(max-width:640px){
 .top{padding:0 20px;height:56px}.top nav,.top .dl{display:none}.fold{min-height:880px}
 .copy{padding:22px 20px 0}h1{font-size:29px;line-height:1.1}.lead{font-size:14px;line-height:1.45;margin-top:8px}
 .actions{margin-top:16px}.desktop-action{display:none}.mobile-actions{display:grid;width:100%;gap:9px}
 .mobile-actions .cta,.mobile-actions .cta2{width:100%;height:42px;justify-content:center}.req{font-size:11px;line-height:1.35;margin-top:7px}
 .visual{inset:286px 0 0}.desktop-product{display:none}.mobile-product{display:block;left:20px;right:20px;top:6px;background:#131313}
 .mobile-product img{display:block;width:100%}
}
"""

TOP = f'''<header class="top">{wordmark(22)}<nav><a href="#">작동 방식</a><a href="#">폰 앱</a><a href="#">Design</a><a href="#">GitHub</a></nav><a class="dl" href="#">Mac용 다운로드</a></header>'''
COPY = f'''<section class="copy"><h1>{H1}</h1><p class="lead">기획·디자인·개발을 한 팀이 맡아요.<br>공개·발송·결제만 내게 물어요.</p><div class="actions"><a class="cta desktop-action" href="#" data-primary>Mac용 다운로드</a><div class="mobile-actions"><a class="cta" href="#" data-primary>Mac으로 링크 보내기</a><a class="cta2" href="#">iPhone 앱 받기</a></div></div><p class="req">{SUB}</p></section>'''

DATA = {
    "a": {
        "title": "한 바퀴",
        "art": "round4-art/cycle-table.png",
        "css": r"""
.a .art{background-position:center 43%;filter:saturate(.82) brightness(.82)}
.a .visual:after{content:"";position:absolute;inset:0;background:linear-gradient(#0b0b0a 0,transparent 22%,rgba(0,0,0,.08) 80%,#080807 100%)}
.a .product{width:1000px;left:50%;top:18px;transform:translateX(-50%)}
@media(max-width:640px){.a .art{background-size:auto 510px;background-position:50% 0;filter:saturate(.78) brightness(.68)}
 .a .product{width:auto;left:20px;right:20px;transform:none}}
""",
    },
    "b": {
        "title": "야간 인수인계",
        "art": "round4-art/night-relay.png",
        "css": r"""
.b .art{background-position:center 57%;filter:saturate(.72) brightness(.76)}
.b .visual:after{content:"";position:absolute;inset:0;background:linear-gradient(#0b0b0a 0,transparent 20%,rgba(0,0,0,.05) 85%,#080807 100%)}
.b .product{width:980px;right:max(54px,calc(50% - 640px));top:12px}
@media(max-width:640px){.b .art{background-size:auto 510px;background-position:45% 0;filter:saturate(.65) brightness(.60)}
 .b .product{width:auto;left:20px;right:20px}}
""",
    },
    "c": {
        "title": "증거 필름",
        "art": "round4-art/evidence-film.png",
        "css": r"""
.c .art{background-position:center 47%;filter:saturate(.58) brightness(.74)}
.c .visual:after{content:"";position:absolute;inset:0;background:linear-gradient(#0b0b0a 0,transparent 18%,rgba(0,0,0,.06) 82%,#080807 100%)}
.c .product{width:940px;right:max(54px,calc(50% - 640px));top:12px}
@media(max-width:640px){.c .art{background-size:auto 500px;background-position:47% 0;filter:saturate(.5) brightness(.56)}
 .c .product{width:auto;left:20px;right:20px}}
""",
    },
}

for key, item in DATA.items():
    product = '''<div class="product desktop-product"><img src="round4-app/accept-dark-desktop.png" alt="실제 equipe 화면 — 팀이 테스트를 끝낸 두 작업을 수락하면 다음 작업과 배포 준비가 시작됨"></div><div class="product mobile-product"><img src="round4-app/accept-dark-mobile.png" alt="실제 equipe 작업 목록과 수락 화면"></div>'''
    body = f'''{TOP}<main class="fold {key}">{COPY}<div class="visual"><div class="art" style="background-image:url('{item['art']}')"></div>{product}</div></main>'''
    html = f'''<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">{FONT}<title>{item['title']} · equipe</title><style>{BASE}{COMMON}{item['css']}</style></head><body>{body}</body></html>'''
    (HERE / f"kv-{key}-round4.html").write_text(html, encoding="utf-8")

print("wrote kv-a-round4.html, kv-b-round4.html, kv-c-round4.html")
