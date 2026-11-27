// The Team plan: one paid plan = hosting for your sites + storage + 5 people + a monthly amount of credits the person chooses.
// This table is the ONLY place the plan's prices live. The pricing cards, the home page, every locale (through the {{token}}s below),
// /facts and llms.txt all read it, so a price change is an edit here and nothing else.
// Yearly (2026-11-26) = the base fee only, $190 a year ("2 months free"); the chosen credits stay monthly.
// Credits (2026-11-27): the product shows credits, not dollars, at a fixed 100 credits = $1. Dollars stay only for real
// prices (plans, packs, seats, domains); an amount of credit is always written in credits (`credits()` / the {{c*}} tokens).

export interface Tier {
  /** What the credits that arrive every month cost, in US dollars (×100 = the credits). 0 = keep the product live only. */
  credits: number;
  /** Total price per month, in US dollars. */
  month: number;
  /** What the tier costs over a year on the yearly plan: the yearly base fee plus twelve months of credits, in US dollars. */
  year: number;
}

/** The yearly plan: the base fee (hosting, storage, 5 people) paid once a year; monthly credits stay monthly. */
export const YEARLY = { usd: 190, baseMonth: 19, rolloverMonths: 3 };

export const TIERS: Tier[] = [0, 25, 50, 100, 250].map((credits) => ({ credits, month: YEARLY.baseMonth + credits, year: YEARLY.usd + credits * 12 }));

/**
 * A time-boxed promotion (the app enforces it on its server: web/src/promos.js in equipe-cloud; this copy only shows it).
 * Black Friday 2026: the yearly plan's first year at $137 (then $190 a year), +20% bonus credits on packs and new monthly
 * credits, up to 25,000 bonus credits ($250) per team. Ends Dec 1, 11:59 PM Pacific (2026-12-02 08:00 UTC, exclusive).
 */
export const PROMO = {
  id: 'bf2026',
  startsAt: Date.parse('2026-11-25T20:00:00Z'),
  endsAt: Date.parse('2026-12-02T08:00:00Z'),
  firstYear: 137,
  listMonth: 19,
  bonusPct: 20,
  bonusCap: 250,
};
/** Whether the promotion runs at `now` (ms). */
export const promoLive = (now = Date.now()) => now >= PROMO.startsAt && now < PROMO.endsAt;
/** "$11.42": a yearly amount as a month, to the cent. */
export const perMonth = (usdYear: number) => `$${(Math.round((usdYear / 12) * 100) / 100).toFixed(2)}`;

/**
 * Credit packs, bought once (the app's pricing.js `packs`: equipe-cloud web/src/pricing.js). The bulk pack adds a volume
 * bonus: $990 buys 110,000 credits (the value of $1,100). `usd` is the price and `bonus` the extra, both in dollars. A promotion's bonus and the volume bonus never stack (the larger one applies).
 */
export const PACKS: { usd: number; bonus?: number; popular?: boolean }[] = [{ usd: 25 }, { usd: 50 }, { usd: 100, popular: true }, { usd: 250 }, { usd: 990, bonus: 110 }];

/** The tier selected by default (server-rendered, "Most teams start here"). */
export const DEFAULT_TIER = 2;

/** "$1,190": US dollars with no decimals, grouped the same way on every locale (the site writes prices as $X everywhere). */
export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

/** The fixed rate the product shows: 100 credits = $1. */
export const CREDITS_PER_USD = 100;

/** The credit unit per site locale: [singular, plural, space between number and unit]. */
const CREDIT_UNIT: Record<string, [string, string, boolean]> = {
  en: ['credit', 'credits', true],
  ko: ['크레딧', '크레딧', true],
  ja: ['クレジット', 'クレジット', false],
  'zh-CN': ['点数', '点数', true],
  es: ['crédito', 'créditos', true],
  'pt-BR': ['crédito', 'créditos', true],
  de: ['Credit', 'Credits', true],
  fr: ['crédit', 'crédits', true],
};

/** "5,000" / "5.000" / "5 000": the credits a dollar amount buys, as a number grouped the locale's way (no unit). */
export const creditNum = (usdAmount: number, code = 'en') => new Intl.NumberFormat(code).format(Math.round(usdAmount * CREDITS_PER_USD));

/** "2,500 credits" / "2.500 Credits" / "2,500クレジット": the credits a dollar amount buys, with the locale's unit. */
export function credits(usdAmount: number, code = 'en'): string {
  const [one, many, space] = CREDIT_UNIT[code] || CREDIT_UNIT.en;
  const n = Math.round(usdAmount * CREDITS_PER_USD);
  const unit = (code === 'fr' ? n < 2 : n === 1) ? one : many; // French counts 0 and 1 as singular
  return `${creditNum(usdAmount, code)}${space ? ' ' : ''}${unit}`;
}

/**
 * Tokens that locale strings, /facts and llms.txt use instead of literal prices: `{{m2}}` is tier 2's monthly total, `{{y2}}` its yearly total
 * (dollars), `{{c2}}` its monthly credits as a bare number in the locale's grouping ("5,000"; the sentence adds the unit).
 * `{{from}}`/`{{fromYear}}` are the lowest tier, `{{defTotal}}`/`{{defYear}}`/`{{defCredits}}` the default tier.
 */
export function planTokens(code = 'en'): Record<string, string> {
  return {
    ...Object.fromEntries(TIERS.flatMap((t, i) => [[`m${i}`, usd(t.month)], [`y${i}`, usd(t.year)], [`c${i}`, creditNum(t.credits, code)]])),
    from: usd(TIERS[0].month),
    fromYear: usd(TIERS[0].year),
    defTotal: usd(TIERS[DEFAULT_TIER].month),
    defYear: usd(TIERS[DEFAULT_TIER].year),
    defCredits: creditNum(TIERS[DEFAULT_TIER].credits, code),
  };
}

/** The English tokens (kept for callers that only need English). */
export const PLAN_TOKENS: Record<string, string> = planTokens('en');

/** Replace every {{token}} in a string for a locale (credit numbers are grouped its way); throws on an unknown token so a typo never reaches the site. */
export function fillPlan(s: string, code = 'en'): string {
  const tokens = code === 'en' ? PLAN_TOKENS : planTokens(code);
  return s.replace(/\{\{(\w+)\}\}/g, (_, k: string) => {
    const v = tokens[k];
    if (v === undefined) throw new Error(`Unknown plan token {{${k}}} in: ${s.slice(0, 80)}`);
    return v;
  });
}

/** Deep-copy an object, filling plan tokens in every string for a locale. */
export function fillPlanDeep<T>(v: T, code = 'en'): T {
  if (typeof v === 'string') return fillPlan(v, code) as T;
  if (Array.isArray(v)) return v.map((x) => fillPlanDeep(x, code)) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fillPlanDeep(x, code)])) as T;
  return v;
}
