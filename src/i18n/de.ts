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
    cliLink: 'Lieber im Terminal? CLI installieren',
    shotAlt: 'Die equipe-Desktop-App: eine Seitenleiste mit laufender Arbeit, eine nach Status gruppierte Ticket-Liste mit „Du bist dran“ und „Review“ ganz oben und daneben das geöffnete Ticket',
    shotCaption: 'Die equipe-Desktop-App für macOS – deine Tickets als Liste oder Board, mit dem, was auf dich wartet, ganz oben.',
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
  features: {
    title: 'Das bekommst du',
    intro: 'Der Squad läuft in einem Hintergrund-Daemon, das Schließen des Terminals stoppt ihn also nie. Jeder Bildschirm zeigt dasselbe Team.',
    items: [
      { title: 'Rollen auf einem Board', text: 'PM, Designer, Frontend, Backend, Mobile, QA und Daten, je mit einem zur Rolle passenden Modell und eigenem Gedächtnis. Das Board ist die einzige Wahrheit.' },
      { title: 'Isolierte Branches', text: 'Jedes Mitglied arbeitet in einem eigenen git worktree, in einer Sandbox. Alles darüber hinaus, etwa ein Push oder Deploy, wartet auf deine Antwort.' },
      { title: 'Entscheidungen kommen zu dir', text: 'Erlaubnisanfragen und Fragen der Mitglieder kommen als Karten, die du mit einer Taste oder einem Klick beantwortest.' },
      { title: 'Mehrere Projekte, ein Squad', text: 'Das Gespräch folgt dem gewählten Projekt, und die Arbeit eines Tickets bleibt bei seinem Ticket.' },
      { title: 'Eine Desktop-App für macOS', text: 'Seitenleiste mit laufender Arbeit, Ticket-Ansicht als Liste und Board, ⌘K zur Suche in allen Aufgaben und ein Browser-Panel. Acht Sprachen, aktualisiert sich selbst.' },
      { title: 'Smartphone und andere Macs', text: 'Koppele ein Smartphone per QR-Code und bekomme einen Push, wenn du gebraucht wirst. Verbinde die Desktop-App per SSH mit einem Squad auf einem anderen Mac.' },
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
    intro: 'Der Squad ist auch außerhalb des Terminals sichtbar. Die Desktop-App ist jetzt verfügbar. Wartet ein Agent auf dein OK, meldet sich die Smartphone-App und du gibst per Face ID frei. Die Inhalte sind Ende-zu-Ende-verschlüsselt.',
    soon: 'In Vorbereitung',
    download: "Für macOS herunterladen",
    req: "macOS 12 oder neuer · Apple Silicon und Intel · signiert und notarisiert",
    cliNote: "Benötigt die equipe-CLI – fehlt sie, führt die App durch die Installation.",
    caption: "Der Smartphone-Screen ist ein Entwurf · die mobile App ist noch in Vorbereitung",
    items: [
      { title: 'Desktop-App', platform: 'macOS', text: 'Squad, Tickets und PM-Gespräch in einem Fenster.', alt: 'Die equipe-Desktop-App: Im PM-Gespräch warten eine Berechtigungsanfrage und eine Frage eines Mitglieds auf eine Antwort.' },
      { title: 'Mobile App', platform: 'iOS · Android', text: 'Per QR-Code koppeln. Meldet sich nur, wenn etwas dein OK braucht.', alt: 'Vorschau der mobilen App: zwei Freigabeanfragen warten.' },
    ],
    phone: { label: 'Warten auf dich · 3', askCommand: 'Befehl ausführen?', allow: 'Einmal erlauben', decline: 'Ablehnen', askMerge: 'Branch mergen?', approve: 'Freigeben', changes: 'Änderungen anfordern' },
    notify: { title: 'Möchtest du wissen, wann die mobile App erscheint?', text: 'Abonniere die Releases auf GitHub – dann bekommst du nur bei neuen Versionen eine E-Mail. Keine Registrierung bei uns, wir sammeln keine E-Mail-Adressen.', cta: 'Auf GitHub abonnieren', how: 'Im Repository equipe-labs/equipe: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Loslegen',
    appSteps: [
      { title: 'DMG öffnen', text: 'Öffne die heruntergeladene `equipe.dmg`. Sie ist signiert und notarisiert, macOS öffnet sie also ohne Warnung.' },
      { title: 'In Programme ziehen', text: 'Ziehe equipe im selben Fenster auf den Ordner „Programme“ (Applications) und wirf das Image aus.' },
      { title: 'equipe starten', text: 'Starte equipe aus „Programme“. Danach prüft die App selbst auf Updates.' },
      { title: 'Ersten Squad starten', text: 'Die App braucht die `equipe`-CLI. Findet sie sie nicht, zeigt sie die Installation; folge dieser Zeile. Meldet sie, dass der Squad aus ist, führe `equipe` in einem Terminal aus – die App verbindet sich damit.' },
    ],
    cliTitle: 'Im Terminal installieren (CLI)',
    cliIntro: 'Die Desktop-App braucht die `equipe`-CLI, und du kannst den Squad auch ganz im Terminal nutzen. Unter macOS und Linux wählst du einen Weg:',
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
          'Am einfachsten ist die macOS-Desktop-App: Lade `equipe.dmg` vom neuesten Release und ziehe sie in „Programme“. Die App braucht die `equipe`-CLI und zeigt die Installation, falls sie fehlt. Fürs Terminal oder unter Linux nutzt du `brew install equipe-labs/tap/equipe`, die install.sh-Zeile oder baust aus dem Quellcode (Rust 1.88+); alle Wege stehen unter Loslegen.',
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
          'equipe befindet sich in einer frühen Phase. Der Squad-Daemon läuft im Hintergrund, der PM nimmt Arbeit ab, Agenten arbeiten in Sandboxes auf Branches, und du gibst vor dem Merge frei. Den Squad kannst du in der Desktop-App, am Smartphone oder über Telegram verfolgen. Als Nächstes folgen Übergaben zwischen Mitgliedern, wie in der Roadmap beschrieben.',
      },
      {
        question: 'Was ist ein git worktree, und warum nutzt equipe ihn?',
        answer:
          'Ein Git-Worktree ist ein weiterer Arbeitsordner desselben Repositorys mit eigenem Branch. equipe gibt jedem Mitglied einen, damit mehrere gleichzeitig arbeiten können, ohne sich gegenseitig oder deinem Checkout in die Quere zu kommen.',
      },
      {
        question: 'Gibt es eine Desktop-App?',
        answer:
          'Ja, für macOS 12 oder neuer auf Apple Silicon und Intel. Lade die signierte und notarisierte equipe.dmg aus dem neuesten GitHub-Release herunter; sie sucht selbst nach Updates. Sie ist ein Fenster auf denselben Daemon wie das Terminal: dein Squad, Tickets, Entscheidungen und ein Panel für den Browser der Mitglieder. Sie braucht die `equipe`-CLI und hilft bei der Installation. Die App gibt es in acht Sprachen.',
      },
      {
        question: 'Kann ich den Squad am Smartphone verfolgen?',
        answer:
          'Ja. Führe `equipe pair` aus und scanne den QR-Code in der mobilen equipe-App, die noch in Vorbereitung ist. Du bekommst einen Push, wenn dich etwas braucht, und kannst antworten, Arbeit prüfen und mit dem PM sprechen. Nachrichten sind Ende-zu-Ende versiegelt. Auch Telegram funktioniert, mit `equipe telegram setup`.',
      },
    ],
  },
  notFound: { title: 'Seite nicht gefunden — equipe', description: 'Diese Seite gibt es nicht.', heading: 'Seite nicht gefunden', text: 'Unter dieser Adresse gibt es nichts. Vielleicht wurde die Seite verschoben, oder der Link ist falsch.', home: 'Zur Startseite' },
  footer: { license: 'MIT-Lizenz', built: 'Öffentlich von einem equipe-Squad gebaut.' },
  app: {
    nav: { privacy: 'Datenschutz der App', support: 'App-Support', home: 'equipe-Startseite' },
    privacy: {
      meta: {
        title: 'Datenschutzerklärung der equipe-App',
        description: 'Was die equipe-Mobil-App und ihr Relay verarbeiten: Kopplungsschlüssel bleiben auf dem Telefon, das Relay leitet nur versiegelte Nachrichten weiter, es gibt weder Analyse noch Tracking.',
      },
      title: 'Datenschutzerklärung der equipe-App',
      updated: 'Zuletzt aktualisiert: 2026-10-14',
      intro: 'Mit der equipe-App spricht Ihr Telefon mit dem equipe-Daemon auf Ihrem eigenen Mac. Diese Seite erklärt in einfachen Worten, was die App und das equipe-Relay verarbeiten.',
      sections: [
        {
          title: 'Kurz gesagt',
          text: 'Die App hat kein Konto, keine Werbung, keine Analyse und keine Absturzberichte und verfolgt Sie nicht. Die Arbeit Ihres Squads reist zwischen Telefon und Mac Ende-zu-Ende versiegelt.',
          items: [],
        },
        {
          title: 'Was auf Ihrem Telefon bleibt',
          text: 'Dies wird nur auf Ihrem Gerät gespeichert:',
          items: [
            '**Kopplungsschlüssel.** Das Schlüsselpaar des Telefons, das bei der Kopplung erhaltene Relay-Token sowie der öffentliche Schlüssel und der Name Ihres Macs. Sie liegen im iOS-Schlüsselbund oder unter Android in einem durch den Android Keystore geschützten Speicher. Der private Schlüssel verlässt das Telefon nie; das Relay-Token wird nur an das Relay gesendet, um das Telefon anzumelden.',
            '**Kamera.** Wird nur zum Scannen des Kopplungs-QR-Codes verwendet. Bilder werden weder gespeichert noch irgendwohin gesendet.',
            '**Face ID oder Fingerabdruck.** Ihr Telefon prüft sie, bevor eine Freigabe gesendet wird. equipe erhält keine biometrischen Daten.',
          ],
        },
        {
          title: 'Was das equipe-Relay verarbeitet',
          text: 'Telefon und Mac verbinden sich beide mit einem von equipe-labs betriebenen Relay unter `relay.equipe.im`. Alles dazwischen ist Ende-zu-Ende mit Schlüsseln versiegelt, die nur diese beiden besitzen. Das Relay kann daher Ihre Tickets, Nachrichten und Freigaben nicht lesen.',
          items: [
            'Das Relay sieht, dass eine Verbindung besteht, Größe und Zeitpunkt der Nachrichten sowie die zufälligen IDs Ihres Macs und Telefons. Diese sind nicht mit Ihrem Namen verknüpft. Es speichert nur einen Hash jedes Tokens, nicht das Token selbst.',
            'Das Relay läuft bei Cloudflare, das als Netzwerkanbieter die IP-Adresse jeder Verbindung verarbeitet.',
            'Wir nutzen diese Informationen nicht, um Sie zu identifizieren oder zu profilieren, und verkaufen oder teilen sie nicht.',
          ],
        },
        {
          title: 'Push-Benachrichtigungen',
          text: 'Um Ihr Telefon zu benachrichtigen, wenn der Squad Sie braucht, sendet das Relay eine Push-Benachrichtigung.',
          items: [
            '**Push-Token.** Das Relay speichert das Push-Token Ihres Telefons (APNs unter iOS, Firebase Cloud Messaging unter Android), verknüpft mit der Kopplung und nicht mit Ihrem Namen.',
            'Der sichtbare Text sagt nur, wer was braucht. Die Details reisen versiegelt und werden auf Ihrem Telefon geöffnet.',
            'Apple und Google stellen die Benachrichtigung nach ihren eigenen Datenschutzrichtlinien zu. Unter Android erzeugt Firebase Messaging außerdem eine Installations-ID für Ihr Telefon.',
          ],
        },
        {
          title: 'Analyse und Tracking',
          text: 'Die App enthält keine Analyse-, Werbe- oder Absturzbericht-Tools und verfolgt Sie nicht über andere Apps oder Websites hinweg. Diese Erklärung gilt für die App und das Relay. Die Website equipe.im zählt Besuche mit PostHog ohne Cookies oder lokalen Speicher und legt keine Personenprofile an.',
          items: [],
        },
        {
          title: 'Aufbewahrung und Löschung',
          text: 'Sie bestimmen, wie lange eine Kopplung besteht:',
          items: [
            'Heben Sie in der App die Kopplung dieses Geräts auf. Dadurch werden die Schlüssel auf dem Telefon sowie Kopplungseintrag und Push-Token im Relay gelöscht.',
            'Führen Sie auf Ihrem Mac `equipe devices remove <name>` aus, um ein Telefon sofort zu sperren.',
            'Das Relay speichert Push-Token und Kopplungseintrag nur, solange die Kopplung besteht.',
            'Unter Android werden die Daten beim Deinstallieren der App entfernt. Unter iOS können Schlüsselbund-Einträge nach dem Deinstallieren bleiben; heben Sie daher zuerst die Kopplung auf.',
          ],
        },
        {
          title: 'Kinder',
          text: 'Die App richtet sich nicht an Kinder, und wir erheben wissentlich keine personenbezogenen Daten von ihnen.',
          items: [],
        },
        {
          title: 'Änderungen',
          text: 'Ändert sich diese Erklärung, aktualisieren wir das Datum oben und diese Seite.',
          items: [],
        },
        {
          title: 'Kontakt',
          text: 'Fragen oder eine Bitte um Löschung von Daten: Schreiben Sie an die Adresse unten oder eröffnen Sie ein Issue auf GitHub.',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'equipe-App-Support — Telefon koppeln',
        description: 'So koppeln Sie die equipe-App mit `equipe pair` an Ihren Mac, Antworten auf häufige Fragen und wie Sie uns erreichen.',
      },
      title: 'equipe-App-Support',
      intro: 'Die equipe-App ist eine Fernbedienung für den Squad auf Ihrem Mac. Sie benachrichtigt Sie, wenn der Squad Sie braucht, und lässt Sie erlauben oder ablehnen, Arbeit prüfen und mit dem PM sprechen. Sie setzt voraus, dass equipe auf Ihrem Mac läuft – installieren Sie equipe also zuerst.',
      pairTitle: 'Telefon koppeln',
      pairSteps: [
        'Stellen Sie sicher, dass equipe auf Ihrem Mac installiert ist (siehe „Loslegen“ auf der Startseite).',
        'Führen Sie in einem Terminal auf Ihrem Mac den Befehl unten aus. Ein QR-Code erscheint, der 5 Minuten gültig ist.',
        'Öffnen Sie die equipe-App auf dem Telefon, starten Sie die Kopplung und erlauben Sie die Kamera.',
        'Richten Sie die Kamera auf den QR-Code.',
        'Ihr Mac fragt „Pair <Ihr Telefon>? y/n“. Antworten Sie mit `y`. Fertig gekoppelt.',
      ],
      pairCode: 'equipe pair',
      removeTitle: 'Gekoppelte Telefone ansehen oder entfernen',
      removeText: '`equipe devices` listet sie auf, `equipe devices remove <name>` sperrt eines sofort. Telefon verloren? Ein Befehl.',
      faqTitle: 'Häufige Fragen',
      faq: [
        { question: 'Brauche ich equipe auf einem Computer?', answer: 'Ja. Die App ist eine Fernbedienung für den equipe-Daemon auf Ihrem Mac; ohne ihn gibt es nichts, womit sie sich verbinden kann. Installieren Sie equipe zuerst.' },
        { question: 'Der QR-Code lässt sich nicht scannen oder ist abgelaufen.', answer: 'Der Code gilt 5 Minuten. Führen Sie `equipe pair` erneut aus, um einen neuen zu erhalten, und zeigen Sie den QR groß und hell auf dem Bildschirm an.' },
        { question: 'Ich bekomme keine Benachrichtigungen.', answer: 'Prüfen Sie, ob Benachrichtigungen für equipe in den Telefoneinstellungen erlaubt sind und ob der Daemon auf Ihrem Mac läuft (`equipe status`).' },
        { question: 'Ich habe mein Telefon verloren oder gewechselt.', answer: 'Führen Sie auf Ihrem Mac `equipe devices remove <name>` aus und koppeln Sie das neue Telefon mit `equipe pair`.' },
        { question: 'Kann equipe meine Arbeit über die App lesen?', answer: 'Nein. Nachrichten zwischen Telefon und Mac sind Ende-zu-Ende versiegelt; das Relay leitet sie nur weiter. Details stehen in der Datenschutzerklärung.' },
        { question: 'Funktioniert es außerhalb meines Heimnetzes?', answer: 'Ja. Telefon und Mac verbinden sich beide nach außen mit dem Relay; WLAN, Mobilfunk und Netze hinter einem Router funktionieren.' },
        { question: 'Welche Telefone werden unterstützt?', answer: 'iPhone mit iOS 17 oder neuer sowie Android 8.0 oder neuer.' },
      ],
      contactTitle: 'Kontakt',
      contactText: 'Immer noch Probleme? Schreiben Sie an die Adresse unten oder eröffnen Sie ein Issue auf GitHub.',
    },
  },
};

export default de;
