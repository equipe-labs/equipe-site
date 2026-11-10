# T-507 mockups: three ways to get the phone app on equipe.im.
# Writes one HTML file per option × frame × language; `equipe design render` draws them light and dark.
#   python3 gen.py && equipe design render out/*.html --widths ... --dark
import os, pathlib

HERE = pathlib.Path(__file__).parent
OUT = HERE / 'out'
OUT.mkdir(exist_ok=True)
FONTS = (HERE / '../../../src/assets/fonts').resolve()

def qr(name, px=None):
    svg = (HERE / f'{name}.svg').read_text()
    return svg.replace('<svg ', f'<svg style="width:{px}px;height:{px}px" ', 1) if px else svg

CSS = f"""
@font-face {{ font-family: 'Pretendard Variable'; font-weight: 400 700; src: url('file://{FONTS}/pretendard-ko-rest.woff2') format('woff2'); unicode-range: U+AC00-D7A3; }}
@font-face {{ font-family: 'Pretendard Variable'; font-weight: 400 700; src: url('file://{FONTS}/pretendard-ko-core.woff2') format('woff2'); }}
:root {{
  --bg: #F6F5F1; --surface: #FFFFFF; --code-bg: #EAE7E0; --text: #15161A; --muted: #4F5159;
  --accent: #1D4ED8; --on-accent: #FFFFFF; --line: #0A0A0C24; --dot: #3F6FF5;
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 72px; --s-9: 112px;
  --r-1: 8px; --r-2: 12px; --tap: 44px; --wrap: 1040px; --gutter: 16px;
  --sans: 'Inter Variable', Inter, system-ui, sans-serif; --mono: 'JetBrains Mono', ui-monospace, monospace;
}}
@media (prefers-color-scheme: dark) {{ :root {{
  --bg: #0A0A0C; --surface: #16171A; --code-bg: #17171C; --text: #EFEDE7; --muted: #A3A5AB;
  --accent: #8FB0FF; --on-accent: #0B1226; --line: #E9E6DF24; }} }}
@media (min-width: 641px) {{ :root {{ --gutter: 24px; }} }}
* {{ box-sizing: border-box; }}
body {{ margin: 0; background: var(--bg); color: var(--text); font: 400 17px/1.6 var(--sans); }}
@media (min-width: 641px) {{ body {{ font-size: 18px; }} }}
:lang(ko) {{ font-family: var(--sans), 'Pretendard Variable', 'Apple SD Gothic Neo', sans-serif; }}
html:lang(ko) {{ word-break: keep-all; overflow-wrap: anywhere; }}
:lang(ko) :is(h1,h2,h3) {{ letter-spacing: 0; line-height: 1.3; }}
a {{ color: var(--accent); text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }}
h1, h2, h3 {{ font-weight: 700; letter-spacing: -0.02em; margin: 0; text-wrap: balance; }}
h1 {{ font-size: 36px; line-height: 1.05; }} h2 {{ font-size: 26px; line-height: 1.15; }} h3 {{ font-size: 18px; line-height: 1.3; }}
@media (min-width: 641px) {{ h1 {{ font-size: 56px; }} h2 {{ font-size: 32px; }} }}
p {{ margin: 0 0 var(--s-4); }}
code {{ font-family: var(--mono); font-size: .88em; background: var(--code-bg); padding: 1px 6px; border-radius: 4px; }}
.wrap {{ max-width: var(--wrap); margin: 0 auto; padding: 0 var(--gutter); }}
.muted {{ color: var(--muted); }} .small {{ font-size: 14px; }}
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
.globe {{ width: 44px; height: 44px; display: inline-grid; place-items: center; color: var(--text); }}
.btn {{ display: inline-flex; align-items: center; justify-content: center; gap: var(--s-2); min-height: var(--tap); padding: 0 20px; border-radius: var(--r-1); font-weight: 600; text-decoration: none; border: 2px solid var(--accent); color: var(--accent); font-size: 17px; }}
.btn.primary {{ background: var(--accent); color: var(--on-accent); }}
.btn.sm {{ min-height: 40px; padding: 0 14px; font-size: 15px; }}
.btn.lg {{ min-height: 52px; font-size: 18px; padding: 0 24px; }}
.btn.block {{ width: 100%; }}
.btn .sub {{ font-weight: 400; opacity: .85; font-size: .88em; }}
section {{ padding: var(--s-7) 0; }}
@media (min-width: 641px) {{ section {{ padding: var(--s-8) 0; }} }}
hr {{ border: 0; border-top: 1px solid var(--line); margin: 0; }}
.lead {{ font-size: 19px; color: var(--muted); max-width: 600px; margin-top: var(--s-4); }}
@media (min-width: 641px) {{ .lead {{ font-size: 21px; }} }}
.meta {{ font-size: 14px; color: var(--muted); margin: var(--s-2) 0 0; }}
/* Apple badge stand-in: the build uses Apple's official localized SVG (black), at 48px tall */
.appstore {{ display: inline-flex; align-items: center; gap: 8px; height: 48px; padding: 0 14px 0 10px; border-radius: 9px; background: #000; color: #fff; border: 1px solid #A6A6A6; text-decoration: none; font-family: -apple-system, 'SF Pro Text', system-ui, sans-serif; }}
.appstore .lg {{ width: 24px; height: 24px; border: 1.5px dashed #ffffff88; border-radius: 6px; flex: none; }}
.appstore span {{ display: flex; flex-direction: column; line-height: 1.05; }}
.appstore small {{ font-size: 10px; letter-spacing: .01em; }}
.appstore b {{ font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }}
.appstore.big {{ height: 56px; padding: 0 18px 0 12px; }} .appstore.big b {{ font-size: 23px; }} .appstore.big small {{ font-size: 11px; }}
.qrbox {{ background: #fff; padding: 12px; border-radius: var(--r-1); display: inline-block; line-height: 0; }}
.qrbox svg {{ width: 132px; height: 132px; display: block; }}
.ic {{ width: 20px; height: 20px; flex: none; }}
ol.steps {{ list-style: none; margin: 0; padding: 0; display: grid; gap: var(--s-4); counter-reset: s; }}
ol.steps > li {{ display: grid; grid-template-columns: 28px 1fr; gap: var(--s-3); counter-increment: s; }}
ol.steps > li::before {{ content: counter(s); width: 28px; height: 28px; border-radius: 50%; background: var(--accent); color: var(--on-accent); font: 700 15px/28px var(--sans); text-align: center; }}
ol.steps b {{ display: block; font-weight: 600; }}
ol.steps p {{ margin: 2px 0 0; color: var(--muted); font-size: 16px; }}
ol.inst {{ margin: 0; padding-left: 22px; display: grid; gap: var(--s-3); font-size: 16px; }}
ol.inst li::marker {{ color: var(--muted); font-weight: 600; }}
ol.inst b {{ font-weight: 600; }}
.ill {{ background: var(--code-bg); border-radius: var(--r-2); padding: var(--s-5); }}
.ill .cap {{ font-size: 13px; color: var(--muted); margin: var(--s-3) 0 0; }}
/* Android system screen, drawn in code */
.droid {{ background: #FFFFFF; color: #1B1B1F; border-radius: 16px; padding: 18px 18px 8px; font-family: Roboto, system-ui, sans-serif; max-width: 320px; box-shadow: 0 0 0 1px #0000001a; }}
@media (prefers-color-scheme: dark) {{ .droid {{ background: #1E1F23; color: #E3E2E6; box-shadow: 0 0 0 1px #ffffff1a; }} }}
.droid h4 {{ margin: 0 0 14px; font: 500 18px/1.3 Roboto, system-ui, sans-serif; }}
.droid .app {{ display: flex; align-items: center; gap: 12px; font-size: 15px; margin-bottom: 10px; }}
.droid .app i {{ width: 28px; height: 28px; border-radius: 50%; background: conic-gradient(#DB4437 0 33%, #F4B400 0 66%, #0F9D58 0); }}
.droid .row {{ display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-top: 1px solid #0000001f; font-size: 15px; }}
@media (prefers-color-scheme: dark) {{ .droid .row {{ border-color: #ffffff1f; }} }}
.sw {{ width: 44px; height: 26px; border-radius: 13px; background: #3F5AA9; position: relative; flex: none; }}
.sw::after {{ content: ''; position: absolute; right: 3px; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; }}
.ring {{ outline: 2px solid var(--accent); outline-offset: 4px; border-radius: 13px; }}
/* Mac pairing sheet, drawn in code */
.macsheet {{ background: var(--surface); border-radius: var(--r-2); box-shadow: 0 0 0 1px var(--line), 0 12px 32px #0000001f; padding: 20px; max-width: 360px; font-size: 14px; }}
.macsheet .dots {{ display: flex; gap: 6px; margin-bottom: 14px; }} .macsheet .dots i {{ width: 10px; height: 10px; border-radius: 50%; background: var(--line); }}
.macsheet h4 {{ margin: 0 0 12px; font-size: 15px; }}
.macsheet .in {{ display: grid; grid-template-columns: 112px 1fr; gap: 16px; align-items: start; }}
.macsheet .qrbox {{ padding: 8px; }} .macsheet .qrbox svg {{ width: 96px; height: 96px; }}
.macsheet ol {{ margin: 0; padding-left: 18px; color: var(--muted); }}
.macsheet .allow {{ margin-top: 14px; display: flex; justify-content: flex-end; gap: 8px; }}
.macsheet .allow span {{ padding: 4px 12px; border-radius: 6px; background: var(--code-bg); font-weight: 600; }}
.macsheet .allow span.y {{ background: var(--accent); color: var(--on-accent); }}
details {{ background: var(--surface); border-radius: var(--r-1); }}
summary {{ list-style: none; font-weight: 600; padding: 12px 16px; min-height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }}
summary::after {{ content: ''; width: 8px; height: 8px; border-right: 2px solid var(--muted); border-bottom: 2px solid var(--muted); transform: rotate(45deg); flex: none; }}
details[open] summary::after {{ transform: rotate(-135deg); }}
.dbody {{ padding: 0 16px 16px; font-size: 15px; }}
.hash {{ min-width: 0; font: 400 13px/1.55 var(--mono); background: var(--code-bg); border-radius: var(--r-1); padding: 10px 12px; word-break: break-all; margin: 4px 0 12px; }}
.dl {{ font-size: 14px; color: var(--muted); margin: 0; }}
footer {{ border-top: 1px solid var(--line); padding: var(--s-6) 0; color: var(--muted); font-size: 14px; }}
footer .wrap {{ display: flex; flex-wrap: wrap; gap: 8px 24px; justify-content: space-between; }}
footer a {{ color: var(--muted); }}
.links {{ display: flex; flex-wrap: wrap; gap: 4px 16px; }}
"""

