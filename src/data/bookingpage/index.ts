// The free booking page maker (/tools/booking-page/): words per locale, the model in ./model.ts.
import type { LocaleCode } from '../../i18n';
import type { BookingCopy } from './types';
import { en } from './en';
import { ko } from './ko';
import { ja } from './ja';
import { zhCN } from './zh-CN';
import { es } from './es';
import { ptBR } from './pt-BR';
import { de } from './de';
import { fr } from './fr';

const ALL: Record<LocaleCode, BookingCopy> = { en, ko, ja, 'zh-CN': zhCN, es, 'pt-BR': ptBR, de, fr };
export const bookingCopy = (code: LocaleCode): BookingCopy => ALL[code] ?? en;
export const BOOKING_PATH = 'tools/booking-page';
export type { BookingCopy };
