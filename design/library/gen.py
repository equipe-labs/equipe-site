#!/usr/bin/env python3
"""T-303 /design/library mockups. Reads T-291 token files, writes list/detail/remix HTML (site tokens only for chrome)."""
import json, colorsys, sys, os
SRC = "/Users/abel/.equipe/squads/equipe-squad/home/outputs/T-291 오리지널 디자인 시스템 30개/systems"
OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)

def load(n):
    d = json.load(open(f"{SRC}/{n}/tokens.json"))
    c = {m: {k: v["$value"] for k, v in d["color"][m].items()} for m in ("light", "dark")}
    ty = d["typography"]["family"]
    gen = d["$description"].split("—")[1].split("스타일")[0].strip()
    return dict(name=n, genre=gen, c=c, disp=ty["display"]["$value"][0], body=ty["body"]["$value"][0],
                r=d["radius"], raw=d)

def lum(h):
    h = h.lstrip("#"); r, g, b = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    f = lambda x: x / 12.92 if x <= .03928 else ((x + .055) / 1.055) ** 2.4
    return .2126 * f(r) + .7152 * f(g) + .0722 * f(b)
def cr(a, b):
    la, lb = sorted([lum(a), lum(b)], reverse=True); return (la + .05) / (lb + .05)
def hsl(h):
    h = h.lstrip("#"); r, g, b = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    hh, l, s = colorsys.rgb_to_hls(r, g, b); return hh, s, l
def hexs(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h, l, s); return "#%02x%02x%02x" % tuple(round(x * 255) for x in (r, g, b))

MOOD = {"차분": ["미니멀", "모노", "기업용", "차분한 금융", "의료·청결", "스위스 그리드"],
        "따뜻": ["따뜻한", "흙빛", "노을", "손맛", "자연"],
        "대담": ["브루탈", "고대비", "레트로", "사이버 네온", "베이퍼웨이브", "Y2K 캔디"],
        "부드러움": ["파스텔", "놀이형", "어린이", "말랑 입체", "반투명 유리"],
        "격식": ["럭셔리", "신문", "에디토리얼", "종이 인쇄물", "한밤 엔터프라이즈", "바다", "선(禪) 먹빛"]}
def mood(g):
    for k, v in MOOD.items():
        if g in v: return k
    return "차분"

# ---- remix (mockup-grade: brand colour replaces primary/ring; text on it and dark value re-derived to pass AA)
def remix(S, brand):
    out = {m: dict(S["c"][m]) for m in ("light", "dark")}
    h, s, l = hsl(brand)
    for mode in ("light", "dark"):
        bg = out[mode]["background"]
        p = brand
        if mode == "dark":
            ll = max(l, .45)
            while cr(hexs(h, s, ll), bg) < 4.5 and ll < .9: ll += .02
            p = hexs(h, s, ll)
        else:
            ll = l
            while cr(p, bg) < 3 and ll > .1: ll -= .02; p = hexs(h, s, ll)
        out[mode]["primary"] = p; out[mode]["ring"] = p
        out[mode]["on-primary"] = "#ffffff" if cr(p, "#ffffff") >= 4.5 else "#0b0b0b"
        sb = out[mode]["background"]; bl = hsl(sb)[2]
        out[mode]["secondary"] = hexs(h, .35 if mode == "light" else .25, .88 if mode == "light" else .22)
    return out

