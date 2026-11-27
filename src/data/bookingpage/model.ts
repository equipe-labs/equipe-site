// The free booking page maker's model: what the visitor fills in, the share link, the sign-up idea and the booking page
// itself. Plain functions with no DOM, so the page renders the first preview at build time (no layout shift, works
// without JavaScript) and the browser re-renders the same HTML on every keystroke (src/scripts/bookingpage.ts).
//
// No AI and no server: the booking page is a fixed template filled with the visitor's words. The share link carries the
// whole page in the address's #fragment (never sent to any server, so nothing the visitor typed is stored) with the time
// it was made; a link older than 7 days opens the sample instead.
import type { BookingCopy } from './types';

export type ThemeKey = 'clean' | 'warm' | 'night' | 'bold';
export const THEMES: ThemeKey[] = ['clean', 'warm', 'night', 'bold'];
export interface Service { n: string; d: number; p: string }
/** Opening hours of one day as minutes after midnight [open, close], or null when closed. Monday first. */
export type Hours = [number, number] | null;
export interface BPState { n: string; g: string; th: ThemeKey; sv: Service[]; h: Hours[]; ph: string; em: string; ad: string }

export const MAX = { name: 60, tagline: 120, svc: 50, price: 24, services: 8, phone: 32, email: 80, address: 140 } as const;
export const DURATIONS = [15, 20, 30, 45, 60, 75, 90, 120, 150, 180];
/** Every half hour of the day, for the opening-hours menus. */
export const TIMES = Array.from({ length: 48 }, (_, i) => i * 30);
export const EXPIRE_DAYS = 7;

export const DEFAULT_HOURS: Hours[] = [[540, 1080], [540, 1080], [540, 1080], [540, 1080], [540, 1080], [600, 960], null];

export function sampleState(c: BookingCopy): BPState {
  return { n: c.sample.name, g: c.sample.tagline, th: 'clean', sv: c.sample.services.map((s) => ({ ...s })), h: DEFAULT_HOURS.map((d) => (d ? [d[0], d[1]] : null)), ph: '', em: '', ad: '' };
}

// ---- cleaning what comes in (typed, or from a share link) ---------------------------------------------------------------
const str = (v: unknown, n: number) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').slice(0, n) : '');
const mins = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? Math.max(0, Math.min(1440, Math.round(v / 15) * 15)) : -1);

export function clean(raw: unknown, fallback: BPState): BPState {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const sv = Array.isArray(r.sv)
    ? r.sv.slice(0, MAX.services).map((x) => { const o = (x && typeof x === 'object' ? x : {}) as Record<string, unknown>; const d = mins(o.d); return { n: str(o.n, MAX.svc), d: DURATIONS.includes(d) ? d : 60, p: str(o.p, MAX.price) }; })
    : fallback.sv;
  const h = Array.isArray(r.h) && r.h.length === 7
    ? r.h.map((d) => { if (!Array.isArray(d)) return null; const a = mins(d[0]), b = mins(d[1]); return a >= 0 && b > a ? ([a, b] as [number, number]) : null; })
    : fallback.h;
  return {
    n: typeof r.n === 'string' ? str(r.n, MAX.name) : fallback.n,
    g: typeof r.g === 'string' ? str(r.g, MAX.tagline) : fallback.g,
    th: THEMES.includes(r.th as ThemeKey) ? (r.th as ThemeKey) : 'clean',
    sv, h,
    ph: str(r.ph, MAX.phone), em: str(r.em, MAX.email), ad: str(r.ad, MAX.address),
  };
}

