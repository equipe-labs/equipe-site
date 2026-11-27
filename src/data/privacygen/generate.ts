/**
 * The privacy policy generator's engine: answers in, a policy out (blocks, then HTML or Markdown). Deterministic, no AI,
 * no network: the same answers always give the same policy. Runs at build time (the example on the page) and in the
 * browser (every change). The words come from the launch kit's templates (policy/kit-<locale>.json, copied from the
 * cloud repo's kit-i18n.js by scripts/sync-kit-legal.mjs) plus the generator's own (policy/extra-<locale>.ts).
 */
import type en from './policy/extra-en';
import type kitEn from './policy/kit-en.json';

export type PolicyWords = typeof kitEn & typeof en;
export type Region = 'eu' | 'ca' | 'kr';
export type Collect = 'contact' | 'accounts' | 'newsletter' | 'payments' | 'uploads' | 'bookings' | 'posts' | 'location' | 'health' | 'children';
export type Analytics = 'none' | 'cookieless' | 'ga' | 'other';
export interface Answers {
  company: string; site: string; url: string; email: string; country: string; officer: string;
  collect: Collect[]; analytics: Analytics; analyticsTool: string;
  ads: string[]; payments: string[]; hosting: string; others: string;
  regions: Region[]; date: string;
}
export type Block = { h: string } | { p: string } | { ul: string[] };

export const COLLECT: Collect[] = ['contact', 'accounts', 'newsletter', 'payments', 'uploads', 'bookings', 'posts', 'location', 'health', 'children'];
export const REGIONS: Region[] = ['eu', 'ca', 'kr'];
export const ANALYTICS: Analytics[] = ['none', 'cookieless', 'ga', 'other'];
export const AD_TOOLS = ['Google Ads', 'Meta Pixel', 'TikTok Pixel', 'LinkedIn Insight Tag'];
export const PAY_TOOLS = ['Stripe', 'PayPal', 'Paddle', 'Lemon Squeezy'];

export const EXAMPLE: Answers = {
  company: '', site: '', url: '', email: '', country: '', officer: '',
  collect: ['contact', 'newsletter'], analytics: 'cookieless', analyticsTool: '', ads: [], payments: [], hosting: '', others: '',
  regions: [], date: '',
};


/** The laws a policy refers to, with their official pages; which ones show depends on the answers. */
export const LAWS: Record<string, string> = {
  gdpr: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  ukgdpr: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/',
  eprivacy: 'https://eur-lex.europa.eu/eli/dir/2002/58/oj',
  ccpa: 'https://oag.ca.gov/privacy/ccpa',
  caloppa: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22575',
  pipa: 'https://www.pipc.go.kr/eng/index.do',
  ecommerce: 'https://www.ftc.go.kr/eng/index.do',
  coppa: 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-312',
};
export function lawsFor(regions: Region[], collect: Collect[], cookies: boolean): string[] {
  const out: string[] = [];
  if (regions.includes('eu')) out.push('gdpr', 'ukgdpr', ...(cookies ? ['eprivacy'] : []));
  if (regions.includes('ca')) out.push('ccpa', 'caloppa');
  if (regions.includes('kr')) out.push('pipa', ...(collect.includes('payments') ? ['ecommerce'] : []));
  if (collect.includes('children')) out.push('coppa');
  return out;
}

