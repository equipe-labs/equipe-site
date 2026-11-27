/**
 * Facts behind the comparison pages (/vs/<x>/ and /alternatives/<x>/), the same in every language.
 * Every claim about another product comes from that company's own public pages, read on `checked`; the copy in the locale
 * files says nothing the sources below don't. Re-read the pages before changing a price, and move `checked` with it.
 * Names are text only: no logos, no colours, nothing that suggests a partnership.
 */
export const VS_IDS = ['lovable', 'base44', 'bolt', 'wix', 'v0', 'replit'] as const;
export type VsId = (typeof VS_IDS)[number];

export interface VsFacts {
  name: string;
  /** Who owns the name, for the trademark line. Empty when the legal name wasn't on the pages we read. */
  owner: string;
  checked: string;
  sources: { title: string; url: string; accessed?: string }[];
  /** The /from-<x>/ guide for this product, when there is one. */
  guide?: string;
}

export const VS_CHECKED = '2026-11-28';

export const VS: Record<VsId, VsFacts> = {
  lovable: {
    name: 'Lovable', owner: '', checked: VS_CHECKED, guide: 'from-lovable',
    sources: [
      { title: 'Lovable pricing', url: 'https://lovable.dev/pricing' },
      { title: 'Lovable docs: introduction', url: 'https://docs.lovable.dev/introduction' },
      { title: 'Lovable docs: Lovable Cloud', url: 'https://docs.lovable.dev/integrations/cloud' },
      { title: 'Lovable docs: custom domain', url: 'https://docs.lovable.dev/features/custom-domain' },
      { title: 'Lovable docs: GitHub integration', url: 'https://docs.lovable.dev/integrations/github' },
      { title: 'Lovable docs: Stripe', url: 'https://docs.lovable.dev/integrations/stripe' },
      { title: 'Lovable docs: analytics', url: 'https://docs.lovable.dev/features/analytics' },
    ],
  },
  base44: {
    name: 'Base44', owner: '', checked: VS_CHECKED,
    sources: [
      { title: 'Base44 pricing', url: 'https://base44.com/pricing' },
      { title: 'Base44', url: 'https://base44.com/' },
      { title: 'Base44 docs: custom domain', url: 'https://docs.base44.com/Setting-up-your-app/Setting-up-your-custom-domain' },
      { title: 'Base44 docs: GitHub', url: 'https://docs.base44.com/developers/app-code/local-development/github' },
      { title: 'Base44 docs: payments', url: 'https://docs.base44.com/documentation/setting-up-your-app/setting-up-payments' },
      { title: 'Base44 docs: Superagents', url: 'https://docs.base44.com/Getting-Started/superagent' },
      { title: 'Base44 security', url: 'https://base44.com/security', accessed: '2026-11-21' },
      { title: 'Wix press room: Wix acquires Base44 (18 June 2025)', url: 'https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif' },
    ],
  },
  bolt: {
    name: 'Bolt', owner: '', checked: VS_CHECKED,
    sources: [
      { title: 'Bolt pricing', url: 'https://bolt.new/pricing' },
      { title: 'Bolt', url: 'https://bolt.new/' },
      { title: 'Bolt help: domains', url: 'https://support.bolt.new/bolt-cloud/domains' },
      { title: 'Bolt help: hosting plans', url: 'https://support.bolt.new/bolt-cloud/hosting/plans' },
      { title: 'Bolt help: database sign-in', url: 'https://support.bolt.new/bolt-cloud/database/authentication' },
      { title: 'Bolt help: Stripe', url: 'https://support.bolt.new/integrations/stripe' },
      { title: 'Bolt help: GitHub', url: 'https://support.bolt.new/integrations/git' },
      { title: 'Bolt security', url: 'https://bolt.new/platform/security', accessed: '2026-11-21' },
    ],
  },
  wix: {
    name: 'Wix', owner: 'Wix.com Ltd.', checked: VS_CHECKED,
    sources: [
      { title: 'Wix AI website builder', url: 'https://www.wix.com/ai-website-builder' },
      { title: 'Wix plans', url: 'https://www.wix.com/plans' },
      { title: 'Wix press room: Wix acquires Base44 (18 June 2025)', url: 'https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif' },
    ],
  },
  v0: {
    name: 'v0', owner: 'Vercel Inc.', checked: VS_CHECKED, guide: 'from-v0',
    sources: [
      { title: 'v0 pricing', url: 'https://v0.app/pricing' },
      { title: 'v0', url: 'https://v0.app/' },
      { title: 'v0 docs: deployments', url: 'https://v0.app/docs/deployments' },
      { title: 'v0 docs: custom domains', url: 'https://v0.app/docs/custom-domains' },
      { title: 'v0 docs: databases', url: 'https://v0.app/docs/databases' },
      { title: 'v0 docs: GitHub', url: 'https://v0.app/docs/github' },
    ],
  },
  replit: {
    name: 'Replit', owner: 'Replit, Inc.', checked: VS_CHECKED, guide: 'from-replit',
    sources: [
      { title: 'Replit pricing', url: 'https://replit.com/pricing' },
      { title: 'Replit', url: 'https://replit.com/' },
      { title: 'Replit docs: plans', url: 'https://docs.replit.com/billing/plans' },
      { title: 'Replit docs: AI billing', url: 'https://docs.replit.com/billing/ai-billing' },
      { title: 'Replit docs: custom domains', url: 'https://docs.replit.com/features/publishing/custom-domains' },
      { title: 'Replit docs: Stripe', url: 'https://docs.replit.com/use-cases/accept-payments-with-stripe' },
      { title: 'Replit docs: SEO', url: 'https://docs.replit.com/build/improve-seo' },
      { title: 'Replit docs: routines', url: 'https://docs.replit.com/home/routines' },
    ],
  },
};

/** equipe's own facts come from its pages; the prices are {{tokens}} filled from src/data/plan.ts. */
export const EQUIPE_SOURCES = [
  { title: 'equipe pricing', url: 'https://equipe.im/pricing/' },
  { title: 'equipe: what the team delivers on day one', url: 'https://equipe.im/day-one/' },
  { title: 'equipe: move your project', url: 'https://equipe.im/migrate/' },
  { title: 'equipe security', url: 'https://equipe.im/security/' },
];

/** "Try equipe free" with utm: the page (vs-lovable, alt-lovable) and where on it (hero, table, final). */
export const tryHref = (page: string, placement: string) =>
  `https://app.equipe.im/start?utm_source=equipe.im&utm_medium=compare&utm_campaign=${encodeURIComponent(page)}&utm_content=${encodeURIComponent(placement)}`;
