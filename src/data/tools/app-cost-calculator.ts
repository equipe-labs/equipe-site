// The app cost calculator's card on the free tools hub (/tools/, src/data/tools/index.ts reads every file here).
// The copy lives with the calculator (src/data/costcalc/i18n), so the card and the page never disagree.
import { costCopy } from '../costcalc/copy';
import { LOCALES } from '../../i18n/locales';

export const TOOL = {
  slug: 'app-cost-calculator',
  path: 'tools/app-cost-calculator',
  order: 30,
  icon: 'calculator',
  group: 'money' as const,
  copy: Object.fromEntries(LOCALES.map((l) => [l.code, costCopy(l.code).hub])) as Record<(typeof LOCALES)[number]['code'], { name: string; blurb: string; cta: string }>,
};
