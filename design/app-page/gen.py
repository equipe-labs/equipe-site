# T-507 refined: the chosen option A — one page, /app/, for getting the phone app.
# Writes one HTML file per screen × state × language into html/; `equipe design lint --render` draws them.
#   python3 gen.py
# Values come from the site tokens (src/styles/global.css · design/tokens.md); nothing here is new.
import pathlib

HERE = pathlib.Path(__file__).parent.resolve()
OUT = HERE / 'html'
OUT.mkdir(exist_ok=True)
FONTS = (HERE / '../../src/assets/fonts').resolve()
BADGE = HERE / 'appstore-black-en.svg'

def qr(name, px):
    svg = (HERE / f'{name}.svg').read_text()
    return svg.replace('<svg ', f'<svg role="img" aria-label="QR" style="width:{px}px;height:{px}px;display:block" ', 1)

CSS = f"""
@font-face {{ font-family: 'Pretendard Variable'; font-weight: 400 700; src: url('file://{FONTS}/pretendard-ko-rest.woff2') format('woff2'); unicode-range: U+AC00-D7A3; }}
@font-face {{ font-family: 'Pretendard Variable'; font-weight: 400 700; src: url('file://{FONTS}/pretendard-ko-core.woff2') format('woff2'); }}
:root {{
  --bg: #F6F5F1; --surface: #FFFFFF; --code-bg: #EAE7E0; --text: #15161A; --muted: #4F5159;
  --accent: #1D4ED8; --on-accent: #FFFFFF; --line: #0A0A0C24; --dot: #3F6FF5; --ok: #1F6B33;
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 72px;
  --r-1: 8px; --r-2: 12px; --r-3: 24px; --tap: 44px; --wrap: 1040px; --gutter: 16px;
  --sans: 'Inter Variable', Inter, system-ui, sans-serif; --mono: 'JetBrains Mono', ui-monospace, monospace;
}}
@media (prefers-color-scheme: dark) {{ :root {{
  --bg: #0A0A0C; --surface: #16171A; --code-bg: #17171C; --text: #EFEDE7; --muted: #A3A5AB;
  --accent: #8FB0FF; --on-accent: #0B1226; --line: #E9E6DF24; --ok: #7FCB8E; }} }}
@media (min-width: 641px) {{ :root {{ --gutter: 24px; }} }}
* {{ box-sizing: border-box; }}
body {{ margin: 0; background: var(--bg); color: var(--text); font: 400 17px/1.6 var(--sans); }}
@media (min-width: 641px) {{ body {{ font-size: 18px; }} }}
:lang(ko) {{ font-family: var(--sans), 'Pretendard Variable', 'Apple SD Gothic Neo', sans-serif; }}
html:lang(ko) {{ word-break: keep-all; overflow-wrap: anywhere; }}
:lang(ko) :is(h1,h2,h3) {{ letter-spacing: 0; line-height: 1.3; }}
a {{ color: var(--accent); text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }}
:focus-visible {{ outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }}
h1, h2, h3 {{ font-weight: 700; letter-spacing: -0.02em; margin: 0; text-wrap: balance; }}
h1 {{ font-size: 36px; line-height: 1.05; }} h2 {{ font-size: 26px; line-height: 1.15; }} h3 {{ font-size: 18px; line-height: 1.3; }}
@media (min-width: 641px) {{ h1 {{ font-size: 56px; }} h2 {{ font-size: 32px; }} }}
p {{ margin: 0 0 var(--s-4); }}
code {{ white-space: nowrap; font-family: var(--mono); font-size: .88em; background: var(--code-bg); padding: 1px 3px; border-radius: 4px; }}
.wrap {{ max-width: var(--wrap); margin: 0 auto; padding: 0 var(--gutter); }}
.muted {{ color: var(--muted); }}
.meta {{ font-size: 14px; color: var(--muted); margin: var(--s-1) 0 0; }}
.skip {{ position: absolute; left: -999px; }}
header.site {{ border-bottom: 1px solid var(--line); background: var(--bg); }}
header.site .wrap {{ display: flex; align-items: center; justify-content: space-between; min-height: 64px; gap: var(--s-3); }}
.brand {{ display: inline-flex; align-items: center; gap: var(--s-2); font-weight: 700; color: var(--text); text-decoration: none; font-size: 18px; }}
.mark {{ width: 28px; height: 28px; border-radius: 7px; background: #0A0A0C; color: #F6F5F1; display: inline-grid; place-items: center; font: 700 18px/1 var(--sans); position: relative; }}
@media (prefers-color-scheme: dark) {{ .mark {{ background: #EFEDE7; color: #0A0A0C; }} }}
.mark i {{ position: absolute; width: 4px; height: 4px; border-radius: 50%; background: var(--dot); right: 6px; bottom: 7px; }}
nav ul {{ display: flex; gap: var(--s-5); list-style: none; margin: 0; padding: 0; align-items: center; }}
nav a {{ color: var(--text); font-size: 16px; text-decoration: none; }}
nav .opt {{ display: none; }} @media (min-width: 641px) {{ nav .opt {{ display: list-item; }} }}
nav a[aria-current] {{ font-weight: 600; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 6px; }}
.globe {{ width: 44px; height: 44px; display: inline-grid; place-items: center; color: var(--text); border-radius: var(--r-1); }}
.ic {{ width: 20px; height: 20px; flex: none; }}
.btn {{ display: inline-flex; align-items: center; justify-content: center; gap: var(--s-2); min-height: var(--tap); padding: 0 20px; border-radius: var(--r-1); font-weight: 600; text-decoration: none; border: 2px solid var(--accent); color: var(--accent); font-size: 17px; background: none; font-family: inherit; }}
.btn.primary {{ background: var(--accent); color: var(--on-accent); }}
.btn.lg {{ min-height: 52px; font-size: 18px; padding: 0 24px; }}
.btn.block {{ width: 100%; }}
.btn.done {{ border-color: var(--line); color: var(--text); }}
.btn.done .ic {{ color: var(--ok); }}
.badge {{ display: inline-block; line-height: 0; border-radius: var(--r-1); }}
.badge img {{ height: 44px; width: auto; display: block; }}
.badge.big img {{ height: 52px; width: auto; }}
section {{ padding: var(--s-7) 0; }}
@media (min-width: 641px) {{ section {{ padding: var(--s-8) 0; }} }}
section.hero {{ padding-bottom: var(--s-7); }}
hr {{ border: 0; border-top: 1px solid var(--line); margin: 0; }}
.lead {{ font-size: 19px; color: var(--muted); max-width: 560px; margin: var(--s-4) 0 0; }}
@media (min-width: 641px) {{ .lead {{ font-size: 21px; }} }}

/* Mac / other devices: the platform list and the phone beside it */
.top {{ display: grid; gap: var(--s-7); }}
@media (min-width: 900px) {{ .top {{ grid-template-columns: minmax(0, 1fr) 360px; gap: var(--s-8); align-items: start; }} }}
.plat {{ list-style: none; margin: var(--s-6) 0 0; padding: 0; border-top: 1px solid var(--line); }}
.plat > li {{ display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: var(--s-3) var(--s-5); align-items: center; padding: var(--s-4) 0; border-bottom: 1px solid var(--line); }}

.plat .pn {{ font-size: 18px; line-height: 1.3; letter-spacing: 0; }}
.plat .act {{ display: grid; gap: var(--s-1); justify-items: end; }}
.plat .act .btn {{ width: auto; min-width: 120px; min-height: 44px; }}
@media (max-width: 640px) {{ .plat > li {{ grid-template-columns: 1fr; }} .plat .act {{ justify-items: start; }} .plat .act .btn {{ width: auto; }} }}
.plat .help {{ font-size: 15px; display: inline-flex; align-items: center; min-height: var(--tap); }}
.qrline {{ display: grid; grid-template-columns: auto minmax(0, 1fr); gap: var(--s-4); align-items: center; margin-top: var(--s-5); }}
.qrbox {{ background: #fff; padding: 6px; border-radius: var(--r-1); line-height: 0; box-shadow: 0 0 0 1px var(--line); }}
.qrline b {{ display: block; font-size: 16px; font-weight: 600; }}
.qrline p {{ margin: 0; font-size: 15px; color: var(--muted); }}
.url {{ font: 400 14px var(--mono); color: var(--muted); }}


/* The phone: the home page's iOS approval sheet, reused as it is (src/styles/landing.css) */
:root {{ --dash: #80828A; }} @media (prefers-color-scheme: dark) {{ :root {{ --dash: #6B6D75; }} }}
/* The iOS approval sheet, drawn in code: one thin bezel, iPhone 19.5:9, system font (no mono). */
.phone {{ --lbl: #000; --sec: rgb(60 60 67 / 0.78); --fill: rgb(118 118 128 / 0.12); --sep: rgb(60 60 67 / 0.29); --tint: #0062CC; --tintbg: #0062CC; --red: #C4001A; --sec2: rgb(60 60 67 / 0.78);
  width: 280px; max-width: 100%; aspect-ratio: 9 / 15.5; border: 3px solid var(--dash); border-radius: 40px; background: var(--dash); overflow: hidden; font-size: 12.6px; }}
.phone .scr {{ position: relative; display: flex; flex-direction: column; height: 100%; border-radius: 37px; overflow: hidden; background: #fff; color: var(--lbl);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif; line-height: 1.3; letter-spacing: 0; text-align: left; }}
.phone p {{ margin: 0; }}
.phone .isl {{ position: absolute; top: 7px; left: 50%; width: 31%; height: 17px; margin-left: -15.5%; border-radius: 99px; background: #000; }}
.phone .sb {{ height: 30px; padding: 9px 22px 0; font-weight: 600; font-size: 0.92em; }}
.phone .nav {{ position: relative; display: flex; justify-content: center; align-items: center; height: 30px; font-size: 1em; }}
.phone .nav b {{ font-weight: 600; }}
.phone .nav .cl {{ position: absolute; left: 14px; color: var(--tint); }}
.phone .body {{ flex: 1; padding: 14px 14px 0; display: flex; flex-direction: column; gap: 10px; justify-content: flex-start; }}
.phone .who {{ font-size: 1.18em; font-weight: 600; line-height: 1.25; }}
.phone .sec {{ color: var(--sec); font-size: 0.86em; }}
.phone .who + .sec {{ margin-top: -6px; }}
.phone .wh {{ font-size: 1em; }}
.phone .tool {{ margin-bottom: -6px; color: var(--sec2); font-size: 0.82em; font-weight: 600; letter-spacing: 0.1em; }}
.phone .act {{ padding: 9px 10px; border-radius: 9px; background: var(--fill); font-size: 0.95em; }}
.phone .fn {{ font-size: 0.9em; color: var(--sec2); }}
.phone .bar {{ display: flex; gap: 10px; padding: 10px 14px 6px; border-top: 0.5px solid var(--sep); }}
.phone .bar span {{ flex: 1; display: flex; align-items: center; justify-content: center; min-height: 32px; padding: 0 4px; border-radius: 99px; font-size: 0.98em; font-weight: 600; text-align: center; line-height: 1.15; }}
.phone .deny {{ background: rgb(255 59 48 / 0.15); color: var(--red); }}
.phone .allow {{ background: var(--tintbg); color: #fff; }}
.phone .hi {{ height: 5px; width: 36%; margin: 6px auto 8px; border-radius: 99px; background: var(--lbl); }}
@media (prefers-color-scheme: dark) {{
  .phone {{ --lbl: #fff; --sec: rgb(235 235 245 / 0.6); --fill: rgb(118 118 128 / 0.24); --sep: rgb(84 84 88 / 0.65); --tint: #0A84FF; --tintbg: #0A64C8; --red: #FF7A70; --sec2: rgb(235 235 245 / 0.72); }}
  .phone .scr {{ background: #1C1C1E; }}
  .phone .deny {{ background: rgb(255 69 58 / 0.2); }}
}}
.scenecap {{ font-size: 14px; color: var(--muted); margin: var(--s-3) 0 0; max-width: 280px; }}
.phonecol {{ display: grid; justify-items: center; align-content: start; }}
.phonecol .phone {{ width: 320px; font-size: 14.4px; }}
.phonecol .scenecap {{ text-align: center; }}
.phone {{ --tint: var(--accent); --tintbg: var(--accent); }} .phone .allow {{ color: var(--on-accent); }}
.caveat {{ color: var(--text); margin-top: var(--s-2); display: block; }}
.caveat .soon {{ display: inline-block; margin-right: var(--s-2); }}
.soon {{ border: 1.5px dashed var(--dash); color: var(--muted); border-radius: 6px; padding: 0 6px; font-size: 13px; font-weight: 600; }}
@media (max-width: 899px) {{ .phonecol {{ display: none; }} }}

/* Phones: the device's own app first */
.need {{ font-size: 15px; color: var(--muted); margin: var(--s-5) 0 var(--s-3); }}
.get {{ display: grid; gap: var(--s-2); justify-items: start; margin-top: var(--s-6); }}
.get .btn {{ width: 100%; }}
@media (min-width: 641px) {{ .get .btn {{ width: auto; }} }}
.sendmac {{ margin-top: var(--s-5); padding: var(--s-4); border-radius: var(--r-2); background: var(--surface); box-shadow: 0 0 0 1px var(--line); }}
.sendmac p {{ font-size: 15px; margin: 0 0 var(--s-3); }}
.sendmac .btn {{ width: 100%; min-height: var(--tap); font-size: 16px; }}
.sendmac .live {{ font-size: 14px; color: var(--muted); margin: var(--s-2) 0 0; }}
.other {{ margin: var(--s-4) 0 0; font-size: 16px; }}
.other a {{ display: inline-flex; align-items: center; min-height: var(--tap); }}
.narrow {{ max-width: 640px; }}
.nm {{ white-space: nowrap; }}
/* /app/ shows the sheet at its content's height, not a whole phone: less to scroll past on a phone */
.phone.fit {{ aspect-ratio: auto; height: auto; }} .phone.fit .body {{ padding-bottom: 14px; }}
.phoneinline .phone {{ width: 300px; font-size: 14px; }}
.phone.android .isl, .phone.android .sb {{ visibility: hidden; }} .phone.android .sb {{ height: 16px; }}
.macfirst {{ display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-3) var(--s-5); margin-top: var(--s-6); }}
.macfirst .meta {{ margin: 0; }}
.listh {{ font-size: 18px; margin-top: var(--s-7); letter-spacing: 0; }}
.listh + .plat {{ margin-top: var(--s-3); }}
.folds {{ display: grid; gap: var(--s-2); margin-top: var(--s-5); }}
.sendmac2 {{ margin-top: var(--s-6); padding-top: var(--s-5); border-top: 1px solid var(--line); font-size: 15px; }}
.sendmac2 p {{ margin: 0 0 var(--s-2); color: var(--muted); }}
.sendmac2 .btn {{ min-height: var(--tap); font-size: 16px; padding: 0 16px; border-width: 1.5px; }}
.sendmac2 .live {{ font-size: 14px; color: var(--muted); margin: var(--s-2) 0 0; }}
.stepill {{ margin-top: var(--s-3); padding: var(--s-3); width: fit-content; max-width: 100%; }}
.pairgrid {{ display: grid; gap: var(--s-6); margin-top: var(--s-6); max-width: 640px; }}
.pairgrid .steps {{ max-width: 640px; }}
.stepill.side {{ display: none; }}
@media (min-width: 900px) {{ .pairgrid {{ max-width: none; grid-template-columns: minmax(0, 1fr) 360px; gap: var(--s-8); align-items: start; }} .stepill.in {{ display: none; }} .stepill.side {{ display: grid; justify-items: start; align-self: start; width: auto; margin-top: 0; padding: var(--s-4); }} .stepill.side .menu {{ width: 280px; font-size: 15px; }} }}
.stepill .menu {{ width: 220px; font-size: 14px; }} .stepill .menu li {{ padding: 4px 10px; }}

.phoneinline {{ margin-top: var(--s-6); display: grid; justify-items: start; }}
@media (min-width: 900px) {{ .phoneinline {{ display: none; }} }}


/* Steps */
ol.steps {{ list-style: none; margin: 0; padding: 0; display: grid; gap: var(--s-5); counter-reset: s; }}
ol.steps > li {{ display: grid; grid-template-columns: 28px minmax(0, 1fr); gap: var(--s-3); counter-increment: s; }}
ol.steps > li::before {{ content: counter(s); width: 28px; height: 28px; border-radius: 50%; box-shadow: inset 0 0 0 1.5px var(--text); color: var(--text); font: 600 15px/28px var(--sans); text-align: center; }}
ol.steps b {{ display: block; font-weight: 600; }}
ol.steps p {{ margin: 2px 0 0; color: var(--muted); font-size: 16px; }}
.two {{ display: grid; gap: var(--s-6); margin-top: var(--s-6); }}
@media (min-width: 900px) {{ .two {{ grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--s-7); align-items: start; }} }}

/* Mac menu, drawn as a diagram (no QR in the drawing, so nobody scans an example) */
.ill {{ background: var(--code-bg); border-radius: var(--r-2); padding: var(--s-5); }}
.ill .cap {{ font-size: 14px; color: var(--muted); margin: var(--s-3) 0 0; }}
.menu {{ background: var(--surface); border-radius: var(--r-1); box-shadow: 0 0 0 1px var(--line), 0 8px 24px #0000001a; font-size: 15px; max-width: 280px; overflow: hidden; }}
.menu .mb {{ display: flex; gap: 16px; padding: 6px 12px; border-bottom: 1px solid var(--line); font-size: 13px; color: var(--muted); }}
.menu .mb b {{ color: var(--text); }}
.menu ul {{ list-style: none; margin: 0; padding: 6px; }}
.menu li {{ padding: 6px 10px; border-radius: 6px; color: var(--muted); }}
.menu li.on {{ background: var(--accent); color: var(--on-accent); font-weight: 600; }}
.menu .bar1 {{ display: inline-block; width: 28px; height: 8px; border-radius: 4px; background: var(--line); align-self: center; }}
.menu .bar2 {{ display: block; width: 70%; height: 8px; border-radius: 4px; background: var(--line); margin: 6px 0; }} .menu .bar2.s {{ width: 45%; }}
.menu li.sep {{ height: 1px; padding: 0; margin: 4px 6px; background: var(--line); }}
.arrow {{ display: flex; align-items: center; gap: 12px; margin-top: var(--s-4); font-size: 15px; }}
.arrow .scan {{ width: 44px; height: 44px; border-radius: 12px; background: var(--surface); box-shadow: 0 0 0 1px var(--line); display: grid; place-items: center; flex: none; color: var(--text); }}

/* Android: install steps, Android's own screen */
.droid {{ background: #FFFFFF; color: #1B1B1F; border-radius: 16px; padding: 14px 14px 4px; font-family: Roboto, system-ui, sans-serif; max-width: 280px; box-shadow: 0 0 0 1px #0000001a; }}
@media (prefers-color-scheme: dark) {{ .droid {{ background: #1E1F23; color: #E3E2E6; box-shadow: 0 0 0 1px #ffffff1a; }} }}
.droid .h {{ margin: 0 0 8px; font: 500 16px/1.3 Roboto, system-ui, sans-serif; }}
.droid .app {{ display: flex; align-items: center; gap: 10px; font-size: 14px; margin-bottom: 4px; }}
.droid .app i {{ width: 22px; height: 22px; border-radius: 50%; background: #9AA0A6; }}
.droid .row {{ display: flex; justify-content: space-between; align-items: center; padding: 8px 6px; font-size: 14px; border-radius: 10px; outline: 2px solid var(--accent); outline-offset: 2px; margin: 6px 0 10px; }}
.sw {{ width: 40px; height: 24px; border-radius: 12px; background: #3F5AA9; position: relative; flex: none; }}
.sw::after {{ content: ''; position: absolute; right: 3px; top: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; }}

/* The quiet extras: updates, notifications, checking the file */
.extras {{ display: grid; gap: var(--s-3); }}
details {{ background: var(--surface); border-radius: var(--r-1); box-shadow: 0 0 0 1px var(--line); }}
summary {{ list-style: none; cursor: pointer; font-weight: 600; font-size: 16px; padding: 10px 16px; min-height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }}
summary::-webkit-details-marker {{ display: none; }}
summary::after {{ content: ''; width: 8px; height: 8px; border-right: 2px solid var(--muted); border-bottom: 2px solid var(--muted); transform: rotate(45deg); flex: none; margin-right: 4px; }}
details[open] summary::after {{ transform: rotate(-135deg); }}
.dbody {{ padding: 0 16px 16px; font-size: 15px; }}
.dbody ol.steps {{ gap: var(--s-4); margin-bottom: var(--s-4); }}
.file {{ font-size: 14px; margin: 0 0 var(--s-3); }}
.kv {{ margin: 0 0 var(--s-3); }}
.kv dt {{ font-size: 14px; color: var(--muted); margin-bottom: var(--s-1); }}
.kv dd {{ margin: 0; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: var(--s-2); align-items: start; }}
.hash {{ box-shadow: inset 0 0 0 1px var(--line); font: 400 13px/1.55 var(--mono); background: var(--code-bg); border-radius: var(--r-1); padding: 10px 12px; word-break: break-all; min-width: 0; }}
.copy {{ min-height: var(--tap); width: 8.5em; white-space: nowrap; justify-content: center; padding: 0 8px; border-radius: var(--r-1); border: 1px solid var(--line); background: var(--surface); color: var(--text); font: 600 14px var(--sans); display: inline-flex; align-items: center; gap: 6px; }}
.copy.done .ic {{ color: var(--ok); }}
pre.cmd {{ box-shadow: inset 0 0 0 1px var(--line); font: 400 13px/1.55 var(--mono); background: var(--code-bg); border-radius: var(--r-1); padding: 12px; margin: 0; white-space: pre-wrap; word-break: normal; overflow-wrap: normal; min-width: 0; }}
.cmdh {{ font-size: 15px; margin: var(--s-5) 0 var(--s-3); padding-top: var(--s-4); border-top: 1px solid var(--line); }}
.note {{ font-size: 15px; color: var(--muted); margin: 0; }}
footer {{ border-top: 1px solid var(--line); padding: var(--s-6) 0; color: var(--muted); font-size: 14px; }}
footer .wrap {{ display: flex; flex-wrap: wrap; gap: 8px 24px; justify-content: space-between; }}
footer a {{ color: var(--muted); }}
.links {{ display: flex; flex-wrap: wrap; gap: 4px 16px; }}
@media (prefers-reduced-motion: no-preference) {{ details[open] .dbody {{ animation: open 160ms ease-out; }} @keyframes open {{ from {{ opacity: 0; }} }} }}
"""