SITE_CSS = """
:root{--bg:#F6F5F1;--surface:#fff;--code-bg:#EAE7E0;--text:#15161A;--muted:#4F5159;--accent:#1D4ED8;--on-accent:#fff;--line:#0A0A0C24;
--s-1:4px;--s-2:8px;--s-3:12px;--s-4:16px;--s-5:24px;--s-6:32px;--s-7:48px;--s-8:72px;--r-1:8px;--r-2:12px;
--sans:'Inter',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace;--ok:#15703a;--bad:#b3261e}
@media(prefers-color-scheme:dark){:root{--bg:#0A0A0C;--surface:#16171A;--code-bg:#17171C;--text:#EFEDE7;--muted:#A3A5AB;--accent:#8FB0FF;--on-accent:#0B1226;--line:#E9E6DF24;--ok:#5fd08a;--bad:#ff8a80}}
*{box-sizing:border-box}.two>*,.sc2>*,.hd>*,.rx>*,.dl>*{min-width:0}pre{max-width:100%}body{margin:0;background:var(--bg);color:var(--text);font:400 16px/1.6 var(--sans);word-break:keep-all;overflow-wrap:anywhere}
@media(min-width:641px){body{font-size:17px}}
h1,h2,h3,p{margin:0}a{color:inherit}
header.site{position:sticky;top:0;background:var(--bg);border-bottom:1px solid var(--line);z-index:5}
header.site .w{max-width:1360px;margin:auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;min-height:64px}
.brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:19px;text-decoration:none}
nav ul{display:flex;gap:4px;list-style:none;margin:0;padding:0;align-items:center}
nav a{display:flex;align-items:center;min-height:44px;padding:0 12px;font-size:15px;text-decoration:none;color:var(--muted)}
nav a.cur{color:var(--text);font-weight:600;box-shadow:0 2px 0 var(--accent)}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:var(--r-2);font:600 16px var(--sans);border:1px solid var(--line);background:var(--surface);color:var(--text);text-decoration:none;gap:8px}
.btn.p{background:var(--accent);color:var(--on-accent);border-color:var(--accent)}
.btn.sm{min-height:40px;padding:0 14px;font-size:14px}
.w{max-width:1360px;margin:auto;padding:0 24px}
.tabs{display:flex;gap:8px;padding-top:24px;flex-wrap:wrap}
.tabs a{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border:1px solid var(--line);border-radius:99px;background:var(--surface);font:500 15px var(--sans);text-decoration:none}
.tabs a.on{background:var(--text);color:var(--bg);border-color:var(--text)}
.eb{font:600 13px var(--mono);color:var(--accent);margin-bottom:12px}
h1{font-size:clamp(32px,4.2vw,52px);line-height:1.25;letter-spacing:-.03em;margin-bottom:16px;max-width:900px}
h2{font-size:26px;line-height:1.25;letter-spacing:-.02em;margin-bottom:8px}
.lead{color:var(--muted);font-size:18px;max-width:640px}
.lab{font:600 12px var(--mono);color:var(--muted);text-transform:uppercase;letter-spacing:.04em}
.mono{font-family:var(--mono)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:14px}
.chip{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 14px;border:1px solid var(--line);border-radius:99px;background:var(--surface);font:500 15px var(--sans);color:var(--text)}
.chip.on{background:var(--text);color:var(--bg);border-color:var(--text)}
.sw{width:14px;height:14px;border-radius:4px;border:1px solid var(--line);display:inline-block}
footer{border-top:1px solid var(--line);margin-top:72px;padding:32px 0;color:var(--muted);font-size:14px}
footer .w{display:flex;gap:24px;flex-wrap:wrap}
.note{font:400 13px/1.5 var(--mono);color:var(--muted);margin-top:16px}.note b{color:var(--accent);font-weight:600}
@media(max-width:640px){header.site .w,.w{padding:0 16px}nav .opt{display:none}h2{font-size:23px}.lead{font-size:17px}}
"""
MARK = '<svg viewBox="0 0 100 100" width="28" height="28"><rect width="100" height="100" rx="22" fill="#0A0A0C"/><path fill="#EFEDE7" d="M60.54 52.17C60.54 38.69 53.73 30.5 42.2 30.5C30.96 30.5 24.07 38.11 24.07 51.23C24.07 63.77 30.89 70.95 41.98 70.95C50.75 70.95 57.86 66.97 60.11 59.28H50.1C49.23 62.11 46.04 63.2 42.34 63.2C37.56 63.2 34.51 61.02 34.22 53.41H60.47ZM49.96 46.66H34.37C35.02 41.23 37.56 38.26 42.05 38.26C46.4 38.26 49.45 41.08 49.96 46.66Z"/><circle cx="70.5" cy="66.5" r="6.4" fill="#3F6FF5"/></svg>'
def chrome(cur, body):
    tabs = "".join(f'<a href="#"{" class=on" if k == cur else ""}>{n}</a>' for k, n in
                   [("ov", "소개"), ("lib", "라이브러리"), ("docs", "문서"), ("ex", "예시")])
    return f"""<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>{SITE_CSS}</style></head><body>
<header class="site"><div class="w"><a class="brand" href="#">{MARK}<span>equipe</span></a><nav><ul><li class="opt"><a href="#">어떻게 일해요</a></li><li class="opt"><a href="#">기능</a></li><li><a class="cur" href="#">디자인</a></li><li class="opt"><a href="#">FAQ</a></li><li><a href="#">한국어</a></li><li class="opt"><a class="btn p sm" href="#">앱 받기</a></li></ul></nav></div></header>
<main><div class="w"><nav class="tabs">{tabs}</nav>{body}</div></main>
<footer><div class="w"><span>© equipe</span><span>MIT 라이선스</span><span>GitHub</span></div></footer></body></html>"""