GLOBE = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>'
DOWN = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>'

T = {
 'ko': dict(
  mac='Mac용 다운로드', stage='단계', how='작동 방식', feat='기능', start='시작하기', faq='FAQ', phoneNav='폰 앱',
  h1='폰에서 승인해요.', lead='스쿼드는 내 Mac에서 일하고, 기다리는 결정은 폰으로 보고 바로 답해요.',
  asSub='App Store에서', asMain='다운로드하기',
  iosMeta='iOS 17 이상 · 무료', apk='Android 앱 받기', apkSub='APK 파일 · 25 MB', apkShort='APK 받기',
  droidMeta='Android 8.0 이상 · 무료 · Google Play는 준비 중이에요',
  otherDroid='Android 폰이에요? APK 받기 →', otherIos='iPhone이에요? App Store에서 받기 →',
  qrT='폰 카메라로 비춰 보세요', qrS='내 폰에 맞는 받기 화면이 열려요.',
  installH='설치는 세 단계예요',
  i1='받은 파일을 열어요', i1s='알림이나 Chrome 다운로드에서 눌러요.',
  i2='‘이 출처 허용’을 한 번 켜요', i2s='Play 밖에서 받은 앱이라 한 번 물어봐요.',
  i3='설치를 눌러요', i3s='끝나면 열기를 눌러요.',
  dTitle='출처를 알 수 없는 앱 설치', dAllow='이 출처 허용', dCap='Android 화면 예시예요. 기기마다 조금 달라요.',
  verify='파일이 진짜인지 확인하기', vFile='파일 SHA-256', vCert='서명 인증서 SHA-256 · Umbriles Inc.',
  vNote='Android는 업데이트할 때도 같은 인증서인지 확인해요. 다른 곳에서 받은 파일은 설치하지 마세요.',
  vLink='GitHub 릴리스에서 보기',
  update='새 버전이 나오면 여기서 다시 받아요. Google Play에 올라가면 자동으로 업데이트돼요.',
  push='Android 알림은 준비 중이에요. 그전엔 앱을 열어 확인해요.',
  pairH='받은 다음, Mac과 연결해요',
  p1='Mac 앱 메뉴에서 ‘휴대폰 연결…’을 열어요', p1s='터미널이 편하면 <code>equipe pair</code>도 같아요.',
  p2='폰의 equipe 앱으로 QR을 비춰요', p2s='설정 › 컴퓨터와 페어링에서 카메라가 열려요.',
  p3='Mac에서 ‘허용’을 누르면 끝이에요', p3s='종단 간 암호화로 연결돼요.',
  sheetT='폰에서 equipe 앱으로 스캔하세요', sheet1='폰에서 equipe 앱을 열어요', sheet2='설정 › 컴퓨터와 페어링', sheet3='이 코드를 비추고 허용', deny='거부', allow='허용',
  needMac='먼저 Mac 앱이 있어야 해요.', needMacLink='Mac용 다운로드',
  heroT='최고의 스타트업 팀을 드려요. 승인만 하세요.', heroLead='기획·디자인·개발을 한 팀이 맡아요.',
  heroIos='iPhone에선 승인 앱을 받아요 →', heroDroid='Android에선 승인 앱을 받아요 →',
  req='무료 오픈소스 · macOS 12 이상 · 쓰던 Claude·ChatGPT 요금제 그대로',
  privacy='앱 개인정보 처리방침', support='앱 지원',
  # B
  bH='폰에서 승인하기', bLead='Mac에서 일하는 스쿼드의 결정을 폰으로 받아요.', bQr='폰으로 이 부분 열기',
  gsH='세 단계면 첫 티켓이에요.', gs3='PM에게 목표를 말해요.',
  # C
  cGet='앱 받기', cNote='팀은 Mac에서 일하고, 폰으로는 승인해요.', cSend='Mac에서 열 링크 보내기', cSendS='메일·메시지로 나에게 보내 Mac에서 열어요. 공유가 안 되면 링크를 복사해요.',
  cRow='폰으로 승인하려면', cScene='(지금 첫 화면의 Mac 앱 장면 그대로)', cPop='폰 카메라로 비추면 맞는 앱이 열려요.',
  sheetH='Android에 설치하기', asAlt='App Store에서 다운로드하기', example='예시', menuItem='휴대폰 연결…', copy='복사',
  vHow='받은 파일을 Mac 터미널에서 확인하려면', heroIosBtn='iPhone 앱 받기', heroIosNote='Mac에서 일하는 팀을 폰으로 승인해요. Mac 앱이 먼저 있어야 해요.',
  needMacPhone='스쿼드는 Mac에서 일해요. Mac 앱이 아직 없다면 링크를 나에게 보내 Mac에서 받아요.', macFirst='먼저 Mac 앱을 받고, 폰은 승인용으로 더해요.', droidHelp='설치 방법',
  macRow='Mac', macRowMeta='스쿼드가 일하는 곳 · 먼저 받아요', droidMore='Android 설치 방법과 파일 확인',
  sheetCap='Mac 앱의 연결 화면 예시예요. 그림 속 코드는 찍히지 않아요.', bLeadMac='폰 카메라로 비추면 내 폰에 맞는 받기가 열려요.',
  pairLink='받은 다음 Mac과 연결하기 →', cPopPair='받은 다음엔 Mac 앱의 ‘휴대폰 연결…’에서 QR을 찍어요.',
  cThen='설치한 다음:', cThenS='Mac 앱의 ‘휴대폰 연결…’에서 나오는 QR을 앱으로 찍어요.',
 ),
 'en': dict(
  mac='Download for Mac', stage='Stage', how='How it works', feat='Features', start='Start', faq='FAQ', phoneNav='Phone app',
  h1='Approve from your phone.', lead='The squad works on your Mac. What it waits on comes to your phone, and you answer right there.',
  asSub='Download on the', asMain='App Store',
  iosMeta='iOS 17 or later · Free', apk='Download for Android', apkSub='APK · 25 MB', apkShort='Download APK',
  droidMeta='Android 8.0 or later · Free · Google Play: coming',
  otherDroid='On Android? Get the APK →', otherIos='On iPhone? Get it on the App Store →',
  qrT='Point your phone’s camera here', qrS='It opens the right download for your phone.',
  installH='Installing takes three taps',
  i1='Open the file', i1s='From the notification or Chrome’s downloads.',
  i2='Turn on “Allow from this source” once', i2s='Android asks once for apps from outside Play.',
  i3='Tap Install', i3s='Then tap Open.',
  dTitle='Install unknown apps', dAllow='Allow from this source', dCap='An Android screen as an example. It varies a little by phone.',
  verify='Check the file is ours', vFile='File SHA-256', vCert='Signing certificate SHA-256 · Umbriles Inc.',
  vNote='Android checks the certificate again on every update. Don’t install a copy from anywhere else.',
  vLink='See the GitHub release',
  update='Get new versions here. Once it’s on Google Play, it updates itself.',
  push='Notifications on Android: coming. Until then, open the app to check.',
  pairH='Then connect it to your Mac',
  p1='On your Mac, open “Connect a phone…”', p1s='In a terminal, <code>equipe pair</code> does the same.',
  p2='Scan the code with the equipe app', p2s='Settings › Pair with a computer opens the camera.',
  p3='Click Allow on your Mac', p3s='The link is end-to-end encrypted.',
  sheetT='Scan with the equipe app on your phone', sheet1='Open the equipe app on your phone', sheet2='Settings › Pair with a computer', sheet3='Point it here, then Allow', deny='Deny', allow='Allow',
  needMac='You need the Mac app first.', needMacLink='Download for Mac',
  heroT='Your whole startup team. You just approve.', heroLead='A PM, a designer and engineers who build your product, ship it and keep growing it.',
  heroIos='On iPhone? Get the approval app →', heroDroid='On Android? Get the approval app →',
  req='Free and open source · macOS 12+ · Runs on your Claude or ChatGPT plan',
  privacy='App privacy policy', support='App support',
  bH='Approve from your phone', bLead='Decisions from the squad on your Mac, in your pocket.', bQr='Open this part on your phone',
  gsH='Three steps to your first ticket.', gs3='Tell the PM your goal.',
  cGet='Get the app', cNote='The team works on your Mac. Your phone is where you approve.', cSend='Send me the Mac link', cSendS='Mail or message it to yourself and open it on your Mac. Where sharing isn’t there, it copies the link.',
  cRow='To approve from your phone', cScene='(the Mac app scene, as it is today)', cPop='Point your phone’s camera here to open the right app.',
  sheetH='Install on Android', asAlt='Download on the App Store', example='Example', menuItem='Connect a phone…', copy='Copy',
  vHow='To check it in a Mac terminal:', heroIosBtn='Get the iPhone app', heroIosNote='Approve your Mac’s squad from your phone. You need the Mac app first.',
  needMacPhone='The squad runs on a Mac. No Mac app yet? Send yourself the link and get it there.', macFirst='Get the Mac app first, then add your phone to approve.', droidHelp='How to install',
  macRow='Mac', macRowMeta='Where the squad works · get this first', droidMore='How to install on Android, and checking the file',
  sheetCap='The Mac app, drawn as an example. This code doesn’t scan.', bLeadMac='Point your phone’s camera here to open the right download.',
  pairLink='Then connect it to your Mac →', cPopPair='Then scan the code from “Connect a phone…” in the Mac app.',
  cThen='After installing:', cThenS='scan the code from “Connect a phone…” in the Mac app.',
 ),
}
FILE_SHA = 'bd8f267edeb10ce0aaed1efbb80f7b3c349895f6121e5f8a97d647d09f8d9773'
CERT_SHA = 'f6884e264a84a48b04cf7b04256e40e3887543795b430e367aee2ff769041a87'

