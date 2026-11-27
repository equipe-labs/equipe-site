// The editor's repeating rows (services, opening hours) as HTML, shared by the page (first render, at build time) and the
// browser (src/scripts/bookingpage.ts re-renders a list when a row is added or removed), so both draw the same markup.
// Menus are custom buttons (data-dd) that open one shared list (no native <select> or time inputs).
import type { BookingCopy } from './types';
import { MAX, clock, duration, esc, weekdays, type BPState } from './model';

const X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const CHEV = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

const dd = (kind: string, i: number, label: string, value: string, extra = '') =>
  `<button type="button" class="bp-dd" data-dd="${kind}" data-i="${i}" aria-haspopup="listbox" aria-expanded="false" aria-label="${esc(label)}"${extra}><span>${esc(value)}</span>${CHEV}</button>`;

export function serviceRows(c: BookingCopy, s: BPState): string {
  const E = c.ed;
  return s.sv.map((x, i) => `<li class="bp-svc" data-i="${i}">
  <div class="bp-f bp-sn"><label for="bp-sv-n-${i}">${esc(E.svcName)}</label><input id="bp-sv-n-${i}" data-f="sv.n" data-i="${i}" maxlength="${MAX.svc}" value="${esc(x.n)}" placeholder="${esc(E.svcNamePh)}" autocomplete="off"></div>
  <div class="bp-f bp-sd"><span class="bp-l" id="bp-sv-d-${i}">${esc(E.duration)}</span>${dd('dur', i, E.duration, duration(c, x.d), ` aria-describedby="bp-sv-d-${i}"`)}</div>
  <div class="bp-f bp-sp"><label for="bp-sv-p-${i}">${esc(E.price)}</label><input id="bp-sv-p-${i}" data-f="sv.p" data-i="${i}" maxlength="${MAX.price}" value="${esc(x.p)}" placeholder="${esc(E.pricePh)}" autocomplete="off"></div>
  <button type="button" class="bp-x" data-rm="${i}" aria-label="${esc(E.remove)}" title="${esc(E.remove)}"${s.sv.length < 2 ? ' hidden' : ''}>${X}</button>
</li>`).join('');
}

export function hourRows(c: BookingCopy, s: BPState, lang: string): string {
  const E = c.ed, names = weekdays(lang, 'long');
  return names.map((d, i) => {
    const h = s.h[i];
    return `<li class="bp-day${h ? '' : ' off'}" data-i="${i}">
  <button type="button" class="bp-sw" role="switch" aria-checked="${!!h}" data-day="${i}" aria-label="${esc(d)}"><span class="knob"></span></button>
  <span class="bp-dn">${esc(d)}</span>
  <span class="bp-hh">${h
    ? `${dd('open', i, `${d} · ${E.from}`, clock(lang, h[0]))}<span class="bp-to" aria-hidden="true">–</span>${dd('close', i, `${d} · ${E.to}`, clock(lang, h[1]))}`
    : `<span class="bp-cl">${esc(E.closed)}</span>`}</span>
</li>`;
  }).join('');
}
