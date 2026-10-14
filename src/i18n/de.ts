import type { Messages } from './en';

const de: Messages = {
  meta: {
    title: 'equipe — KI-Coding-Agenten als Squad, geleitet von dir',
    description:
      'equipe ist ein Open-Source-KI-Software-Squad: Agenten mit Rollen arbeiten per Board in isolierten git worktrees. Gemergt wird nur mit deiner Freigabe.',
    ogTitle: 'equipe — KI-Coding-Agenten als Squad, geleitet von dir',
    ogDescription:
      'equipe ist ein Open-Source-KI-Software-Squad: Agenten mit Rollen arbeiten per Board in isolierten git worktrees. Gemergt wird nur mit deiner Freigabe.',
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
    lead: 'PM-, Design- und Entwickler-Agenten arbeiten an einem gemeinsamen Board, jeder auf einem eigenen Branch deines Repositorys. Ohne deine Freigabe wird nichts gemergt.',
    ctaPrimary: 'Auf GitHub ansehen',
    chip: 'Frühe Phase · MIT-Lizenz · Unterstützt Codex und Claude Code',
    shotAlt: 'Entwurf der equipe-Desktop-App: Ein Agent bittet um Erlaubnis, einen Befehl auszuführen, mit den Schaltflächen Einmal erlauben, Immer und Ablehnen',
    shotCaption: 'App-Entwurf · in Vorbereitung — ein Agent hält mit „Ich brauche eine Erlaubnis“ an, und du gibst sie mit einem Klick frei.',
  },
  how: {
    title: 'So funktioniert’s',
    intro: 'Eine Person leitet. Der Squad arbeitet parallel. Alles läuft über das Board.',
    cards: [
      { title: 'Rollen', text: 'Jedes Mitglied hat eine Rolle (PM, Designer, Frontend, Backend, QA oder Daten), ein dazu passendes Modell und ein eigenes Gedächtnis.' },
      { title: 'Tickets', text: 'Das Board ist die Single Source of Truth. Die Mitglieder stimmen sich über Tickets und unveränderliche Events ab, nicht über Chat. So hinterlässt jede Aktion etwas, das du sehen kannst.' },
      { title: 'Branches', text: 'Jedes Mitglied arbeitet in einem eigenen isolierten git worktree auf einem eigenen Branch. So können mehrere gleichzeitig an deinem Repository arbeiten, ohne deinen Checkout anzufassen.' },
      { title: 'Deine Freigabe', text: 'An den Freigabe-Schritten behältst du die Kontrolle. Nichts wird gemergt, bevor du es sagst.' },
    ],
  },
  who: {
    title: 'Für wen equipe gedacht ist',
    intro: 'equipe ist für alle, die ein kleines Software-Team aus KI-Agenten leiten möchten, statt immer nur einen Agenten per Prompt zu steuern. Du gibst die Richtung vor und prüfst die Arbeit. Der Squad zerlegt sie in Tickets und erledigt sie auf Branches.',
    points: [
      { lead: 'Du nutzt schon Codex oder Claude Code.', text: 'equipe steuert beide, und du meldest dich so an wie bisher.' },
      { lead: 'Du willst parallele Arbeit, die du prüfen kannst.', text: 'Jede Änderung kommt als Branch bei dir an, nie als Überraschung im main-Branch.' },
      { lead: 'Du willst die Entscheidungen behalten.', text: 'Die Freigabe-Schritte sitzen dort, wo es zählt. Das letzte Wort bleibt bei dir.' },
    ],
    proof: 'Diese Website hat ein equipe-Squad öffentlich gebaut. Jede Änderung begann als Ticket und kam als Branch an, den eine Person akzeptiert hat.',
  },
  apps: {
    title: 'Am Mac verfolgen, am Smartphone freigeben.',
    intro: 'Der Squad ist auch außerhalb des Terminals sichtbar. Wartet ein Agent auf dein OK, meldet sich das Smartphone und du gibst per Face ID frei. Die Inhalte sind Ende-zu-Ende-verschlüsselt.',
    soon: 'In Vorbereitung',
    caption: 'App-Entwurf · in Vorbereitung',
    items: [
      { title: 'Desktop-App', platform: 'macOS', text: 'Squad, Board und PM-Chat in einem Fenster.', alt: 'Entwurf der Desktop-App: Ein Agent bittet um Erlaubnis, einen Befehl auszuführen, mit den Schaltflächen Einmal erlauben, Immer und Ablehnen.' },
      { title: 'Mobile App', platform: 'iOS · Android', text: 'Meldet sich nur, wenn etwas dein OK braucht.', alt: 'Entwurf der mobilen App: zwei Freigabeanfragen warten.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'Befehl ausführen?', allow: 'Einmal erlauben', decline: 'Ablehnen', askMerge: 'Branch mergen?', approve: 'Freigeben', changes: 'Änderungen anfordern' },
    notify: { title: 'Möchtest du wissen, wann die Apps erscheinen?', text: 'Abonniere die Releases auf GitHub und bekomme nur bei neuen Versionen eine E-Mail. Keine Anmeldung bei uns, keine E-Mail-Erfassung.', cta: 'Auf GitHub benachrichtigen lassen', how: 'Im Repository equipe-labs/equipe: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Loslegen',
    install: 'Unter macOS und Linux genügt eine Zeile. Sie legt ein vorkompiliertes `equipe` in `~/.local/bin` ab (per SHA-256 geprüft) und trägt es in deinen PATH ein:',
    brew: 'Oder mit Homebrew:',
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
          'equipe ist ein Open-Source-KI-Software-Squad. Es koordiniert Agenten mit Rollen wie PM, Designer, Frontend, Backend, QA und Daten rund um ein gemeinsames Board. Sie arbeiten in isolierten git worktrees, und eine Person gibt Änderungen frei, bevor sie gemergt werden.',
      },
      {
        question: 'Ist equipe ein weiterer KI-Coding-Agent?',
        answer:
          'Nein. equipe ist die Team-Ebene über bestehenden Agent-Engines, kein neuer Agent-Loop. Es ergänzt Rollen, ein Board als Single Source of Truth, isolierte git worktrees für parallele Arbeit und Freigabe-Schritte durch Menschen.',
      },
      {
        question: 'Mit welchen KI-Engines funktioniert equipe?',
        answer:
          'Derzeit steuert equipe Codex und Claude Code. Über das Agent Client Protocol soll es künftig weitere Engines unterstützen.',
      },
      {
        question: 'Verwaltet equipe meine Zugangsdaten?',
        answer:
          'Bei Claude Code nicht. Du führst das unveränderte `claude`-Binary aus und meldest dich selbst an, die Abrechnung läuft also über dein eigenes Konto. Bei Codex meldet sich equipe per OAuth mit deinem ChatGPT-Tarif an und gibt sich ehrlich als `originator: equipe` zu erkennen.',
      },
      {
        question: 'Wie installiere ich equipe?',
        answer:
          'Unter macOS und Linux führst du `curl -fsSL https://github.com/equipe-labs/equipe/releases/latest/download/install.sh | sh` aus. Das legt ein vorkompiliertes `equipe` in `~/.local/bin` ab (per SHA-256 geprüft) und trägt es in deinen PATH ein. Alternativ mit Homebrew: `brew install equipe-labs/tap/equipe`. Wenn du lieber aus dem Quellcode baust, brauchst du Rust 1.88+ und git: Klone `github.com/equipe-labs/equipe` und führe `cargo install --locked --path crates/cli` aus. Die Claude-Engine braucht zusätzlich das Claude-Code-Binary.',
      },
      {
        question: 'Wer gibt die Arbeit frei?',
        answer:
          'Du. Jedes Mitglied arbeitet auf einem eigenen Branch in einem isolierten Worktree, und equipe holt eine menschliche Freigabe ein, bevor ein Branch gemergt wird. Der PM akzeptiert Arbeit auf dem Board; wer den Squad leitet, entscheidet, was übernommen wird.',
      },
      {
        question: 'Ist equipe kostenlos und Open Source?',
        answer:
          'Ja. equipe steht unter der MIT-Lizenz und ist seit dem ersten Commit Open Source. equipe selbst ist kostenlos. Claude Code und Codex laufen über deine eigenen Abos oder Konten bei Anthropic und OpenAI (ChatGPT).',
      },
      {
        question: 'Ist equipe für den Produktivbetrieb geeignet?',
        answer:
          'equipe befindet sich in einer frühen Phase. Der Squad-Daemon läuft im Hintergrund, der PM akzeptiert Arbeit, Agenten arbeiten in Sandboxes auf Branches, und du gibst vor dem Merge frei. Übergaben und Kommunikationskanäle folgen als Nächstes, wie auf der Roadmap steht.',
      },
    ],
  },
  footer: { license: 'MIT-Lizenz', built: 'Öffentlich von einem equipe-Squad gebaut.' },
};

export default de;
