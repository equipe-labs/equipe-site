// English source text. This file defines the shape every translation must follow:
// `Messages` is derived from it, so a translation with a missing or extra key fails `astro check`.
// Markup: `backticks` render as <code>; **double asterisks** render as <strong>.
export const en = {
  meta: {
    title: 'equipe — an AI software squad led by one person',
    description:
      'equipe is an open-source AI software squad: role-based agents work from a shared board in isolated git worktrees, and you approve before anything merges.',
    ogTitle: 'equipe — an AI software squad led by one person',
    ogDescription:
      'equipe is an open-source AI software squad: role-based agents work from a shared board in isolated git worktrees, and you approve before anything merges.',
    ogImageAlt: 'equipe — an AI software squad led by one person',
  },
  ui: {
    skip: 'Skip to content',
    primaryNav: 'Primary',
    copy: 'Copy',
    copied: 'Copied',
    copyInstall: 'Copy install commands',
    copyCommands: 'Copy commands',
    copyCommand: 'Copy command',
    language: 'Language',
    // {language} is replaced with the target language's own name, e.g. 한국어.
    bannerText: 'View this page in {language}',
    bannerClose: 'Dismiss',
  },
  nav: { howItWorks: 'How it works', getStarted: 'Get started', faq: 'FAQ', github: 'GitHub' },
  hero: {
    title: 'Your AI software squad, led by you.',
    lead: 'equipe is an open-source AI software squad: a team of role-based agents (PM, Designer, Frontend, Backend, QA and Data) that works on your repository through a shared board, in isolated git worktrees, and waits for a person\'s approval before anything merges.',
    note: 'equipe isn\'t another agent loop. It\'s the team layer on top of the ones that already exist — Codex and Claude Code today.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Get started',
    chip: 'Early-stage · MIT licensed',
  },
  how: {
    title: 'How it works',
    intro: 'One person leads. The squad works in parallel. Everything passes through the board.',
    cards: [
      { title: 'Roles', text: 'Each member has a role — PM, Designer, Frontend, Backend, QA or Data — with a model suited to that role and its own memory.' },
      { title: 'Tickets', text: 'The board is the single source of truth. Members coordinate through tickets and immutable events, not chat, so every action leaves something you can see.' },
      { title: 'Branches', text: 'Each member works in its own isolated git worktree, on its own branch, so several can work on your repository at the same time without touching your checkout.' },
      { title: 'Your approval', text: 'You stay in the loop at the approval gates. Nothing merges until you say so.' },
    ],
  },
  who: {
    title: 'Who equipe is for',
    intro: 'equipe is for people who want to lead a small software team of AI agents instead of prompting one agent at a time. You set the direction and review the work. The squad splits it into tickets and does it on branches.',
    points: [
      { lead: 'You already use Codex or Claude Code.', text: 'equipe drives them; you sign in the way you already do.' },
      { lead: 'You want parallel work you can review.', text: 'Each change arrives as a branch, never as a surprise on your main line.' },
      { lead: 'You want to keep the decisions.', text: 'Approval gates sit where they matter, so the call stays yours.' },
    ],
    proof: 'This site was built by an equipe squad, in public. Every change started as a ticket and landed as a branch a person accepted.',
  },
  start: {
    title: 'Get started',
    install: 'equipe is installed from source today. You need Rust 1.88+ and git. The Claude engine also needs the `claude` binary.',
    run: 'Sign in to an engine, check it\'s ready, then open the squad console:',
    // Shell comments inside the code block may be translated; the commands must not be.
    runCode: `equipe login     # sign in to Codex or Claude Code
equipe status    # check engine readiness and model availability
equipe           # open the squad console`,
    tryIntro: 'Want a first taste without the board? Let one agent edit your repo on a new branch, in an isolated worktree:',
    docs: 'Read the docs on GitHub →',
    roadmap: 'Roadmap',
    architecture: 'Architecture',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is equipe?',
        answer:
          'equipe is an open-source AI software squad. It coordinates agents in roles such as PM, Designer, Frontend, Backend, QA and Data around a shared board. They work in isolated git worktrees, and a person approves before changes merge.',
      },
      {
        question: 'Is equipe another AI coding agent?',
        answer:
          'No. equipe is the team layer on top of existing agent engines, not a new agent loop. It adds roles, a board as the single source of truth, isolated git worktrees for parallel work, and human approval gates.',
      },
      {
        question: 'Which AI engines does equipe work with?',
        answer:
          'equipe drives Codex and Claude Code today. It is designed to support more engines through the Agent Client Protocol.',
      },
      {
        question: 'Does equipe handle my credentials?',
        answer:
          'For Claude Code, no. You run the unmodified `claude` binary and sign in yourself, so billing goes to your own account. For Codex, equipe signs in with OAuth using your ChatGPT plan and identifies itself honestly as `originator: equipe`.',
      },
      {
        question: 'How do I install equipe?',
        answer:
          'Install it from source with Rust 1.88+ and git: clone `github.com/equipe-labs/equipe`, then run `cargo install --locked --path crates/cli`. The Claude engine also needs the Claude Code binary.',
      },
      {
        question: 'Who approves the work?',
        answer:
          'You do. Each member works on its own branch in an isolated worktree, and equipe asks for human approval before a branch merges. The PM accepts work onto the board; the person leading the squad decides what lands.',
      },
      {
        question: 'Is equipe free and open source?',
        answer:
          'Yes. equipe is released under the MIT License and has been open source since its first commit. equipe itself is free. Claude Code and Codex run on your own Anthropic and OpenAI (ChatGPT) subscriptions or accounts.',
      },
      {
        question: 'Is equipe ready for production use?',
        answer:
          'equipe is early-stage. The squad daemon runs in the background, the PM accepts work, agents work on branches in sandboxes, and you approve before merge. Handoffs and communication channels are coming next, as listed on the roadmap.',
      },
    ],
  },
  footer: { license: 'MIT License', built: 'Built by an equipe squad, in public.' },
};

export type Messages = typeof en;
