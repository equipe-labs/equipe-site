# Direction C — 점 하나 (One dot). Bolder: poster-scale type, and the decision card itself is the hero object, sitting on the dim room of the squad.
# Pure neutrals; the only colour on the page is the logo's own blue dot — the live lamps and the Approve button.
from parts import *

CSS = r'''
:root{--bg:#FFFFFF;--sf:#F3F4F6;--sf2:#E8EAEE;--ln:#E1E3E8;--tx:#0A0B0D;--mu:#545A65;--sig:#2350E0;--lamp:#3F6FF5;--go:#2350E0;--on-go:#FFFFFF;--pri:#0A0B0D;--on-pri:#FFFFFF;--win:#FFFFFF;
 --inv:#0A0B0D;--on-inv:#F3F4F6;--inv-mu:#9097A3;--inv-ln:#22252B;
 --sans:'IBM Plex Sans','IBM Plex Sans KR',system-ui,sans-serif;--mono:'IBM Plex Mono',ui-monospace,monospace}
@media (prefers-color-scheme:dark){:root{--bg:#060708;--sf:#0F1114;--sf2:#16191D;--ln:#202329;--tx:#F3F4F6;--mu:#8D939E;--sig:#7FA0FF;--lamp:#5B86FF;--go:#2F5CEB;--on-go:#FFFFFF;--pri:#F3F4F6;--on-pri:#060708;--win:#0C0E11;
 --inv:#F3F4F6;--on-inv:#0A0B0D;--inv-mu:#545A65;--inv-ln:#D5D8DE}}
:lang(ko){--sans:'IBM Plex Sans KR','IBM Plex Sans',system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--tx);font:400 16px/1.55 var(--sans);-webkit-font-smoothing:antialiased}
:lang(ko) body{word-break:keep-all}
a{color:inherit;text-decoration:none}
.wrap{max-width:1280px;margin:0 auto;padding:0 48px}
.ic{display:inline-flex;width:16px;height:16px}.ic svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.btn{display:inline-flex;align-items:center;gap:10px;height:44px;padding:0 18px;border-radius:4px;border:1px solid var(--ln);font:500 15px/1 var(--sans);color:var(--tx);white-space:nowrap}
.btn.pri{background:var(--pri);color:var(--on-pri);border-color:var(--pri)}
.dec .btn.pri,.btn.go{background:var(--go);color:var(--on-go);border-color:var(--go)}
.btn.wide{width:100%;justify-content:center;height:52px}
.btn em{font-style:normal;font-size:12px;opacity:.8}
kbd{font:400 11px/1 var(--mono);padding:3px 5px;border-radius:3px;border:1px solid currentColor;opacity:.6}
.st{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--mu);opacity:.4;flex:none}
.st.on{background:var(--lamp);opacity:1}.s-working .st{background:var(--mu);opacity:.9}
.s-turn .st{background:transparent;border:1.5px solid var(--tx);opacity:1}
.top .wrap{display:flex;align-items:center;gap:28px;height:64px}
.logo{display:flex;margin-right:auto}
.top nav{display:flex;gap:24px;font-size:14px;color:var(--mu)}
.hero{padding:56px 0 96px;border-bottom:1px solid var(--ln)}
.hero .wrap{display:grid;grid-template-columns:1fr 600px;gap:40px;align-items:center;min-height:560px}
h1{font:600 64px/1.02 var(--sans);letter-spacing:-.04em}
:lang(ko) h1{font-size:48px;line-height:1.18;letter-spacing:-.04em}
h1 span{display:block}
.lead{margin-top:28px;font-size:19px;color:var(--mu);max-width:440px}
.ctas{display:flex;align-items:center;gap:20px;margin-top:36px}
.ctas .btn.pri{height:52px;padding:0 24px;font-size:16px}
.ctas .lnk{font-size:15px;color:var(--mu);display:inline-flex;gap:6px;align-items:center}
.req{margin-top:16px;font:400 12.5px/1.5 var(--mono);color:var(--mu)}
.room{position:relative;padding:0}
.room .bg{border:1px solid var(--ln);border-radius:6px;background:var(--sf);padding:18px 20px;font-size:14px;color:var(--mu)}
.room .bg .tm{display:flex;align-items:center;gap:12px;padding:12px 4px;border-bottom:1px solid var(--ln)}
.room .bg .tm:last-child{border-bottom:0}
.room .bg .tm b{font-weight:500;color:var(--mu)}.room .bg .tm em{margin-left:auto;font-style:normal;font:400 12px var(--mono)}
.room .bg .s-working em{color:var(--mu)}
.room .dec{position:relative;margin:-1px 0 0 0;border-radius:0 0 8px 8px;border-color:var(--tx);box-shadow:0 24px 48px -24px rgba(0,0,0,.35)}
.room .bg{border-radius:6px 6px 0 0}.room .bg .tm.s-turn{background:var(--win);margin:0 -20px -18px;padding:14px 24px;border-top:1px solid var(--tx)}
.room .bg .tm .act{font-size:13px;color:var(--mu);margin-left:auto;text-align:right}.room .bg .tm em{margin-left:16px;width:72px;text-align:right}
.room .bg .tm i.id{font:400 12px var(--mono);font-style:normal;width:40px}
.room .bg .tm .tt{color:var(--tx)}
.room .bg .tm.s-turn{color:var(--tx)}.room .bg .tm.s-turn em{color:var(--tx)}
.room .cap{font:400 12px var(--mono);color:var(--mu);margin-top:12px}
.dec{border:1px solid var(--ln);border-radius:8px;padding:18px;background:var(--win);box-shadow:0 1px 0 var(--ln),0 24px 48px -24px rgba(0,0,0,.28)}
.dec .k{display:flex;align-items:center;gap:8px;font:400 12px var(--mono);color:var(--mu)}
.lampdot{width:8px;height:8px;border-radius:50%;border:1.5px solid var(--tx)}
.dec .q{display:block;font:600 17px/1.3 var(--sans);margin:12px 0 6px;letter-spacing:-.01em}
.dec .qx{color:var(--mu);font-size:13.5px}
.dec .b{display:flex;gap:8px;margin-top:16px;flex-wrap:wrap}.dec .btn{height:36px;font-size:13px;padding:0 12px}
.dec.big{padding:26px}.dec.big .q{font-size:26px;line-height:1.15;letter-spacing:-.025em;margin:12px 0 8px}:lang(ko) .dec.big .q{font-size:24px}
.dec.big .qx{font-size:15px}.dec.big .btn{height:44px;font-size:15px;padding:0 18px}
.proofl .st.on{background:var(--tx)}.proofl{border-bottom:1px solid var(--ln);padding:22px 0;font:400 15px var(--mono);color:var(--mu)}.proofl .wrap{display:flex;align-items:center;gap:12px}
.proof{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--ln)}
.proof div{padding:40px 48px;border-right:1px solid var(--ln)}.proof div:last-child{border-right:0}
.proof b{display:block;font:500 96px/1 var(--mono);letter-spacing:-.06em}.proof span{color:var(--mu);font-size:15px;margin-top:8px;display:block}
section.blk{padding:128px 0}
h2{font:600 56px/1.04 var(--sans);letter-spacing:-.04em;max-width:900px}
:lang(ko) h2{font-size:44px;line-height:1.2}
.cols{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:64px}
.cols>div{display:flex;flex-direction:column;gap:20px}
.cols h3{font:600 22px/1.3 var(--sans);letter-spacing:-.02em}.cols p{color:var(--mu)}
.art{height:200px;border:1px solid var(--ln);border-radius:6px;background:var(--sf);padding:20px;display:flex;flex-direction:column;justify-content:center;gap:8px;font-size:13px}
.bub{align-self:flex-end;background:var(--tx);color:var(--bg);padding:10px 14px;border-radius:14px 14px 4px 14px;font-size:14px}
.bub2{align-self:flex-start;background:var(--win);border:1px solid var(--ln);padding:10px 14px;border-radius:14px 14px 14px 4px;font-size:13px;color:var(--mu);max-width:90%}
.art .tm{display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid var(--ln)}.art .tm:last-child{border-bottom:0}
.art .tm b{font-weight:500}.art .tm em{margin-left:auto;font-style:normal;font:400 12px var(--mono);color:var(--mu)}.art .s-working em{color:var(--mu)}
.art .mini{background:var(--win);border:1px solid var(--ln);border-radius:6px;padding:14px}
.art .mini b{display:block;margin-bottom:10px}.art .mini .b{display:flex;gap:6px}.art .mini .btn{height:30px;font-size:12px;padding:0 10px}
.band{background:var(--bg);color:var(--tx);border-top:1px solid var(--ln);border-bottom:1px solid var(--ln)}
.band .wrap{display:grid;grid-template-columns:7fr 5fr;gap:64px;align-items:end}
.band h2{font-size:56px;line-height:1.04}:lang(ko) .band h2{font-size:44px;line-height:1.18}
.band p.x{color:var(--mu);font-size:18px}
.band .live{background:var(--win)}
.live{display:flex;align-items:center;gap:12px;border:1px solid var(--ln);border-radius:6px;padding:16px 18px;font-size:15px;margin-top:20px}
.live .ic{color:var(--tx)}.live div{display:flex;flex-direction:column}.live span{color:var(--mu);font-size:13px}.live em{margin-left:auto;font-style:normal;color:var(--mu);font:400 12px var(--mono)}
.split{display:grid;grid-template-columns:6fr 5fr;gap:80px;align-items:center}
.split p.x{color:var(--mu);font-size:18px;margin-top:24px;max-width:460px}
.phone{width:310px;height:630px;border:1px solid var(--ln);border-radius:48px;background:var(--win);padding:56px 14px 14px;position:relative;margin:0 auto;display:flex;flex-direction:column;gap:12px;font-size:13px}
.notch{position:absolute;top:14px;left:50%;width:96px;height:28px;border-radius:14px;background:var(--tx);transform:translateX(-50%)}
.ps{position:absolute;top:19px;left:30px;font:600 12px var(--sans)}
.pt{display:flex;align-items:center;gap:8px;font:600 20px var(--sans);padding:0 4px}.pt .badge{margin-left:0}
.badge{font:500 11px/1 var(--mono);background:var(--tx);color:var(--bg);border-radius:9px;padding:3px 6px}
.pmini{border-top:1px solid var(--ln);padding-top:6px}.pmini .tm{display:flex;align-items:center;gap:10px;padding:8px 4px}.pmini .tm em{margin-left:auto;font-style:normal;font-size:12px;color:var(--mu)}
.store{margin-top:32px}
.end h2{font-size:96px;line-height:.98}:lang(ko) h2.e{font-size:64px;line-height:1.14}
footer{border-top:1px solid var(--ln);padding:28px 0;color:var(--mu);font-size:13px}
footer .wrap{display:flex;gap:24px;align-items:center}footer .logo{margin-right:auto}
.pb{display:grid;gap:10px}.pnext .hint{margin:12px 0 0}
.only-phone{display:none}
.hint{font-size:13px;color:var(--mu);margin:8px 0 18px;text-align:center}.hint .cp{color:var(--tx);text-decoration:underline;text-underline-offset:3px;white-space:nowrap}
.pn{font-size:15px;margin-bottom:14px}
@media (max-width:640px){
 .wrap{padding:0 20px}
 .top nav{display:none}.top .btn{display:none}.top .wrap{height:56px}
 .hero{padding:28px 0 56px}
 .hero .wrap{grid-template-columns:1fr;gap:8px;min-height:0}
 h1{font-size:46px}:lang(ko) h1{font-size:30px;letter-spacing:-.045em}
 .room .dec.big{padding:18px}.room .dec.big .q{font-size:22px;margin:10px 0 6px}:lang(ko) .room .dec.big .q{font-size:21px}.room .dec.big .qx{font-size:14px}.room .dec.big .btn{height:40px;font-size:14px}.room .dec.big em{display:none}
 .lead{font-size:17px;margin-top:16px}
 .only-desk{display:none!important}.only-phone{display:block}
 .pnext{margin-top:24px}
 .room{padding:32px 0 0 0}.room .dec{margin:0}
 .room .dec{position:static;transform:none;right:auto}
 .room .bg{padding:6px 14px 14px;font-size:13px}.room .bg .tm{padding:10px 0;gap:10px}.room .bg .tm:nth-child(n+3):not(.s-turn){display:none}.room .bg .tm .act,.room .bg .tm b{display:none}.room .bg .tm em{width:auto;margin-left:auto}.room .bg .tm.s-turn{margin:0 -14px -14px;padding:12px 14px}
 .proof div{padding:22px 16px}.proof b{font-size:44px}.proof span{font-size:13px}
 section.blk{padding:72px 0}
 h2{font-size:34px}:lang(ko) h2{font-size:28px}
 .cols{grid-template-columns:1fr;gap:40px;margin-top:40px}
 .band .wrap{grid-template-columns:1fr;gap:28px}.band h2{font-size:40px}:lang(ko) .band h2{font-size:30px}
 .split{grid-template-columns:1fr;gap:40px}
 .phone{width:270px;height:550px}
 .end h2{font-size:48px}:lang(ko) h2.e{font-size:32px}
 footer .wrap{flex-wrap:wrap}
}
'''