def page(lang, body, title):
    return f'<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title}</title><style>{CSS}</style></head><body>{body}</body></html>'

def header(t, cta=None, current=None, phone_nav=False, cta_ghost=False):
    cta = cta or t['mac']
    pn = f'<li class="opt"><a href="#" {"aria-current=page" if current=="phone" else ""}>{t["phoneNav"]}</a></li>' if phone_nav else ''
    return f'''<header class="site"><div class="wrap"><a class="brand" href="#"><span class="mark">e<i></i></span> equipe</a>
<nav><ul><li class="opt"><a href="#">{t["stage"]}</a></li><li class="opt"><a href="#">{t["how"]}</a></li><li class="opt"><a href="#">{t["feat"]}</a></li>{pn}<li class="opt"><a href="#">{t["start"]}</a></li><li class="opt"><a href="#">{t["faq"]}</a></li>
<li><span class="globe">{GLOBE}</span></li><li><a class="btn {"" if cta_ghost else "primary "}sm" href="#">{cta}</a></li></ul></nav></div></header>'''

def footer(t):
    return f'<footer><div class="wrap"><span>© 2026 equipe · MIT</span><span class="links"><a href="#">{t["phoneNav"]}</a><a href="#">{t["privacy"]}</a><a href="#">{t["support"]}</a><a href="#">GitHub</a></span></div></footer>'

