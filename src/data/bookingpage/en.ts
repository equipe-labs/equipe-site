import type { BookingCopy } from './types';

export const en: BookingCopy = {
  page: {
    title: 'Free booking page maker: make one in 60 seconds | equipe',
    desc: 'Make a free online booking page for your business in a minute: add your services, prices and opening hours, pick a look and see it live as you type. No sign-up to try.',
    h1: 'Make a booking page in 60 seconds',
    lead: 'Type your business name, services and opening hours. Your booking page builds itself as you type, and you can share it or put it online when it looks right.',
    ogTitle: 'Free booking page maker',
    crumbs: 'Free tools',
  },
  hub: { name: 'Booking page maker', blurb: 'Services, prices and opening hours in, a booking page your customers can use out. Free to try, no sign-up.', cta: 'Make my booking page' },
  ed: {
    business: 'Your business', name: 'Business name', namePh: 'e.g. Linden Hair Studio', tagline: 'One line about it', taglinePh: 'e.g. Haircuts and colour in the old town',
    services: 'Services', svcName: 'Service', svcNamePh: 'e.g. Haircut', duration: 'Length', price: 'Price', pricePh: 'e.g. $40',
    addService: 'Add a service', remove: 'Remove', maxServices: 'Up to 8 services here. Your team can add more later.', noServices: 'Add at least one service so people have something to book.',
    hours: 'Opening hours', open: 'Open', closed: 'Closed', from: 'Opens', to: 'Closes', sameAs: 'Copy Monday to every open day', badHours: 'Closing time must be after opening time.',
    contact: 'Contact', phone: 'Phone', email: 'Email', address: 'Address', addressPh: 'Street, city', contactNote: 'Optional. Shown on your page so customers can reach you.',
    look: 'Look', themes: { clean: 'Clean', warm: 'Warm', night: 'Night', bold: 'Bold' },
    min: '{n} min', hr: '{h} h', hrMin: '{h} h {m} min',
  },
  pv: {
    label: 'Live preview', phone: 'Phone', desktop: 'Computer', share: 'Copy share link', copied: 'Link copied',
    shareNote: 'The link holds your page itself, so nothing is saved on our servers. It stops opening after 7 days.',
    expired: 'That preview link is more than 7 days old, so it no longer opens. Here is a fresh sample to start from.',
    shared: 'Someone shared this booking page preview with you. Change anything you like.', start: 'Start over',
  },
  live: {
    title: 'Happy with it? Make it live',
    sub: 'Sign up and your details come along. Your AI team publishes this page as the first version, then makes bookings save, emails you each new one and turns on online payment once you connect it.',
    btn: 'Make it live',
    free: 'Free to start · No card needed · No coding',
    privacy: 'Until you press the button, what you type stays in this browser.',
  },
  bp: {
    services: 'Services', chooseService: 'Choose a service', chooseTime: 'Pick a day and time', details: 'Your details', yourName: 'Your name', yourContact: 'Phone or email', note: 'Anything we should know? (optional)',
    book: 'Book now', bookFor: 'Book {service} · {when}', done: 'You are booked in', doneSub: 'This is a preview. Once the page is live, each booking is saved and the business gets an email.',
    noTimes: 'No free times in the next two weeks.', noServices: 'Services will show here.', hours: 'Opening hours', contact: 'Contact',
    closed: 'Closed', preview: 'Preview of your booking page', again: 'Book another time', times: 'Times', call: 'Call', mail: 'Email',
  },
  how: {
    title: 'How it works',
    items: [
      { title: 'Fill in four things', text: 'Your name, the services you offer with how long they take and what they cost, your opening hours and how to reach you.' },
      { title: 'Watch the page build itself', text: 'The preview updates with every key you press: services to pick, a day strip, free times from your hours, a short form. Switch between four looks.' },
      { title: 'Share it or make it live', text: 'Copy a link to show someone, or press Make it live. Sign up free and your team puts the page online with your details already in.' },
    ],
  },
  after: {
    title: 'What happens after you make it live',
    sub: 'The flow a local business usually gets, done by your AI team. You approve anything that costs money or reaches customers.',
    items: [
      { title: 'Your page goes online', text: 'Published at its own address on the first day, with a privacy policy and terms that mention bookings.' },
      { title: 'Bookings are saved', text: 'Every booking lands in your list, and you get an email for each new one. No spreadsheet to keep.' },
      { title: 'Payments when you are ready', text: 'Connect your payment account and the same page takes deposits or full payment. Until then people still book.' },
      { title: 'It keeps getting better', text: 'Your team watches which services people book and suggests the next change in a weekly report.' },
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      { question: 'Is the booking page maker free?', answer: 'Yes. Making, previewing and sharing the page is free with no sign-up. Putting it online starts free too: new teams get 500 credits and no card is needed.' },
      { question: 'Do I need to know how to code?', answer: 'No. You fill in a few fields and the page is built from them. After sign-up your AI team does the technical work.' },
      { question: 'Does the preview take real bookings?', answer: 'Not yet. The preview shows exactly how booking will feel, but nothing is sent. Bookings are saved and emailed to you once the page is live.' },
      { question: 'What happens to what I type?', answer: 'It stays in your browser. The share link carries the page inside the link itself, so nothing is stored on our servers, and the link stops opening after 7 days. Your details are sent only when you press Make it live.' },
      { question: 'Can people pay when they book?', answer: 'Yes, once the page is live and you connect a payment account. Until then, bookings still come in and payment can follow later.' },
      { question: 'Can I change the page later?', answer: 'Yes. Ask your team in plain words: add a service, change your hours, add photos or a new language.' },
    ],
  },
  idea: {
    intro: 'A booking page for my business, {name}.',
    services: 'Services: {services}.',
    hours: 'Opening hours: {hours}.',
    contact: 'Contact details for the page: {contact}.',
    look: 'Look: {look}.',
    ask: 'I made a preview with the equipe.im booking page maker. Publish it as the first version as set up above, then save every booking, email me each new one, and add online payment once I connect it.',
    closedDays: 'closed {days}',
  },
  sample: {
    name: 'Linden Hair Studio',
    tagline: 'Haircuts and colour, five minutes from the station',
    services: [{ n: 'Haircut', d: 45, p: '$40' }, { n: 'Cut and colour', d: 120, p: '$120' }, { n: 'Beard trim', d: 20, p: '$18' }],
  },
};
