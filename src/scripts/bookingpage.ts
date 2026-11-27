// The free booking page maker in the browser (src/components/booking/Builder.astro).
//
// Every change re-draws the booking page (model.ts renderPage) into the hidden one of two sandboxed iframes and swaps
// them when it has loaded, so the preview never flashes; the preview's scroll position comes back by postMessage.
// The share link holds the page in its #fragment (never sent to a server) and stops opening after 7 days.
// "Make it live" is a plain link to app.equipe.im/start?idea=<everything typed, as one brief for the team>.
//
// Counts (never any typed text): equipe's own collector (eqOwn 'ev' booking:run, booking:result, booking:theme:<k>,
// booking:device:<k>, booking:share, booking:open_shared, booking:expired, booking:live) and PostHog (eqTrack
// booking_run, booking_result, booking_share, booking_live). The button is data-ph="signup_cta_click", so the site's
// funnel counts it as cta and signup_start too.
import type { BookingCopy } from '../data/bookingpage/types';
import { DURATIONS, TIMES, MAX, clean, hostFor, clock, decodeShare, duration, encodeShare, ideaText, renderPage, sampleState, type BPState, type ThemeKey } from '../data/bookingpage/model';
import { hourRows, serviceRows } from '../data/bookingpage/editor';

type W = Window & { eqOwn?: (k: string, t: string, f?: unknown) => void; eqTrack?: (n: string, p?: unknown) => void };
const w = window as W;
const own = (name: string) => { try { w.eqOwn?.('ev', name); } catch { /* counting never breaks the page */ } };
const ft = (s: string) => { try { (window as unknown as { eqFeat?: (s: string) => void }).eqFeat?.(s); } catch { /* counting never breaks the page */ } };
const track = (name: string, p?: Record<string, unknown>) => { try { w.eqTrack?.(name, p); } catch { /* same */ } };
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

interface Cfg { code: string; lang: string; loc: string; c: BookingCopy }

