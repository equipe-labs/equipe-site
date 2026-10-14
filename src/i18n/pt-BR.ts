import type { Messages } from './en';

const ptBR: Messages = {
  meta: {
    title: 'equipe — um squad de agentes de programação com IA',
    description:
      'O equipe é um squad de software com IA e de código aberto: agentes com papéis trabalham em um quadro compartilhado, em git worktrees isolados, e nenhum merge acontece sem a sua aprovação.',
    ogTitle: 'equipe — um squad de agentes de programação com IA',
    ogDescription:
      'O equipe é um squad de software com IA e de código aberto: agentes com papéis trabalham em um quadro compartilhado, em git worktrees isolados, e nenhum merge acontece sem a sua aprovação.',
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
    bannerText: 'Ver esta página em português',
    bannerClose: 'Fechar',
  },
  nav: { howItWorks: 'Como funciona', getStarted: 'Começar', faq: 'FAQ', github: 'GitHub' },
  hero: {
    title: 'Lidere um time de agentes de IA. Você aprova cada merge.',
    lead: 'Agentes de PM, design, desenvolvimento e mobile trabalham em um quadro compartilhado, cada um no seu próprio branch do repositório. Nada entra sem a sua aprovação.',
    ctaPrimary: 'Ver no GitHub',
    chip: 'Fase inicial · Licença MIT · Compatível com Codex e Claude Code',
    shotAlt: 'Prévia do app para desktop do equipe: um agente pede permissão para executar um comando, com os botões Permitir uma vez, Sempre e Recusar',
    shotCaption: 'Prévia do app para desktop: um agente pausa com “Preciso de permissão” e você aprova com um clique. (App em breve)',
  },
  how: {
    title: 'Como funciona',
    intro: 'Uma pessoa lidera. O squad trabalha em paralelo. Tudo passa pelo quadro.',
    steps: [
      { title: 'Delegue', text: 'Diga ao PM o que você quer. Isso vira tickets em um quadro compartilhado, cada um com um papel responsável por ele.' },
      { title: 'Trabalho em paralelo', text: 'Os membros trabalham ao mesmo tempo, cada um no próprio branch. Seu checkout fica intacto e cada ação fica registrada no quadro.' },
      { title: 'Sua aprovação', text: 'Antes de qualquer merge, o equipe pergunta a você. Nada entra até você dizer que sim.' },
    ],
  },
  who: {
    title: 'Para quem é o equipe',
    intro: 'O equipe é para quem quer liderar um pequeno time de software formado por agentes de IA, em vez de dar comandos a um agente por vez. Você define a direção e revisa o trabalho. O squad divide tudo em tickets e executa em branches.',
    points: [
      { lead: 'Você já usa Codex ou Claude Code.', text: 'O equipe controla os dois; você faz login como sempre.' },
      { lead: 'Você quer trabalho em paralelo que dê para revisar.', text: 'Cada mudança chega como um branch, nunca como surpresa no seu branch principal.' },
      { lead: 'Você quer ficar com as decisões.', text: 'Os pontos de aprovação ficam onde importa, então a palavra final continua sendo sua.' },
    ],
    proof: 'Este site foi construído em público por um squad do equipe. Cada mudança começou como um ticket e chegou como um branch que uma pessoa aceitou.',
  },
  apps: {
    title: 'Acompanhe no Mac, aprove no celular.',
    intro: 'O squad também aparece fora do terminal. Quando um agente espera sua aprovação, o celular avisa e você aprova com Face ID. O que você envia tem criptografia de ponta a ponta.',
    soon: 'Em breve',
    caption: 'Prévia do app · em breve',
    items: [
      { title: 'App para desktop', platform: 'macOS', text: 'Squad, quadro e conversa com o PM em uma só janela.', alt: 'Prévia do app para desktop: um agente pede permissão para executar um comando, com os botões Permitir uma vez, Sempre e Recusar.' },
      { title: 'App para celular', platform: 'iOS · Android', text: 'Só avisa quando algo precisa da sua aprovação.', alt: 'Prévia do app para celular: dois pedidos de aprovação aguardando.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: 'Executar o comando?', allow: 'Permitir uma vez', decline: 'Recusar', askMerge: 'Fazer merge do branch?', approve: 'Aprovar', changes: 'Pedir mudanças' },
    notify: { title: 'Quer saber quando os apps saírem?', text: 'Inscreva-se nos releases no GitHub e receba um e-mail só quando sair uma nova versão. Sem cadastro com a gente e sem coleta do seu e-mail.', cta: 'Receber aviso no GitHub', how: 'No repositório equipe-labs/equipe: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Começar',
    install: 'No macOS e no Linux, basta uma linha. Ela coloca um `equipe` pré-compilado em `~/.local/bin` (verificado por SHA-256) e o adiciona ao seu PATH:',
    brew: 'Instala um `equipe` pré-compilado pelo tap do Homebrew. Depois, atualize com `brew upgrade equipe`:',
    tabsLabel: 'Forma de instalação',
    sourceTitle: 'Compilar a partir do código-fonte (avançado)',
    source: 'Prefere compilar você mesmo? Instale a partir do código-fonte com Rust 1.88+ e git: clone `github.com/equipe-labs/equipe` e execute `cargo install --locked --path crates/cli`. O engine do Claude também precisa do binário `claude`.',
    run: 'Faça login em um engine, confira se ele está pronto e abra o console do squad:',
    runCode: `equipe login     # faz login no Codex ou no Claude Code
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
          'O equipe é um squad de software com IA e de código aberto. Ele coordena agentes com papéis como PM, Designer, Frontend, Backend, Mobile, QA e Data em torno de um quadro compartilhado. Eles trabalham em git worktrees isolados, e uma pessoa aprova antes do merge das mudanças.',
      },
      {
        question: 'O equipe é mais um agente de código com IA?',
        answer:
          'Não. O equipe é a camada de time sobre os engines de agente que já existem, não um novo loop de agente. Ele acrescenta papéis, um quadro como única fonte da verdade, git worktrees isolados para o trabalho em paralelo e pontos de aprovação humana.',
      },
      {
        question: 'Com quais engines de IA o equipe funciona?',
        answer:
          'Hoje o equipe controla o Codex e o Claude Code. Ele foi projetado para aceitar mais engines por meio do Agent Client Protocol.',
      },
      {
        question: 'O equipe lida com as minhas credenciais?',
        answer:
          'No caso do Claude Code, não. Você executa o binário `claude` sem modificações e faz login você mesmo, então a cobrança vai para a sua conta. No caso do Codex, o equipe faz login via OAuth usando o seu plano do ChatGPT e se identifica de forma transparente como `originator: equipe`.',
      },
      {
        question: 'Como instalo o equipe?',
        answer:
          'No macOS e no Linux, execute `brew install equipe-labs/tap/equipe`. Você também pode usar a linha do install.sh ou compilar a partir do código-fonte (Rust 1.88+); todos os métodos estão em Começar.',
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
          'O equipe está em fase inicial. O daemon do squad roda em segundo plano, o PM aceita o trabalho, os agentes trabalham em branches dentro de sandboxes e você aprova antes do merge. As transferências (handoffs) e os canais de comunicação vêm a seguir, como mostra o roadmap.',
      },
      {
        question: 'O que é um git worktree e por que o equipe o usa?',
        answer:
          'Um git worktree é outra pasta de trabalho do mesmo repositório, com seu próprio branch. O equipe dá um a cada membro, para que vários trabalhem ao mesmo tempo sem que um interfira no trabalho do outro nem no seu checkout.',
      },
    ],
  },
  notFound: { title: 'Página não encontrada — equipe', description: 'Esta página não existe.', heading: 'Página não encontrada', text: 'Não há nada neste endereço. Ela pode ter sido movida, ou o link pode estar errado.', home: 'Ir para a página inicial' },
  footer: { license: 'Licença MIT', built: 'Construído em público por um squad do equipe.' },
};

export default ptBR;
