/**
 * Consent and marketing tags.
 *
 * Today equipe.im sets no non-essential cookies: PostHog runs cookieless and the theme/language choice is functional
 * storage the visitor asked for. So the consent banner is OFF. It turns on by itself as soon as any tag below is
 * configured at build time (or CONSENT_REQUIRED=true), and those tags only load after the matching consent:
 * analytics tags after "Analytics", ad tags after "Advertising". Google tags start with Consent Mode v2 defaults
 * (everything denied) until the visitor chooses.
 */
const env = (k: string) => (import.meta.env[k] as string | undefined) || (typeof process !== 'undefined' ? process.env[k] : undefined) || '';

export const TAGS = {
  googleAds: env('PUBLIC_GOOGLE_ADS_ID'), // AW-XXXXXXXXX
  googleAnalytics: env('PUBLIC_GA4_ID'), // G-XXXXXXX (cookie-based, so it needs consent)
  metaPixel: env('PUBLIC_META_PIXEL_ID'),
  tiktokPixel: env('PUBLIC_TIKTOK_PIXEL_ID'),
  linkedinPartner: env('PUBLIC_LINKEDIN_PARTNER_ID'),
  redditPixel: env('PUBLIC_REDDIT_PIXEL_ID'),
};

/** Advertising partners actually configured, for the privacy policy's "Advertising" paragraph. */
export const AD_PARTNERS = [
  TAGS.googleAds && 'Google Ads',
  TAGS.metaPixel && 'Meta (Facebook, Instagram)',
  TAGS.tiktokPixel && 'TikTok',
  TAGS.linkedinPartner && 'LinkedIn',
  TAGS.redditPixel && 'Reddit',
].filter(Boolean) as string[];

export const HAS_MARKETING_TAGS = Object.values(TAGS).some(Boolean);
export const CONSENT_REQUIRED = env('CONSENT_REQUIRED') === 'true' || HAS_MARKETING_TAGS;