export function initBookingPage() {
  const root = document.querySelector<HTMLElement>('[data-bp]');
  if (!root) return;
  const cfg: Cfg = JSON.parse(root.querySelector('[data-bp-cfg]')!.textContent || '{}');
  const { c, lang } = cfg;
  const $ = <T extends Element>(s: string) => root.querySelector(s) as T;
  const form = $<HTMLFormElement>('[data-ed]');
  const svcs = $<HTMLUListElement>('[data-svcs]');
  const days = $<HTMLUListElement>('[data-days]');
  const addBtn = $<HTMLButtonElement>('[data-add]');
  const svcHint = $<HTMLElement>('[data-svc-hint]');
  const msg = $<HTMLElement>('[data-msg]');
  const pairs: Record<string, HTMLIFrameElement[]> = { phone: [...root.querySelectorAll<HTMLIFrameElement>('[data-frame="phone"]')], desktop: [...root.querySelectorAll<HTMLIFrameElement>('[data-frame="desktop"]')] };
  const hosts = [...root.querySelectorAll<HTMLElement>('[data-host], .bp-iph .iph-url')];
  const stage = $<HTMLElement>('[data-stage]');
  const live = $<HTMLAnchorElement>('[data-live]');
  const pop = $<HTMLElement>('[data-pop]');
  const peek = $<HTMLAnchorElement>('[data-peek]');
  const shareBtn = $<HTMLButtonElement>('[data-share]');
  const shareL = $<HTMLElement>('[data-share-l]');

  let s: BPState = sampleState(c);
  let y = 0, ran = false, result = false, timer = 0, dev = 'phone';
  const front: Record<string, number> = { phone: 0, desktop: 0 };
  const shown: Record<string, string> = { phone: '', desktop: '' };

  // ---- the preview ---------------------------------------------------------------------------------------------------
  addEventListener('message', (e: MessageEvent) => {
    if (!e.data || e.data.bp !== 'y' || e.source !== pairs[dev][front[dev]].contentWindow) return;
    y = Math.max(0, Number(e.data.y) || 0);
  });
  Object.entries(pairs).forEach(([d, frames]) => frames.forEach((f, i) => f.addEventListener('load', () => {
    if (i === front[d] || !f.dataset.want) return;
    delete f.dataset.want;
    const old = frames[front[d]];
    front[d] = i;
    f.classList.add('on'); f.removeAttribute('aria-hidden'); f.tabIndex = d === dev ? 0 : -1;
    old.classList.remove('on'); old.setAttribute('aria-hidden', 'true'); old.tabIndex = -1;
  })));
  shown.phone = pairs.phone[0].getAttribute('srcdoc') ? 'ssr' : '';
  // Only the device on show is drawn; the other catches up when it is chosen.
  const draw = () => {
    const html = renderPage(c, s, lang, { y });
    live.href = startHref();
    const h = hostFor(s.n);
    hosts.forEach((el) => { const t = el.matches('.iph-url') ? [...el.childNodes].find((n) => n.nodeType === 3) : el.firstChild; if (t && t.textContent !== h) t.textContent = h; });
    stage.dataset.th = s.th;
    if (html === shown[dev]) return;
    shown[dev] = html;
    const frames = pairs[dev], back = frames[1 - front[dev]];
    back.dataset.want = '1';
    back.srcdoc = html;
  };
  const soon = () => { clearTimeout(timer); timer = window.setTimeout(draw, 140); };
  const startHref = () => {
    const q = new URLSearchParams(location.search);
    const p = new URLSearchParams({ idea: ideaText(c, s, lang) });
    (['utm_source', 'utm_medium', 'utm_campaign'] as const).forEach((k) => { const v = q.get(k); if (v) p.set(k, v.slice(0, 60)); });
    if (!p.get('utm_source')) { p.set('utm_source', 'equipe.im'); p.set('utm_medium', 'tool'); p.set('utm_campaign', 'booking-page'); }
    p.set('utm_content', `booking-page.${cfg.loc}`);
    p.set('ref', 'booking-page');
    return `https://app.equipe.im/start?${p}`;
  };

  // A change by the visitor: the first one is the "run", the first one that makes it their own business is the "result".
  const changed = (what: string) => {
    if (!ran) { ran = true; own('booking:run'); ft('start'); track('booking_run', { what }); }
    if (!result && (what === 'n' || what.startsWith('sv'))) { result = true; own('booking:result'); ft('done'); track('booking_result', { what }); }
    soon();
  };

  // ---- the editor ----------------------------------------------------------------------------------------------------
  const drawSvcs = () => {
    svcs.innerHTML = serviceRows(c, s);
    addBtn.hidden = s.sv.length >= MAX.services;
    svcHint.hidden = s.sv.length < MAX.services && s.sv.some((x) => x.n.trim());
    svcHint.textContent = s.sv.length >= MAX.services ? c.ed.maxServices : c.ed.noServices;
  };
  const drawDays = () => { days.innerHTML = hourRows(c, s, lang); };
  const fillForm = () => {
    (['n', 'g', 'ph', 'em', 'ad'] as const).forEach((k) => { const el = form.querySelector<HTMLInputElement>(`[data-f="${k}"]`); if (el) el.value = s[k]; });
    drawSvcs(); drawDays(); setTheme(s.th, false);
  };

  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement;
    const f = el.dataset.f;
    if (!f) return;
    if (f === 'sv.n' || f === 'sv.p') {
      const x = s.sv[Number(el.dataset.i)];
      if (!x) return;
      if (f === 'sv.n') x.n = el.value; else x.p = el.value;
      svcHint.hidden = s.sv.length < MAX.services && s.sv.some((v) => v.n.trim());
      if (!svcHint.hidden && s.sv.length < MAX.services) svcHint.textContent = c.ed.noServices;
    } else (s as unknown as Record<string, string>)[f] = el.value;
    changed(f);
  });
  // Enter in a field never submits; in the last service field it adds a row.
  form.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.target as HTMLElement).tagName === 'INPUT') e.preventDefault(); });

  addBtn.addEventListener('click', () => {
    if (s.sv.length >= MAX.services) return;
    s.sv.push({ n: '', d: 60, p: '' });
    drawSvcs();
    const rows = svcs.querySelectorAll<HTMLElement>('.bp-svc');
    const row = rows[rows.length - 1];
    if (!reduce()) row.classList.add('in');
    row.querySelector<HTMLInputElement>('input')?.focus();
    changed('sv.add');
  });
  svcs.addEventListener('click', (e) => {
    const rm = (e.target as Element).closest<HTMLButtonElement>('[data-rm]');
    if (!rm || s.sv.length < 2) return;
    const i = Number(rm.dataset.rm);
    const row = rm.closest<HTMLElement>('.bp-svc')!;
    const go = () => { s.sv.splice(i, 1); drawSvcs(); (svcs.querySelectorAll<HTMLInputElement>('.bp-svc input')[Math.max(0, i - 1) * 2] || addBtn).focus(); changed('sv.rm'); };
    if (reduce()) go(); else { row.classList.add('out'); setTimeout(go, 180); }
  });

  days.addEventListener('click', (e) => {
    const sw = (e.target as Element).closest<HTMLButtonElement>('[data-day]');
    if (!sw) return;
    const i = Number(sw.dataset.day);
    const prev = s.h.find((h) => h) || [540, 1080];
    s.h[i] = s.h[i] ? null : [prev[0], prev[1]];
    drawDays();
    days.querySelector<HTMLButtonElement>(`[data-day="${i}"]`)?.focus();
    changed('h');
  });
  $<HTMLButtonElement>('[data-same]').addEventListener('click', () => {
    const src = s.h[0] || s.h.find((h) => h);
    if (!src) return;
    s.h = s.h.map((h) => (h ? [src[0], src[1]] : null));
    drawDays();
    changed('h.same');
  });

  // Themes: radio cards (fill + check), arrow keys move along.
  const themes = [...root.querySelectorAll<HTMLButtonElement>('[data-th]')];
  function setTheme(t: ThemeKey, count = true) {
    s.th = t;
    themes.forEach((b) => { const on = b.dataset.th === t; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; });
    if (count) { own(`booking:theme:${t}`); changed('th'); }
  }
  themes.forEach((b, i) => {
    b.addEventListener('click', () => setTheme(b.dataset.th as ThemeKey));
    b.addEventListener('keydown', (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!d) return;
      e.preventDefault();
      const n = themes[(i + d + themes.length) % themes.length];
      n.focus(); setTheme(n.dataset.th as ThemeKey);
    });
  });

  // ---- one shared menu for every length and time (custom listbox, never a native picker) -------------------------------
  let owner: HTMLButtonElement | null = null, opts: { v: number; label: string }[] = [], active = 0;
  const optionsFor = (kind: string, i: number) => {
    if (kind === 'dur') return DURATIONS.map((v) => ({ v, label: duration(c, v) }));
    const h = s.h[i]!;
    if (kind === 'open') return TIMES.filter((v) => v < h[1]).map((v) => ({ v, label: clock(lang, v) }));
    return [...TIMES.slice(1), 1440].filter((v) => v > h[0]).map((v) => ({ v, label: clock(lang, v) }));
  };
  const current = (kind: string, i: number) => (kind === 'dur' ? s.sv[i].d : kind === 'open' ? s.h[i]![0] : s.h[i]![1]);
  const paint = () => {
    [...pop.children].forEach((el, k) => {
      el.classList.toggle('act', k === active);
      if (k === active) { pop.setAttribute('aria-activedescendant', el.id); (el as HTMLElement).scrollIntoView({ block: 'nearest' }); }
    });
  };
  const place = () => {
    if (!owner) return;
    const r = owner.getBoundingClientRect();
    const wdt = Math.max(r.width, 168);
    const below = innerHeight - r.bottom - 12, above = r.top - 12;
    const h = Math.min(296, pop.scrollHeight);
    const up = below < Math.min(h, 220) && above > below;
    pop.style.left = `${Math.max(12, Math.min(r.left, innerWidth - wdt - 12))}px`;
    pop.style.width = `${wdt}px`;
    pop.style.maxHeight = `${Math.max(140, Math.min(296, up ? above : below))}px`;
    pop.style.top = up ? '' : `${r.bottom + 6}px`;
    pop.style.bottom = up ? `${innerHeight - r.top + 6}px` : '';
    pop.dataset.up = String(up);
  };
  const closeMenu = (refocus = true) => {
    if (!owner) return;
    const o = owner; owner = null;
    o.setAttribute('aria-expanded', 'false');
    pop.hidden = true; pop.replaceChildren();
    if (refocus) o.focus();
  };
  const openMenu = (b: HTMLButtonElement) => {
    if (owner === b) return closeMenu();
    if (owner) closeMenu(false);
    const kind = b.dataset.dd!, i = Number(b.dataset.i);
    opts = optionsFor(kind, i);
    const cur = current(kind, i);
    active = Math.max(0, opts.findIndex((o) => o.v === cur));
    pop.replaceChildren(...opts.map((o, k) => {
      const el = document.createElement('div');
      el.id = `bp-opt-${k}`; el.setAttribute('role', 'option'); el.className = 'bp-opt';
      el.setAttribute('aria-selected', String(o.v === cur));
      el.innerHTML = `<span></span>${CHECK}`;
      el.firstElementChild!.textContent = o.label;
      el.addEventListener('click', () => pick(k));
      el.addEventListener('pointermove', () => { if (active !== k) { active = k; paint(); } });
      return el;
    }));
    pop.setAttribute('aria-label', b.getAttribute('aria-label') || '');
    owner = b; b.setAttribute('aria-expanded', 'true');
    pop.hidden = false;
    place(); paint();
    pop.classList.remove('in'); void pop.offsetWidth; if (!reduce()) pop.classList.add('in');
    pop.focus({ preventScroll: true });
  };
  const pick = (k: number) => {
    if (!owner) return;
    const kind = owner.dataset.dd!, i = Number(owner.dataset.i), v = opts[k].v;
    if (kind === 'dur') s.sv[i].d = v; else if (kind === 'open') s.h[i]![0] = v; else s.h[i]![1] = v;
    owner.querySelector('span')!.textContent = opts[k].label;
    closeMenu();
    changed(kind === 'dur' ? 'sv.d' : 'h');
  };
  root.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>('[data-dd]');
    if (b) { e.preventDefault(); openMenu(b); }
  });
  root.addEventListener('keydown', (e) => {
    const b = (e.target as Element).closest?.<HTMLButtonElement>('[data-dd]');
    if (b && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) { e.preventDefault(); openMenu(b); }
  });
  pop.addEventListener('keydown', (e) => {
    const step: Record<string, number> = { ArrowDown: 1, ArrowUp: -1, PageDown: 6, PageUp: -6 };
    if (e.key in step) { e.preventDefault(); active = Math.max(0, Math.min(opts.length - 1, active + step[e.key])); paint(); }
    else if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); active = e.key === 'Home' ? 0 : opts.length - 1; paint(); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(active); }
    else if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
    else if (e.key === 'Tab') closeMenu();
  });
  document.addEventListener('pointerdown', (e) => { if (owner && !pop.contains(e.target as Node) && !owner.contains(e.target as Node)) closeMenu(false); });
  addEventListener('resize', () => place());
  addEventListener('scroll', (e) => { if (owner && e.target !== pop) place(); }, { capture: true, passive: true });

  // ---- phone or computer -----------------------------------------------------------------------------------------------
  const seg = $<HTMLElement>('[data-dev]');
  const devs = [...seg.querySelectorAll<HTMLButtonElement>('[data-dev-v]')];
  const setDev = (v: string) => {
    dev = v; y = 0;
    stage.dataset.device = v; seg.dataset.v = v;
    stage.querySelectorAll<HTMLElement>('[data-dev-box]').forEach((b) => { if (b.dataset.devBox === v) b.removeAttribute('aria-hidden'); else b.setAttribute('aria-hidden', 'true'); });
    Object.entries(pairs).forEach(([d, fr]) => fr.forEach((f, i) => { f.tabIndex = d === v && i === front[d] ? 0 : -1; }));
    fit(); draw();
    devs.forEach((b) => { const on = b.dataset.devV === v; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; });
  };
  devs.forEach((b) => {
    b.addEventListener('click', () => { if (stage.dataset.device !== b.dataset.devV) { setDev(b.dataset.devV!); own(`booking:device:${b.dataset.devV}`); track('booking_device', { device: b.dataset.devV }); } });
    b.addEventListener('keydown', (e) => { if (['ArrowLeft', 'ArrowRight'].includes(e.key)) { e.preventDefault(); const n = devs.find((x) => x !== b)!; n.focus(); n.click(); } });
  });
  seg.dataset.v = 'phone';

  // Sizes: the phone fits the column and the window's height; the pages inside render at their real widths
  // (393 pt on the phone, 1024 px on the computer) and are scaled down to the drawn screens.
  const iph = stage.querySelector<HTMLElement>('.bp-iph')!;
  const wscr = stage.querySelector<HTMLElement>('.bp-wscr')!;
  function fit() {
    const sw = stage.clientWidth - 32;
    const wpx = Math.round(Math.max(250, Math.min(360, sw, (innerHeight - 250) * (425 / 884))));
    iph.style.setProperty('--w', `${wpx}px`);
    stage.style.setProperty('--s', String(((wpx / 425) * 1).toFixed(4)));
    if (wscr.clientWidth) stage.style.setProperty('--ds', String((wscr.clientWidth / 1024).toFixed(4)));
    // The stage takes the height of the device on show, so the computer view does not sit in empty space.
    const box = stage.querySelector<HTMLElement>(`[data-dev-box="${dev}"]`);
    if (box) { const cs = getComputedStyle(stage); stage.style.height = `${Math.ceil(box.offsetHeight + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) + 2)}px`; }
  }
  if ('ResizeObserver' in window) new ResizeObserver(() => fit()).observe(stage);
  fit();

  // ---- share ----------------------------------------------------------------------------------------------------------
  let shareT = 0;
  shareBtn.addEventListener('click', async () => {
    const url = `${location.origin}${location.pathname}#p=${await encodeShare(s)}`;
    let ok = false;
    try { await navigator.clipboard.writeText(url); ok = true; } catch { /* below */ }
    if (!ok) { try { history.replaceState(null, '', url); ok = true; } catch { /* nothing else to do */ } }
    shareL.textContent = c.pv.copied; shareBtn.classList.add('done');
    clearTimeout(shareT); shareT = window.setTimeout(() => { shareL.textContent = c.pv.share; shareBtn.classList.remove('done'); }, 2200);
    own('booking:share'); ft('share'); track('booking_share', { services: s.sv.length, theme: s.th });
  });

  live.addEventListener('click', () => {
    live.href = startHref();
    own('booking:live'); ft('signup'); track('booking_live', { services: s.sv.filter((x) => x.n.trim()).length, theme: s.th, edited: ran });
  });

  // ---- on phones: a small "Live preview" pill while the preview is out of sight -------------------------------------------
  const narrow = matchMedia('(max-width: 959px)');
  if ('IntersectionObserver' in window) {
    let edIn = false, pvIn = false;
    const sync = () => { peek.hidden = !(narrow.matches && edIn && !pvIn); };
    new IntersectionObserver((es) => { es.forEach((x) => { if (x.target === form) edIn = x.isIntersecting; else pvIn = x.isIntersecting; }); sync(); }, { threshold: 0.05 }).observe(form);
    new IntersectionObserver((es) => { pvIn = es[0].isIntersecting; sync(); }, { threshold: 0.25 }).observe(stage);
    narrow.addEventListener('change', sync);
  }
  peek.addEventListener('click', (e) => { e.preventDefault(); stage.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth', block: 'center' }); });

  // ---- a shared link ----------------------------------------------------------------------------------------------------
  const say = (t: string) => { msg.textContent = t; msg.hidden = !t; };
  const hash = location.hash.match(/^#p=([A-Za-z0-9_-]{4,20000})$/);
  if (hash) {
    decodeShare(hash[1], s).then((r) => {
      if (r === 'expired') { say(c.pv.expired); own('booking:expired'); }
      else if (r) { s = clean(r, s); fillForm(); draw(); say(c.pv.shared); own('booking:open_shared'); ft('shared_view'); }
      history.replaceState(null, '', location.pathname + location.search);
    });
  }
  live.href = startHref();
}
