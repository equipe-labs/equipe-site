// Live mockups of the visitor's logo (HTML and CSS, no AI, free): a browser tab with the favicon at its real 16 px, an app
// icon on a phone's home screen, a business card, a storefront sign, a social profile and a website header in the
// style of a site equipe builds. Every one is redrawn when the design changes.
import type { Composed, Design } from './compose';

export interface MockText { tab: string; phone: string; card: string; sign: string; social: string; site: string; nav: [string, string, string]; hero: string; heroSub: string; cta: string; role: string; posts: string; followers: string; open: string }
const esc = (s: unknown) => String(s ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);
const img = (svg: string, cls: string, alt = '') => `<img class="${cls}" alt="${esc(alt)}" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}" decoding="async">`;

/** lockups: the logo for a light ground and for a dark/brand ground (white). */
export function mockups(name: string, d: Design, light: Composed, onBrand: Composed, t: MockText, about: string) {
  const host = `${name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '') || 'yourbusiness'}.com`;
  const fig = (k: string, label: string, body: string) => `<figure class="lg-mock lg-m-${k}"><div class="lg-mbox">${body}</div><figcaption>${esc(label)}</figcaption></figure>`;
  const tab = `<div class="lg-browser"><div class="lg-tabs"><span class="lg-dots"><i></i><i></i><i></i></span><span class="lg-tab">${img(light.icon, 'lg-fav', '')}<span>${esc(name)}</span><b aria-hidden="true">×</b></span><span class="lg-tab ghost"><i></i><span>New Tab</span></span></div><div class="lg-url"><span>${esc(host)}</span></div><div class="lg-tabzoom">${img(light.icon, 'lg-fav16', '')}<span>16 px</span></div></div>`;
  const apps = ['#e5e7eb', '#d1d5db', '#e5e7eb', '#d1d5db', '#d1d5db', '#e5e7eb', '#d1d5db'];
  const phone = `<div class="lg-phone"><div class="lg-screen"><div class="lg-time">9:41</div><div class="lg-home">${apps.slice(0, 5).map((c) => `<span class="lg-app" style="--c:${c}"><i></i></span>`).join('')}<span class="lg-app me"><i>${img(light.icon, 'lg-appic', '')}</i><small>${esc(name)}</small></span>${apps.slice(5).map((c) => `<span class="lg-app" style="--c:${c}"><i></i></span>`).join('')}</div></div></div>`;
  const card = `<div class="lg-card-mock"><div class="lg-bc front">${img(light.svg, 'lg-bclogo', name)}</div><div class="lg-bc back" style="--a:${esc(d.accent)}"><b>${esc(name)}</b><span>${esc(t.role)}</span><span>hello@${esc(host)}</span><span>${esc(host)}</span></div></div>`;
  const sign = `<div class="lg-store" style="--a:${esc(d.accent)}"><div class="lg-awning"></div><div class="lg-board">${img(onBrand.svg, 'lg-signlogo', name)}</div><div class="lg-window"><span>${esc(t.open)}</span></div><div class="lg-door"></div></div>`;
  const social = `<div class="lg-social"><div class="lg-cover" style="--a:${esc(d.accent)}"></div><div class="lg-ava">${img(light.icon, 'lg-avaimg', name)}</div><b>${esc(name)}</b><small>@${esc(host.replace(/\.com$/, ''))}</small><div class="lg-stats"><span><b>128</b> ${esc(t.posts)}</span><span><b>2.4k</b> ${esc(t.followers)}</span></div></div>`;
  const site = `<div class="lg-site" style="--a:${esc(d.accent)}"><div class="lg-snav">${img(light.svg, 'lg-sitelogo', name)}<nav>${t.nav.map((n) => `<span>${esc(n)}</span>`).join('')}</nav><span class="lg-sbtn">${esc(t.cta)}</span></div><div class="lg-shero"><h4>${esc(t.hero)}</h4><p>${esc(about || t.heroSub)}</p><span class="lg-sbtn big">${esc(t.cta)}</span></div></div>`;
  return fig('tab', t.tab, tab) + fig('phone', t.phone, phone) + fig('card', t.card, card) + fig('site', t.site, site) + fig('sign', t.sign, sign) + fig('social', t.social, social);
}
