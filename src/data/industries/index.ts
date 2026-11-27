/**
 * "[Business type] website" guides: /websites/<type>/ in each language, plus the /websites/ hub.
 * Page: src/pages/[...locale]/websites/[type].astro. Copy: one file per language next to this one.
 *
 * A language lists only the business types it has real, local copy for (see `pages` in each file). A type with
 * no page in a language is not built there and is left out of that page's hreflang cluster, so nothing is thin
 * or machine-translated. Which types each language ships, and why (Google autocomplete signals, 2026-11-28),
 * is in docs/industry-pages.md.
 *
 * Honest facts only: no invented numbers, reviews or customers. Demos are labelled as demos. A real customer
 * appears only with the customer's permission (see GOLDEN_BOOT_EXAMPLE).
 */
import gallery from '../gallery.json';
import type { LocaleCode } from '../../i18n';
import { en } from './en';
import { ko } from './ko';
import { ja } from './ja';
import { zhCN } from './zh-CN';
import { es } from './es';
import { ptBR } from './pt-BR';
import { de } from './de';
import { fr } from './fr';

/** Order = order on the hub and in "other businesses". */
export const INDUSTRIES = [
  'restaurant', 'cafe', 'bakery', 'hair-salon', 'yoga-pilates', 'dog-grooming',
  'tutoring', 'soccer-academy', 'dental', 'photographer', 'nonprofit',
] as const;
export type IndustryKey = (typeof INDUSTRIES)[number];

type DemoSlug = 'jiwoo' | 'tidepool' | 'smallhours';

interface Meta {
  /** schema.org type for the business's own site (shown in the structured-data guidance). */
  schemaType: string;
  /** Extra JSON-LD properties for the example snippet, beyond name/address/phone/hours/url/sameAs. */
  schemaExtra: Record<string, unknown>;
  /** The cost calculator's ?type= key (/tools/app-cost-calculator/). */
  costType: 'website' | 'booking-app' | 'online-store';
  /** A gallery demo that shows the pattern this business needs (labelled "demo" on the page). */
  demo?: DemoSlug;
  /** Lucide icon path data (ISC). */
  icon: string;
}

