// The Team plan: one paid plan = hosting for your sites + storage + 5 people + a monthly amount of credits the person chooses.
// This table is the ONLY place the plan's prices live. The pricing cards, the home page, every locale (through the {{token}}s below),
// /facts and llms.txt all read it, so a price change is an edit here and nothing else.
// Yearly = 10 x monthly ("2 months free"); credits still arrive every month on a yearly plan.

export interface Tier {
  /** Credits that arrive every month, in US dollars ($1 = 1 credit). 0 = keep the product live only. */
  credits: number;
  /** Total price per month, in US dollars. */
  month: number;
  /** Total price per year, in US dollars. */
  year: number;
}

export const TIERS: Tier[] = [
  { credits: 0, month: 19, year: 190 },
  { credits: 25, month: 44, year: 440 },
  { credits: 50, month: 69, year: 690 },
  { credits: 100, month: 119, year: 1190 },
  { credits: 250, month: 269, year: 2690 },
];

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
