import type { VsId } from './facts';

export const ROWS = ['who', 'free', 'paid', 'billing', 'hosting', 'domain', 'database', 'payments', 'code', 'growth', 'after'] as const;
export type RowKey = (typeof ROWS)[number];
/** The short table on /alternatives/<x>/. */
export const SHORT_ROWS: RowKey[] = ['free', 'paid', 'hosting', 'domain', 'after'];

export interface QA { question: string; answer: string }

/** One product, in one language. Every sentence must be backed by the sources in facts.ts. */
export interface VsProduct {
  /** One line for the table's first row: who it says it is for. */
  rows: Record<RowKey, string>;
  /** The two-sentence answer at the top of /vs/<x>/. */
  answer: string;
  /** Where this product is better than equipe (3-4 fair points). */
  better: string[];
  /** Where equipe is different for this product's users (3 points). */
  different: string[];
  /** "Best for …" on the alternatives lists. */
  bestFor: string;
  /** Why people look for an alternative, from facts (3 points, no digs). */
  reasons: string[];
  /** Product-specific answers: which is cheaper, and how to move. */
  cheaper: string;
  move: string;
}

export interface VsShared {
  /** {name} is the other product's name; {date} the checked date. */
  vs: { title: string; desc: string; h1: string; lead: string };
  alt: { title: string; desc: string; h1: string; lead: string };
  kicker: string;
  rowNames: Record<RowKey, string>;
  equipe: Record<RowKey, string>;
  tableTitle: string; tableSub: string; colEquipe: string;
  betterTitle: string; differentTitle: string; weakerTitle: string; weaker: string[];
  pickTitle: string; pickThem: string; pickUs: string; pickUsText: string;
  reasonsTitle: string; optionsTitle: string; optionsSub: string; us: string; compare: string; guide: string;
  faqTitle: string;
  faqCheaper: string; faqMove: string;
  faqNonCoder: QA; faqNeutral: QA;
  ctaTitle: string; ctaSub: string; cta: string; ctaNote: string;
  checked: string; sourcesLabel: string; accessedOn: string;
  disclaimer: string; disclaimerOwner: string;
  others: string;
}

export interface VsLocale { shared: VsShared; products: Record<VsId, VsProduct> }
