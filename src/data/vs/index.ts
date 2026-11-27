import type { LocaleCode } from '../../i18n';
import type { VsLocale } from './types';
import en from './en';

export * from './types';
export * from './facts';

// Other languages are added as src/data/vs/<code>.ts and picked up here; until then a page falls back to English.
const files = import.meta.glob<{ default: VsLocale }>(['./*.ts', '!./index.ts', '!./types.ts', '!./facts.ts', '!./en.ts'], { eager: true });
const byCode: Partial<Record<LocaleCode, VsLocale>> = { en };
for (const [path, mod] of Object.entries(files)) byCode[path.replace(/^\.\/|\.ts$/g, '') as LocaleCode] = mod.default;

export const vsCopy = (code: LocaleCode): VsLocale => byCode[code] ?? en;
export const hasVsLocale = (code: LocaleCode) => !!byCode[code];

/** "{name} vs equipe" → filled. */
export const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? vars[k] : m));
