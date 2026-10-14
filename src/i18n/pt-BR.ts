import type { Messages } from './en';

const ptBR: Messages = {
  meta: {
    title: 'equipe — um squad de agentes de programação com IA',
    description:
      'equipe é um squad de software com IA de código aberto: agentes por função usam um quadro e git worktrees isolados. Nada sofre merge sem sua aprovação.',
    ogTitle: 'equipe — um squad de agentes de programação com IA',
    ogDescription:
      'equipe é um squad de software com IA de código aberto: agentes por função usam um quadro e git worktrees isolados. Nada sofre merge sem sua aprovação.',
    ogImageAlt: 'equipe — um squad de agentes de programação com IA, liderado por uma só pessoa',
  },
  ui: {
    skip: 'Ir para o conteúdo',
    primaryNav: 'Principal',
    copy: 'Copiar',
    copied: 'Copiado',
    copyInstall: 'Copiar comandos de instalação',
    copyCommands: 'Copiar comandos',
    copyCommand: 'Copiar comando',
    language: 'Idioma',
    bannerText: 'Ver esta página em {language}',
    bannerClose: 'Fechar',
  },
  nav: { howItWorks: 'Como funciona', getStarted: 'Começar', faq: 'Perguntas frequentes', github: 'GitHub' },
  hero: {
    title: 'Seu squad de software com IA, liderado por você.',
    lead: 'equipe é um squad de software com IA de código aberto: um time de agentes por função (PM, Designer, Frontend, Backend, QA e Dados) que trabalha no seu repositório por meio de um quadro compartilhado, em git worktrees isolados, e espera a aprovação de uma pessoa antes de qualquer merge.',
    note: 'equipe não é mais um loop de agente. É a camada de time sobre os que já existem: hoje, Codex e Claude Code.',
    ctaPrimary: 'Ver no GitHub',
    ctaSecondary: 'Começar',
    chip: 'Em estágio inicial · Licença MIT',
  },
  how: {
    title: 'Como funciona',
    intro: 'Uma pessoa lidera. O squad trabalha em paralelo. Tudo passa pelo quadro.',
    cards: [
      { title: 'Funções', text: 'Cada membro tem uma função (PM, Designer, Frontend, Backend, QA ou Dados), com um modelo adequado a ela e uma memória própria.' },
      { title: 'Tickets', text: 'O quadro é a única fonte da verdade. Os membros se coordenam por tickets e eventos imutáveis, não por chat, então cada ação deixa algo que você pode ver.' },
      { title: 'Branches', text: 'Cada membro trabalha no próprio git worktree isolado, em um branch próprio. Assim, vários podem trabalhar no seu repositório ao mesmo tempo sem mexer no seu checkout.' },
      { title: 'Sua aprovação', text: 'Você decide nos pontos de aprovação. Nada sofre merge até você dizer que sim.' },
    ],
  },
  who: {
    title: 'Para quem é o equipe',
    intro: 'O equipe é para quem quer liderar um pequeno time de software formado por agentes de IA, em vez de dar comandos a um agente por vez. Você define a direção e revisa o trabalho. O squad divide tudo em tickets e executa em branches.',
    points: [
      { lead: 'Você já usa Codex ou Claude Code.', text: 'O equipe controla os dois, e você entra do mesmo jeito que já faz hoje.' },
      { lead: 'Você quer trabalho em paralelo que dê para revisar.', text: 'Cada mudança chega como um branch, nunca como surpresa no seu branch principal.' },
      { lead: 'Você quer ficar com as decisões.', text: 'Os pontos de aprovação ficam onde importa, então a palavra final continua sendo sua.' },
    ],
    proof: 'Este site foi construído em público por um squad do equipe. Cada mudança começou como um ticket e chegou como um branch que uma pessoa aceitou.',
  },
  apps: {
    title: 'Apps para desktop e celular',
    intro: 'O squad vai chegar ao seu Mac e ao seu celular, para você acompanhar o trabalho e decidir de onde estiver.',
    soon: 'Em breve',
    items: [
      { title: 'App para desktop', platform: 'macOS', points: ['Ver seu squad e os membros', 'Conversar com o PM', 'Acompanhar os tickets no quadro', 'Colar capturas de tela na conversa'] },
      { title: 'App para celular', platform: 'iOS · Android', points: ['Aprovar pelo celular com Face ID ou impressão digital', 'Acompanhar os tickets no quadro', 'Conversar com o PM', 'Parear com o Mac lendo um QR code; o que você envia tem criptografia de ponta a ponta'] },
    ],
  },
  start: {
    title: 'Começar',
    install: 'No macOS e no Linux, basta uma linha. Ela coloca um `equipe` pré-compilado em `~/.local/bin` (verificado por SHA-256) e o adiciona ao seu PATH:',
    brew: 'Ou com Homebrew:',
    source: 'Prefere compilar você mesmo? Instale a partir do código-fonte com Rust 1.88+ e git: clone `github.com/equipe-labs/equipe` e execute `cargo install --locked --path crates/cli`. O engine do Claude também precisa do binário `claude`.',
    run: 'Entre em um engine, confira se ele está pronto e abra o console do squad:',
    runCode: `equipe login     # entra no Codex ou no Claude Code
equipe status    # confere se o engine está pronto e quais modelos estão disponíveis
equipe           # abre o console do squad`,
    tryIntro: 'Quer experimentar antes, sem o quadro? Deixe um agente editar seu repositório em um novo branch, em um worktree isolado:',
    docs: 'Leia a documentação no GitHub →',
    roadmap: 'Roadmap',
    architecture: 'Arquitetura',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'O que é o equipe?',
        answer:
          'equipe é um squad de software com IA de código aberto. Ele coordena agentes com funções como PM, Designer, Frontend, Backend, QA e Dados em torno de um quadro compartilhado. Eles trabalham em git worktrees isolados, e uma pessoa aprova antes de as mudanças sofrerem merge.',
      },
      {
        question: 'O equipe é mais um agente de código com IA?',
        answer:
          'Não. O equipe é a camada de time sobre os engines de agente que já existem, não um novo loop de agente. Ele acrescenta funções, um quadro como única fonte da verdade, git worktrees isolados para o trabalho em paralelo e pontos de aprovação humana.',
      },
      {
        question: 'Com quais engines de IA o equipe funciona?',
        answer:
          'Hoje o equipe controla o Codex e o Claude Code. Ele foi projetado para aceitar mais engines por meio do Agent Client Protocol.',
      },
      {
        question: 'O equipe lida com as minhas credenciais?',
        answer:
          'No caso do Claude Code, não. Você executa o binário `claude` sem modificações e entra por conta própria, então a cobrança vai para a sua conta. No caso do Codex, o equipe entra via OAuth usando o seu plano do ChatGPT e se identifica com honestidade como `originator: equipe`.',
      },
      {
        question: 'Como instalo o equipe?',
        answer:
          'No macOS e no Linux, execute `curl -fsSL https://github.com/equipe-labs/equipe/releases/latest/download/install.sh | sh`: ele coloca um `equipe` pré-compilado em `~/.local/bin` (verificado por SHA-256) e o adiciona ao seu PATH. Ou use Homebrew: `brew install equipe-labs/tap/equipe`. Para compilar a partir do código-fonte, você precisa do Rust 1.88+ e do git: clone `github.com/equipe-labs/equipe` e execute `cargo install --locked --path crates/cli`. O engine do Claude também precisa do binário do Claude Code.',
      },
      {
        question: 'Quem aprova o trabalho?',
        answer:
          'Você. Cada membro trabalha no próprio branch, em um worktree isolado, e o equipe pede aprovação humana antes do merge de um branch. O PM aceita o trabalho no quadro; quem lidera o squad decide o que entra.',
      },
      {
        question: 'O equipe é gratuito e de código aberto?',
        answer:
          'Sim. O equipe é distribuído sob a Licença MIT e é código aberto desde o primeiro commit. O próprio equipe é gratuito. O Claude Code e o Codex funcionam com as suas próprias assinaturas ou contas da Anthropic e da OpenAI (ChatGPT).',
      },
      {
        question: 'O equipe está pronto para uso em produção?',
        answer:
          'O equipe está em estágio inicial. O daemon do squad roda em segundo plano, o PM aceita o trabalho, os agentes trabalham em branches dentro de sandboxes e você aprova antes do merge. As transferências (handoffs) e os canais de comunicação vêm a seguir, como mostra o roadmap.',
      },
    ],
  },
  footer: { license: 'Licença MIT', built: 'Construído em público por um squad do equipe.' },
};

export default ptBR;
