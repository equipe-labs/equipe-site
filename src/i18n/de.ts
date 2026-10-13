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
    title: 'Dein KI-Software-Squad, von dir geleitet.',
    lead: 'equipe ist ein Open-Source-KI-Software-Squad: ein Team aus Agenten mit festen Rollen (PM, Designer, Frontend, Backend, QA und Daten), das über ein gemeinsames Board an deinem Repository arbeitet, in isolierten git worktrees, und vor jedem Merge auf die Freigabe einer Person wartet.',
    note: 'equipe ist kein weiterer Agent-Loop, sondern die Team-Ebene über denen, die es schon gibt – heute Codex und Claude Code.',
    ctaPrimary: 'Auf GitHub ansehen',
    ctaSecondary: 'Loslegen',
    chip: 'Frühe Phase · MIT-Lizenz',
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
  start: {
    title: 'Loslegen',
    install: 'equipe wird derzeit aus dem Quellcode installiert. Du brauchst Rust 1.88+ und git. Die Claude-Engine braucht zusätzlich das `claude`-Binary.',
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
          'Installiere es aus dem Quellcode mit Rust 1.88+ und git: Klone `github.com/equipe-labs/equipe` und führe `cargo install --locked --path crates/cli` aus. Die Claude-Engine braucht zusätzlich das Claude-Code-Binary.',
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
