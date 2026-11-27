import type { BookingCopy } from './types';

export const de: BookingCopy = {
  page: {
    title: 'Buchungsseite kostenlos erstellen: in 60 Sekunden | equipe',
    desc: 'Erstelle in einer Minute kostenlos die Online-Buchungsseite für dein Geschäft: Leistungen, Preise und Öffnungszeiten eintragen, Stil wählen und beim Tippen live sehen. Ohne Anmeldung testen.',
    h1: 'Buchungsseite in 60 Sekunden erstellen',
    lead: 'Gib den Namen deines Geschäfts, deine Leistungen und Öffnungszeiten ein. Deine Buchungsseite entsteht live, während du tippst, und wenn sie passt, kannst du sie teilen oder online stellen.',
    ogTitle: 'Buchungsseite kostenlos erstellen',
    crumbs: 'Kostenlose Tools',
  },
  hub: { name: 'Buchungsseite erstellen', blurb: 'Leistungen, Preise und Öffnungszeiten rein, eine Buchungsseite für deine Kundschaft raus. Kostenlos testen, ohne Anmeldung.', cta: 'Buchungsseite erstellen' },
  ed: {
    business: 'Dein Geschäft', name: 'Name des Geschäfts', namePh: 'z. B. Friseur Linde', tagline: 'Ein Satz dazu', taglinePh: 'z. B. Schnitt und Farbe, fünf Minuten vom Bahnhof',
    services: 'Leistungen', svcName: 'Leistung', svcNamePh: 'z. B. Haarschnitt', duration: 'Dauer', price: 'Preis', pricePh: 'z. B. 35 €',
    addService: 'Leistung hinzufügen', remove: 'Entfernen', maxServices: 'Hier passen bis zu 8 Leistungen. Dein Team kann später mehr ergänzen.', noServices: 'Füge mindestens eine Leistung hinzu, damit man etwas buchen kann.',
    hours: 'Öffnungszeiten', open: 'Geöffnet', closed: 'Geschlossen', from: 'Öffnet', to: 'Schließt', sameAs: 'Montag auf alle offenen Tage übertragen', badHours: 'Die Schließzeit muss nach der Öffnungszeit liegen.',
    contact: 'Kontakt', phone: 'Telefon', email: 'E-Mail', address: 'Adresse', addressPh: 'Straße, Ort', contactNote: 'Optional. Steht auf deiner Seite, damit die Kundschaft dich erreicht.',
    look: 'Stil', themes: { clean: 'Klar', warm: 'Warm', night: 'Nacht', bold: 'Kräftig' },
    min: '{n} Min.', hr: '{h} Std.', hrMin: '{h} Std. {m} Min.',
  },
  pv: {
    label: 'Live-Vorschau', phone: 'Handy', desktop: 'Computer', share: 'Link zum Teilen kopieren', copied: 'Link kopiert',
    shareNote: 'Der Link enthält die Seite selbst, deshalb wird nichts auf unseren Servern gespeichert. Nach 7 Tagen öffnet er sich nicht mehr.',
    expired: 'Dieser Vorschau-Link ist älter als 7 Tage und öffnet sich nicht mehr. Hier ist ein neues Beispiel zum Starten.',
    shared: 'Jemand hat diese Vorschau einer Buchungsseite mit dir geteilt. Ändere, was du möchtest.', start: 'Neu anfangen',
  },
  live: {
    title: 'Gefällt sie dir? Stell sie online',
    sub: 'Melde dich an und deine Angaben kommen mit. Dein KI-Team veröffentlicht diese Seite als erste Version, sorgt dafür, dass Buchungen gespeichert werden, schickt dir zu jeder neuen eine E-Mail und schaltet Online-Zahlung frei, sobald du dein Konto verbindest.',
    btn: 'Online stellen',
    free: 'Kostenlos starten · Keine Karte nötig · Ohne Programmieren',
    privacy: 'Bis du auf den Button drückst, bleibt alles, was du eingibst, in diesem Browser.',
  },
  bp: {
    services: 'Leistungen', chooseService: 'Leistung wählen', chooseTime: 'Tag und Uhrzeit wählen', details: 'Ihre Angaben', yourName: 'Ihr Name', yourContact: 'Telefon oder E-Mail', note: 'Möchten Sie uns etwas mitteilen? (optional)',
    book: 'Jetzt buchen', bookFor: '{service} buchen · {when}', done: 'Ihr Termin ist gebucht', doneSub: 'Dies ist eine Vorschau. Sobald die Seite online ist, wird jede Buchung gespeichert und das Geschäft bekommt eine E-Mail.',
    noTimes: 'In den nächsten zwei Wochen sind keine Termine frei.', noServices: 'Hier erscheinen die Leistungen.', hours: 'Öffnungszeiten', contact: 'Kontakt',
    closed: 'Geschlossen', preview: 'Vorschau Ihrer Buchungsseite', again: 'Anderen Termin buchen', times: 'Uhrzeiten', call: 'Anrufen', mail: 'E-Mail',
  },
  how: {
    title: 'So funktioniert es',
    items: [
      { title: 'Vier Dinge eintragen', text: 'Deinen Namen, deine Leistungen mit Dauer und Preis, deine Öffnungszeiten und wie man dich erreicht.' },
      { title: 'Zusehen, wie die Seite entsteht', text: 'Die Vorschau ändert sich mit jedem Tastendruck: Leistungen zur Auswahl, eine Tagesleiste, freie Zeiten aus deinen Öffnungszeiten, ein kurzes Formular. Wechsle zwischen vier Stilen.' },
      { title: 'Teilen oder online stellen', text: 'Kopiere einen Link zum Zeigen oder drück auf Online stellen. Melde dich kostenlos an und dein Team stellt die Seite mit deinen Angaben online.' },
    ],
  },
  after: {
    title: 'Was nach dem Online-Stellen passiert',
    sub: 'Der Ablauf, den ein Geschäft vor Ort meist bekommt, erledigt von deinem KI-Team. Alles, was Geld kostet oder deine Kundschaft erreicht, gibst du frei.',
    items: [
      { title: 'Deine Seite geht online', text: 'Am ersten Tag unter eigener Adresse veröffentlicht, mit Datenschutzerklärung und AGB, die Buchungen abdecken.' },
      { title: 'Buchungen werden gespeichert', text: 'Jede Buchung landet in deiner Liste, und zu jeder neuen bekommst du eine E-Mail. Keine Tabelle mehr pflegen.' },
      { title: 'Zahlungen, wenn du so weit bist', text: 'Verbinde dein Zahlungskonto und dieselbe Seite nimmt Anzahlungen oder den vollen Betrag an. Bis dahin wird trotzdem gebucht.' },
      { title: 'Es wird immer besser', text: 'Dein Team schaut, welche Leistungen gebucht werden, und schlägt im Wochenbericht die nächste Änderung vor.' },
    ],
  },
  faq: {
    title: 'Fragen',
    items: [
      { question: 'Ist das Erstellen der Buchungsseite kostenlos?', answer: 'Ja. Erstellen, ansehen und teilen ist kostenlos und ohne Anmeldung. Auch das Online-Stellen startet kostenlos: Neue Teams bekommen 500 Credits, eine Karte ist nicht nötig.' },
      { question: 'Muss ich programmieren können?', answer: 'Nein. Du füllst ein paar Felder aus und daraus entsteht die Seite. Nach der Anmeldung übernimmt dein KI-Team die Technik.' },
      { question: 'Nimmt die Vorschau echte Buchungen an?', answer: 'Noch nicht. Die Vorschau zeigt genau, wie sich das Buchen anfühlt, aber es wird nichts gesendet. Sobald die Seite online ist, werden Buchungen gespeichert und dir per E-Mail geschickt.' },
      { question: 'Was passiert mit meinen Eingaben?', answer: 'Sie bleiben in deinem Browser. Der Link zum Teilen trägt die Seite in sich selbst, deshalb wird nichts auf unseren Servern gespeichert, und nach 7 Tagen öffnet er sich nicht mehr. Deine Angaben werden erst gesendet, wenn du auf Online stellen drückst.' },
      { question: 'Kann man beim Buchen bezahlen?', answer: 'Ja, sobald die Seite online ist und du ein Zahlungskonto verbindest. Bis dahin kommen Buchungen trotzdem rein und die Zahlung kann später folgen.' },
      { question: 'Kann ich die Seite später ändern?', answer: 'Ja. Sag deinem Team einfach, was du willst: eine Leistung ergänzen, Öffnungszeiten ändern, Fotos oder eine weitere Sprache hinzufügen.' },
    ],
  },
  idea: {
    intro: 'Eine Buchungsseite für mein Geschäft, {name}.',
    services: 'Leistungen: {services}.',
    hours: 'Öffnungszeiten: {hours}.',
    contact: 'Kontaktdaten für die Seite: {contact}.',
    look: 'Stil: {look}.',
    ask: 'Ich habe mit dem Buchungsseiten-Tool von equipe.im eine Vorschau gemacht. Veröffentliche sie wie oben eingerichtet als erste Version, speichere dann jede Buchung, schick mir zu jeder neuen eine E-Mail und füge Online-Zahlung hinzu, sobald ich mein Konto verbinde.',
    closedDays: '{days} geschlossen',
  },
  sample: {
    name: 'Friseur Linde',
    tagline: 'Schnitt und Farbe, fünf Minuten vom Bahnhof',
    services: [{ n: 'Haarschnitt', d: 45, p: '35 €' }, { n: 'Schnitt und Farbe', d: 120, p: '95 €' }, { n: 'Bart trimmen', d: 20, p: '15 €' }],
  },
};
