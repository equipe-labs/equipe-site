/**
 * Privacy policy generator (/tools/privacy-policy-generator/): the page's words per locale (./i18n), the policy's words
 * per language (./policy: the launch kit's templates plus the generator's own) and the laws it cites.
 * Deterministic: no AI, nothing leaves the browser (./generate.ts).
 */
import type { LocaleCode } from '../../i18n';
import en from './i18n/en';
import type { PolicyWords } from './generate';

export type PrivacyCopy = typeof en;
const files = import.meta.glob<{ default: PrivacyCopy }>('./i18n/*.ts', { eager: true });
const byCode: Partial<Record<string, PrivacyCopy>> = Object.fromEntries(Object.entries(files).map(([p, m]) => [p.replace(/^.*\/|\.ts$/g, ''), m.default]));
export const privacyCopy = (code: LocaleCode): PrivacyCopy => byCode[code] ?? en;

export const PRIVACY_PAGE = 'tools/privacy-policy-generator';
export const POLICY_LANGS: LocaleCode[] = ['en', 'ko', 'ja', 'zh-CN', 'es', 'pt-BR', 'de', 'fr'];

/** The policy's words in one language, at build time (the example the page opens with). */
const kits = import.meta.glob<{ default: Record<string, string> }>('./policy/kit-*.json', { eager: true });
const extras = import.meta.glob<{ default: Record<string, string> }>('./policy/extra-*.ts', { eager: true });
export function policyWords(code: LocaleCode): PolicyWords {
  const k = kits[`./policy/kit-${code}.json`]?.default ?? kits['./policy/kit-en.json'].default;
  const x = extras[`./policy/extra-${code}.ts`]?.default ?? extras['./policy/extra-en.ts'].default;
  return { ...kits['./policy/kit-en.json'].default, ...extras['./policy/extra-en.ts'].default, ...k, ...x } as PolicyWords;
}

export { LAWS, lawsFor } from './generate';
