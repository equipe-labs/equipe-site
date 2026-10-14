import type { Messages } from './en';

const es: Messages = {
  meta: {
    title: 'equipe — un squad de agentes de programación con IA',
    description:
      'equipe es un squad de software con IA de código abierto: agentes por rol usan un tablero y git worktrees aislados. Nada se fusiona sin tu aprobación.',
    ogTitle: 'equipe — un squad de agentes de programación con IA',
    ogDescription:
      'equipe es un squad de software con IA de código abierto: agentes por rol usan un tablero y git worktrees aislados. Nada se fusiona sin tu aprobación.',
    ogImageAlt: 'equipe — un squad de agentes de programación con IA, liderado por una sola persona',
  },
  ui: {
    skip: 'Saltar al contenido',
    primaryNav: 'Principal',
    copy: 'Copiar',
    copied: 'Copiado',
    copyInstall: 'Copiar los comandos de instalación',
    copyCommands: 'Copiar los comandos',
    copyCommand: 'Copiar el comando',
    language: 'Idioma',
    bannerText: 'Ver esta página en {language}',
    bannerClose: 'Cerrar',
  },
  nav: { howItWorks: 'Cómo funciona', getStarted: 'Empezar', faq: 'Preguntas frecuentes', github: 'GitHub' },
  hero: {
    title: 'Tu squad de software con IA, liderado por ti.',
    lead: 'equipe es un squad de software con IA de código abierto: un equipo de agentes por rol (PM, Designer, Frontend, Backend, QA y Datos) que trabaja en tu repositorio a través de un tablero compartido, en git worktrees aislados, y espera la aprobación de una persona antes de fusionar nada.',
    note: 'equipe no es otro bucle de agente. Es la capa de equipo sobre los que ya existen: hoy, Codex y Claude Code.',
    ctaPrimary: 'Ver en GitHub',
    ctaSecondary: 'Empezar',
    chip: 'En fase temprana · Licencia MIT',
  },
  how: {
    title: 'Cómo funciona',
    intro: 'Una persona lidera. El squad trabaja en paralelo. Todo pasa por el tablero.',
    cards: [
      { title: 'Roles', text: 'Cada miembro tiene un rol (PM, Designer, Frontend, Backend, QA o Datos), con un modelo adecuado para ese rol y su propia memoria.' },
      { title: 'Tickets', text: 'El tablero es la única fuente de verdad. Los miembros se coordinan con tickets y eventos inmutables, no con chats, así que cada acción deja algo que puedes ver.' },
      { title: 'Ramas', text: 'Cada miembro trabaja en su propio git worktree aislado, en su propia rama. Así, varios pueden trabajar a la vez en tu repositorio sin tocar tu copia de trabajo.' },
      { title: 'Tu aprobación', text: 'Tú decides en los puntos de aprobación. Nada se fusiona hasta que tú lo digas.' },
    ],
  },
  who: {
    title: 'Para quién es equipe',
    intro: 'equipe es para quienes quieren liderar un pequeño equipo de software formado por agentes de IA, en lugar de dar instrucciones a un solo agente cada vez. Tú marcas el rumbo y revisas el trabajo. El squad lo divide en tickets y lo hace en ramas.',
    points: [
      { lead: 'Ya usas Codex o Claude Code.', text: 'equipe los maneja, y tú inicias sesión como ya lo haces.' },
      { lead: 'Quieres trabajo en paralelo que puedas revisar.', text: 'Cada cambio llega como una rama, nunca como una sorpresa en tu rama principal.' },
      { lead: 'Quieres quedarte con las decisiones.', text: 'Los puntos de aprobación están donde importan, así que la decisión sigue siendo tuya.' },
    ],
    proof: 'Este sitio lo construyó un squad de equipe, en público. Cada cambio empezó como un ticket y llegó como una rama que una persona aceptó.',
  },
  start: {
    title: 'Empezar',
    install: 'Hoy equipe se instala desde el código fuente. Necesitas Rust 1.88+ y git. El motor de Claude necesita además el binario `claude`.',
    run: 'Inicia sesión en un motor, comprueba que está listo y abre la consola del squad:',
    runCode: `equipe login     # inicia sesión en Codex o Claude Code
equipe status    # comprueba si el motor está listo y qué modelos hay disponibles
equipe           # abre la consola del squad`,
    tryIntro: '¿Quieres probarlo antes sin el tablero? Deja que un agente edite tu repositorio en una rama nueva, en un worktree aislado:',
    docs: 'Lee la documentación en GitHub →',
    roadmap: 'Hoja de ruta',
    architecture: 'Arquitectura',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué es equipe?',
        answer:
          'equipe es un squad de software con IA de código abierto. Coordina agentes con roles como PM, Designer, Frontend, Backend, QA y Datos en torno a un tablero compartido. Trabajan en git worktrees aislados, y una persona aprueba antes de que los cambios se fusionen.',
      },
      {
        question: '¿Es equipe otro agente de código con IA?',
        answer:
          'No. equipe es la capa de equipo sobre los motores de agentes que ya existen, no un bucle de agente nuevo. Añade roles, un tablero como única fuente de verdad, git worktrees aislados para trabajar en paralelo y puntos de aprobación humana.',
      },
      {
        question: '¿Con qué motores de IA funciona equipe?',
        answer:
          'Hoy equipe maneja Codex y Claude Code. Está diseñado para admitir más motores a través del Agent Client Protocol.',
      },
      {
        question: '¿Gestiona equipe mis credenciales?',
        answer:
          'Con Claude Code, no. Ejecutas el binario `claude` sin modificar e inicias sesión por tu cuenta, así que se factura a tu propia cuenta. Con Codex, equipe inicia sesión con OAuth usando tu plan de ChatGPT y se identifica con honestidad como `originator: equipe`.',
      },
      {
        question: '¿Cómo instalo equipe?',
        answer:
          'Instálalo desde el código fuente con Rust 1.88+ y git: clona `github.com/equipe-labs/equipe` y ejecuta `cargo install --locked --path crates/cli`. El motor de Claude necesita además el binario de Claude Code.',
      },
      {
        question: '¿Quién aprueba el trabajo?',
        answer:
          'Tú. Cada miembro trabaja en su propia rama, en un worktree aislado, y equipe pide aprobación humana antes de fusionar una rama. El PM acepta el trabajo en el tablero; quien lidera el squad decide qué se incorpora.',
      },
      {
        question: '¿Es equipe gratuito y de código abierto?',
        answer:
          'Sí. equipe se publica bajo la licencia MIT y es de código abierto desde su primer commit. equipe en sí es gratuito. Claude Code y Codex funcionan con tus propias suscripciones o cuentas de Anthropic y OpenAI (ChatGPT).',
      },
      {
        question: '¿Está equipe listo para usarse en producción?',
        answer:
          'equipe está en fase temprana. El daemon del squad se ejecuta en segundo plano, el PM acepta el trabajo, los agentes trabajan en ramas dentro de sandboxes y tú apruebas antes de fusionar. Los traspasos y los canales de comunicación llegarán después, como indica la hoja de ruta.',
      },
    ],
  },
  footer: { license: 'Licencia MIT', built: 'Construido en público por un squad de equipe.' },
  app: {
    nav: { privacy: 'Política de privacidad de la app', support: 'Soporte de la app', home: 'Inicio de equipe' },
    privacy: {
      meta: {
        title: 'Política de privacidad de la app de equipe',
        description: 'Qué datos manejan la app móvil de equipe y su relay: las claves de emparejamiento se quedan en tu teléfono, el relay solo reenvía mensajes sellados y no hay analítica ni rastreo.',
      },
      title: 'Política de privacidad de la app de equipe',
      updated: 'Última actualización: 2026-10-14',
      intro: 'La app de equipe permite que tu teléfono hable con el daemon de equipe de tu propio Mac. Esta página explica con palabras sencillas qué datos manejan la app y el relay de equipe.',
      sections: [
        {
          title: 'En resumen',
          text: 'La app no tiene cuenta, anuncios, analítica ni informes de fallos, y no te rastrea. El trabajo de tu escuadra viaja entre tu teléfono y tu Mac sellado de extremo a extremo.',
          items: [],
        },
        {
          title: 'Lo que se queda en tu teléfono',
          text: 'Esto se guarda solo en tu dispositivo:',
          items: [
            '**Claves de emparejamiento.** El par de claves del teléfono, el token de relay que recibió al emparejarse y la clave pública y el nombre de tu Mac. Están en el Llavero de iOS o, en Android, en un almacenamiento protegido por Android Keystore. La clave privada nunca sale del teléfono; el token de relay solo se envía al relay, para iniciar la sesión del teléfono.',
            '**Cámara.** Se usa únicamente para escanear el código QR de emparejamiento. Las imágenes no se guardan ni se envían a ningún sitio.',
            '**Face ID o huella.** Tu teléfono la comprueba antes de enviar una aprobación. equipe nunca recibe datos biométricos.',
          ],
        },
        {
          title: 'Lo que maneja el relay de equipe',
          text: 'Tu teléfono y tu Mac se conectan a un relay operado por equipe-labs en `relay.equipe.im`. Todo lo que hay entre ellos está sellado de extremo a extremo con claves que solo tienen esos dos dispositivos, así que el relay no puede leer tus tickets, mensajes ni aprobaciones.',
          items: [
            'El relay puede ver que existe una conexión, el tamaño y el momento de los mensajes y los ID aleatorios de tu Mac y tu teléfono. No están vinculados a tu nombre. Solo guarda un hash de cada token, no el token.',
            'El relay funciona en Cloudflare, que como proveedor de red procesa la dirección IP de cada conexión.',
            'No usamos esta información para identificarte ni elaborar perfiles, y no la vendemos ni la compartimos.',
          ],
        },
        {
          title: 'Notificaciones push',
          text: 'Para avisar a tu teléfono cuando la escuadra te necesita, el relay envía una notificación push.',
          items: [
            '**Token push.** El relay guarda el token push de tu teléfono (APNs en iOS, Firebase Cloud Messaging en Android), vinculado al emparejamiento y no a tu nombre.',
            'El texto visible solo dice quién necesita qué. Los detalles viajan sellados y se abren en tu teléfono.',
            'Apple y Google entregan la notificación según sus propias políticas de privacidad. En Android, Firebase Messaging también crea un ID de instalación para tu teléfono.',
          ],
        },
        {
          title: 'Analítica y rastreo',
          text: 'La app no contiene herramientas de analítica, publicidad ni informes de fallos, y no te rastrea en otras apps o sitios web. Esta política cubre la app y el relay. El sitio web equipe.im cuenta las visitas con PostHog sin cookies ni almacenamiento local y no crea perfiles de personas.',
          items: [],
        },
        {
          title: 'Conservación y eliminación',
          text: 'Tú decides cuánto dura un emparejamiento:',
          items: [
            'En la app, desempareja este dispositivo. Así se borran las claves del teléfono y el registro de emparejamiento y el token push del relay.',
            'En tu Mac, ejecuta `equipe devices remove <name>` para revocar un teléfono al instante.',
            'El relay conserva el token push y el registro de emparejamiento solo mientras exista el emparejamiento.',
            'En Android, desinstalar la app elimina sus datos. En iOS, los elementos del Llavero pueden permanecer tras desinstalar, así que desempareja antes.',
          ],
        },
        {
          title: 'Menores',
          text: 'La app no está dirigida a menores y no recopilamos a sabiendas información personal de ellos.',
          items: [],
        },
        {
          title: 'Cambios',
          text: 'Si esta política cambia, actualizaremos la fecha de arriba y esta página.',
          items: [],
        },
        {
          title: 'Contacto',
          text: 'Para preguntas o para pedir que se eliminen datos, escribe a la dirección de abajo o abre una incidencia en GitHub.',
          items: [],
        },
      ],
    },
    support: {
      meta: {
        title: 'Soporte de la app de equipe: empareja tu teléfono',
        description: 'Cómo emparejar la app de equipe con tu Mac con `equipe pair`, respuestas a preguntas frecuentes y cómo contactarnos.',
      },
      title: 'Soporte de la app de equipe',
      intro: 'La app de equipe es un mando a distancia para la escuadra de tu Mac. Te avisa cuando la escuadra te necesita y te deja permitir o rechazar, revisar el trabajo y hablar con el PM. Necesita que equipe esté funcionando en tu Mac, así que instala equipe primero.',
      pairTitle: 'Empareja tu teléfono',
      pairSteps: [
        'Comprueba que equipe está instalado en tu Mac (mira «Empezar» en la página de inicio).',
        'En una terminal de tu Mac, ejecuta el comando de abajo. Aparece un código QR válido durante 5 minutos.',
        'Abre la app de equipe en tu teléfono, inicia el emparejamiento y permite la cámara.',
        'Apunta la cámara al código QR.',
        'Tu Mac pregunta «Pair <tu teléfono>? y/n». Responde `y`. Ya estáis emparejados.',
      ],
      pairCode: 'equipe pair',
      removeTitle: 'Ver o quitar teléfonos emparejados',
      removeText: '`equipe devices` los lista y `equipe devices remove <name>` revoca uno al instante. ¿Perdiste el teléfono? Un solo comando.',
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { question: '¿Necesito equipe en un ordenador?', answer: 'Sí. La app es un mando a distancia del daemon de equipe de tu Mac; sin él no hay nada a lo que conectarse. Instala equipe primero.' },
        { question: 'El código QR no se escanea o dice que caducó.', answer: 'El código vale 5 minutos. Ejecuta `equipe pair` de nuevo para obtener uno nuevo y muestra el QR grande y con brillo en la pantalla.' },
        { question: 'No me llegan notificaciones.', answer: 'Comprueba que las notificaciones de equipe estén permitidas en los ajustes del teléfono y que el daemon esté funcionando en tu Mac (`equipe status`).' },
        { question: 'Perdí o cambié mi teléfono.', answer: 'Ejecuta `equipe devices remove <name>` en tu Mac y empareja el teléfono nuevo con `equipe pair`.' },
        { question: '¿Puede equipe leer mi trabajo a través de la app?', answer: 'No. Los mensajes entre tu teléfono y tu Mac están sellados de extremo a extremo; el relay solo los reenvía. Lee la política de privacidad para más detalles.' },
        { question: '¿Funciona fuera de mi red doméstica?', answer: 'Sí. Tanto el teléfono como el Mac se conectan hacia fuera al relay, así que funcionan Wi-Fi, datos móviles y redes detrás de un router.' },
        { question: '¿Qué teléfonos son compatibles?', answer: 'iPhone con iOS 17 o posterior, y Android 8.0 o posterior.' },
      ],
      contactTitle: 'Contacto',
      contactText: '¿Sigues atascado? Escribe a la dirección de abajo o abre una incidencia en GitHub.',
    },
  },
};

export default es;
