# Direction A — 관제 패널 (Console). Dense, instrument-panel grid; the real app window is the hero; amber lamps are the only colour.
from parts import *

CSS = r'''
:root{--bg:#F4F4F2;--sf:#FFFFFF;--sf2:#EBEBE7;--ln:#D9D9D4;--tx:#0E0F11;--mu:#565B63;--sig:#A65008;--lamp:#E08A00;--pri:#0E0F11;--on-pri:#FFFFFF;--win:#FFFFFF;
 --sans:Geist,Pretendard,system-ui,sans-serif;--mono:'Geist Mono',ui-monospace,monospace}
@media (prefers-color-scheme:dark){:root{--bg:#0A0B0D;--sf:#111317;--sf2:#171A1F;--ln:#24272D;--tx:#ECEDEF;--mu:#8F959E;--sig:#F2A93B;--lamp:#F2A93B;--pri:#ECEDEF;--on-pri:#0A0B0D;--win:#0E1013}}
:lang(ko){--sans:Pretendard,Geist,system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--tx);font:400 16px/1.55 var(--sans);-webkit-font-smoothing:antialiased}
:lang(ko) body{word-break:keep-all}
a{color:inherit;text-decoration:none}
.wrap{max-width:1200px;margin:0 auto;padding:0 32px;position:relative}
.rail{border-left:1px solid var(--ln);border-right:1px solid var(--ln)}
.ic{display:inline-flex;width:16px;height:16px}.ic svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.btn{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:8px;border:1px solid var(--ln);font:500 15px/1 var(--sans);color:var(--tx);background:transparent;white-space:nowrap}
.btn.pri{background:var(--pri);color:var(--on-pri);border-color:var(--pri)}
.btn.sm{height:32px;padding:0 12px;font-size:14px}
.btn.wide{width:100%;justify-content:center;height:48px}
.btn em{font-style:normal;font-size:12px;opacity:.7}
kbd{font:500 11px/1 var(--mono);padding:3px 5px;border-radius:4px;border:1px solid currentColor;opacity:.55}
.mono{font-family:var(--mono)}
.st{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--mu);opacity:.5;flex:none}
.s-working .st,.st.on{background:var(--lamp);opacity:1;box-shadow:0 0 0 3px color-mix(in srgb,var(--lamp) 22%,transparent)}
.s-turn .st{background:transparent;border:1.5px solid var(--tx);opacity:1}
.s-done .st{background:var(--mu);opacity:.9}
/* header */
.top{border-bottom:1px solid var(--ln);background:var(--bg)}
.top .wrap{display:flex;align-items:center;gap:32px;height:60px}
.logo{display:flex;color:var(--tx)}
.top nav{display:flex;gap:24px;font-size:14px;color:var(--mu)}
.top .btn{margin-left:auto}
/* hero */
.hero{padding:44px 0 0}
.hr{display:flex;align-items:center;gap:40px;margin-top:22px}
.hr .lead{margin-top:0;font-size:18px;max-width:470px}
.hr .ctas{margin-top:0}.hg .req{margin-top:14px}
h1{font:600 60px/1.02 var(--sans);letter-spacing:-.035em;max-width:880px}
:lang(ko) h1{font-size:50px;letter-spacing:-.03em;line-height:1.12}
.lead{margin-top:24px;font-size:20px;color:var(--mu);max-width:560px}
.ctas{display:flex;align-items:center;gap:20px;margin-top:28px}
.ctas .btn.pri{height:48px;padding:0 22px;font-size:16px}
.ctas .lnk{font-size:15px;color:var(--mu);display:inline-flex;gap:6px;align-items:center}
.req{margin-top:16px;font:400 13px/1.5 var(--mono);color:var(--mu)}
.stage{margin-top:36px}
.cap{font:400 12px/1.4 var(--mono);color:var(--mu);margin:14px 0 0}
/* app window */
.win{border:1px solid var(--ln);border-radius:12px;background:var(--win);overflow:hidden;font-size:13px}
.bar3{display:flex;align-items:center;gap:7px;height:38px;padding:0 14px;border-bottom:1px solid var(--ln)}
.bar3>i{width:10px;height:10px;border-radius:50%;background:var(--sf2);border:1px solid var(--ln)}
.wt{margin-left:10px;color:var(--mu);font-size:12px}
.now{margin-left:auto;display:flex;align-items:center;gap:8px;font:400 12px var(--mono);color:var(--mu)}
.wb{display:grid;grid-template-columns:200px 1fr 380px}
.dock .dec{box-shadow:0 0 0 1px var(--mu)}.dock .dec .q{font-size:18px}
.side{border-right:1px solid var(--ln);padding:12px 10px;display:flex;flex-direction:column;gap:2px;color:var(--mu)}
.side .it{display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:6px}
.side .it.on{background:var(--sf2);color:var(--tx)}
.badge{margin-left:auto;font:500 11px/1 var(--mono);background:var(--tx);color:var(--bg);border-radius:9px;padding:3px 6px}
.side h5{font:500 11px var(--mono);margin:14px 8px 4px;color:var(--mu)}
.side h5 span{opacity:.7}
.tm{display:flex;align-items:center;gap:9px;padding:5px 8px}
.tm b{font-weight:500;color:var(--tx)}.tm em{margin-left:auto;font-style:normal;font-size:12px}
.s-turn em{color:var(--tx)}.s-working em{color:var(--sig)}
.foot{margin-top:auto;display:flex;align-items:center;gap:8px;padding:8px;border-top:1px solid var(--ln)}
.foot span{margin-left:auto;font-size:12px}
.main{padding:0}
.mh{display:flex;gap:8px;align-items:baseline;padding:14px 18px;border-bottom:1px solid var(--ln)}
.mh span{color:var(--mu);font-family:var(--mono);font-size:12px}
.act{font-size:12px;color:var(--mu)}.row.s-turn{background:var(--sf2);box-shadow:inset 2px 0 0 var(--tx)}.row.s-turn .act{color:var(--tx)}
.mh.dn{border-top:0;padding-top:20px}.rows.dn .row{opacity:.72}.rows.dn .row:last-child{border-bottom:0}
.trail{border-top:1px solid var(--ln);padding-top:14px}.trail h6{font:500 11px var(--mono);color:var(--mu);margin-bottom:8px}
.trail ol{list-style:none;display:flex;flex-direction:column;gap:7px}.trail li{display:grid;grid-template-columns:40px 66px 1fr;gap:8px;font-size:12.5px;align-items:baseline}
.trail time{font:400 11.5px var(--mono);color:var(--mu)}.trail b{font-weight:500;color:var(--mu)}
.next{display:flex;gap:8px;font-size:12.5px;color:var(--mu);line-height:1.45}.next .ic{width:14px;height:14px;flex:none;margin-top:2px;color:var(--sig)}
.row{display:grid;grid-template-columns:44px 1fr 76px 88px 150px;align-items:center;gap:10px;padding:12px 18px;border-bottom:1px solid var(--ln)}
.row .id{font:400 12px var(--mono);color:var(--mu)}.row .who{color:var(--mu);font-size:12px}
.row .state{display:flex;align-items:center;gap:7px;font-size:12px}
.row.s-working .state{color:var(--sig)}
.bar{height:3px;background:var(--sf2);border-radius:2px;overflow:hidden}.bar i{display:block;height:100%;background:var(--mu);opacity:.6}
.s-working .bar i{background:var(--lamp);opacity:1}
.dock{border-left:1px solid var(--ln);padding:18px;display:flex;flex-direction:column;gap:12px;background:var(--sf)}
.dec{border:1px solid var(--ln);border-radius:10px;padding:16px;background:var(--win)}
.dec .k{display:flex;align-items:center;gap:8px;font:400 11.5px var(--mono);color:var(--mu)}
.lampdot{width:7px;height:7px;border-radius:50%;border:1.5px solid var(--tx)}
.dec .q{display:block;font-size:16px;font-weight:600;margin:10px 0 6px;letter-spacing:-.01em}
.dec .qx{color:var(--mu);font-size:13px;line-height:1.5}
.dec .b{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.dec .btn{height:34px;font-size:13px;padding:0 12px}
.dec.big{padding:28px;border-radius:14px}.dec.big .q{font-size:24px}.dec.big .qx{font-size:15px}.dec.big .btn{height:42px;font-size:15px}
.live{display:flex;align-items:center;gap:10px;border:1px solid var(--ln);border-radius:10px;padding:12px 14px;font-size:13px}
.live .ic{color:var(--sig)}.live div{display:flex;flex-direction:column}.live span{color:var(--mu);font-size:12px}.live em{margin-left:auto;font-style:normal;color:var(--mu);font-size:12px}
/* sections */
section.blk{padding:120px 0;border-top:1px solid var(--ln)}
h2{font:600 44px/1.08 var(--sans);letter-spacing:-.03em;max-width:760px}
:lang(ko) h2{font-size:40px;line-height:1.2}
.panels{display:grid;grid-template-columns:repeat(3,1fr);margin-top:56px;border:1px solid var(--ln);border-radius:12px;overflow:hidden}
.panels>div{padding:28px;border-right:1px solid var(--ln);min-height:220px;display:flex;flex-direction:column}
.panels>div:last-child{border-right:0}
.panels .n{font:400 12px var(--mono);color:var(--mu)}
.panels h3{font:600 20px/1.3 var(--sans);margin-top:auto;letter-spacing:-.01em}
.panels p{color:var(--mu);margin-top:8px;font-size:15px}
.panels>div:last-child .n{color:var(--sig)}
.split{display:grid;grid-template-columns:5fr 7fr;gap:64px;align-items:center}
.split p.x{color:var(--mu);font-size:18px;margin-top:20px;max-width:440px}
.stack{display:flex;flex-direction:column;gap:12px}
.phone{width:300px;height:600px;border:1px solid var(--ln);border-radius:44px;background:var(--win);padding:52px 14px 14px;position:relative;margin:0 auto;display:flex;flex-direction:column;gap:12px;font-size:13px}
.notch{position:absolute;top:14px;left:50%;width:96px;height:26px;border-radius:14px;background:var(--bg);transform:translateX(-50%);border:1px solid var(--ln)}
.ps{position:absolute;top:18px;left:28px;font:600 12px var(--sans)}
.pt{display:flex;align-items:center;gap:8px;font-size:18px;padding:0 4px}
.pt .badge{margin-left:0}
.pmini{border-top:1px solid var(--ln);padding-top:8px}
.store{margin-top:28px}
.proof{display:grid;grid-template-columns:repeat(3,1fr);margin-top:64px;border-top:1px solid var(--ln)}
.proof div{padding:24px 0}.proof b{display:block;font:500 56px/1 var(--mono);letter-spacing:-.04em}.proof span{color:var(--mu);font-size:14px}
.end{text-align:left}
.proofl{display:flex;align-items:center;gap:10px;margin-top:56px;padding-top:24px;border-top:1px solid var(--ln);font:400 14px var(--mono);color:var(--mu)}
.end .ctas{margin-top:32px}
footer{border-top:1px solid var(--ln);padding:28px 0;color:var(--mu);font-size:13px}
footer .wrap{display:flex;gap:24px;align-items:center}footer .logo{margin-right:auto}
.pb{display:grid;gap:10px}.pnext .hint{margin:12px 0 0}
.only-phone{display:none}
.hint{font-size:13px;color:var(--mu);margin:8px 0 18px;text-align:center}.hint .cp{color:var(--tx);text-decoration:underline;text-underline-offset:3px;white-space:nowrap}
.pn{font-size:15px;margin-bottom:14px}

@media (max-width:1100px) and (min-width:641px){.wt{display:none}.wb{grid-template-columns:1fr 320px}.side{display:none}.now{font-size:11px}.row{grid-template-columns:44px 1fr 96px}.row .who,.row .act{display:none}.bar3{height:auto;min-height:38px;flex-wrap:wrap;padding:8px 14px}}
@media (max-width:640px){
 .wrap{padding:0 20px}
 .top nav,.top .btn{display:none}
 .top .wrap{height:56px}
 .hero{padding:48px 0 0}
 .hg{grid-template-columns:1fr;gap:16px}
 h1{font-size:44px;letter-spacing:-.03em}:lang(ko) h1{font-size:32px;line-height:1.25}
 .lead{font-size:17px;margin-top:16px}
 .only-desk{display:none!important}.only-phone{display:block}
 .pnext{margin-top:28px}
 .stage{margin-top:40px;padding-top:24px}
 .wb{grid-template-columns:1fr}.side{display:none}.wt{display:none}
 .row{grid-template-columns:40px 1fr 84px;padding:10px 14px}.row .who,.row .act{display:none}
 .row:nth-child(n+3){display:none}.mh.dn,.rows.dn,.trail{display:none}.next{font-size:12px}
 .hr{flex-direction:column;align-items:flex-start;gap:0}.hr .lead{margin-top:16px}.win .dec .qx{display:none}.mh{padding:10px 14px}
 .dock{border-left:0;border-top:1px solid var(--ln);padding:14px}
 .win{min-height:0}.wb{min-height:0}
 .now{font-size:11px}
 section.blk{padding:72px 0}
 h2{font-size:30px}:lang(ko) h2{font-size:28px}
 .panels{grid-template-columns:1fr}.panels>div{border-right:0;border-bottom:1px solid var(--ln);min-height:0}.panels h3{margin-top:24px}
 .split{grid-template-columns:1fr;gap:40px}
 .proof b{font-size:36px}
 .phone{width:260px;height:520px}
 footer .wrap{flex-wrap:wrap}
}
'''

