// The product UI the site draws in code (T-242): every word inside the app pictures, one file per site language.
// Demo data is a made-up product, "Loop". Member names (pm, frontend…) and project names stay as the app shows them.
const en = {
  ui: {
    newMessage: 'New message', pm: 'PM', inbox: 'Inbox', inProgress: 'In progress', tickets: 'Tickets', overview: 'Overview', roadmap: 'Roadmap',
    projects: 'Projects', usage: 'Usage', suggest: 'Suggest', notRead: 'not read yet', team: 'Team', thisMac: 'This Mac',
    allProjects: 'All projects', search: 'Search · project:web is:blocked', filter: 'Filter', context: 'context 31%',
    idle: 'Idle', permission: 'Permission', yourTurn: 'Your turn', working: 'Working', done: 'Done', hours: 'h',
    composer: 'Anything for pm…', composerBusy: 'Anything for pm — work outside any project, or a new project', auto: 'auto', effort: 'effort',
  },
  lanes: { yourTurn: 'Your turn', review: 'Review', done: 'Done', proposed: 'Proposed', todo: 'To do', inProgress: 'In progress' },
  // T-1 … T-16, in order.
  tickets: [
    'Brand colours and logo', 'Landing page', 'Email signup endpoint', 'App icon', 'Pricing page', 'Retry failed signup emails',
    'Connect the analytics account', 'Pricing page A/B copy', 'Daily streak widget', 'Streak reminder API', 'Onboarding screens, round 2',
    'Signup funnel dashboard', 'Pricing FAQ', 'Export check-ins as CSV', 'Haptics on check-in', 'Referral link on the success page',
  ],
  activity: { t8: 'Editing pricing.tsx', t9: 'Editing StreakWidget.swift', t10: 'Running cargo test reminders', t11: 'Reading brief.md', t12: 'Reading funnel.sql' },
  inbox: {
    toSort: '1 to sort', toSortHint: 'proposals from the squad — take on or drop',
    permission: 'Permission', decisions: 'Decisions', yourTurn: 'Your turn', proposed: 'Proposed', startAll: 'Start all',
    allow: 'Allow running a command', publish: 'Publish the pricing page?', paid: 'Use a paid tool for the funnel?', connect: 'Connect the analytics account',
    postHog: 'Create a PostHog project for Loop', fromPm: 'from pm',
  },
  decision: {
    title: 'Decisions', tag: 'Pricing page', question: 'Publish the pricing page?',
    a: 'Publish now (Recommended)', aText: 'Goes live on loop.app/pricing. Visitors see the Pro plan at $6/mo. Can’t be taken back once shared.',
    b: 'Hold until the A/B copy is chosen', bText: 'Keeps the current page; T-8 finishes first',
    own: 'Type your own answer here', attach: 'Attach', asks: 'frontend asks · T-5', hint: '1–9 pick · Tab your own · ⌘↵ next', skip: 'Skip', submit: 'Submit',
    publishNow: 'Publish now', hold: 'Hold',
  },
  permission: {
    label: 'Permission', title: 'Allow running a command?', command: 'npm run build', why: 'To check the pricing page builds before it goes out',
    once: 'Allow Once', always: 'Always', deny: 'Deny', reply: 'Reply', note: '“Always” adds a rule for npm run', card: 'Card 1 of 2',
  },
  chat: {
    read: 'Read website/src/pricing.tsx', split: 'Here’s how I’d split it. Four tickets, each with one owner:',
    ticket: 'Ticket', owner: 'Owner', what: 'What',
    rows: ['Two headline variants for the Pro card, ready to A/B test', 'A pricing FAQ that answers the top objections', 'Funnel dashboard from visit to first check-in', 'Referral link on the success page'],
    before: 'T-5', mid: ', the pricing page itself, is already in review. ', bold: 'Publishing it is your call', after: ', so I put that question to you. I’ll report back when ', last: ' has numbers.',
  },
  hero: {
    ask: 'Get more people to sign up for Loop', reply: 'Here’s how I’d split it. Four tickets, one owner each:', reply2: 'T-5 is already in review. Publishing it is your call, so I’ll put that question to you.',
    working: 'Working', publish: 'Publish now', hold: 'Hold', liveTitle: 'Live', liveText: 'loop.app/pricing · published just now', approved: 'You approved 1 thing.',
    tickets: ['Pricing headline A/B', 'Pricing FAQ', 'Signup funnel dashboard', 'Referral link on the success page'],
    caption: 'Drawn from the real app with demo data. The progress bars and the Live banner are staged for this loop; in the app you see an activity line instead.',
    pause: 'Pause the demo', play: 'Play the demo', label: 'One line to the PM becomes four tickets worked at once, then one decision card for you, then live.',
  },
};
export type AppText = typeof en;
export default en;
