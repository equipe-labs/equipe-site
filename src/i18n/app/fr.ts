import type { AppText } from './en';

const fr: AppText = {
  ui: {
    newMessage: 'Nouveau message', pm: 'PM', inbox: 'À traiter', inProgress: 'En cours', tickets: 'Tickets', overview: 'Aperçu', roadmap: 'Feuille de route',
    projects: 'Projets', usage: 'Utilisation', suggest: 'Suggérer', notRead: 'pas encore lu', team: 'Équipe', thisMac: 'Ce Mac',
    allProjects: 'Tous les projets', search: 'Rechercher · project:web is:blocked', filter: 'Filtrer', context: 'contexte 31 %',
    idle: 'Inactif', permission: 'Autorisation', yourTurn: 'À vous', working: 'En travail', done: 'Terminé', hours: 'h',
    composer: 'Un message pour pm…', composerBusy: 'Un message pour pm — hors projet ou pour un nouveau projet', auto: 'auto', effort: 'effort',
  },
  lanes: { yourTurn: 'À vous', review: 'Revue', done: 'Terminé', proposed: 'Proposé', todo: 'À faire', inProgress: 'En cours' },
  tickets: [
    'Couleurs et logo de la marque', 'Page d’accueil', 'Point d’entrée d’inscription par e-mail', 'Icône de l’app', 'Page des tarifs', 'Renvoyer les e-mails d’inscription échoués',
    'Connecter le compte d’analyse', 'Textes A/B de la page des tarifs', 'Widget de série quotidienne', 'API de rappel de série', 'Écrans d’accueil, 2e tour',
    'Tableau de bord du tunnel d’inscription', 'FAQ des tarifs', 'Exporter les check-ins en CSV', 'Retour haptique au check-in', 'Lien de parrainage sur la page de succès',
  ],
  activity: { t8: 'Modification de pricing.tsx', t9: 'Modification de StreakWidget.swift', t10: 'Exécution de cargo test reminders', t11: 'Lecture de brief.md', t12: 'Lecture de funnel.sql' },
  inbox: {
    toSort: '1 à trier', toSortHint: 'propositions de l’équipe — à prendre ou à écarter',
    permission: 'Autorisation', decisions: 'Décisions', yourTurn: 'À vous', proposed: 'Proposé', startAll: 'Tout lancer',
    allow: 'Autoriser l’exécution d’une commande', publish: 'Publier la page des tarifs ?', paid: 'Utiliser un outil payant pour le tunnel ?', connect: 'Connecter le compte d’analyse',
    postHog: 'Créer un projet PostHog pour Loop', fromPm: 'de pm',
  },
  decision: {
    title: 'Décisions', tag: 'Page des tarifs', question: 'Publier la page des tarifs ?',
    a: 'Publier maintenant (recommandé)', aText: 'Mise en ligne sur loop.app/pricing. Les visiteurs voient l’offre Pro à $6/mo. Impossible à annuler une fois partagée.',
    b: 'Attendre le choix des textes A/B', bText: 'La page actuelle reste en place ; T-8 se termine d’abord',
    own: 'Saisir une autre réponse', attach: 'Joindre', asks: 'Question de frontend · T-5', hint: '1–9 choisir · Tab réponse libre · ⌘↵ suivant', skip: 'Passer', submit: 'Envoyer',
    publishNow: 'Publier maintenant', hold: 'Attendre',
  },
  permission: {
    label: 'Autorisation', title: 'Autoriser l’exécution d’une commande ?', command: 'npm run build', why: 'Pour vérifier que la page des tarifs compile avant sa mise en ligne',
    once: 'Autoriser une fois', always: 'Toujours', deny: 'Refuser', reply: 'Répondre', note: '« Toujours » ajoute une règle pour npm run', card: 'Carte 1 sur 2',
  },
  chat: {
    read: 'Lecture de website/src/pricing.tsx', split: 'Voici comment je découperais le travail. Quatre tickets, un responsable chacun :',
    ticket: 'Ticket', owner: 'Responsable', what: 'Contenu',
    rows: ['Deux variantes de titre pour la carte Pro, à tester en A/B', 'Une FAQ des tarifs qui répond aux principales objections', 'Tableau de bord du tunnel, de la visite au premier check-in', 'Lien de parrainage sur la page de succès'],
    before: 'T-5', mid: ', la page des tarifs elle-même, est déjà en revue. ', bold: 'La publication dépend de vous', after: ', donc la question est posée. Retour dès que ', last: ' affiche des chiffres.',
  },
  hero: {
    ask: 'Obtenir plus d’inscriptions à Loop', reply: 'Voici comment je découperais le travail. Quatre tickets, un responsable chacun :', reply2: 'T-5 est déjà en revue. La publication dépend de vous, donc la question est posée.',
    working: 'En travail', publish: 'Publier maintenant', hold: 'Attendre', liveTitle: 'Live', liveText: 'loop.app/pricing · publié à l’instant', approved: '1 chose approuvée.',
    tickets: ['Titre de la page des tarifs, A/B', 'FAQ des tarifs', 'Tableau de bord du tunnel d’inscription', 'Lien de parrainage sur la page de succès'],
    caption: 'Dessiné d’après la vraie app, avec des données de démonstration. Les barres de progression et la bannière Live sont mises en scène pour cette boucle ; dans l’app, une ligne d’activité s’affiche à la place.',
    pause: 'Mettre la démo en pause', play: 'Lancer la démo', label: 'Une ligne au PM devient quatre tickets menés en parallèle, puis une carte de décision pour vous, puis la mise en ligne.',
  },
};
export default fr;
