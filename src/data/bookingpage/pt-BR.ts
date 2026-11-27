import type { BookingCopy } from './types';

export const ptBR: BookingCopy = {
  page: {
    title: 'Página de agendamento grátis: crie a sua em 60 segundos | equipe',
    desc: 'Crie grátis a página de agendamento online do seu negócio em um minuto: coloque seus serviços, preços e horários, escolha um visual e veja tudo ao vivo enquanto digita. Teste sem cadastro.',
    h1: 'Crie sua página de agendamento em 60 segundos',
    lead: 'Digite o nome do seu negócio, os serviços e o horário de funcionamento. Sua página de agendamento vai se montando enquanto você digita, e quando ficar do seu jeito dá para compartilhar ou colocar no ar.',
    ogTitle: 'Página de agendamento grátis',
    crumbs: 'Ferramentas grátis',
  },
  hub: { name: 'Criador de página de agendamento', blurb: 'Coloque serviços, preços e horários e receba uma página de agendamento que seus clientes já podem usar. Grátis, sem cadastro.', cta: 'Criar minha página' },
  ed: {
    business: 'Seu negócio', name: 'Nome do negócio', namePh: 'ex.: Studio Tília Cabelos', tagline: 'Uma frase sobre ele', taglinePh: 'ex.: Corte e coloração a cinco minutos do metrô',
    services: 'Serviços', svcName: 'Serviço', svcNamePh: 'ex.: Corte', duration: 'Duração', price: 'Preço', pricePh: 'ex.: R$ 70',
    addService: 'Adicionar serviço', remove: 'Remover', maxServices: 'Aqui cabem até 8 serviços. Sua equipe pode adicionar mais depois.', noServices: 'Adicione pelo menos um serviço para as pessoas terem o que agendar.',
    hours: 'Horário de funcionamento', open: 'Aberto', closed: 'Fechado', from: 'Abre', to: 'Fecha', sameAs: 'Copiar segunda-feira para todos os dias abertos', badHours: 'O horário de fechamento precisa ser depois da abertura.',
    contact: 'Contato', phone: 'Telefone', email: 'E-mail', address: 'Endereço', addressPh: 'Rua, cidade', contactNote: 'Opcional. Aparece na sua página para os clientes falarem com você.',
    look: 'Visual', themes: { clean: 'Limpo', warm: 'Acolhedor', night: 'Noite', bold: 'Marcante' },
    min: '{n} min', hr: '{h} h', hrMin: '{h} h {m} min',
  },
  pv: {
    label: 'Prévia ao vivo', phone: 'Celular', desktop: 'Computador', share: 'Copiar link para compartilhar', copied: 'Link copiado',
    shareNote: 'O link carrega a própria página, então nada fica salvo nos nossos servidores. Ele para de abrir depois de 7 dias.',
    expired: 'Esse link de prévia tem mais de 7 dias e não abre mais. Aqui está um exemplo novo para começar.',
    shared: 'Alguém compartilhou com você esta prévia de página de agendamento. Mude o que quiser.', start: 'Começar de novo',
  },
  live: {
    title: 'Gostou? Coloque no ar',
    sub: 'Cadastre-se e seus dados vão junto. Sua equipe de IA publica esta página como primeira versão, faz os agendamentos ficarem salvos, manda um e-mail a cada novo e ativa o pagamento online assim que você conectar sua conta.',
    btn: 'Colocar no ar',
    free: 'Grátis para começar · Sem cartão · Sem programar',
    privacy: 'Até você apertar o botão, o que você digita fica só neste navegador.',
  },
  bp: {
    services: 'Serviços', chooseService: 'Escolha um serviço', chooseTime: 'Escolha o dia e o horário', details: 'Seus dados', yourName: 'Seu nome', yourContact: 'Telefone ou e-mail', note: 'Algo que devemos saber? (opcional)',
    book: 'Agendar', bookFor: 'Agendar {service} · {when}', done: 'Seu horário está agendado', doneSub: 'Isto é uma prévia. Quando a página estiver no ar, cada agendamento fica salvo e o negócio recebe um e-mail.',
    noTimes: 'Nenhum horário livre nas próximas duas semanas.', noServices: 'Os serviços aparecem aqui.', hours: 'Horário de funcionamento', contact: 'Contato',
    closed: 'Fechado', preview: 'Prévia da sua página de agendamento', again: 'Agendar outro horário', times: 'Horários', call: 'Ligar', mail: 'E-mail',
  },
  how: {
    title: 'Como funciona',
    items: [
      { title: 'Preencha quatro coisas', text: 'Seu nome, os serviços que você oferece com duração e preço, seu horário de funcionamento e como falar com você.' },
      { title: 'Veja a página se montar', text: 'A prévia muda a cada tecla: serviços para escolher, uma faixa de dias, horários livres a partir do seu expediente e um formulário curto. Alterne entre quatro visuais.' },
      { title: 'Compartilhe ou coloque no ar', text: 'Copie um link para mostrar a alguém ou aperte Colocar no ar. Cadastre-se grátis e sua equipe publica a página com seus dados já preenchidos.' },
    ],
  },
  after: {
    title: 'O que acontece depois de colocar no ar',
    sub: 'O fluxo que um negócio local costuma ter, feito pela sua equipe de IA. Você aprova tudo o que custa dinheiro ou chega aos clientes.',
    items: [
      { title: 'Sua página entra no ar', text: 'Publicada no próprio endereço no primeiro dia, com política de privacidade e termos de uso que falam dos agendamentos.' },
      { title: 'Os agendamentos ficam salvos', text: 'Cada agendamento entra na sua lista e você recebe um e-mail a cada novo. Nada de planilha.' },
      { title: 'Pagamentos quando quiser', text: 'Conecte sua conta de pagamentos e a mesma página recebe sinal ou o valor total. Até lá, as pessoas continuam agendando.' },
      { title: 'Sempre melhorando', text: 'Sua equipe observa quais serviços são mais agendados e sugere a próxima mudança num relatório semanal.' },
    ],
  },
  faq: {
    title: 'Perguntas',
    items: [
      { question: 'O criador de página de agendamento é grátis?', answer: 'Sim. Criar, ver a prévia e compartilhar a página é grátis e sem cadastro. Colocar no ar também começa grátis: equipes novas ganham 500 créditos e não precisa de cartão.' },
      { question: 'Preciso saber programar?', answer: 'Não. Você preenche alguns campos e a página é montada a partir deles. Depois do cadastro, sua equipe de IA cuida da parte técnica.' },
      { question: 'A prévia recebe agendamentos de verdade?', answer: 'Ainda não. A prévia mostra exatamente como vai ser agendar, mas nada é enviado. Os agendamentos ficam salvos e chegam por e-mail quando a página estiver no ar.' },
      { question: 'O que acontece com o que eu digito?', answer: 'Fica no seu navegador. O link de compartilhamento leva a página dentro do próprio link, então nada fica salvo nos nossos servidores, e ele para de abrir depois de 7 dias. Seus dados só são enviados quando você aperta Colocar no ar.' },
      { question: 'Dá para cobrar no agendamento?', answer: 'Sim, quando a página estiver no ar e você conectar uma conta de pagamentos. Até lá, os agendamentos continuam chegando e o pagamento pode vir depois.' },
      { question: 'Posso mudar a página depois?', answer: 'Pode. Peça à sua equipe com suas palavras: incluir um serviço, mudar o horário, colocar fotos ou outro idioma.' },
    ],
  },
  idea: {
    intro: 'Uma página de agendamento para o meu negócio, {name}.',
    services: 'Serviços: {services}.',
    hours: 'Horário de funcionamento: {hours}.',
    contact: 'Contatos para a página: {contact}.',
    look: 'Visual: {look}.',
    ask: 'Fiz uma prévia com o criador de página de agendamento do equipe.im. Publique como primeira versão do jeito acima, depois salve cada agendamento, me mande um e-mail a cada novo e adicione o pagamento online quando eu conectar minha conta.',
    closedDays: 'fechado {days}',
  },
  sample: {
    name: 'Studio Tília Cabelos',
    tagline: 'Corte e coloração a cinco minutos do metrô',
    services: [{ n: 'Corte', d: 45, p: 'R$ 70' }, { n: 'Corte e coloração', d: 120, p: 'R$ 250' }, { n: 'Barba', d: 20, p: 'R$ 35' }],
  },
};
