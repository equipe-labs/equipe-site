// The free booking page maker's card on the tools hub. The copy lives with the tool (src/data/bookingpage/<locale>.ts).
import type { ToolEntry } from './index';
import { bookingCopy, BOOKING_PATH } from '../bookingpage';
import { LOCALES } from '../../i18n/locales';

export const TOOL: ToolEntry = {
  slug: 'booking-page',
  path: BOOKING_PATH,
  order: 25,
  icon: 'calendar',
  group: 'start',
  copy: Object.fromEntries(LOCALES.map((l) => [l.code, bookingCopy(l.code).hub])) as ToolEntry['copy'],
};