// ---- formatting -------------------------------------------------------------------------------------------------------
export const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => (k in v ? String(v[k]) : `{${k}}`));
export const esc = (s: string) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
/** "45 min", "1 h", "1 h 30 min" in the page's words. */
export function duration(c: BookingCopy, m: number): string {
  const h = Math.floor(m / 60), r = m % 60;
  return h === 0 ? fill(c.ed.min, { n: r }) : r === 0 ? fill(c.ed.hr, { h }) : fill(c.ed.hrMin, { h, m: r });
}
/** A time of day in the language's own clock (9:00 AM, 09:00, 오전 9:00). */
export function clock(lang: string, m: number): string {
  const d = new Date(Date.UTC(2024, 0, 1, Math.floor(m / 60) % 24, m % 60));
  if (m >= 1440) return lang.startsWith('en') ? '12:00 AM' : '24:00';
  return new Intl.DateTimeFormat(lang, { hour: 'numeric', minute: '2-digit', timeZone: 'UTC' }).format(d);
}
/** Monday-first weekday names (2024-01-01 was a Monday). */
export function weekdays(lang: string, style: 'long' | 'short' = 'long'): string[] {
  const f = new Intl.DateTimeFormat(lang, { weekday: style, timeZone: 'UTC' });
  return Array.from({ length: 7 }, (_, i) => f.format(new Date(Date.UTC(2024, 0, 1 + i))));
}
const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

// ---- the sign-up idea ---------------------------------------------------------------------------------------------------
/** Days with the same hours side by side become one range: "Mon–Fri 09:00–18:00". */
export function hoursLine(c: BookingCopy, s: BPState, lang: string): string {
  const names = weekdays(lang, 'short');
  const key = (d: Hours) => (d ? `${hhmm(d[0])}–${hhmm(d[1])}` : '');
  const parts: string[] = [], closed: string[] = [];
  for (let i = 0; i < 7;) {
    let j = i; while (j + 1 < 7 && key(s.h[j + 1]) === key(s.h[i])) j++;
    const span = i === j ? names[i] : `${names[i]}–${names[j]}`;
    if (s.h[i]) parts.push(`${span} ${key(s.h[i])}`); else closed.push(span);
    i = j + 1;
  }
  return parts.join(', ') + (closed.length ? `; ${fill(c.idea.closedDays, { days: closed.join(', ') })}` : '');
}

export function ideaText(c: BookingCopy, s: BPState, lang: string): string {
  const name = s.n.trim() || c.sample.name;
  const svc = s.sv.filter((x) => x.n.trim()).map((x) => `${x.n.trim()} (${[duration(c, x.d), x.p.trim()].filter(Boolean).join(', ')})`);
  const contact = [s.ph.trim(), s.em.trim(), s.ad.trim()].filter(Boolean);
  const lines = [
    fill(c.idea.intro, { name }),
    s.g.trim() ? `“${s.g.trim()}”` : '',
    svc.length ? fill(c.idea.services, { services: svc.join('; ') }) : '',
    fill(c.idea.hours, { hours: hoursLine(c, s, lang) }),
    contact.length ? fill(c.idea.contact, { contact: contact.join(' · ') }) : '',
    fill(c.idea.look, { look: c.ed.themes[s.th] }),
    c.idea.ask,
  ].filter(Boolean);
  return lines.join('\n').slice(0, 1900);
}

// ---- the booking page --------------------------------------------------------------------------------------------------
interface Pal { bg: string; surface: string; ink: string; muted: string; line: string; accent: string; on: string; soft: string; head: string; hw: number; r: number }
const SANS = "-apple-system,BlinkMacSystemFont,'SF Pro Text','Apple SD Gothic Neo','Pretendard Variable',Pretendard,'Hiragino Sans','PingFang SC','Noto Sans',system-ui,sans-serif";
const SERIF = "ui-serif,'New York','Iowan Old Style',Georgia,'Apple SD Gothic Neo','Hiragino Mincho ProN','Songti SC',serif";
export const PALETTES: Record<ThemeKey, Pal> = {
  clean: { bg: '#FFFFFF', surface: '#F5F6F8', ink: '#111318', muted: '#5B5F6A', line: '#E3E5EA', accent: '#2F5BEA', on: '#FFFFFF', soft: '#2F5BEA14', head: SANS, hw: 700, r: 16 },
  warm: { bg: '#FBF7F1', surface: '#FFFFFF', ink: '#2B231D', muted: '#6F6358', line: '#E8DED1', accent: '#9C4F2E', on: '#FFFFFF', soft: '#9C4F2E14', head: SERIF, hw: 600, r: 20 },
  night: { bg: '#121316', surface: '#1C1D22', ink: '#ECEAE4', muted: '#A3A6AD', line: '#2D2F36', accent: '#9DB3FF', on: '#0E1224', soft: '#9DB3FF1F', head: SANS, hw: 700, r: 16 },
  bold: { bg: '#FFFFFF', surface: '#F3F3F1', ink: '#0A0A0A', muted: '#53534F', line: '#DCDCD8', accent: '#0A0A0A', on: '#FFFFFF', soft: '#0A0A0A0F', head: SANS, hw: 800, r: 10 },
};

