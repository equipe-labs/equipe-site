/**
 * The app cost calculator's numbers (/tools/app-cost-calculator/ and its per-type pages). No imports, so the client
 * script, the pages and scripts/og-costcalc.mjs all read the same model.
 *
 * Three columns, each from a different kind of evidence:
 *  - Agency or freelancer: published 2025–2026 price guides (SOURCES, each dated). The design level picks a part of the
 *    published range; features beyond what the type already includes widen it by the same share of extra work our own
 *    estimate counts. That scaling is our method, said on the page, not a number from the source.
 *  - Do it yourself with no-code tools: list prices of the tools (checked 2026-11-28) for the first year, plus your time.
 *  - With equipe: pieces of work x what one piece of work really cost on equipe (costcalc-stats.json, measured from
 *    real customer projects: AI work, planning and review, deploys and the cloud computer), plus the Team plan's base fee
 *    to keep it live. An estimate, said as one.
 */
import STATS from '../costcalc-stats.json' with { type: 'json' };

export const TYPES = ['landing-page', 'website', 'online-store', 'booking-app', 'marketplace', 'saas', 'mobile-app', 'internal-tool', 'community', 'directory'] as const;
export type TypeKey = (typeof TYPES)[number];
export const FEATURES = ['login', 'payments', 'booking', 'admin', 'multilingual', 'ai', 'integrations'] as const;
export type FeatureKey = (typeof FEATURES)[number];
export const DESIGNS = ['simple', 'custom', 'premium'] as const;
export type DesignKey = (typeof DESIGNS)[number];
export const TIMELINES = ['asap', 'month', 'quarter'] as const;
export type TimelineKey = (typeof TIMELINES)[number];

export interface Source { id: string; publisher: string; title: string; url: string; date: string; note?: string }

/** Where the agency, freelancer and tool numbers come from. `date` is the date the page shows (or "undated, 2026"). */
export const SOURCES: Record<string, Source> = {
  pce: { id: 'pce', publisher: 'Project Cost Estimator', title: 'Website cost', url: 'https://projectcostestimator.com/website-cost', date: '2026-11', note: 'calculator-based ranges, not a survey' },
  pceMember: { id: 'pceMember', publisher: 'Project Cost Estimator', title: 'Member portal website cost (2026)', url: 'https://projectcostestimator.com/blog/member-portal-website-cost-2026', date: '2026-06-16' },
  webfx: { id: 'webfx', publisher: 'WebFX', title: 'How much does a website cost?', url: 'https://www.webfx.com/blog/web-design/how-much-does-a-website-cost/', date: '2026-05-15' },
  designrush: { id: 'designrush', publisher: 'DesignRush', title: 'Web development pricing', url: 'https://www.designrush.com/agency/web-development-companies/pricing', date: '2026', note: 'no exact date on the page' },
  raftBooking: { id: 'raftBooking', publisher: 'RaftLabs', title: 'Cost to build an app like Calendly', url: 'https://www.raftlabs.com/blog/cost-to-build-app-like-calendly', date: '2026', note: 'a development vendor; no exact date on the page' },
  raftMarket: { id: 'raftMarket', publisher: 'RaftLabs', title: 'Marketplace website cost', url: 'https://www.raftlabs.com/blog/marketplace-website-cost', date: '2026', note: 'a development vendor; no exact date on the page' },
  topflight: { id: 'topflight', publisher: 'Topflight', title: 'App development costs', url: 'https://topflightapps.com/ideas/app-development-costs/', date: '2026-11', note: 'a US agency’s own pricing' },
  netguru: { id: 'netguru', publisher: 'Netguru', title: 'SaaS development costs', url: 'https://www.netguru.com/blog/saas-development-costs', date: '2026-11-27' },
  clutchMobile: { id: 'clutchMobile', publisher: 'Clutch', title: 'How much does it cost to build a mobile app?', url: 'https://clutch.co/app-developers/resources/cost-build-mobile-app', date: '2026-09-21' },
  clutchWeb: { id: 'clutchWeb', publisher: 'Clutch', title: 'Web development pricing guide', url: 'https://clutch.co/web-developers/pricing', date: '2026-11-12' },
  cadence: { id: 'cadence', publisher: 'Cadence', title: 'Cost to build an admin dashboard', url: 'https://cadence.withremote.ai/blog/cost-to-build-an-admin-dashboard', date: '2026-05-17', note: 'a development vendor' },
  // Tool list prices (official pricing pages; US prices from archived copies of 2026-10 and 2026-11).
  squarespace: { id: 'squarespace', publisher: 'Squarespace', title: 'Pricing', url: 'https://www.squarespace.com/pricing', date: '2026-10-22' },
  shopify: { id: 'shopify', publisher: 'Shopify', title: 'Pricing', url: 'https://www.shopify.com/pricing', date: '2026-11-27' },
  acuity: { id: 'acuity', publisher: 'Acuity Scheduling', title: 'Plans', url: 'https://acuityscheduling.com/signup.php', date: '2026-11-28' },
  sharetribe: { id: 'sharetribe', publisher: 'Sharetribe', title: 'Pricing', url: 'https://www.sharetribe.com/pricing/', date: '2026-11-10' },
  bubble: { id: 'bubble', publisher: 'Bubble', title: 'Pricing', url: 'https://bubble.io/pricing', date: '2026-11-28' },
  glide: { id: 'glide', publisher: 'Glide', title: 'Pricing', url: 'https://www.glideapps.com/pricing', date: '2026-11-16' },
  softr: { id: 'softr', publisher: 'Softr', title: 'Pricing', url: 'https://www.softr.io/pricing', date: '2026-11-16' },
  circle: { id: 'circle', publisher: 'Circle', title: 'Pricing', url: 'https://circle.so/pricing', date: '2026-11-17' },
  webflow: { id: 'webflow', publisher: 'Webflow', title: 'Pricing', url: 'https://webflow.com/pricing', date: '2026-11-16' },
};

