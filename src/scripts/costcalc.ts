// The app cost calculator in the browser (src/components/costcalc/Calculator.astro). State lives in the URL
// (?type=&f=&d=&t=), so any estimate can be shared; totals roll to their new values (not with reduced motion).
// Counts: equipe's own collector (eqOwn 'ev': costcalc:run, costcalc:result:<type>, costcalc:share) and PostHog
// (eqTrack costcalc_run, costcalc_result, costcalc_share). The CTA is a data-ph="signup_cta_click" link, so the funnel's
// cta and signup_start steps count it too. Never any typed text: there is none.
import { MODEL, FEATURES, decodePick, encodePick, type Pick, type TypeKey, type FeatureKey, type DesignKey, type TimelineKey } from '../data/costcalc/model';
import { view, signupHref, measured, usdN, usdRange, num, fillT } from '../data/costcalc/render';
import type { CostCopy } from '../data/costcalc/copy';

type W = Window & { eqOwn?: (k: string, t: string, f?: unknown) => void; eqTrack?: (n: string, p?: unknown) => void };
const w = window as W;
const own = (name: string) => w.eqOwn?.('ev', name);
const track = (name: string, p?: Record<string, unknown>) => w.eqTrack?.(name, p);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

interface Cfg { lang: string; base: string; placement: string; lockType: boolean; c: CostCopy }

function roll(el: HTMLElement, from: number[], to: number[], fmt: (v: number[]) => string) {
  const prev = (el as unknown as { _raf?: number })._raf;
  if (prev) cancelAnimationFrame(prev);
  if (reduce || from.every((x, i) => x === to[i])) { el.textContent = fmt(to); return; }
  const t0 = performance.now(), dur = 520;
  el.classList.remove('cc-bump'); void el.offsetWidth; el.classList.add('cc-bump');
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(from.map((a, i) => a + (to[i] - a) * e));
    if (k < 1) (el as unknown as { _raf?: number })._raf = requestAnimationFrame(step);
  };
  (el as unknown as { _raf?: number })._raf = requestAnimationFrame(step);
}

