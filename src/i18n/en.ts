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
    title: 'Lead a team of AI agents. You approve every merge.',
    lead: 'PM, designer and developer agents work from a shared board, each on its own branch of your repository. Nothing merges without your approval.',
    ctaPrimary: 'View on GitHub',
    chip: 'Early-stage · MIT licensed · Codex and Claude Code',
    shotAlt: 'Preview of the equipe desktop app: an agent asks permission to run a command, with Allow once, Always and Decline buttons',
    shotCaption: 'Desktop app preview — an agent pauses with “I need permission” and you approve in one click. (App coming soon)',
  },
  how: {
    title: 'How it works',
    intro: 'One person leads. The squad works in parallel. Everything passes through the board.',
    steps: [
      { title: 'Hand it off', text: 'Tell the PM what you want. It becomes tickets on a shared board, each with a role to take it.' },
      { title: 'Work in parallel', text: 'Members work at the same time, each on its own branch. Your checkout stays untouched, and every action is recorded on the board.' },
      { title: 'Your approval', text: 'Before anything merges, equipe asks you. Nothing lands until you say so.' },
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
  apps: {
    title: 'Watch on your Mac, approve on your phone.',
    intro: 'The squad shows up outside the terminal too. When an agent waits for your OK, your phone tells you and you approve with Face ID. What you send is end-to-end encrypted.',
    soon: 'Coming soon',
    download: "Download for macOS",
    req: "macOS 12 or later · Apple Silicon and Intel",
    cliNote: "Needs the equipe CLI — if it's missing, the app walks you through installing it.",
    caption: "Screens are mockups · mobile apps coming soon",
    items: [
      { title: 'Desktop app', platform: 'macOS', text: 'Squad, board and PM chat in one window.', alt: 'Desktop app mockup: an agent asks to run a command, with Allow once, Always and Decline buttons.' },
      { title: 'Mobile app', platform: 'iOS · Android', text: 'Only pings you when something needs your OK.', alt: 'Mobile app mockup: two approval requests waiting.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'Run the command?', allow: 'Allow once', decline: 'Decline', askMerge: 'Merge the branch?', approve: 'Approve', changes: 'Request changes' },
    notify: { title: 'Want to know when the apps ship?', text: 'Subscribe to releases on GitHub and you get an email only for new releases. No sign-up with us, no email collected.', cta: 'Get notified on GitHub', how: 'On the equipe-labs/equipe repo: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Get started',
    install: 'One line on macOS and Linux. It puts a prebuilt `equipe` in `~/.local/bin`, checked against its SHA-256, and adds it to your PATH:',
    brew: 'Installs a prebuilt `equipe` through the Homebrew tap. Update later with `brew upgrade equipe`:',
    tabsLabel: 'Install method',
    sourceTitle: 'Build from source (advanced)',
    source: 'Prefer to build it yourself? Install from source with Rust 1.88+ and git: clone `github.com/equipe-labs/equipe`, then run `cargo install --locked --path crates/cli`. The Claude engine also needs the `claude` binary.',
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
          'On macOS and Linux, run `brew install equipe-labs/tap/equipe`. You can also use the install.sh one-liner or build from source (Rust 1.88+); every method is in Get started.',
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
      {
        question: 'What is a git worktree, and why does equipe use one?',
        answer:
          'A git worktree is another working folder for the same repository, with its own branch. equipe gives each member one, so several can work at once without touching each other or your checkout.',
      },
    ],
  },
  footer: { license: 'MIT License', built: 'Built by an equipe squad, in public.' },
};

export type Messages = typeof en;
