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
  start: {
    title: 'Começar',
    install: 'Hoje o equipe é instalado a partir do código-fonte. Você precisa do Rust 1.88+ e do git. O engine do Claude também precisa do binário `claude`.',
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
          'Instale a partir do código-fonte com Rust 1.88+ e git: clone `github.com/equipe-labs/equipe` e execute `cargo install --locked --path crates/cli`. O engine do Claude também precisa do binário do Claude Code.',
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
  app: {
    nav: { privacy: 'Política de privacidade do app', support: 'Suporte do app', home: 'Início do equipe' },
    privacy: {
      meta: {
        title: 'Política de privacidade do app equipe',
        description: 'O que o app móvel do equipe e o relay tratam: as chaves de pareamento ficam só no seu celular, o relay apenas repassa mensagens lacradas e não há análise nem rastreamento.',
      },
      title: 'Política de privacidade do app equipe',
      updated: 'Última atualização: 2026-10-14',
      intro: 'O app equipe permite que seu celular converse com o daemon do equipe no seu próprio Mac. Esta página explica, em palavras simples, o que o app e o relay do equipe tratam.',
      sections: [
        {
          title: 'Em resumo',
          text: 'O app não tem conta, anúncios, análise nem relatório de falhas, e não rastreia você. O trabalho do seu esquadrão viaja entre o celular e o Mac lacrado de ponta a ponta.',
          items: [],
        },
        {
          title: 'O que fica no seu celular',
          text: 'Isto é guardado apenas no seu dispositivo:',
          items: [
            '**Chaves de pareamento.** O par de chaves do celular, o token de relay recebido no pareamento e a chave pública e o nome do seu Mac. Ficam no Keychain do iOS ou, no Android, em armazenamento protegido pelo Android Keystore. A chave privada nunca sai do celular; o token de relay só é enviado ao relay, para autenticar o celular.',
            '**Câmera.** Usada apenas para ler o QR code de pareamento. As imagens não são salvas nem enviadas a lugar nenhum.',
            '**Face ID ou impressão digital.** O celular verifica antes de enviar uma aprovação. O equipe nunca recebe dados biométricos.',
          ],
        },
        {
          title: 'O que o relay do equipe trata',
          text: 'Seu celular e seu Mac se conectam a um relay operado pela equipe-labs em `relay.equipe.im`. Tudo entre eles é lacrado de ponta a ponta com chaves que só os dois têm, então o relay não consegue ler seus tickets, mensagens nem aprovações.',
          items: [
            'O relay vê que existe uma conexão, o tamanho e o momento das mensagens e os IDs aleatórios do seu Mac e do seu celular. Eles não estão ligados ao seu nome. Ele guarda apenas o hash de cada token, não o token.',
            'O relay roda na Cloudflare, que, como provedora de rede, processa o endereço IP de cada conexão.',
            'Não usamos essas informações para identificar ou traçar o perfil de você, e não as vendemos nem compartilhamos.',
          ],
        },
        {
          title: 'Notificações push',
          text: 'Para avisar seu celular quando o esquadrão precisa de você, o relay envia uma notificação push.',
          items: [
            '**Token push.** O relay guarda o token push do seu celular (APNs no iOS, Firebase Cloud Messaging no Android), ligado ao pareamento e não ao seu nome.',
            'O texto visível diz apenas quem precisa de quê. Os detalhes viajam lacrados e são abertos no seu celular.',
            'Apple e Google entregam a notificação conforme suas próprias políticas de privacidade. No Android, o Firebase Messaging também cria um ID de instalação para o celular.',
          ],
        },
        {
          title: 'Análise e rastreamento',
          text: 'O app não contém ferramentas de análise, publicidade nem relatório de falhas, e não rastreia você em outros apps ou sites. Esta política vale para o app e o relay. O site equipe.im conta visitas com o PostHog, sem cookies nem armazenamento local, e não cria perfis de pessoas.',
          items: [],
        },
        {
          title: 'Retenção e exclusão',
          text: 'Você decide quanto tempo um pareamento dura:',
          items: [
            'No app, desfaça o pareamento deste dispositivo. Isso apaga as chaves do celular e o registro de pareamento e o token push do relay.',
            'No Mac, execute `equipe devices remove <name>` para revogar um celular na hora.',
            'O relay guarda o token push e o registro de pareamento apenas enquanto o pareamento existir.',
            'No Android, desinstalar o app remove seus dados. No iOS, itens do Keychain podem continuar após desinstalar, então desfaça o pareamento antes.',
          ],
        },
        {
          title: 'Crianças',
          text: 'O app não é direcionado a crianças e não coletamos intencionalmente informações pessoais delas.',
          items: [],
        },
        {
          title: 'Alterações',
          text: 'Se esta política mudar, atualizaremos a data acima e esta página.',
          items: [],
        },
        {
          title: 'Contato',
          text: 'Para dúvidas ou pedidos de exclusão de dados, escreva para o endereço abaixo ou abra uma issue no GitHub.',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'Suporte do app equipe — pareie seu celular',
        description: 'Como parear o app equipe com seu Mac usando `equipe pair`, respostas para perguntas frequentes e como falar com a gente.',
      },
      title: 'Suporte do app equipe',
      intro: 'O app equipe é um controle remoto do esquadrão no seu Mac. Ele avisa quando o esquadrão precisa de você e permite permitir ou recusar, revisar o trabalho e conversar com o PM. Ele precisa do equipe rodando no seu Mac, então instale o equipe primeiro.',
      pairTitle: 'Pareie seu celular',
      pairSteps: [
        'Confirme que o equipe está instalado no seu Mac (veja «Primeiros passos» na página inicial).',
        'Em um terminal no Mac, execute o comando abaixo. Aparece um QR code válido por 5 minutos.',
        'Abra o app equipe no celular, inicie o pareamento e permita a câmera.',
        'Aponte a câmera para o QR code.',
        'O Mac pergunta «Pair <seu celular>? y/n». Responda `y`. Pronto, pareado.',
      ],
      pairCode: 'equipe pair',
      removeTitle: 'Ver ou remover celulares pareados',
      removeText: '`equipe devices` lista os celulares e `equipe devices remove <name>` revoga um na hora. Perdeu o celular? Um comando.',
      faqTitle: 'Perguntas frequentes',
      faq: [
        { question: 'Preciso do equipe em um computador?', answer: 'Sim. O app é um controle remoto do daemon do equipe no seu Mac; sem ele não há a que se conectar. Instale o equipe primeiro.' },
        { question: 'O QR code não lê ou diz que expirou.', answer: 'O código vale 5 minutos. Execute `equipe pair` de novo para gerar outro e deixe o QR grande e brilhante na tela.' },
        { question: 'Não recebo notificações.', answer: 'Confira se as notificações do equipe estão permitidas nos ajustes do celular e se o daemon está rodando no Mac (`equipe status`).' },
        { question: 'Perdi ou troquei de celular.', answer: 'Execute `equipe devices remove <name>` no Mac e pareie o novo celular com `equipe pair`.' },
        { question: 'O equipe consegue ler meu trabalho pelo app?', answer: 'Não. As mensagens entre o celular e o Mac são lacradas de ponta a ponta; o relay só as repassa. Leia a política de privacidade para mais detalhes.' },
        { question: 'Funciona fora da minha rede de casa?', answer: 'Sim. Celular e Mac se conectam de dentro para fora ao relay, então Wi-Fi, dados móveis e redes atrás de roteador funcionam.' },
        { question: 'Quais celulares são compatíveis?', answer: 'iPhone com iOS 17 ou superior, e Android 8.0 ou superior.' },
      ],
      contactTitle: 'Contato',
      contactText: 'Ainda travado? Escreva para o endereço abaixo ou abra uma issue no GitHub.',
    },
  },
};

export default ptBR;
