// The logo maker's page logic (LogoApp.astro). The platform draws and checks the marks; everything after that (composing
// the name, editing, mockups, the brand kit) happens here, free.
import { compose, firstDesign, fontsFor, fontInfo, nearestWeight, inkOn, contrast, type Design, type Mark, type Composed, type Treatment } from './compose';
import { mockups } from './mockups';
import { png, ico, zip, pdfOf, brandSheet, draw } from './kit';

type Json = Record<string, any>;
const esc = (s: unknown) => String(s ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);
const fill = (s: string, v: Json) => s.replace(/\{(\w+)\}/g, (_, k) => (v[k] == null ? '' : String(v[k])));
const HEX = /^#[0-9a-f]{6}$/i;
const IC = {
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  more: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
  pen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg>',
  chev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
};

export function runLogoApp(D: Json, internalRun: () => Promise<boolean>) {
  const w = window as unknown as { eqTrack?: (n: string, p?: Json) => void; eqOwn?: (k: string, t: string, f?: string) => void; eqFeat?: (s: string) => void; turnstile?: Json; onEqTs?: () => void };
  const track = (n: string, p?: Json) => { try { w.eqTrack?.(n, p); } catch { /* never breaks the page */ } };
  const own = (k: string, t: string, f?: string) => { try { w.eqOwn?.(k, t, f); } catch { /* never breaks the page */ } };
  const ft = (s: string) => { try { w.eqFeat?.(s); } catch { /* counting never breaks the page */ } };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const R = D.c.result, FM = D.c.form, E = D.c.editor, K = D.c.kit, S = D.c.share, CT = D.c.cta;
  const form = document.querySelector<HTMLFormElement>('[data-l-form]');
  const run = document.querySelector<HTMLElement>('[data-l-run]')!;
  const rep = document.querySelector<HTMLElement>('[data-l-report]')!;
  const out = document.querySelector<HTMLElement>('[data-l-out]')!;
  const tsBox = document.querySelector<HTMLElement>('[data-l-ts]');
  const steps = [...run.querySelectorAll<HTMLLIElement>('.tl-steps li')];
  const stepTo = (i: number) => steps.forEach((s, j) => { s.classList.toggle('is-done', j < i); s.classList.toggle('is-now', j === i); if (j === i) s.setAttribute('aria-current', 'step'); else s.removeAttribute('aria-current'); });
  const reveal = (root: Element) => {
    const items = [...root.querySelectorAll<HTMLElement>('.tl-in')];
    if (reduce || !document.documentElement.classList.contains('mo')) items.forEach((x) => x.classList.add('on'));
    else items.forEach((x) => requestAnimationFrame(() => requestAnimationFrame(() => x.classList.add('on'))));
  };

  // ---- Turnstile (interaction-only, on first touch; never for equipe's own test runs) ----------------------------------------
  let tsTok = '', tsId: unknown = null, tsLoad: Promise<void> | null = null, tsWait: ((v?: unknown) => void) | null = null;
  const loadTs = () => {
    if (tsLoad) return tsLoad;
    tsLoad = internalRun().then((internal) => (internal ? undefined : new Promise<void>((res) => {
      if (!tsBox) { res(); return; }
      w.onEqTs = () => {
        try {
          tsId = w.turnstile!.render(tsBox, { sitekey: D.ts, theme: 'auto', size: 'flexible', appearance: 'interaction-only',
            callback: (t: string) => { tsTok = t; tsWait?.(); }, 'expired-callback': () => { tsTok = ''; }, 'error-callback': () => { tsTok = ''; tsWait?.(); } });
        } catch { /* the server says so */ }
        res();
      };
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onEqTs&render=explicit';
      s.async = true; s.onerror = () => res();
      document.head.appendChild(s);
    })));
    return tsLoad;
  };
  const token = async () => {
    if (await internalRun()) return '';
    await Promise.race([loadTs(), new Promise((r) => setTimeout(r, 8000))]);
    if (!tsTok) await new Promise((r) => { tsWait = r; setTimeout(r, 15000); });
    tsWait = null;
    const t = tsTok; tsTok = '';
    return t;
  };
  const resetTs = () => { try { if (tsId !== null) w.turnstile?.reset(tsId); } catch { /* fine */ } };

  // ---- a signed-in pass from app.equipe.im (more rounds a day) --------------------------------------------------------------
  let pass = '';
  const passP: Promise<void> = D.mode === 'tool' ? fetch(D.pass, { credentials: 'include', cache: 'no-store' }).then((r) => (r.ok ? r.json() : null)).then((j) => {
    if (j?.signed && j.pass) { pass = j.pass; const n = document.querySelector('[data-l-note]'); if (n) n.textContent = FM.noteSigned; }
  }).catch(() => {}) : Promise.resolve();

  // ---- the colour picker (custom, ui.equipe.im "Color Picker": saturation area, hue slider, hex, presets) -----------------
  const pop = document.querySelector<HTMLElement>('[data-l-pop]')!;
  let popCb: ((hex: string) => void) | null = null, hsv = { h: 225, s: 0.8, v: 0.92 };
  const hsvHex = ({ h, s, v }: typeof hsv) => { const f = (n: number) => { const k = (n + h / 60) % 6; return Math.round(255 * (v - v * s * Math.max(0, Math.min(k, 4 - k, 1)))); }; return `#${[f(5), f(3), f(1)].map((x) => x.toString(16).padStart(2, '0')).join('')}`; };
  const hexHsv = (hex: string) => { const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255); const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; let h = 0; if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; return { h: (h * 60 + 360) % 360, s: mx ? d / mx : 0, v: mx }; };
  const sv = pop.querySelector<HTMLElement>('[data-l-sv]')!, svk = pop.querySelector<HTMLElement>('[data-l-svk]')!, hue = pop.querySelector<HTMLElement>('[data-l-hue]')!, huek = pop.querySelector<HTMLElement>('[data-l-huek]')!;
  const hexIn = pop.querySelector<HTMLInputElement>('[data-l-hex]')!, chipNow = pop.querySelector<HTMLElement>('[data-l-chipnow]')!;
  const paint = (fromHex = false) => {
    const hex = hsvHex(hsv);
    sv.style.setProperty('--h', String(hsv.h)); svk.style.left = `${hsv.s * 100}%`; svk.style.top = `${(1 - hsv.v) * 100}%`; huek.style.left = `${(hsv.h / 360) * 100}%`;
    chipNow.style.background = hex; hue.setAttribute('aria-valuenow', String(Math.round(hsv.h)));
    if (!fromHex) hexIn.value = hex.toUpperCase();
    popCb?.(hex);
  };
  const drag = (elx: HTMLElement, on: (x: number, y: number) => void) => elx.addEventListener('pointerdown', (e) => {
    const r = elx.getBoundingClientRect();
    const mv = (ev: PointerEvent) => on(Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)), Math.max(0, Math.min(1, (ev.clientY - r.top) / r.height)));
    mv(e); elx.setPointerCapture(e.pointerId);
    const up = () => { elx.removeEventListener('pointermove', mv); elx.removeEventListener('pointerup', up); };
    elx.addEventListener('pointermove', mv); elx.addEventListener('pointerup', up);
  });
  drag(sv, (x, y) => { hsv.s = x; hsv.v = 1 - y; paint(); });
  drag(hue, (x) => { hsv.h = x * 360; paint(); });
  hue.addEventListener('keydown', (e) => { const k = e.key; if (k === 'ArrowRight' || k === 'ArrowLeft') { e.preventDefault(); hsv.h = (hsv.h + (k === 'ArrowRight' ? 6 : 354)) % 360; paint(); } });
  hexIn.addEventListener('input', () => { let v = hexIn.value.trim(); if (!v.startsWith('#')) v = `#${v}`; if (/^#[0-9a-f]{3}$/i.test(v)) v = `#${[...v.slice(1)].map((x) => x + x).join('')}`; if (HEX.test(v)) { hsv = hexHsv(v.toLowerCase()); paint(true); } });
  pop.querySelectorAll<HTMLButtonElement>('[data-l-preset]').forEach((b) => b.addEventListener('click', () => { hsv = hexHsv(b.dataset.lPreset!); paint(); }));
  const closePop = () => { pop.hidden = true; popCb = null; pop.classList.remove('on'); };
  pop.querySelector('[data-l-popdone]')!.addEventListener('click', closePop);
  document.addEventListener('pointerdown', (e) => { if (!pop.hidden && !pop.contains(e.target as Node) && !(e.target as Element).closest('[data-l-addcol],[data-l-colpick]')) closePop(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !pop.hidden) closePop(); });
  function openPicker(anchor: HTMLElement, start: string, cb: (hex: string) => void) {
    hsv = hexHsv(HEX.test(start) ? start : '#2f5bea');
    popCb = null; paint(); popCb = cb;
    pop.hidden = false;
    const r = anchor.getBoundingClientRect(), pw = Math.min(300, innerWidth - 32);
    pop.style.width = `${pw}px`;
    pop.style.left = `${Math.max(16, Math.min(innerWidth - pw - 16, r.left + scrollX))}px`;
    pop.style.top = `${r.bottom + scrollY + 10}px`;
    requestAnimationFrame(() => pop.classList.add('on'));
  }

  // ---- the form ------------------------------------------------------------------------------------------------------------
  const cols: string[] = [];
  const colBox = document.querySelector<HTMLElement>('[data-l-cols]');
  const drawCols = () => {
    if (!colBox) return;
    colBox.querySelectorAll('.lg-col').forEach((x) => x.remove());
    const add = colBox.querySelector<HTMLElement>('[data-l-addcol]')!;
    cols.forEach((c, i) => add.insertAdjacentHTML('beforebegin', `<span class="lg-col"><button type="button" class="lg-sw" style="--c:${c}" data-l-colpick="${i}" aria-label="${esc(c)}"></button><code>${esc(c.toUpperCase())}</code><button type="button" class="lg-colx" data-l-colx="${i}" aria-label="${esc(FM.removeColour)}">${IC.x}</button></span>`));
    add.hidden = cols.length >= 3;
  };
  colBox?.addEventListener('click', (e) => {
    const t = e.target as Element;
    const a = t.closest<HTMLElement>('[data-l-addcol]');
    if (a) { cols.push(D.swatches[cols.length * 3 % D.swatches.length]); drawCols(); const i = cols.length - 1; openPicker(colBox.querySelector<HTMLElement>(`[data-l-colpick="${i}"]`)!, cols[i], (hex) => { cols[i] = hex; const b = colBox.querySelector<HTMLElement>(`[data-l-colpick="${i}"]`); if (b) { b.style.setProperty('--c', hex); b.nextElementSibling!.textContent = hex.toUpperCase(); } }); return; }
    const p = t.closest<HTMLElement>('[data-l-colpick]');
    if (p) { const i = Number(p.dataset.lColpick); openPicker(p, cols[i], (hex) => { cols[i] = hex; p.style.setProperty('--c', hex); p.nextElementSibling!.textContent = hex.toUpperCase(); }); return; }
    const x = t.closest<HTMLElement>('[data-l-colx]');
    if (x) { cols.splice(Number(x.dataset.lColx), 1); closePop(); drawCols(); }
  });
  const groups = () => document.querySelectorAll<HTMLElement>('[data-l-group]');
  groups().forEach((grp) => {
    const chips = [...grp.querySelectorAll<HTMLButtonElement>('[role="radio"]')];
    const required = grp.hasAttribute('data-l-required');
    const roving = () => { const sel = chips.find((x) => x.getAttribute('aria-checked') === 'true') || chips[0]; chips.forEach((x) => { x.tabIndex = x === sel ? 0 : -1; }); };
    roving();
    grp.addEventListener('click', (e) => {
      const b = (e.target as Element).closest<HTMLButtonElement>('[role="radio"]'); if (!b) return;
      const on = b.getAttribute('aria-checked') === 'true';
      if (on && required) return;
      chips.forEach((x) => x.setAttribute('aria-checked', 'false'));
      if (!on) b.setAttribute('aria-checked', 'true');
      roving();
    });
    grp.addEventListener('keydown', (e) => {
      const k = (e as KeyboardEvent).key; const i = chips.indexOf(document.activeElement as HTMLButtonElement); if (i < 0) return;
      const n = k === 'ArrowRight' || k === 'ArrowDown' ? (i + 1) % chips.length : k === 'ArrowLeft' || k === 'ArrowUp' ? (i - 1 + chips.length) % chips.length : -1;
      if (n < 0) return; e.preventDefault(); chips[n].focus(); if (required) chips[n].click();
    });
  });
  const picked = (g: string) => document.querySelector<HTMLElement>(`[data-l-group="${g}"] [aria-checked="true"]`)?.dataset.v || '';

  // ---- state ---------------------------------------------------------------------------------------------------------------
  let G: Json | null = null;           // the run
  let NAME = '', ABOUT = '';
  let options: { key: string; mark: Mark | null; design: Design; kind: 'ai' | 'type' }[] = [];
  let sel: { key: string; mark: Mark | null; design: Design } | null = null;
  let ground: 'light' | 'dark' = 'light';
  let did = '', didFor = '';
  const svgBox = (svg: string) => `<div class="lg-svg">${svg}</div>`;

  function optionsFor(g: Json) {
    const name = g.input?.name || '', brief = g.brief || {}, palette: string[] = brief.palette || [];
    const style = g.input?.style || 'icon';
    const list: typeof options = [];
    for (const m of (g.marks || []) as Mark[]) {
      const layout = style === 'emblem' ? 'badge' : 'row';
      list.push({ key: `m${m.n}`, mark: m, kind: 'ai', design: firstDesign(name, { n: m.n, font: brief.fonts?.heading, body: brief.fonts?.body, palette, mark: m, layout }) });
    }
    const fonts = fontsFor(name);
    const pick = (feel: string, i = 0) => (fonts.filter((f) => f.feel === feel)[i] || fonts[i % fonts.length]).family;
    const heading = brief.fonts?.heading && fonts.some((f) => f.family === brief.fonts.heading) ? brief.fonts.heading : fonts[0].family;
    const types: [Treatment | null, string, string, number][] = style === 'wordmark'
      ? [['dot', heading, 'row', 800], ['bar', pick('serif'), 'name', 700], ['tile', pick('geometric'), 'row', 700], ['circle', pick('rounded'), 'stack', 700], [null, pick('display'), 'name', 400], ['dot', pick('serif', 1), 'name', 600]]
      : [['tile', heading, 'row', 700], ['dot', pick('serif'), 'name', 700]];
    types.forEach(([t, font, layout, weight], i) => list.push({ key: `t${i}`, mark: null, kind: 'type', design: firstDesign(name, { n: -1, font, body: fontInfo(font).body, palette, treatment: t, layout: layout as Design['layout'], weight }) }));
    return list;
  }

  // ---- results ---------------------------------------------------------------------------------------------------------------
  async function drawResults(g: Json, focus?: number) {
    G = g; NAME = g.input?.name || ''; ABOUT = g.input?.about || '';
    options = optionsFor(g);
    const ai = options.filter((o) => o.kind === 'ai'), ty = options.filter((o) => o.kind === 'type');
    const left = g.left != null ? (g.left > 0 ? fill(R.left, { n: g.left }) : R.noneLeft) : '';
    const card = (o: (typeof options)[number], i: number) => `<li class="lg-opt tl-in" style="--d:${Math.min(i, 9) * 60}ms" data-key="${o.key}">
        <button type="button" class="lg-pick" data-l-pick="${o.key}" aria-label="${esc(R.edit)}"><span class="lg-stage" data-l-prev="${o.key}"><span class="lg-skel"></span></span></button>
        <div class="lg-opt-b">${o.mark?.from != null ? `<span class="lg-badge">${esc(R.variation)}</span>` : ''}
        <span class="lg-acts">${o.kind === 'ai' && D.mode === 'tool' && o.mark?.from == null ? `<button type="button" class="lg-ghost" data-l-more="${o.mark!.n}" title="${esc(R.moreNote)}" data-ph="logo_more_click" data-ph-location="card">${IC.more}<span>${esc(R.more)}</span></button>` : ''}<button type="button" class="lg-ghost strong" data-l-pick="${o.key}" data-ph="logo_edit_click" data-ph-location="card">${IC.pen}<span>${esc(R.edit)}</span></button></span></div>
      </li>`;
    out.innerHTML = `<div class="lg-rep">
      <div class="lg-head tl-in"><div><h2>${esc(R.title)}</h2><p class="tl-sub">${esc(ai.length ? R.sub : R.typeSub)}</p></div>
        <div class="lg-headr">${left ? `<span class="lg-left">${esc(left)}</span>` : ''}<span class="lg-seg" role="radiogroup" aria-label="${esc(R.ground)}" data-l-ground><button type="button" role="radio" aria-checked="true" data-v="light">${IC.check}<span>${esc(R.light)}</span></button><button type="button" role="radio" aria-checked="false" data-v="dark">${IC.check}<span>${esc(R.dark)}</span></button></span></div>
      </div>
      ${ai.length < 2 && g.input?.style !== 'wordmark' ? `<p class="tl-cached lg-note tl-in">${esc(R.fewer)}</p>` : ''}
      ${ai.length ? `<ul class="lg-grid">${ai.map(card).join('')}</ul>` : ''}
      ${ty.length ? `${ai.length ? `<div class="lg-sub tl-in"><h3>${esc(R.typeTitle)}</h3><p>${esc(R.typeSub)}</p></div>` : ''}<ul class="lg-grid">${ty.map((o, i) => card(o, i + ai.length)).join('')}</ul>` : ''}
      <div class="lg-edit" hidden data-l-edit></div>
    </div>`;
    rep.hidden = false;
    reveal(out);
    setGround(ground);
    await Promise.all(options.map(async (o) => {
      const box = out.querySelector<HTMLElement>(`[data-l-prev="${o.key}"]`);
      try { const cmp = await compose(NAME, groundDesign(o.design), o.mark); if (box) { box.innerHTML = svgBox(cmp.svg); box.classList.add('on'); } }
      catch { box?.closest('li')?.remove(); }
    }));
    if (focus != null) out.querySelector(`[data-key="m${focus}"]`)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  }
  const groundDesign = (d: Design): Design => (ground === 'dark' ? { ...d, bg: 'dark', text: inkOn(d.text === '#16161a' || contrast(d.text, '#111114') < 3 ? '#f5f5f4' : d.text, 'dark') } : d);
  function setGround(gr: 'light' | 'dark') {
    ground = gr;
    out.querySelectorAll<HTMLElement>('[data-l-ground] [role="radio"]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.v === gr)));
    out.querySelector('.lg-rep')?.classList.toggle('is-dark', gr === 'dark');
  }
  async function redrawPreviews() {
    await Promise.all(options.map(async (o) => { const box = out.querySelector<HTMLElement>(`[data-l-prev="${o.key}"]`); if (!box) return; try { box.innerHTML = svgBox((await compose(NAME, groundDesign(o.design), o.mark)).svg); } catch { /* keep */ } }));
    if (sel) await refresh();
  }

  // ---- the editor ------------------------------------------------------------------------------------------------------------
  const seg = (name: string, label: string, items: [string, string][], cur: string) => `<div class="lg-ctl"><span class="lg-cl">${esc(label)}</span><span class="lg-seg wide" role="radiogroup" aria-label="${esc(label)}" data-l-set="${name}">${items.map(([v, t]) => `<button type="button" role="radio" aria-checked="${v === cur}" data-v="${esc(v)}">${IC.check}<span>${esc(t)}</span></button>`).join('')}</span></div>`;
  const swatches = (name: string, label: string, cur: string | null, withOriginal: boolean) => {
    const d = sel!.design;
    const list = [...new Set([...(d.palette || []), '#16161a', '#ffffff', ...(sel!.mark?.colours || [])])].filter((c) => HEX.test(c)).slice(0, 7);
    return `<div class="lg-ctl"><span class="lg-cl">${esc(label)}</span><span class="lg-sws" role="radiogroup" aria-label="${esc(label)}" data-l-set="${name}">${withOriginal ? `<button type="button" role="radio" class="lg-orig" aria-checked="${cur === null}" data-v="">${IC.check}<span>${esc(E.original)}</span></button>` : ''}${list.map((c) => `<button type="button" role="radio" class="lg-sw" style="--c:${c}" aria-checked="${cur === c}" data-v="${c}" aria-label="${c}">${IC.check}</button>`).join('')}<button type="button" class="lg-sw lg-custom" data-l-colpick="${name}" aria-label="${esc(FM.addColour)}">${IC.plus}</button></span></div>`;
  };
  async function openEditor(key: string) {
    const o = options.find((x) => x.key === key);
    const box = out.querySelector<HTMLElement>('[data-l-edit]');
    if (!o || !box) return;
    sel = { key, mark: o.mark, design: { ...o.design } };
    ft('edit'); track('logo_edit', { kind: o.kind, form: o.mark?.form || o.design.treatment || '' });
    const d = sel.design, typeOnly = !o.mark;
    const fonts = fontsFor(NAME);
    const layouts = (typeOnly ? ['row', 'stack', 'name', 'badge'] : ['row', 'stack', 'name', 'mark', 'badge']).map((l) => [l, E.layouts[l]] as [string, string]);
    box.innerHTML = `<div class="lg-ed tl-in">
      <div class="lg-ed-h"><button type="button" class="lg-ghost" data-l-back>${IC.back}<span>${esc(E.back)}</span></button><h2>${esc(E.title)}</h2></div>
      <div class="lg-ed-main">
        <div class="lg-ed-prev"><div class="lg-ed-stage" data-l-stage></div></div>
        <div class="lg-ed-ctl">
          ${seg('layout', E.layout, layouts, d.layout)}
          <div class="lg-ctl"><span class="lg-cl">${esc(E.font)}</span><div class="lg-menu" data-l-fontmenu><button type="button" class="lg-menu-b" aria-haspopup="listbox" aria-expanded="false" data-l-fontbtn><span style="font-family:'${esc(d.font)}'">${esc(d.font)}</span>${IC.chev}</button><ul class="lg-menu-l" role="listbox" hidden>${fonts.map((f) => `<li role="option" tabindex="-1" aria-selected="${f.family === d.font}" data-v="${esc(f.family)}"><span style="font-family:'${esc(f.family)}'">${esc(f.family)}</span>${IC.check}</li>`).join('')}</ul></div></div>
          ${seg('weight', E.weight, [['400', E.weights[400]], ['700', E.weights[700]], ['900', E.weights[900]]], String(d.weight >= 800 ? 900 : d.weight >= 600 ? 700 : 400))}
          ${/\p{Script=Latin}/u.test(NAME) ? seg('case', E.letters, (['as', 'lower', 'upper', 'title'] as const).map((k) => [k, E.cases[k]] as [string, string]), d.case) : ''}
          <div class="lg-ctl"><label class="lg-cl" for="l-track">${esc(E.spacing)}</label><input class="lg-range" id="l-track" type="range" min="-0.06" max="0.24" step="0.01" value="${d.tracking}" data-l-track></div>
          ${swatches('text', E.nameColour, d.text, false)}
          ${typeOnly ? '' : swatches('mark', E.iconColour, d.mark, true)}
          ${swatches('accent', E.accent, d.accent, false)}
        </div>
      </div>
      <div class="lg-mocks-h"><h3>${esc(D.c.mock.title)}</h3><p>${esc(D.c.mock.sub)}</p></div>
      <div class="lg-mocks" data-l-mocks></div>
      <div class="lg-kit tl-card">
        <div><h3>${esc(K.title)}</h3><p class="tl-sub">${esc(K.sub)}</p></div>
        <ul class="lg-kit-l">${(K.contents as string[]).map((x) => `<li>${IC.check}<span>${esc(x)}</span></li>`).join('')}</ul>
        <button type="button" class="btn primary lg" data-l-kit data-ph="logo_download_click" data-ph-location="editor">${IC.down}<span>${esc(K.download)}</span></button>
        <p class="lg-lic">${esc(K.license)} <a href="https://tmsearch.uspto.gov/" rel="nofollow noopener" target="_blank">${esc(K.uspto)}</a> · <a href="https://www.kipris.or.kr/" rel="nofollow noopener" target="_blank">${esc(K.kipo)}</a> · <a href="https://branddb.wipo.int/" rel="nofollow noopener" target="_blank">${esc(K.wipo)}</a></p>
      </div>
      <div class="tl-cta lg-cta"><h3>${esc(CT.title)}</h3><p>${esc(CT.text)}</p><a class="btn primary lg" href="${esc(D.start.replace('__IDEA__', '').replace('__PLACE__', 'editor'))}" data-l-build data-ph="logo_start_click" data-ph-location="editor">${esc(CT.button)}${IC.arrow}</a><small>${esc(CT.note)}</small></div>
      <div class="tl-share lg-share"><label for="l-share">${esc(S.label)}</label><div class="tl-share-row"><input id="l-share" readonly value="" placeholder="${esc(S.make)}"><button type="button" class="btn ghost" data-l-copy data-ph="logo_share_copy" data-ph-location="editor">${IC.copy}<span>${esc(S.make)}</span></button></div><p class="tl-err" role="alert" hidden data-l-shareerr></p></div>
    </div>`;
    box.hidden = false;
    out.querySelectorAll('.lg-opt').forEach((x) => x.classList.toggle('is-sel', (x as HTMLElement).dataset.key === key));
    reveal(box);
    // The font menu shows each family in its own face (Google Fonts, only the letters of the names).
    const fams = fonts.map((f) => f.family);
    if (!document.querySelector('link[data-l-fontnames]')) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.dataset.lFontnames = '1'; l.href = `https://fonts.googleapis.com/css2?${fams.map((f) => `family=${encodeURIComponent(f).replace(/%20/g, '+')}`).join('&')}&text=${encodeURIComponent([...new Set(fams.join(''))].join(''))}&display=swap`; document.head.appendChild(l); }
    await refresh();
    box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
  let busy = 0;
  async function refresh() {
    if (!sel) return;
    const me = ++busy;
    const d = groundDesign(sel.design);
    const stage = out.querySelector<HTMLElement>('[data-l-stage]');
    try {
      const cmp = await compose(NAME, d, sel.mark);
      if (me !== busy) return;
      if (stage) { stage.innerHTML = svgBox(cmp.svg); stage.classList.toggle('is-dark', ground === 'dark'); }
      const light = await compose(NAME, { ...sel.design, bg: 'light' }, sel.mark);
      const onBrand = await compose(NAME, { ...sel.design, bg: 'dark', text: '#ffffff', mark: sel.mark ? '#ffffff' : null, accent: sel.mark ? sel.design.accent : '#ffffff' }, sel.mark);
      if (me !== busy) return;
      const m = out.querySelector<HTMLElement>('[data-l-mocks]');
      if (m) m.innerHTML = mockups(NAME, sel.design, light, onBrand, D.c.mock, ABOUT);
      const p = out.querySelector<HTMLElement>(`[data-l-prev="${sel.key}"]`);
      if (p) p.innerHTML = svgBox(cmp.svg);
      const o = options.find((x) => x.key === sel!.key); if (o) o.design = { ...sel.design };
    } catch (e) { console.warn('logo compose', e); }
  }
  const setDesign = (patch: Partial<Design>) => { if (!sel) return; sel.design = { ...sel.design, ...patch }; did = ''; refresh(); };

  out.addEventListener('click', async (e) => {
    const t = e.target as Element;
    const gr = t.closest<HTMLElement>('[data-l-ground] [role="radio"]');
    if (gr) { setGround(gr.dataset.v as 'light' | 'dark'); redrawPreviews(); ft('ground'); return; }
    const pk = t.closest<HTMLElement>('[data-l-pick]');
    if (pk) { openEditor(pk.dataset.lPick!); return; }
    const mo = t.closest<HTMLButtonElement>('[data-l-more]');
    if (mo) { more(Number(mo.dataset.lMore), mo); return; }
    if (t.closest('[data-l-back]')) { const ed = out.querySelector<HTMLElement>('[data-l-edit]'); if (ed) ed.hidden = true; sel = null; out.querySelector('.lg-rep')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); return; }
    const setb = t.closest<HTMLElement>('[data-l-set] [role="radio"]');
    if (setb && sel) {
      const k = setb.closest<HTMLElement>('[data-l-set]')!.dataset.lSet!;
      setb.closest('[data-l-set]')!.querySelectorAll('[role="radio"]').forEach((x) => x.setAttribute('aria-checked', String(x === setb)));
      const v = setb.dataset.v!;
      if (k === 'layout') setDesign({ layout: v as Design['layout'] });
      else if (k === 'weight') setDesign({ weight: nearestWeight(sel.design.font, Number(v)) });
      else if (k === 'case') setDesign({ case: v as Design['case'] });
      else if (k === 'text') setDesign({ text: v });
      else if (k === 'mark') setDesign({ mark: v || null });
      else if (k === 'accent') setDesign({ accent: v, palette: [...new Set([v, ...sel.design.palette])].slice(0, 5) });
      ft('customize');
      return;
    }
    const cp = t.closest<HTMLElement>('[data-l-colpick]');
    if (cp && sel && cp.closest('.lg-ed')) {
      const k = cp.dataset.lColpick as 'text' | 'mark' | 'accent';
      const cur = (k === 'mark' ? sel.design.mark : sel.design[k]) || sel.design.accent;
      openPicker(cp, cur, (hex) => { cp.style.setProperty('--c', hex); cp.classList.add('has'); setDesign(k === 'accent' ? { accent: hex, palette: [...new Set([hex, ...sel!.design.palette])].slice(0, 5) } : { [k]: hex } as Partial<Design>); });
      ft('customize');
      return;
    }
    const fb = t.closest<HTMLButtonElement>('[data-l-fontbtn]');
    if (fb) { const l = fb.nextElementSibling as HTMLElement; const open = l.hidden; l.hidden = !open; fb.setAttribute('aria-expanded', String(open)); if (open) (l.querySelector('[aria-selected="true"]') as HTMLElement | null)?.focus(); return; }
    const fo = t.closest<HTMLElement>('[data-l-fontmenu] [role="option"]');
    if (fo && sel) { chooseFont(fo); return; }
    if (t.closest('[data-l-kit]')) { downloadKit(t.closest('[data-l-kit]') as HTMLButtonElement); return; }
    const bl = t.closest<HTMLAnchorElement>('[data-l-build]');
    if (bl) { e.preventDefault(); build(bl); return; }
    const cb = t.closest<HTMLButtonElement>('[data-l-copy]');
    if (cb) { share(cb); return; }
  });
  out.addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement;
    const opt = t.closest<HTMLElement>('[data-l-fontmenu] [role="option"]');
    if (!opt) return;
    const k = (e as KeyboardEvent).key;
    if (k === 'ArrowDown' || k === 'ArrowUp') { e.preventDefault(); ((k === 'ArrowDown' ? opt.nextElementSibling : opt.previousElementSibling) as HTMLElement | null)?.focus(); }
    else if (k === 'Enter' || k === ' ') { e.preventDefault(); chooseFont(opt); }
    else if (k === 'Escape') { const l = opt.parentElement as HTMLElement; l.hidden = true; (l.previousElementSibling as HTMLElement).focus(); }
  });
  document.addEventListener('pointerdown', (e) => { const m = out.querySelector<HTMLElement>('[data-l-fontmenu] .lg-menu-l'); if (m && !m.hidden && !(e.target as Element).closest('[data-l-fontmenu]')) { m.hidden = true; m.previousElementSibling?.setAttribute('aria-expanded', 'false'); } });
  function chooseFont(fo: HTMLElement) {
    if (!sel) return;
    const fam = fo.dataset.v!;
    const l = fo.parentElement as HTMLElement; l.hidden = true;
    l.querySelectorAll('[role="option"]').forEach((x) => x.setAttribute('aria-selected', String(x === fo)));
    const b = l.previousElementSibling as HTMLElement; b.setAttribute('aria-expanded', 'false'); b.querySelector('span')!.textContent = fam; (b.querySelector('span') as HTMLElement).style.fontFamily = `'${fam}'`; b.focus();
    setDesign({ font: fam, weight: nearestWeight(fam, sel.design.weight), body: fontInfo(fam).body });
    ft('customize');
  }
  out.addEventListener('input', (e) => { const r = (e.target as Element).closest<HTMLInputElement>('[data-l-track]'); if (r) setDesign({ tracking: Number(r.value) }); });

  // ---- more like this ----------------------------------------------------------------------------------------------------------
  async function more(n: number, btn: HTMLButtonElement) {
    if (!G) return;
    btn.disabled = true; btn.classList.add('spin');
    ft('more'); track('logo_more', { n });
    await passP;
    const tok = await token();
    let res: Json | null = null, status = 0;
    try { const r = await fetch(`${D.api}/${G.id}/more`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ n, token: tok, pass }), signal: AbortSignal.timeout(180000) }); status = r.status; res = await r.json().catch(() => null); } catch { /* below */ }
    resetTs();
    btn.disabled = false; btn.classList.remove('spin');
    if (status !== 200 || !res?.id) {
      const e = res?.error;
      const msg = e === 'rate' ? (res?.signed ? FM.errRateSigned : FM.errRate) : e === 'budget' || e === 'off' ? FM.errBusy : e === 'turnstile' ? FM.errTurnstile : FM.errFailed;
      btn.closest('li')?.insertAdjacentHTML('beforeend', `<p class="tl-err lg-moreerr" role="alert">${esc(msg)}</p>`);
      ft('error'); track('logo_error', { step: 'more', error: e || `http_${status}` });
      return;
    }
    own('ev', 'logo_more_done', String(res.added || 0));
    await drawResults(res, n);
  }

  // ---- saving the design (share link, building the site) ----------------------------------------------------------------------
  async function save(): Promise<string> {
    if (!G || !sel) throw new Error('nothing');
    const key = JSON.stringify([sel.key, sel.design]);
    if (did && didFor === key) return did;
    const cmp = await compose(NAME, { ...sel.design, bg: 'light' }, sel.mark);
    const r = await fetch(`${D.api}/${G.id}/design`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ n: sel.mark ? sel.mark.n : -1, design: sel.design, lockup: cmp.svg, icon: cmp.icon }) });
    const j = await r.json();
    if (!r.ok || !j.did) throw new Error(j.error || 'save');
    did = j.did; didFor = key;
    return did;
  }
  async function share(btn: HTMLButtonElement) {
    const inp = out.querySelector<HTMLInputElement>('#l-share')!, err = out.querySelector<HTMLElement>('[data-l-shareerr]')!;
    err.hidden = true;
    try {
      const id = await save();
      inp.value = new URL(`${D.base}r/${id}/`, location.origin).href;
      let ok = false;
      try { await navigator.clipboard.writeText(inp.value); ok = true; } catch { inp.select(); try { ok = document.execCommand('copy'); } catch { ok = false; } }
      const lab = btn.querySelector('span')!;
      lab.textContent = ok ? S.copied : S.copy; if (ok) btn.classList.add('done');
      setTimeout(() => { btn.classList.remove('done'); lab.textContent = S.copy; }, 2000);
      ft('share'); track('logo_share', {});
    } catch { err.textContent = S.failed; err.hidden = false; }
  }
  async function build(a: HTMLAnchorElement) {
    a.setAttribute('aria-busy', 'true');
    ft('signup'); own('fn', 'signup_start'); track('logo_start_click', {});
    let line = '';
    try {
      const id = await save();
      const P = 'https://platform.equipe.im/v1/free/logo/d';
      line = `\n${CT.kitLine}: logo ${P}/${id}/lockup.svg · icon ${P}/${id}/icon.svg · colours ${[sel!.design.accent, ...sel!.design.palette, sel!.design.text].filter((c, i, l) => HEX.test(c) && l.indexOf(c) === i).join(', ')} · fonts ${sel!.design.font} (headings), ${sel!.design.body} (text)`;
    } catch { /* the idea still goes, without the kit line */ }
    const idea = fill(CT.idea, { name: NAME, about: ABOUT || G?.brief?.what || '' }).replace(/:\s*$/, '') + line;
    const u = new URL(String(D.start).replace('__IDEA__', encodeURIComponent(idea)).replace('__PLACE__', 'editor'));
    try { const eqa = (window as unknown as { __eqaEnc?: () => string }).__eqaEnc?.(); if (eqa) u.searchParams.set('_eqa', eqa); } catch { /* attribution is best effort */ }
    location.href = u.toString();
  }

  // ---- the brand kit ---------------------------------------------------------------------------------------------------------------
  async function downloadKit(btn: HTMLButtonElement) {
    if (!sel) return;
    const lab = btn.querySelector('span')!;
    btn.disabled = true; btn.setAttribute('aria-busy', 'true'); lab.textContent = K.making;
    ft('download'); track('logo_download', { kind: sel.mark ? 'ai' : 'type', layout: sel.design.layout });
    try {
      const d = { ...sel.design, bg: 'light' as const };
      const main = await compose(NAME, d, sel.mark);
      const mono = await compose(NAME, { ...d, text: d.text, mark: sel.mark ? d.text : null, accent: d.text }, sel.mark);
      const white = await compose(NAME, { ...d, bg: 'dark', text: '#ffffff', mark: sel.mark ? '#ffffff' : null, accent: '#ffffff' }, sel.mark);
      const wide = await compose(NAME, { ...d, layout: d.layout === 'mark' || d.layout === 'badge' ? d.layout : 'row' }, sel.mark);
      const slug = (NAME.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'logo').slice(0, 40);
      const files: { name: string; data: Blob | string }[] = [];
      const add = (name: string, data: Blob | string) => files.push({ name: `${slug}-brand-kit/${name}`, data });
      add('logo/logo.svg', main.svg); add('logo/logo-one-colour.svg', mono.svg); add('logo/logo-white.svg', white.svg);
      for (const wpx of [512, 1024, 2048]) add(`logo/logo-${wpx}.png`, await png(main.svg, main.w, main.h, wpx, Math.round((wpx * main.h) / main.w)));
      add('logo/logo-white-1024.png', await png(white.svg, white.w, white.h, 1024, Math.round((1024 * white.h) / white.w)));
      add('icon/icon.svg', main.icon);
      for (const s of [512, 1024]) add(`icon/icon-${s}.png`, await png(main.icon, 100, 100, s, s));
      add('favicon/favicon.ico', await ico(main.icon)); add('favicon/favicon.svg', main.icon);
      add('favicon/apple-touch-icon.png', await png(main.icon, 100, 100, 180, 180, { ground: '#ffffff', pad: 0.1 }));
      for (const s of [192, 512]) add(`favicon/icon-${s}.png`, await png(main.icon, 100, 100, s, s, { ground: '#ffffff', pad: 0.1 }));
      add('favicon/site.webmanifest', JSON.stringify({ name: NAME, short_name: NAME.slice(0, 12), icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }], theme_color: d.accent, background_color: '#ffffff', display: 'standalone' }, null, 2));
      add('favicon/add-to-your-site.html', '<link rel="icon" href="/favicon.ico" sizes="32x32">\n<link rel="icon" href="/favicon.svg" type="image/svg+xml">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n<link rel="manifest" href="/site.webmanifest">\n');
      const tint = '#f7f7f5';
      add('social/profile-400.png', await png(main.icon, 100, 100, 400, 400, { ground: '#ffffff', pad: 0.16 }));
      if (sel.mark) add('social/profile-on-colour-400.png', await png(white.icon, 100, 100, 400, 400, { ground: d.accent, pad: 0.18 }));
      for (const [n, cw, ch] of [['x-header-1500x500', 1500, 500], ['facebook-cover-1640x624', 1640, 624], ['linkedin-banner-1584x396', 1584, 396], ['youtube-banner-2560x1440', 2560, 1440], ['share-image-1200x630', 1200, 630]] as [string, number, number][]) {
        add(`social/${n}.png`, await png(wide.svg, wide.w, wide.h, cw, ch, { ground: tint, pad: 0.2, fit: n.startsWith('youtube') ? 0.45 : 0.8 }));
      }
      const cols = [...new Set([d.accent, ...d.palette, d.text])].filter((c) => HEX.test(c));
      add('brand/colours.txt', cols.map((c, i) => `${i === 0 ? 'Main  ' : i === cols.length - 1 ? 'Text  ' : 'Extra '} ${c.toUpperCase()}  rgb(${[1, 3, 5].map((k) => parseInt(c.slice(k, k + 2), 16)).join(', ')})`).join('\n') + '\n');
      add('brand/colours.css', `:root {\n${cols.map((c, i) => `  --brand-${i === 0 ? 'main' : i === cols.length - 1 ? 'text' : `extra-${i}`}: ${c};`).join('\n')}\n}\n`);
      add('brand/fonts.txt', `Headings: ${d.font}\nText: ${d.body}\n\nhttps://fonts.google.com/specimen/${d.font.replace(/ /g, '+')}\nhttps://fonts.google.com/specimen/${d.body.replace(/ /g, '+')}\n\nBoth are free for commercial use (SIL Open Font License or Apache 2.0).\n`);
      const sheet = await brandSheet(NAME, main, mono, white, d, K.sheet);
      add('brand/brand-sheet.pdf', await pdfOf(sheet));
      add('README.txt', K.readme);
      const blob = await zip(files);
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = `${slug}-brand-kit.zip`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      lab.textContent = K.ready; btn.classList.add('done');
      own('ev', 'logo_kit_files', String(files.length));
      setTimeout(() => { lab.textContent = K.download; btn.classList.remove('done'); }, 3000);
    } catch (e) { console.warn('logo kit', e); lab.textContent = K.download; track('logo_error', { step: 'kit' }); }
    btn.disabled = false; btn.removeAttribute('aria-busy');
  }
  void draw;

  // ---- a run ------------------------------------------------------------------------------------------------------------------------
  const load = (id: string) => {
    out.innerHTML = `<p class="tl-empty">${esc(R.loading)}</p>`; rep.hidden = false;
    fetch(`${D.api}/${id}`).then((r) => (r.ok ? r.json() : null)).then((g) => { if (!g) { out.innerHTML = `<p class="tl-empty">${esc(R.notFound)}</p>`; return; } drawResults(g); })
      .catch(() => { out.innerHTML = `<p class="tl-empty">${esc(R.notFound)}</p>`; });
  };

  if (D.mode === 'shared') {
    const m = location.pathname.match(/\/r\/([A-Za-z0-9]{6,16})\/?$/);
    rep.hidden = false;
    if (!m) { out.innerHTML = `<p class="tl-empty">${esc(R.notFound)}</p>`; return; }
    out.innerHTML = `<p class="tl-empty">${esc(R.loading)}</p>`;
    fetch(`${D.api}/d/${m[1]}`).then((r) => (r.ok ? r.json() : null)).then((d) => {
      if (!d) { out.innerHTML = `<p class="tl-empty">${esc(R.notFound)}</p>`; return; }
      ft('shared_view'); track('logo_shared_view', {});
      const dark = d.design?.bg === 'dark';
      out.innerHTML = `<div class="lg-rep lg-shared tl-in"><div class="lg-ed-stage big${dark ? ' is-dark' : ''}">${svgBox(d.lockup)}</div><div class="lg-shared-row"><div class="lg-ed-stage icon">${svgBox(d.icon)}</div><p><b>${esc(d.name)}</b><span>${esc(d.design?.font || '')}</span></p></div></div>`;
      reveal(out);
    }).catch(() => { out.innerHTML = `<p class="tl-empty">${esc(R.notFound)}</p>`; });
    return;
  }

  if (!form) return;
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const err = form.querySelector<HTMLElement>('[data-l-err]')!;
  const nameIn = form.querySelector<HTMLInputElement>('input[name="name"]')!;
  const aboutIn = form.querySelector<HTMLInputElement>('input[name="about"]')!;
  const inspIn = form.querySelector<HTMLInputElement>('input[name="inspiration"]')!;
  const say = (m: string, signIn = false) => {
    err.innerHTML = m ? `${esc(m)}${signIn ? ` <a href="https://app.equipe.im/login?next=${encodeURIComponent(location.href)}" data-ph="logo_signin_click" data-ph-location="limit">${esc(FM.signIn)}</a>` : ''}` : '';
    err.hidden = !m; if (m) { form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake'); }
  };
  form.addEventListener('focusin', () => { loadTs(); }, { once: true });
  let started = false;
  form.addEventListener('input', () => { if (!started) { started = true; ft('type'); } if (!err.hidden) say(''); });

  async function go() {
    say('');
    const name = nameIn.value.trim();
    nameIn.removeAttribute('aria-invalid');
    if (!name) { say(FM.errName); nameIn.setAttribute('aria-invalid', 'true'); nameIn.focus(); return; }
    btn.disabled = true; btn.setAttribute('aria-busy', 'true');
    const style = picked('style') || 'icon';
    const body = { name, about: aboutIn.value.trim(), style, mood: picked('mood'), kind: picked('kind'), colors: cols, inspiration: inspIn?.value.trim() || '', lang: D.code };
    own('fn', 'tool_run'); ft('start'); track('logo_run', { style, mood: body.mood, colours: cols.length, has_about: !!body.about, kind: body.kind });
    await passP;
    const tok = style === 'wordmark' ? '' : await token();
    rep.hidden = true; closePop();
    let shown = false;
    const showT = window.setTimeout(() => { shown = true; run.hidden = false; stepTo(0); run.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }, 350);
    let status = 0, g: Json | null = null;
    try {
      const r = await fetch(D.api, { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/x-ndjson' }, body: JSON.stringify({ ...body, token: tok, pass }), signal: AbortSignal.timeout(180000) });
      status = r.status;
      if (r.body && /ndjson/.test(r.headers.get('content-type') || '')) {
        const rd = r.body.getReader(), dec = new TextDecoder();
        let buf = '';
        for (;;) {
          const { value, done } = await rd.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let k;
          while ((k = buf.indexOf('\n')) >= 0) {
            const l = buf.slice(0, k); buf = buf.slice(k + 1);
            if (!l.trim()) continue;
            const o = JSON.parse(l);
            const idx = { brief: 0, draw: 1, check: 2, redraw: 3 }[o.stage as string];
            if (idx != null) stepTo(idx); else if ('status' in o) { status = o.status; g = o.body; }
          }
        }
      } else g = await r.json().catch(() => null);
    } catch { /* below */ }
    clearTimeout(showT);
    resetTs();
    if (status !== 200 || !g || !g.id) {
      if (shown) run.hidden = true;
      btn.disabled = false; btn.removeAttribute('aria-busy');
      const e = g?.error;
      const m = e === 'name' ? FM.errName : e === 'turnstile' ? FM.errTurnstile : e === 'rate' ? (g?.signed ? FM.errRateSigned : FM.errRate) : e === 'busy' || e === 'budget' || e === 'off' ? FM.errBusy : FM.errFailed;
      ft('error'); track('logo_error', { step: 'run', error: e || (status ? `http_${status}` : 'network') });
      say(m, e === 'rate' && !g?.signed); return;
    }
    if (shown) stepTo(4);
    own('fn', 'tool_result'); ft('done'); own('ev', 'logo_marks', String((g.marks || []).length));
    track('logo_result', { style, marks: (g.marks || []).length, cached: !!g.cached });
    await drawResults(g);
    if (shown) { stepTo(steps.length); await new Promise((r) => setTimeout(r, reduce ? 0 : 260)); run.hidden = true; }
    btn.disabled = false; btn.removeAttribute('aria-busy');
    try { history.replaceState(null, '', `${D.base}?r=${g.id}`); } catch { /* fine */ }
    setTimeout(() => { rep.focus({ preventScroll: true }); rep.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }, reduce ? 0 : 200);
  }
  form.addEventListener('submit', (e) => { e.preventDefault(); go(); });
  const q = new URLSearchParams(location.search);
  if (q.get('name')) nameIn.value = q.get('name')!.slice(0, 40);
  if (q.get('about')) aboutIn.value = q.get('about')!.slice(0, 300);
  const rid = q.get('r');
  if (rid && /^[A-Za-z0-9]{6,16}$/.test(rid)) load(rid);
}
