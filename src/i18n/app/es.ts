import type { AppText } from './en';

const es: AppText = {
  ui: {
    newMessage: 'Nuevo mensaje', pm: 'PM', inbox: 'Bandeja', inProgress: 'En curso', tickets: 'Tickets', overview: 'Resumen', roadmap: 'Hoja de ruta',
    projects: 'Proyectos', usage: 'Uso', suggest: 'Sugerir', notRead: 'sin leer aún', team: 'Equipo', thisMac: 'Este Mac',
    allProjects: 'Todos los proyectos', search: 'Buscar · project:web is:blocked', filter: 'Filtrar', context: 'contexto 31 %',
    idle: 'Inactivo', permission: 'Permiso', yourTurn: 'Tu turno', working: 'Trabajando', done: 'Hecho', hours: 'h',
    composer: 'Lo que quieras para pm…', composerBusy: 'Lo que quieras para pm — trabajo fuera de un proyecto o un proyecto nuevo', auto: 'auto', effort: 'esfuerzo',
  },
  lanes: { yourTurn: 'Tu turno', review: 'Revisión', done: 'Hecho', proposed: 'Propuesto', todo: 'Por hacer', inProgress: 'En curso' },
  tickets: [
    'Colores y logo de marca', 'Página de aterrizaje', 'Endpoint de registro por correo', 'Icono de la app', 'Página de precios', 'Reintentar correos de registro fallidos',
    'Conectar la cuenta de analítica', 'Textos A/B de la página de precios', 'Widget de racha diaria', 'API de recordatorio de racha', 'Pantallas de bienvenida, ronda 2',
    'Panel del embudo de registro', 'Preguntas frecuentes de precios', 'Exportar check-ins a CSV', 'Vibración al hacer check-in', 'Enlace de referidos en la página de éxito',
  ],
  activity: { t8: 'Editando pricing.tsx', t9: 'Editando StreakWidget.swift', t10: 'Ejecutando cargo test reminders', t11: 'Leyendo brief.md', t12: 'Leyendo funnel.sql' },
  inbox: {
    toSort: '1 por revisar', toSortHint: 'propuestas del equipo — acepta o descarta',
    permission: 'Permiso', decisions: 'Decisiones', yourTurn: 'Tu turno', proposed: 'Propuesto', startAll: 'Iniciar todo',
    allow: 'Permitir ejecutar un comando', publish: '¿Publicar la página de precios?', paid: '¿Usar una herramienta de pago para el embudo?', connect: 'Conectar la cuenta de analítica',
    postHog: 'Crear un proyecto de PostHog para Loop', fromPm: 'de pm',
  },
  decision: {
    title: 'Decisiones', tag: 'Página de precios', question: '¿Publicar la página de precios?',
    a: 'Publicar ahora (Recomendado)', aText: 'Se publica en loop.app/pricing. Los visitantes verán el plan Pro a $6/mo. No se puede deshacer una vez compartida.',
    b: 'Esperar a elegir el texto A/B', bText: 'Mantiene la página actual; T-8 termina primero',
    own: 'Escribe tu propia respuesta', attach: 'Adjuntar', asks: 'frontend pregunta · T-5', hint: '1–9 elegir · Tab respuesta propia · ⌘↵ siguiente', skip: 'Omitir', submit: 'Enviar',
    publishNow: 'Publicar ahora', hold: 'Esperar',
  },
  permission: {
    label: 'Permiso', title: '¿Permitir ejecutar un comando?', command: 'npm run build', why: 'Para comprobar que la página de precios compila antes de publicarla',
    once: 'Permitir una vez', always: 'Siempre', deny: 'Denegar', reply: 'Responder', note: '“Siempre” añade una regla para npm run', card: 'Tarjeta 1 de 2',
  },
  chat: {
    read: 'Leído website/src/pricing.tsx', split: 'Así lo dividiría. Cuatro tickets, cada uno con un responsable:',
    ticket: 'Ticket', owner: 'Responsable', what: 'Qué',
    rows: ['Dos variantes de titular para la tarjeta Pro, listas para A/B', 'Preguntas frecuentes de precios que resuelvan las dudas principales', 'Panel del embudo, de la visita al primer check-in', 'Enlace de referidos en la página de éxito'],
    before: 'T-5', mid: ', la propia página de precios, ya está en revisión. ', bold: 'Publicarla es decisión tuya', after: ', así que te lo planteo como pregunta. Te aviso cuando ', last: ' tenga números.',
  },
  hero: {
    ask: 'Consigue que más gente se registre en Loop', reply: 'Así lo dividiría. Cuatro tickets, uno por responsable:', reply2: 'T-5 ya está en revisión. Publicarla es decisión tuya, así que te lo planteo como pregunta.',
    working: 'Trabajando', publish: 'Publicar ahora', hold: 'Esperar', liveTitle: 'Live', liveText: 'loop.app/pricing · publicada ahora mismo', approved: 'Aprobaste 1 cosa.',
    tickets: ['Titular A/B de precios', 'Preguntas frecuentes de precios', 'Panel del embudo de registro', 'Enlace de referidos en la página de éxito'],
    caption: 'Dibujado a partir de la app real con datos de demostración. Las barras de progreso y el aviso Live están montados para este loop; en la app verás una línea de actividad.',
    pause: 'Pausar la demo', play: 'Reproducir la demo', label: 'Una línea al PM se convierte en cuatro tickets trabajados a la vez, luego una tarjeta de decisión para ti y después, en vivo.',
  },
};
export default es;
