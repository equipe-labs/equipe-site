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
    shotAlt: 'Aperçu de l’appli de bureau equipe\u202F: un agent demande l’autorisation d’exécuter une commande, avec les boutons «\u202FAutoriser une fois\u202F», «\u202FToujours\u202F» et «\u202FRefuser\u202F»',
    shotCaption: 'Aperçu de l’appli de bureau — un agent s’interrompt\u202F: «\u202FJ’ai besoin d’une autorisation\u202F», et vous approuvez d’un clic. (Appli bientôt disponible)',
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
    intro: 'Le squad reste visible hors du terminal. Quand un agent attend votre accord, votre téléphone vous prévient et vous approuvez avec Face ID. Ce que vous envoyez est chiffré de bout en bout.',
    soon: 'Bientôt disponible',
    download: "Télécharger pour macOS",
    req: "macOS 12 ou plus récent · Apple Silicon et Intel",
    cliNote: "Nécessite la CLI equipe ; si elle manque, l’appli vous guide pour l’installer.",
    caption: "Les écrans sont des maquettes · applis mobiles bientôt disponibles",
    items: [
      { title: 'Application de bureau', platform: 'macOS', text: 'Squad, tableau et discussion avec le PM dans une seule fenêtre.', alt: 'Maquette de l’appli de bureau\u202F: un agent demande l’autorisation d’exécuter une commande, avec les boutons «\u202FAutoriser une fois\u202F», «\u202FToujours\u202F» et «\u202FRefuser\u202F».' },
      { title: 'Application mobile', platform: 'iOS · Android', text: 'Ne vous prévient que lorsque votre accord est nécessaire.', alt: 'Maquette de l’appli mobile\u202F: deux demandes d’approbation en attente.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'Exécuter la commande\u202F?', allow: 'Autoriser une fois', decline: 'Refuser', askMerge: 'Fusionner la branche\u202F?', approve: 'Approuver', changes: 'Demander des changements' },
    notify: { title: 'Envie d’être prévenu à la sortie des applis\u202F?', text: 'Abonnez-vous aux releases sur GitHub\u202F: vous ne recevrez un e-mail que pour les nouvelles versions. Pas d’inscription chez nous, aucune adresse e-mail collectée.', cta: 'Être prévenu sur GitHub', how: 'Sur le dépôt equipe-labs/equipe\u202F: Watch → Custom → Releases.' },
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
          'equipe est encore en phase initiale. Le démon du squad tourne en arrière-plan, le PM valide le travail, les agents travaillent sur des branches dans des sandboxes, et vous approuvez avant la fusion. Les passations et les canaux de communication sont les prochaines étapes, comme l’indique la feuille de route.',
      },
      {
        question: 'Qu’est-ce qu’un git worktree, et pourquoi equipe l’utilise-t-il\u202F?',
        answer:
          'Un git worktree est un autre dossier de travail du même dépôt, avec sa propre branche. equipe en donne un à chaque membre, pour que plusieurs membres travaillent en même temps sans se gêner entre eux ni toucher à votre copie de travail.',
      },
    ],
  },
  notFound: { title: 'Page introuvable — equipe', description: 'Cette page n’existe pas.', heading: 'Page introuvable', text: 'Il n’y a rien à cette adresse. La page a peut-être été déplacée, ou le lien est erroné.', home: 'Aller à la page d’accueil' },
  footer: { license: 'Licence MIT', built: 'Construit en public par un squad equipe.' },
};

export default fr;