function init(root: HTMLElement) {
  const cfg = JSON.parse(root.querySelector<HTMLScriptElement>('[data-cc-cfg]')!.textContent || '{}') as Cfg;
  const { c, lang } = cfg;
  const fallback = (root.dataset.type || 'website') as TypeKey;
  // The page's own query wins only on the full calculator or a type page's share link.
  let pick: Pick = decodePick(new URLSearchParams(location.search), fallback);
  if (cfg.lockType) pick.type = fallback;
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s);
  const out = (k: string) => $<HTMLElement>(`[data-out="${k}"]`);
  let last = view(c, pick, lang).e;
  let ran = false; const seen = new Set<string>();

  const segs = root.querySelectorAll<HTMLElement>('[data-seg]');
  function placePill(seg: HTMLElement, animate: boolean) {
    const on = seg.querySelector<HTMLElement>('[aria-checked="true"]'), pill = seg.querySelector<HTMLElement>('.cc-pill');
    if (!on || !pill) return;
    if (!animate) pill.style.transition = 'none';
    pill.style.width = `${on.offsetWidth}px`; pill.style.transform = `translateX(${on.offsetLeft}px)`;
    pill.style.height = `${on.offsetHeight}px`; pill.style.top = `${on.offsetTop}px`;
    if (!animate) { void pill.offsetWidth; pill.style.transition = ''; }
  }

  function paint(animate: boolean) {
    const m = MODEL[pick.type];
    root.dataset.type = pick.type;
    root.querySelectorAll<HTMLElement>('.cc-type').forEach((b) => { const on = b.dataset.type === pick.type; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; });
    root.querySelectorAll<HTMLElement>('.cc-feat').forEach((b) => {
      const f = b.dataset.feat as FeatureKey, inc = m.includes.includes(f);
      b.setAttribute('aria-checked', String(inc || pick.features.includes(f)));
      if (inc) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
      const tag = b.querySelector<HTMLElement>('.cc-inc'); if (tag) tag.hidden = !inc;
    });
    segs.forEach((seg) => {
      const val = seg.dataset.seg === 'design' ? pick.design : pick.timeline;
      seg.querySelectorAll<HTMLElement>('[role="radio"]').forEach((b) => { const on = b.dataset.val === val; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; });
      placePill(seg, animate);
    });
    const hint = $<HTMLElement>('[data-design-hint]'); if (hint) hint.textContent = c.designs[pick.design].hint;

    const v = view(c, pick, lang), e = v.e;
    const range = usdRange;
    roll(out('agency')!, last.agency, e.agency, (x) => range(x[0], x[1]));
    roll(out('diy')!, last.diy, e.diy, (x) => range(x[0], x[1]));
    roll(out('credits')!, last.credits, e.credits, (x) => fillT(c.cols.equipe.credits, { a: num(Math.round(x[0] / 10) * 10, lang), b: num(Math.round(x[1] / 10) * 10, lang) }));
    roll(out('year')!, last.equipeYear, e.equipeYear, (x) => fillT(c.cols.equipe.year, { a: usdN(Math.round(x[0])), b: usdN(Math.round(x[1])) }));
    out('agencyWeeks')!.textContent = v.agencyWeeks;
    out('diyLine')!.textContent = v.diyLine;
    out('creditsUsd')!.textContent = v.creditsUsd;
    const fee = out('diyFee')!; fee.textContent = v.diyFee; fee.hidden = !v.diyFee;
    out('slow')!.hidden = !e.slow;
    out('beyond')!.hidden = !e.beyond;
    out('proxy')!.hidden = !m.proxy;
    const ms = out('measured'); if (ms) ms.textContent = measured(c, e.items, lang).text;
    last = e;
    const cta = $<HTMLAnchorElement>('[data-cc-cta]'); if (cta) cta.href = signupHref(c, pick, lang, cfg.placement);
  }

  function changed() {
    // Only the features the user chose stay in the URL; included ones are implied by the type.
    const m = MODEL[pick.type];
    pick.features = pick.features.filter((f) => !m.includes.includes(f));
    const sharePick = { ...pick, features: [...m.includes, ...pick.features] };
    pick = sharePick;
    history.replaceState(null, '', `${location.pathname}?${encodePick(pick, !cfg.lockType)}${location.hash}`);
    paint(true);
    if (!ran) { ran = true; own('costcalc:run'); track('costcalc_run', { placement: cfg.placement }); }
    if (!seen.has(pick.type)) { seen.add(pick.type); own(`costcalc:result:${pick.type}`); track('costcalc_result', { type: pick.type, placement: cfg.placement }); }
  }

  // Type cards: click and arrow keys (a radio group).
  const typeBtns = [...root.querySelectorAll<HTMLElement>('.cc-type')];
  typeBtns.forEach((b, i) => {
    b.addEventListener('click', () => { if (pick.type === b.dataset.type) return; const t = b.dataset.type as TypeKey; pick = { ...pick, type: t, features: [...MODEL[t].includes, ...pick.features.filter((f) => !MODEL[pick.type].includes.includes(f))] }; changed(); });
    b.addEventListener('keydown', (ev) => radioKeys(ev, typeBtns, i));
  });
  root.querySelectorAll<HTMLElement>('.cc-feat').forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset.feat as FeatureKey;
    if (MODEL[pick.type].includes.includes(f)) return;
    pick.features = pick.features.includes(f) ? pick.features.filter((x) => x !== f) : [...pick.features, f].sort((a, z) => FEATURES.indexOf(a) - FEATURES.indexOf(z));
    changed();
  }));
  segs.forEach((seg) => {
    const btns = [...seg.querySelectorAll<HTMLElement>('[role="radio"]')];
    btns.forEach((b, i) => {
      b.addEventListener('click', () => { if (seg.dataset.seg === 'design') pick.design = b.dataset.val as DesignKey; else pick.timeline = b.dataset.val as TimelineKey; changed(); });
      b.addEventListener('keydown', (ev) => radioKeys(ev, btns, i));
    });
  });
  function radioKeys(ev: KeyboardEvent, btns: HTMLElement[], i: number) {
    const k = ev.key; let j = -1;
    if (k === 'ArrowRight' || k === 'ArrowDown') j = (i + 1) % btns.length;
    else if (k === 'ArrowLeft' || k === 'ArrowUp') j = (i - 1 + btns.length) % btns.length;
    else if (k === 'Home') j = 0; else if (k === 'End') j = btns.length - 1;
    if (j < 0) return;
    ev.preventDefault(); btns[j].focus(); btns[j].click();
  }

  // Share: copy a link to this estimate (the type page, so its social image matches).
  const share = $<HTMLButtonElement>('[data-cc-share]'), label = $<HTMLElement>('[data-share-label]'), live = $<HTMLElement>('[data-share-live]');
  let timer = 0;
  share?.addEventListener('click', async () => {
    const url = new URL(`${cfg.base}${pick.type}/?${encodePick(pick)}`, location.origin).href;
    let ok = false;
    try { await navigator.clipboard.writeText(url); ok = true; } catch { ok = false; }
    if (!ok) { window.prompt('', url); return; }
    share.classList.add('done'); if (label) label.textContent = c.share.copied; if (live) live.textContent = c.share.copied;
    own('costcalc:share'); track('costcalc_share', { type: pick.type });
    clearTimeout(timer);
    timer = window.setTimeout(() => { share.classList.remove('done'); if (label) label.textContent = c.share.button; if (live) live.textContent = ''; }, 2000);
  });

  paint(false);
  addEventListener('resize', () => segs.forEach((s) => placePill(s, false)), { passive: true });
  document.fonts?.ready.then(() => segs.forEach((s) => placePill(s, false)));
}

export function initCalculators() {
  document.querySelectorAll<HTMLElement>('[data-cc]').forEach((r) => { if (!r.dataset.ccReady) { r.dataset.ccReady = '1'; init(r); } });
}
