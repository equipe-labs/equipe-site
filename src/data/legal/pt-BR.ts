import type { LegalCopy } from '../legal';

const ptBR: LegalCopy = {
  ui: {
    updated: 'Última atualização: {date}',
    toc: 'Nesta página',
    prevails: 'Esta página também está disponível em outros idiomas. Se uma tradução for diferente da versão em inglês, vale a versão em inglês.',
    notAdvice: 'Escrevemos isto em palavras simples para facilitar a leitura. O texto descreve como o equipe funciona; não é aconselhamento jurídico para o seu próprio negócio ou produto.',
    privacy: 'Privacidade',
    terms: 'Termos',
    appPolicy: 'Privacidade do app de celular',
  },
  privacy: {
    title: 'Política de Privacidade — equipe',
    desc: 'O que o equipe coleta, por quê, quem processa, como contas conectadas como o Google e os recursos de IA tratam os dados, por quanto tempo guardamos e quais escolhas você tem.',
    h1: 'Política de Privacidade',
    summaryTitle: 'Em resumo',
    summary: [
      'Coletamos o que precisamos para fazer seu time e seus produtos funcionarem, e nada para vender. Não vendemos dados pessoais.',
      'Não usamos seu espaço de trabalho, os dados dos seus produtos nem os dados das suas contas conectadas para treinar modelos de IA.',
      'As contas que você conecta, como o Google, são usadas só para os recursos que você ativa. Você pode desconectá-las a qualquer momento.',
      'Recursos de IA no seu produto: o equipe não guarda o que os visitantes digitam nem o que a IA responde, apenas contagens e custos.',
      'Você pode nos pedir para exportar ou excluir seus dados a qualquer momento: [support@equipe.im](mailto:support@equipe.im).',
    ],
    sections: [
      { id: 'who', h: 'Quem somos e o que esta política abrange', body: [
        'O equipe oferece a você um time de agentes de IA que constroem, operam e melhoram seu produto. Ele é operado pela **Umbriles Inc.** (“nós”). Esta política abrange o site equipe.im, o serviço equipe em app.equipe.im, o serviço de IA em ai.equipe.im e a hospedagem dos produtos que seu time constrói. O app de celular do equipe tem sua própria política resumida em [equipe.im/app/privacy](/app/privacy/).',
      ] },
      { id: 'collect', h: 'O que coletamos', body: [
        { ul: [
          '**Dados da conta.** Seu endereço de email e, se você entrar com Google ou Apple, seu nome, seu email e o identificador de conta que esses serviços nos fornecem. Se você usar uma chave de acesso (passkey), guardamos apenas a chave pública dela; sua impressão digital ou seu rosto nunca saem do seu dispositivo.',
          '**Seu espaço de trabalho.** O que você e seu time criam no equipe: mensagens com seu time, pedidos, tarefas, planos, arquivos que você envia, o código e o conteúdo dos seus produtos, e as configurações.',
          '**Segredos.** Senhas e chaves que você informa para seus produtos são guardadas criptografadas no cofre de segredos do seu time e não são exibidas de novo nas conversas.',
          '**Contas conectadas.** Se você conectar uma conta como Google, Meta ou GitHub, guardamos um token de acesso criptografado e o nome da conta, além do necessário para usá-la por você. Veja “Contas conectadas” abaixo.',
          '**Pagamentos.** Os pagamentos são processados pela Stripe. Não vemos nem guardamos números completos de cartão. Mantemos registros de cobrança: o que foi comprado, quando e o valor.',
          '**Dados de uso e técnicos.** Eventos de login, endereço IP e informações do navegador para segurança e prevenção de abuso, logs de erro e quanto tempo de IA e de computador seu time usa, para limites e cobrança.',
          '**Mensagens para nós.** O que você envia quando escreve para o suporte.',
          '**Site.** O equipe.im conta visitas com o PostHog sem cookies e sem criar perfis pessoais, e registra como um visitante nos encontrou (por exemplo, o site de origem ou a campanha).',
        ] },
      ] },
      { id: 'use', h: 'Como usamos', body: [
        { ul: [
          'Para prestar o serviço: fazer seu time funcionar, construir e hospedar seus produtos e mostrar seu espaço de trabalho.',
          'Para manter tudo seguro: confirmar que é você, prevenir abuso e fraude e investigar problemas.',
          'Para medir o uso para limites e cobrança, e para melhorar o equipe.',
          'Para entrar em contato sobre sua conta, segurança, cobrança e mudanças importantes. Emails de marketing só com seu consentimento; você pode cancelar a inscrição a qualquer momento.',
        ] },
        'Não vendemos seus dados pessoais e não usamos seu espaço de trabalho, os dados dos seus produtos nem os dados de contas conectadas para treinar modelos de IA.',
        'Quando o RGPD (GDPR) ou leis semelhantes se aplicam, nos baseamos em: nosso contrato com você (para prestar o serviço), nossos interesses legítimos (segurança, prevenção de abuso, melhoria do equipe), seu consentimento (por exemplo, emails de marketing ou cookies de publicidade, se algum dia os usarmos) e obrigações legais (por exemplo, manter registros de cobrança).',
      ] },
      { id: 'ai', h: 'Como a IA processa seu trabalho', body: [
        'Seu time trabalha enviando o conteúdo de que precisa para modelos de IA operados por provedores de IA que usamos em seu nome (como Anthropic, OpenAI e Google). Eles processam esse conteúdo para gerar respostas sob seus termos de API empresarial, que não usam esse conteúdo para treinar seus modelos. O equipe escolhe o modelo para cada etapa.',
        'Os agentes nunca decidem aprovações por você: tudo o que publica, envia, gasta dinheiro ou exclui dados espera a sua aprovação explícita.',
      ] },
      { id: 'connections', h: 'Contas conectadas (Conexões)', body: [
        'Na página Conexões, você pode conectar contas externas para que seu time configure coisas para o seu produto sem que você precise copiar códigos ou IDs. Conectar é sempre uma escolha sua, feita na própria tela de consentimento do provedor. O que fazemos com cada uma:',
        { ul: [
          '**Google.** Com o seu consentimento, pedimos seu endereço de email e acesso ao Google Site Verification, ao Search Console e ao Google Analytics; ao Tag Manager só se você o adicionar; e ao Google Ads só se você conectar anúncios. Usamos esse acesso apenas para fazer o que você pediu para o seu produto: verificar seu site, adicioná-lo ao Search Console e enviar o sitemap dele, criar uma propriedade do Google Analytics e colocar o ID dela no seu produto, criar e publicar um contêiner do Tag Manager e criar uma tag de conversão para o Google Ads, e então mostrar o status e os resultados dentro do equipe.',
          '**Meta, TikTok, LinkedIn, X, Mailchimp, Bing e GitHub.** Usados apenas para o que você ativa: criar um pixel ou uma tag para o seu produto, ler resultados de anúncios para seus relatórios, publicar um post ou uma newsletter que você aprovou, verificar seu site ou sincronizar o código do seu produto com um repositório privado na sua conta do GitHub.',
          '**Gastos e publicações esperam por você.** Anúncios, posts, newsletters e tudo o que custa dinheiro só acontecem depois que você aprova.',
          '**Guardados com segurança.** Os tokens de acesso são criptografados, vinculados ao seu time e ao provedor, e mantidos apenas enquanto a conexão existir. Quando você desconecta, excluímos nossa cópia; no caso do Google, também pedimos ao Google que revogue o acesso. Você também pode remover o acesso do equipe nas configurações da sua Conta do Google a qualquer momento.',
        ] },
        '**Dados de usuário do Google.** O uso e a transferência, pelo equipe, de informações recebidas das APIs do Google seguem a [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) (Política de Dados do Usuário dos Serviços de API do Google), incluindo os requisitos de Limited Use (uso limitado). Usamos os dados de usuário do Google apenas para fornecer e melhorar os recursos que você vê no equipe; não os vendemos, não os usamos para publicidade nem para treinar modelos de IA; e as pessoas do equipe não os leem, a menos que você nos peça, que seja necessário para segurança ou investigação de abuso, ou que a lei exija. Quando seu time precisa dessas informações para fazer um trabalho que você pediu, elas podem ser processadas pelos provedores de IA citados acima, apenas para produzir esse trabalho.',
      ] },
      { id: 'product-ai', h: 'Recursos de IA no seu produto', body: [
        'Seu time pode adicionar recursos de IA ao produto que constrói para você, como um chatbot de atendimento, respostas de FAQ, tradução ou resumos de avaliações. Quando eles estão ativos:',
        { ul: [
          'O que um visitante digita é enviado a um provedor de IA para gerar a resposta.',
          'O equipe não guarda o que os visitantes digitam nem o que a IA responde. Mantemos apenas contagens, tokens e custos por produto, dia e recurso, para a cobrança e o seu painel de uso.',
          'Para aplicar limites por visitante, mantemos identificadores de usuário e de IP com hash (não legíveis) por no máximo dois dias.',
          'A chave de cada produto fica no servidor dele, e chamadas feitas a partir de um navegador são recusadas.',
        ] },
        'Perante seus visitantes, você é responsável pelo seu produto. A política de privacidade que o equipe escreve para o seu produto ganha uma seção sobre IA, em 8 idiomas, assim que a IA é ativada.',
      ] },
      { id: 'products', h: 'Os produtos que você constrói', body: [
        'Para as pessoas que usam os produtos que seu time constrói (seus visitantes e clientes), você decide o que o produto coleta, e nós processamos esses dados em seu nome para hospedá-lo e operá-lo: o banco de dados, o login, os emails, os arquivos e o analytics integrado, que não usa cookies. Não usamos os dados do seu produto para nossos próprios fins. Seu produto recebe sua própria política de privacidade e seus próprios termos, escritos com base no que ele realmente faz; você é responsável por eles e por responder às solicitações dos seus usuários.',
      ] },
      { id: 'sharing', h: 'Quem processa seus dados', body: [
        'Usamos prestadores de serviços para operar o equipe. Eles processam dados apenas para nos prestar seus serviços:',
        { ul: [
          '**Cloudflare:** hospedagem, bancos de dados, armazenamento de arquivos, envio de emails e registro de domínios.',
          '**Luxor Agent Cloud (antiga Tenki):** as máquinas na nuvem em que seu time trabalha.',
          '**Provedores de IA** como Anthropic, OpenAI e Google: modelos de IA.',
          '**Stripe:** pagamentos do equipe, e pagamentos no seu produto, se você os configurar.',
          '**Google e Apple:** login, se você os usar.',
          '**PostHog:** contagem de visitas sem cookies no equipe.im.',
          '**Contas que você conecta,** conforme descrito acima.',
        ] },
        'Podemos divulgar dados se a lei exigir, ou para proteger os direitos e a segurança dos nossos usuários e do público. Se o equipe algum dia for vendido ou passar por uma fusão, esta política continuará valendo para os seus dados, e avisaremos você.',
      ] },
      { id: 'transfers', h: 'Onde seus dados ficam armazenados', body: [
        'Nossos provedores podem armazenar dados fora do seu país, inclusive nos Estados Unidos. Quando a lei exige, nos baseamos nas salvaguardas de transferência oferecidas pelos nossos provedores, como as cláusulas contratuais padrão da Comissão Europeia.',
      ] },
      { id: 'retention', h: 'Por quanto tempo guardamos', body: [
        { ul: [
          'Seu espaço de trabalho e seus produtos: enquanto sua conta e seu time existirem.',
          'Quando você exclui um time ou sua conta, excluímos os dados dele em até 30 dias. Os backups expiram sozinhos em cerca de 30 dias.',
          'Um time gratuito que ninguém abre há 14 dias pode ser excluído 7 dias depois de enviarmos um aviso por email, a menos que seja aberto antes disso.',
          'Tokens de contas conectadas: até você desconectar ou o time ser excluído.',
          'Registros de cobrança: pelo tempo exigido pelas leis fiscais e contábeis.',
          'Identificadores de visitantes com hash para limites de IA: no máximo dois dias.',
        ] },
        'Você pode baixar seu projeto (código, arquivos e histórico) a qualquer momento na página Projeto.',
      ] },
      { id: 'rights', h: 'Suas escolhas e direitos', body: [
        'Você pode acessar, exportar, corrigir ou excluir seus dados, e encerrar sua conta, escrevendo para [support@equipe.im](mailto:support@equipe.im). Dependendo de onde você mora (por exemplo, pelo RGPD na Europa, pelo RGPD do Reino Unido (UK GDPR) ou pela CCPA na Califórnia), você também pode ter o direito de se opor ao tratamento ou de restringi-lo, o direito à portabilidade dos dados, o direito de retirar o consentimento e o direito de apresentar reclamação a uma autoridade de proteção de dados. Não vendemos nem compartilhamos dados pessoais para publicidade comportamental entre contextos.',
      ] },
      { id: 'security', h: 'Segurança', body: [
        'Usamos criptografia em trânsito, segredos e tokens de acesso criptografados, códigos de login e identificadores de sessão com hash, uma máquina isolada para cada time e acesso com privilégio mínimo. Nenhum sistema é perfeitamente seguro; se um incidente de segurança afetar você, avisaremos conforme a lei exigir. Mais detalhes na nossa [página de segurança](/security/).',
      ] },
      { id: 'cookies', h: 'Cookies e armazenamento local', body: [
        { ul: [
          'O app.equipe.im usa um cookie de sessão de login para manter você conectado.',
          'O equipe.im lembra no seu navegador o tema e o idioma que você escolheu.',
          'A contagem de visitas no equipe.im não usa cookies.',
          'Hoje não usamos cookies de publicidade nem de rastreamento entre sites. Se algum dia adicionarmos tags de publicidade, elas só serão carregadas depois que você concordar em um banner de cookies, e você poderá mudar sua escolha a qualquer momento.',
        ] },
      ] },
      { id: 'children', h: 'Crianças', body: ['O equipe não é destinado a menores de 16 anos, e não coletamos dados deles conscientemente.'] },
      { id: 'changes', h: 'Alterações', body: ['Quando esta política mudar, atualizaremos esta página e a data acima, e avisaremos você diretamente sobre mudanças importantes.'] },
      { id: 'contact', h: 'Contato', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
  terms: {
    title: 'Termos de Serviço — equipe',
    desc: 'Os termos de uso do equipe: sua conta, créditos e planos, renovações e reembolsos, domínios no seu nome, recursos de IA, contas conectadas, pagamentos e uso aceitável.',
    h1: 'Termos de Serviço',
    summaryTitle: 'Em resumo',
    summary: [
      'Você é dono do que traz e do que seu time constrói para você. Você decide o que vai ao ar, o que é enviado e o que custa dinheiro.',
      'O trabalho do seu time é pago com créditos (100 créditos = $1). Créditos comprados e não usados podem ser reembolsados em até 14 dias após a compra.',
      'Os planos são renovados até você cancelar. O cancelamento vale a partir do fim do período que você pagou.',
      'Domínios comprados pelo equipe são registrados no seu nome.',
      'A IA pode errar. Revise o que importa antes que vá a público.',
    ],
    sections: [
      { id: 'agreement', h: 'Acordo', body: [
        'Estes termos regem o seu uso do equipe, um serviço operado pela **Umbriles Inc.** (“nós”), incluindo equipe.im, app.equipe.im, ai.equipe.im e os produtos que hospedamos para você. Ao criar uma conta ou usar o equipe, você concorda com eles e com nossa [Política de Privacidade](/privacy/).',
      ] },
      { id: 'service', h: 'O serviço', body: [
        'O equipe oferece um time de agentes de IA (como um PM, engenheiros, um designer, QA e um analista de dados) que planejam, constroem, lançam, hospedam e melhoram software e trabalhos relacionados para você, com as ferramentas e a infraestrutura que eles usam: hospedagem, bancos de dados, domínios, email, recursos de IA e conexões com outros serviços. Os recursos podem mudar à medida que melhoramos o serviço, e recursos que descrevemos como iniciais ou futuros podem ser limitados ou alterados.',
      ] },
      { id: 'account', h: 'Sua conta e seu time', body: [
        'Você precisa ter pelo menos 16 anos e capacidade para firmar um contrato vinculante. Mantenha seus métodos de login seguros; você é responsável pela atividade na sua conta e no seu time. Avise-nos imediatamente sobre qualquer uso não autorizado.',
        'Um time pode ter proprietários, administradores, membros e visualizadores. Proprietários e administradores gerenciam pessoas, cobrança e limites. O plano Time inclui 5 pessoas; editores extras têm custo adicional, conforme a [página de preços](/pricing/), e convites somente para visualização são gratuitos.',
      ] },
      { id: 'in-charge', h: 'Quem decide é você', body: [
        'Os agentes agem conforme suas instruções e aprovações. Você decide o que é construído, publicado, enviado, comprado ou excluído. O resultado da IA pode estar errado, incompleto ou inseguro: revise o que importa para você, especialmente qualquer coisa pública, financeira, jurídica, médica ou relacionada à segurança. Você é responsável pelos seus produtos, pelo conteúdo deles e pelo cumprimento das leis que se aplicam a eles, como leis de defesa do consumidor, de privacidade e de publicidade.',
      ] },
      { id: 'content', h: 'Seu conteúdo', body: [
        'Você mantém todos os direitos sobre o conteúdo, os dados e o código que fornece e que o equipe produz para você (“seu conteúdo”). Você pode baixar seu projeto a qualquer momento. Você nos concede uma licença limitada para hospedar, processar, copiar e transmitir seu conteúdo apenas na medida necessária para prestar o serviço e mantê-lo seguro. Você confirma que tem os direitos sobre o conteúdo que traz.',
      ] },
      { id: 'credits', h: 'Créditos', body: [
        { ul: [
          '**100 créditos = $1.** O trabalho do seu time é pago com créditos: o trabalho de IA pelo preço de tabela do modelo mais nossa margem, e o computador na nuvem que seu time usa enquanto trabalha. Cada tarefa mostra o que usou, e os pedidos mostram uma estimativa antes.',
          '**Pacotes de créditos** são compras avulsas, válidas por 12 meses a partir da compra.',
          '**Créditos do plano** que vêm com um plano Time mensal acumulam por 2 meses; os créditos mensais de um plano anual acumulam por 3 meses. Créditos que passam da validade são removidos.',
          '**Créditos grátis e bônus** (por exemplo, o crédito de boas-vindas ou bônus promocionais) não têm valor em dinheiro, não podem ser reembolsados nem transferidos e expiram junto com os créditos com que vieram ou conforme mostrado em Cobrança.',
          '**Quando os créditos acabam,** seu time para de trabalhar e continua assim que créditos são adicionados. Você pode definir um limite mensal, e a recarga automática fica desativada, a menos que você a ative.',
        ] },
      ] },
      { id: 'plans', h: 'Planos, renovações e cancelamento', body: [
        { ul: [
          '**Planos mensais** são renovados todo mês até você cancelar.',
          '**Planos anuais** cobrem a taxa básica do plano por um ano e são renovados por mais um ano pelo preço anual mostrado em Cobrança, a menos que você cancele antes da data de renovação. Avisamos você antes de um plano anual ser renovado. Preços promocionais do primeiro ano valem apenas para o primeiro ano.',
          '**Cancele a qualquer momento** em Cobrança. O cancelamento vale a partir do fim do período que você já pagou; seu time e seus produtos continuam funcionando até lá.',
          '**Atraso no pagamento.** Se o pagamento de um plano estiver 7 dias atrasado, o trabalho do seu time é pausado; seu produto no ar continua funcionando enquanto resolvemos a situação com você.',
          '**Mudanças de preço** são anunciadas com antecedência e valem a partir da sua próxima renovação.',
        ] },
      ] },
      { id: 'refunds', h: 'Reembolsos', body: [
        'Créditos não usados de um pacote de créditos podem ser reembolsados em até 14 dias após a compra: escreva para [support@equipe.im](mailto:support@equipe.im). Créditos bônus que vieram com um pacote reembolsado são removidos na mesma proporção. Fora isso, taxas e créditos já pagos não são reembolsados, exceto quando a lei exigir ou quando nós dissermos que sim. Se uma tarefa deu errado, você pode pedir os créditos dela de volta na página Cobrança.',
      ] },
      { id: 'domains', h: 'Domínios', body: [
        { ul: [
          'Um domínio só é comprado depois que você aprova o preço, que mostra o valor do primeiro ano e o de renovação.',
          '**Domínios comprados ou transferidos pelo equipe são registrados no seu nome** (ou no da sua empresa), com você como proprietário legal e a privacidade WHOIS ativada. Valem as regras do registro e do registrador.',
          'Domínios não são renovados automaticamente; a renovação precisa da sua aprovação e do seu pagamento. Um domínio que não é renovado pode expirar e ser perdido, conforme as regras do registro.',
          'Você pode transferir um domínio comprado pelo equipe para outro registrador; escreva para nós e ajudaremos você a fazer isso.',
          'Um domínio que você já tem continua no seu registrador, a menos que você decida transferi-lo para o equipe. Você continua responsável por renová-lo lá.',
        ] },
      ] },
      { id: 'ai-features', h: 'Recursos de IA no seu produto', body: [
        { ul: [
          'Recursos de IA que seu time adiciona ao seu produto (como um chatbot, resumos ou imagens) são pagos com seus créditos pelo preço de tabela do provedor de IA mais 10%, conforme seus visitantes os usam.',
          'Cada produto tem um limite mensal de IA, de $10, a menos que um proprietário ou administrador o altere. Ao atingir o limite, os recursos de IA ficam pausados até o próximo mês ou até o limite ser aumentado. Também há limites por visitante.',
          'Você é responsável por como os recursos de IA são usados no seu produto, por informar seus usuários de que as respostas são escritas por IA e por fazer com que uma pessoa revise o resultado da IA antes que ele seja usado em decisões que afetem alguém de forma significativa.',
          'Podemos pausar os recursos de IA de um produto que esteja sendo usado de forma abusiva ou que viole estes termos.',
        ] },
      ] },
      { id: 'connections', h: 'Contas conectadas', body: [
        'Quando você conecta uma conta externa (por exemplo, Google, Meta ou GitHub), você permite que seu time a use em seu nome para os recursos que você ativa. Anúncios, posts e tudo o que custa dinheiro só acontecem depois que você aprova. Os termos do outro serviço também se aplicam, e você pode desconectar a qualquer momento na página Conexões.',
      ] },
      { id: 'payments', h: 'Pagamentos no seu produto', body: [
        'Seu time pode adicionar uma forma de receber pagamentos ao produto que constrói para você, seja por uma conta Stripe que o equipe abre para o seu negócio (Stripe Connect, “pagamentos pelo equipe”), seja pela sua própria conta Stripe.',
        { ul: [
          '**Você é o vendedor.** Você é o comerciante e o vendedor responsável (merchant of record) por tudo o que é vendido pelo seu produto. O equipe não é parte das suas vendas nem de nenhum contrato entre você e seus clientes.',
          '**Você é responsável pelo que vende:** seus produtos e serviços, preços, recibos, impostos, reembolsos, chargebacks e disputas, atendimento ao cliente e o cumprimento das leis que se aplicam às suas vendas.',
          '**Os termos da Stripe se aplicam.** Pagamentos pelo equipe são processados pela Stripe sob o [Stripe Connected Account Agreement](https://stripe.com/legal/connect-account), que inclui o [Stripe Services Agreement](https://stripe.com/legal/ssa); você o aceita ao configurar os pagamentos, e a Stripe (não o equipe) verifica sua identidade e faz os repasses para o seu banco.',
          '**A taxa do equipe.** Em pagamentos pelo equipe, o equipe retém uma taxa de plataforma de 1% de cada cobrança bem-sucedida, além das taxas da própria Stripe. Ela não é devolvida se você depois reembolsar a cobrança ou perder uma disputa. Quando você usa sua própria conta Stripe, o equipe não cobra taxa. Mostramos a taxa antes de você configurar os pagamentos e avisamos com antecedência antes de alterá-la.',
          '**Pausas.** Podemos pausar pagamentos pelo equipe, ou seus repasses quando a Stripe nos pedir, se suspeitarmos razoavelmente de fraude, de violação destes termos ou dos termos da Stripe, ou se a Stripe ou a lei exigirem.',
        ] },
      ] },
      { id: 'acceptable-use', h: 'Uso aceitável', body: [
        'Não use o equipe, nem os produtos e recursos de IA que ele constrói, para: violar a lei; infringir direitos de terceiros; criar ou espalhar malware ou phishing; enviar spam; se passar por pessoas ou organizações para enganar; atacar, sobrecarregar ou extrair dados automaticamente (scraping) de sistemas para os quais você não tem autorização; burlar segurança, limites ou cobrança; assediar ou prejudicar pessoas; ou gerar conteúdo que sexualize menores. Podemos recusar esses pedidos e suspender trabalhos, produtos ou contas que violem estas regras.',
      ] },
      { id: 'free', h: 'Times gratuitos', body: [
        'Um time gratuito que ninguém abre há 14 dias pode ser excluído 7 dias depois de enviarmos um aviso por email, a menos que seja aberto antes disso. Você pode baixar seu projeto antes que isso aconteça.',
      ] },
      { id: 'third-party', h: 'Serviços de terceiros', body: [
        'O equipe funciona com serviços que nós ou você conectamos, como provedores de IA, hospedagem, registradores de domínio, pagamentos e analytics. Os termos deles também se aplicam, e não somos responsáveis por serviços que não controlamos.',
      ] },
      { id: 'availability', h: 'Disponibilidade e garantias', body: [
        'Trabalhamos para manter o equipe disponível e seus dados seguros, mas o serviço é fornecido “no estado em que se encontra” e “conforme disponível”. Na medida permitida pela lei, nos isentamos de garantias implícitas, incluindo as de comerciabilidade, adequação a uma finalidade específica e não violação.',
      ] },
      { id: 'liability', h: 'Limitação de responsabilidade', body: [
        'Na medida permitida pela lei, não somos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos, nem por lucros cessantes, perda de receita ou de dados. Nossa responsabilidade total por qualquer reclamação é limitada ao valor que você nos pagou nos 12 meses anteriores à reclamação, ou a USD 100 se você não tiver pago nada. Nada nestes termos limita direitos que você tem pelas leis de defesa do consumidor e que não podem ser renunciados.',
      ] },
      { id: 'ending', h: 'Encerramento', body: [
        'Você pode parar de usar o equipe e excluir sua conta a qualquer momento. Podemos suspender ou encerrar seu acesso se você violar estes termos ou se a lei exigir, com aviso prévio quando for razoável. Depois que sua conta for encerrada, você pode exportar seu conteúdo por 30 dias, a menos que a lei impeça.',
      ] },
      { id: 'changes', h: 'Alterações', body: [
        'Podemos atualizar estes termos. Publicaremos a nova versão aqui com uma nova data e avisaremos você com antecedência sobre mudanças importantes. Se você continuar usando o equipe depois que elas entrarem em vigor, você as aceita.',
      ] },
      { id: 'contact', h: 'Contato', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
};

export default ptBR;
