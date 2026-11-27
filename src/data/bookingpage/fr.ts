import type { BookingCopy } from './types';

export const fr: BookingCopy = {
  page: {
    title: 'Page de réservation gratuite : créée en 60 secondes | equipe',
    desc: 'Créez gratuitement la page de réservation en ligne de votre commerce en une minute : ajoutez vos prestations, prix et horaires, choisissez un style et voyez-la en direct pendant la saisie. Sans inscription pour essayer.',
    h1: 'Créez votre page de réservation en 60 secondes',
    lead: 'Saisissez le nom de votre commerce, vos prestations et vos horaires. Votre page de réservation se construit au fil de la saisie, et quand elle vous plaît, vous pouvez la partager ou la mettre en ligne.',
    ogTitle: 'Page de réservation gratuite',
    crumbs: 'Outils gratuits',
  },
  hub: { name: 'Créateur de page de réservation', blurb: 'Vos prestations, prix et horaires en entrée, une page de réservation prête pour vos clients en sortie. Gratuit, sans inscription.', cta: 'Créer ma page de réservation' },
  ed: {
    business: 'Votre commerce', name: 'Nom du commerce', namePh: 'ex. Salon Tilleul', tagline: 'Une phrase pour le présenter', taglinePh: 'ex. Coupe et couleur à cinq minutes de la gare',
    services: 'Prestations', svcName: 'Prestation', svcNamePh: 'ex. Coupe', duration: 'Durée', price: 'Prix', pricePh: 'ex. 35 €',
    addService: 'Ajouter une prestation', remove: 'Retirer', maxServices: 'Jusqu’à 8 prestations ici. Votre équipe pourra en ajouter plus tard.', noServices: 'Ajoutez au moins une prestation pour qu’on puisse réserver quelque chose.',
    hours: 'Horaires d’ouverture', open: 'Ouvert', closed: 'Fermé', from: 'Ouvre', to: 'Ferme', sameAs: 'Copier le lundi sur tous les jours ouverts', badHours: 'L’heure de fermeture doit être après l’heure d’ouverture.',
    contact: 'Contact', phone: 'Téléphone', email: 'E-mail', address: 'Adresse', addressPh: 'Rue, ville', contactNote: 'Facultatif. Affiché sur votre page pour que vos clients puissent vous joindre.',
    look: 'Style', themes: { clean: 'Épuré', warm: 'Chaleureux', night: 'Nuit', bold: 'Contrasté' },
    min: '{n} min', hr: '{h} h', hrMin: '{h} h {m} min',
  },
  pv: {
    label: 'Aperçu en direct', phone: 'Téléphone', desktop: 'Ordinateur', share: 'Copier le lien de partage', copied: 'Lien copié',
    shareNote: 'Le lien contient la page elle-même : rien n’est enregistré sur nos serveurs. Il ne s’ouvre plus au bout de 7 jours.',
    expired: 'Ce lien d’aperçu date de plus de 7 jours et ne s’ouvre plus. Voici un nouvel exemple pour repartir.',
    shared: 'Quelqu’un vous a partagé cet aperçu de page de réservation. Modifiez ce que vous voulez.', start: 'Recommencer',
  },
  live: {
    title: 'Elle vous plaît ? Mettez-la en ligne',
    sub: 'Inscrivez-vous et vos informations suivent. Votre équipe IA publie cette page comme première version, fait en sorte que les réservations soient enregistrées, vous envoie un e-mail à chaque nouvelle et active le paiement en ligne dès que vous connectez votre compte.',
    btn: 'Mettre en ligne',
    free: 'Gratuit pour commencer · Sans carte · Sans coder',
    privacy: 'Tant que vous n’appuyez pas sur le bouton, ce que vous saisissez reste dans ce navigateur.',
  },
  bp: {
    services: 'Prestations', chooseService: 'Choisissez une prestation', chooseTime: 'Choisissez le jour et l’heure', details: 'Vos coordonnées', yourName: 'Votre nom', yourContact: 'Téléphone ou e-mail', note: 'Quelque chose à nous dire ? (facultatif)',
    book: 'Réserver', bookFor: 'Réserver {service} · {when}', done: 'Votre réservation est confirmée', doneSub: 'Ceci est un aperçu. Une fois la page en ligne, chaque réservation est enregistrée et le commerce reçoit un e-mail.',
    noTimes: 'Aucun créneau libre dans les deux prochaines semaines.', noServices: 'Les prestations s’afficheront ici.', hours: 'Horaires d’ouverture', contact: 'Contact',
    closed: 'Fermé', preview: 'Aperçu de votre page de réservation', again: 'Réserver un autre créneau', times: 'Créneaux', call: 'Appeler', mail: 'E-mail',
  },
  how: {
    title: 'Comment ça marche',
    items: [
      { title: 'Remplissez quatre choses', text: 'Votre nom, vos prestations avec leur durée et leur prix, vos horaires d’ouverture et comment vous joindre.' },
      { title: 'Regardez la page se construire', text: 'L’aperçu change à chaque touche : prestations à choisir, une bande de jours, des créneaux libres selon vos horaires, un court formulaire. Passez d’un style à l’autre parmi quatre.' },
      { title: 'Partagez-la ou mettez-la en ligne', text: 'Copiez un lien pour la montrer, ou appuyez sur Mettre en ligne. Inscrivez-vous gratuitement et votre équipe publie la page avec vos informations déjà saisies.' },
    ],
  },
  after: {
    title: 'Ce qui se passe une fois en ligne',
    sub: 'Le parcours qu’un commerce de proximité obtient d’habitude, réalisé par votre équipe IA. Vous validez tout ce qui coûte de l’argent ou touche vos clients.',
    items: [
      { title: 'Votre page est en ligne', text: 'Publiée à sa propre adresse dès le premier jour, avec une politique de confidentialité et des conditions qui couvrent les réservations.' },
      { title: 'Les réservations sont enregistrées', text: 'Chaque réservation arrive dans votre liste et vous recevez un e-mail pour chaque nouvelle. Plus de tableur à tenir.' },
      { title: 'Les paiements quand vous voulez', text: 'Connectez votre compte de paiement et la même page encaisse un acompte ou le montant complet. En attendant, on peut toujours réserver.' },
      { title: 'Elle s’améliore sans cesse', text: 'Votre équipe regarde quelles prestations sont réservées et propose la prochaine amélioration dans un rapport hebdomadaire.' },
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      { question: 'Le créateur de page de réservation est-il gratuit ?', answer: 'Oui. Créer, prévisualiser et partager la page est gratuit et sans inscription. La mise en ligne commence aussi gratuitement : les nouvelles équipes reçoivent 500 crédits, sans carte.' },
      { question: 'Faut-il savoir coder ?', answer: 'Non. Vous remplissez quelques champs et la page est construite à partir d’eux. Après l’inscription, votre équipe IA s’occupe de la technique.' },
      { question: 'L’aperçu prend-il de vraies réservations ?', answer: 'Pas encore. L’aperçu montre exactement comment se passera la réservation, mais rien n’est envoyé. Les réservations sont enregistrées et vous sont envoyées par e-mail une fois la page en ligne.' },
      { question: 'Que deviennent mes saisies ?', answer: 'Elles restent dans votre navigateur. Le lien de partage contient la page dans le lien lui-même : rien n’est enregistré sur nos serveurs, et il ne s’ouvre plus au bout de 7 jours. Vos informations ne sont envoyées que lorsque vous appuyez sur Mettre en ligne.' },
      { question: 'Peut-on payer en réservant ?', answer: 'Oui, une fois la page en ligne et votre compte de paiement connecté. En attendant, les réservations arrivent quand même et le paiement peut suivre plus tard.' },
      { question: 'Puis-je modifier la page plus tard ?', answer: 'Oui. Demandez-le simplement à votre équipe : ajouter une prestation, changer vos horaires, ajouter des photos ou une autre langue.' },
    ],
  },
  idea: {
    intro: 'Une page de réservation pour mon commerce, {name}.',
    services: 'Prestations : {services}.',
    hours: 'Horaires d’ouverture : {hours}.',
    contact: 'Coordonnées à afficher sur la page : {contact}.',
    look: 'Style : {look}.',
    ask: 'J’ai fait un aperçu avec le créateur de page de réservation d’equipe.im. Publie-le comme première version tel que configuré ci-dessus, puis enregistre chaque réservation, envoie-moi un e-mail pour chaque nouvelle et ajoute le paiement en ligne quand je connecterai mon compte.',
    closedDays: 'fermé {days}',
  },
  sample: {
    name: 'Salon Tilleul',
    tagline: 'Coupe et couleur à cinq minutes de la gare',
    services: [{ n: 'Coupe', d: 45, p: '35 €' }, { n: 'Coupe et couleur', d: 120, p: '95 €' }, { n: 'Taille de barbe', d: 20, p: '15 €' }],
  },
};
