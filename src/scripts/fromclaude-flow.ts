// /from-claude/'s browser side (src/components/FromClaudeFlow.astro). States: in -> run -> live (+ ideas) -> the sign-in
// sheet. Every call goes to app.equipe.im/api/fc/* with credentials (same site as equipe.im): the draft cookie it sets is
// this browser's key to its live draft until sign-in. Counted steps go to /api/fc/ev (and the site's own funnel).
import { internalRun } from '../lib/internal-run';

type Json = Record<string, unknown>;
type Idea = { title: string; why: string; build?: boolean };
interface Data {
  api: string; ts: string; lang: string; loc: string; utm: string;
  w: {
    drop: Record<string, string>; run: { title: string; steps: string[]; slow: string }; live: Record<string, string>;
    ideas: Record<string, string>; sheet: Record<string, string>; err: Record<string, string>; guide: { linkFail: string };
    connector: { copy: string; copied: string };
  };
}
type W = Window & { turnstile?: { render: (el: Element, o: Json) => unknown; reset: (id?: unknown) => void }; onEqFcTs?: () => void; eqFeat?: (s: string, p?: Json) => void };

const MAX = 500 * 1024;
const LINK = /^https?:\/\/(?:www\.)?claude\.ai\/(?:public\/)?artifacts?\/[\w-]+/i;
const OK_EXT = /\.(html?|jsx|tsx|js|ts|svg|md|markdown|mmd|txt|zip)$/i;