def appstore(t, big=False):
    return f'<a class="appstore{" big" if big else ""}" href="#"><i class="lg"></i><span><small>{t["asSub"]}</small><b>{t["asMain"]}</b></span></a>'

def apkbtn(t, cls='btn primary lg block'):
    return f'<a class="{cls}" href="#">{DOWN}{t["apk"]} <span class="sub">· {t["apkSub"]}</span></a>'

def droid_screen(t):
    return f'''<div class="droid"><h4>{t["dTitle"]}</h4><div class="app"><i></i>Chrome</div>
<div class="row ring"><span>{t["dAllow"]}</span><span class="sw"></span></div></div>'''

def mac_sheet(t):
    return f'''<div class="macsheet"><div class="dots"><i></i><i></i><i></i></div><h4>{t["sheetT"]}</h4>
<div class="in"><span class="qrbox">{qr("qr-pair")}</span><ol><li>{t["sheet1"]}</li><li>{t["sheet2"]}</li><li>{t["sheet3"]}</li></ol></div>
<div class="allow"><span>{t["deny"]}</span><span class="y">{t["allow"]}</span></div></div>'''

def install_steps(t, ill=True):
    return f'''<ol class="steps"><li><div><b>{t["i1"]}</b><p>{t["i1s"]}</p></div></li>
<li><div><b>{t["i2"]}</b><p>{t["i2s"]}</p>{f'<div class="ill" style="margin-top:12px">{droid_screen(t)}<p class="cap">{t["dCap"]}</p></div>' if ill else ''}</div></li>
<li><div><b>{t["i3"]}</b><p>{t["i3s"]}</p></div></li></ol>'''

def verify(t, open_=False):
    return f'''<details {"open" if open_ else ""}><summary>{t["verify"]}</summary><div class="dbody">
<p class="dl">{t["vFile"]}</p><div class="hash">{FILE_SHA}</div><p class="dl">{t["vCert"]}</p><div class="hash">{CERT_SHA}</div>
<p class="small muted">{t["vNote"]} <a href="#">{t["vLink"]}</a></p></div></details>'''

def pair_section(t, wide=False):
    steps = f'''<ol class="steps"><li><div><b>{t["p1"]}</b><p>{t["p1s"]}</p></div></li><li><div><b>{t["p2"]}</b><p>{t["p2s"]}</p></div></li><li><div><b>{t["p3"]}</b><p>{t["p3s"]}</p></div></li></ol>'''
    if wide:
        return f'''<section><div class="wrap"><h2>{t["pairH"]}</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-top:32px">{steps}<div class="ill" style="display:grid;place-items:center">{mac_sheet(t)}</div></div>
<p class="meta" style="margin-top:24px">{t["needMac"]} <a href="#">{t["needMacLink"]}</a></p></div></section>'''
    return f'''<section><div class="wrap"><h2>{t["pairH"]}</h2><div style="margin-top:24px">{steps}</div><div class="ill" style="margin-top:24px">{mac_sheet(t)}</div>
<p class="meta" style="margin-top:16px">{t["needMac"]} <a href="#">{t["needMacLink"]}</a></p></div></section>'''

# ---------- A: one page, /app/ ----------
def a_mac(t, lang):
    q = qr('qr-ko' if lang == 'ko' else 'qr-en'); url = 'equipe.im/ko/app' if lang == 'ko' else 'equipe.im/app'
    body = header(t, current='phone', phone_nav=True) + f'''<main>
<section><div class="wrap" style="display:grid;grid-template-columns:1.25fr 1fr;gap:64px;align-items:center">
<div><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:40px;border-top:1px solid var(--line)">
 <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;border-bottom:1px solid var(--line)"><div><b>iPhone</b><p class="meta" style="margin:0">{t["iosMeta"]}</p></div>{appstore(t)}</div>
 <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;border-bottom:1px solid var(--line)"><div><b>Android</b><p class="meta" style="margin:0">{t["droidMeta"]}</p></div><a class="btn" href="#">{DOWN}{t["apkShort"]}</a></div>
</div></div>
<div style="background:var(--surface);border-radius:12px;padding:32px;display:grid;justify-items:start;gap:16px;box-shadow:0 0 0 1px var(--line)">
 <span class="qrbox">{q}</span><div><h3>{t["qrT"]}</h3><p class="muted" style="margin:4px 0 0;font-size:16px">{t["qrS"]}</p><p class="meta" style="font-family:var(--mono)">{url}</p></div></div>
</div></section><hr>
{pair_section(t, wide=True)}<hr>
<section style="padding-top:48px"><div class="wrap" style="max-width:720px;margin-left:max(24px,calc((100% - 1040px)/2))"><h3 style="margin-bottom:12px">Android</h3><p class="muted small">{t["update"]} {t["push"]}</p>{verify(t)}</div></section>
</main>''' + footer(t)
    return page(lang, body, 'A mac')

def a_ios(t, lang):
    body = header(t) + f'''<main><section style="padding-bottom:40px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:28px">{appstore(t, big=True)}</div><p class="meta">{t["iosMeta"]}</p>
<p style="margin-top:20px;font-size:16px"><a href="#">{t["otherDroid"]}</a></p></div></section><hr>
{pair_section(t)}</main>''' + footer(t)
    return page(lang, body, 'A ios')

def a_droid(t, lang):
    body = header(t) + f'''<main><section style="padding-bottom:40px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:28px">{apkbtn(t)}</div><p class="meta">{t["droidMeta"]}</p>
<h3 style="margin:36px 0 16px">{t["installH"]}</h3>{install_steps(t)}
<div style="margin-top:24px">{verify(t, open_=True)}</div>
<p class="small muted" style="margin-top:16px">{t["update"]} {t["push"]}</p>
<p style="margin-top:8px;font-size:16px"><a href="#">{t["otherIos"]}</a></p></div></section><hr>
{pair_section(t)}</main>''' + footer(t)
    return page(lang, body, 'A android')

