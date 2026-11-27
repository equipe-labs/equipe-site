// The privacy policy generator's card on the free tools hub (/tools/). Copy lives with the tool (src/data/privacygen/i18n).
import type { ToolEntry } from './index';
import { privacyCopy } from '../privacygen/copy';
import { LOCALES } from '../../i18n/locales';

export const TOOL: ToolEntry = {
  slug: 'privacy-policy-generator',
  path: 'tools/privacy-policy-generator',
  order: 15,
  icon: 'shield',
  group: 'start',
  copy: Object.fromEntries(LOCALES.map((l) => [l.code, privacyCopy(l.code).hub])) as ToolEntry['copy'],
};