GLOBE = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>'
DOWN = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>'
CHECK = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
COPY = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>'
SCAN = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16"/></svg>'

M = lambda *items: ' '.join(f'<span class="nm">{i}{" ·" if k < len(items) - 1 else ""}</span>' for k, i in enumerate(items))
FILE_SHA = 'bd8f267edeb10ce0aaed1efbb80f7b3c349895f6121e5f8a97d647d09f8d9773'
CERT_SHA = 'f6884e264a84a48b04cf7b04256e40e3887543795b430e367aee2ff769041a87'
APK = 'equipe-android-0.2.0.apk'

T = {
 'ko': dict(
  title='폰 앱 받기 — equipe', skip='본문으로 건너뛰기', primaryNav='주 메뉴', lang='언어',
  navGet='앱 받기', navPrivacy='앱 개인정보처리방침', navSupport='앱 지원', home='equipe 홈',
  h1='폰에서 승인해요.', leadDroid='스쿼드는 내 Mac에서 일해요. <span class="nm">공개·배포처럼</span> 내 확인이 필요한 일은 폰 앱에 모여요. 앱을 열어 바로 답해요.', lead='스쿼드는 내 Mac에서 일해요. <span class="nm">공개·배포처럼</span> 내 확인이 필요한 일은 폰에 와요. 걸으면서도 바로 답해요.',
  mac='Mac', macMeta='스쿼드가 일하는 곳이에요. 먼저 받아요.', phonesH='폰 앱', droidInst='Android 설치 방법', macBtn='Mac용 다운로드', macReq='macOS 12 이상 · 무료 오픈소스',
  ios='iPhone', iosMeta='iOS 17 이상 · 무료 · Mac 앱과 함께 써요', asAlt='App Store에서 다운로드하기',
  droid='Android', droidMeta=M('Android 8.0 이상', '무료', 'APK 25 MB', 'Mac 앱과 함께 써요') + '<br>' + M('Google Play엔 아직 없어요', '알림은 준비 중이에요'), apkBtn='APK 받기', droidHelp='설치 방법과 파일 확인',
  qrT='폰에서 이 페이지 열기', qrS='폰에서 열면 그 폰에 맞는 받기 버튼이 먼저 나와요.',
  sceneCap='가격 페이지를 공개하기 전, 폰에 이렇게 물어요.',
  code='ko', sceneAlt='폰에 온 확인 요청: 프론트엔드가 가격 페이지를 모두에게 공개해도 되는지 묻고, 거부와 이번만 허용 버튼이 있어요.',
  demo=dict(name='프론트엔드', verb='확인을 요청해요', age='방금 요청됨', where='Loop · T-5 가격 페이지 공개 · 묻기', tool='확인', action='가격 페이지를 loop.app/pricing에 모두에게 공개', once='휴대폰에서는 이번 한 번만 허용돼요.', deny='거부', allow='이번만 허용', close='닫기'),
  needIos='폰 앱은 Mac에서 일하는 스쿼드와 짝지어 써요.', needDroid='폰 앱은 Mac에서 일하는 스쿼드와 짝지어 써요.',
  apkMain='Android 앱 받기', apkMeta='APK 25 MB · Android 8.0 이상 · 무료 · Mac 앱과 함께 써요. <span class="nm">Google Play에는 아직 없어요.</span>', pushNow='Android 알림. 그전엔 앱을 열어 요청을 확인해요.', soon='준비 중',
  sendT='폰 앱은 Mac의 스쿼드와 짝지어 써요. Mac 앱이 아직 없다면 이 페이지를 Mac으로 보내요.', sendBtn='Mac으로 링크 보내기', sendDone='링크를 복사했어요', sendLive='이 브라우저는 공유 창이 없어서 복사했어요. 메시지나 메일에 붙여 넣어 나에게 보내요.',
  otherDroid='Android 폰이에요? APK 받기 →', otherIos='iPhone이에요? App Store에서 받기 →',
  instH='설치는 세 단계예요',
  i1='받은 파일을 열어요', i1s='알림이나 Chrome 다운로드에서 눌러요.',
  i2='‘이 출처 허용’을 한 번 켜요', i2s='Play 밖에서 받은 앱이라 한 번만 물어봐요.',
  i3='설치를 눌러요', i3s='끝나면 열기를 눌러요.',
  dTitle='출처를 알 수 없는 앱 설치', dAllow='이 출처 허용', dCap='Android 화면 예시예요. 폰마다 조금 달라요.',
  pairH='받은 다음, Mac과 연결해요',
  p1='Mac에서 연결 창을 열어요', p1s='메뉴 equipe › <span class="nm">‘휴대폰 연결…’</span>을 누르면 <span class="nm">QR 코드가</span> 떠요. <br><span class="nm">터미널에선 <code>equipe pair</code></span> 명령으로도 열 수 있어요.',
  p2='폰 앱에서 그 코드를 스캔해요', p2s='앱을 처음 열면 나오는 <span class="nm">‘코드 스캔’</span>을 누르고 Mac 화면의 코드를 비춰요.',
  p3='Mac에서 ‘허용’을 누르면 끝이에요', p3s='폰과 Mac은 종단 간 암호화로 이야기해요.',
  menuApp='equipe', menuFile='파일', menuView='보기', menuNew='새 스쿼드…', menuPair='휴대폰 연결…', menuSettings='설정…',
  scanLine='폰 앱의 ‘코드 스캔’으로 Mac 화면의 코드를 비춰요.', menuCap='Mac 앱 메뉴를 그린 그림이에요.',
  extrasH='알아 두면 좋은 것', update='새 버전이 나오면 이 페이지에서 다시 받아요. 같은 인증서로 서명돼 있어 그대로 업데이트돼요.',
  push='Android 알림은 준비 중이에요. 그전엔 앱을 열어 확인해요.', vCertHow='인증서 값 (Android SDK build-tools의 apksigner, Signer #1 certificate SHA-256 줄)',
  verify='받은 파일이 진짜인지 확인하기', vFile='파일 SHA-256', vCert='서명 인증서 SHA-256', copy='복사', copied='복사했어요',
  vHow='파일 값 (Mac 터미널)', vCmdH='터미널로 확인하기', vCmdIntro='Mac에서 같은 파일을 받아 터미널에서 실행해요.', vLink='GitHub 릴리스에서 보기', vNote='두 값 중 하나라도 다르면 설치하지 말고 이 페이지에서 다시 받아요.',
  droidInstH='Android에 설치하기',
  release='2026-11-08 공개', foot='© 2026 equipe · MIT',
 ),
 'en': dict(
  title='Get the phone app — equipe', skip='Skip to content', primaryNav='Primary', lang='Language',
  navGet='Get the app', navPrivacy='App privacy policy', navSupport='App support', home='equipe home',
  h1='Approve from your phone.', leadDroid='Your squad works on your Mac. When something needs your yes — a deploy, a launch — it waits in the phone app. Open it and answer.', lead='Your squad works on your Mac. When something needs your yes — a deploy, a launch — your phone asks, and you answer on the move.',
  mac='Mac', macMeta='Where the squad works. Get this first.', phonesH='Phone app', droidInst='How to install on Android', macBtn='Download for Mac', macReq='macOS 12 or later · Free and open source',
  ios='iPhone', iosMeta='iOS 17 or later · Free · Works with the Mac app', asAlt='Download on the App Store',
  droid='Android', droidMeta=M('Android 8.0 or later', 'Free', '25 MB APK', 'Works with the Mac app') + '<br>' + M('Not on Google Play yet', 'No notifications yet'), apkBtn='Download APK', droidHelp='How to install, and checking the file',
  qrT='Open this page on your phone', qrS='On your phone, this page puts that phone’s download first.',
  sceneCap='Before the pricing page goes live, this is what your phone shows.',
  code='en', sceneAlt='A request on the phone: frontend asks to publish the pricing page for everyone, with Deny and Allow once.',
  demo=dict(name='frontend', verb='asks you to confirm something', age='Asked just now', where='Loop · T-5 Publish the pricing page · Ask', tool='CONFIRM', action='Publish the pricing page at loop.app/pricing, for everyone', once='From your phone, a request is allowed once only.', deny='Deny', allow='Allow once', close='Close'),
  needIos='The phone app pairs with the squad on your Mac.', needDroid='The phone app pairs with the squad on your Mac.',
  apkMain='Download for Android', apkMeta='25 MB APK · Android 8.0 or later · Free · Works with the Mac app. <span class="nm">Not on Google Play yet.</span>', pushNow='Android notifications. Until then, open the app to see requests.', soon='Coming',
  sendT='The phone app pairs with the squad on your Mac. No Mac app yet? Send this page to your Mac.', sendBtn='Send the link to my Mac', sendDone='Link copied', sendLive='This browser can’t share, so it’s copied. Paste it into a message or mail to yourself.',
  otherDroid='On Android? Get the APK →', otherIos='On iPhone? Get it on the App Store →',
  instH='Installing takes three steps',
  i1='Open the file', i1s='From the notification or Chrome’s downloads.',
  i2='Turn on “Allow from this source” once', i2s='Android asks once for apps from outside Play.',
  i3='Tap Install', i3s='Then tap Open.',
  dTitle='Install unknown apps', dAllow='Allow from this source', dCap='An Android screen as an example. It varies a little by phone.',
  pairH='Then connect it to your Mac',
  p1='Open the pairing window on your Mac', p1s='Choose equipe › <span class="nm">“Connect a phone…”</span> and a QR code shows. <br><span class="nm">In a terminal, <code>equipe pair</code></span> does the same.',
  p2='Scan that code in the phone app', p2s='Tap <span class="nm">“Scan code”</span>, the first button the app shows, and point it at your Mac.',
  p3='Click Allow on your Mac', p3s='Your phone and Mac talk end-to-end encrypted.',
  menuApp='equipe', menuFile='File', menuView='View', menuNew='New squad…', menuPair='Connect a phone…', menuSettings='Settings…',
  scanLine='“Scan code” in the phone app reads the code on your Mac.', menuCap='The Mac app’s menu, drawn.',
  extrasH='Good to know', update='Get new versions from this page. They’re signed with the same certificate, so they update in place.',
  push='Notifications on Android are coming. Until then, open the app to check.', vCertHow='The certificate (apksigner from Android SDK build-tools, the Signer #1 certificate SHA-256 line)',
  verify='Check the file is ours', vFile='File SHA-256', vCert='Signing certificate SHA-256', copy='Copy', copied='Copied',
  vHow='The file (Mac terminal)', vCmdH='Check in a terminal', vCmdIntro='Download the same file on your Mac, then run:', vLink='See the GitHub release', vNote='If either differs, don’t install it — download it again here.',
  droidInstH='Install on Android',
  release='Released 2026-11-08', foot='© 2026 equipe · MIT',
 ),
}