export function startFromClaude() {
  const el = document.getElementById('fcx');
  if (!el) return;
  const root: HTMLElement = el;
  const D = JSON.parse(root.dataset.fc || '{}') as Data;
  const w = window as W;
  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const ta = $<HTMLTextAreaElement>('fcx-ta'), drop = $('fcx-drop'), go = $<HTMLButtonElement>('fcx-go'), err = $('fcx-err');
  const file = $<HTMLInputElement>('fcx-file'), chip = $('fcx-chip'), guide = $('fcx-guide'), gnote = $('fcx-gnote');
  const fill = (s: string, v: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_m, k) => v[k] ?? '');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- counting ----
  const sent: Record<string, 1> = {};
  const ev = (step: string) => {
    if (sent[step]) return; sent[step] = 1;
    try { w.eqFeat?.(step.slice(0, 24)); } catch { /* the site funnel is optional */ }
    internalRun().then((ours) => { if (ours) return; fetch(`${D.api}/api/fc/ev`, { method: 'POST', credentials: 'include', keepalive: true, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ step }) }).catch(() => {}); });
  };
  ev('view');

  // ---- states ----
  const show = (s: 'in' | 'run' | 'live') => {
    root.dataset.state = s;
    $('fcx-in').hidden = s !== 'in'; $('fcx-run').hidden = s !== 'run'; $('fcx-live').hidden = s !== 'live';
    if (s !== 'in') root.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  };
  const say = (m: string) => { err.textContent = m; err.hidden = !m; if (m) { err.classList.remove('shake'); void err.offsetWidth; err.classList.add('shake'); } };

  // ---- Turnstile (interaction-only; our own runs skip it) ----
  let tsTok = '', tsId: unknown = null, tsLoad: Promise<void> | null = null, tsWait: (() => void) | null = null;
  const loadTs = () => {
    if (tsLoad) return tsLoad;
    tsLoad = internalRun().then((ours) => ours ? undefined : new Promise<void>((res) => {
      w.onEqFcTs = () => {
        try { tsId = w.turnstile!.render($('fcx-ts'), { sitekey: D.ts, theme: 'auto', size: 'flexible', appearance: 'interaction-only', callback: (t: string) => { tsTok = t; tsWait?.(); }, 'expired-callback': () => { tsTok = ''; }, 'error-callback': () => { tsTok = ''; tsWait?.(); } }); } catch { /* no widget: the server says so */ }
        res();
      };
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onEqFcTs&render=explicit';
      s.async = true; s.onerror = () => res();
      document.head.appendChild(s);
    }));
    return tsLoad;
  };
  const token = async () => {
    if (await internalRun()) return '';
    await Promise.race([loadTs(), new Promise((r) => setTimeout(r, 8000))]);
    if (!tsTok) await new Promise<void>((r) => { tsWait = r; setTimeout(r, 15000); });
    tsWait = null;
    const t = tsTok; tsTok = '';
    try { if (tsId != null) w.turnstile?.reset(tsId); } catch { /* fine */ }
    return t;
  };
  ['focusin', 'dragenter', 'pointerdown'].forEach((e) => root.addEventListener(e, () => { loadTs(); }, { once: true }));

  // ---- input: paste, drop, choose ----
  let picked: { name: string; text: string } | null = null;
  const sync = () => {
    const has = !!picked || !!ta.value.trim();
    root.classList.toggle('has', has);
    go.disabled = false;
    chip.hidden = !picked; ta.hidden = !!picked;
  };
  ta.addEventListener('input', () => { if (ta.value.trim()) ev('paste'); say(''); sync(); });
  ta.addEventListener('paste', () => setTimeout(() => { if (LINK.test(ta.value.trim())) publish(); }, 0));
  const kb = (n: number) => (n < 1024 ? `${n} B` : `${Math.round(n / 1024)} KB`);
  async function zipPage(f: File): Promise<{ name?: string; text?: string; err?: string }> {
    const b = new Uint8Array(await f.arrayBuffer()), dv = new DataView(b.buffer);
    let e = -1;
    for (let i = b.length - 22; i >= Math.max(0, b.length - 65557); i--) if (dv.getUint32(i, true) === 0x06054b50) { e = i; break; }
    if (e < 0) return { err: 'none' };
    const n = dv.getUint16(e + 10, true); let o = dv.getUint32(e + 16, true);
    const td = new TextDecoder(), ents: { name: string; m: number; cs: number; lo: number }[] = [];
    for (let k = 0; k < n && o + 46 <= b.length; k++) {
      if (dv.getUint32(o, true) !== 0x02014b50) break;
      const nl = dv.getUint16(o + 28, true), xl = dv.getUint16(o + 30, true), cl = dv.getUint16(o + 32, true);
      ents.push({ name: td.decode(b.subarray(o + 46, o + 46 + nl)), m: dv.getUint16(o + 10, true), cs: dv.getUint32(o + 20, true), lo: dv.getUint32(o + 42, true) });
      o += 46 + nl + xl + cl;
    }
    const files = ents.filter((x) => !/(^|\/)(__MACOSX|\.)/.test(x.name) && !x.name.endsWith('/'));
    const pages = files.filter((x) => /\.html?$/i.test(x.name));
    if (files.some((x) => /(^|\/)package\.json$/i.test(x.name)) || pages.length > 3) return { err: 'many' };
    if (!pages.length) return { err: 'none' };
    const p = pages.find((x) => /(^|\/)index\.html?$/i.test(x.name)) || pages[0];
    const nl = dv.getUint16(p.lo + 26, true), xl = dv.getUint16(p.lo + 28, true);
    const raw = b.subarray(p.lo + 30 + nl + xl, p.lo + 30 + nl + xl + p.cs);
    let out: Uint8Array;
    if (p.m === 0) out = raw;
    else if (p.m === 8 && 'DecompressionStream' in window) out = new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
    else return { err: 'none' };
    return { name: p.name.split('/').pop(), text: td.decode(out) };
  }
  async function take(f: File | undefined) {
    if (!f) return;
    say('');
    if (!OK_EXT.test(f.name)) return say(D.w.err.type);
    if (f.size > (/\.zip$/i.test(f.name) ? 8 * MAX : MAX)) return say(D.w.err.big);
    ev('drop'); ev('paste');
    try {
      if (/\.zip$/i.test(f.name)) {
        const z = await zipPage(f);
        if (!z.text) return say(z.err === 'many' ? D.w.err.zip : D.w.err.read);
        picked = { name: z.name || f.name, text: z.text };
      } else picked = { name: f.name, text: await f.text() };
    } catch { return say(D.w.err.read); }
    if (new Blob([picked.text]).size > MAX) { picked = null; return say(D.w.err.big); }
    $('fcx-fname').textContent = picked.name; $('fcx-fsize').textContent = kb(new Blob([picked.text]).size);
    sync();
    publish();
  }
  $('fcx-pick').addEventListener('click', () => file.click());
  file.addEventListener('change', () => { take(file.files?.[0]); file.value = ''; });
  $('fcx-unfile').addEventListener('click', () => { picked = null; sync(); ta.focus(); });
  let depth = 0;
  const isFile = (e: DragEvent) => [...(e.dataTransfer?.types || [])].includes('Files');
  // The whole page takes a dropped file (the box lights up), so nobody misses the target.
  addEventListener('dragenter', (e) => { if (!isFile(e) || root.dataset.state !== 'in') return; depth++; drop.classList.add('over'); guide.classList.add('over'); });
  addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; drop.classList.remove('over'); guide.classList.remove('over'); } });
  addEventListener('dragover', (e) => { if (isFile(e)) e.preventDefault(); });
  addEventListener('drop', (e) => {
    if (!isFile(e)) return;
    e.preventDefault(); depth = 0; drop.classList.remove('over'); guide.classList.remove('over');
    if (root.dataset.state === 'in') take(e.dataTransfer?.files?.[0]);
  });

  // ---- publish ----
  let code = '', fname = '', busy = false, live: Json | null = null;
  const prog = $('fcx-prog'), timer = $('fcx-timer');
  let tick = 0;
  const runUi = () => {
    show('run');
    const items = [...prog.children] as HTMLElement[];
    items.forEach((li) => li.className = '');
    const t0 = performance.now();
    clearInterval(tick);
    tick = window.setInterval(() => {
      const s = (performance.now() - t0) / 1000;
      timer.textContent = `${s.toFixed(1)} s`;
      const at = s < 1.5 ? 0 : s < 5 ? 1 : 2;
      items.forEach((li, i) => li.className = i < at ? 'done' : i === at ? 'now' : '');
      $('fcx-slow').hidden = s < 26;
    }, 100);
  };
  const stopUi = () => { clearInterval(tick); [...prog.children].forEach((li) => (li as HTMLElement).className = 'done'); };
  const ERR: Record<string, string> = { empty: 'empty', too_big: 'big', rate: 'rate', busy: 'busy', blocked: 'blocked', syntax: 'syntax', turnstile: 'turnstile' };

  async function publish(opts: { draft?: boolean } = {}) {
    if (busy) return;
    const text = picked ? picked.text : ta.value.trim();
    if (!opts.draft && !text) { say(D.w.err.empty); ta.focus(); return; }
    const link = !picked && LINK.test(text) && text.split(/\s+/).length === 1 ? text : '';
    if (!opts.draft && !link && new Blob([text]).size > MAX) return say(D.w.err.big);
    busy = true; go.classList.add('busy'); say('');
    code = link || opts.draft ? '' : text; fname = picked ? picked.name : '';
    const body: Json = opts.draft ? { draft: true } : link ? { link } : { code, filename: fname };
    body.src = `from-claude.${D.loc}`; body.lang = D.lang;
    const tok = await token();
    if (tok) body.token = tok;
    if (!link) runUi();
    let r: Response | null = null, d: Json = {};
    try {
      r = await fetch(`${D.api}/api/fc/live`, { method: 'POST', credentials: 'include', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      d = await r.json().catch(() => ({}));
    } catch { r = null; }
    busy = false; go.classList.remove('busy');
    if (!r) { show('in'); return say(D.w.err.net); }
    if (r.status === 422 && d.error === 'link_fallback') {
      // claude.ai kept the code to itself: the two clicks, in front.
      show('in'); ta.value = ''; sync();
      gnote.textContent = D.w.guide.linkFail; gnote.hidden = false;
      guide.classList.add('lit'); guide.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
      ev('fallback_seen');
      return;
    }
    if (!r.ok || !d.url) { show('in'); return say(D.w.err[ERR[String(d.error)] || 'failed']); }
    stopUi();
    live = d;
    try { sessionStorage.setItem('fc_live', '1'); } catch { /* fine */ }
    showLive(d);
  }
  go.addEventListener('click', () => publish());
  ta.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); publish(); } });

  // ---- live ----
  const link = $<HTMLAnchorElement>('fcx-link');
  function showLive(d: Json) {
    const u = String(d.url);
    const host = u.replace(/^https?:\/\//, '').replace(/\/$/, '');
    link.href = u; link.textContent = host;
    $<HTMLAnchorElement>('fcx-open').href = u;
    $('fcx-sh-host').textContent = host;
    $('fcx-share').hidden = !('share' in navigator);
    show('live');
    root.classList.add('won');
    // The preview: the same code in the sandbox (the live site itself may not be framed by other sites).
    if (code) {
      const fr = $('fcx-frame'); fr.hidden = false; $('fcx-fhost').textContent = host;
      const f = document.createElement('form'); f.method = 'post'; f.action = 'https://sandbox.equipe.im/preview'; f.target = 'fcx-pv'; f.hidden = true;
      const a = document.createElement('textarea'); a.name = 'code'; a.value = code; f.appendChild(a);
      const b = document.createElement('input'); b.name = 'filename'; b.value = fname; f.appendChild(b);
      // Posted once the frame is laid out at its real size (a frame loaded while hidden keeps a tiny surface in some browsers).
      document.body.appendChild(f);
      requestAnimationFrame(() => requestAnimationFrame(() => { f.submit(); f.remove(); }));
      addEventListener('message', (e) => { const x = e.data as Json; if (x && x.eq === 'preview' && x.t === 'ready') fr.classList.add('ok'); });
    }
    loadIdeas(!!d.spec);
  }
  $('fcx-copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(link.href); } catch { /* fall through to showing it */ }
    const s = $('fcx-copy').querySelector('span')!; s.textContent = D.w.live.copied; ev('copy');
    setTimeout(() => { s.textContent = D.w.live.copy; }, 1800);
  });
  $('fcx-open').addEventListener('click', () => ev('open'));
  $('fcx-share').addEventListener('click', () => { navigator.share?.({ url: link.href, title: document.title }).catch(() => {}); ev('share'); });
  $('fcx-again').addEventListener('click', () => { picked = null; ta.value = ''; code = ''; sync(); root.classList.remove('won'); $('fcx-frame').hidden = true; show('in'); ta.focus(); });

  // ---- ideas ----
  const il = $('fcx-il');
  let ideas: Idea[] = [];
  async function loadIdeas(spec: boolean) {
    if (spec) $('fcx-isub').textContent = D.w.ideas.specNote;
    let d: Json = {};
    try { d = await (await fetch(`${D.api}/api/fc/ideas`, { method: 'POST', credentials: 'include', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ lang: D.lang }) })).json(); } catch { /* keep the skeleton, then the custom box */ }
    ideas = Array.isArray(d.ideas) ? (d.ideas as Idea[]) : [];
    const btns = [...il.querySelectorAll<HTMLButtonElement>('.fcx-idea')];
    btns.forEach((b, i) => {
      const x = ideas[i];
      if (!x) { b.closest('li')!.hidden = true; return; }
      b.classList.remove('sk'); b.disabled = false; b.style.setProperty('--i', String(i));
      b.querySelector('b')!.textContent = x.title; b.querySelector('span')!.textContent = x.why;
      b.classList.toggle('build', !!x.build);
    });
    il.setAttribute('aria-busy', 'false');
    if (ideas.length) ev('idea_shown');
  }
  async function pick(body: Json, label: string) {
    let d: Json = {};
    try { d = await (await fetch(`${D.api}/api/fc/pick`, { method: 'POST', credentials: 'include', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })).json(); } catch { return say(D.w.err.net); }
    if (d.signedIn && d.next) { location.href = String(d.next); return; }
    openSheet(label);
  }
  il.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('.fcx-idea');
    if (!b || b.disabled) return;
    const i = Number(b.dataset.i);
    il.querySelectorAll('.fcx-idea').forEach((x) => x.classList.toggle('on', x === b));
    pick({ i }, ideas[i]?.title || '');
  });
  $('fcx-own').addEventListener('submit', (e) => {
    e.preventDefault();
    const t = $<HTMLInputElement>('fcx-owntx').value.trim();
    if (t.length < 3) { $<HTMLInputElement>('fcx-owntx').focus(); return; }
    pick({ text: t }, t);
  });
  $('fcx-keep').addEventListener('click', () => pick({ keep: true }, ''));

  // ---- the sign-in sheet ----
  const sheet = $<HTMLDialogElement>('fcx-sheet');
  function openSheet(idea: string) {
    $('fcx-sh-sub').textContent = idea ? fill(D.w.sheet.sub, { idea: idea.length > 80 ? `${idea.slice(0, 78)}…` : idea }) : D.w.sheet.subKeep;
    ev('signin_sheet');
    try { sheet.showModal(); } catch { sheet.setAttribute('open', ''); }
  }
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });
  sheet.querySelectorAll<HTMLAnchorElement>('.fcx-sh-btn').forEach((a) => a.addEventListener('click', () => { ev(`signin_${a.dataset.way}`); }));

  // ---- the connector line ----
  $('fcx-mcpcopy')?.addEventListener('click', async (e) => {
    const b = e.currentTarget as HTMLButtonElement;
    try { await navigator.clipboard.writeText('https://app.equipe.im/mcp'); } catch { /* fine */ }
    b.textContent = D.w.connector.copied; setTimeout(() => { b.textContent = D.w.connector.copy; }, 1800);
  });
  $('fcx-cn')?.addEventListener('toggle', () => ev('mcp_guide'), { once: true });

  // ---- arriving: from the connector's link (?d=1), or back on a page that already published ----
  const q = new URLSearchParams(location.search);
  let back = false;
  try { back = sessionStorage.getItem('fc_live') === '1'; } catch { /* fine */ }
  if (q.get('d') === '1') publish({ draft: true });
  else if (back) {
    fetch(`${D.api}/api/fc/state`, { method: 'POST', credentials: 'include', headers: { 'content-type': 'application/json' }, body: '{}' }).then((r) => r.json()).then((d: Json) => {
      if (d && d.url) { live = d; showLive(d); }
    }).catch(() => {});
  }
  sync();
  void live;
}
