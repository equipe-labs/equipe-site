import type { Messages } from './en';

// French typography: U+202F (narrow no-break space) before ; ? ! : and inside « », written as   below.
const fr: Messages = {
  meta: {
    title: 'equipe — un squad d’agents de codage IA, dirigé par vous',
    description:
      'equipe est un squad logiciel IA open source\u202F: des agents par rôle, un tableau partagé et des git worktrees isolés. Rien n’est fusionné sans vous.',
    ogTitle: 'equipe — un squad d’agents de codage IA, dirigé par vous',
    ogDescription:
      'equipe est un squad logiciel IA open source\u202F: des agents par rôle, un tableau partagé et des git worktrees isolés. Rien n’est fusionné sans vous.',
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
    bannerText: 'Voir cette page en {language}',
    bannerClose: 'Fermer',
  },
  nav: { howItWorks: 'Comment ça marche', getStarted: 'Commencer', faq: 'FAQ', github: 'GitHub' },
  hero: {
    title: 'Menez une équipe d’agents IA. Vous approuvez chaque merge.',
    lead: 'Des agents PM, designer et développeur travaillent depuis un tableau partagé, chacun sur sa propre branche de votre dépôt. Rien n’est fusionné sans votre approbation.',
    ctaPrimary: 'Voir sur GitHub',
    chip: 'Phase initiale · Licence MIT · Compatible Codex et Claude Code',
    shotAlt: 'Maquette de l’app de bureau equipe : un agent demande l’autorisation d’exécuter une commande, avec les boutons Autoriser une fois, Toujours et Refuser',
    shotCaption: 'Maquette de l’app · bientôt disponible — un agent s’arrête avec « j’ai besoin d’une autorisation » et vous approuvez d’un clic.',
  },
  how: {
    title: 'Comment ça marche',
    intro: 'Une personne dirige. Le squad travaille en parallèle. Tout passe par le tableau.',
    cards: [
      { title: 'Rôles', text: 'Chaque membre a un rôle (PM, Designer, Frontend, Backend, QA ou Données), avec un modèle adapté à ce rôle et sa propre mémoire.' },
      { title: 'Tickets', text: 'Le tableau est la source unique de vérité. Les membres se coordonnent par tickets et par événements immuables, pas par chat, si bien que chaque action laisse une trace que vous pouvez voir.' },
      { title: 'Branches', text: 'Chaque membre travaille dans son propre git worktree isolé, sur sa propre branche. Plusieurs peuvent donc travailler en même temps sur votre dépôt sans toucher à votre copie de travail.' },
      { title: 'Votre approbation', text: 'Vous gardez la main aux étapes d’approbation. Rien n’est fusionné tant que vous ne l’avez pas dit.' },
    ],
  },
  who: {
    title: 'À qui s’adresse equipe',
    intro: 'equipe s’adresse à celles et ceux qui veulent diriger une petite équipe logicielle d’agents IA plutôt que de piloter un agent à la fois par prompts. Vous fixez le cap et vous relisez le travail. Le squad le découpe en tickets et l’exécute sur des branches.',
    points: [
      { lead: 'Vous utilisez déjà Codex ou Claude Code.', text: 'equipe les pilote, et vous vous connectez comme vous le faites déjà.' },
      { lead: 'Vous voulez un travail en parallèle que vous pouvez relire.', text: 'Chaque changement arrive sous forme de branche, jamais comme une surprise sur votre branche principale.' },
      { lead: 'Vous voulez garder les décisions.', text: 'Les étapes d’approbation sont placées là où cela compte, et la décision reste la vôtre.' },
    ],
    proof: 'Ce site a été construit en public par un squad equipe. Chaque changement a commencé comme un ticket et est arrivé sous forme de branche acceptée par une personne.',
  },
  apps: {
    title: 'Applications de bureau et mobile',
    intro: 'Le squad arrive sur votre Mac et votre téléphone, pour suivre le travail et décider où que vous soyez.',
    soon: 'Bientôt disponible',
    items: [
      { title: 'Application de bureau', platform: 'macOS', points: ['Voir votre squad et ses membres', 'Discuter avec le PM', 'Suivre les tickets sur le tableau', 'Coller des captures d’écran dans la conversation'] },
      { title: 'Application mobile', platform: 'iOS · Android', points: ['Approuver depuis le téléphone avec Face ID ou votre empreinte', 'Suivre les tickets sur le tableau', 'Discuter avec le PM', 'Associer l’appli à votre Mac en scannant un QR code ; ce que vous envoyez est chiffré de bout en bout'] },
    ],
  },
  start: {
    title: 'Commencer',
    install: 'Sur macOS et Linux, une seule ligne suffit. Elle place un `equipe` précompilé dans `~/.local/bin` (vérifié par SHA-256) et l’ajoute à votre PATH :',
    brew: 'Ou avec Homebrew :',
    source: 'Vous préférez compiler vous-même ? Installez depuis les sources avec Rust 1.88+ et git : clonez `github.com/equipe-labs/equipe`, puis lancez `cargo install --locked --path crates/cli`. Le moteur Claude requiert aussi le binaire `claude`.',
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
          'equipe est un squad logiciel IA open source. Il coordonne des agents ayant des rôles comme PM, Designer, Frontend, Backend, QA et Données autour d’un tableau partagé. Ils travaillent dans des git worktrees isolés, et une personne approuve avant la fusion des changements.',
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
          'Pour Claude Code, non. Vous exécutez le binaire `claude` non modifié et vous vous connectez vous-même, donc la facturation va sur votre propre compte. Pour Codex, equipe se connecte avec OAuth grâce à votre offre ChatGPT et s’identifie honnêtement comme `originator: equipe`.',
      },
      {
        question: 'Comment installer equipe ?',
        answer:
          'Sur macOS et Linux, lancez `curl -fsSL https://github.com/equipe-labs/equipe/releases/latest/download/install.sh | sh` : cela place un `equipe` précompilé dans `~/.local/bin` (vérifié par SHA-256) et l’ajoute à votre PATH. Ou avec Homebrew : `brew install equipe-labs/tap/equipe`. Pour compiler depuis les sources, il vous faut Rust 1.88+ et git : clonez `github.com/equipe-labs/equipe`, puis lancez `cargo install --locked --path crates/cli`. Le moteur Claude requiert aussi le binaire Claude Code.',
      },
      {
        question: 'Qui approuve le travail ?',
        answer:
          'Vous. Chaque membre travaille sur sa propre branche dans un worktree isolé, et equipe demande une approbation humaine avant la fusion d’une branche. Le PM accepte le travail sur le tableau ; la personne qui dirige le squad décide de ce qui est intégré.',
      },
      {
        question: 'equipe est-il gratuit et open source ?',
        answer:
          'Oui. equipe est publié sous licence MIT et est open source depuis son premier commit. equipe lui-même est gratuit. Claude Code et Codex fonctionnent avec vos propres abonnements ou comptes Anthropic et OpenAI (ChatGPT).',
      },
      {
        question: 'equipe est-il prêt pour la production ?',
        answer:
          'equipe en est à un stade précoce. Le démon du squad tourne en arrière-plan, le PM accepte le travail, les agents travaillent sur des branches dans des sandboxes, et vous approuvez avant la fusion. Les passations et les canaux de communication arrivent ensuite, comme l’indique la feuille de route.',
      },
    ],
  },
  footer: { license: 'Licence MIT', built: 'Construit en public par un squad equipe.' },
};

export default fr;