def page(lang, t, body):
    return f'<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{t["title"]}</title><style>{CSS}</style></head><body><a class="skip" href="#main">{t["skip"]}</a>{body}</body></html>'

def header(t):
    return f'''<header class="site"><div class="wrap"><a class="brand" href="#"><span class="mark" aria-hidden="true">e<i></i></span> equipe</a>
<nav aria-label="{t["primaryNav"]}"><ul><li class="opt"><a href="#" aria-current="page">{t["navGet"]}</a></li><li class="opt"><a href="#">{t["navPrivacy"]}</a></li><li class="opt"><a href="#">{t["navSupport"]}</a></li>
<li><a class="globe" href="#" aria-label="{t["lang"]}">{GLOBE}</a></li></ul></nav></div></header>'''

def footer(t):
    return f'<footer><div class="wrap"><span class="links"><a href="#">{t["home"]}</a><a href="#">{t["navPrivacy"]}</a><a href="#">{t["navSupport"]}</a><a href="#">GitHub</a></span><span>{t["foot"]}</span></div></footer>'

def badge(t, big=False, primary=False):
    return f'<a class="badge{" big" if big else ""}" href="#"{" data-primary" if primary else ""}><img src="file://{BADGE}" width="{132 if big else 120}" height="{52 if big else 44}" alt="{t["asAlt"]}"></a>'