def page(c):
  h = head(c, 'c', 'Direction C', CSS)
  u = c['ui']
  order = [2, 3, 1, 4, 0]
  rows = ''.join(f'<div class="tm s-{u["rows"][k][3]}"><i class="st"></i><i class="id">{u["rows"][k][0]}</i><b>{u["rows"][k][2]}</b><span class="tt">{u["rows"][k][1]}</span><span class="act">{u["rows"][k][4]}</span><em>{u[u["rows"][k][3]]}</em></div>' for k in order)
  nav = ''.join(f'<a href="#">{n}</a>' for n in c['nav'])
  arts = [
    f'<div class="art"><span class="bub">{u["ask"]}</span><span class="bub2">{u["reply"]}</span></div>',
    '<div class="art">' + ''.join(f'<div class="tm s-{s}"><i class="st"></i><b>{n}</b><em>{u[s]}</em></div>' for n, s in [('frontend','working'),('designer','working'),('backend','working'),('data','done')]) + '</div>',
    f'<div class="art"><div class="mini"><b>{u["q"]}</b><div class="b"><span class="btn go">{u["pub"]}</span><span class="btn">{u["hold"]}</span></div></div></div>',
  ]
  return h + f'''
<header class="top"><div class="wrap">{wordmark(22)}<nav>{nav}</nav><a class="btn pri" href="#" style="height:36px">{c['cta']}</a></div></header>
<main>
<section class="hero"><div class="wrap">
  <div>
    <h1>{''.join(f'<span>{x}</span>' for x in c['title_3'])}</h1>
    <p class="lead">{c['lead']}</p>
    <div class="ctas only-desk"><a class="btn pri" href="#" data-primary>{c['cta']}</a><a class="lnk" href="#">{c['cli']} {ic('arrow')}</a></div>
    <p class="req only-desk">{c['req']}</p>
    {phone_next(c)}
  </div>
  <div class="room" role="img" aria-label="{c['frame']}"><div class="bg">{rows}</div>{decision(c, big=True)}<p class="cap">{c['frame']}</p></div>
</div></section>
<div class="proofl"><div class="wrap"><i class="st on"></i>{c['proof_line']}</div></div>
<section class="blk"><div class="wrap">
  <h2>{c['how_t']}</h2>
  <div class="cols">{''.join(f'<div>{arts[i]}<h3>{t}</h3><p>{x}</p></div>' for i,(t,x) in enumerate(c['steps']))}</div>
</div></section>
<section class="blk band"><div class="wrap">
  <h2>{c['appr_t']}</h2>
  <div><p class="x">{c['appr_x']}</p>{live(c)}</div>
</div></section>
<section class="blk"><div class="wrap split">
  <div><h2>{c['phone_t']}</h2><p class="x">{c['phone_x']}</p><a class="btn store" href="#">{ic('apple')}{c['p_app']}</a></div>
  <div>{phone(c)}</div>
</div></section>
<section class="blk end" style="border-top:1px solid var(--ln)"><div class="wrap">
  <h2 class="e">{c['end_t']}</h2>
  <div class="ctas only-desk"><a class="btn pri" href="#">{c['cta']}</a><a class="lnk" href="#">{c['cli']} {ic('arrow')}</a></div>
  <p class="req only-desk">{c['req']}</p>
  {phone_next(c).replace(' data-primary','')}
</div></section>
</main>
<footer><div class="wrap">{wordmark(18)}{''.join(f'<a href="#">{f}</a>' for f in c['foot'])}</div></footer>
</body></html>'''