export interface TypeModel {
  /** Pieces of work for a complete first version, with the features in `includes`. */
  items: number;
  /** Features this kind of app already has (they add no work and show as included). */
  includes: FeatureKey[];
  /** Published agency or freelancer range for a first version, USD. */
  agency: [number, number];
  /** Typical timeline the sources give, in weeks. */
  weeks: [number, number];
  /** Sources behind `agency` and `weeks`. */
  agencySources: string[];
  /** True when no source covers exactly this type and the range is the nearest one (said on the page). */
  proxy?: boolean;
  /** The no-code stack: tool names, monthly USD on yearly billing (low and high plan), sources, and a fee note key. */
  diy: { tools: string; month: [number, number]; sources: string[]; fees?: 'cards' | 'cards2' | 'community' };
  /** Which pieces of the copy's "what drives the cost" list apply (keys into the locale's drivers). */
  drivers: string[];
  /** A real example (anonymized customer build or a demo built on equipe); key into the locale's examples. */
  example?: string;
}

export const MODEL: Record<TypeKey, TypeModel> = {
  'landing-page': { items: 2, includes: [], agency: [2100, 7300], weeks: [1, 2], agencySources: ['pce'], diy: { tools: 'Squarespace', month: [29, 49], sources: ['squarespace'] }, drivers: ['design', 'copy', 'forms', 'analytics'], example: 'fernly' },
  website: { items: 5, includes: [], agency: [3650, 12750], weeks: [2, 8], agencySources: ['pce', 'designrush', 'webfx'], diy: { tools: 'Squarespace', month: [29, 49], sources: ['squarespace'] }, drivers: ['pages', 'design', 'copy', 'cms', 'multilingual'], example: 'redesign' },
  'online-store': { items: 9, includes: ['payments', 'admin'], agency: [5800, 21200], weeks: [3, 8], agencySources: ['pce', 'webfx'], diy: { tools: 'Shopify', month: [29, 39], sources: ['shopify'], fees: 'cards' }, drivers: ['products', 'payments', 'shipping', 'design', 'integrations'], example: 'tidepool' },
  'booking-app': { items: 7, includes: ['booking', 'admin'], agency: [15000, 50000], weeks: [12, 24], agencySources: ['raftBooking'], diy: { tools: 'Squarespace + Acuity', month: [45, 76], sources: ['squarespace', 'acuity'] }, drivers: ['calendar', 'reminders', 'payments', 'staff', 'integrations'], example: 'booking' },
  marketplace: { items: 16, includes: ['login', 'payments', 'admin'], agency: [15000, 220000], weeks: [12, 52], agencySources: ['raftMarket', 'topflight'], diy: { tools: 'Sharetribe', month: [199, 199], sources: ['sharetribe'], fees: 'cards2' }, drivers: ['twoSides', 'payments', 'trust', 'search', 'admin'] },
  saas: { items: 14, includes: ['login', 'admin'], agency: [25000, 150000], weeks: [12, 24], agencySources: ['netguru', 'pce'], diy: { tools: 'Bubble', month: [32, 119], sources: ['bubble'] }, drivers: ['accounts', 'data', 'billing', 'ai', 'integrations'], example: 'dashboard' },
  'mobile-app': { items: 10, includes: ['login'], agency: [10000, 180000], weeks: [8, 48], agencySources: ['clutchMobile', 'topflight'], diy: { tools: 'Glide', month: [25, 125], sources: ['glide'] }, drivers: ['platforms', 'accounts', 'offline', 'push', 'stores'], example: 'littlewins' },
  'internal-tool': { items: 8, includes: ['login', 'admin'], agency: [2000, 80000], weeks: [4, 12], agencySources: ['cadence'], diy: { tools: 'Softr', month: [19, 99], sources: ['softr'] }, drivers: ['data', 'roles', 'integrations', 'reports', 'ai'], example: 'clinic' },
  community: { items: 10, includes: ['login', 'admin'], agency: [3500, 30000], weeks: [4, 8], agencySources: ['pceMember'], diy: { tools: 'Circle', month: [89, 199], sources: ['circle'], fees: 'community' }, drivers: ['members', 'content', 'payments', 'moderation', 'email'], example: 'photos' },
  directory: { items: 8, includes: ['admin'], agency: [5000, 30000], weeks: [6, 10], agencySources: ['designrush'], proxy: true, diy: { tools: 'Softr', month: [19, 99], sources: ['softr'] }, drivers: ['listings', 'search', 'submissions', 'payments', 'seo'] },
};