def phone(t, fit=True, android=False):
    d = t['demo']
    return f'''<div class="phone{" fit" if fit else ""}{" android" if android else ""}" role="img" aria-label="{t["sceneAlt"]}" data-source="src/i18n/{t["code"]}.ts demo.phone"><div class="scr" aria-hidden="true">
<div class="isl"></div><div class="sb"><span>9:41</span></div><div class="nav"><span class="cl">{d["close"]}</span><b>{d["name"]}</b></div>
<div class="body"><p class="who">{d["name"]} {d["verb"]}</p><p class="sec">{d["age"]}</p><p class="wh">{d["where"]}</p><p class="tool">{d["tool"]}</p><p class="act">{d["action"]}</p><p class="sec fn">{d["once"]}</p></div>
<div class="bar"><span class="deny">{d["deny"]}</span><span class="allow">{d["allow"]}</span></div><div class="hi"></div></div></div>'''

def droid_screen(t):
    return f'''<div class="droid" role="img" aria-label="{t["dCap"]}"><div aria-hidden="true"><p class="h">{t["dTitle"]}</p><div class="app"><i></i>Chrome</div>
<div class="row"><span>{t["dAllow"]}</span><span class="sw"></span></div></div></div>'''

def install(t, ill=True):
    pic = f'<div class="ill" style="margin-top:12px;padding:16px">{droid_screen(t)}<p class="cap">{t["dCap"]}</p></div>' if ill else ''
    return f'''<ol class="steps"><li><div><b>{t["i1"]}</b><p>{t["i1s"]}</p></div></li>
<li><div><b>{t["i2"]}</b><p>{t["i2s"]}</p>{pic}</div></li>
<li><div><b>{t["i3"]}</b><p>{t["i3s"]}</p></div></li></ol>'''

