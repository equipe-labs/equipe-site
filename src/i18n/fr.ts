import type { Messages } from './en';

// French typography: U+202F (narrow no-break space) before ; ? ! : and inside « », written as   below.
const fr: Messages = {
  meta: {
    title: 'equipe — un squad d’agents de codage IA, dirigé par vous',
    description:
      'equipe est un squad IA open source\u202F: des agents spécialisés par rôle travaillent depuis un tableau partagé, dans des git worktrees isolés. Rien n’est fusionné sans votre accord.',
    ogTitle: 'equipe — un squad d’agents de codage IA, dirigé par vous',
    ogDescription:
      'equipe est un squad IA open source\u202F: des agents spécialisés par rôle travaillent depuis un tableau partagé, dans des git worktrees isolés. Rien n’est fusionné sans votre accord.',
    ogImageAlt: 'equipe — un squad d’agents de codage IA, dirigé par une seule personne',
  },
  ui: {
    skip: 'Aller au contenu',
    primaryNav: 'Navigation principale',
    copy: 'Copier',
    copied: 'Copié',
    copyInstall: 'Copier les commandes d’installation',
    copyCommands: 'Copier les commandes',
    copyCommand: 'Copier la commande',
    language: 'Langue',
    bannerText: 'Voir cette page en français',
    bannerClose: 'Fermer',
  },
  nav: { howItWorks: 'Comment ça marche', getStarted: 'Commencer', faq: 'FAQ', github: 'GitHub' },
  hero: {
    title: 'Menez une équipe d’agents IA. Vous approuvez chaque fusion.',
    lead: 'Des agents PM, designer, développeur et mobile travaillent depuis un tableau partagé, chacun sur sa propre branche de votre dépôt. Rien n’est fusionné sans votre approbation.',
    ctaPrimary: 'Voir sur GitHub',
    chip: 'Phase initiale · Licence MIT · Codex et Claude Code',
    shotAlt: 'L’appli de bureau equipe : une barre latérale du travail en cours, une liste de tickets groupés par statut avec « Votre tour » et « À relire » en haut, et le ticket ouvert à côté',
    shotCaption: 'L’appli de bureau equipe pour macOS — vos tickets en liste ou en tableau, avec ce qui vous attend en haut.',
  },
  how: {
    title: 'Comment ça marche',
    intro: 'Une personne dirige. Le squad travaille en parallèle. Tout passe par le tableau.',
    steps: [
      { title: 'Confier', text: 'Dites au PM ce que vous voulez. Il en fait des tickets sur un tableau partagé, chacun attribué à un rôle.' },
      { title: 'Travail en parallèle', text: 'Les membres travaillent en même temps, chacun sur sa propre branche. Votre copie de travail reste intacte, et chaque action est consignée sur le tableau.' },
      { title: 'Votre approbation', text: 'Avant toute fusion, equipe vous demande votre accord. Rien n’est intégré sans votre feu vert.' },
    ],
  },
  features: {
    title: 'Ce que vous obtenez',
    intro: 'Le squad tourne dans un démon en arrière-plan : fermer le terminal ne l’arrête jamais. Tous les écrans montrent le même squad.',
    items: [
      { title: 'Des rôles sur un seul tableau', text: 'PM, designer, frontend, backend, mobile, QA et data, chacun avec un modèle adapté à son rôle et sa propre mémoire. Le tableau est la source unique de vérité.' },
      { title: 'Des branches isolées', text: 'Chaque membre travaille dans son propre git worktree, dans une sandbox. Tout ce qui en sort, comme un push ou un déploiement, attend votre réponse.' },
      { title: 'Les décisions viennent à vous', text: 'Les demandes d’autorisation et les questions des membres arrivent sous forme de cartes, à régler d’une touche ou d’un clic.' },
      { title: 'Plusieurs projets, un squad', text: 'La discussion suit le projet choisi, et le travail d’un ticket reste avec son ticket.' },
      { title: 'Une appli de bureau pour macOS', text: 'Barre latérale du travail en cours, écran des tickets en liste et en tableau, ⌘K pour chercher tout le travail, panneau navigateur. Huit langues, mise à jour automatique.' },
      { title: 'Téléphone et autres Mac', text: 'Appairez un téléphone par QR code et recevez une notification quand on a besoin de vous. Connectez l’appli de bureau à un squad sur un autre Mac via SSH.' },
    ],
  },
  who: {
    title: 'À qui s’adresse equipe',
    intro: 'equipe s’adresse à celles et ceux qui veulent diriger une petite équipe logicielle d’agents IA plutôt que de piloter un agent à la fois par prompts. Vous fixez le cap et vous relisez le travail. Le squad le découpe en tickets et l’exécute sur des branches.',
    points: [
      { lead: 'Vous utilisez déjà Codex ou Claude Code.', text: 'equipe les pilote, et vous vous connectez comme vous le faites déjà.' },
      { lead: 'Vous voulez du travail en parallèle, facile à relire.', text: 'Chaque changement arrive sous forme de branche, jamais comme une surprise sur votre branche principale.' },
      { lead: 'Vous voulez garder les décisions.', text: 'Les étapes d’approbation sont placées là où cela compte, et la décision reste la vôtre.' },
    ],
    proof: 'Ce site a été construit en public par un squad equipe. Chaque changement a commencé comme un ticket et est arrivé sous forme de branche validée par une personne.',
  },
  apps: {
    title: 'Suivez sur votre Mac, approuvez sur votre téléphone.',
    intro: 'Le squad reste visible hors du terminal. L’appli de bureau est disponible dès maintenant. Quand un agent attend votre accord, l’appli mobile vous prévient et vous approuvez avec Face ID. Ce que vous envoyez est chiffré de bout en bout.',
    soon: 'En préparation',
    download: "Télécharger pour macOS",
    req: "macOS 12 ou plus récent · Apple Silicon et Intel · signée et notarisée",
    cliNote: "Nécessite la CLI equipe ; si elle manque, l’appli vous guide pour l’installer.",
    caption: "L’écran du téléphone est une maquette · l’appli mobile est encore en préparation",
    items: [
      { title: 'Application de bureau', platform: 'macOS', text: 'Le squad, ses tickets et la discussion avec le PM dans une seule fenêtre.', alt: 'L’appli de bureau equipe : dans la conversation avec le PM, une demande d’autorisation et une question d’un membre attendent une réponse.' },
      { title: 'Application mobile', platform: 'iOS · Android', text: 'Appairage par QR code. Ne vous prévient que lorsque votre accord est nécessaire.', alt: 'Maquette de l’appli mobile : deux demandes d’approbation en attente.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'Exécuter la commande\u202F?', allow: 'Autoriser une fois', decline: 'Refuser', askMerge: 'Fusionner la branche\u202F?', approve: 'Approuver', changes: 'Demander des changements' },
    notify: { title: 'Envie d’être prévenu à la sortie de l’appli mobile\u202F?', text: 'Abonnez-vous aux releases sur GitHub\u202F: vous ne recevrez un e-mail que pour les nouvelles versions. Pas d’inscription chez nous, aucune adresse e-mail collectée.', cta: 'Être prévenu sur GitHub', how: 'Sur le dépôt equipe-labs/equipe\u202F: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Commencer',
    install: 'Sur macOS et Linux, une seule ligne suffit. Elle place un `equipe` précompilé dans `~/.local/bin` (vérifié par SHA-256) et l’ajoute à votre PATH\u202F:',
    brew: 'Installe un `equipe` précompilé via le tap Homebrew. Pour mettre à jour ensuite\u202F: `brew upgrade equipe`.',
    tabsLabel: 'Méthode d’installation',
    sourceTitle: 'Compiler depuis les sources (avancé)',
    source: 'Vous préférez compiler vous-même\u202F? Installez depuis les sources avec Rust 1.88+ et git\u202F: clonez `github.com/equipe-labs/equipe`, puis lancez `cargo install --locked --path crates/cli`. Le moteur Claude requiert aussi le binaire `claude`.',
    run: 'Connectez-vous à un moteur, vérifiez qu’il est prêt, puis ouvrez la console du squad :',
    runCode: `equipe login     # se connecter à Codex ou à Claude Code
equipe status    # vérifier l'état du moteur et les modèles disponibles
equipe           # ouvrir la console du squad`,
    tryIntro: 'Envie d’un premier aperçu sans le tableau ? Laissez un agent modifier votre dépôt sur une nouvelle branche, dans un worktree isolé :',
    docs: 'Lire la documentation sur GitHub →',
    roadmap: 'Feuille de route',
    architecture: 'Architecture',
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Qu’est-ce qu’equipe ?',
        answer:
          'equipe est un squad logiciel IA open source. Il coordonne des agents aux rôles tels que PM, Designer, Frontend, Backend, Mobile, QA et Data autour d’un tableau partagé. Ils travaillent dans des git worktrees isolés, et une personne approuve les changements avant leur fusion.',
      },
      {
        question: 'equipe est-il un agent de codage IA de plus ?',
        answer:
          'Non. equipe est la couche d’équipe au-dessus des moteurs d’agents existants, pas une nouvelle boucle d’agent. Il ajoute des rôles, un tableau comme source unique de vérité, des git worktrees isolés pour le travail en parallèle et des étapes d’approbation humaine.',
      },
      {
        question: 'Avec quels moteurs d’IA equipe fonctionne-t-il ?',
        answer:
          'Aujourd’hui, equipe pilote Codex et Claude Code. Il est conçu pour prendre en charge d’autres moteurs via l’Agent Client Protocol.',
      },
      {
        question: 'equipe gère-t-il mes identifiants ?',
        answer:
          'Pour Claude Code, non. Vous exécutez le binaire `claude` non modifié et vous vous connectez vous-même, donc la facturation passe par votre propre compte. Pour Codex, equipe se connecte via OAuth avec votre abonnement ChatGPT et s’identifie honnêtement comme `originator: equipe`.',
      },
      {
        question: 'Comment installer equipe ?',
        answer:
          'Sur macOS et Linux, lancez `brew install equipe-labs/tap/equipe`. Vous pouvez aussi utiliser la ligne install.sh ou compiler depuis les sources (Rust 1.88+)\u202F; toutes les méthodes sont décrites dans «\u202FCommencer\u202F».',
      },
      {
        question: 'Qui approuve le travail ?',
        answer:
          'Vous. Chaque membre travaille sur sa propre branche dans un worktree isolé, et equipe demande une approbation humaine avant la fusion d’une branche. Le PM valide le travail sur le tableau ; la personne qui dirige le squad décide de ce qui est intégré.',
      },
      {
        question: 'equipe est-il gratuit et open source ?',
        answer:
          'Oui. equipe est publié sous licence MIT et est open source depuis son premier commit. equipe lui-même est gratuit. Claude Code et Codex fonctionnent avec vos propres abonnements ou comptes Anthropic et OpenAI (ChatGPT).',
      },
      {
        question: 'equipe est-il prêt pour la production ?',
        answer:
          'equipe est encore en phase initiale. Le démon du squad tourne en arrière-plan, le PM valide le travail, les agents travaillent sur des branches dans des sandboxes, et vous approuvez avant la fusion. Vous pouvez suivre le squad depuis l’appli de bureau, votre téléphone ou Telegram. Les passations entre membres sont les prochaines étapes, comme l’indique la feuille de route.',
      },
      {
        question: 'Qu’est-ce qu’un git worktree, et pourquoi equipe l’utilise-t-il\u202F?',
        answer:
          'Un git worktree est un autre dossier de travail du même dépôt, avec sa propre branche. equipe en donne un à chaque membre, pour que plusieurs membres travaillent en même temps sans se gêner entre eux ni toucher à votre copie de travail.',
      },
      {
        question: 'Existe-t-il une appli de bureau ?',
        answer:
          'Oui, pour macOS 12 ou plus récent, sur Apple Silicon et Intel. Téléchargez equipe.dmg, signé et notarisé, depuis la dernière release GitHub ; l’appli vérifie elle-même les mises à jour. C’est une fenêtre sur le même démon que le terminal : votre squad, les tickets, les décisions, et un panneau pour le navigateur qu’utilisent les membres. Elle nécessite la CLI `equipe` et propose de vous aider à l’installer. L’appli existe en huit langues.',
      },
      {
        question: 'Puis-je suivre le squad depuis mon téléphone ?',
        answer:
          'Oui. Lancez `equipe pair` et scannez le QR code dans l’appli mobile equipe, encore en préparation. Vous recevez une notification quand on a besoin de vous, et vous pouvez répondre, relire le travail et parler au PM. Les messages sont scellés de bout en bout. Telegram fonctionne aussi, avec `equipe telegram setup`.',
      },
    ],
  },
  notFound: { title: 'Page introuvable — equipe', description: 'Cette page n’existe pas.', heading: 'Page introuvable', text: 'Il n’y a rien à cette adresse. La page a peut-être été déplacée, ou le lien est erroné.', home: 'Aller à la page d’accueil' },
  footer: { license: 'Licence MIT', built: 'Construit en public par un squad equipe.' },
  app: {
    nav: { privacy: 'Confidentialité de l’app', support: 'Assistance de l’app', home: 'Accueil equipe' },
    privacy: {
      meta: {
        title: 'Politique de confidentialité de l’app equipe',
        description: 'Ce que l’app mobile equipe et son relais traitent : les clés d’appairage restent sur votre téléphone, le relais ne fait que transmettre des messages scellés, et il n’y a ni analyse ni suivi.',
      },
      title: 'Politique de confidentialité de l’app equipe',
      updated: 'Dernière mise à jour : 2026-10-14',
      intro: 'L’app equipe permet à votre téléphone de parler au daemon equipe de votre propre Mac. Cette page explique simplement ce que l’app et le relais equipe traitent.',
      sections: [
        {
          title: 'En bref',
          text: 'L’app n’a ni compte, ni publicité, ni analyse, ni rapport de plantage, et elle ne vous suit pas. Le travail de votre escouade circule entre votre téléphone et votre Mac, scellé de bout en bout.',
          items: [],
        },
        {
          title: 'Ce qui reste sur votre téléphone',
          text: 'Ces éléments sont stockés uniquement sur votre appareil :',
          items: [
            '**Clés d’appairage.** La paire de clés du téléphone, le jeton de relais reçu lors de l’appairage, ainsi que la clé publique et le nom de votre Mac. Elles sont dans le Trousseau iOS ou, sous Android, dans un stockage protégé par l’Android Keystore. La clé privée ne quitte jamais le téléphone ; le jeton de relais est envoyé uniquement au relais, pour connecter le téléphone.',
            '**Appareil photo.** Utilisé uniquement pour scanner le QR code d’appairage. Les images ne sont ni enregistrées ni envoyées.',
            '**Face ID ou empreinte.** Votre téléphone la vérifie avant l’envoi d’une approbation. equipe ne reçoit jamais de données biométriques.',
          ],
        },
        {
          title: 'Ce que le relais equipe traite',
          text: 'Votre téléphone et votre Mac se connectent tous deux à un relais exploité par equipe-labs à l’adresse `relay.equipe.im`. Tout ce qui circule entre eux est scellé de bout en bout avec des clés que seuls ces deux appareils détiennent ; le relais ne peut donc lire ni vos tickets, ni vos messages, ni vos approbations.',
          items: [
            'Le relais voit qu’une connexion existe, la taille et l’horaire des messages, et les identifiants aléatoires de votre Mac et de votre téléphone. Ils ne sont pas liés à votre nom. Il ne conserve qu’un hash de chaque jeton, pas le jeton lui-même.',
            'Le relais tourne sur Cloudflare, qui, en tant que fournisseur réseau, traite l’adresse IP de chaque connexion.',
            'Nous n’utilisons pas ces informations pour vous identifier ou vous profiler, et nous ne les vendons ni ne les partageons.',
          ],
        },
        {
          title: 'Notifications push',
          text: 'Pour prévenir votre téléphone quand l’escouade a besoin de vous, le relais envoie une notification push.',
          items: [
            '**Jeton push.** Le relais conserve le jeton push de votre téléphone (APNs sur iOS, Firebase Cloud Messaging sur Android), lié à l’appairage et non à votre nom.',
            'Le texte visible indique seulement qui a besoin de quoi. Les détails voyagent scellés et sont ouverts sur votre téléphone.',
            'Apple et Google remettent la notification selon leurs propres politiques de confidentialité. Sous Android, Firebase Messaging crée aussi un identifiant d’installation pour votre téléphone.',
          ],
        },
        {
          title: 'Analyse et suivi',
          text: 'L’app ne contient aucun outil d’analyse, de publicité ou de rapport de plantage, et ne vous suit pas à travers d’autres apps ou sites. Cette politique couvre l’app et le relais. Le site equipe.im compte les visites avec PostHog, sans cookies ni stockage local, et ne crée pas de profils de personnes.',
          items: [],
        },
        {
          title: 'Conservation et suppression',
          text: 'Vous décidez de la durée d’un appairage :',
          items: [
            'Dans l’app, désappairez cet appareil. Cela supprime les clés du téléphone, ainsi que l’enregistrement d’appairage et le jeton push côté relais.',
            'Sur votre Mac, exécutez `equipe devices remove <name>` pour révoquer un téléphone immédiatement.',
            'Le relais ne conserve le jeton push et l’enregistrement d’appairage que tant que l’appairage existe.',
            'Sous Android, désinstaller l’app supprime ses données. Sous iOS, des éléments du Trousseau peuvent subsister après la désinstallation ; désappairez donc d’abord.',
          ],
        },
        {
          title: 'Enfants',
          text: 'L’app ne s’adresse pas aux enfants et nous ne collectons pas sciemment leurs informations personnelles.',
          items: [],
        },
        {
          title: 'Modifications',
          text: 'Si cette politique change, nous mettrons à jour la date ci-dessus et cette page.',
          items: [],
        },
        {
          title: 'Contact',
          text: 'Pour toute question ou demande de suppression de données, écrivez à l’adresse ci-dessous ou ouvrez une issue sur GitHub.',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'Assistance de l’app equipe — appairer votre téléphone',
        description: 'Comment appairer l’app equipe à votre Mac avec `equipe pair`, réponses aux questions fréquentes et comment nous joindre.',
      },
      title: 'Assistance de l’app equipe',
      intro: 'L’app equipe est une télécommande pour l’escouade sur votre Mac. Elle vous prévient quand l’escouade a besoin de vous et vous laisse autoriser ou refuser, relire le travail et parler au PM. Elle nécessite qu’equipe tourne sur votre Mac : installez donc equipe d’abord.',
      pairTitle: 'Appairer votre téléphone',
      pairSteps: [
        'Vérifiez qu’equipe est installé sur votre Mac (voir « Démarrer » sur la page d’accueil).',
        'Dans un terminal sur votre Mac, exécutez la commande ci-dessous. Un QR code apparaît, valable 5 minutes.',
        'Ouvrez l’app equipe sur votre téléphone, lancez l’appairage et autorisez l’appareil photo.',
        'Dirigez l’appareil photo vers le QR code.',
        'Votre Mac demande « Pair <votre téléphone> ? y/n ». Répondez `y`. C’est appairé.',
      ],
      pairCode: 'equipe pair',
      removeTitle: 'Voir ou retirer les téléphones appairés',
      removeText: '`equipe devices` les liste et `equipe devices remove <name>` en révoque un immédiatement. Téléphone perdu : une seule commande.',
      faqTitle: 'Questions fréquentes',
      faq: [
        { question: 'Ai-je besoin d’equipe sur un ordinateur ?', answer: 'Oui. L’app est une télécommande du daemon equipe de votre Mac ; sans lui, il n’y a rien à quoi se connecter. Installez equipe d’abord.' },
        { question: 'Le QR code ne se scanne pas ou a expiré.', answer: 'Le code est valable 5 minutes. Relancez `equipe pair` pour en obtenir un nouveau, et affichez le QR en grand et bien lumineux à l’écran.' },
        { question: 'Je ne reçois pas de notifications.', answer: 'Vérifiez que les notifications d’equipe sont autorisées dans les réglages du téléphone et que le daemon tourne sur votre Mac (`equipe status`).' },
        { question: 'J’ai perdu ou changé de téléphone.', answer: 'Exécutez `equipe devices remove <name>` sur votre Mac, puis appairez le nouveau téléphone avec `equipe pair`.' },
        { question: 'equipe peut-il lire mon travail via l’app ?', answer: 'Non. Les messages entre votre téléphone et votre Mac sont scellés de bout en bout ; le relais ne fait que les transmettre. Voir la politique de confidentialité pour le détail.' },
        { question: 'Cela fonctionne-t-il hors de mon réseau domestique ?', answer: 'Oui. Le téléphone et le Mac se connectent tous deux au relais vers l’extérieur ; Wi-Fi, données mobiles et réseaux derrière un routeur fonctionnent.' },
        { question: 'Quels téléphones sont pris en charge ?', answer: 'iPhone sous iOS 17 ou plus récent, et Android 8.0 ou plus récent.' },
      ],
      contactTitle: 'Contact',
      contactText: 'Toujours bloqué ? Écrivez à l’adresse ci-dessous ou ouvrez une issue sur GitHub.',
    },
  },
};

export default fr;
