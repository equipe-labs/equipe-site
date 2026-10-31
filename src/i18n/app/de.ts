import type { AppText } from './en';

const de: AppText = {
  ui: {
    newMessage: 'Neue Nachricht', pm: 'PM', inbox: 'Eingang', inProgress: 'In Arbeit', tickets: 'Tickets', overview: 'Übersicht', roadmap: 'Roadmap',
    projects: 'Projekte', usage: 'Nutzung', suggest: 'Vorschlagen', notRead: 'noch nicht gelesen', team: 'Team', thisMac: 'Dieser Mac',
    allProjects: 'Alle Projekte', search: 'Suchen · project:web is:blocked', filter: 'Filter', context: 'Kontext 31 %',
    idle: 'Inaktiv', permission: 'Freigabe', yourTurn: 'Du bist dran', working: 'Arbeitet', done: 'Erledigt', hours: 'Std.',
    composer: 'Etwas für pm …', composerBusy: 'Etwas für pm — Arbeit außerhalb von Projekten oder ein neues Projekt', auto: 'auto', effort: 'Aufwand',
  },
  lanes: { yourTurn: 'Du bist dran', review: 'Prüfung', done: 'Erledigt', proposed: 'Vorgeschlagen', todo: 'Offen', inProgress: 'In Arbeit' },
  tickets: [
    'Markenfarben und Logo', 'Landingpage', 'Endpunkt für E-Mail-Anmeldung', 'App-Symbol', 'Preisseite', 'Fehlgeschlagene Anmelde-Mails wiederholen',
    'Analytics-Konto verbinden', 'A/B-Texte für Preisseite', 'Widget für Tagesserie', 'API für Serien-Erinnerung', 'Onboarding-Screens, Runde 2',
    'Dashboard für Anmeldetrichter', 'FAQ zu Preisen', 'Check-ins als CSV exportieren', 'Haptik beim Check-in', 'Empfehlungslink auf der Erfolgsseite',
  ],
  activity: { t8: 'Bearbeitet pricing.tsx', t9: 'Bearbeitet StreakWidget.swift', t10: 'Führt cargo test reminders aus', t11: 'Liest brief.md', t12: 'Liest funnel.sql' },
  inbox: {
    toSort: '1 zu sortieren', toSortHint: 'Vorschläge vom Squad — übernehmen oder verwerfen',
    permission: 'Freigabe', decisions: 'Entscheidungen', yourTurn: 'Du bist dran', proposed: 'Vorgeschlagen', startAll: 'Alle starten',
    allow: 'Ausführen eines Befehls erlauben', publish: 'Preisseite veröffentlichen?', paid: 'Bezahltes Tool für den Trichter nutzen?', connect: 'Analytics-Konto verbinden',
    postHog: 'PostHog-Projekt für Loop anlegen', fromPm: 'von pm',
  },
  decision: {
    title: 'Entscheidungen', tag: 'Preisseite', question: 'Preisseite veröffentlichen?',
    a: 'Jetzt veröffentlichen (Empfohlen)', aText: 'Geht live auf loop.app/pricing. Besucher sehen den Pro-Tarif für $6/mo. Nach dem Teilen nicht rückgängig zu machen.',
    b: 'Warten, bis die A/B-Texte feststehen', bText: 'Die aktuelle Seite bleibt; T-8 wird zuerst fertig',
    own: 'Eigene Antwort eingeben', attach: 'Anhängen', asks: 'frontend fragt · T-5', hint: '1–9 wählen · Tab eigene · ⌘↵ weiter', skip: 'Überspringen', submit: 'Senden',
    publishNow: 'Jetzt veröffentlichen', hold: 'Warten',
  },
  permission: {
    label: 'Freigabe', title: 'Ausführen eines Befehls erlauben?', command: 'npm run build', why: 'Um zu prüfen, ob die Preisseite baut, bevor sie live geht',
    once: 'Einmal erlauben', always: 'Immer', deny: 'Ablehnen', reply: 'Antworten', note: '„Immer“ legt eine Regel für npm run an', card: 'Karte 1 von 2',
  },
  chat: {
    read: 'website/src/pricing.tsx gelesen', split: 'So würde ich es aufteilen. Vier Tickets, je eine Person zuständig:',
    ticket: 'Ticket', owner: 'Zuständig', what: 'Inhalt',
    rows: ['Zwei Headline-Varianten für die Pro-Karte, bereit zum A/B-Test', 'Eine Preis-FAQ, die die häufigsten Einwände beantwortet', 'Trichter-Dashboard vom Besuch bis zum ersten Check-in', 'Empfehlungslink auf der Erfolgsseite'],
    before: 'T-5', mid: ', die Preisseite selbst, ist schon in der Prüfung. ', bold: 'Ob sie live geht, entscheidest du', after: ', deshalb habe ich dir die Frage gestellt. Ich melde mich, sobald ', last: ' Zahlen liefert.',
  },
  hero: {
    ask: 'Bring mehr Leute dazu, sich für Loop anzumelden', reply: 'So würde ich es aufteilen. Vier Tickets, je eine Person zuständig:', reply2: 'T-5 ist schon in der Prüfung. Ob es live geht, entscheidest du, deshalb stelle ich dir die Frage.',
    working: 'Arbeitet', publish: 'Jetzt veröffentlichen', hold: 'Warten', liveTitle: 'Live', liveText: 'loop.app/pricing · gerade veröffentlicht', approved: 'Du hast 1 Sache freigegeben.',
    tickets: ['A/B-Headline für Preisseite', 'Preis-FAQ', 'Dashboard für Anmeldetrichter', 'Empfehlungslink auf der Erfolgsseite'],
    caption: 'Aus der echten App gezeichnet, mit Demodaten. Die Fortschrittsbalken und das Live-Banner sind für diesen Loop inszeniert; in der App siehst du stattdessen eine Aktivitätszeile.',
    pause: 'Demo pausieren', play: 'Demo abspielen', label: 'Eine Zeile an die PM wird zu vier gleichzeitig bearbeiteten Tickets, dann zu einer Entscheidungskarte für dich, dann live.',
  },
};
export default de;
