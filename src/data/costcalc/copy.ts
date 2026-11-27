// The app cost calculator's copy per locale. English defines the shape; a locale without its own file falls back to it.
import type { LocaleCode } from '../../i18n';
import en from './i18n/en';

export type CostCopy = typeof en;

const files = import.meta.glob<{ default: CostCopy }>('./i18n/*.ts', { eager: true });
const byCode: Partial<Record<string, CostCopy>> = Object.fromEntries(Object.entries(files).map(([p, m]) => [p.replace(/^.*\/|\.ts$/g, ''), m.default]));

export const costCopy = (code: LocaleCode): CostCopy => byCode[code] ?? en;
/** "{a}–{b}" templates: fills {key} from vars, leaves unknown keys as they are. */
export const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