export const META: Record<IndustryKey, Meta> = {
  restaurant: {
    schemaType: 'Restaurant',
    schemaExtra: { servesCuisine: '…', priceRange: '$$', acceptsReservations: true, hasMenu: '/menu/' },
    costType: 'website',
    icon: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  },
  cafe: {
    schemaType: 'CafeOrCoffeeShop',
    schemaExtra: { servesCuisine: 'Coffee', priceRange: '$', hasMenu: '/menu/', amenityFeature: { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true } },
    costType: 'website',
    icon: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
  },
  bakery: {
    schemaType: 'Bakery',
    schemaExtra: { priceRange: '$', hasMenu: '/menu/' },
    costType: 'website',
    demo: 'tidepool',
    icon: '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>',
  },
  'hair-salon': {
    schemaType: 'HairSalon',
    schemaExtra: { priceRange: '$$' },
    costType: 'booking-app',
    demo: 'jiwoo',
    icon: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  },
  'yoga-pilates': {
    schemaType: 'ExerciseGym',
    schemaExtra: { priceRange: '$$' },
    costType: 'booking-app',
    demo: 'jiwoo',
    icon: '<circle cx="12" cy="4" r="2"/><path d="M4 9h16"/><path d="M12 6v8"/><path d="m8 21 4-7 4 7"/>',
  },
  'dog-grooming': {
    schemaType: 'LocalBusiness',
    schemaExtra: { priceRange: '$$', makesOffer: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog grooming' } } },
    costType: 'booking-app',
    demo: 'jiwoo',
    icon: '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',
  },
  tutoring: {
    schemaType: 'EducationalOrganization',
    schemaExtra: { '@type': ['EducationalOrganization', 'LocalBusiness'], areaServed: '…' },
    costType: 'booking-app',
    demo: 'jiwoo',
    icon: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  },
  'soccer-academy': {
    schemaType: 'SportsActivityLocation',
    schemaExtra: { sport: 'Soccer', areaServed: '…' },
    costType: 'booking-app',
    icon: '<circle cx="12" cy="12" r="10"/><path d="m12 7 4.5 3.3-1.7 5.2H9.2l-1.7-5.2Z"/><path d="M12 2v5"/><path d="m21.5 9.5-5 .8"/><path d="m18 20-3.2-4.5"/><path d="m6 20 3.2-4.5"/><path d="m2.5 9.5 5 .8"/>',
  },
  dental: {
    schemaType: 'Dentist',
    schemaExtra: { medicalSpecialty: 'Dentistry', isAcceptingNewPatients: true },
    costType: 'website',
    icon: '<path d="M12 5.5C10.5 4 7.5 3 5.5 4.5 3 6.5 4 11 5 13c.8 1.6 1 4 1.5 6 .4 1.6 2 1.8 2.5 0l1-4c.3-1 1.7-1 2 0l1 4c.5 1.8 2.1 1.6 2.5 0 .5-2 .7-4.4 1.5-6 1-2 2-6.5-.5-8.5-2-1.5-5-.5-6.5 1Z"/>',
  },
  photographer: {
    schemaType: 'ProfessionalService',
    schemaExtra: { areaServed: '…', priceRange: '$$$' },
    costType: 'website',
    icon: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  },
  nonprofit: {
    schemaType: 'NGO',
    schemaExtra: { nonprofitStatus: 'Nonprofit501c3', areaServed: '…' },
    costType: 'website',
    demo: 'smallhours',
    icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  },
};

/**
 * Golden Boot Academy (goldenbootacademy.app) is a real, paying equipe customer and the natural live example for
 * /websites/soccer-academy/. It stays off until the customer agrees to be shown as a case (their logo row on the
 * home page is not a case study). Turn on with GOLDEN_BOOT_EXAMPLE=true once they say yes.
 */
export const GOLDEN_BOOT_EXAMPLE = process.env.GOLDEN_BOOT_EXAMPLE === 'true';
export const GOLDEN_BOOT = { name: 'Golden Boot Academy', url: 'https://goldenbootacademy.app' };

/** Gallery demos (src/data/gallery.json): built by the equipe team, not real businesses. */
export const DEMOS = Object.fromEntries(gallery.map((g) => [g.slug, g])) as Record<string, (typeof gallery)[number]>;

/** The /start link that carries the brief into sign-up (kept as a draft through team creation), tagged by source. */
export const startHref = (idea: string, type: string, placement: string) =>
  `https://app.equipe.im/start?idea=${encodeURIComponent(idea)}&utm_source=equipe.im&utm_medium=seo&utm_campaign=industry-${type}&utm_content=${encodeURIComponent(placement)}`;

interface Item { title: string; text: string }
interface QA { question: string; answer: string }

/** One business type in one language. Everything is written for that market, not translated. */
export interface IndustryPage {
  /** Short name for lists and breadcrumbs, e.g. "Bakery". */
  name: string;
  /** <title>, ≤ 60 characters where the language allows. */
  title: string;
  /** Meta description, 120–160 characters. */
  desc: string;
  h1: string;
  lead: string;
  /** "What a bakery website needs" */
  needsTitle: string;
  /** 6–8 specific things, each a short title and one or two sentences that say why and how. */
  needs: Item[];
  /** Where this market's customers already look: 3–5 platforms and how the site works with each. */
  local: Item[];
  /** The structured-data advice: which type, which fields matter for this business, any pitfalls. */
  schema: string;
  /** Replaces or adds JSON-LD example fields for this market (e.g. priceRange '€€', no US-only nonprofitStatus). */
  schemaExtra?: Record<string, unknown>;
  /** One line under the demo card that says what the demo shows for this business (only when META has a demo). */
  example?: string;
  /** The ready-made brief. Square brackets mark what the owner fills in. */
  prompt: string;
  /** 4–5 questions people really ask about this kind of site. */
  faq: QA[];
}

export interface IndustryUi {
  /** Breadcrumb and footer label for the hub. */
  hubName: string;
  kicker: string;
  heroCta: string;
  heroSecondary: string;
  needsSub: string;
  localTitle: string;
  localSub: string;
  exampleTitle: string;
  demoBadge: string;
  customerBadge: string;
  /** "{name}, built by the equipe team in {time}" — {time} comes from gallery.json ("about 45 minutes"), English only. */
  demoBy: string;
  demoOpen: string;
  promptTitle: string;
  promptSub: string;
  promptLabel: string;
  promptButton: string;
  copy: string;
  copied: string;
  promptNote: string;
  schemaTitle: string;
  schemaSub: string;
  schemaCode: string;
  schemaNote: string;
  /** Placeholders in the example JSON-LD. */
  ph: { name: string; street: string; city: string; phone: string };
  toolsTitle: string;
  grader: Item & { cta: string };
  cost: Item & { cta: string };
  toolsHub: string;
  faqTitle: string;
  moreTitle: string;
  hub: { title: string; desc: string; h1: string; lead: string; open: string; toolsTitle: string };
  /** The demo's own one-liner and time, in this language (gallery.json is English). */
  demos: Partial<Record<DemoSlug, { line: string; time: string }>>;
}

export interface IndustryLocale {
  ui: IndustryUi;
  pages: Partial<Record<IndustryKey, IndustryPage>>;
}

export const INDUSTRY: Record<LocaleCode, IndustryLocale> = { en, ko, ja, 'zh-CN': zhCN, es, 'pt-BR': ptBR, de, fr };

/** The languages a business type has a page in (its hreflang cluster). */
export const langsFor = (key: IndustryKey): LocaleCode[] =>
  (Object.keys(INDUSTRY) as LocaleCode[]).filter((c) => INDUSTRY[c].pages[key]);

/** The business types a language has pages for, in hub order. */
export const typesFor = (code: LocaleCode): IndustryKey[] => INDUSTRIES.filter((k) => INDUSTRY[code].pages[k]);
