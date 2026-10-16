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
    lead: 'PM, designer, developer and mobile agents work from a shared board, each on its own branch of your repository. Nothing merges without your approval.',
    ctaPrimary: 'View on GitHub',
    chip: 'Early-stage · MIT licensed · Codex and Claude Code',
    cliLink: 'Prefer the terminal? Install the CLI',
    shotAlt: 'The equipe desktop app: a sidebar of live work, a ticket list grouped by status with “Your turn” and “Review” on top, and the open ticket beside it',
    shotCaption: 'The equipe desktop app for macOS — your tickets as a list or a board, with what waits for you on top.',
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
  features: {
    title: 'What you get',
    intro: 'The squad runs in a background daemon, so closing the terminal never stops it. Every screen shows the same team.',
    items: [
      { title: 'Roles on one board', text: 'PM, designer, frontend, backend, mobile, QA and data, each with a model suited to the role and its own memory. The board is the single source of truth.' },
      { title: 'Isolated branches', text: 'Every member works in its own git worktree, inside a sandbox. Anything beyond it, such as a push or a deploy, waits for your answer.' },
      { title: 'Decisions come to you', text: 'Permission requests, and the questions members ask, arrive as cards you answer with one key or click.' },
      { title: 'Several projects, one squad', text: 'The conversation follows the project you pick, and a ticket’s work stays with its ticket.' },
      { title: 'A desktop app for macOS', text: 'A sidebar of live work, a ticket screen with list and board, ⌘K to search all work, and a browser panel. Eight languages, and it updates itself.' },
      { title: 'Phone and other Macs', text: 'Pair a phone with a QR code and get a push when you are needed. Connect the desktop app to a squad on another Mac over SSH.' },
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
    intro: 'The squad shows up outside the terminal too. The desktop app is out now. When an agent waits for your OK, the phone app tells you and you approve with Face ID. What you send is end-to-end encrypted.',
    soon: 'In preparation',
    download: "Download for macOS",
    req: "macOS 12 or later · Apple Silicon and Intel · signed and notarized",
    cliNote: "Needs the equipe CLI — if it's missing, the app walks you through installing it.",
    caption: "The phone screen is a mockup · the mobile app is still in preparation",
    items: [
      { title: 'Desktop app', platform: 'macOS', text: 'The squad, its tickets and the PM conversation in one window.', alt: 'The equipe desktop app: in the PM conversation, a permission request and a question from a member wait for an answer.' },
      { title: 'Mobile app', platform: 'iOS · Android', text: 'Pair with a QR code. It only pings you when something needs your OK.', alt: 'Mobile app mockup: two approval requests waiting.' },
    ],
    phone: { label: 'Waiting for you · 3', askCommand: 'Run the command?', allow: 'Allow once', decline: 'Decline', askMerge: 'Merge the branch?', approve: 'Approve', changes: 'Request changes' },
    notify: { title: 'Want to know when the mobile app ships?', text: 'Subscribe to releases on GitHub and you get an email only for new releases. No sign-up with us, no email collected.', cta: 'Get notified on GitHub', how: 'On the equipe-labs/equipe repo: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Get started',
    appSteps: [
      { title: 'Open the DMG', text: 'Open the downloaded `equipe.dmg`. It is signed and notarized, so macOS opens it without a warning.' },
      { title: 'Move it to Applications', text: 'Drag equipe onto the Applications folder in the same window, then eject the disk image.' },
      { title: 'Open equipe', text: 'Launch it from Applications. From then on the app checks for updates itself.' },
      { title: 'Start your first squad', text: 'The app needs the `equipe` CLI. If it can’t find it, it shows how to install it; follow that line. If it says the squad is off, run `equipe` in a terminal and the app attaches to it.' },
    ],
    cliTitle: 'Install from the terminal (CLI)',
    cliIntro: 'The desktop app needs the `equipe` CLI, and you can also run the squad entirely from a terminal. Pick one way to install it on macOS or Linux:',
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
          'equipe is an open-source AI software squad. It coordinates agents in roles such as PM, Designer, Frontend, Backend, Mobile, QA and Data around a shared board. They work in isolated git worktrees, and a person approves before changes merge.',
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
          'The easiest way is the macOS desktop app: download `equipe.dmg` from the latest release and move it to Applications. The app needs the `equipe` CLI and shows how to install it if it is missing. For the terminal, or on Linux, run `brew install equipe-labs/tap/equipe`, use the install.sh one-liner, or build from source (Rust 1.88+); every method is in Get started.',
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
          'equipe is early-stage. The squad daemon runs in the background, the PM accepts work, agents work on branches in sandboxes, and you approve before merge. You can follow the squad from the desktop app, your phone or Telegram. Handoffs between members are coming next, as listed on the roadmap.',
      },
      {
        question: 'What is a git worktree, and why does equipe use one?',
        answer:
          'A git worktree is another working folder for the same repository, with its own branch. equipe gives each member one, so several can work at once without touching each other or your checkout.',
      },
      {
        question: 'Is there a desktop app?',
        answer:
          'Yes, for macOS 12 or later on Apple Silicon and Intel. Download the signed and notarized equipe.dmg from the latest GitHub release; it checks for updates itself. It is a window onto the same daemon as the terminal: your squad, tickets, decisions, and a panel for the browser the members use. It needs the `equipe` CLI and offers to help install it. The app is in eight languages.',
      },
      {
        question: 'Can I follow the squad from my phone?',
        answer:
          'Yes. Run `equipe pair` and scan the QR code in the equipe mobile app, which is still in preparation. You get a push when something needs you, and you can answer, review work and talk to the PM. Messages are sealed end to end. Telegram works too, with `equipe telegram setup`.',
      },
    ],
  },
  notFound: { title: 'Page not found — equipe', description: 'This page does not exist.', heading: 'Page not found', text: 'There is nothing at this address. It may have moved, or the link may be wrong.', home: 'Go to the home page' },
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
