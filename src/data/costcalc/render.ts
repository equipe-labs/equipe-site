// Turns an estimate into the words and numbers the calculator shows. Used on the server (first paint, type pages,
// FAQ answers) and in the browser (every change), so both always agree.
import { MODEL, SOURCES, PLAN_MONTH_USD, FREE_CREDITS, estimate, stats, type Pick, type Estimate, type TypeKey, type FeatureKey } from './model';
import type { CostCopy } from './copy';

const fillT = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));
export const usdN = (n: number) => n.toLocaleString('en-US');
export const num = (n: number, lang: string) => new Intl.NumberFormat(lang).format(n);
/** "$1,200–$3,400", or one price when both ends are the same. */
export const usdRange = (a: number, b: number) => (Math.round(a) === Math.round(b) ? `$${usdN(Math.round(a))}` : `$${usdN(Math.round(a))}–$${usdN(Math.round(b))}`);
const CJK = (lang: string) => /^(ja|zh)/.test(lang);

/** "x, y and z" in the page's language (ja and zh use 、). */
export function list(items: string[], and: string, lang: string): string {
  if (CJK(lang)) return items.join('、');
  if (items.length < 2) return items.join('');
  return `${items.slice(0, -1).join(', ')} ${and} ${items[items.length - 1]}`;
}

/** The sign-up idea text for a pick, in the page's language. */
export function ideaText(c: CostCopy, p: Pick, lang: string): string {
  const feats = p.features.map((f) => lowerFirst(c.features[f].name, lang));
  return fillT(c.idea.tpl, { a: c.types[p.type].a, with: feats.length ? fillT(c.idea.with, { list: list(feats, c.idea.and, lang) }) : '', design: lowerFirst(c.designs[p.design].name, lang) });
}
/** Lower-cases the first letter where the language does that mid-sentence (not German nouns, not CJK). */
export function lowerFirst(s: string, lang: string): string {
  if (/^(de|ko|ja|zh)/.test(lang)) return s;
  return /^[A-Z][a-z]/.test(s) && !/^(AI|SaaS)/.test(s) ? s[0].toLowerCase() + s.slice(1) : s;
}

export const APP = 'https://app.equipe.im/start';
/** Sign-up with the idea filled in; source tagged for the funnel and attribution. */
export function signupHref(c: CostCopy, p: Pick, lang: string, placement: string): string {
  const q = new URLSearchParams({ idea: ideaText(c, p, lang), utm_source: 'equipe.im', utm_medium: 'tool', utm_campaign: 'app-cost-calculator', utm_content: `${placement}-${p.type}`, ref: 'costcalc' });
  return `${APP}?${q.toString()}`;
}

export interface View {
  e: Estimate;
  agency: string; agencyWeeks: string; diy: string; diyLine: string; diyFee: string;
  credits: string; creditsUsd: string; plan: string; year: string;
}

export function view(c: CostCopy, p: Pick, lang: string): View {
  const e = estimate(p), m = MODEL[p.type];
  const fee = m.diy.fees ? c.cols.diy[m.diy.fees] : '';
  return {
    e,
    agency: usdRange(e.agency[0], e.agency[1]),
    agencyWeeks: fillT(c.cols.agency.weeks, { a: e.weeks[0], b: e.weeks[1] }),
    diy: usdRange(e.diy[0], e.diy[1]),
    diyLine: fillT(c.cols.diy.tools, { tools: p.features.includes('booking') && !m.includes.includes('booking') ? `${m.diy.tools} + Acuity` : m.diy.tools, a: e.diyMonth[0], b: e.diyMonth[1] }).replace(`$${e.diyMonth[0]}–$${e.diyMonth[0]}`, `$${e.diyMonth[0]}`),
    diyFee: fee,
    credits: fillT(c.cols.equipe.credits, { a: num(e.credits[0], lang), b: num(e.credits[1], lang) }),
    creditsUsd: fillT(c.cols.equipe.usd, { a: usdN(Math.round(e.credits[0] / 100)), b: usdN(Math.round(e.credits[1] / 100)) }),
    plan: fillT(c.cols.equipe.plan, { m: PLAN_MONTH_USD }),
    year: fillT(c.cols.equipe.year, { a: usdN(e.equipeYear[0]), b: usdN(e.equipeYear[1]) }),
  };
}

/** The measured-data paragraph under the results. */
export function measured(c: CostCopy, items: number, lang: string) {
  return {
    text: fillT(c.measured.text, { n: stats.projects, date: stats.asOf, p25: num(stats.perItem.credits.p25, lang), p75: num(stats.perItem.credits.p75, lang), items: num(Math.round(items), lang) }),
    firstLive: fillT(c.measured.firstLive, { c: num(stats.firstLive.credits.median, lang), m: stats.firstLive.minutes.median, n: stats.firstLive.n }),
    firstWeek: fillT(c.measured.firstWeek, { c: num(stats.firstWeek.credits.median, lang), n: stats.firstWeek.n }),
  };
}

const srcNames = (ids: string[]) => ids.map((id) => `${SOURCES[id].publisher}, ${SOURCES[id].date}`).join('; ');

/** FAQ items for a type page (answers filled with that type's default estimate). */
export function typeFaq(c: CostCopy, type: TypeKey, p: Pick, lang: string) {
  const e = estimate(p), m = MODEL[type], a = c.types[type].a;
  const d = m.drivers.slice(0, 3).map((k) => lowerFirst((c.drivers as Record<string, { t: string }>)[k].t, lang));
  const items = [
    { question: fillT(c.faq.cost.q, { a }), answer: fillT(c.faq.cost.a, { a, lo: usdN(e.agency[0]), hi: usdN(e.agency[1]), src: srcNames(m.agencySources), tools: m.diy.tools, dlo: usdN(e.diy[0]), dhi: usdN(e.diy[1]), clo: num(e.credits[0], lang), chi: num(e.credits[1], lang), ulo: usdN(Math.round(e.credits[0] / 100)), uhi: usdN(Math.round(e.credits[1] / 100)), m: PLAN_MONTH_USD }) },
    { question: fillT(c.faq.time.q, { a }), answer: fillT(c.faq.time.a, { a, wa: m.weeks[0], wb: m.weeks[1], n: stats.firstLive.n, min: stats.firstLive.minutes.median }) },
    { question: fillT(c.faq.vary.q, { a }), answer: fillT(c.faq.vary.a, { a, d1: d[0], d2: d[1], d3: d[2] }) },
    { question: fillT(c.faq.quote.q, { a }), answer: fillT(c.faq.quote.a, { free: num(FREE_CREDITS, lang) }) },
  ];
  if (type === 'mobile-app') items.push({ question: c.faq.mobile.q, answer: c.faq.mobile.a });
  if (m.proxy) items.push({ question: c.faq.proxy.q, answer: fillT(c.faq.proxy.a, { src: srcNames(m.agencySources) }) });
  return items;
}

export const featureIncluded = (type: TypeKey, f: FeatureKey) => MODEL[type].includes.includes(f);
export { fillT };