def a_home_ios(t, lang):
    body = header(t) + f'''<main><section><div class="wrap"><h1>{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="display:grid;gap:16px;margin-top:28px"><a class="btn primary lg block" href="#">{t["mac"]}</a><a href="#" style="font-size:17px">{t["heroIos"]}</a></div>
<p class="meta" style="margin-top:20px">{t["req"]}</p></div></section></main>'''
    return page(lang, body, 'A home ios')

# ---------- B: a block inside the home page's Get started ----------
def tabs(t, active):
    on = 'background:var(--bg);color:var(--text);box-shadow:0 0 0 1px var(--line)'
    return f'''<div style="display:inline-flex;gap:4px;padding:4px;background:var(--surface);border-radius:8px;margin:16px 0 20px">
<span style="min-height:44px;padding:0 18px;display:inline-flex;align-items:center;border-radius:8px;font:600 15px var(--sans);color:var(--muted);{on if active=="ios" else ""}">iPhone</span>
<span style="min-height:44px;padding:0 18px;display:inline-flex;align-items:center;border-radius:8px;font:600 15px var(--sans);color:var(--muted);{on if active=="droid" else ""}">Android</span></div>'''

def b_panel(t, active, compact=False):
    if active == 'ios':
        return f'<div>{appstore(t, big=True)}<p class="meta">{t["iosMeta"]}</p></div>'
    btn = apkbtn(t, 'btn primary lg' + ('' if compact else ' block'))
    return f'''<div>{btn}<p class="meta">{t["droidMeta"]}</p><div style="margin-top:24px">{install_steps(t, ill=not compact)}</div><div style="margin-top:20px">{verify(t)}</div><p class="small muted" style="margin-top:12px">{t["update"]} {t["push"]}</p></div>'''

def b_pair_inline(t):
    return f'''<h3 style="margin:36px 0 16px">{t["pairH"]}</h3><ol class="steps"><li><div><b>{t["p1"]}</b><p>{t["p1s"]}</p></div></li><li><div><b>{t["p2"]}</b><p>{t["p2s"]}</p></div></li><li><div><b>{t["p3"]}</b><p>{t["p3s"]}</p></div></li></ol>'''

def b_mac(t, lang):
    q = qr('qr-b-ko' if lang == 'ko' else 'qr-b-en')
    body = header(t) + f'''<main><section><div class="wrap"><h2>{t["gsH"]}</h2>
<div style="display:flex;align-items:center;gap:24px;margin-top:32px"><a class="btn primary lg" href="#">{t["mac"]}</a><span class="meta" style="margin:0">{t["req"]}</span></div>
<div style="margin-top:56px;padding-top:40px;border-top:1px solid var(--line);display:grid;grid-template-columns:1.4fr 1fr;gap:56px">
<div><span id="phone"></span><h2 style="font-size:28px">{t["bH"]}</h2><p class="lead" style="font-size:19px">{t["bLead"]}</p>{tabs(t,"droid")}{b_panel(t,"droid",compact=True)}</div>
<div><div style="display:flex;gap:16px;align-items:center;background:var(--surface);border-radius:12px;padding:20px;box-shadow:0 0 0 1px var(--line)"><span class="qrbox">{qr("qr-b-ko" if lang == "ko" else "qr-b-en", 96)}</span><div><b style="font-size:16px">{t["bQr"]}</b><p class="meta" style="margin-top:4px">{t["qrS"]}</p></div></div>
{b_pair_inline(t)}</div></div></div></section></main>''' + footer(t)
    return page(lang, body, 'B mac')

def b_phone(t, lang, active):
    body = header(t) + f'''<main><section style="padding-top:32px"><div class="wrap"><span id="phone"></span><h2>{t["bH"]}</h2><p class="lead" style="font-size:18px">{t["bLead"]}</p>
{tabs(t, active)}{b_panel(t, active)}{b_pair_inline(t)}<div class="ill" style="margin-top:20px">{mac_sheet(t)}</div></div></section></main>''' + footer(t)
    return page(lang, body, 'B phone')

# ---------- C: the first screen follows the device ----------
def c_mac(t, lang):
    q = qr('qr-ko' if lang == 'ko' else 'qr-en')
    body = header(t) + f'''<main><section><div class="wrap" style="position:relative"><h1 style="max-width:820px">{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="display:flex;gap:20px;align-items:center;margin-top:32px"><a class="btn primary lg" href="#">{t["mac"]}</a><a href="#" style="font-size:17px">CLI →</a></div>
<p class="meta" style="margin-top:16px">{t["req"]}</p>
<div style="position:relative;display:flex;align-items:center;gap:12px;margin-top:28px;font-size:16px"><span class="muted">{t["cRow"]}</span>
<a class="btn sm" href="#" style="outline:2px solid var(--accent);outline-offset:2px">iPhone</a><a class="btn sm" href="#">Android</a>
<div style="position:absolute;left:150px;top:calc(100% + 12px);width:360px;background:var(--surface);border-radius:12px;box-shadow:0 0 0 1px var(--line),0 16px 40px #00000029;padding:20px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center;z-index:2">
<span class="qrbox" style="padding:8px">{qr("qr-ko" if lang == "ko" else "qr-en", 104)}</span><div><b style="font-size:16px">iPhone</b><p class="meta" style="margin:4px 0 10px">{t["cPop"]}</p>{appstore(t)}</div></div></div>
<div style="margin-top:48px;height:420px;border-radius:12px;background:var(--surface);box-shadow:0 0 0 1px var(--line);display:grid;place-items:center;color:var(--muted);font-size:15px">{t["cScene"]}</div>
</div></section></main>'''
    return page(lang, body, 'C mac')

def c_ios(t, lang):
    body = header(t, cta=t['cGet']) + f'''<main><section><div class="wrap"><h1>{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="margin-top:28px">{appstore(t, big=True)}</div><p class="meta">{t["iosMeta"]} · {t["cNote"]}</p>
<a class="btn block" href="#" style="margin-top:24px">{t["cSend"]}</a><p class="meta" style="text-align:center">{t["cSendS"]}</p>
<p style="margin-top:20px;font-size:16px"><a href="#">{t["otherDroid"]}</a></p></div></section></main>'''
    return page(lang, body, 'C ios')

def c_droid(t, lang):
    body = '<div style="position:relative;min-height:844px">' + header(t, cta=t['cGet']) + f'''<main><section style="padding-bottom:24px"><div class="wrap"><h1>{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="margin-top:28px">{apkbtn(t)}</div><p class="meta">{t["droidMeta"]}</p></div></section>
<div style="position:absolute;inset:0;background:#0000004d"></div>
<div style="position:absolute;left:0;right:0;bottom:0;background:var(--bg);border-radius:16px 16px 0 0;padding:12px 16px 24px;box-shadow:0 -8px 32px #00000033">
<div style="width:36px;height:4px;border-radius:2px;background:var(--line);margin:0 auto 16px"></div>
<h3 style="font-size:20px;margin-bottom:16px">{t["sheetH"]}</h3>{install_steps(t, ill=False)}<div class="ill" style="margin-top:16px;padding:16px">{droid_screen(t)}</div>
<p class="small muted" style="margin:12px 0 0">{t["push"]} <a href="#">{t["verify"]}</a></p></div></main></div>'''
    return page(lang, body, 'C android')


