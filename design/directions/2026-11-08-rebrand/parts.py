# Shared pieces for the T-521 direction mockups: the logo, the app window, the decision card, the phone.
# Each direction styles them with its own CSS; the markup (what the real app shows) stays the same.
import os
HERE = os.path.dirname(__file__)
_p, _c = open(os.path.join(HERE, 'wordmark_path.txt')).read().split('\n')[:2]

FONTS = {
  'a': '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap">'
       '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">',
  'b': '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap">'
       '<link rel="stylesheet" href="https://hangeul.pstatic.net/hangeul_static/css/maru-buri.css">'
       '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">',
  'c': '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Sans+KR:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">',
}

def wordmark(h=22):
  w = round(h * 2.653, 1)
  return (f'<a class="logo" href="#" aria-label="equipe"><svg width="{w}" height="{h}" viewBox="0 10 265.3 82" aria-hidden="true">'
          f'<path fill="currentColor" d="{_p}"/>{_c}</svg></a>')

def head(c, d, title, css):
  return (f'<!doctype html><html lang="{c["lang"]}"><head><meta charset="utf-8">'
          f'<meta name="viewport" content="width=device-width,initial-scale=1"><title>{title}</title>{FONTS[d]}'
          f'<style>{css}</style></head><body>')

ICON = {
  'plus': '<svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>',
  'pm': '<svg viewBox="0 0 16 16"><path d="M3 4h10v7H7l-3 2v-2H3z"/></svg>',
  'inbox': '<svg viewBox="0 0 16 16"><path d="M2 9l2-6h8l2 6v4H2zM2 9h4l1 2h2l1-2h4"/></svg>',
  'prog': '<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>',
  'tickets': '<svg viewBox="0 0 16 16"><path d="M3 4h10M3 8h10M3 12h7"/></svg>',
  'check': '<svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7"/></svg>',
  'apple': '<svg viewBox="0 0 16 16"><rect x="4.5" y="1.5" width="7" height="13" rx="1.6"/><path d="M7 12.2h2"/></svg>',
  'share': '<svg viewBox="0 0 16 16"><path d="M8 2v8M5 5l3-3 3 3M3 8v6h10V8"/></svg>',
  'arrow': '<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
}

def ic(n):
  return f'<i class="ic" aria-hidden="true">{ICON[n]}</i>'

STATE_KEY = {'working': 'working', 'turn': 'turn', 'done': 'done', 'idle': 'idle'}

def decision(c, big=False, pressed=False):
  u = c['ui']
  cls = 'dec big' if big else 'dec'
  return (f'<div class="{cls}"><div class="k"><span class="lampdot"></span>{u["dec"]} · frontend · T-5</div>'
          f'<b class="q">{u["q"]}</b><p class="qx">{u["qx"]}</p>'
          f'<div class="b"><span class="btn pri{" pressed" if pressed else ""}">{u["pub"]}{(" <em>" + u["rec"] + "</em>") if big else ""}<kbd>1</kbd></span>'
          f'<span class="btn">{u["hold"]}<kbd>2</kbd></span></div></div>')

def live(c):
  u = c['ui']
  return f'<div class="live">{ic("check")}<div><b>{u["live"]}</b><span>{u["livex"]}</span></div><em>{u["approved"]}</em></div>'

def team(c):
  u = c['ui']
  m = [('pm', 'idle'), ('frontend', 'turn'), ('designer', 'working'), ('backend', 'working'), ('data', 'done'), ('mobile', 'idle')]
  return ''.join(f'<div class="tm s-{s}"><i class="st"></i><b>{n}</b><em>{u[s]}</em></div>' for n, s in m)

def trail(c):
  u = c['ui']
  li = ''.join(f'<li><time>{t}</time><b>{w}</b><span>{x}</span></li>' for t, w, x in u['trail'])
  return f'<div class="trail"><h6>{u["trail_t"]}</h6><ol>{li}</ol></div><p class="next">{ic("arrow")}<span>{u["next"]}</span></p>'

