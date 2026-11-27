/**
 * Facts behind the "publish what you made with X" guides, the same in every language: the app's name, the date the
 * official help pages were read, the pages themselves, and what the app gives you for each piece a real site needs.
 * Change a status only after reading the app's own page again, and move `checked` with it.
 *
 * yes = the app does it itself; partial = it does, with a catch the page names (a paid plan, its own address only,
 * your own outside account); no = not offered or not documented on the pages we read.
 */
import type { GapKey, ToolId } from './types';

export type GapStatus = 'yes' | 'partial' | 'no';
export interface ToolFacts {
  /** The app's name as its maker writes it (descriptive use only: no logos, no colours). */
  name: string;
  /** The page the migrate tile for this app lives under (/migrate/#sources), when the whole project can move. */
  project: boolean;
  checked: string;
  status?: Record<GapKey, GapStatus>;
  sources: { title: string; url: string }[];
}

export const CHECKED = '2026-11-28';

export const FACTS: Record<ToolId, ToolFacts> = {
  'from-claude': { name: 'Claude', project: false, checked: CHECKED, sources: [] },
  'from-chatgpt': {
    name: 'ChatGPT', project: false, checked: CHECKED,
    status: { hosting: 'partial', domain: 'partial', database: 'partial', login: 'partial' },
    sources: [
      { title: 'Working with writing blocks and code blocks in ChatGPT', url: 'https://help.openai.com/en/articles/20001246-working-with-writing-blocks-and-code-blocks-in-chatgpt' },
      { title: 'Creating and using ChatGPT Sites', url: 'https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites' },
      { title: 'ChatGPT model release notes', url: 'https://help.openai.com/en/articles/9624314-model-release-notes' },
    ],
  },
  'from-gemini': {
    name: 'Gemini', project: false, checked: CHECKED,
    status: { hosting: 'partial', domain: 'no', database: 'partial', login: 'no' },
    sources: [
      { title: 'Use Canvas in Gemini Apps', url: 'https://support.google.com/gemini/answer/16047321?hl=en' },
      { title: 'Share your chats from Gemini Apps', url: 'https://support.google.com/gemini/answer/13743730?hl=en' },
    ],
  },
  'from-v0': {
    name: 'v0', project: true, checked: CHECKED,
    status: { hosting: 'yes', domain: 'partial', database: 'partial', login: 'partial' },
    sources: [
      { title: 'v0 docs: code editing', url: 'https://v0.app/docs/code-editing' },
      { title: 'v0 docs: deployments', url: 'https://v0.app/docs/deployments' },
      { title: 'v0 docs: custom domains', url: 'https://v0.app/docs/custom-domains' },
      { title: 'v0 docs: GitHub', url: 'https://v0.app/docs/github' },
      { title: 'v0 docs: databases', url: 'https://v0.app/docs/databases' },
      { title: 'v0 pricing', url: 'https://v0.app/pricing' },
    ],
  },
  'from-lovable': {
    name: 'Lovable', project: true, checked: CHECKED,
    status: { hosting: 'yes', domain: 'partial', database: 'yes', login: 'yes' },
    sources: [
      { title: 'Lovable docs: publish', url: 'https://docs.lovable.dev/features/publish' },
      { title: 'Lovable docs: custom domain', url: 'https://docs.lovable.dev/features/custom-domain' },
      { title: 'Lovable docs: GitHub integration', url: 'https://docs.lovable.dev/integrations/github' },
      { title: 'Lovable docs: external deployment and hosting', url: 'https://docs.lovable.dev/tips-tricks/external-deployment-hosting' },
      { title: 'Lovable docs: Lovable Cloud', url: 'https://docs.lovable.dev/integrations/cloud' },
      { title: 'Lovable pricing', url: 'https://lovable.dev/pricing' },
    ],
  },
  'from-cursor': {
    name: 'Cursor', project: true, checked: CHECKED,
    status: { hosting: 'partial', domain: 'no', database: 'no', login: 'no' },
    sources: [
      { title: 'Cursor help: Git', url: 'https://cursor.com/help/integrations/git' },
      { title: 'Cursor docs: cloud agent setup (Publish)', url: 'https://cursor.com/docs/cloud-agent/setup' },
    ],
  },
  'from-replit': {
    name: 'Replit', project: true, checked: CHECKED,
    status: { hosting: 'yes', domain: 'yes', database: 'yes', login: 'yes' },
    sources: [
      { title: 'Replit docs: publishing', url: 'https://docs.replit.com/features/publishing/overview' },
      { title: 'Replit docs: deployment types', url: 'https://docs.replit.com/features/publishing/deployment-types' },
      { title: 'Replit docs: deployment pricing', url: 'https://docs.replit.com/billing/deployment-pricing' },
      { title: 'Replit docs: custom domains', url: 'https://docs.replit.com/features/publishing/custom-domains' },
      { title: 'Replit docs: projects and files', url: 'https://docs.replit.com/help/projects-and-files' },
      { title: 'Replit docs: plans', url: 'https://docs.replit.com/billing/plans' },
    ],
  },
  'publish-html': { name: 'AI', project: false, checked: CHECKED, sources: [] },
};

/** The cloud's /import accepts these page names as `src` (equipe-cloud web/src/artifact-import.js SRC_RE); newer pages
 * send publish-html (neutral words on the import screen) and keep their own name in utm_content. */
export const IMPORT_SRC: Record<ToolId, ToolId> = {
  'from-claude': 'from-claude', 'from-chatgpt': 'from-chatgpt', 'from-gemini': 'from-gemini', 'publish-html': 'publish-html',
  'from-v0': 'publish-html', 'from-lovable': 'publish-html', 'from-cursor': 'publish-html', 'from-replit': 'publish-html',
};