def copy_btn(t, done=False):
    return (f'<button class="copy done" type="button">{CHECK}{t["copied"]}</button>' if done
            else f'<button class="copy" type="button">{COPY}{t["copy"]}</button>')

def verify(t, open_=False, copied=False):
    cmd = lambda c: f'''<dd><pre class="cmd">{c.replace("/", "/<wbr>")}</pre>{copy_btn(t)}</dd>'''
    return f'''<details{" open" if open_ else ""}><summary>{t["verify"]}</summary><div class="dbody">
<p class="file"><span class="url">{APK}</span> · 25 MB · {t["release"]}</p>
<dl><div class="kv"><dt>{t["vFile"]}</dt><dd><span class="hash" data-source="placeholder: read from the release APK at build (spec.md)">{FILE_SHA}</span>{copy_btn(t, copied)}</dd></div>
<div class="kv"><dt>{t["vCert"]}</dt><dd><span class="hash" data-source="placeholder: keytool on the release APK at build (spec.md)">{CERT_SHA}</span>{copy_btn(t)}</dd></div></dl>
<h4 class="cmdh">{t["vCmdH"]}</h4><p class="note" style="margin-bottom:12px">{t["vCmdIntro"]}</p>
<dl><div class="kv"><dt>{t["vHow"]}</dt>{cmd(f"shasum -a 256 ~/Downloads/{APK}")}</div>
<div class="kv"><dt>{t["vCertHow"]}</dt>{cmd(f"apksigner verify --print-certs ~/Downloads/{APK}")}</div></dl>
<p class="note">{t["vNote"]} <a href="#">{t["vLink"]}</a></p></div></details>'''

