/**
 * Startup idea validator (/tools/idea-validator/, a shared check is /tools/idea-validator/r/<id>/).
 * Runs on platform.equipe.im (cloud platform/src/free-idea.js): one call to a small model with up to 3 web searches,
 * competitors kept only when a search showed their site (the launch pack's rule). Paid, so: Turnstile, a few checks a
 * day per visitor, the same idea answered from cache for 7 days, and a global daily budget.
 * English (./i18n/en.ts) defines the shape; a locale without its own file falls back to it.
 */
import type { LocaleCode } from '../../i18n';
import en from './i18n/en';

export type IdeaCopy = typeof en;
const files = import.meta.glob<{ default: IdeaCopy }>('./i18n/*.ts', { eager: true });
const byCode: Partial<Record<string, IdeaCopy>> = Object.fromEntries(Object.entries(files).map(([p, m]) => [p.replace(/^.*\/|\.ts$/g, ''), m.default]));
export const ideaCopy = (code: LocaleCode): IdeaCopy => byCode[code] ?? en;

export const IDEA_API = 'https://platform.equipe.im/v1/free/idea';
export const IDEA_PAGE = 'tools/idea-validator';
/** Sign-up with the idea filled in (app.equipe.im/start keeps it as the team's first idea), tagged as this tool. */
export const ideaStartHref = (idea: string, placement: string) =>
  `https://app.equipe.im/start?idea=${encodeURIComponent(idea)}&utm_source=equipe.im&utm_medium=tool&utm_campaign=idea-validator&utm_content=${encodeURIComponent(placement)}`;