const initials = (n: string) => {
  const w = n.trim().split(/\s+/).filter(Boolean);
  if (!w.length) return '·';
  const first = [...w[0]][0] || '';
  return (w.length > 1 && /^[\p{L}]/u.test([...w[1]][0] || '') && /[a-z]/i.test(first) ? first + [...w[1]][0] : first).toUpperCase();
};

/** The whole booking page as one HTML document (the preview's srcdoc). Every typed value is escaped. */
export function renderPage(c: BookingCopy, s: BPState, lang: string, opts: { y?: number } = {}): string {
  const P = PALETTES[s.th];
  const b = c.bp;
  const name = s.n.trim() || c.sample.name;
  const days = weekdays(lang, 'long');
  const svc = s.sv.filter((x) => x.n.trim());
  const tel = s.ph.trim(), mail = s.em.trim(), addr = s.ad.trim();
  const telHref = tel.replace(/[^\d+]/g, '');
  const ic = (d: string) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const I = {
    pin: ic('<path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    phone: ic('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>'),
    mail: ic('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    clock: ic('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    check: ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  };
  const meta = [addr && `<li>${I.pin}<span>${esc(addr)}</span></li>`, tel && `<li>${I.phone}<a href="tel:${esc(telHref)}">${esc(tel)}</a></li>`].filter(Boolean).join('');
  const hoursRows = days.map((d, i) => { const h = s.h[i]; return `<div class="hr${h ? '' : ' off'}"><dt>${esc(d)}</dt><dd>${h ? `${esc(clock(lang, h[0]))} – ${esc(clock(lang, h[1]))}` : esc(b.closed)}</dd></div>`; }).join('');
  const svcList = svc.length
    ? svc.map((x, i) => `<button type="button" class="sv" role="radio" aria-checked="${i === 0}" data-i="${i}"><span class="tick">${I.check}</span><span class="sn">${esc(x.n.trim())}</span><span class="sd">${I.clock}${esc(duration(c, x.d))}</span>${x.p.trim() ? `<span class="sp">${esc(x.p.trim())}</span>` : ''}</button>`).join('')
    : `<p class="empty">${esc(b.noServices)}</p>`;
  const cfg = JSON.stringify({
    lang, y: Math.max(0, Math.round(opts.y || 0)), h: s.h, sv: svc.map((x) => ({ n: x.n.trim(), d: x.d })),
    w: { noTimes: b.noTimes, book: b.book, bookFor: b.bookFor, times: b.times },
  }).replace(/</g, '\\u003c');
  const contactBlock = tel || mail || addr
    ? `<section class="blk"><h2>${esc(b.contact)}</h2><ul class="ct">${addr ? `<li>${I.pin}<span>${esc(addr)}</span></li>` : ''}${tel ? `<li>${I.phone}<a href="tel:${esc(telHref)}">${esc(tel)}</a></li>` : ''}${mail ? `<li>${I.mail}<a href="mailto:${esc(mail)}">${esc(mail)}</a></li>` : ''}</ul></section>`
    : '';

  const css = `*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:${P.bg};color:${P.ink};font:400 16px/1.55 ${SANS};letter-spacing:-.01em;-webkit-font-smoothing:antialiased}
:lang(ko),:lang(ja),:lang(zh-CN){word-break:keep-all}
svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
a{color:inherit}
.pv{position:sticky;top:0;z-index:3;margin:0;padding:8px 16px;background:${s.th === 'night' ? '#2A2C33' : '#1B1C20'};color:#F2F1EE;font-size:13px;line-height:1.4;text-align:center}
.top{display:flex;align-items:center;gap:12px;max-width:760px;margin:0 auto;padding:16px 20px}
.mk{display:grid;place-items:center;width:36px;height:36px;border-radius:${Math.min(P.r, 12)}px;background:${P.accent};color:${P.on};font-weight:700;font-size:15px;flex:none}
.top b{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:650}
.top a{margin-left:auto;flex:none;padding:8px 16px;border-radius:999px;background:${P.accent};color:${P.on};font-weight:600;font-size:14px;text-decoration:none}
main{max-width:760px;margin:0 auto;padding:8px 20px 48px}
.hero{padding:32px 0 28px}
h1{margin:0;font:${P.hw} clamp(32px,8vw,48px)/1.08 ${P.head};letter-spacing:-.03em;overflow-wrap:anywhere;text-wrap:balance}
.hero p{margin:14px 0 0;font-size:18px;color:${P.muted};overflow-wrap:anywhere;text-wrap:pretty}
.meta{display:flex;flex-wrap:wrap;gap:8px 20px;margin:20px 0 0;padding:0;list-style:none;color:${P.muted};font-size:15px}
.meta li,.ct li{display:flex;align-items:center;gap:8px;min-width:0;overflow-wrap:anywhere}
.card{padding:24px 20px;border-radius:${P.r + 4}px;background:${P.surface};border:1px solid ${P.line}}
.st{display:grid;gap:14px}.st+.st{margin-top:28px}
h2{margin:0;font:${P.hw} 20px/1.3 ${P.head};letter-spacing:-.015em}
.st h2{display:flex;align-items:center;gap:10px;font-size:17px}
.st h2 i{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:${P.soft};color:${P.accent === '#0A0A0A' ? P.ink : P.accent};font:700 13px/1 ${SANS};font-style:normal}
.svs{display:grid;gap:10px}
.sv{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:4px 12px;width:100%;padding:14px 16px;border-radius:${P.r}px;border:1px solid ${P.line};background:${P.bg};color:inherit;font:inherit;text-align:left;cursor:pointer;transition:border-color .2s,background-color .2s,transform .15s}
.sv:active{transform:scale(.99)}
.sv .tick{grid-row:span 2;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1.5px solid ${P.line};transition:background-color .2s,border-color .2s}
.sv .tick svg{width:13px;height:13px;stroke-width:3;color:${P.on};opacity:0;transform:scale(.6);transition:opacity .2s,transform .3s cubic-bezier(.34,1.4,.64,1)}
.sv[aria-checked=true]{border-color:${P.accent};background:${P.soft}}
.sv[aria-checked=true] .tick{background:${P.accent};border-color:${P.accent}}
.sv[aria-checked=true] .tick svg{opacity:1;transform:none}
.sn{font-weight:600;min-width:0;overflow-wrap:anywhere}
.sd{grid-column:2;display:flex;align-items:center;gap:6px;color:${P.muted};font-size:14px}.sd svg{width:14px;height:14px}
.sp{grid-row:1/span 2;grid-column:3;font-weight:650;font-variant-numeric:tabular-nums;white-space:nowrap}
.days{display:flex;gap:8px;overflow-x:auto;margin:0 -20px;padding:2px 20px 6px;scrollbar-width:none;scroll-snap-type:x proximity}.days::-webkit-scrollbar{display:none}
.dy{flex:none;display:grid;justify-items:center;gap:2px;width:60px;padding:10px 0;border-radius:${P.r}px;border:1px solid ${P.line};background:${P.bg};color:inherit;font:inherit;cursor:pointer;scroll-snap-align:start;transition:border-color .2s,background-color .2s}
.dy small{font-size:12px;color:${P.muted}}.dy b{font-size:19px;line-height:1.2;font-variant-numeric:tabular-nums}
.dy[aria-checked=true]{border-color:${P.accent};background:${P.accent};color:${P.on}}.dy[aria-checked=true] small{color:inherit;opacity:.85}
.dy:disabled{opacity:.4;cursor:default}
.slots{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:8px}
.sl{height:42px;border-radius:999px;border:1px solid ${P.line};background:${P.bg};color:inherit;font:600 14px/1 ${SANS};font-variant-numeric:tabular-nums;cursor:pointer;transition:border-color .2s,background-color .2s,color .2s}
.sl[aria-checked=true]{border-color:${P.accent};background:${P.accent};color:${P.on}}
.sl:disabled{opacity:.38;text-decoration:line-through;cursor:default}
.empty{margin:0;padding:18px;border-radius:${P.r}px;border:1px dashed ${P.line};color:${P.muted};font-size:15px;text-align:center}
.zone{margin:0;font-size:13px;color:${P.muted}}
.fl{display:grid;gap:12px}
.fl label{display:grid;gap:6px;font-size:14px;font-weight:600}
.fl input,.fl textarea{width:100%;min-width:0;padding:12px 14px;border-radius:${Math.max(8, P.r - 4)}px;border:1px solid ${P.line};background:${P.bg};color:inherit;font:400 16px/1.4 ${SANS};outline:none;transition:border-color .2s,box-shadow .2s}
.fl textarea{min-height:76px;resize:vertical}
.fl input:focus,.fl textarea:focus{border-color:${P.accent};box-shadow:0 0 0 3px ${P.soft}}
.fl [aria-invalid=true]{border-color:#D70015}
.go{width:100%;min-height:52px;margin-top:6px;padding:12px 18px;border:0;border-radius:${P.r}px;background:${P.accent};color:${P.on};font:650 16px/1.3 ${SANS};cursor:pointer;transition:transform .15s,opacity .2s}
.go:active{transform:scale(.985)}.go:disabled{opacity:.45;cursor:default}
.done{display:grid;justify-items:center;gap:10px;padding:24px 8px;text-align:center}
.done .ok{display:grid;place-items:center;width:56px;height:56px;border-radius:50%;background:${P.accent};color:${P.on}}.done .ok svg{width:28px;height:28px;stroke-width:2.6}
.done h2{font-size:22px}.done p{margin:0;color:${P.muted};max-width:36ch;text-wrap:pretty}
.done .when{color:${P.ink};font-weight:600}
.lnk{margin-top:8px;padding:10px 16px;border:1px solid ${P.line};border-radius:999px;background:transparent;color:inherit;font:600 14px ${SANS};cursor:pointer}
.blk{margin-top:40px}.blk h2{margin-bottom:14px}
dl{margin:0;display:grid}
.hr{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid ${P.line}}.hr:last-child{border-bottom:0}
.hr dt{font-weight:500}.hr dd{margin:0;font-variant-numeric:tabular-nums;text-align:right}.hr.off dd{color:${P.muted}}
.hr.now dt,.hr.now dd{font-weight:700}
.ct{display:grid;gap:12px;margin:0;padding:0;list-style:none}
footer{max-width:760px;margin:0 auto;padding:24px 20px 40px;color:${P.muted};font-size:13px;border-top:1px solid ${P.line}}
[hidden]{display:none!important}
.in{animation:in .36s cubic-bezier(.2,.7,.2,1) both}@keyframes in{from{opacity:0;transform:translateY(6px)}}
@media (min-width:640px){.card{padding:32px}.days{margin:0;padding:2px 0 6px}}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}`;

  // The page's own script: days and free times from the opening hours, the chosen service's length, and a confirmation
  // that says plainly this is a preview. No network: nothing typed here leaves the page.
  const js = `(function(){var C=JSON.parse(document.getElementById('cfg').textContent),L=C.lang,$=function(s){return document.querySelector(s)};
var svi=0,day=null,slot=null,now=new Date();
var fD=new Intl.DateTimeFormat(L,{weekday:'short'}),fN=new Intl.DateTimeFormat(L,{day:'numeric'}),fL=new Intl.DateTimeFormat(L,{weekday:'long',month:'long',day:'numeric'}),fT=new Intl.DateTimeFormat(L,{hour:'numeric',minute:'2-digit'});
function wd(d){return (d.getDay()+6)%7}
function at(d,m){var x=new Date(d);x.setHours(0,m,0,0);return x}
function len(){var s=C.sv[svi];return s?s.d:60}
function times(d){var h=C.h[wd(d)];if(!h)return[];var L2=len(),st=L2<30?15:30,out=[];for(var m=h[0];m+L2<=h[1];m+=st){var t=at(d,m);out.push({m:m,t:t,past:t<=now})}return out}
function free(d){return times(d).filter(function(x){return!x.past}).length}
var days=[];for(var i=0;i<14;i++){var d=new Date(now.getFullYear(),now.getMonth(),now.getDate()+i);days.push(d)}
function drawDays(){var el=$('#days');el.innerHTML='';var first=null;days.forEach(function(d,i){var b=document.createElement('button');b.type='button';b.className='dy';b.setAttribute('role','radio');var n=free(d);b.disabled=!n;b.innerHTML='<small></small><b></b>';b.firstChild.textContent=fD.format(d);b.lastChild.textContent=fN.format(d);b.setAttribute('aria-label',fL.format(d));if(n&&first===null)first=i;b.onclick=function(){day=i;slot=null;drawDays();drawSlots();sum()};el.appendChild(b)});if(day===null||!free(days[day]))day=first;[].forEach.call(el.children,function(b,i){b.setAttribute('aria-checked',String(i===day))})}
function drawSlots(){var el=$('#slots');el.innerHTML='';if(day===null){var p=document.createElement('p');p.className='empty';p.textContent=C.w.noTimes;el.appendChild(p);el.className='';return}el.className='slots';times(days[day]).forEach(function(x){var b=document.createElement('button');b.type='button';b.className='sl';b.setAttribute('role','radio');b.disabled=x.past;b.textContent=fT.format(x.t);b.setAttribute('aria-checked',String(slot===x.m));b.onclick=function(){slot=x.m;drawSlots();sum()};el.appendChild(b)})}
function when(){return day===null||slot===null?'':fL.format(days[day])+' · '+fT.format(at(days[day],slot))}
function sum(){var g=$('#go');if(!g)return;var s=C.sv[svi],w=when();g.disabled=!w||!s;g.textContent=w&&s?C.w.bookFor.replace('{service}',s.n).replace('{when}',w):C.w.book}
[].forEach.call(document.querySelectorAll('.sv'),function(b){b.onclick=function(){svi=+b.dataset.i;[].forEach.call(document.querySelectorAll('.sv'),function(x){x.setAttribute('aria-checked',String(x===b))});slot=null;drawDays();drawSlots();sum()}});
if($('#days')){drawDays();drawSlots();sum()}
var t=$('.hr:nth-child('+(wd(now)+1)+')');if(t)t.classList.add('now');
var g=$('#go');if(g)g.onclick=function(){var n=$('#bn'),c=$('#bc'),ok=true;[n,c].forEach(function(f){var bad=!f.value.trim();f.setAttribute('aria-invalid',String(bad));if(bad&&ok){f.focus();ok=false}});if(!ok)return;$('#when').textContent=C.sv[svi].n+' · '+when();$('#flow').hidden=true;var d=$('#done');d.hidden=false;d.classList.add('in');$('#book').scrollIntoView({block:'start'})};
var a=$('#again');if(a)a.onclick=function(){$('#done').hidden=true;$('#flow').hidden=false;slot=null;drawSlots();sum()};
document.addEventListener('click',function(e){var x=e.target.closest&&e.target.closest('a[href]');if(!x)return;var h=x.getAttribute('href');if(h==='#book'){e.preventDefault();$('#book').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}else if(!/^(tel|mailto):/.test(h))e.preventDefault()});
if(C.y)scrollTo(0,C.y);var tq=0;addEventListener('scroll',function(){clearTimeout(tq);tq=setTimeout(function(){try{parent.postMessage({bp:'y',y:scrollY},'*')}catch(e){}},80)},{passive:true});
})();`;

  const flow = svc.length
    ? `<div id="flow"><div class="st"><h2><i>1</i>${esc(b.chooseService)}</h2><div class="svs" role="radiogroup" aria-label="${esc(b.chooseService)}">${svcList}</div></div>
<div class="st"><h2><i>2</i>${esc(b.chooseTime)}</h2><div class="days" id="days" role="radiogroup" aria-label="${esc(b.chooseTime)}"></div><div id="slots" role="radiogroup" aria-label="${esc(b.times)}"></div></div>
<div class="st"><h2><i>3</i>${esc(b.details)}</h2><div class="fl"><label>${esc(b.yourName)}<input id="bn" autocomplete="off"></label><label>${esc(b.yourContact)}<input id="bc" autocomplete="off"></label><label>${esc(b.note)}<textarea id="bt"></textarea></label></div>
<button type="button" class="go" id="go" disabled>${esc(b.book)}</button></div></div>
<div class="done" id="done" hidden role="status"><span class="ok">${I.check}</span><h2>${esc(b.done)}</h2><p class="when" id="when"></p><p>${esc(b.doneSub)}</p><button type="button" class="lnk" id="again">${esc(b.again)}</button></div>`
    : `<p class="empty">${esc(b.noServices)}</p>`;

  return `<!doctype html><html lang="${esc(lang)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(name)}</title><style>${css}</style></head><body>
<p class="pv">${esc(b.preview)}</p>
<header class="top"><span class="mk" aria-hidden="true">${esc(initials(name))}</span><b>${esc(name)}</b><a href="#book">${esc(b.book)}</a></header>
<main><section class="hero"><h1>${esc(name)}</h1>${s.g.trim() ? `<p>${esc(s.g.trim())}</p>` : ''}${meta ? `<ul class="meta">${meta}</ul>` : ''}</section>
<section class="card" id="book" aria-label="${esc(b.book)}">${flow}</section>
<section class="blk"><h2>${esc(b.hours)}</h2><dl>${hoursRows}</dl></section>
${contactBlock}</main>
<footer>© ${new Date().getFullYear()} ${esc(name)}</footer>
<script type="application/json" id="cfg">${cfg}</script><script>${js}</script></body></html>`;
}

// ---- the address shown in the preview's browser bars ----------------------------------------------------------------------
/** "linden-hair-studio.equipe.page" from the name; names without Latin letters show "yourbusiness.equipe.page". */
export function hostFor(name: string): string {
  const slug = name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 28).replace(/-+$/, '');
  return `${slug || 'yourbusiness'}.equipe.page`;
}

// ---- the share link -----------------------------------------------------------------------------------------------------
// #p=<v><base64url>: 'z' = deflate-raw of the JSON (CompressionStream), 'j' = the JSON as it is (older browsers).
// The JSON holds `t`, the hour the link was made, so a link stops opening after EXPIRE_DAYS.
const b64 = (u8: Uint8Array) => btoa(String.fromCharCode(...u8)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64 = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (ch) => ch.charCodeAt(0));
async function pipe(u8: Uint8Array, t: TransformStream<Uint8Array, Uint8Array>): Promise<Uint8Array> {
  const out = new Response(new Blob([u8 as BlobPart]).stream().pipeThrough(t));
  return new Uint8Array(await out.arrayBuffer());
}
export async function encodeShare(s: BPState, nowMs = Date.now()): Promise<string> {
  const raw = new TextEncoder().encode(JSON.stringify({ ...s, t: Math.floor(nowMs / 3600000) }));
  if (typeof CompressionStream === 'function') {
    try { return 'z' + b64(await pipe(raw, new CompressionStream('deflate-raw') as unknown as TransformStream<Uint8Array, Uint8Array>)); } catch { /* fall through */ }
  }
  return 'j' + b64(raw);
}
/** The state in a link, 'expired' when older than EXPIRE_DAYS, or null when it cannot be read. */
export async function decodeShare(p: string, fallback: BPState, nowMs = Date.now()): Promise<BPState | 'expired' | null> {
  try {
    const kind = p[0], body = unb64(p.slice(1));
    let raw: Uint8Array;
    if (kind === 'z') raw = await pipe(body, new DecompressionStream('deflate-raw') as unknown as TransformStream<Uint8Array, Uint8Array>);
    else if (kind === 'j') raw = body;
    else return null;
    if (raw.length > 20000) return null;
    const o = JSON.parse(new TextDecoder().decode(raw));
    const t = Number(o && o.t);
    if (!Number.isFinite(t) || nowMs / 3600000 - t > EXPIRE_DAYS * 24) return 'expired';
    return clean(o, fallback);
  } catch { return null; }
}