# ---------- round 2 (after the critic, design/critiques/1794096992.md) ----------
def fake_qr(px=96):
    # The pairing QR in the drawing is not scannable on purpose: finder squares and a muted grid, so nobody scans an example.
    cells = ''.join(f'<rect x="{x}" y="{y}" width="1" height="1"/>' for y in range(25) for x in range(25)
                    if (x * 7 + y * 13 + x * y) % 5 == 0 and not ((x < 8 and y < 8) or (x > 16 and y < 8) or (x < 8 and y > 16)))
    finder = lambda X, Y: f'<rect x="{X}" y="{Y}" width="7" height="7" fill="none" stroke="#000" stroke-width="1" transform="translate(.5 .5)"/><rect x="{X+2}" y="{Y+2}" width="3" height="3"/>'
    return f'<svg viewBox="0 0 25 25" style="width:{px}px;height:{px}px;display:block" shape-rendering="crispEdges"><g fill="#00000059">{cells}</g><g fill="#000">{finder(0,0)}{finder(18,0)}{finder(0,18)}</g></svg>'

def mac_sheet(t):
    return f"""<div class="macsheet"><div class="dots"><i></i><i></i><i></i></div><h4>{t["sheetT"]}</h4>
<div class="in"><span class="qrbox">{fake_qr()}</span><ol><li>{t["sheet1"]}</li><li>{t["sheet2"]}</li><li>{t["sheet3"]}</li></ol></div>
<div class="allow"><span>{t["deny"]}</span><span class="y">{t["allow"]}</span></div></div>"""

def install_steps(t, ill=True):
    li = lambda b, sub, extra='': f'<li><b>{b}</b> <span class="muted">{sub}</span>{extra}</li>'
    pic = f'<div class="ill" style="margin-top:12px">{droid_screen(t)}<p class="cap">{t["dCap"]}</p></div>' if ill else ''
    return f"""<ol class="inst">{li(t["i1"], t["i1s"])}{li(t["i2"], t["i2s"], pic)}{li(t["i3"], t["i3s"])}</ol>"""

def apkbtn(t, cls='btn primary lg block'):
    return f'<a class="{cls}" href="#">{DOWN}{t["apk"]}</a>'

def pair_section(t, wide=False):
    steps = f"""<ol class="steps"><li><div><b>{t["p1"]}</b><p>{t["p1s"]}</p></div></li><li><div><b>{t["p2"]}</b><p>{t["p2s"]}</p></div></li><li><div><b>{t["p3"]}</b><p>{t["p3s"]}</p></div></li></ol>"""
    if wide:
        return f"""<section><div class="wrap"><h2>{t["pairH"]}</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;margin-top:32px">{steps}<div class="ill" style="display:grid;place-items:center">{mac_sheet(t)}<p class="cap">{t["sheetCap"]}</p></div></div></div></section>"""
    return f"""<section id="pair"><div class="wrap"><h2>{t["pairH"]}</h2><div style="margin-top:24px">{steps}</div><div class="ill" style="margin-top:24px">{mac_sheet(t)}<p class="cap">{t["sheetCap"]}</p></div></div></section>"""

def droid_more(t):
    return f"""<details><summary>{t["droidMore"]}</summary><div class="dbody">{install_steps(t, ill=False)}<p class="small muted" style="margin:12px 0">{t["update"]} {t["push"]}</p>
<p class="dl">{t["vFile"]}</p><div class="hash">{FILE_SHA}</div><p class="dl">{t["vCert"]}</p><div class="hash">{CERT_SHA}</div><p class="small muted">{t["vNote"]} <a href="#">{t["vLink"]}</a></p></div></details>"""

def a_mac(t, lang):
    q = qr('qr-ko' if lang == 'ko' else 'qr-en', 112); url = 'equipe.im/ko/app' if lang == 'ko' else 'equipe.im/app'
    row = lambda name, meta, act, first=False: f'<div style="display:flex;justify-content:space-between;align-items:center;gap:24px;padding:20px 0;border-bottom:1px solid var(--line)"><div><b>{name}</b><p class="meta" style="margin:0">{meta}</p></div>{act}</div>'
    body = header(t, current='phone', phone_nav=True) + f"""<main>
<section><div class="wrap" style="display:grid;grid-template-columns:1.5fr 1fr;gap:64px;align-items:end">
<div><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:40px;border-top:1px solid var(--line)">
 {row(t["macRow"], t["macRowMeta"], f'<a class="btn primary lg" href="#" data-primary>{t["mac"]}</a>')}
 {row("iPhone", t["iosMeta"], appstore(t))}
 {row("Android", t["droidMeta"], f'<a class="btn" href="#">{DOWN}{t["apkShort"]}</a>')}
</div><div style="margin-top:16px">{droid_more(t)}</div></div>
<div style="display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:center;padding:20px;border-radius:12px;box-shadow:0 0 0 1px var(--line);margin-bottom:96px">
 <span class="qrbox" style="padding:8px">{q}</span><div><b style="font-size:17px">{t["qrT"]}</b><p class="muted" style="margin:4px 0 0;font-size:15px">{t["qrS"]}</p><p class="meta" style="font-family:var(--mono)">{url}</p></div></div>
</div></section><hr>
{pair_section(t, wide=True)}
</main>""" + footer(t)
    return page(lang, body, 'A mac')

def a_ios(t, lang):
    body = header(t, cta_ghost=True) + f"""<main><section style="padding-bottom:40px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:28px">{appstore(t, big=True)}</div><p class="meta">{t["iosMeta"]}</p>
<p style="margin-top:20px;font-size:16px"><a href="#">{t["otherDroid"]}</a></p></div></section><hr>
{pair_section(t)}</main>""" + footer(t)
    return page(lang, body, 'A ios')

def a_droid(t, lang):
    body = header(t, cta_ghost=True) + f"""<main><section style="padding-bottom:40px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:28px">{apkbtn(t)}</div><p class="meta">{t["apkSub"]} · {t["droidMeta"]}</p>
<h3 style="margin:32px 0 12px">{t["installH"]}</h3>{install_steps(t)}
<p class="small muted" style="margin-top:20px">{t["update"]} {t["push"]}</p>
<details style="margin-top:16px"><summary>{t["verify"]}</summary></details>
<p style="margin-top:20px;font-size:16px"><a href="#">{t["otherIos"]}</a></p></div></section><hr>
{pair_section(t)}</main>""" + footer(t)
    return page(lang, body, 'A android')