/** Extra pieces of work a feature adds when the type does not already include it. */
/**
 * Examples. `real`: an anonymized customer project (no name, no link; numbers from the same ledger, snapshot 2026-11-28):
 * credits until the first version was live, minutes from team creation to that, then what the project spent while
 * the person kept building, over how many pieces of work. `demo`: a product the equipe team built on equipe to show it
 * (src/data/gallery.json), with its time; no credit figure, because demos are not billed.
 */
export const EXAMPLES: Record<string, { kind: 'real'; firstCredits: number; firstMinutes?: number; laterCredits: number; laterItems: number } | { kind: 'demo'; url: string; minutes: number }> = {
  booking: { kind: 'real', firstCredits: 384, firstMinutes: 7, laterCredits: 511, laterItems: 1 },
  redesign: { kind: 'real', firstCredits: 3362, firstMinutes: 164, laterCredits: 5119, laterItems: 7 },
  dashboard: { kind: 'real', firstCredits: 477, firstMinutes: 9, laterCredits: 1038, laterItems: 3 },
  clinic: { kind: 'real', firstCredits: 1638, firstMinutes: 26, laterCredits: 3290, laterItems: 8 },
  photos: { kind: 'real', firstCredits: 292, firstMinutes: 6, laterCredits: 15805, laterItems: 31 },
  fernly: { kind: 'demo', url: 'https://fernly.equipe.page', minutes: 35 },
  tidepool: { kind: 'demo', url: 'https://tidepool.equipe.page', minutes: 40 },
  littlewins: { kind: 'demo', url: 'https://littlewins.equipe.page', minutes: 35 },
};

export const FEATURE_ITEMS: Record<FeatureKey, number> = { login: 2, payments: 3, booking: 3, admin: 2, multilingual: 2, ai: 3, integrations: 2 };
/** The design level multiplies the work (ours) and picks a part of the published range (agency). */
export const DESIGN_ITEMS: Record<DesignKey, number> = { simple: 1, custom: 1.25, premium: 1.5 };
const DESIGN_BAND: Record<DesignKey, [number, number]> = { simple: [0, 0.4], custom: [0.25, 0.75], premium: [0.6, 1] };
/** Monthly tool add-ons a feature needs on the no-code route (booking: Acuity Starter to Standard, yearly billing). */
const DIY_ADDON: Partial<Record<FeatureKey, [number, number]>> = { booking: [16, 27] };
/** The Team plan's base fee (hosting, storage, 5 people), yearly: src/data/plan.ts YEARLY. */
export const PLAN_YEAR_USD = 190;
export const PLAN_MONTH_USD = 19;
/** Credits a new team starts with (no card). */
export const FREE_CREDITS = 500;

