import type { LegalCopy } from '../legal';

const es: LegalCopy = {
  ui: {
    updated: 'Última actualización: {date}',
    toc: 'En esta página',
    prevails: 'Esta página también está disponible en otros idiomas. Si una traducción difiere de la versión en inglés, se aplica la versión en inglés.',
    notAdvice: 'Lo escribimos con palabras sencillas para que sea fácil de leer. Describe cómo funciona equipe; no es asesoramiento legal para tu propio negocio o producto.',
    privacy: 'Privacidad',
    terms: 'Términos',
    appPolicy: 'Privacidad de la app móvil',
  },
  privacy: {
    title: 'Política de privacidad — equipe',
    desc: 'Qué recopila equipe, por qué, quién lo procesa, cómo manejan los datos las cuentas conectadas como Google y las funciones de IA, cuánto tiempo los conservamos y qué opciones tienes.',
    h1: 'Política de privacidad',
    summaryTitle: 'En resumen',
    summary: [
      'Recopilamos lo que necesitamos para hacer funcionar tu equipo y tus productos, y nada para vender. No vendemos datos personales.',
      'No usamos tu espacio de trabajo, los datos de tus productos ni los datos de tus cuentas conectadas para entrenar modelos de IA.',
      'Las cuentas que conectas, como Google, se usan solo para las funciones que activas. Puedes desconectarlas en cualquier momento.',
      'Funciones de IA en tu producto: equipe no guarda lo que escriben los visitantes ni lo que responde la IA, solo recuentos y costos.',
      'Puedes pedirnos que exportemos o eliminemos tus datos en cualquier momento: [support@equipe.im](mailto:support@equipe.im).',
    ],
    sections: [
      { id: 'who', h: 'Quiénes somos y qué cubre esta política', body: [
        'equipe te da un equipo de agentes de IA que construyen, operan y mejoran tu producto. Lo opera **Umbriles Inc.** («nosotros»). Esta política cubre el sitio web equipe.im, el servicio equipe en app.equipe.im, el servicio de IA en ai.equipe.im y el alojamiento de los productos que construye tu equipo. La app móvil de equipe tiene su propia política breve en [equipe.im/app/privacy](/app/privacy/).',
      ] },
      { id: 'collect', h: 'Qué recopilamos', body: [
        { ul: [
          '**Datos de la cuenta.** Tu dirección de correo electrónico y, si inicias sesión con Google o Apple, tu nombre, tu correo y el identificador de cuenta que esos servicios nos proporcionan. Si usas una llave de acceso (passkey), guardamos solo su clave pública; tu huella digital o tu rostro nunca salen de tu dispositivo.',
          '**Tu espacio de trabajo.** Lo que tú y tu equipo crean en equipe: mensajes con tu equipo, solicitudes, tareas, planes, archivos que subes, el código y el contenido de tus productos, y la configuración.',
          '**Secretos.** Las contraseñas y claves que ingresas para tus productos se guardan cifradas en el almacén de secretos de tu equipo y no se vuelven a mostrar en las conversaciones.',
          '**Cuentas conectadas.** Si conectas una cuenta como Google, Meta o GitHub, guardamos un token de acceso cifrado y el nombre de la cuenta, y lo necesario para usarla por ti. Consulta «Cuentas conectadas» más abajo.',
          '**Pagos.** Los pagos los gestiona Stripe. No vemos ni guardamos números de tarjeta completos. Conservamos registros de facturación: qué se compró, cuándo y el monto.',
          '**Datos de uso y técnicos.** Eventos de inicio de sesión, dirección IP e información del navegador para la seguridad y la prevención de abusos, registros de errores, y cuánto tiempo de IA y de computadora usa tu equipo, para los límites y la facturación.',
          '**Mensajes que nos envías.** Lo que envías cuando escribes a soporte.',
          '**Sitio web.** equipe.im cuenta las visitas con PostHog sin cookies y sin crear perfiles personales, y registra cómo nos encontró un visitante (por ejemplo, el sitio de referencia o la campaña).',
        ] },
      ] },
      { id: 'use', h: 'Cómo lo usamos', body: [
        { ul: [
          'Para prestar el servicio: hacer funcionar tu equipo, construir y alojar tus productos, y mostrarte tu espacio de trabajo.',
          'Para mantenerlo seguro: verificar que eres tú, prevenir abusos y fraudes, e investigar problemas.',
          'Para medir el uso con fines de límites y facturación, y para mejorar equipe.',
          'Para contactarte sobre tu cuenta, la seguridad, la facturación y cambios importantes. Correos de marketing solo con tu consentimiento; puedes darte de baja en cualquier momento.',
        ] },
        'No vendemos tus datos personales y no usamos tu espacio de trabajo, los datos de tus productos ni los datos de las cuentas conectadas para entrenar modelos de IA.',
        'Donde se aplique el RGPD (GDPR) o leyes similares, nos basamos en: nuestro contrato contigo (para prestar el servicio), nuestros intereses legítimos (seguridad, prevención de abusos, mejora de equipe), tu consentimiento (por ejemplo, para correos de marketing o cookies publicitarias si alguna vez las usamos) y obligaciones legales (por ejemplo, conservar registros de facturación).',
      ] },
      { id: 'ai', h: 'Cómo procesa la IA tu trabajo', body: [
        'Tu equipo trabaja enviando el contenido que necesita a modelos de IA operados por proveedores de IA que usamos en tu nombre (como Anthropic, OpenAI y Google). Ellos lo procesan para generar respuestas según sus condiciones de API para empresas, que no usan ese contenido para entrenar sus modelos. equipe elige el modelo para cada paso.',
        'Los agentes nunca deciden aprobaciones por ti: todo lo que publica, envía, gasta dinero o elimina datos espera tu aprobación explícita.',
      ] },
      { id: 'connections', h: 'Cuentas conectadas (Conexiones)', body: [
        'En la página Conexiones puedes conectar cuentas externas para que tu equipo configure cosas para tu producto sin que tengas que copiar códigos ni identificadores. Conectar es siempre tu decisión, y se hace en la propia pantalla de consentimiento del proveedor. Lo que hacemos con cada una:',
        { ul: [
          '**Google.** Con tu consentimiento, pedimos tu dirección de correo electrónico y acceso a Google Site Verification, Search Console y Google Analytics; a Tag Manager solo si lo agregas; y a Google Ads solo si conectas anuncios. Usamos este acceso solo para hacer lo que pediste para tu producto: verificar tu sitio, agregarlo a Search Console y enviar su mapa del sitio, crear una propiedad de Google Analytics y poner su ID en tu producto, crear y publicar un contenedor de Tag Manager, y crear una etiqueta de conversión para Google Ads; luego te mostramos el estado y los resultados dentro de equipe.',
          '**Meta, TikTok, LinkedIn, X, Mailchimp, Bing y GitHub.** Se usan solo para lo que activas: crear un píxel o una etiqueta para tu producto, leer resultados de anuncios para tus informes, publicar un post o una newsletter que aprobaste, verificar tu sitio o sincronizar el código de tu producto con un repositorio privado en tu cuenta de GitHub.',
          '**El gasto y las publicaciones esperan por ti.** Los anuncios, los posts, las newsletters y todo lo que cuesta dinero ocurren solo después de que los apruebas.',
          '**Guardados de forma segura.** Los tokens de acceso están cifrados, vinculados a tu equipo y al proveedor, y se conservan solo mientras existe la conexión. Cuando desconectas una cuenta, eliminamos nuestra copia; en el caso de Google, también le pedimos a Google que revoque el acceso. También puedes quitar el acceso de equipe en la configuración de tu cuenta de Google en cualquier momento.',
        ] },
        '**Datos de usuario de Google.** El uso y la transferencia por parte de equipe de la información recibida de las API de Google se ajustan a la [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) (Política de datos de usuario de los servicios de API de Google), incluidos los requisitos de Limited Use (uso limitado). Usamos los datos de usuario de Google solo para ofrecer y mejorar las funciones que puedes ver en equipe; no los vendemos, no los usamos para publicidad ni para entrenar modelos de IA; y las personas de equipe no los leen, salvo que nos lo pidas, que sea necesario para la seguridad o la investigación de abusos, o que lo exija la ley. Cuando tu equipo necesita esta información para hacer un trabajo que pediste, puede ser procesada por los proveedores de IA mencionados arriba, solo para producir ese trabajo.',
      ] },
      { id: 'product-ai', h: 'Funciones de IA en tu producto', body: [
        'Tu equipo puede agregar funciones de IA al producto que construye para ti, como un chatbot de atención, respuestas de FAQ, traducción o resúmenes de reseñas. Cuando están activadas:',
        { ul: [
          'Lo que escribe un visitante se envía a un proveedor de IA para generar la respuesta.',
          'equipe no guarda lo que escriben los visitantes ni lo que responde la IA. Solo conservamos recuentos, tokens y costos por producto, día y función, para la facturación y tu panel de uso.',
          'Para aplicar límites por visitante, conservamos identificadores de usuario y de IP con hash (no legibles) durante dos días como máximo.',
          'La clave de cada producto se queda en su servidor, y las llamadas desde un navegador se rechazan.',
        ] },
        'Frente a tus visitantes, tú eres responsable de tu producto. La política de privacidad que equipe redacta para tu producto incorpora una sección sobre IA, en 8 idiomas, en cuanto se activa la IA.',
      ] },
      { id: 'products', h: 'Los productos que construyes', body: [
        'Para las personas que usan los productos que construye tu equipo (tus visitantes y clientes), tú decides qué recopila el producto, y nosotros procesamos esos datos en tu nombre para alojarlo y hacerlo funcionar: su base de datos, el inicio de sesión, los correos, los archivos y la analítica integrada, que no usa cookies. No usamos los datos de tu producto para nuestros propios fines. Tu producto recibe su propia política de privacidad y sus propios términos, redactados a partir de lo que realmente hace; tú eres responsable de ellos y de responder a las solicitudes de tus usuarios.',
      ] },
      { id: 'sharing', h: 'Quién procesa tus datos', body: [
        'Usamos proveedores de servicios para operar equipe. Procesan los datos solo para prestarnos sus servicios:',
        { ul: [
          '**Cloudflare:** alojamiento, bases de datos, almacenamiento de archivos, envío de correos y registro de dominios.',
          '**Luxor Agent Cloud (antes Tenki):** las máquinas en la nube en las que trabaja tu equipo.',
          '**Proveedores de IA** como Anthropic, OpenAI y Google: modelos de IA.',
          '**Stripe:** pagos de equipe, y pagos en tu producto si los configuras.',
          '**Google y Apple:** inicio de sesión, si los usas.',
          '**PostHog:** recuento de visitas sin cookies en equipe.im.',
          '**Las cuentas que conectas,** como se describe arriba.',
        ] },
        'Podemos divulgar datos si la ley lo exige, o para proteger los derechos y la seguridad de nuestros usuarios y del público. Si equipe llegara a venderse o fusionarse, esta política seguiría aplicándose a tus datos, y te lo informaríamos.',
      ] },
      { id: 'transfers', h: 'Dónde se guardan tus datos', body: [
        'Nuestros proveedores pueden guardar datos fuera de tu país, incluso en Estados Unidos. Cuando la ley lo exige, nos basamos en las garantías para transferencias que ofrecen nuestros proveedores, como las cláusulas contractuales tipo de la Comisión Europea.',
      ] },
      { id: 'retention', h: 'Cuánto tiempo lo conservamos', body: [
        { ul: [
          'Tu espacio de trabajo y tus productos: mientras existan tu cuenta y tu equipo.',
          'Cuando eliminas un equipo o tu cuenta, eliminamos sus datos en un plazo de 30 días. Las copias de seguridad caducan por sí solas en unos 30 días.',
          'Un equipo gratuito que nadie ha abierto durante 14 días puede eliminarse 7 días después de que enviemos un aviso por correo, a menos que se abra antes.',
          'Tokens de cuentas conectadas: hasta que desconectes la cuenta o se elimine el equipo.',
          'Registros de facturación: el tiempo que exijan las leyes fiscales y contables.',
          'Identificadores de visitantes con hash para los límites de IA: dos días como máximo.',
        ] },
        'Puedes descargar tu proyecto (código, archivos e historial) en cualquier momento desde la página Proyecto.',
      ] },
      { id: 'rights', h: 'Tus opciones y derechos', body: [
        'Puedes acceder a tus datos, exportarlos, corregirlos o eliminarlos, y cerrar tu cuenta, escribiendo a [support@equipe.im](mailto:support@equipe.im). Según dónde vivas (por ejemplo, en virtud del RGPD en Europa, el RGPD del Reino Unido (UK GDPR) o la CCPA en California), también puedes tener derecho a oponerte al tratamiento o a limitarlo, a la portabilidad de los datos, a retirar tu consentimiento y a presentar una reclamación ante una autoridad de protección de datos. No vendemos ni compartimos datos personales para publicidad conductual de contexto cruzado.',
      ] },
      { id: 'security', h: 'Seguridad', body: [
        'Usamos cifrado en tránsito, secretos y tokens de acceso cifrados, códigos de inicio de sesión e identificadores de sesión con hash, una máquina aislada para cada equipo y acceso con privilegios mínimos. Ningún sistema es perfectamente seguro; si una brecha de seguridad te afecta, te lo informaremos según lo exija la ley. Más información en nuestra [página de seguridad](/security/).',
      ] },
      { id: 'cookies', h: 'Cookies y almacenamiento local', body: [
        { ul: [
          'app.equipe.im usa una cookie de sesión para mantener tu sesión iniciada.',
          'equipe.im recuerda en tu navegador el tema y el idioma que elegiste.',
          'El recuento de visitas en equipe.im no usa cookies.',
          'Hoy no usamos cookies publicitarias ni de seguimiento entre sitios. Si alguna vez agregamos etiquetas publicitarias, se cargarán solo después de que lo aceptes en un banner de cookies, y podrás cambiar tu elección en cualquier momento.',
        ] },
      ] },
      { id: 'children', h: 'Menores', body: ['equipe no está dirigido a menores de 16 años, y no recopilamos sus datos a sabiendas.'] },
      { id: 'changes', h: 'Cambios', body: ['Cuando esta política cambie, actualizaremos esta página y la fecha de arriba, y te informaremos directamente de los cambios importantes.'] },
      { id: 'contact', h: 'Contacto', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
  terms: {
    title: 'Términos del servicio — equipe',
    desc: 'Los términos para usar equipe: tu cuenta, créditos y planes, renovaciones y reembolsos, dominios a tu nombre, funciones de IA, cuentas conectadas, pagos y uso aceptable.',
    h1: 'Términos del servicio',
    summaryTitle: 'En resumen',
    summary: [
      'Eres dueño de lo que aportas y de lo que tu equipo construye para ti. Tú decides qué sale en vivo, qué se envía y qué cuesta dinero.',
      'El trabajo de tu equipo se paga con créditos (100 créditos = $1). Los créditos comprados que no hayas usado son reembolsables dentro de los 14 días posteriores a la compra.',
      'Los planes se renuevan hasta que los canceles. La cancelación surte efecto al final del período que pagaste.',
      'Los dominios comprados a través de equipe se registran a tu nombre.',
      'La IA puede equivocarse. Revisa lo importante antes de que se haga público.',
    ],
    sections: [
      { id: 'agreement', h: 'Acuerdo', body: [
        'Estos términos rigen tu uso de equipe, un servicio operado por **Umbriles Inc.** («nosotros»), incluidos equipe.im, app.equipe.im, ai.equipe.im y los productos que alojamos para ti. Al crear una cuenta o usar equipe, aceptas estos términos y nuestra [Política de privacidad](/privacy/).',
      ] },
      { id: 'service', h: 'El servicio', body: [
        'equipe proporciona un equipo de agentes de IA (como un PM, ingenieros, un diseñador, QA y un analista de datos) que planifican, construyen, lanzan, alojan y mejoran software y trabajos relacionados para ti, con las herramientas y la infraestructura que usan: alojamiento, bases de datos, dominios, correo electrónico, funciones de IA y conexiones con otros servicios. Las funciones pueden cambiar a medida que mejoramos el servicio, y las funciones que describimos como tempranas o próximas pueden estar limitadas o cambiar.',
      ] },
      { id: 'account', h: 'Tu cuenta y tu equipo', body: [
        'Debes tener al menos 16 años y capacidad para celebrar un contrato vinculante. Mantén seguros tus métodos de inicio de sesión; eres responsable de la actividad realizada con tu cuenta y en tu equipo. Avísanos de inmediato sobre cualquier uso no autorizado.',
        'Un equipo puede tener propietarios, administradores, miembros y observadores. Los propietarios y administradores gestionan las personas, la facturación y los límites. El plan Equipo incluye 5 personas; los editores adicionales tienen un costo extra, como se indica en la [página de precios](/pricing/), y las invitaciones de solo lectura son gratuitas.',
      ] },
      { id: 'in-charge', h: 'Tú tienes el control', body: [
        'Los agentes actúan según tus instrucciones y aprobaciones. Tú decides qué se construye, publica, envía, compra o elimina. El resultado de la IA puede ser incorrecto, incompleto o inseguro: revisa lo que te importe, especialmente todo lo que sea público, financiero, legal, médico o relacionado con la seguridad. Eres responsable de tus productos, de su contenido y de que cumplan las leyes que les aplican, como las leyes de protección al consumidor, de privacidad y de publicidad.',
      ] },
      { id: 'content', h: 'Tu contenido', body: [
        'Conservas todos los derechos sobre el contenido, los datos y el código que proporcionas y que equipe produce para ti («tu contenido»). Puedes descargar tu proyecto en cualquier momento. Nos otorgas una licencia limitada para alojar, procesar, copiar y transmitir tu contenido solo en la medida necesaria para prestar el servicio y mantenerlo seguro. Confirmas que tienes los derechos sobre el contenido que aportas.',
      ] },
      { id: 'credits', h: 'Créditos', body: [
        { ul: [
          '**100 créditos = $1.** El trabajo de tu equipo se paga con créditos: el trabajo de IA al precio de lista del modelo más nuestro margen, y la computadora en la nube que usa tu equipo mientras trabaja. Cada tarea muestra lo que usó, y las solicitudes muestran primero una estimación.',
          '**Los paquetes de créditos** son compras únicas, válidas durante 12 meses desde la compra.',
          '**Los créditos del plan** que vienen con un plan Equipo mensual se acumulan durante 2 meses; los créditos mensuales de un plan anual se acumulan durante 3 meses. Los créditos que superan su fecha de vencimiento se eliminan.',
          '**Los créditos gratuitos y de bonificación** (por ejemplo, el crédito de bienvenida o las bonificaciones promocionales) no tienen valor en efectivo, no se pueden reembolsar ni transferir, y vencen junto con los créditos con los que llegaron o según se indique en Facturación.',
          '**Cuando se acaban los créditos,** tu equipo deja de trabajar y continúa en cuanto se agregan créditos. Puedes fijar un tope mensual, y la recarga automática está desactivada a menos que la actives.',
        ] },
      ] },
      { id: 'plans', h: 'Planes, renovaciones y cancelación', body: [
        { ul: [
          '**Los planes mensuales** se renuevan cada mes hasta que los canceles.',
          '**Los planes anuales** cubren la tarifa base del plan durante un año y se renuevan por otro año al precio anual que se muestra en Facturación, a menos que canceles antes de la fecha de renovación. Te avisamos antes de que se renueve un plan anual. Los precios promocionales del primer año se aplican solo al primer año.',
          '**Cancela en cualquier momento** en Facturación. La cancelación surte efecto al final del período que ya pagaste; tu equipo y tus productos siguen funcionando hasta entonces.',
          '**Pago atrasado.** Si el pago de un plan lleva 7 días vencido, el trabajo de tu equipo se pausa; tu producto en vivo sigue en línea mientras lo resolvemos contigo.',
          '**Los cambios de precio** se anuncian con anticipación y se aplican a partir de tu próxima renovación.',
        ] },
      ] },
      { id: 'refunds', h: 'Reembolsos', body: [
        'Los créditos no usados de un paquete de créditos son reembolsables dentro de los 14 días posteriores a la compra: escribe a [support@equipe.im](mailto:support@equipe.im). Los créditos de bonificación que vinieron con un paquete reembolsado se eliminan en la misma proporción. Fuera de eso, las tarifas y los créditos ya pagados no se reembolsan, salvo cuando la ley lo exija o cuando nosotros lo indiquemos. Si una tarea salió mal, puedes pedir que te devuelvan sus créditos en la página Facturación.',
      ] },
      { id: 'domains', h: 'Dominios', body: [
        { ul: [
          'Un dominio se compra solo después de que apruebas su precio, que muestra el precio del primer año y el de renovación.',
          '**Los dominios comprados o transferidos a través de equipe se registran a tu nombre** (o al de tu empresa), contigo como propietario legal y con la privacidad WHOIS activada. Se aplican las normas del registro y del registrador.',
          'Los dominios no se renuevan automáticamente; la renovación requiere tu aprobación y tu pago. Un dominio que no se renueva puede vencer y perderse según las normas del registro.',
          'Puedes transferir un dominio comprado a través de equipe a otro registrador; escríbenos y te ayudaremos a hacerlo.',
          'Un dominio que ya tienes se queda con tu registrador, a menos que decidas transferirlo a equipe. Sigues siendo responsable de renovarlo allí.',
        ] },
      ] },
      { id: 'ai-features', h: 'Funciones de IA en tu producto', body: [
        { ul: [
          'Las funciones de IA que tu equipo agrega a tu producto (como un chatbot, resúmenes o imágenes) se pagan con tus créditos al precio de lista del proveedor de IA más un 10 %, a medida que tus visitantes las usan.',
          'Cada producto tiene un límite mensual de IA, de $10 a menos que un propietario o administrador lo cambie. Al llegar al límite, las funciones de IA se pausan hasta el mes siguiente o hasta que se suba el límite. También hay límites por visitante.',
          'Eres responsable de cómo se usan las funciones de IA en tu producto, de informar a tus usuarios que las respuestas están escritas por IA y de que una persona revise el resultado de la IA antes de usarlo para decisiones que afecten significativamente a alguien.',
          'Podemos pausar las funciones de IA de un producto que esté siendo objeto de abuso o que incumpla estos términos.',
        ] },
      ] },
      { id: 'connections', h: 'Cuentas conectadas', body: [
        'Cuando conectas una cuenta externa (por ejemplo, Google, Meta o GitHub), permites que tu equipo la use en tu nombre para las funciones que activas. Los anuncios, los posts y todo lo que cuesta dinero ocurren solo después de que los apruebas. También se aplican los términos del otro servicio, y puedes desconectarla en cualquier momento en la página Conexiones.',
      ] },
      { id: 'payments', h: 'Pagos en tu producto', body: [
        'Tu equipo puede agregar una forma de cobrar al producto que construye para ti, ya sea mediante una cuenta de Stripe que equipe abre para tu negocio (Stripe Connect, «pagos a través de equipe») o mediante tu propia cuenta de Stripe.',
        { ul: [
          '**Tú eres el vendedor.** Eres el comerciante y el vendedor registrado (merchant of record) de todo lo que se vende a través de tu producto. equipe no es parte de tus ventas ni de ningún contrato entre tú y tus clientes.',
          '**Eres responsable de lo que vendes:** tus productos y servicios, precios, recibos, impuestos, reembolsos, contracargos y disputas, atención al cliente, y el cumplimiento de las leyes que se aplican a tus ventas.',
          '**Se aplican los términos de Stripe.** Los pagos a través de equipe los procesa Stripe conforme al [Stripe Connected Account Agreement](https://stripe.com/legal/connect-account), que incluye el [Stripe Services Agreement](https://stripe.com/legal/ssa); lo aceptas cuando configuras los pagos, y Stripe (no equipe) verifica tu identidad y te transfiere los pagos a tu cuenta bancaria.',
          '**La comisión de equipe.** En los pagos a través de equipe, equipe retiene una comisión de plataforma del 1 % de cada cobro exitoso, además de las comisiones propias de Stripe. No se devuelve si más adelante reembolsas el cobro o pierdes una disputa. Cuando usas tu propia cuenta de Stripe, equipe no cobra ninguna comisión. Mostramos la comisión antes de que configures los pagos y avisamos con anticipación antes de cambiarla.',
          '**Pausas.** Podemos pausar los pagos a través de equipe, o las transferencias a tu banco cuando Stripe nos lo pida, si sospechamos razonablemente de fraude, de un incumplimiento de estos términos o de los términos de Stripe, o si Stripe o la ley lo exigen.',
        ] },
      ] },
      { id: 'acceptable-use', h: 'Uso aceptable', body: [
        'No uses equipe, ni los productos y funciones de IA que construye, para: infringir la ley; vulnerar los derechos de otros; crear o propagar malware o phishing; enviar spam; hacerte pasar por personas u organizaciones para engañar; atacar, extraer datos de forma automatizada (scraping) o sobrecargar sistemas para los que no tienes autorización; eludir la seguridad, los límites o la facturación; acosar o dañar a personas; o generar contenido que sexualice a menores. Podemos rechazar ese tipo de solicitudes y suspender trabajos, productos o cuentas que incumplan estas reglas.',
      ] },
      { id: 'free', h: 'Equipos gratuitos', body: [
        'Un equipo gratuito que nadie ha abierto durante 14 días puede eliminarse 7 días después de que enviemos un aviso por correo, a menos que se abra antes. Puedes descargar tu proyecto antes de eso.',
      ] },
      { id: 'third-party', h: 'Servicios de terceros', body: [
        'equipe funciona con servicios que conectamos nosotros o que conectas tú, como proveedores de IA, alojamiento, registradores de dominios, pagos y analítica. También se aplican sus términos, y no somos responsables de servicios que no controlamos.',
      ] },
      { id: 'availability', h: 'Disponibilidad y garantías', body: [
        'Trabajamos para mantener equipe disponible y tus datos seguros, pero el servicio se proporciona «tal cual» y «según disponibilidad». En la medida en que la ley lo permita, renunciamos a las garantías implícitas, incluidas las de comerciabilidad, idoneidad para un fin determinado y no infracción.',
      ] },
      { id: 'liability', h: 'Limitación de responsabilidad', body: [
        'En la medida en que la ley lo permita, no somos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de la pérdida de ganancias, ingresos o datos. Nuestra responsabilidad total por cualquier reclamación se limita al monto que nos pagaste en los 12 meses anteriores a la reclamación, o a USD 100 si no has pagado. Nada en estos términos limita los derechos que tengas según las leyes de protección al consumidor y a los que no se pueda renunciar.',
      ] },
      { id: 'ending', h: 'Terminación', body: [
        'Puedes dejar de usar equipe y eliminar tu cuenta en cualquier momento. Podemos suspender o terminar tu acceso si incumples estos términos o si la ley lo exige, con aviso previo cuando sea razonable. Después de que termine tu cuenta, puedes exportar tu contenido durante 30 días, salvo que la ley lo impida.',
      ] },
      { id: 'changes', h: 'Cambios', body: [
        'Podemos actualizar estos términos. Publicaremos la nueva versión aquí con una nueva fecha y te informaremos con anticipación de los cambios importantes. Si sigues usando equipe después de que entren en vigor, los aceptas.',
      ] },
      { id: 'contact', h: 'Contacto', body: ['Umbriles Inc. · [support@equipe.im](mailto:support@equipe.im)'] },
    ],
  },
};

export default es;