def b_mac(t, lang):
    body = header(t) + f"""<main><section><div class="wrap"><h2>{t["gsH"]}</h2>
<div style="display:flex;align-items:center;gap:24px;margin-top:32px"><a class="btn primary lg" href="#" data-primary>{t["mac"]}</a><span class="meta" style="margin:0">{t["req"]}</span></div>
<div id="phone" style="margin-top:56px;padding-top:40px;border-top:1px solid var(--line);display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:center">
<span class="qrbox" style="padding:8px">{qr("qr-b-ko" if lang == "ko" else "qr-b-en", 120)}</span>
<div><h3 style="font-size:24px">{t["bH"]}</h3><p class="muted" style="margin:6px 0 16px">{t["bLeadMac"]}</p>
<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">{appstore(t)}<a class="btn" href="#">{DOWN}{t["apkShort"]}</a><a href="#pair" style="font-size:16px">{t["pairLink"]}</a></div></div></div>
</div></section></main>""" + footer(t)
    return page(lang, body, 'B mac')

def b_phone(t, lang, active):
    panel = f'<div>{appstore(t, big=True)}<p class="meta">{t["iosMeta"]}</p></div>' if active == 'ios' else f"""<div>{apkbtn(t)}<p class="meta">{t["apkSub"]} · {t["droidMeta"]}</p><h3 style="margin:28px 0 12px">{t["installH"]}</h3>{install_steps(t)}<details style="margin-top:16px"><summary>{t["verify"]}</summary></details></div>"""
    body = header(t) + f"""<main><section style="padding-top:32px"><div class="wrap"><span id="phone"></span><h2>{t["bH"]}</h2><p class="lead" style="font-size:18px">{t["bLead"]}</p>
{tabs(t, active)}{panel}</div></section><hr>{pair_section(t)}</main>""" + footer(t)
    return page(lang, body, 'B phone')

SCENE = (HERE / '../../flows/first-visit/hero').resolve()
def c_mac(t, lang):
    body = header(t) + f"""<main><section style="padding-bottom:0"><div class="wrap"><h1 style="max-width:820px">{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="display:flex;gap:20px;align-items:center;margin-top:32px"><a class="btn primary lg" href="#" data-primary>{t["mac"]}</a><a href="#" style="font-size:17px">CLI →</a></div>
<p class="meta" style="margin-top:16px">{t["req"]}</p>
<div style="position:relative;display:flex;align-items:center;gap:12px;margin-top:24px;font-size:16px"><span class="muted">{t["cRow"]}</span>
<a class="btn sm" href="#" style="outline:2px solid var(--accent);outline-offset:2px">iPhone</a><a class="btn sm" href="#">Android</a>
<div style="position:absolute;left:150px;top:calc(100% + 12px);width:380px;background:var(--surface);border-radius:12px;box-shadow:0 0 0 1px var(--line),0 16px 40px #00000029;padding:20px;z-index:2">
<div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center"><span class="qrbox" style="padding:8px">{qr("qr-ko" if lang == "ko" else "qr-en", 104)}</span><div><b style="font-size:16px">iPhone</b><p class="meta" style="margin:4px 0 10px">{t["cPop"]}</p>{appstore(t)}</div></div>
<p class="small" style="margin:14px 0 0;border-top:1px solid var(--line);padding-top:12px"><span class="muted">{t["cPopPair"]}</span></p></div></div>
<picture style="display:block;margin-top:40px"><source media="(prefers-color-scheme: dark)" srcset="file://{HERE.resolve()}/scene-dark.png"><img src="file://{HERE.resolve()}/scene-light.png" style="width:100%;display:block" alt=""></picture>
</div></section></main>"""
    return page(lang, body, 'C mac')

def c_ios(t, lang):
    body = header(t, cta=t['cGet']) + f"""<main><section style="padding-bottom:32px"><div class="wrap"><h1>{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="margin-top:28px">{appstore(t, big=True)}</div><p class="meta">{t["iosMeta"]} · {t["cNote"]}</p>
<a class="btn block" href="#" style="margin-top:20px">{t["cSend"]}</a><p class="meta" style="text-align:center">{t["cSendS"]}</p>
<p style="margin-top:16px;font-size:16px"><a href="#pair">{t["pairLink"]}</a> · <a href="#">Android</a></p></div></section></main>"""
    return page(lang, body, 'C ios')

def c_droid(t, lang):
    body = '<div style="position:relative;min-height:844px">' + header(t, cta=t['cGet']) + f"""<main><section style="padding-bottom:24px"><div class="wrap"><h1>{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="margin-top:28px">{apkbtn(t)}</div><p class="meta">{t["apkSub"]} · {t["droidMeta"]}</p></div></section>
<div style="position:absolute;inset:0;background:#0000004d"></div>
<div style="position:absolute;left:0;right:0;bottom:0;background:var(--bg);border-radius:16px 16px 0 0;padding:12px 16px 24px;box-shadow:0 -8px 32px #00000033">
<div style="width:36px;height:4px;border-radius:2px;background:var(--line);margin:0 auto 16px"></div>
<h3 style="font-size:20px;margin-bottom:12px">{t["sheetH"]}</h3>{install_steps(t, ill=False)}<div class="ill" style="margin-top:12px;padding:16px">{droid_screen(t)}</div>
<p class="small" style="margin:16px 0 0"><b>{t["cThen"]}</b> <span class="muted">{t["cThenS"]}</span></p>
<p class="small muted" style="margin:8px 0 0">{t["push"]} <a href="#">{t["verify"]}</a></p></div></main></div>"""
    return page(lang, body, 'C android')

# ---------- round 3 (after design/critiques/1794097145.md) ----------
BADGE = (HERE / 'badges/appstore-black-en.svg').resolve()
def appstore(t, big=False):
    # Apple's official badge (developer.apple.com); the build uses the localized one per language from Apple Marketing Tools.
    h = 52 if big else 44
    return f'<a href="#" style="display:inline-block;line-height:0"><img src="file://{BADGE}" style="height:{h}px;display:block" alt="{t["asAlt"]}"></a>'

def mac_sheet(t):
    return f"""<div class="macsheet"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span class="dots" style="margin:0"><i></i><i></i><i></i></span><span style="font-size:12px;font-weight:600;color:var(--muted);border:1px solid var(--line);border-radius:6px;padding:1px 8px">{t["example"]}</span></div>
<p style="margin:0 0 4px;font-size:12px;color:var(--muted)">equipe › {t["menuItem"]}</p><h4>{t["sheetT"]}</h4>
<div class="in" style="grid-template-columns:72px 1fr"><span class="qrbox" style="padding:6px;opacity:.45">{fake_qr(60)}</span><ol><li>{t["sheet1"]}</li><li>{t["sheet2"]}</li><li>{t["sheet3"]}</li></ol></div>
<div class="allow"><span>{t["deny"]}</span><span class="y" style="outline:2px solid var(--accent);outline-offset:2px">{t["allow"]}</span></div></div>"""

def droid_screen(t):
    return f"""<div class="droid" style="max-width:280px;padding:14px 14px 4px"><h4 style="font-size:16px;margin-bottom:8px">{t["dTitle"]}</h4><div class="app" style="font-size:14px;margin-bottom:4px"><i style="width:22px;height:22px"></i>Chrome</div>
<div class="row ring" style="font-size:14px;padding:8px 6px"><span>{t["dAllow"]}</span><span class="sw"></span></div></div>"""

