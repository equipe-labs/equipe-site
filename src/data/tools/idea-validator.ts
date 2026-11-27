// The startup idea validator's card on the free tools hub (/tools/). Copy lives with the tool (src/data/ideacheck/i18n).
import type { ToolEntry } from './index';
import { ideaCopy } from '../ideacheck/copy';
import { LOCALES } from '../../i18n/locales';

export const TOOL: ToolEntry = {
  slug: 'idea-validator',
  path: 'tools/idea-validator',
  order: 5,
  icon: 'lightbulb',
  group: 'start',
  copy: Object.fromEntries(LOCALES.map((l) => [l.code, ideaCopy(l.code).hub])) as ToolEntry['copy'],
};
