import type { LegalCopy } from '../legal';

const de: LegalCopy = {
  ui: {
    updated: 'Zuletzt aktualisiert: {date}',
    toc: 'Auf dieser Seite',
    prevails: 'Diese Seite gibt es auch in anderen Sprachen. Weicht eine Übersetzung von der englischen Fassung ab, gilt die englische Fassung.',
    notAdvice: 'Wir haben das in einfachen Worten geschrieben, damit es leicht zu lesen ist. Es beschreibt, wie equipe funktioniert; es ist keine Rechtsberatung für dein eigenes Unternehmen oder Produkt.',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    appPolicy: 'Datenschutz der Handy-App',
  },
  privacy: {
    title: 'Datenschutzerklärung — equipe',
    desc: 'Was equipe erhebt, warum, wer es verarbeitet, wie verbundene Konten wie Google und KI-Funktionen mit Daten umgehen, wie lange wir sie speichern und welche Wahlmöglichkeiten du hast.',
    h1: 'Datenschutzerklärung',
    summaryTitle: 'Kurz gesagt',
    summary: [
      'Wir erheben, was wir brauchen, um dein Team und deine Produkte zu betreiben, und nichts, um es zu verkaufen. Wir verkaufen keine personenbezogenen Daten.',
      'Wir nutzen weder deinen Arbeitsbereich noch die Daten deiner Produkte oder die Daten deiner verbundenen Konten, um KI-Modelle zu trainieren.',
      'Konten, die du verbindest, etwa Google, werden nur für die Funktionen genutzt, die du einschaltest. Du kannst sie jederzeit trennen.',
      'KI-Funktionen in deinem Produkt: equipe speichert nicht, was Besucher eingeben oder was die KI antwortet, nur Anzahlen und Kosten.',
      'Du kannst uns jederzeit bitten, deine Daten zu exportieren oder zu löschen: [support@equipe.im](mailto:support@equipe.im).',
    ],
    sections: [
      { id: 'who', h: 'Wer wir sind und wofür diese Erklärung gilt', body: [
        'equipe gibt dir ein Team aus KI-Agenten, die dein Produkt bauen, betreiben und verbessern. Betrieben wird es von der **Umbriles Inc.** („wir“, „uns“). Diese Erklärung gilt für die Website equipe.im, den equipe-Dienst unter app.equipe.im, den KI-Dienst unter ai.equipe.im und das Hosting der Produkte, die dein Team baut. Die equipe-Handy-App hat ihre eigene kurze Datenschutzerklärung unter [equipe.im/app/privacy](/app/privacy/).',
      ] },
      { id: 'collect', h: 'Was wir erheben', body: [
        { ul: [
          '**Kontodaten.** Deine E-Mail-Adresse und, wenn du dich mit Google oder Apple anmeldest, dein Name, deine E-Mail-Adresse und die Kontokennung, die uns diese Dienste übermitteln. Wenn du einen Passkey nutzt, speichern wir nur dessen öffentlichen Schlüssel; dein Fingerabdruck oder dein Gesicht verlässt nie dein Gerät.',
          '**Dein Arbeitsbereich.** Was du und dein Team in equipe erstellt: Nachrichten mit deinem Team, Anfragen, Aufgaben, Pläne, Dateien, die du hochlädst, Code und Inhalte deiner Produkte sowie Einstellungen.',
          '**Secrets.** Passwörter und Schlüssel, die du für deine Produkte eingibst, werden verschlüsselt im Secret-Speicher deines Teams abgelegt und in Unterhaltungen nicht wieder angezeigt.',
          '**Verbundene Konten.** Wenn du ein Konto wie Google, Meta oder GitHub verbindest, speichern wir ein verschlüsseltes Zugriffstoken und den Kontonamen sowie das, was nötig ist, um es für dich zu nutzen. Siehe „Verbundene Konten“ weiter unten.',
          '**Zahlungen.** Zahlungen wickelt Stripe ab. Wir sehen und speichern keine vollständigen Kartennummern. Wir bewahren Abrechnungsbelege auf: was gekauft wurde, wann und zu welchem Betrag.',
          '**Nutzungs- und technische Daten.** Anmeldeereignisse, IP-Adresse und Browserinformationen für Sicherheit und Missbrauchsschutz, Fehlerprotokolle sowie wie viel KI- und Rechenzeit dein Team nutzt, für Limits und Abrechnung.',
          '**Nachrichten an uns.** Was du sendest, wenn du dem Support schreibst.',
          '**Website.** equipe.im zählt Besuche mit PostHog ohne Cookies und ohne persönliche Profile zu erstellen und hält fest, wie ein Besucher uns gefunden hat (zum Beispiel die verweisende Website oder Kampagne).',
        ] },
      ] },
      { id: 'use', h: 'Wie wir sie nutzen', body: [
        { ul: [
          'Um den Dienst bereitzustellen: dein Team zu betreiben, deine Produkte zu bauen und zu hosten und dir deinen Arbeitsbereich anzuzeigen.',
          'Um ihn sicher zu halten: zu prüfen, dass du es bist, Missbrauch und Betrug zu verhindern und Probleme zu untersuchen.',
          'Um die Nutzung für Limits und Abrechnung zu messen und equipe zu verbessern.',
          'Um dich zu deinem Konto, zu Sicherheit, Abrechnung und wichtigen Änderungen zu kontaktieren. Marketing-E-Mails nur mit deiner Einwilligung; du kannst sie jederzeit abbestellen.',
        ] },
        'Wir verkaufen deine personenbezogenen Daten nicht, und wir nutzen weder deinen Arbeitsbereich noch die Daten deiner Produkte oder die Daten verbundener Konten, um KI-Modelle zu trainieren.',
        'Wo die DSGVO (GDPR) oder ähnliche Gesetze gelten, stützen wir uns auf: unseren Vertrag mit dir (um den Dienst bereitzustellen), unsere berechtigten Interessen (Sicherheit, Verhinderung von Missbrauch, Verbesserung von equipe), deine Einwilligung (zum Beispiel für Marketing-E-Mails oder Werbe-Cookies, falls wir diese jemals einsetzen) und rechtliche Pflichten (zum Beispiel die Aufbewahrung von Abrechnungsbelegen).',
      ] },
      { id: 'ai', h: 'Wie KI deine Arbeit verarbeitet', body: [
        'Dein Team arbeitet, indem es die benötigten Inhalte an KI-Modelle sendet, die von KI-Anbietern betrieben werden, die wir in deinem Auftrag nutzen (etwa Anthropic, OpenAI und Google). Sie verarbeiten die Inhalte, um Antworten zu erzeugen, und zwar nach ihren geschäftlichen API-Bedingungen, nach denen diese Inhalte nicht zum Training ihrer Modelle verwendet werden. equipe wählt das Modell für jeden Schritt.',
        'Agenten erteilen nie Freigaben für dich: Alles, was etwas veröffentlicht, versendet, Geld ausgibt oder Daten löscht, wartet auf deine ausdrückliche Freigabe.',
      ] },
      { id: 'connections', h: 'Verbundene Konten (Verbindungen)', body: [
        'Auf der Seite Verbindungen kannst du externe Konten verbinden, damit dein Team Dinge für dein Produkt einrichten kann, ohne dass du Codes oder IDs kopieren musst. Ob du ein Konto verbindest, entscheidest immer du, und zwar im Zustimmungsfenster des jeweiligen Anbieters. Was wir mit jedem Konto tun:',
        { ul: [
          '**Google.** Mit deiner Einwilligung fragen wir nach deiner E-Mail-Adresse und nach Zugriff auf Google Site Verification, Search Console und Google Analytics; auf Tag Manager nur, wenn du ihn hinzufügst; und auf Google Ads nur, wenn du Werbung verbindest. Wir nutzen diesen Zugriff nur, um zu tun, worum du für dein Produkt gebeten hast: deine Website verifizieren, sie zur Search Console hinzufügen und ihre Sitemap einreichen, eine Google-Analytics-Property anlegen und ihre ID in dein Produkt eintragen, einen Tag-Manager-Container anlegen und veröffentlichen und ein Conversion-Tag für Google Ads anlegen, und dir dann Status und Ergebnisse in equipe anzeigen.',
          '**Meta, TikTok, LinkedIn, X, Mailchimp, Bing und GitHub.** Nur für das genutzt, was du einschaltest: ein Pixel oder Tag für dein Produkt anlegen, Werbeergebnisse für deine Berichte lesen, einen Beitrag oder Newsletter veröffentlichen, den du freigegeben hast, deine Website verifizieren oder den Code deines Produkts mit einem privaten Repository in deinem GitHub-Konto synchronisieren.',
          '**Ausgaben und Beiträge warten auf dich.** Werbung, Beiträge, Newsletter und alles, was Geld kostet, passieren erst, nachdem du sie freigegeben hast.',
          '**Sicher gespeichert.** Zugriffstokens sind verschlüsselt, an dein Team und den Anbieter gebunden und werden nur gespeichert, solange die Verbindung besteht. Wenn du die Verbindung trennst, löschen wir unsere Kopie; bei Google bitten wir Google zusätzlich, den Zugriff zu widerrufen. Du kannst den Zugriff von equipe auch jederzeit in den Einstellungen deines Google-Kontos entfernen.',
        ] },
        '**Google-Nutzerdaten.** Die Nutzung und Übertragung von Informationen, die equipe von Google-APIs erhält, entspricht der [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) (Richtlinie zu Nutzerdaten für Google API-Dienste), einschließlich der Limited-Use-Anforderungen (Anforderungen an die eingeschränkte Nutzung). Wir nutzen Google-Nutzerdaten nur, um die Funktionen bereitzustellen und zu verbessern, die du in equipe sehen kannst; wir verkaufen sie nicht, nutzen sie nicht für Werbung und nicht zum Training von KI-Modellen; und Menschen bei equipe lesen sie nicht, es sei denn, du bittest uns darum, es ist für die Sicherheit oder die Untersuchung von Missbrauch nötig, oder das Gesetz verlangt es. Wenn dein Team diese Informationen für eine Arbeit braucht, um die du gebeten hast, können sie von den oben genannten KI-Anbietern verarbeitet werden, ausschließlich um diese Arbeit zu erledigen.',
      ] },
      { id: 'product-ai', h: 'KI-Funktionen in deinem Produkt', body: [
        'Dein Team kann KI-Funktionen in das Produkt einbauen, das es für dich baut, etwa einen Support-Chatbot, FAQ-Antworten, Übersetzung oder Zusammenfassungen von Bewertungen. Wenn sie eingeschaltet sind:',
        { ul: [
          'Was ein Besucher eingibt, wird an einen KI-Anbieter gesendet, um die Antwort zu erzeugen.',
          'equipe speichert nicht, was Besucher eingeben oder was die KI antwortet. Wir speichern nur Anzahlen, Tokens und Kosten pro Produkt, Tag und Funktion, für die Abrechnung und deine Nutzungsübersicht.',
          'Um Limits pro Besucher anzuwenden, speichern wir gehashte (nicht lesbare) Nutzer- und IP-Kennungen für höchstens zwei Tage.',
          'Der Schlüssel jedes Produkts bleibt auf dessen Server, und Aufrufe aus einem Browser werden abgelehnt.',
        ] },
        'Gegenüber deinen Besuchern bist du für dein Produkt verantwortlich. Die Datenschutzerklärung, die equipe für dein Produkt schreibt, erhält einen Abschnitt über KI, in 8 Sprachen, sobald KI eingeschaltet ist.',
      ] },
      { id: 'products', h: 'Die Produkte, die du baust', body: [
        'Für die Menschen, die die Produkte deines Teams nutzen (deine Besucher und Kunden), entscheidest du, was das Produkt erhebt, und wir verarbeiten diese Daten in deinem Auftrag, um es zu hosten und zu betreiben: seine Datenbank, Anmeldung, E-Mails, Dateien und die eingebaute Analyse, die keine Cookies nutzt. Wir nutzen die Daten deines Produkts nicht für eigene Zwecke. Dein Produkt bekommt eine eigene Datenschutzerklärung und eigene Nutzungsbedingungen, geschrieben auf Grundlage dessen, was es wirklich tut; du bist für sie verantwortlich und dafür, Anfragen deiner Nutzer zu beantworten.',
      ] },
      { id: 'sharing', h: 'Wer deine Daten verarbeitet', body: [
        'Wir setzen Dienstleister ein, um equipe zu betreiben. Sie verarbeiten Daten nur, um ihre Dienste für uns zu erbringen:',
        { ul: [
          '**Cloudflare:** Hosting, Datenbanken, Dateispeicher, E-Mail-Versand und Domain-Registrierung.',
          '**Luxor Agent Cloud (ehemals Tenki):** die Cloud-Rechner, auf denen dein Team arbeitet.',
          '**KI-Anbieter** wie Anthropic, OpenAI und Google: KI-Modelle.',
          '**Stripe:** Zahlungen für equipe und Zahlungen in deinem Produkt, wenn du sie einrichtest.',
          '**Google und Apple:** Anmeldung, wenn du sie nutzt.',
          '**PostHog:** cookielose Besuchszählung auf equipe.im.',
          '**Konten, die du verbindest,** wie oben beschrieben.',
        ] },
        'Wir können Daten offenlegen, wenn das Gesetz es verlangt oder um die Rechte und die Sicherheit unserer Nutzer und der Öffentlichkeit zu schützen. Sollte equipe jemals verkauft oder mit einem anderen Unternehmen zusammengeführt werden, würde diese Erklärung weiter für deine Daten gelten, und wir würden dich informieren.',
      ] },
      { id: 'transfers', h: 'Wo deine Daten gespeichert werden', body: [
        'Unsere Anbieter können Daten außerhalb deines Landes speichern, auch in den USA. Wo das Gesetz es verlangt, stützen wir uns auf die Garantien für Datenübermittlungen, die unsere Anbieter bieten, etwa die Standardvertragsklauseln der Europäischen Kommission.',
      ] },
      { id: 'retention', h: 'Wie lange wir sie speichern', body: [
        { ul: [
          'Dein Arbeitsbereich und deine Produkte: solange dein Konto und dein Team bestehen.',
          'Wenn du ein Team oder dein Konto löschst, löschen wir die zugehörigen Daten innerhalb von 30 Tagen. Backups laufen von selbst innerhalb von etwa 30 Tagen ab.',
          'Ein kostenloses Team, das 14 Tage lang niemand geöffnet hat, kann 7 Tage nach einer Benachrichtigung per E-Mail gelöscht werden, sofern es nicht vorher geöffnet wird.',
          'Tokens verbundener Konten: bis du die Verbindung trennst oder das Team gelöscht wird.',
          'Abrechnungsbelege: so lange, wie Steuer- und Buchhaltungsgesetze es verlangen.',
          'Gehashte Besucherkennungen für KI-Limits: höchstens zwei Tage.',
        ] },
        'Du kannst dein Projekt (Code, Dateien und Verlauf) jederzeit auf der Seite Projekt herunterladen.',
      ] },
      { id: 'rights', h: 'Deine Wahlmöglichkeiten und Rechte', body: [
        'Du kannst auf deine Daten zugreifen, sie exportieren, berichtigen oder löschen und dein Konto schließen, indem du an [support@equipe.im](mailto:support@equipe.im) schreibst. Je nachdem, wo du lebst (zum Beispiel nach der DSGVO in Europa, der UK-DSGVO oder dem CCPA in Kalifornien), hast du möglicherweise auch das Recht, der Verarbeitung zu widersprechen oder sie einschränken zu lassen, das Recht auf Datenübertragbarkeit, das Recht, deine Einwilligung zu widerrufen, und das Recht, dich bei einer Datenschutzbehörde zu beschweren. Wir verkaufen oder teilen keine personenbezogenen Daten für kontextübergreifende verhaltensbasierte Werbung.',
      ] },
      { id: 'security', h: 'Sicherheit', body: [
        'Wir nutzen Verschlüsselung bei der Übertragung, verschlüsselte Secrets und Zugriffstokens, gehashte Anmeldecodes und Sitzungskennungen, einen isolierten Rechner für jedes Team und Zugriff nach dem Prinzip der minimalen Rechte. Kein System ist vollkommen sicher; wenn eine Datenpanne dich betrifft, informieren wir dich, wie es das Gesetz verlangt. Mehr dazu auf unserer [Sicherheitsseite](/security/).',
      ] },
      { id: 'cookies', h: 'Cookies und lokaler Speicher', body: [
        { ul: [
          'app.equipe.im nutzt ein Sitzungscookie für die Anmeldung, damit du angemeldet bleibst.',
          'equipe.im merkt sich dein gewähltes Design und deine Sprache in deinem Browser.',
          'Die Besuchszählung auf equipe.im kommt ohne Cookies aus.',
          'Wir nutzen derzeit keine Werbe- oder seitenübergreifenden Tracking-Cookies. Falls wir jemals Werbe-Tags hinzufügen, werden sie erst geladen, nachdem du in einem Cookie-Banner zugestimmt hast, und du kannst deine Wahl jederzeit ändern.',
        ] },
      ] },
      { id: 'children', h: 'Kinder', body: ['equipe ist nicht für Kinder unter 16 Jahren gedacht, und wir erheben wissentlich keine Daten von ihnen.'] },
      { id: 'changes', h: 'Änderungen', body: ['Wenn sich diese Erklärung ändert, aktualisieren wir diese Seite und das Datum oben und informieren dich direkt über wichtige Änderungen.'] },
      { id: 'contact', h: 'Kontakt', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
  terms: {
    title: 'Nutzungsbedingungen — equipe',
    desc: 'Die Bedingungen für die Nutzung von equipe: dein Konto, Credits und Pläne, Verlängerungen und Erstattungen, Domains auf deinen Namen, KI-Funktionen, verbundene Konten, Zahlungen und zulässige Nutzung.',
    h1: 'Nutzungsbedingungen',
    summaryTitle: 'Kurz gesagt',
    summary: [
      'Dir gehört, was du mitbringst und was dein Team für dich baut. Du entscheidest, was live geht, verschickt wird oder Geld kostet.',
      'Die Arbeit deines Teams wird aus Credits bezahlt (1 Credit = $1). Ungenutzte gekaufte Credits können innerhalb von 14 Tagen nach dem Kauf erstattet werden.',
      'Pläne verlängern sich, bis du kündigst. Eine Kündigung wird zum Ende des bezahlten Zeitraums wirksam.',
      'Über equipe gekaufte Domains werden auf deinen Namen registriert.',
      'KI kann sich irren. Prüfe, was wichtig ist, bevor es öffentlich wird.',
    ],
    sections: [
      { id: 'agreement', h: 'Vereinbarung', body: [
        'Diese Bedingungen regeln deine Nutzung von equipe, einem Dienst der **Umbriles Inc.** („wir“, „uns“), einschließlich equipe.im, app.equipe.im, ai.equipe.im und der Produkte, die wir für dich hosten. Indem du ein Konto erstellst oder equipe nutzt, stimmst du ihnen und unserer [Datenschutzerklärung](/privacy/) zu.',
      ] },
      { id: 'service', h: 'Der Dienst', body: [
        'equipe stellt ein Team aus KI-Agenten bereit (etwa einen PM, Engineers, einen Designer, QA und einen Datenanalysten), die Software und damit verbundene Arbeit für dich planen, bauen, starten, hosten und verbessern, mit den Werkzeugen und der Infrastruktur, die sie nutzen: Hosting, Datenbanken, Domains, E-Mail, KI-Funktionen und Verbindungen zu anderen Diensten. Funktionen können sich ändern, während wir den Dienst verbessern, und Funktionen, die wir als früh oder demnächst verfügbar beschreiben, können eingeschränkt sein oder sich ändern.',
      ] },
      { id: 'account', h: 'Dein Konto und dein Team', body: [
        'Du musst mindestens 16 Jahre alt und in der Lage sein, einen verbindlichen Vertrag zu schließen. Halte deine Anmeldemethoden sicher; du bist für Aktivitäten unter deinem Konto und in deinem Team verantwortlich. Informiere uns umgehend über jede unbefugte Nutzung.',
        'Ein Team kann Inhaber, Admins, Mitglieder und Betrachter haben. Inhaber und Admins verwalten Personen, Abrechnung und Limits. Der Team-Plan enthält 5 Personen; zusätzliche Bearbeiter kosten extra, wie auf der [Preisseite](/pricing/) angegeben, und Einladungen nur zum Ansehen sind kostenlos.',
      ] },
      { id: 'in-charge', h: 'Du hast das Sagen', body: [
        'Die Agenten handeln nach deinen Anweisungen und Freigaben. Du entscheidest, was gebaut, veröffentlicht, versendet, gekauft oder gelöscht wird. KI-Ergebnisse können falsch, unvollständig oder unsicher sein: Prüfe, was dir wichtig ist, besonders alles Öffentliche, Finanzielle, Rechtliche, Medizinische oder Sicherheitsrelevante. Du bist für deine Produkte, ihre Inhalte und die Einhaltung der für sie geltenden Gesetze verantwortlich, etwa Verbraucherschutz-, Datenschutz- und Werberecht.',
      ] },
      { id: 'content', h: 'Deine Inhalte', body: [
        'Du behältst alle Rechte an den Inhalten, Daten und dem Code, die du bereitstellst und die equipe für dich erstellt („deine Inhalte“). Du kannst dein Projekt jederzeit herunterladen. Du räumst uns eine beschränkte Lizenz ein, deine Inhalte zu hosten, zu verarbeiten, zu kopieren und zu übertragen, nur soweit es nötig ist, um den Dienst bereitzustellen und abzusichern. Du bestätigst, dass du die Rechte an den Inhalten hast, die du mitbringst.',
      ] },
      { id: 'credits', h: 'Credits', body: [
        { ul: [
          '**1 Credit = $1.** Die Arbeit deines Teams wird aus Credits bezahlt: KI-Arbeit zum Listenpreis des Modells plus unsere Marge sowie der Cloud-Rechner, den dein Team während der Arbeit nutzt. Jede Aufgabe zeigt, was sie verbraucht hat, und Anfragen zeigen vorab eine Schätzung.',
          '**Credit-Pakete** sind Einmalkäufe und gelten 12 Monate ab Kauf.',
          '**Plan-Credits**, die mit einem monatlichen Team-Plan kommen, werden 2 Monate lang übertragen; die monatlichen Credits eines Jahresplans werden 3 Monate lang übertragen. Credits, deren Ablaufdatum überschritten ist, werden entfernt.',
          '**Kostenlose und Bonus-Credits** (zum Beispiel das Willkommensguthaben oder Aktionsboni) haben keinen Geldwert, können weder erstattet noch übertragen werden und verfallen zusammen mit den Credits, mit denen sie kamen, oder wie unter Abrechnung angegeben.',
          '**Wenn die Credits aufgebraucht sind,** hört dein Team auf zu arbeiten und macht weiter, sobald Credits hinzugefügt werden. Du kannst eine monatliche Obergrenze festlegen, und das automatische Aufladen ist aus, solange du es nicht einschaltest.',
        ] },
      ] },
      { id: 'plans', h: 'Pläne, Verlängerungen und Kündigung', body: [
        { ul: [
          '**Monatspläne** verlängern sich jeden Monat, bis du kündigst.',
          '**Jahrespläne** decken die Grundgebühr des Plans für ein Jahr ab und verlängern sich um ein weiteres Jahr zum unter Abrechnung angezeigten Jahrespreis, sofern du nicht vor dem Verlängerungsdatum kündigst. Wir erinnern dich, bevor sich ein Jahresplan verlängert. Aktionspreise für das erste Jahr gelten nur für das erste Jahr.',
          '**Jederzeit kündbar** unter Abrechnung. Die Kündigung wird zum Ende des Zeitraums wirksam, den du bezahlt hast; dein Team und deine Produkte laufen bis dahin weiter.',
          '**Zahlungsverzug.** Ist eine Planzahlung 7 Tage überfällig, pausiert die Arbeit deines Teams; dein Live-Produkt bleibt online, während wir die Sache mit dir klären.',
          '**Preisänderungen** werden im Voraus angekündigt und gelten ab deiner nächsten Verlängerung.',
        ] },
      ] },
      { id: 'refunds', h: 'Erstattungen', body: [
        'Ungenutzte Credits aus einem Credit-Paket können innerhalb von 14 Tagen nach dem Kauf erstattet werden: Schreib an [support@equipe.im](mailto:support@equipe.im). Bonus-Credits, die mit einem erstatteten Paket kamen, werden im gleichen Verhältnis entfernt. Ansonsten werden bereits bezahlte Gebühren und Credits nicht erstattet, außer wenn das Gesetz es verlangt oder wir es zusagen. Wenn eine Aufgabe schiefgegangen ist, kannst du ihre Credits auf der Seite Abrechnung zurückfordern.',
      ] },
      { id: 'domains', h: 'Domains', body: [
        { ul: [
          'Eine Domain wird erst gekauft, nachdem du ihren Preis freigegeben hast; angezeigt werden der Preis für das erste Jahr und der Verlängerungspreis.',
          '**Über equipe gekaufte oder übertragene Domains werden auf deinen Namen registriert** (oder auf den deines Unternehmens), mit dir als rechtlichem Inhaber und aktiviertem WHOIS-Datenschutz. Es gelten die Regeln der Registry und des Registrars.',
          'Domains verlängern sich nicht automatisch; eine Verlängerung erfordert deine Freigabe und Zahlung. Eine nicht verlängerte Domain kann nach den Regeln der Registry ablaufen und verloren gehen.',
          'Du kannst eine über equipe gekaufte Domain zu einem anderen Registrar umziehen; schreib uns, und wir helfen dir dabei.',
          'Eine Domain, die dir bereits gehört, bleibt bei deinem Registrar, es sei denn, du entscheidest dich, sie zu equipe umzuziehen. Du bleibst dafür verantwortlich, sie dort zu verlängern.',
        ] },
      ] },
      { id: 'ai-features', h: 'KI-Funktionen in deinem Produkt', body: [
        { ul: [
          'KI-Funktionen, die dein Team in dein Produkt einbaut (etwa ein Chatbot, Zusammenfassungen oder Bilder), werden aus deinen Credits zum Listenpreis des KI-Anbieters plus 10 % bezahlt, während deine Besucher sie nutzen.',
          'Jedes Produkt hat ein monatliches KI-Limit, $10, sofern ein Inhaber oder Admin es nicht ändert. Am Limit pausieren KI-Funktionen bis zum nächsten Monat oder bis das Limit erhöht wird. Es gibt außerdem Limits pro Besucher.',
          'Du bist dafür verantwortlich, wie KI-Funktionen in deinem Produkt genutzt werden, deine Nutzer darüber zu informieren, dass Antworten von KI geschrieben werden, und KI-Ergebnisse von einem Menschen prüfen zu lassen, bevor sie für Entscheidungen genutzt werden, die jemanden erheblich betreffen.',
          'Wir können KI-Funktionen eines Produkts pausieren, das missbraucht wird oder gegen diese Bedingungen verstößt.',
        ] },
      ] },
      { id: 'connections', h: 'Verbundene Konten', body: [
        'Wenn du ein externes Konto verbindest (zum Beispiel Google, Meta oder GitHub), erlaubst du deinem Team, es in deinem Namen für die Funktionen zu nutzen, die du einschaltest. Werbung, Beiträge und alles, was Geld kostet, passieren erst, nachdem du sie freigegeben hast. Die Bedingungen des anderen Dienstes gelten ebenfalls, und du kannst die Verbindung jederzeit auf der Seite Verbindungen trennen.',
      ] },
      { id: 'payments', h: 'Zahlungen in deinem Produkt', body: [
        'Dein Team kann in das Produkt, das es für dich baut, eine Möglichkeit einbauen, Zahlungen anzunehmen, entweder über ein Stripe-Konto, das equipe für dein Unternehmen eröffnet (Stripe Connect, „Zahlungen über equipe“), oder über dein eigenes Stripe-Konto.',
        { ul: [
          '**Du bist der Verkäufer.** Du bist Händler und offizieller Verkäufer (Merchant of Record) für alles, was über dein Produkt verkauft wird. equipe ist weder Partei deiner Verkäufe noch eines Vertrags zwischen dir und deinen Kunden.',
          '**Du bist verantwortlich für das, was du verkaufst:** deine Produkte und Dienstleistungen, Preise, Belege, Steuern, Erstattungen, Rückbuchungen und Streitfälle, Kundensupport und die Einhaltung der Gesetze, die für deine Verkäufe gelten.',
          '**Es gelten die Bedingungen von Stripe.** Zahlungen über equipe werden von Stripe gemäß dem [Stripe Connected Account Agreement](https://stripe.com/legal/connect-account) abgewickelt, das das [Stripe Services Agreement](https://stripe.com/legal/ssa) einschließt; du akzeptierst es, wenn du Zahlungen einrichtest, und Stripe (nicht equipe) prüft deine Identität und zahlt an dein Bankkonto aus.',
          '**Die Gebühr von equipe.** Bei Zahlungen über equipe behält equipe eine Plattformgebühr von 1 % jeder erfolgreichen Zahlung ein, zusätzlich zu den eigenen Gebühren von Stripe. Sie wird nicht zurückgezahlt, wenn du die Zahlung später erstattest oder einen Streitfall verlierst. Wenn du dein eigenes Stripe-Konto nutzt, erhebt equipe keine Gebühr. Wir zeigen die Gebühr an, bevor du Zahlungen einrichtest, und kündigen Änderungen vorab an.',
          '**Pausieren.** Wir können Zahlungen über equipe pausieren, oder deine Auszahlungen, wenn Stripe uns darum bittet, wenn wir begründet Betrug oder einen Verstoß gegen diese Bedingungen oder die Bedingungen von Stripe vermuten oder wenn Stripe oder das Gesetz es verlangt.',
        ] },
      ] },
      { id: 'acceptable-use', h: 'Zulässige Nutzung', body: [
        'Nutze equipe oder die Produkte und KI-Funktionen, die es baut, nicht, um: gegen Gesetze zu verstoßen; Rechte anderer zu verletzen; Malware oder Phishing zu erstellen oder zu verbreiten; Spam zu versenden; dich als Personen oder Organisationen auszugeben, um zu täuschen; Systeme anzugreifen, auszulesen (Scraping) oder zu überlasten, für die du keine Berechtigung hast; Sicherheitsmaßnahmen, Limits oder die Abrechnung zu umgehen; Menschen zu belästigen oder ihnen zu schaden; oder Inhalte zu erzeugen, die Minderjährige sexualisieren. Wir können solche Anfragen ablehnen und Arbeiten, Produkte oder Konten sperren, die gegen diese Regeln verstoßen.',
      ] },
      { id: 'free', h: 'Kostenlose Teams', body: [
        'Ein kostenloses Team, das 14 Tage lang niemand geöffnet hat, kann 7 Tage nach einer Benachrichtigung per E-Mail gelöscht werden, sofern es nicht vorher geöffnet wird. Du kannst dein Projekt vorher herunterladen.',
      ] },
      { id: 'third-party', h: 'Dienste Dritter', body: [
        'equipe arbeitet mit Diensten, die wir verbinden oder die du verbindest, etwa KI-Anbieter, Hosting, Domain-Registrare, Zahlungen und Analyse. Deren Bedingungen gelten ebenfalls, und wir sind nicht verantwortlich für Dienste, die wir nicht kontrollieren.',
      ] },
      { id: 'availability', h: 'Verfügbarkeit und Gewährleistung', body: [
        'Wir arbeiten daran, equipe verfügbar und deine Daten sicher zu halten, aber der Dienst wird „wie besehen“ und „wie verfügbar“ bereitgestellt. Soweit gesetzlich zulässig, schließen wir stillschweigende Gewährleistungen aus, einschließlich der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter.',
      ] },
      { id: 'liability', h: 'Haftungsbeschränkung', body: [
        'Soweit gesetzlich zulässig, haften wir nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für entgangene Gewinne, Umsätze oder Daten. Unsere Gesamthaftung für jeden Anspruch ist auf den Betrag begrenzt, den du uns in den 12 Monaten vor dem Anspruch gezahlt hast, oder auf USD 100, wenn du nichts gezahlt hast. Nichts in diesen Bedingungen schränkt Rechte ein, die dir nach Verbraucherschutzgesetzen zustehen und auf die nicht verzichtet werden kann.',
      ] },
      { id: 'ending', h: 'Beendigung', body: [
        'Du kannst jederzeit aufhören, equipe zu nutzen, und dein Konto löschen. Wir können deinen Zugang sperren oder beenden, wenn du gegen diese Bedingungen verstößt oder das Gesetz es verlangt, mit vorheriger Benachrichtigung, wo dies angemessen ist. Nach dem Ende deines Kontos kannst du deine Inhalte noch 30 Tage lang exportieren, sofern das Gesetz es nicht verhindert.',
      ] },
      { id: 'changes', h: 'Änderungen', body: [
        'Wir können diese Bedingungen aktualisieren. Wir veröffentlichen die neue Fassung hier mit neuem Datum und informieren dich vorab über wichtige Änderungen. Wenn du equipe nach ihrem Inkrafttreten weiter nutzt, akzeptierst du sie.',
      ] },
      { id: 'contact', h: 'Kontakt', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
};

export default de;
