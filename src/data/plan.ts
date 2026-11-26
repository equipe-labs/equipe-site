// The Team plan: one paid plan = hosting for your sites + storage + 5 people + a monthly amount of credits the person chooses.
// This table is the ONLY place the plan's prices live. The pricing cards, the home page, every locale (through the {{token}}s below),
// /facts and llms.txt all read it, so a price change is an edit here and nothing else.
// Yearly (2026-11-26) = the base fee only, $190 a year ("2 months free"); the chosen credits stay monthly at $1 = $1.

export interface Tier {
  /** Credits that arrive every month, in US dollars ($1 = 1 credit). 0 = keep the product live only. */
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
 * credits, up to $250 of bonus per team. Ends Dec 1, 11:59 PM Pacific (2026-12-02 08:00 UTC, exclusive).
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
 * bonus: $990 buys $1,100 of credits. A promotion's bonus and the volume bonus never stack (the larger one applies).
 */
export const PACKS: { usd: number; bonus?: number; popular?: boolean }[] = [{ usd: 25 }, { usd: 50 }, { usd: 100, popular: true }, { usd: 250 }, { usd: 990, bonus: 110 }];

/** The tier selected by default (server-rendered, "Most teams start here"). */
export const DEFAULT_TIER = 2;

/** "$1,190": US dollars with no decimals, grouped the same way on every locale (the site writes prices as $X everywhere). */
export const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

/**
 * Tokens that locale strings, /facts and llms.txt use instead of literal prices: `{{m2}}` is tier 2's monthly total, `{{y2}}` its yearly total,
 * `{{c2}}` its monthly credits. `{{from}}`/`{{fromYear}}` are the lowest tier, `{{defTotal}}`/`{{defYear}}`/`{{defCredits}}` the default tier.
 */
export const PLAN_TOKENS: Record<string, string> = {
  ...Object.fromEntries(TIERS.flatMap((t, i) => [[`m${i}`, usd(t.month)], [`y${i}`, usd(t.year)], [`c${i}`, usd(t.credits)]])),
  from: usd(TIERS[0].month),
  fromYear: usd(TIERS[0].year),
  defTotal: usd(TIERS[DEFAULT_TIER].month),
  defYear: usd(TIERS[DEFAULT_TIER].year),
  defCredits: usd(TIERS[DEFAULT_TIER].credits),
};

/** Replace every {{token}} in a string; throws on an unknown token so a typo never reaches the site. */
export function fillPlan(s: string): string {
  return s.replace(/\{\{(\w+)\}\}/g, (_, k: string) => {
    const v = PLAN_TOKENS[k];
    if (v === undefined) throw new Error(`Unknown plan token {{${k}}} in: ${s.slice(0, 80)}`);
    return v;
  });
}

/** Deep-copy an object, filling plan tokens in every string. */
export function fillPlanDeep<T>(v: T): T {
  if (typeof v === 'string') return fillPlan(v) as T;
  if (Array.isArray(v)) return v.map((x) => fillPlanDeep(x)) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fillPlanDeep(x)])) as T;
  return v;
}