def role_chips(S, mode, keys=("background", "surface", "text", "primary", "secondary", "accent", "border")):
    return "".join(f'<i style="background:{S["c"][mode][k]}"></i>' for k in keys)

CARD_CSS = """
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
@media(max-width:1100px){.grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.grid{grid-template-columns:1fr}}
.sc{overflow:hidden;display:flex;flex-direction:column}
.pv{display:grid;grid-template-columns:1fr 1fr;height:150px}
.pv>div{padding:14px 14px;display:flex;flex-direction:column;gap:8px;justify-content:center;min-width:0}
.pv .t{font:700 17px/1.2 var(--sans);letter-spacing:-.01em;white-space:nowrap;overflow:hidden}
.pv .l{height:6px;border-radius:3px;opacity:.55}
.pv .row{display:flex;gap:6px;align-items:center}
.pv .b{font:600 12px var(--sans);padding:6px 11px;white-space:nowrap}
.pv .tag{font:600 10px var(--mono);padding:3px 7px;border-radius:99px;white-space:nowrap}
.sc .in{padding:16px 18px 18px;display:flex;flex-direction:column;gap:10px}
.sc h3{font-size:19px;letter-spacing:-.01em;line-height:1.3}
.sc .g{font-size:14px;color:var(--muted)}
.sc .meta{display:flex;justify-content:space-between;align-items:center;font:500 12px var(--mono);color:var(--muted);gap:8px}
.dots{display:flex;gap:0}.dots i{width:22px;height:22px;border:1px solid var(--line);margin-right:-1px;display:block}
.dots i:first-child{border-radius:6px 0 0 6px}.dots i:last-child{border-radius:0 6px 6px 0}
.bd{font:600 11px var(--mono);padding:3px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted);white-space:nowrap}
.bd.dk{background:var(--text);color:var(--bg);border-color:var(--text)}
"""
def card(S, dark_first=False):
    L, D = S["c"]["light"], S["c"]["dark"]
    rad = S["r"]["sm"]["$value"]
    def half(m):
        c = S["c"][m]
        return (f'<div style="background:{c["background"]};color:{c["text"]}"><span class="t" style="font-family:var(--sans)">Aa 제목</span>'
                f'<span class="l" style="background:{c["muted-text"]};width:80%"></span><span class="l" style="background:{c["muted-text"]};width:55%"></span>'
                f'<span class="row"><span class="b" style="background:{c["primary"]};color:{c["on-primary"]};border-radius:{rad}">확인</span>'
                f'<span class="tag" style="background:{c["secondary"]};color:{c["text"]}">초안</span></span></div>')
    return f"""<article class="card sc"><div class="pv" style="border-bottom:1px solid var(--line)">{half("light")}{half("dark")}</div>
<div class="in"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><h3>{S["name"]}</h3>{'<span class="bd dk">다크 우선</span>' if dark_first else '<span class="bd">라이트·다크</span>'}</div>
<div class="g">{S["genre"]} · {S["disp"]}</div>
<div class="meta"><span class="dots">{role_chips(S,"light")}</span><span>{S["body"]}</span></div></div></article>"""

