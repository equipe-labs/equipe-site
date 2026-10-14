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
  app: {
    nav: { privacy: 'App privacy policy', support: 'App support', home: 'equipe home' },
    privacy: {
      meta: {
        title: 'equipe app privacy policy',
        description: 'What the equipe mobile app and its relay handle: pairing keys stay on your phone, the relay only passes sealed messages, and there is no analytics or tracking.',
      },
      title: 'Privacy policy for the equipe app',
      updated: 'Last updated: 2026-10-14',
      intro: 'The equipe app lets your phone talk to the equipe daemon on your own Mac. This page says what the app and the equipe relay handle, in plain words.',
      sections: [
        {
          title: 'In short',
          text: 'The app has no account, no ads, no analytics, no crash reporting, and it does not track you. Your squad\'s work travels between your phone and your Mac, sealed end to end.',
          items: [],
        },
        {
          title: 'What stays on your phone',
          text: 'These are stored only on your device:',
          items: [
            '**Pairing keys.** Your phone\'s key pair, the relay token it received when you paired, and your Mac\'s public key and name. They live in the iOS Keychain, or on Android in storage protected by the Android Keystore. The private key never leaves the phone; the relay token is sent only to the relay, to sign your phone in.',
            '**Camera.** Used only to scan the pairing QR code. Images are not saved or sent anywhere.',
            '**Face ID or fingerprint.** Your phone checks it before an approval is sent. equipe never receives biometric data.',
          ],
        },
        {
          title: 'What the equipe relay handles',
          text: 'Your phone and your Mac both connect to a relay run by equipe-labs at `relay.equipe.im`. Everything between them is sealed end to end with keys only the two of them hold, so the relay cannot read your tickets, messages or approvals.',
          items: [
            'The relay can see that a connection exists, the size and timing of messages, and the random IDs of your Mac and your phone. These are not linked to your name. It keeps only a hash of each token, not the token itself.',
            'The relay runs on Cloudflare, which as the network provider processes the IP address of each connection.',
            'We do not use this information to identify or profile you, and we do not sell or share it.',
          ],
        },
        {
          title: 'Push notifications',
          text: 'To wake your phone when the squad needs you, the relay sends a push notification.',
          items: [
            '**Push token.** The relay keeps your phone\'s push token (APNs on iOS, Firebase Cloud Messaging on Android), linked to the pairing and not to your name.',
            'The visible text says only who needs what. The details travel sealed and are opened on your phone.',
            'Apple and Google deliver the notification under their own privacy policies. On Android, Firebase Messaging also creates an installation ID for your phone.',
          ],
        },
        {
          title: 'Analytics and tracking',
          text: 'The app contains no analytics, advertising or crash-reporting tools, and does not track you across other apps or websites. This policy covers the app and the relay. The website equipe.im counts visits with PostHog without cookies or local storage and builds no person profiles.',
          items: [],
        },
        {
          title: 'Keeping and deleting data',
          text: 'You decide how long a pairing lasts:',
          items: [
            'In the app, unpair this device. This deletes the keys from your phone, and the pairing record and push token from the relay.',
            'On your Mac, run `equipe devices remove <name>` to revoke a phone at once.',
            'The relay keeps the push token and pairing record only while the pairing exists.',
            'On Android, uninstalling the app removes its data. On iOS, Keychain items can remain after an uninstall, so unpair first.',
          ],
        },
        {
          title: 'Children',
          text: 'The app is not directed at children, and we do not knowingly collect personal information from them.',
          items: [],
        },
        {
          title: 'Changes',
          text: 'If this policy changes, we update the date above and this page.',
          items: [],
        },
        {
          title: 'Contact',
          text: 'Questions, or a request to delete data: write to the address below or open an issue on GitHub.',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'equipe app support — pair your phone',
        description: 'How to pair the equipe app with your Mac using `equipe pair`, answers to common questions, and how to reach us.',
      },
      title: 'equipe app support',
      intro: 'The equipe app is a remote for the squad on your Mac. It notifies you when the squad needs you and lets you allow or decline, review work and talk to the PM. It needs equipe running on your Mac, so install equipe first.',
      pairTitle: 'Pair your phone',
      pairSteps: [
        'Make sure equipe is installed on your Mac (see Get started on the home page).',
        'In a terminal on your Mac, run the command below. A QR code appears; it is valid for 5 minutes.',
        'Open the equipe app on your phone, start pairing, and allow the camera.',
        'Point the camera at the QR code.',
        'Your Mac asks "Pair <your phone>? y/n". Answer `y`. You are paired.',
      ],
      pairCode: 'equipe pair',
      removeTitle: 'See or remove paired phones',
      removeText: '`equipe devices` lists them, and `equipe devices remove <name>` revokes one at once. Lost phone: one command.',
      faqTitle: 'Frequently asked questions',
      faq: [
        { question: 'Do I need equipe on a computer?', answer: 'Yes. The app is a remote for the equipe daemon on your Mac. Without it there is nothing to connect to. Install equipe first.' },
        { question: 'The QR code does not scan or says it expired.', answer: 'The code is valid for 5 minutes. Run `equipe pair` again for a new one, and make the QR large and bright on your screen.' },
        { question: 'I do not get notifications.', answer: 'Check that notifications are allowed for equipe in your phone settings, and that the daemon is running on your Mac (`equipe status`).' },
        { question: 'I lost or replaced my phone.', answer: 'Run `equipe devices remove <name>` on your Mac, then pair the new phone with `equipe pair`.' },
        { question: 'Can equipe read my work through the app?', answer: 'No. Messages between your phone and your Mac are sealed end to end; the relay only passes them on. Read the privacy policy for details.' },
        { question: 'Does it work away from my home network?', answer: 'Yes. Both your phone and your Mac connect out to the relay, so Wi-Fi, mobile data and networks behind a router all work.' },
        { question: 'Which phones are supported?', answer: 'iPhone with iOS 17 or later, and Android 8.0 or later.' },
      ],
      contactTitle: 'Contact',
      contactText: 'Still stuck? Write to the address below, or open an issue on GitHub.',
    },
  },
};

export type Messages = typeof en;
