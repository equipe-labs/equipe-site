import type { Messages } from './en';

const de: Messages = {
  meta: {
    title: 'equipe — KI-Coding-Agenten als Squad, geleitet von dir',
    description:
      'equipe ist ein Open-Source-KI-Software-Squad: Agenten mit festen Rollen arbeiten über ein gemeinsames Board in isolierten Git-Worktrees. Gemergt wird nur mit deiner Freigabe.',
    ogTitle: 'equipe — KI-Coding-Agenten als Squad, geleitet von dir',
    ogDescription:
      'equipe ist ein Open-Source-KI-Software-Squad: Agenten mit festen Rollen arbeiten über ein gemeinsames Board in isolierten Git-Worktrees. Gemergt wird nur mit deiner Freigabe.',
    ogImageAlt: 'equipe — KI-Coding-Agenten als Squad, geleitet von einer einzigen Person',
  },
  ui: {
    skip: 'Zum Inhalt springen',
    primaryNav: 'Hauptnavigation',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyInstall: 'Installationsbefehle kopieren',
    copyCommands: 'Befehle kopieren',
    copyCommand: 'Befehl kopieren',
    language: 'Sprache',
    bannerText: 'Diese Seite auf {language} ansehen',
    bannerClose: 'Schließen',
  },
  nav: { howItWorks: 'So funktioniert’s', getStarted: 'Loslegen', faq: 'FAQ', github: 'GitHub' },
  hero: {
    title: 'Führe ein Team aus KI-Agenten. Jeden Merge gibst du frei.',
    lead: 'PM-, Design-, Entwickler- und Mobile-Agenten arbeiten über ein gemeinsames Board, jeder auf einem eigenen Branch deines Repositorys. Ohne deine Freigabe wird nichts gemergt.',
    ctaPrimary: 'Auf GitHub ansehen',
    chip: 'Frühe Phase · MIT-Lizenz · Codex und Claude Code',
    shotAlt: 'Vorschau der equipe-Desktop-App: Ein Agent bittet um Erlaubnis, einen Befehl auszuführen; darunter die Schaltflächen „Einmal erlauben“, „Immer“ und „Ablehnen“',
    shotCaption: 'Vorschau der Desktop-App — ein Agent hält an und meldet „Ich brauche eine Erlaubnis“; du gibst mit einem Klick frei. (App folgt in Kürze)',
  },
  how: {
    title: 'So funktioniert’s',
    intro: 'Eine Person leitet. Der Squad arbeitet parallel. Alles läuft über das Board.',
    steps: [
      { title: 'Übergeben', text: 'Sag dem PM, was du willst. Daraus werden Tickets auf einem gemeinsamen Board, jedes mit einer Rolle, die es übernimmt.' },
      { title: 'Parallel arbeiten', text: 'Die Mitglieder arbeiten gleichzeitig, jedes auf seinem eigenen Branch. Dein Checkout bleibt unberührt, und jede Aktion wird auf dem Board festgehalten.' },
      { title: 'Deine Freigabe', text: 'Bevor etwas gemergt wird, fragt equipe dich. Ohne dein Okay landet nichts.' },
    ],
  },
  who: {
    title: 'Für wen equipe gedacht ist',
    intro: 'equipe ist für alle, die ein kleines Software-Team aus KI-Agenten leiten möchten, statt immer nur einen Agenten per Prompt zu steuern. Du gibst die Richtung vor und prüfst die Arbeit. Der Squad zerlegt sie in Tickets und erledigt sie auf Branches.',
    points: [
      { lead: 'Du nutzt schon Codex oder Claude Code.', text: 'equipe steuert beide, und du meldest dich so an wie bisher.' },
      { lead: 'Du willst parallele Arbeit, die du prüfen kannst.', text: 'Jede Änderung kommt als Branch bei dir an, nie als Überraschung im main-Branch.' },
      { lead: 'Du willst die Entscheidungen behalten.', text: 'Freigaben sind genau dort eingebaut, wo es darauf ankommt. Das letzte Wort hast du.' },
    ],
    proof: 'Diese Website wurde öffentlich von einem equipe-Squad gebaut. Jede Änderung begann als Ticket und kam als Branch an, den eine Person abgenommen hat.',
  },
  apps: {
    title: 'Am Mac verfolgen, am Smartphone freigeben.',
    intro: 'Der Squad ist auch außerhalb des Terminals sichtbar. Wartet ein Agent auf dein OK, meldet sich das Smartphone und du gibst per Face ID frei. Die Inhalte sind Ende-zu-Ende-verschlüsselt.',
    soon: 'In Vorbereitung',
    caption: 'App-Vorschau · in Vorbereitung',
    items: [
      { title: 'Desktop-App', platform: 'macOS', text: 'Squad, Board und PM-Chat in einem Fenster.', alt: 'Vorschau der Desktop-App: Ein Agent bittet um Erlaubnis, einen Befehl auszuführen, mit den Schaltflächen Einmal erlauben, Immer und Ablehnen.' },
      { title: 'Mobile App', platform: 'iOS · Android', text: 'Meldet sich nur, wenn etwas dein OK braucht.', alt: 'Vorschau der mobilen App: zwei Freigabeanfragen warten.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'Befehl ausführen?', allow: 'Einmal erlauben', decline: 'Ablehnen', askMerge: 'Branch mergen?', approve: 'Freigeben', changes: 'Änderungen anfordern' },
    notify: { title: 'Möchtest du wissen, wann die Apps erscheinen?', text: 'Abonniere die Releases auf GitHub – dann bekommst du nur bei neuen Versionen eine E-Mail. Keine Registrierung bei uns, wir sammeln keine E-Mail-Adressen.', cta: 'Auf GitHub abonnieren', how: 'Im Repository equipe-labs/equipe: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Loslegen',
    install: 'Unter macOS und Linux genügt eine Zeile. Sie legt ein vorkompiliertes `equipe` in `~/.local/bin` ab (per SHA-256 geprüft) und trägt es in deinen PATH ein:',
    brew: 'Installiert ein vorkompiliertes `equipe` über den Homebrew-Tap. Später aktualisierst du mit `brew upgrade equipe`:',
    tabsLabel: 'Installationsweg',
    sourceTitle: 'Aus dem Quellcode bauen (für Fortgeschrittene)',
    source: 'Lieber selbst bauen? Dann installiere aus dem Quellcode mit Rust 1.88+ und git: Klone `github.com/equipe-labs/equipe` und führe `cargo install --locked --path crates/cli` aus. Die Claude-Engine braucht zusätzlich das `claude`-Binary.',
    run: 'Melde dich bei einer Engine an, prüfe, ob sie bereit ist, und öffne dann die Squad-Konsole:',
    runCode: `equipe login     # bei Codex oder Claude Code anmelden
equipe status    # Engine-Bereitschaft und verfügbare Modelle prüfen
equipe           # Squad-Konsole öffnen`,
    tryIntro: 'Du willst erst mal reinschnuppern, ohne das Board? Lass einen Agenten dein Repository auf einem neuen Branch bearbeiten, in einem isolierten Worktree:',
    docs: 'Doku auf GitHub lesen →',
    roadmap: 'Roadmap',
    architecture: 'Architektur',
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      {
        question: 'Was ist equipe?',
        answer:
          'equipe ist ein Open-Source-KI-Software-Squad. Es koordiniert Agenten in Rollen wie PM, Designer, Frontend, Backend, Mobile, QA und Data rund um ein gemeinsames Board. Sie arbeiten in isolierten Git-Worktrees, und eine Person gibt Änderungen frei, bevor sie gemergt werden.',
      },
      {
        question: 'Ist equipe ein weiterer KI-Coding-Agent?',
        answer:
          'Nein. equipe ist die Team-Ebene über bestehenden Agent-Engines, kein neuer Agent-Loop. Es ergänzt Rollen, ein Board als Single Source of Truth, isolierte Git-Worktrees für parallele Arbeit und menschliche Freigabeschritte.',
      },
      {
        question: 'Mit welchen KI-Engines funktioniert equipe?',
        answer:
          'Derzeit steuert equipe Codex und Claude Code. Über das Agent Client Protocol soll es künftig weitere Engines unterstützen.',
      },
      {
        question: 'Verwaltet equipe meine Zugangsdaten?',
        answer:
          'Bei Claude Code nicht. Du führst das unveränderte `claude`-Binary aus und meldest dich selbst an, die Abrechnung läuft also über dein eigenes Konto. Bei Codex meldet sich equipe per OAuth mit deinem ChatGPT-Abo an und gibt sich ehrlich als `originator: equipe` zu erkennen.',
      },
      {
        question: 'Wie installiere ich equipe?',
        answer:
          'Unter macOS und Linux genügt `brew install equipe-labs/tap/equipe`. Du kannst auch die install.sh-Zeile nutzen oder aus dem Quellcode bauen (Rust 1.88+); alle Wege stehen unter Loslegen.',
      },
      {
        question: 'Wer gibt die Arbeit frei?',
        answer:
          'Du. Jedes Mitglied arbeitet auf einem eigenen Branch in einem isolierten Worktree, und equipe holt eine menschliche Freigabe ein, bevor ein Branch gemergt wird. Der PM nimmt die Arbeit auf dem Board ab; wer den Squad leitet, entscheidet, was übernommen wird.',
      },
      {
        question: 'Ist equipe kostenlos und Open Source?',
        answer:
          'Ja. equipe steht unter der MIT-Lizenz und ist seit dem ersten Commit Open Source. equipe selbst ist kostenlos. Claude Code und Codex laufen über deine eigenen Abos oder Konten bei Anthropic und OpenAI (ChatGPT).',
      },
      {
        question: 'Ist equipe für den Produktivbetrieb geeignet?',
        answer:
          'equipe befindet sich in einer frühen Phase. Der Squad-Daemon läuft im Hintergrund, der PM nimmt Arbeit ab, Agenten arbeiten in Sandboxes auf Branches, und du gibst vor dem Merge frei. Als Nächstes folgen Übergaben und Kommunikationskanäle, wie in der Roadmap beschrieben.',
      },
      {
        question: 'Was ist ein git worktree, und warum nutzt equipe ihn?',
        answer:
          'Ein Git-Worktree ist ein weiterer Arbeitsordner desselben Repositorys mit eigenem Branch. equipe gibt jedem Mitglied einen, damit mehrere gleichzeitig arbeiten können, ohne sich gegenseitig oder deinem Checkout in die Quere zu kommen.',
      },
    ],
  },
  notFound: { title: 'Seite nicht gefunden — equipe', description: 'Diese Seite gibt es nicht.', heading: 'Seite nicht gefunden', text: 'Unter dieser Adresse gibt es nichts. Vielleicht wurde die Seite verschoben, oder der Link ist falsch.', home: 'Zur Startseite' },
  footer: { license: 'MIT-Lizenz', built: 'Öffentlich von einem equipe-Squad gebaut.' },
};

export default de;
