# Direction B — 근무 일지 (Log). Editorial and slow: a serif headline, and the squad's day as a timestamped log is the hero.
# Warm ink and paper; one green "live" light. Low density, wide margins.
from parts import *

CSS = r'''
:root{--bg:#F3F0E8;--sf:#FBF9F4;--sf2:#E9E5DA;--ln:#DCD6C8;--tx:#1A1916;--mu:#5F5A50;--sig:#1D7044;--lamp:#2E9E5E;--pri:#1A1916;--on-pri:#F7F4EC;--win:#FBF9F4;
 --serif:'Instrument Serif',MaruBuri,Georgia,serif;--sans:Inter,Pretendard,system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace}
@media (prefers-color-scheme:dark){:root{--bg:#100F0D;--sf:#181714;--sf2:#211F1B;--ln:#2D2A25;--tx:#EDE8DD;--mu:#A39D90;--sig:#62D394;--lamp:#62D394;--pri:#EDE8DD;--on-pri:#100F0D;--win:#151412}}
:lang(ko){--serif:MaruBuri,'Instrument Serif',serif;--sans:Pretendard,Inter,system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--tx);font:400 17px/1.6 var(--sans);-webkit-font-smoothing:antialiased}
:lang(ko) body{word-break:keep-all}
a{color:inherit;text-decoration:none}
.wrap{max-width:1180px;margin:0 auto;padding:0 40px}
.ic{display:inline-flex;width:16px;height:16px}.ic svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.btn{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 20px;border-radius:999px;border:1px solid var(--ln);font:500 15px/1 var(--sans);color:var(--tx);white-space:nowrap}
.btn.pri{background:var(--pri);color:var(--on-pri);border-color:var(--pri)}
.btn.wide{width:100%;justify-content:center;height:50px}
.btn.xs{height:26px;padding:0 10px;font-size:12px}
.btn em{font-style:normal;font-size:12px;opacity:.7}
kbd{font:400 11px/1 var(--mono);padding:3px 5px;border-radius:4px;border:1px solid currentColor;opacity:.5}
.st{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--mu);opacity:.45;flex:none}
.s-working .st,.st.on,.last .st{background:var(--lamp);opacity:1;box-shadow:0 0 0 4px color-mix(in srgb,var(--lamp) 20%,transparent)}
.s-turn .st{background:transparent;border:1.5px solid var(--tx);opacity:1}
.top .wrap{display:flex;align-items:center;gap:28px;height:76px}
.logo{display:flex;margin-right:auto}
.top nav{display:flex;gap:28px;font-size:15px;color:var(--mu)}
.top .dl{font-size:15px;font-weight:500;display:inline-flex;gap:6px;align-items:center;border-bottom:1px solid var(--tx);padding-bottom:2px}
.hero{padding:72px 0 120px}
.hero .wrap{display:grid;grid-template-columns:6fr 5fr;gap:72px;align-items:start}
h1{font:400 72px/1.02 var(--serif);letter-spacing:-.02em}h1 span{display:block}
:lang(ko) h1{font-size:50px;line-height:1.22;letter-spacing:-.03em;font-weight:600}
.lead{margin-top:28px;font-size:20px;color:var(--mu);max-width:460px}
.ctas{display:flex;align-items:center;gap:22px;margin-top:36px}
.ctas .lnk{font-size:15px;color:var(--mu);display:inline-flex;gap:6px;align-items:center}
.req{margin-top:18px;font-size:13px;color:var(--mu)}
.logc{background:var(--sf);border:1px solid var(--ln);border-radius:20px;padding:28px 28px 20px;margin-top:8px}
.logc h2{font:400 26px/1.2 var(--serif);margin-bottom:18px;display:flex;align-items:center;gap:10px}
:lang(ko) .logc h2{font-size:21px;font-weight:600}
.logc h2 .st{background:var(--lamp);opacity:1}
.log{list-style:none;position:relative}
.lg{display:grid;grid-template-columns:52px 96px 1fr;gap:10px;padding:13px 0;border-top:1px solid var(--ln);font-size:15.5px;align-items:baseline}
.lg time{font:400 13px var(--mono);color:var(--mu)}
.lg .who{display:flex;align-items:center;gap:7px;color:var(--mu);font-size:13px}
.lg.you .who{color:var(--tx);font-weight:600}.lg.you .st{background:var(--tx);opacity:1}
.lg small{font:400 11px var(--mono);color:var(--mu);margin-left:6px;white-space:nowrap}.lg .ws{white-space:nowrap}
.lg .lb{display:flex;gap:6px;margin-top:8px}
.lg .ws{font-style:normal;font-size:12px;color:var(--sig);margin-left:8px}
.lg.pend{background:var(--bg);margin:6px -14px 0;padding:14px;border-radius:12px;border-top:0}
.lg.pend b{font-weight:600}.st.ring{background:transparent;border:1.5px solid var(--tx);opacity:1}
.lg.then{display:block;border-top:0;padding:10px 0 0;color:var(--sig);font-size:14px}
.lg.more{display:block;color:var(--mu);font-size:13px;border-top:0;padding-top:14px}
.cap{font-size:13px;color:var(--mu);margin-top:14px}
section.blk{padding:140px 0}
section.alt{background:var(--sf)}
h2.big{font:400 64px/1.04 var(--serif);letter-spacing:-.015em;max-width:820px}
:lang(ko) h2.big{font-size:44px;line-height:1.25;font-weight:600;letter-spacing:-.025em}
.steps{margin-top:64px;border-top:1px solid var(--tx)}
.steps>div{display:grid;grid-template-columns:120px 5fr 6fr;gap:32px;padding:32px 0;border-bottom:1px solid var(--ln);align-items:baseline}
.steps .n{font:400 44px/1 var(--serif);color:var(--mu)}
.steps h3{font:400 32px/1.15 var(--serif)}
:lang(ko) .steps h3{font-size:24px;font-weight:600}
.steps p{color:var(--mu);font-size:17px}
.steps>div:last-child .n{color:var(--sig)}
.win{border:1px solid var(--ln);border-radius:14px;background:var(--win);overflow:hidden;font-size:13px;margin-top:64px}
.bar3{display:flex;align-items:center;gap:7px;height:38px;padding:0 14px;border-bottom:1px solid var(--ln)}
.bar3>i{width:10px;height:10px;border-radius:50%;background:var(--sf2)}
.wt{margin-left:10px;color:var(--mu);font-size:12px}
.now{margin-left:auto;display:flex;align-items:center;gap:8px;font:400 12px var(--mono);color:var(--mu)}
.wb{display:grid;grid-template-columns:200px 1fr 330px}
.side{border-right:1px solid var(--ln);padding:12px 10px;display:flex;flex-direction:column;gap:2px;color:var(--mu)}
.side .it{display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:8px}
.side .it.on{background:var(--sf2);color:var(--tx)}
.badge{margin-left:auto;font:500 11px/1 var(--mono);background:var(--tx);color:var(--bg);border-radius:9px;padding:3px 6px}
.side h5{font:500 12px var(--sans);margin:14px 8px 4px;color:var(--mu)}
.tm{display:flex;align-items:center;gap:9px;padding:5px 8px}
.tm b{font-weight:500;color:var(--tx)}.tm em{margin-left:auto;font-style:normal;font-size:12px}
.s-working em{color:var(--sig)}
.foot{margin-top:auto;display:flex;align-items:center;gap:8px;padding:8px;border-top:1px solid var(--ln)}.foot span{margin-left:auto;font-size:12px}
.mh{display:flex;gap:8px;align-items:baseline;padding:14px 18px;border-bottom:1px solid var(--ln)}.mh span{color:var(--mu);font-size:12px}
.row{display:grid;grid-template-columns:44px 1fr 76px 84px 150px;align-items:center;gap:10px;padding:12px 18px;border-bottom:1px solid var(--ln)}
.row .id{font:400 12px var(--mono);color:var(--mu)}.row .who{color:var(--mu);font-size:12px}
.row .state{display:flex;align-items:center;gap:7px;font-size:12px}.row.s-working .state{color:var(--sig)}
.act{font-size:12px;color:var(--mu)}.row.s-turn{background:var(--sf2)}
.dock{border-left:1px solid var(--ln);padding:18px;background:var(--sf)}
.dec{border:1px solid var(--ln);border-radius:14px;padding:18px;background:var(--win)}
.dec .k{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--mu)}
.lampdot{width:7px;height:7px;border-radius:50%;border:1.5px solid var(--tx)}
.dec .q{display:block;font:600 16px/1.35 var(--sans);margin:10px 0 6px}
.dec .qx{color:var(--mu);font-size:13px;line-height:1.55}
.dec .b{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}.dec .btn{height:34px;font-size:13px;padding:0 14px}
.dec.big{padding:28px}.dec.big .q{font:400 30px/1.15 var(--serif)}:lang(ko) .dec.big .q{font:600 22px/1.35 var(--sans)}
.dec.big .qx{font-size:15px}.dec.big .btn{height:44px;font-size:15px}
.live{display:flex;align-items:center;gap:10px;border-radius:14px;padding:14px 16px;font-size:14px;background:var(--sf2);margin-top:12px}
.live .ic{color:var(--sig)}.live div{display:flex;flex-direction:column}.live span{color:var(--mu);font-size:12px}.live em{margin-left:auto;font-style:normal;color:var(--mu);font-size:12px}
.quote{display:grid;grid-template-columns:7fr 5fr;gap:80px;align-items:center}
.quote p.x{color:var(--mu);font-size:19px;margin-top:24px;max-width:520px}
.phone{width:290px;height:590px;border:1px solid var(--ln);border-radius:46px;background:var(--win);padding:54px 14px 14px;position:relative;margin:0 auto;display:flex;flex-direction:column;gap:12px;font-size:13px}
.notch{position:absolute;top:14px;left:50%;width:92px;height:26px;border-radius:14px;background:var(--tx);transform:translateX(-50%)}
.ps{position:absolute;top:18px;left:30px;font:600 12px var(--sans)}
.pt{display:flex;align-items:center;gap:8px;font:400 24px var(--serif);padding:0 4px}:lang(ko) .pt{font:600 18px var(--sans)}
.pt .badge{margin-left:0}
.pmini{border-top:1px solid var(--ln);padding-top:8px}
.store{margin-top:32px}
.end{text-align:center}
.end h2.big{margin:0 auto}
.end .ctas{justify-content:center}
.end .proofl{margin-top:48px;font:400 22px var(--serif);color:var(--mu)}:lang(ko) .end .proofl{font:500 17px var(--sans)}
footer{padding:36px 0;color:var(--mu);font-size:14px;border-top:1px solid var(--ln)}
footer .wrap{display:flex;gap:28px;align-items:center}footer .logo{margin-right:auto}
.pb{display:grid;gap:10px}.pnext .hint{margin:12px 0 0}
.only-phone{display:none}
.hint{font-size:13px;color:var(--mu);margin:8px 0 18px;text-align:center}.hint .cp{color:var(--tx);text-decoration:underline;text-underline-offset:3px;white-space:nowrap}
.pn{font-size:15px;margin-bottom:14px}

@media (max-width:1100px) and (min-width:641px){.wt{display:none}.wb{grid-template-columns:1fr 320px}.side{display:none}.now{font-size:11px}}
@media (max-width:640px){
 .wrap{padding:0 20px}
 .top nav{display:none}.top .wrap{height:60px}
 .hero{padding:36px 0 72px}
 .hero .wrap{grid-template-columns:1fr;gap:36px}
 h1{font-size:54px}:lang(ko) h1{font-size:29px;letter-spacing:-.05em}
 .lead{font-size:18px;margin-top:18px}
 .only-desk{display:none!important}.only-phone{display:block}
 .pnext{margin-top:28px}
 .logc{padding:20px 18px 12px;border-radius:16px}
 .lg{grid-template-columns:42px 1fr;gap:4px 8px}.lg .who{grid-column:2}.lg .tx{grid-column:2}
 .lg:nth-child(2){display:none}.lg.pend{margin:6px -10px 0;padding:12px 10px}
 section.blk{padding:80px 0}
 h2.big{font-size:40px}:lang(ko) h2.big{font-size:28px}
 .steps>div{grid-template-columns:44px 1fr;gap:6px 14px}.steps p{grid-column:2}.steps .n{font-size:30px}.steps h3{font-size:24px}
 .wb{grid-template-columns:1fr}.side,.wt{display:none}.row{grid-template-columns:40px 1fr 80px}.row .who,.row .act{display:none}.row:nth-child(n+4){display:none}
 .dock{border-left:0;border-top:1px solid var(--ln);padding:14px}
 .win{margin-top:40px}
 .quote{grid-template-columns:1fr;gap:40px}
 .phone{width:260px;height:530px}
 footer .wrap{flex-wrap:wrap;gap:18px}
}
'''