def window(c, title='loop', scene=False):
  u = c['ui']
  rows = ''.join(
    f'<div class="row s-{s}"><span class="id">{i}</span><span class="tt">{t}</span><span class="who">{w}</span>'
    f'<span class="state"><i class="st"></i>{u[s]}</span><span class="act">{a}</span></div>'
    for k, (i, t, w, s, a) in enumerate(u['rows']))
  side = (f'<aside class="side"><div class="it">{ic("plus")}{u["new"]}</div><div class="it">{ic("pm")}{u["pm"]}</div>'
          f'<div class="it">{ic("inbox")}{u["inbox"]}<span class="badge">1</span></div><div class="it on">{ic("prog")}{u["prog"]}</div>'
          f'<div class="it">{ic("tickets")}{u["tickets"]}</div><h5>{u["team"]} <span>6</span></h5>{team(c)}'
          f'<div class="foot"><i class="st on"></i><b>{title}</b><span>{u["thismac"]}</span></div></aside>')
  done = ''
  if scene:
    done = (f'<div class="mh dn"><b>{u["done_t"]}</b><span>3</span></div><div class="rows dn">' + ''.join(
      f'<div class="row s-done"><span class="id">{i}</span><span class="tt">{t}</span><span class="who">{w}</span>'
      f'<span class="state"><i class="st"></i>{u["done"]}</span><span class="act">{a}</span></div>' for i, t, w, a in u['done_rows']) + '</div>')
  main = (f'<div class="main"><div class="mh"><b>{u["prog"]}</b><span>5</span></div><div class="rows">{rows}</div>{done}</div>')
  return (f'<div class="win" role="img" aria-label="{c["frame"]}"><div class="bar3"><i></i><i></i><i></i>'
          f'<span class="wt">equipe — {title}</span><span class="now"><i class="st on"></i>{c["live_now"]} · {c["members"]} 6 · {c["working_n"]} 3 · {c["yourturn_n"]} 1</span></div>'
          f'<div class="wb">{side}{main}<div class="dock">{decision(c)}{trail(c) if scene else ""}</div></div></div>')

def phone(c):
  u = c['ui']
  return (f'<div class="phone" role="img" aria-label="iPhone"><div class="notch"></div><div class="ps"><span>9:41</span></div>'
          f'<div class="pt"><b>{u["inbox"]}</b><span class="badge">1</span></div>{decision(c)}'
          f'<div class="pmini"><div class="tm s-working"><i class="st"></i><b>designer</b><em>{u["working"]}</em></div>'
          f'<div class="tm s-working"><i class="st"></i><b>backend</b><em>{u["working"]}</em></div></div></div>')

def phone_next(c):
  # What a phone visitor does instead of downloading a Mac app: send the link to the Mac (Web Share), or get the iPhone app.
  return (f'<div class="pnext only-phone"><p class="pn">{c["p_note"]}</p>'
          f'<div class="pb"><a class="btn pri wide" href="#" data-primary>{ic("share")}{c["p_send"]}</a>'
          f'<a class="btn wide" href="#">{ic("apple")}{c["p_app"]}</a></div><p class="hint">{c["p_fallback"]} <a class="cp" href="#">{c["p_copy"]}</a></p></div>')

def logline(c, row, last=False):
  t, who, text, tid = row
  name = c['you'] if who == 'you' else who
  cls = 'lg you' if who == 'you' else 'lg'
  extra = ''
  if tid == 'T-5' and who == 'pm':
    u = c['ui']
    extra = f'<span class="lb"><span class="btn pri xs">{u["pub"]}</span><span class="btn xs">{u["hold"]}</span></span>'
  return (f'<li class="{cls}{" last" if last else ""}"><time>{t}</time><span class="who"><i class="st"></i>{name}</span>'
          f'<span class="tx">{text}{" <small>" + tid + "</small>" if tid else ""}{extra}</span></li>')