def pair_short(t):
    return f"""<ol class="inst" style="margin-top:8px"><li>{t["p1"]}</li><li>{t["p2"]}</li><li>{t["p3"]}</li></ol>"""

def verify_open(t):
    return f"""<details open><summary>{t["verify"]}</summary><div class="dbody"><p class="small" style="margin:0 0 10px">equipe-android-0.2.0.apk · 25 MB · 2026-11-08</p>
<p class="dl">{t["vFile"]}</p><div class="hash" style="display:flex;gap:8px;align-items:flex-start"><span style="flex:1;min-width:0;word-break:break-all">{FILE_SHA}</span><b style="font:600 13px var(--sans);color:var(--accent)">{t["copy"]}</b></div>
<p class="dl">{t["vCert"]}</p><div class="hash" style="display:flex;gap:8px;align-items:flex-start"><span style="flex:1;min-width:0;word-break:break-all">{CERT_SHA}</span><b style="font:600 13px var(--sans);color:var(--accent)">{t["copy"]}</b></div>
<p class="small muted" style="margin:0">{t["vHow"]} <code>shasum -a 256 equipe-android-0.2.0.apk</code> · <a href="#">{t["vLink"]}</a></p></div></details>"""

def a_home_ios(t, lang):
    body = header(t) + f"""<main><section><div class="wrap"><h1>{t["heroT"]}</h1><p class="lead">{t["heroLead"]}</p>
<div style="display:grid;gap:12px;margin-top:28px"><a class="btn primary lg block" href="#">{t["mac"]}</a><a class="btn lg block" href="#">{t["heroIosBtn"]}</a></div>
<p class="meta" style="margin-top:12px">{t["heroIosNote"]}</p>
<p class="meta" style="margin-top:16px">{t["req"]}</p></div></section></main>"""
    return page(lang, body, 'A home ios')

def a_ios(t, lang):
    body = header(t, cta_ghost=True) + f"""<main><section style="padding-bottom:40px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:28px">{appstore(t, big=True)}</div><p class="meta">{t["iosMeta"]}</p>
<p class="small" style="margin-top:16px;padding:12px 14px;border-radius:8px;background:var(--code-bg)">{t["needMacPhone"]} <a href="#">{t["cSend"]}</a></p>
<p style="margin-top:8px;font-size:16px"><a href="#">{t["otherDroid"]}</a></p></div></section><hr>
{pair_section(t)}</main>""" + footer(t)
    return page(lang, body, 'A ios')

def a_droid(t, lang):
    body = header(t, cta_ghost=True) + f"""<main><section style="padding-bottom:40px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="margin-top:28px">{apkbtn(t)}</div><p class="meta">{t["apkSub"]} · {t["droidMeta"]}</p>
<p class="small" style="margin-top:16px;padding:12px 14px;border-radius:8px;background:var(--code-bg)">{t["needMacPhone"]} <a href="#">{t["cSend"]}</a></p>
<h3 style="margin:28px 0 12px">{t["installH"]}</h3>{install_steps(t)}
<p class="small muted" style="margin-top:16px">{t["update"]} {t["push"]}</p>
<div style="margin-top:12px">{verify_open(t)}</div>
<p style="margin-top:16px;font-size:16px"><a href="#">{t["otherIos"]}</a></p></div></section><hr>
{pair_section(t)}</main>""" + footer(t)
    return page(lang, body, 'A android')

def a_mac(t, lang):
    q = qr('qr-ko' if lang == 'ko' else 'qr-en', 112); url = 'equipe.im/ko/app' if lang == 'ko' else 'equipe.im/app'
    body = header(t, current='phone', phone_nav=True) + f"""<main>
<section style="padding-bottom:48px"><div class="wrap"><h1>{t["h1"]}</h1><p class="lead">{t["lead"]}</p>
<div style="display:flex;align-items:center;gap:20px;margin-top:32px"><a class="btn primary lg" href="#" data-primary>{t["mac"]}</a><span class="meta" style="margin:0">{t["macFirst"]}</span></div>
<div style="margin-top:40px;display:grid;grid-template-columns:auto 1fr 1fr;gap:40px;align-items:start;padding:28px;border-radius:12px;box-shadow:0 0 0 1px var(--line)">
 <div style="display:grid;gap:8px;justify-items:start"><span class="qrbox" style="padding:8px">{q}</span><p class="meta" style="margin:0;font-family:var(--mono)">{url}</p></div>
 <div><h3>{t["qrT"]}</h3><p class="muted" style="margin:4px 0 0;font-size:16px">{t["qrS"]}</p></div>
 <div style="display:grid;gap:16px;align-content:start"><div><b>iPhone</b><p class="meta" style="margin:0 0 8px">{t["iosMeta"]}</p>{appstore(t)}</div>
 <div><b>Android</b><p class="meta" style="margin:0 0 8px">{t["droidMeta"]}</p><a class="btn sm" href="#">{DOWN}{t["apkShort"]}</a> <a href="#" class="small" style="margin-left:8px">{t["droidHelp"]}</a></div></div>
</div></div></section><hr>
{pair_section(t, wide=True)}
</main>""" + footer(t)
    return page(lang, body, 'A mac')

def b_mac(t, lang):
    body = header(t) + f"""<main><section style="padding-top:24px"><div class="wrap"><picture style="display:block;margin:0 -24px"><source media="(prefers-color-scheme: dark)" srcset="file://{HERE.resolve()}/gs-dark.png"><img src="file://{HERE.resolve()}/gs-light.png" style="width:100%;display:block" alt=""></picture>
<div id="phone" style="margin-top:40px;padding-top:40px;border-top:1px solid var(--line);display:grid;grid-template-columns:auto 1fr 1fr;gap:40px;align-items:start">
<span class="qrbox" style="padding:8px">{qr("qr-b-ko" if lang == "ko" else "qr-b-en", 120)}</span>
<div><h3 style="font-size:24px">{t["bH"]}</h3><p class="muted" style="margin:6px 0 16px">{t["bLeadMac"]}</p>
<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">{appstore(t)}<a class="btn" href="#">{DOWN}{t["apkShort"]}</a></div></div>
<div><b>{t["pairH"]}</b>{pair_short(t)}</div></div>
</div></section></main>""" + footer(t)
    return page(lang, body, 'B mac')

FRAMES = {
  'A-mac': a_mac, 'A-home-ios': a_home_ios, 'A-ios': a_ios, 'A-android': a_droid,
  'B-mac': b_mac, 'B-ios': lambda t, l: b_phone(t, l, 'ios'), 'B-android': lambda t, l: b_phone(t, l, 'droid'),
  'C-mac': c_mac, 'C-ios': c_ios, 'C-android': c_droid,
}
for lang, t in T.items():
    for k, f in FRAMES.items():
        (OUT / f'{k}.{lang}.html').write_text(f(t, lang))
print('ok', len(list(OUT.glob('*.html'))))