DARK_FIRST = {"Nocturne", "Flicker"}
def list_page(all_):
    show = ["Hearth","Nocturne","Hush","Plumb","Mallow","Gilt","Sumi","Brine","Klaxon","Lichen","Masthead","Taffy"]
    cards = "".join(card(all_[n], n in DARK_FIRST) for n in show)
    moods = "".join(f'<span class="chip{" on" if i==0 else ""}">{m}</span>' for i, m in enumerate(["전체"] + list(MOOD)))
    hues = [("#d33","빨강"),("#e8891d","주황"),("#d9b100","노랑"),("#2f8f4e","초록"),("#0e8fa0","청록"),("#2a55d6","파랑"),("#7a46d6","보라"),("#d6338a","분홍"),("#555","무채")]
    hue = "".join(f'<span class="chip" style="padding:0 12px 0 10px"><i class="sw" style="background:{c};width:18px;height:18px;border-radius:99px"></i>{n}</span>' for c, n in hues)
    body = f"""<style>{CARD_CSS}
.srch{{display:flex;align-items:center;gap:10px;min-height:52px;padding:0 16px;border:1px solid var(--line);border-radius:var(--r-2);background:var(--surface);color:var(--muted);max-width:560px;font-size:16px}}
.fl{{display:flex;flex-direction:column;gap:12px;margin:28px 0 24px}}.fl .r{{display:flex;gap:8px;flex-wrap:wrap;align-items:center}}.fl .lab{{min-width:56px}}
@media(max-width:640px){{.fl .r{{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}}.chip{{white-space:nowrap}}.fl .lab{{display:none}}}}
.cnt{{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;color:var(--muted);font-size:15px}}
</style>
<section style="padding:72px 0 8px"><div class="eb">DESIGN LIBRARY</div><h1>디자인 시스템, 골라서 바로 내 걸로.</h1>
<p class="lead">스타일 30개. 마음에 드는 걸 열어 색·글꼴·버튼 상태를 보고, 내 브랜드색을 넣어 코드로 받아요.</p>
<div class="fl" style="margin-top:32px"><div class="srch" role="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>이름, 분위기, 글꼴로 찾기</div>
<div class="r"><span class="lab">분위기</span>{moods}</div>
<div class="r"><span class="lab">색</span>{hue}</div>
<div class="r"><span class="lab">모드</span><span class="chip">다크 우선만</span><span class="chip">한글 글꼴 포함</span></div></div></section>
<div class="cnt"><span><b style="color:var(--text)">30개</b> 스타일</span><span>이름순 ▾</span></div>
<div class="grid">{cards}</div>
<div style="display:flex;justify-content:center;margin-top:32px"><a class="btn" href="#">18개 더 보기</a></div>
<p class="note"><b>직접 만든 스타일이에요.</b> 모두 무료 글꼴(OFL)이고, 받은 토큰은 마음대로 써도 돼요.</p>"""
    return chrome("lib", body)

def swatch_row(S, mode):
    c = S["c"][mode]; bg = c["background"]
    keys = ["background", "surface", "raised", "text", "muted-text", "primary", "on-primary", "secondary", "accent", "border", "border-strong", "ring", "destructive", "success", "warning"]
    pair = {"text": "background", "muted-text": "background", "primary": "background", "on-primary": "primary", "accent": "background", "destructive": "background", "success": "background", "warning": "background"}
    cells = ""
    for k in keys:
        v = c[k]; p = pair.get(k)
        ratio = f'<span class="mono" style="font-size:12px;color:var(--muted)">{cr(v, c[p]):.1f}:1 {"✓" if cr(v,c[p])>=(3 if k in("primary",) else 4.5) else "✕"}</span>' if p else '<span style="font-size:12px;color:var(--muted)">&nbsp;</span>'
        cells += f'<div class="rc"><i style="background:{v}"></i><div><div class="mono" style="font-size:13px">{k}</div><div class="mono" style="font-size:12px;color:var(--muted)">{v}</div>{ratio}</div></div>'
    return cells

def comp_panel(c, S, mode, remixed=False, brand_note=""):
    r = S["r"]; rs, rm, rl = r["sm"]["$value"], r["md"]["$value"], r["lg"]["$value"]
    btn = lambda bg, fg, bd, txt, extra="": f'<span style="display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 16px;border-radius:{rs};background:{bg};color:{fg};border:1px solid {bd};font:600 14px var(--sans);{extra}">{txt}</span>'
    inp = lambda bd, txt, col, extra="", ring=False: f'<div style="min-height:40px;padding:9px 12px;border-radius:{rs};background:{c["raised"]};border:1px solid {bd};color:{col};font:400 14px var(--sans);{"box-shadow:0 0 0 3px "+c["ring"]+"55;" if ring else ""}{extra}">{txt}</div>'
    return f"""<div class="cp" style="background:{c["background"]};color:{c["text"]};border-radius:{rl}">
<div class="lab" style="color:{c["muted-text"]}">{mode.upper()}</div>
<div style="font:700 22px/1.25 var(--sans);letter-spacing:-.015em">주문을 확인해 주세요</div>
<div style="font-size:14px;color:{c["muted-text"]};margin-top:-6px">3건이 승인을 기다려요 · 11월 2일 기준</div>
<div class="cg"><span class="lab" style="color:{c["muted-text"]}">버튼</span><div class="rw">{btn(c["primary"],c["on-primary"],c["primary"],"기본")}{btn(c["primary"],c["on-primary"],c["primary"],"눌림","filter:brightness(.92)")}{btn(c["primary"],c["on-primary"],c["primary"],"포커스","box-shadow:0 0 0 2px "+c["background"]+",0 0 0 4px "+c["ring"])}{btn(c["border"],c["muted-text"],c["border"],"비활성")}</div>
<div class="rw">{btn(c["secondary"],c["text"],c["secondary"],"보조")}{btn("transparent",c["text"],c["border-strong"],"윤곽")}{btn(c["destructive"],"#fff","transparent","삭제")}</div></div>
<div class="cg"><span class="lab" style="color:{c["muted-text"]}">입력</span>{inp(c["border-strong"],"이메일", c["muted-text"])}{inp(c["ring"],"mina@acme.kr",c["text"],ring=True)}{inp(c["destructive"],"올바른 이메일이 아니에요",c["destructive"])}</div>
<div class="cg"><span class="lab" style="color:{c["muted-text"]}">카드·알림</span><div style="padding:14px 16px;border-radius:{rm};background:{c["surface"]};border:1px solid {c["border"]}"><div style="font-weight:700">이번 주 방문 <span class="mono" style="font-variant-numeric:tabular-nums">12,480</span></div><div style="font-size:13px;color:{c["muted-text"]}">전주 대비 <span style="color:{c["success"]}">▲ 8.2%</span> · <span style="color:{c["warning"]}">서버 점검 예정</span></div></div></div></div>"""

