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
    title: 'Dirige un equipo de agentes de IA. Tú apruebas cada merge.',
    lead: 'Agentes de PM, diseño y desarrollo trabajan desde un tablero compartido, cada uno en su propia rama de tu repositorio. Nada se fusiona sin tu aprobación.',
    ctaPrimary: 'Ver en GitHub',
    chip: 'Fase inicial · Licencia MIT · Compatible con Codex y Claude Code',
    shotAlt: 'Boceto de la app de escritorio de equipe: un agente pide permiso para ejecutar un comando, con los botones Permitir una vez, Siempre y Rechazar',
    shotCaption: 'Boceto de la app · próximamente — un agente se detiene con «necesito permiso» y tú lo apruebas con un clic.',
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
    title: 'Míralo en tu Mac, aprueba desde el móvil.',
    intro: 'El squad también se ve fuera de la terminal. Cuando un agente espera tu visto bueno, el móvil te avisa y apruebas con Face ID. Lo que envías va cifrado de extremo a extremo.',
    soon: 'Próximamente',
    caption: 'Maqueta de la app · próximamente',
    items: [
      { title: 'App de escritorio', platform: 'macOS', text: 'Squad, tablero y chat con el PM en una sola ventana.', alt: 'Maqueta de la app de escritorio: un agente pide permiso para ejecutar un comando, con los botones Permitir una vez, Siempre y Rechazar.' },
      { title: 'App móvil', platform: 'iOS · Android', text: 'Solo te avisa cuando algo necesita tu aprobación.', alt: 'Maqueta de la app móvil: dos solicitudes de aprobación en espera.' },
    ],
    phone: { label: 'APPROVE · 3', askCommand: '¿Ejecutar el comando?', allow: 'Permitir una vez', decline: 'Rechazar', askMerge: '¿Fusionar la rama?', approve: 'Aprobar', changes: 'Pedir cambios' },
    notify: { title: '¿Quieres saber cuándo salen las apps?', text: 'Suscríbete a las versiones en GitHub y recibirás un correo solo con cada nueva versión. Sin registro y sin recoger tu correo.', cta: 'Recibir aviso en GitHub', how: 'En el repositorio equipe-labs/equipe: Watch → Custom → Releases.' },
  },
  start: {
    title: 'Empezar',
    install: 'En macOS y Linux basta una línea. Instala un `equipe` precompilado en `~/.local/bin` (verificado con SHA-256) y lo añade a tu PATH:',
    brew: 'Instala un `equipe` precompilado mediante el tap de Homebrew. Después, actualiza con `brew upgrade equipe`:',
    tabsLabel: 'Método de instalación',
    sourceTitle: 'Compilar desde el código fuente (avanzado)',
    source: '¿Prefieres compilarlo tú? Instálalo desde el código fuente con Rust 1.88+ y git: clona `github.com/equipe-labs/equipe` y ejecuta `cargo install --locked --path crates/cli`. El motor de Claude necesita además el binario `claude`.',
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
          'En macOS y Linux, ejecuta `brew install equipe-labs/tap/equipe`. También puedes usar la línea de install.sh o compilar desde el código fuente (Rust 1.88+); todos los métodos están en Empezar.',
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