def pair(t):
    menu = lambda cls: f'''<div class="ill stepill {cls}"><div class="menu" role="img" aria-label="{t["menuCap"]} {t["menuApp"]} › {t["menuPair"]}"><div aria-hidden="true">
<div class="mb"><b>{t["menuApp"]}</b></div>
<ul><li class="on">{t["menuPair"]}</li></ul></div></div></div>'''
    return f'''<section id="pair"><div class="wrap"><h2>{t["pairH"]}</h2><div class="pairgrid"><ol class="steps">
<li><div><b>{t["p1"]}</b><p>{t["p1s"]}</p>{menu("in")}</div></li><li><div><b>{t["p2"]}</b><p>{t["p2s"]}</p></div></li><li><div><b>{t["p3"]}</b><p>{t["p3s"]}</p></div></li></ol>{menu("side")}</div></div></section>'''

def extras(t, verify_open=False, copied=False):
    return f'''<section style="padding-top:0"><div class="wrap top"><div><h3 style="margin-bottom:12px">{t["extrasH"]}</h3><div class="extras">
<p class="note">{t["update"]}</p>{verify(t, verify_open, copied)}</div></div></div></section>'''

# ---------- Mac and every other device (also what a phone sees without JavaScript) ----------
def mac(t, lang, droid_open=False):
    url = 'equipe.im/ko/app' if lang == 'ko' else 'equipe.im/app'
    inst = f'''<details{" open" if droid_open else ""} id="android"><summary>{t["droidInst"]}</summary><div class="dbody">{install(t)}<p class="note" style="margin-top:16px">{t["update"]} {t["push"]}</p></div></details>'''
    body = header(t) + f'''<main id="main"><section class="hero"><div class="wrap top">
<div><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div class="macfirst"><a class="btn primary lg" href="#" data-primary>{DOWN}{t["macBtn"]}</a><p class="meta">{t["macReq"]}<br>{t["macMeta"]}</p></div>
<div class="phoneinline">{phone(t)}<p class="scenecap">{t["sceneCap"]}</p></div>
<h2 class="listh">{t["phonesH"]}</h2>
<ul class="plat">
<li><div><h3 class="pn">{t["ios"]}</h3><p class="meta">{t["iosMeta"]}</p></div><div class="act">{badge(t)}</div></li>
<li><div><h3 class="pn">{t["droid"]}</h3><p class="meta">{t["droidMeta"]}</p></div><div class="act"><a class="btn" href="#">{DOWN}{t["apkBtn"]}</a></div></li>
</ul>
<div class="qrline"><span class="qrbox">{qr("qr-ko" if lang == "ko" else "qr-en", 76)}</span><div><b>{t["qrT"]}</b><p>{t["qrS"]}</p><span class="url">{url}</span></div></div>
<div class="folds">{inst}{verify(t, open_=droid_open)}</div>
</div>
<div class="phonecol">{phone(t)}<p class="scenecap">{t["sceneCap"]}</p></div>
</div></section><hr>{pair(t)}</main>''' + footer(t)
    return page(lang, t, body)

