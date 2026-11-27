// The words of the free booking page maker (/tools/booking-page/), one file per locale (./<code>.ts).
// `bp` holds the words of the booking page the visitor makes: it is written in the tool page's language.

export interface QA { question: string; answer: string }
export interface Step { title: string; text: string }
export interface SampleService { n: string; d: number; p: string }

export interface BookingCopy {
  page: { title: string; desc: string; h1: string; lead: string; ogTitle: string; crumbs: string };
  hub: { name: string; blurb: string; cta: string };
  ed: {
    business: string; name: string; namePh: string; tagline: string; taglinePh: string;
    services: string; svcName: string; svcNamePh: string; duration: string; price: string; pricePh: string;
    addService: string; remove: string; maxServices: string; noServices: string;
    hours: string; open: string; closed: string; from: string; to: string; sameAs: string; badHours: string;
    contact: string; phone: string; email: string; address: string; addressPh: string; contactNote: string;
    look: string; themes: { clean: string; warm: string; night: string; bold: string };
    /** "{n} min"; "{h} h"; "{h} h {m} min". */
    min: string; hr: string; hrMin: string;
  };
  pv: { label: string; phone: string; desktop: string; share: string; copied: string; shareNote: string; expired: string; shared: string; start: string };
  live: { title: string; sub: string; btn: string; free: string; privacy: string };
  bp: {
    services: string; chooseService: string; chooseTime: string; details: string; yourName: string; yourContact: string; note: string;
    book: string; bookFor: string; done: string; doneSub: string; noTimes: string; noServices: string; hours: string; contact: string;
    closed: string; preview: string; again: string; times: string; call: string; mail: string;
  };
  how: { title: string; items: Step[] };
  after: { title: string; sub: string; items: Step[] };
  faq: { title: string; items: QA[] };
  /** The sign-up idea, in the visitor's language. {name} {services} {hours} {contact} {look}. */
  idea: { intro: string; services: string; hours: string; contact: string; look: string; ask: string; closedDays: string };
  sample: { name: string; tagline: string; services: SampleService[] };
}