export const stats = STATS;
/** What one piece of work cost on equipe, all in (25th to 75th percentile across real projects), in credits. */
export const PER_ITEM: [number, number] = [STATS.perItem.credits.p25, STATS.perItem.credits.p75];

export interface Pick { type: TypeKey; features: FeatureKey[]; design: DesignKey; timeline: TimelineKey }
export interface Estimate {
  items: number;
  /** Agency or freelancer, USD. `beyond` = the features pushed it past the published range. */
  agency: [number, number]; beyond: boolean; weeks: [number, number];
  /** No-code, first year of subscriptions, USD. */
  diy: [number, number]; diyMonth: [number, number];
  /** equipe: credits for the first version, then the plan to keep it live. */
  credits: [number, number]; equipeYear: [number, number];
  /** Whether the agency's typical timeline is longer than the timeline picked. */
  slow: boolean;
}

const roundTo = (n: number, step: number) => Math.round(n / step) * step;
const nice = (n: number) => (n >= 10000 ? roundTo(n, 1000) : n >= 1000 ? roundTo(n, 100) : roundTo(n, 10));
const TIMELINE_WEEKS: Record<TimelineKey, number> = { asap: 2, month: 5, quarter: 13 };

export const DEFAULT_PICK = (type: TypeKey): Pick => ({ type, features: [...MODEL[type].includes], design: 'custom', timeline: 'month' });

export function estimate(p: Pick): Estimate {
  const m = MODEL[p.type];
  const extra = p.features.filter((f) => !m.includes.includes(f)).reduce((s, f) => s + FEATURE_ITEMS[f], 0);
  const items = Math.round((m.items + extra) * DESIGN_ITEMS[p.design] * 10) / 10;
  const baseItems = m.items * DESIGN_ITEMS[p.design];
  const scale = items / baseItems;
  const [lo, hi] = m.agency, [a, b] = DESIGN_BAND[p.design];
  const aLo = (lo + (hi - lo) * a) * scale, aHi = (lo + (hi - lo) * b) * scale;
  const addon = p.features.filter((f) => !m.includes.includes(f)).reduce((s, f) => [s[0] + (DIY_ADDON[f]?.[0] ?? 0), s[1] + (DIY_ADDON[f]?.[1] ?? 0)], [0, 0]);
  const dm: [number, number] = [m.diy.month[0] + addon[0], m.diy.month[1] + addon[1]];
  const cLo = roundTo(items * PER_ITEM[0], 50), cHi = roundTo(items * PER_ITEM[1], 50);
  return {
    items,
    agency: [nice(aLo), nice(aHi)], beyond: aHi > hi * 1.001, weeks: m.weeks,
    diy: [dm[0] * 12, dm[1] * 12], diyMonth: dm,
    credits: [cLo, cHi], equipeYear: [Math.round(cLo / 100 + PLAN_YEAR_USD), Math.round(cHi / 100 + PLAN_YEAR_USD)],
    slow: m.weeks[0] > TIMELINE_WEEKS[p.timeline],
  };
}

/** The share URL's query: ?f=login,payments&d=custom&t=month (the type is in the path or ?type=). */
export function encodePick(p: Pick, withType = false): string {
  const q = new URLSearchParams();
  if (withType) q.set('type', p.type);
  if (p.features.length) q.set('f', p.features.join(','));
  q.set('d', p.design); q.set('t', p.timeline);
  return q.toString().replace(/%2C/g, ',');
}
export function decodePick(q: URLSearchParams, fallback: TypeKey): Pick {
  const type = (TYPES as readonly string[]).includes(q.get('type') || '') ? (q.get('type') as TypeKey) : fallback;
  const base = DEFAULT_PICK(type);
  const f = q.get('f');
  const features = f === null ? base.features : f.split(',').filter((x): x is FeatureKey => (FEATURES as readonly string[]).includes(x));
  const d = q.get('d'), t = q.get('t');
  return {
    type, features: [...new Set(features)],
    design: (DESIGNS as readonly string[]).includes(d || '') ? (d as DesignKey) : base.design,
    timeline: (TIMELINES as readonly string[]).includes(t || '') ? (t as TimelineKey) : base.timeline,
  };
}