def page(c):
  h = head(c, 'b', 'Direction B', CSS)
  nav = ''.join(f'<a href="#">{n}</a>' for n in c['nav'])
  u = c['ui']
  now = [('10:18', 'designer', 'T-12', u['rows'][2][1]), ('11:02', 'backend', 'T-13', u['rows'][3][1]), ('11:40', 'frontend', 'T-8', u['rows'][1][1])]
  lis = ''.join(f'<li class="lg s-working"><time>{t}</time><span class="who"><i class="st"></i>{w}</span><span class="tx">{tt} <small>{i}</small><em class="ws">{u["working"]}</em></span></li>' for t, w, i, tt in now)
  lis += f'<li class="lg pend"><time>13:05</time><span class="who"><i class="st ring"></i>pm</span><span class="tx"><b>{u["q"]}</b> <small>T-5</small><span class="lb"><span class="btn pri xs">{u["pub"]}</span><span class="btn xs">{u["hold"]}</span></span></span></li>'
  lis += f'<li class="lg then">→ {c["then"]}</li>'
  lis += f'<li class="lg more"><span class="tx">{c["earlier"]} ▸</span></li>'
  return h + f'''
<header class="top"><div class="wrap">{wordmark(22)}<nav>{nav}</nav><a class="dl only-desk" href="#">{c['cta']} {ic('arrow')}</a></div></header>
<main>
<section class="hero"><div class="wrap">
  <div>
    <h1>{''.join(f'<span>{x}</span>' for x in c['title_3'])}</h1>
    <p class="lead">{c['lead']}</p>
    <div class="ctas only-desk"><a class="btn pri" href="#" data-primary>{c['cta']}</a><a class="lnk" href="#">{c['cli']} {ic('arrow')}</a></div>
    <p class="req only-desk">{c['req']}</p>
    {phone_next(c)}
  </div>
  <div><div class="logc" role="img" aria-label="{c['frame']}"><h2><i class="st"></i>{c['log_t']}</h2><ol class="log">{lis}</ol></div><p class="cap">{c['frame']}</p></div>
</div></section>
<section class="blk alt"><div class="wrap">
  <h2 class="big">{c['how_t']}</h2>
  <div class="steps">{''.join(f'<div><span class="n">{i+1}</span><h3>{t}</h3><p>{x}</p></div>' for i,(t,x) in enumerate(c['steps']))}</div>
  {window(c)}
</div></section>
<section class="blk"><div class="wrap quote">
  <div><h2 class="big">{c['appr_t']}</h2><p class="x">{c['appr_x']}</p></div>
  <div>{decision(c, big=True)}{live(c)}</div>
</div></section>
<section class="blk alt"><div class="wrap quote">
  <div>{phone(c)}</div>
  <div><h2 class="big">{c['phone_t']}</h2><p class="x">{c['phone_x']}</p><a class="btn store" href="#">{ic('apple')}{c['p_app']}</a></div>
</div></section>
<section class="blk end"><div class="wrap">
  <h2 class="big">{c['end_t']}</h2>
  <div class="ctas only-desk"><a class="btn pri" href="#">{c['cta']}</a><a class="lnk" href="#">{c['cli']} {ic('arrow')}</a></div>
  <p class="req only-desk">{c['req']}</p>
  {phone_next(c).replace(' data-primary','')}
  <p class="proofl">{c['proof_line']}</p>
</div></section>
</main>
<footer><div class="wrap">{wordmark(18)}{''.join(f'<a href="#">{f}</a>' for f in c['foot'])}</div></footer>
</body></html>'''
