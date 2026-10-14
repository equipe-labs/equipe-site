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
  apps: {
    title: 'Apps para escritorio y móvil',
    intro: 'El squad llegará a tu Mac y a tu móvil, para que sigas el trabajo y tomes las decisiones desde donde estés.',
    soon: 'Próximamente',
    items: [
      { title: 'App de escritorio', platform: 'macOS', points: ['Ver tu squad y sus miembros', 'Hablar con el PM', 'Seguir los tickets en el tablero', 'Pegar capturas de pantalla en la conversación'] },
      { title: 'App móvil', platform: 'iOS · Android', points: ['Aprobar desde el móvil con Face ID o con tu huella', 'Seguir los tickets en el tablero', 'Hablar con el PM', 'Vincularla con tu Mac escaneando un código QR; lo que envías va cifrado de extremo a extremo'] },
    ],
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
};

export default es;
