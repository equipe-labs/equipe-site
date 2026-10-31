import type { AppText } from './en';

const ptBR: AppText = {
  ui: {
    newMessage: 'Nova mensagem', pm: 'PM', inbox: 'Caixa de entrada', inProgress: 'Em andamento', tickets: 'Tickets', overview: 'Visão geral', roadmap: 'Roteiro',
    projects: 'Projetos', usage: 'Uso', suggest: 'Sugerir', notRead: 'ainda não lido', team: 'Equipe', thisMac: 'Este Mac',
    allProjects: 'Todos os projetos', search: 'Buscar · project:web is:blocked', filter: 'Filtrar', context: 'contexto 31%',
    idle: 'Ocioso', permission: 'Permissão', yourTurn: 'Sua vez', working: 'Trabalhando', done: 'Concluído', hours: 'h',
    composer: 'Algo para o pm…', composerBusy: 'Algo para o pm — trabalho fora de projetos ou um novo projeto', auto: 'auto', effort: 'esforço',
  },
  lanes: { yourTurn: 'Sua vez', review: 'Revisão', done: 'Concluído', proposed: 'Proposto', todo: 'A fazer', inProgress: 'Em andamento' },
  tickets: [
    'Cores da marca e logotipo', 'Página inicial', 'Endpoint de cadastro por e-mail', 'Ícone do app', 'Página de preços', 'Reenviar e-mails de cadastro que falharam',
    'Conectar a conta de análises', 'Textos A/B da página de preços', 'Widget de sequência diária', 'API de lembrete de sequência', 'Telas de onboarding, rodada 2',
    'Painel do funil de cadastro', 'FAQ de preços', 'Exportar check-ins em CSV', 'Haptics no check-in', 'Link de indicação na página de sucesso',
  ],
  activity: { t8: 'Editando pricing.tsx', t9: 'Editando StreakWidget.swift', t10: 'Executando cargo test reminders', t11: 'Lendo brief.md', t12: 'Lendo funnel.sql' },
  inbox: {
    toSort: '1 para triar', toSortHint: 'propostas da equipe — aceite ou descarte',
    permission: 'Permissão', decisions: 'Decisões', yourTurn: 'Sua vez', proposed: 'Proposto', startAll: 'Iniciar tudo',
    allow: 'Permitir executar um comando', publish: 'Publicar a página de preços?', paid: 'Usar uma ferramenta paga no funil?', connect: 'Conectar a conta de análises',
    postHog: 'Criar um projeto PostHog para o Loop', fromPm: 'do pm',
  },
  decision: {
    title: 'Decisões', tag: 'Página de preços', question: 'Publicar a página de preços?',
    a: 'Publicar agora (Recomendado)', aText: 'Vai ao ar em loop.app/pricing. Os visitantes veem o plano Pro por $6/mo. Não dá para desfazer depois de compartilhado.',
    b: 'Aguardar a escolha do texto A/B', bText: 'Mantém a página atual; o T-8 termina primeiro',
    own: 'Digite sua própria resposta', attach: 'Anexar', asks: 'frontend pergunta · T-5', hint: '1–9 escolher · Tab responder · ⌘↵ próxima', skip: 'Pular', submit: 'Enviar',
    publishNow: 'Publicar agora', hold: 'Aguardar',
  },
  permission: {
    label: 'Permissão', title: 'Permitir executar um comando?', command: 'npm run build', why: 'Para verificar se a página de preços compila antes de ir ao ar',
    once: 'Permitir uma vez', always: 'Sempre', deny: 'Negar', reply: 'Responder', note: '“Sempre” cria uma regra para npm run', card: 'Cartão 1 de 2',
  },
  chat: {
    read: 'Leu website/src/pricing.tsx', split: 'Assim eu dividiria. Quatro tickets, cada um com um responsável:',
    ticket: 'Ticket', owner: 'Responsável', what: 'O quê',
    rows: ['Duas versões de título para o card Pro, prontas para teste A/B', 'Um FAQ de preços que responde às principais objeções', 'Painel do funil, da visita ao primeiro check-in', 'Link de indicação na página de sucesso'],
    before: 'T-5', mid: ', a própria página de preços, já está em revisão. ', bold: 'Publicar é decisão sua', after: ', então deixei essa pergunta com você. Aviso quando ', last: 'o funil tiver números.',
  },
  hero: {
    ask: 'Consiga mais cadastros no Loop', reply: 'Assim eu dividiria. Quatro tickets, um responsável cada:', reply2: 'O T-5 já está em revisão. Publicar é decisão sua, então vou fazer essa pergunta a você.',
    working: 'Trabalhando', publish: 'Publicar agora', hold: 'Aguardar', liveTitle: 'Live', liveText: 'loop.app/pricing · publicado agora há pouco', approved: 'Você aprovou 1 item.',
    tickets: ['Título A/B dos preços', 'FAQ de preços', 'Painel do funil de cadastro', 'Link de indicação na página de sucesso'],
    caption: 'Desenhado a partir do app real, com dados de demonstração. As barras de progresso e o banner Live são encenados para este loop; no app você vê uma linha de atividade.',
    pause: 'Pausar a demonstração', play: 'Reproduzir a demonstração', label: 'Uma linha para o PM vira quatro tickets em paralelo, depois um cartão de decisão para você, e então vai ao ar.',
  },
};
export default ptBR;