def send_mac(t, sent=False):
    b = (f'<button class="btn done" type="button">{CHECK}{t["sendDone"]}</button><p class="live" role="status">{t["sendLive"]}</p>' if sent
         else f'<button class="btn" type="button">{t["sendBtn"]}</button>')
    return f'<div class="sendmac2"><p>{t["sendT"]}</p>{b}</div>'

# ---------- iPhone ----------
def ios(t, lang, sent=False):  # phones get one column, at most 640 wide
    send = send_mac(t, sent)
    body = header(t) + f'''<main id="main"><section class="hero"><div class="wrap top"><div><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div class="get">{badge(t, big=True, primary=True)}<span class="meta">{t["iosMeta"]}</span></div>
<div class="phoneinline">{phone(t)}<p class="scenecap">{t["sceneCap"]}</p></div>
{send}
<p class="other"><a href="#">{t["otherDroid"]}</a></p>
</div><div class="phonecol">{phone(t)}<p class="scenecap">{t["sceneCap"]}</p></div></div></section><hr>{pair(t)}</main>''' + footer(t)
    return page(lang, t, body)

# ---------- Android ----------
def android(t, lang, verify_open=False, copied=False):
    body = header(t) + f'''<main id="main"><section class="hero"><div class="wrap top"><div><h1>{t["h1"]}</h1><p class="lead">{t["leadDroid"]}</p>
<div class="get"><a class="btn primary lg" href="#" data-primary>{DOWN}{t["apkMain"]}</a><span class="meta">{t["apkMeta"]}</span><span class="meta caveat"><span class="soon">{t["soon"]}</span> {t["pushNow"]}</span></div>
<div class="phoneinline">{phone(t, android=True)}<p class="scenecap">{t["sceneCap"]}</p></div>
<h2 style="font-size:22px;margin:40px 0 20px">{t["instH"]}</h2>{install(t)}
{send_mac(t)}
</div><div class="phonecol">{phone(t, android=True)}<p class="scenecap">{t["sceneCap"]}</p></div></div></section><hr>{pair(t)}{extras(t, verify_open, copied)}
<section style="padding-top:0"><div class="wrap"><p class="other" style="margin:0"><a href="#">{t["otherIos"]}</a></p></div></section></main>''' + footer(t)
    return page(lang, t, body)

SCREENS = {
  'mac': lambda t, l: mac(t, l),
  'mac-android-open': lambda t, l: mac(t, l, droid_open=True),
  'ios': lambda t, l: ios(t, l),
  'ios-link-copied': lambda t, l: ios(t, l, sent=True),
  'android': lambda t, l: android(t, l),
  'android-verify-copied': lambda t, l: android(t, l, verify_open=True, copied=True),
}
if __name__ == '__main__':
    for lang, t in T.items():
        for k, f in SCREENS.items():
            (OUT / f'{k}.{lang}.html').write_text(f(t, lang))
    print('ok', len(list(OUT.glob('*.html'))))
