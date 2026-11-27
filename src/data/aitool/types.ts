/**
 * The free "AI to website" tool pages: /from-claude/, /from-chatgpt/, /from-gemini/ and /publish-html/ (8 languages each).
 * One page template (src/components/ToolPage.astro) and one tool (src/components/AiTool.astro): paste or drop code, see
 * it working right away in a sandboxed preview (sandbox.equipe.im, never equipe.im's own origin), then "Make it a real
 * site" -> sign-up -> it goes live by itself (app.equipe.im/import, go=1).
 *
 * Copy rules:
 * - Honest and specific. The only timing is the measured one: 25 to 44 seconds from the button to live (25-28 s for a
 *   person who already has a team, 43-44 s for a brand-new account, production runs on 2026-11-27).
 * - Never say a share link alone works: the person copies the code once (claude.ai keeps the code out of the page).
 * - "Claude", "ChatGPT", "Gemini" only say where the code was made (descriptive use): no logos, no colours, no
 *   suggestion of a partnership, and every page shows the "not affiliated" line.
 */
export type ToolId = 'from-claude' | 'from-chatgpt' | 'from-gemini' | 'from-v0' | 'from-lovable' | 'from-cursor' | 'from-replit' | 'publish-html';
export const TOOL_IDS: ToolId[] = ['from-claude', 'from-chatgpt', 'from-gemini', 'from-v0', 'from-lovable', 'from-cursor', 'from-replit', 'publish-html'];
/** The pages this template builds: every tool page, /from-claude/ included (since 2026-11-28 it has the live preview too). */
export const PAGE_IDS: ToolId[] = TOOL_IDS;

/** One way to get work out of an AI app, named the way that app labels it. */
export interface ExportWay { name: string; text: string }
/** What the AI app itself gives you for each piece a real site needs. Status comes from facts.ts. */
export type GapKey = 'hosting' | 'domain' | 'database' | 'login';

export interface Step { title: string; text: string }
export interface QA { question: string; answer: string }

export interface ToolPageCopy {
  /** <title> (about 60 characters or fewer) and meta description (about 155 or fewer). */
  title: string; desc: string;
  /** The social card's headline (scripts/og-tool.mjs) and the menu/link label for this page. */
  ogTitle: string; nav: string; navDesc: string;
  h1: string; lead: string;
  /** The code box's placeholder: how to get the code out of the app it was made in (two short lines, \n between). */
  placeholder: string;
  /** "In short": four quotable facts, each one sentence. */
  short: [string, string, string, string];
  steps: [Step, Step, Step];
  /** What works, as short labels. */
  works: string[];
  faq: QA[];
  /** "Getting your work out of X": the app's own copy, download, share and publish options (official help pages, see facts.ts). */
  exports?: ExportWay[];
  /** One honest paragraph on what the app's own publishing already does (and when that is enough). */
  builtIn?: string;
  /** Per piece: what the app gives you (one short sentence each). */
  gaps?: Record<GapKey, string>;
  /** Project tools (v0, Lovable, Cursor, Replit): the whole-project path (GitHub or ZIP, /migrate/). */
  project?: { title: string; text: string; button: string };
  /** The "not affiliated" line (empty for /publish-html when it names no company). */
  disclaimer: string;
}

export interface ToolShared {
  /** The tool box. */
  codeLabel: string; dropLead: string; choose: string; dropHere: string; remove: string; lines: string;
  sample: string; sampleNote: string; clear: string;
  previewLabel: string; previewIdle: string; previewIdleSub: string; building: string; working: string; refresh: string;
  real: string; realB: string; sending: string; realNote: string; free: string;
  /** Preview problems. {line} is a line number. */
  errSyntax: string; errSyntaxLine: string; errNoComponent: string; errBig: string; errRate: string; errType: string; errRead: string; errGeneric: string;
  errLinkClaude: string; errLinkOther: string; runtimeErr: string;
  /** Notes under a working preview. */
  noteStorage: string; noteClaudeApi: string; noteFirebase: string; noteCdn: string;
  kinds: { react: string; html: string; svg: string; mermaid: string; markdown: string };
  /** Section headings on every tool page. */
  shortTitle: string; howTitle: string; worksTitle: string; faqTitle: string; othersTitle: string; othersSub: string;
  /** The page's last call to action. */
  ctaTitle: string; ctaButton: string;
  /** "Measured" note under the timing fact. */
  measured: string;
  /** Sections added for the "publish what you made with X" guides. {tool} is the app's name. */
  exportTitle: string; exportSub: string;
  gapsTitle: string; gapsSub: string;
  gapNames: Record<GapKey, string>;
  status: { yes: string; partial: string; no: string };
  equipeCol: string; equipeGaps: Record<GapKey, string>;
  /** {date} and {tool}: "Checked on {date} on {tool}'s own help pages." */
  checked: string; sourcesLabel: string;
  compareTitle: string; compareSub: string;
  /** v2 (2026-11-28): computer/phone preview, progress, address, what you get, link help, sharing. */
  v2: ToolV2;
}

export interface ToolV2 {
  /** The preview size switch. */
  devLabel: string; devDesktop: string; devPhone: string;
  /** Progress while the preview builds; {s} is seconds. */
  progSend: string; progBuild: string; progSlow: string; progVerySlow: string; builtIn: string;
  /** The address the product gets. {host} is e.g. mortgage-calculator.equipe.page. */
  hostLabel: string; hostNote: string;
  /** "What you get", next to the button. */
  getTitle: string; getNow: [string, string, string, string]; getLaterTitle: string; getLater: [string, string, string, string, string];
  /** A whole chat was pasted and the code block was kept. {n} is lines. */
  detectChat: string;
  /** Paste from the clipboard (one tap on phones). */
  paste: string; pasteDenied: string;
  /** How to copy the code out of Claude (shown for a claude.ai link, or from the "How do I copy it?" link). */
  helpOpen: string; helpTitle: string; helpWhy: string; helpDesktop: string; helpDesktopSteps: [string, string, string];
  helpPhone: string; helpPhoneSteps: [string, string, string]; helpClose: string;
  /** Sharing a preview: the code travels in the link (#code=), nothing is stored. */
  share: string; shareCopied: string; shareBig: string; shareNote: string;
  sharedTitle: string; sharedText: string; sharedRun: string;
}

export interface ToolLocale {
  shared: ToolShared;
  pages: Record<ToolId, ToolPageCopy>;
}