def page(c):
  h = head(c, 'a', 'Direction A', CSS)
  nav = ''.join(f'<a href="#">{n}</a>' for n in c['nav'])
  return h + f'''
<header class="top"><div class="wrap">{wordmark(22)}<nav>{nav}</nav><a class="btn pri sm" href="#">{c['cta']}</a></div></header>
<main>
<section class="hero"><div class="wrap">
  <div class="hg"><h1>{c['title_a']}<br>{c['title_b']}</h1>
  <div class="hr"><p class="lead">{c['lead']}</p>
  <div class="ctas only-desk"><a class="btn pri" href="#" data-primary>{c['cta']}</a><a class="lnk" href="#">{c['cli']} {ic('arrow')}</a></div></div>
  <p class="req only-desk">{c['req']}</p></div>
  {phone_next(c)}
  <div class="stage">{window(c, scene=True)}<p class="cap">{c['frame']}</p></div>
</div></section>
<section class="blk"><div class="wrap">
  <h2>{c['how_t']}</h2>
  <div class="panels">{''.join(f'<div><span class="n">0{i+1}</span><h3>{t}</h3><p>{x}</p></div>' for i,(t,x) in enumerate(c['steps']))}</div>
</div></section>
<section class="blk"><div class="wrap split">
  <div><h2>{c['appr_t']}</h2><p class="x">{c['appr_x']}</p></div>
  <div class="stack">{decision(c, big=True)}{live(c)}</div>
</div></section>
<section class="blk"><div class="wrap split">
  <div><h2>{c['phone_t']}</h2><p class="x">{c['phone_x']}</p><a class="btn store" href="#">{ic('apple')}{c['p_app']}</a></div>
  <div>{phone(c)}</div>
</div></section>
<section class="blk end"><div class="wrap">
  <h2>{c['end_t']}</h2>
  <div class="ctas only-desk"><a class="btn pri" href="#">{c['cta']}</a><a class="lnk" href="#">{c['cli']} {ic('arrow')}</a></div>
  <p class="req only-desk">{c['req']}</p>
  {phone_next(c).replace(' data-primary','')}
  <p class="proofl"><i class="st on"></i>{c['proof_line']}</p>
</div></section>
</main>
<footer><div class="wrap">{wordmark(18)}{''.join(f'<a href="#">{f}</a>' for f in c['foot'])}</div></footer>
</body></html>'''