const fill = (s: string, v: Record<string, string>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? v[k] : m));
const split = (s: string) => s.split(/[,\n、，]/).map((x) => x.trim()).filter(Boolean).slice(0, 12);
const clean = (s: string, n: number) => String(s || '').replace(/[\u0000-\u001f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);

/** The policy as blocks (headings, paragraphs, lists), in the words' language. */
export function policyBlocks(raw: Answers, W: PolicyWords, fallback: { company: string; site: string; email: string }): Block[] {
  const a = { ...raw, company: clean(raw.company, 80), site: clean(raw.site, 80), url: clean(raw.url, 120), email: clean(raw.email, 120), country: clean(raw.country, 60), officer: clean(raw.officer, 80), analyticsTool: clean(raw.analyticsTool, 60), hosting: clean(raw.hosting, 60), others: clean(raw.others, 300) };
  const has = (c: Collect) => a.collect.includes(c);
  const company = a.company || fallback.company;
  const name = a.site || a.url.replace(/^https?:\/\//, '').replace(/\/$/, '') || '';
  const email = a.email || fallback.email;
  const v = { company, name: name || fallback.site, email, country: a.country, officer: a.officer || company, date: a.date };
  const same = !name || name.toLowerCase() === company.toLowerCase();
  const out: Block[] = [];
  const h = (t: string) => out.push({ h: t });
  const p = (t: string) => out.push({ p: fill(t, v) });
  const ul = (xs: string[]) => { if (xs.length) out.push({ ul: xs.map((x) => fill(x, v)) }); };

  const anTool = a.analytics === 'ga' ? 'Google Analytics' : a.analytics === 'other' ? a.analyticsTool || '' : '';
  const ads = a.ads.map((x) => clean(x, 40)).filter(Boolean);
  const cookieAn = a.analytics === 'ga' || a.analytics === 'other';
  const pays = has('payments') ? a.payments.map((x) => clean(x, 40)).filter(Boolean) : [];

  p(same ? W.p_intro_same : W.p_intro);

  h(W.h_collect);
  const data = [W.c_logs_g];
  if (a.analytics === 'cookieless') data.push(W.an_cookieless);
  if (cookieAn) data.push(fill(W.an_cookies, { tool: anTool || W.an_tool_generic }));
  if (ads.length) data.push(fill(W.c_ads, { tools: ads.join(', ') }));
  if (has('contact')) data.push(W.c_contact);
  if (has('accounts')) data.push(W.c_accounts_g);
  if (has('newsletter')) data.push(W.c_mail);
  if (has('payments')) data.push(W.c_pay_g);
  if (has('uploads')) data.push(W.c_files);
  ul(data);

  h(W.h_use);
  p(W.p_use);

  h(W.h_cookies);
  const what = [cookieAn ? W.what_an : '', ads.length ? W.what_ads : ''].filter(Boolean).join(W.and);
  if (what) p([has('accounts') ? W.ck_essential : '', fill(W.ck_consent_g, { what })].filter(Boolean).join(' '));
  else p(has('accounts') ? W.ck_essential : W.ck_none);
  if (a.regions.includes('kr')) p(W.pipa_cookies);

  h(W.h_share);
  p(W.p_share);
  const prov = [a.hosting ? fill(W.s_host, { name: a.hosting }) : W.s_host_none];
  for (const x of pays) prov.push(fill(W.s_pay, { name: x }));
  if (anTool) prov.push(fill(W.s_an, { name: anTool }));
  for (const x of ads) prov.push(fill(W.s_ads, { name: x }));
  for (const x of split(a.others)) prov.push(fill(W.s_other, { name: clean(x, 40) }));
  ul(prov);
  p(W.p_law);

  h(W.h_transfer);
  p(W.p_transfer);

  h(W.h_keep);
  p(W.p_keep_g);

  h(W.h_rights);
  p(W.p_rights);

  if (a.regions.includes('eu')) {
    h(W.h_gdpr);
    p(a.country ? W.gdpr_controller_in : W.gdpr_controller);
    p(W.gdpr_bases);
    ul([W.gdpr_b_contract, W.gdpr_b_legit, ...(cookieAn || ads.length || has('newsletter') ? [W.gdpr_b_consent] : []), ...(has('payments') ? [W.gdpr_b_legal] : [])]);
    p(W.gdpr_rights);
    p(W.gdpr_transfer);
    p(W.gdpr_complain);
  }
  if (a.regions.includes('ca')) {
    h(W.h_ccpa);
    p(W.ccpa_intro);
    p(ads.length ? W.ccpa_ads : W.ccpa_nosell);
    p(W.ccpa_rights);
    p(W.ccpa_dnt);
  }
  if (a.regions.includes('kr')) {
    h(W.h_pipa);
    p(W.pipa_intro);
    ul([W.pipa_items, has('payments') ? `${W.pipa_keep} ${W.pipa_keep_pay}` : W.pipa_keep, W.pipa_third, W.pipa_entrust, W.pipa_rights, W.pipa_safety]);
    p(W.pipa_officer);
    p(W.pipa_remedy);
  }

  h(W.h_kids);
  p(has('children') ? W.p_kids_yes : W.p_kids);

  const extra = [has('bookings') ? W.x_bookings : '', has('health') ? W.x_health : '', has('location') ? W.x_location : '', has('posts') ? W.x_content : ''].filter(Boolean);
  if (extra.length) { h(W.h_extra); for (const x of extra) p(x); }

  h(W.h_change);
  p(W.p_change);
  h(W.h_contact);
  p(W.p_contact_mail);
  return out;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
/** One paragraph's HTML: an email address becomes a mailto link. */
const inline = (s: string) => esc(s).replace(/([\w.+-]+@[\w-]+(\.[\w-]+)+)/g, '<a href="mailto:$1">$1</a>');

/** The policy body as HTML (h1, date, sections). */
export function policyHtml(blocks: Block[], W: PolicyWords, date: string): string {
  return `<h1>${esc(W.priv_title)}</h1>\n<p><em>${esc(fill(W.updated, { date }))}</em></p>\n` + blocks.map((b) => ('h' in b ? `<h2>${esc(b.h)}</h2>` : 'p' in b ? `<p>${inline(b.p)}</p>` : `<ul>\n${b.ul.map((x) => `  <li>${inline(x)}</li>`).join('\n')}\n</ul>`)).join('\n');
}
/** The policy as Markdown. */
export function policyMd(blocks: Block[], W: PolicyWords, date: string): string {
  return `# ${W.priv_title}\n\n_${fill(W.updated, { date })}_\n\n` + blocks.map((b) => ('h' in b ? `## ${b.h}` : 'p' in b ? b.p : b.ul.map((x) => `- ${x}`).join('\n'))).join('\n\n') + '\n';
}
/** A complete, plain HTML page to host as it is. */
export function policyPage(blocks: Block[], W: PolicyWords, date: string, lang: string): string {
  return `<!doctype html>\n<html lang="${esc(lang)}">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${esc(W.priv_title)}</title>\n<style>body{max-width:720px;margin:40px auto;padding:0 20px;font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Apple SD Gothic Neo",sans-serif;color:#1d1d1f}h1{font-size:2rem;line-height:1.2}h2{font-size:1.15rem;margin-top:2rem}a{color:#2F5BEA}</style>\n</head>\n<body>\n${policyHtml(blocks, W, date)}\n</body>\n</html>\n`;
}