DETAIL_CSS = """
.crumb{font:500 14px var(--mono);color:var(--muted);padding-top:32px}
.hd{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:end;padding:24px 0 32px}
@media(max-width:820px){.hd{grid-template-columns:1fr}}
.hd .acts{display:flex;gap:12px;flex-wrap:wrap}
@media(max-width:640px){.hd .acts .btn{width:100%}}
section.s{padding:48px 0;border-top:1px solid var(--line)}
.two{display:grid;grid-template-columns:1fr 1fr;gap:20px}@media(max-width:900px){.two{grid-template-columns:1fr}}
.rg{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;padding:20px;border-radius:14px}
@media(max-width:640px){.rg{grid-template-columns:1fr}}
.rc{display:flex;gap:12px;align-items:center}.rc i{width:44px;height:44px;border-radius:10px;border:1px solid #8885;flex:none}
.cp{padding:24px;display:flex;flex-direction:column;gap:14px;border:1px solid var(--line)}
.cg{display:flex;flex-direction:column;gap:8px}.rw{display:flex;gap:8px;flex-wrap:wrap}
.sc2{display:grid;align-items:start;grid-template-columns:repeat(2,1fr);gap:20px}@media(max-width:900px){.sc2{grid-template-columns:1fr}}
.dl{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}@media(max-width:900px){.dl{grid-template-columns:repeat(2,1fr)}}
.dl a{padding:16px;border-radius:12px;background:var(--surface);border:1px solid var(--line);text-decoration:none;display:flex;flex-direction:column;gap:4px;min-height:84px}
.dl b{font:600 15px var(--mono)}.dl span{font-size:13px;color:var(--muted)}
pre{margin:0;background:var(--code-bg);border-radius:12px;padding:16px 18px;font:14px/1.6 var(--mono);overflow:hidden;white-space:pre;color:var(--text)}
.tw{padding:20px 24px;border-radius:14px;display:flex;flex-direction:column;gap:6px}
"""
def detail_page(S):
    c = S["c"]
    L = c["light"]; D = c["dark"]
    bar = lambda w: f'<div style="display:flex;align-items:center;gap:12px"><span class="mono" style="font-size:12px;color:var(--muted);width:32px">{w[0]}</span><i style="display:block;height:12px;width:{w[1]}px;background:var(--accent);border-radius:3px"></i><span class="mono" style="font-size:12px;color:var(--muted)">{w[1]}px</span></div>'
    sp = [(k, int(v["$value"][:-2]) * 2) for k, v in S["raw"]["spacing"].items()]
    sp = "".join(bar((k, int(v["$value"][:-2]) * 3)) for k, v in S["raw"]["spacing"].items())
    rads = "".join(f'<div style="text-align:center"><div style="width:72px;height:72px;border:2px solid var(--accent);border-radius:{S["r"][k]["$value"] if k!="full" else "36px"}"></div><div class="mono" style="font-size:12px;color:var(--muted);margin-top:6px">{k} {S["r"][k]["$value"] if k!="full" else ""}</div></div>' for k in ("sm", "md", "lg", "full"))
    sizes = S["raw"]["typography"]["size"]
    tys = "".join(f'<div style="display:flex;align-items:baseline;gap:16px;border-bottom:1px solid var(--line);padding:8px 0"><span class="mono" style="font-size:12px;color:var(--muted);width:72px;flex:none">{k} {v["$value"]}</span><span style="font-size:{min(int(v["$value"][:-2]),44)}px;line-height:1.3;font-weight:{700 if int(v["$value"][:-2])>=20 else 400};letter-spacing:-.01em;white-space:nowrap;overflow:hidden">가격은 투명하게, 12,480원</span></div>' for k, v in list(sizes.items())[1:8])
    body = f"""<style>{DETAIL_CSS}</style>
<div class="crumb">라이브러리 / <span style="color:var(--text)">{S["name"]}</span></div>
<div class="hd"><div><div class="eb">{S["genre"].upper() if False else S["genre"]} 스타일</div><h1 style="margin-bottom:12px">{S["name"]}</h1>
<p class="lead">주황 불빛 같은 따뜻한 바탕에 둥근 모서리. 가게·생활 서비스에 어울려요.</p>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><span class="bd">{S["disp"]} · 제목</span><span class="bd">{S["body"]} · 본문</span><span class="bd">Pretendard · 한글</span><span class="bd">라이트·다크</span><span class="bd">AA 통과 28/28</span></div></div>
<div class="acts"><a class="btn p" href="#">내 색으로 바꾸기</a><a class="btn" href="#">토큰 받기</a></div></div>

<section class="s"><h2>역할색</h2><p class="lead" style="margin-bottom:20px">15개 역할이 라이트와 다크에서 각각 정해져 있어요. 숫자는 바탕 대비 명암비(AA는 4.5:1, 버튼 면은 3:1).</p>
<div class="two"><div><div class="lab" style="margin-bottom:8px">라이트</div><div class="rg" style="background:{L["background"]};border:1px solid var(--line);color:{L["text"]}">{swatch_row(S,"light")}</div></div>
<div><div class="lab" style="margin-bottom:8px">다크</div><div class="rg" style="background:{D["background"]};border:1px solid var(--line);color:{D["text"]}">{swatch_row(S,"dark")}</div></div></div></section>

<section class="s"><h2>컴포넌트 상태</h2><p class="lead" style="margin-bottom:20px">기본·눌림·포커스·비활성, 입력의 평소·입력 중·오류까지 같은 토큰으로 그렸어요.</p>
<div class="two">{comp_panel(L,S,"light")}{comp_panel(D,S,"dark")}</div></section>

<section class="s"><h2>글꼴과 크기</h2>
<div class="sc2" style="margin-top:20px"><div class="card tw"><div class="lab">제목 · {S["disp"]}</div><div style="font-size:34px;font-weight:700;letter-spacing:-.02em;line-height:1.25">오늘의 주문 현황</div><div class="lab" style="margin-top:12px">본문 · {S["body"]} / Pretendard</div><div style="font-size:16px;line-height:1.6;color:var(--muted)">한글은 줄 끝을 단어 단위로 맞추고, 숫자는 12,480처럼 같은 폭으로 정렬해요. 본문 16px, 행간 1.6.</div></div>
<div class="card tw">{tys}</div></div>
<div class="sc2" style="margin-top:20px"><div class="card tw"><div class="lab">간격</div>{sp}</div><div class="card tw"><div class="lab">모서리</div><div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:8px">{rads}</div></div></div></section>

<section class="s"><h2>토큰 받기</h2><p class="lead" style="margin-bottom:20px">형식을 고르면 파일 하나로 내려받아요. 지금 보는 색 그대로예요.</p>
<div class="dl"><a href="#"><b>CSS</b><span>:root 변수 · 다크 포함</span></a><a href="#"><b>Tailwind</b><span>v4 @theme</span></a><a href="#"><b>DTCG JSON</b><span>디자인 토큰 표준</span></a><a href="#"><b>shadcn</b><span>globals.css</span></a><a href="#"><b>Figma</b><span>변수 가져오기</span></a></div>
<pre style="margin-top:16px">:root {{
  --{S["name"].lower()}-background: {L["background"]};
  --{S["name"].lower()}-primary:    {L["primary"]};
  --{S["name"].lower()}-on-primary: {L["on-primary"]};
}}
@media (prefers-color-scheme: dark) {{ … }}</pre>
<p class="note"><b>직접 만든 스타일이에요.</b> 글꼴은 모두 무료(OFL)예요. 업데이트: 2026-11-02 · v1</p></section>

<section class="s" style="padding-bottom:0"><div class="card" style="padding:28px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap"><p style="font-size:19px;max-width:560px">브랜드색 하나만 넣으면 이 스타일이 내 색으로 바뀌어요.</p><a class="btn p" href="#">내 색으로 바꾸기</a></div></section>
<style>.card.tw{{background:var(--surface)}}.dl a:hover{{border-color:var(--accent)}}</style>"""
    return chrome("lib", body)

