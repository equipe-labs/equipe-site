#!/usr/bin/env python3
"""Build one comparison sheet per direction from sheets.json -> sheet-<key>.png."""
import json, pathlib, subprocess, html
from PIL import Image
HERE = pathlib.Path(__file__).resolve().parent
CHROME = str(next(pathlib.Path.home().glob("Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-mac-arm64/chrome-headless-shell")))
data = json.load(open(HERE / "sheets.json"))
CSS = """
*{box-sizing:border-box;margin:0}body{background:#E9E9E6;font:15px/1.5 Pretendard,system-ui,sans-serif;color:#141416;padding:56px;width:2400px;word-break:keep-all}
h1{font-size:44px;letter-spacing:-.02em;font-weight:700}.rec{display:inline-block;font-size:15px;font-weight:600;background:#141416;color:#fff;border-radius:6px;padding:4px 10px;vertical-align:middle;margin-left:14px}
.thesis{font-size:20px;color:#3A3A40;margin:10px 0 6px;max-width:1500px}.refs{color:#5A5A60;font-size:14px}
.grid{display:grid;grid-template-columns:1fr 390px;gap:28px;margin-top:32px;align-items:start}
figure img{width:100%;display:block;border-radius:10px;box-shadow:0 1px 0 rgba(0,0,0,.06),0 8px 30px rgba(0,0,0,.10)}
figcaption{font-size:13px;color:#5A5A60;margin-top:8px}
.info{display:grid;grid-template-columns:1.25fr 1fr 1.1fr;gap:28px;margin-top:36px}
.card{background:#fff;border-radius:12px;padding:24px 26px}.card h2{font-size:16px;margin-bottom:14px}
.sw{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}.sw div{width:96px}.sw i{display:block;height:44px;border-radius:8px;border:1px solid rgba(0,0,0,.1)}.sw span{font:12px/1.3 ui-monospace,Menlo,monospace;color:#3A3A40;display:block;margin-top:5px}
table{border-collapse:collapse;width:100%;font-size:13px}td{padding:5px 0;border-top:1px solid #EEE}td.n{font:13px ui-monospace,Menlo,monospace;text-align:right}
.ok{color:#11733F;font-weight:600}.rt{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px}.rt img{width:100%;border-radius:6px;border:1px solid #DDD}
p+p{margin-top:10px}.k{font-weight:600}
"""
def esc(s): return html.escape(s)
for d in data:
    rows = "".join(f"<tr><td>{esc(r[0])}</td><td class=n>{esc(r[1])}</td><td class='n ok'>{esc(r[2])}</td></tr>" for r in d["contrast"])
    sw = lambda pal: "".join(f"<div><i style='background:{c}'></i><span>{esc(n)}<br>{c}</span></div>" for n, c in pal)
    shots = d["shots"]
    page = f"""<!doctype html><html lang=ko><head><meta charset=utf-8>
<link rel=stylesheet href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"><style>{CSS}</style></head><body>
<h1>{esc(d['title'])}{"<span class=rec>추천</span>" if d.get('rec') else ""}{"<span class=rec style='background:#7A5C00'>더 과감한 안</span>" if d.get('bold') else ""}</h1>
<p class=thesis>{esc(d['thesis'])}</p><p class=refs>{esc(d['refs'])}</p>
<div class=grid><figure><img src="{shots[0]}"><figcaption>1440 · 다크 · 한국어 · 첫 화면</figcaption></figure>
<figure><img src="{shots[1]}"><figcaption>390 · 다크 · 한국어 · 폰 첫 화면 (다음 행동)</figcaption></figure>
<figure><img src="{shots[2]}"><figcaption>1440 · 라이트 · English · 첫 화면</figcaption></figure>
<figure><img src="{shots[3]}"><figcaption>390 · 라이트 · English</figcaption></figure></div>
<div class=info>
<div class=card><h2>색 · 다크 / 라이트</h2><div class=sw>{sw(d['dark'])}</div><div class=sw>{sw(d['light'])}</div>
<table>{rows}</table><p style="margin-top:10px;font-size:13px;color:#5A5A60">WCAG 대비, 직접 계산(contrast.py). 본문 AA 4.5:1 이상.</p></div>
<div class=card><h2>글꼴 짝</h2>{''.join(f'<p>{x}</p>' for x in d['type'])}
<h2 style="margin-top:20px">Realtime Colors에 입혀 본 모습</h2><div class=rt><img src="{d['rt'][0]}"><img src="{d['rt'][1]}"></div></div>
<div class=card><h2>제품 화면 질문 (가·나·다)</h2><p>{esc(d['product'])}</p>
<h2 style="margin-top:20px">폰 방문자의 다음 행동</h2><p>{esc(d['phone'])}</p>
<h2 style="margin-top:20px">강점 · 위험</h2>{''.join(f'<p>{esc(x)}</p>' for x in d['notes'])}</div>
</div></body></html>"""
    src = HERE / f"sheet-{d['key']}.html"; src.write_text(page)
    out = HERE / f"sheet-{d['key']}.png"
    subprocess.run([CHROME, "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=2512,6000",
                    "--virtual-time-budget=8000", f"--screenshot={out}", f"file://{src}"], capture_output=True)
    im = Image.open(out).convert("RGB"); w, h = im.size; px = im.load(); bg = px[2, h-2]; y = h-1
    while y > 0 and all(px[x, y] == bg for x in range(0, w, 4)): y -= 1
    im.crop((0, 0, w, y + 56)).save(out); print(out)
