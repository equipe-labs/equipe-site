/**
 * The free tools hub (/tools/): one file per tool, no shared list.
 *
 * To add a tool, create src/data/tools/<slug>.ts with
 *
 *   import type { ToolEntry } from './index';
 *   export const TOOL: ToolEntry = { slug: 'grader', path: 'grader', order: 10, icon: 'gauge', copy: { en: {...}, ko: {...}, ... } };
 *
 * The hub page, the footer's "Free tools" link and the related-tools strip on every tool page read the files
 * through import.meta.glob, so adding a tool never touches another tool's file. English copy is required; other
 * locales fall back to English until they are written.
 */
import type { LocaleCode } from '../../i18n';

export interface ToolCopy {
  /** Card title on the hub, e.g. "Website grader". */
  name: string;
  /** One plain sentence: what the visitor gets. */
  blurb: string;
  /** Short call to action on the card, e.g. "Check my site". */
  cta: string;
}

export interface ToolEntry {
  /** Stable id, also used in analytics (tools_hub_click {tool}). */
  slug: string;
  /** Sub-path under the locale, without slashes: 'grader' -> /grader/, /ko/grader/. */
  path: string;
  /** Sort order on the hub, lower first. */
  order: number;
  /** Lucide-style icon key the hub knows (see TOOL_ICONS); unknown keys show a generic tool icon. */
  icon: string;
  /** Optional group on the hub: 'site' (your website), 'ai' (AI search), 'money' (costs and pricing), 'start' (starting out). */
  group?: 'site' | 'ai' | 'money' | 'start';
  copy: Partial<Record<LocaleCode, ToolCopy>> & { en: ToolCopy };
}

const files = import.meta.glob<{ TOOL: ToolEntry }>(['./*.ts', '!./index.ts'], { eager: true });

/** Every tool, in hub order. */
export const TOOLS: ToolEntry[] = Object.values(files)
  .map((m) => m.TOOL)
  .filter(Boolean)
  .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));

export const toolCopy = (t: ToolEntry, code: LocaleCode): ToolCopy => t.copy[code] ?? t.copy.en;

/** Icons (Lucide shapes, ISC) the hub draws; inner SVG markup for a 24x24 stroke icon. */
export const TOOL_ICONS: Record<string, string> = {
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.13 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"/>',
  calculator: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M16 14v4"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
};