REMIX_CSS = """
.rx{display:grid;grid-template-columns:380px minmax(0,1fr);gap:32px;padding:40px 0 0;align-items:start}
@media(max-width:980px){.rx{grid-template-columns:1fr}}
.ctl{padding:24px;display:flex;flex-direction:column;gap:22px;position:sticky;top:88px}
@media(max-width:980px){.ctl{position:static}}
.fld{display:flex;flex-direction:column;gap:8px}
.in{min-height:48px;padding:0 14px;border:1px solid var(--line);border-radius:var(--r-1);background:var(--bg);display:flex;align-items:center;gap:10px;font:500 16px var(--mono)}
.sel{outline:2px solid var(--accent);outline-offset:2px}
.sws{display:flex;gap:10px;flex-wrap:wrap}.sws i{width:44px;height:44px;border-radius:99px;border:1px solid var(--line);display:block}
.seg{display:flex;border:1px solid var(--line);border-radius:var(--r-1);overflow:hidden}.seg span{flex:1;min-height:44px;display:flex;align-items:center;justify-content:center;font:500 15px var(--sans);border-right:1px solid var(--line)}.seg span:last-child{border:0}.seg .on{background:var(--text);color:var(--bg)}
.pr{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:640px){.pr{grid-template-columns:1fr}}
.ck{display:flex;gap:8px;align-items:center;font-size:15px;flex-wrap:wrap}
.ok{color:var(--ok);font-weight:600}.cp{padding:24px;display:flex;flex-direction:column;gap:14px;border:1px solid var(--line)}.cg{display:flex;flex-direction:column;gap:8px}.rw{display:flex;gap:8px;flex-wrap:wrap}
.tabs2{display:flex;gap:4px;border-bottom:1px solid var(--line);margin:24px 0 16px;overflow-x:auto}.tabs2 span{padding:0 14px;min-height:44px;display:flex;align-items:center;font:500 14px var(--mono);color:var(--muted);white-space:nowrap}.tabs2 .on{color:var(--text);box-shadow:0 2px 0 var(--accent);font-weight:600}
pre{margin:0;background:var(--code-bg);border-radius:12px;padding:16px 18px;font:14px/1.6 var(--mono);overflow:hidden;white-space:pre;color:var(--text)}
.bar{display:flex;gap:12px;flex-wrap:wrap;margin-top:16px}@media(max-width:640px){.bar .btn{width:100%}}
"""
def remix_page(S, brand):
    R = remix(S, brand); base = S["c"]
    def pair(m):
        return (f'<div style="display:flex;gap:4px;align-items:center"><i class="sw" style="background:{base[m]["primary"]};width:22px;height:22px"></i><span style="color:var(--muted)">→</span><i class="sw" style="background:{R[m]["primary"]};width:22px;height:22px"></i></div>')
    sw = "".join(f'<i style="background:{x}"></i>' for x in ["#0f766e", "#2a55d6", "#7a46d6", "#d6338a", "#e8891d", "#2f8f4e"])
    checks = [("라이트 · 버튼 글자", cr(R["light"]["on-primary"], R["light"]["primary"]), 4.5), ("라이트 · 버튼 면/바탕", cr(R["light"]["primary"], R["light"]["background"]), 3),
              ("다크 · 버튼 글자", cr(R["dark"]["on-primary"], R["dark"]["primary"]), 4.5), ("다크 · 버튼 면/바탕", cr(R["dark"]["primary"], R["dark"]["background"]), 3)]
    ck = "".join(f'<div class="ck"><span class="ok">✓</span><span>{n}</span><span class="mono" style="margin-left:auto;color:var(--muted)">{v:.1f}:1</span></div>' for n, v, t in checks)
    p = "acme"
    body = f"""<style>{REMIX_CSS}</style>
<div class="crumb" style="font:500 14px var(--mono);color:var(--muted);padding-top:32px">라이브러리 / {S["name"]} / <span style="color:var(--text)">내 색으로 바꾸기</span></div>
<section style="padding:24px 0 0"><h1 style="font-size:clamp(30px,3.6vw,44px)">브랜드색 하나로, {S["name"]}가 내 걸로.</h1><p class="lead">색을 넣으면 오른쪽 미리보기가 바로 바뀌어요. 글자가 읽히는지는 라이트와 다크 모두 자동으로 맞춰요.</p></section>
<div class="rx"><aside class="card ctl">
<div class="fld"><span class="lab">1 · 시작 스타일</span><div class="in" style="font-family:var(--sans);justify-content:space-between"><span style="display:flex;gap:10px;align-items:center"><span class="dots" style="display:flex">{role_chips(S,"light",("background","primary","secondary"))}</span>{S["name"]} · {S["genre"]}</span><span>▾</span></div></div>
<div class="fld"><span class="lab">2 · 브랜드색</span><div class="in sel"><i class="sw" style="background:{brand};width:24px;height:24px;border-radius:99px"></i>{brand}</div><div class="sws">{sw}</div><span style="font-size:13px;color:var(--muted)">색을 직접 고르거나, 쓰는 색의 #코드를 붙여 넣어요.</span></div>
<div class="fld"><span class="lab">3 · 안에서 바꿀 것</span><div class="seg"><span class="on">버튼·강조만</span><span>배경까지</span></div></div>
<div class="pr"><div class="fld"><span class="lab">변수 앞 이름</span><div class="in">{p}</div></div><div class="fld"><span class="lab">후보 수</span><div class="seg"><span>1</span><span class="on">2</span><span>3</span></div></div></div>
<div class="fld"><span class="lab">자동 검사</span>{ck}<div style="font-size:13px;color:var(--muted)">기준에 못 미친 색은 밝기만 조금 옮겨서 맞춰요. 옮긴 값은 아래 표에 보여요.</div></div></aside>
<div><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px"><div style="display:flex;gap:8px"><span class="chip on">후보 1</span><span class="chip">후보 2</span></div><span style="font-size:14px;color:var(--muted)">{S["name"]} 기본 → 내 색 · 11월 2일 기준</span></div>
<div class="two" style="display:grid;grid-template-columns:1fr 1fr;gap:20px">{comp_panel(R["light"],S,"light")}{comp_panel(R["dark"],S,"dark")}</div>
<div class="card" style="margin-top:20px;padding:16px 20px"><div class="lab" style="margin-bottom:10px">바뀐 값</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px 24px;font-size:14px">
<div style="display:flex;gap:12px;align-items:center"><span class="mono">primary 라이트</span>{pair("light")}</div><div style="display:flex;gap:12px;align-items:center"><span class="mono">primary 다크</span>{pair("dark")}</div>
<div style="display:flex;gap:12px"><span class="mono">ring · secondary</span><span style="color:var(--muted)">같이 바뀜</span></div><div style="display:flex;gap:12px"><span class="mono">나머지 11개</span><span style="color:var(--muted)">그대로</span></div></div></div>
<div class="tabs2"><span class="on">CSS</span><span>Tailwind</span><span>DTCG JSON</span><span>shadcn</span><span>Figma</span></div>
<pre>:root {{
  --{p}-background: {R["light"]["background"]};
  --{p}-primary:    {R["light"]["primary"]};
  --{p}-on-primary: {R["light"]["on-primary"]};
  --{p}-ring:       {R["light"]["ring"]};
}}
@media (prefers-color-scheme: dark) {{
  :root {{ --{p}-primary: {R["dark"]["primary"]}; … }}
}}</pre>
<div class="bar"><a class="btn p" href="#">코드 받기 (CSS)</a><a class="btn" href="#">복사</a><a class="btn" href="#">후보 둘 다 받기</a></div>
<p class="note"><b>이 페이지는 내 브라우저에서만 계산해요.</b> 넣은 색은 서버에 저장하지 않아요.</p></div></div>"""
    return chrome("lib", body + "<style>.crumb{padding-top:32px}.two{display:grid}@media(max-width:900px){.two{grid-template-columns:1fr!important}}</style>")

all_ = {n: load(n) for n in sorted(os.listdir(SRC))}
open(f"{OUT}/list.html", "w").write(list_page(all_))
open(f"{OUT}/detail.html", "w").write(detail_page(all_["Hearth"]))
open(f"{OUT}/remix.html", "w").write(remix_page(all_["Hearth"], "#0f766e"))
