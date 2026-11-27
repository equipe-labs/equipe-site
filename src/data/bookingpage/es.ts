import type { BookingCopy } from './types';

export const es: BookingCopy = {
  page: {
    title: 'Página de reservas gratis: créala en 60 segundos | equipe',
    desc: 'Crea gratis la página de reservas online de tu negocio en un minuto: añade tus servicios, precios y horario, elige un estilo y mírala en vivo mientras escribes. Pruébala sin registrarte.',
    h1: 'Crea tu página de reservas en 60 segundos',
    lead: 'Escribe el nombre de tu negocio, tus servicios y tu horario. Tu página de reservas se crea mientras escribes, y cuando te guste puedes compartirla o publicarla.',
    ogTitle: 'Página de reservas gratis',
    crumbs: 'Herramientas gratis',
  },
  hub: { name: 'Creador de páginas de reservas', blurb: 'Pon tus servicios, precios y horario y obtén una página de reservas que tus clientes pueden usar ya. Gratis, sin registro.', cta: 'Crear mi página de reservas' },
  ed: {
    business: 'Tu negocio', name: 'Nombre del negocio', namePh: 'p. ej. Peluquería Tilo', tagline: 'Una frase sobre él', taglinePh: 'p. ej. Corte y color a cinco minutos de la estación',
    services: 'Servicios', svcName: 'Servicio', svcNamePh: 'p. ej. Corte', duration: 'Duración', price: 'Precio', pricePh: 'p. ej. 25 €',
    addService: 'Añadir un servicio', remove: 'Quitar', maxServices: 'Aquí caben hasta 8 servicios. Tu equipo puede añadir más después.', noServices: 'Añade al menos un servicio para que la gente tenga algo que reservar.',
    hours: 'Horario', open: 'Abierto', closed: 'Cerrado', from: 'Abre', to: 'Cierra', sameAs: 'Copiar el lunes a todos los días abiertos', badHours: 'La hora de cierre debe ser posterior a la de apertura.',
    contact: 'Contacto', phone: 'Teléfono', email: 'Correo', address: 'Dirección', addressPh: 'Calle, ciudad', contactNote: 'Opcional. Se muestra en tu página para que los clientes puedan contactarte.',
    look: 'Estilo', themes: { clean: 'Limpio', warm: 'Cálido', night: 'Noche', bold: 'Intenso' },
    min: '{n} min', hr: '{h} h', hrMin: '{h} h {m} min',
  },
  pv: {
    label: 'Vista previa en vivo', phone: 'Móvil', desktop: 'Ordenador', share: 'Copiar enlace para compartir', copied: 'Enlace copiado',
    shareNote: 'El enlace contiene la propia página, así que no se guarda nada en nuestros servidores. Deja de abrirse a los 7 días.',
    expired: 'Ese enlace de vista previa tiene más de 7 días y ya no se abre. Aquí tienes un ejemplo nuevo para empezar.',
    shared: 'Alguien te ha compartido esta vista previa de una página de reservas. Cambia lo que quieras.', start: 'Empezar de nuevo',
  },
  live: {
    title: '¿Te gusta? Publícala',
    sub: 'Regístrate y tus datos se vienen contigo. Tu equipo de IA publica esta página como primera versión, hace que las reservas se guarden, te envía un correo por cada nueva y activa el pago online en cuanto conectes tu cuenta.',
    btn: 'Publicarla',
    free: 'Gratis para empezar · Sin tarjeta · Sin programar',
    privacy: 'Hasta que pulses el botón, lo que escribes se queda en este navegador.',
  },
  bp: {
    services: 'Servicios', chooseService: 'Elige un servicio', chooseTime: 'Elige día y hora', details: 'Tus datos', yourName: 'Tu nombre', yourContact: 'Teléfono o correo', note: '¿Algo que debamos saber? (opcional)',
    book: 'Reservar', bookFor: 'Reservar {service} · {when}', done: 'Tu reserva está hecha', doneSub: 'Esto es una vista previa. Cuando la página esté publicada, cada reserva se guardará y el negocio recibirá un correo.',
    noTimes: 'No hay horas libres en las próximas dos semanas.', noServices: 'Aquí aparecerán los servicios.', hours: 'Horario', contact: 'Contacto',
    closed: 'Cerrado', preview: 'Vista previa de tu página de reservas', again: 'Reservar otra hora', times: 'Horas', call: 'Llamar', mail: 'Correo',
  },
  how: {
    title: 'Cómo funciona',
    items: [
      { title: 'Rellena cuatro cosas', text: 'Tu nombre, los servicios que ofreces con su duración y precio, tu horario y cómo contactarte.' },
      { title: 'Mira cómo se construye sola', text: 'La vista previa cambia con cada tecla: servicios para elegir, una tira de días, horas libres según tu horario y un formulario corto. Cambia entre cuatro estilos.' },
      { title: 'Compártela o publícala', text: 'Copia un enlace para enseñarla o pulsa Publicarla. Regístrate gratis y tu equipo pone la página online con tus datos ya dentro.' },
    ],
  },
  after: {
    title: 'Qué pasa después de publicarla',
    sub: 'El flujo que suele tener un negocio local, hecho por tu equipo de IA. Tú apruebas todo lo que cuesta dinero o llega a tus clientes.',
    items: [
      { title: 'Tu página sale online', text: 'Publicada en su propia dirección el primer día, con una política de privacidad y unas condiciones que mencionan las reservas.' },
      { title: 'Las reservas se guardan', text: 'Cada reserva llega a tu lista y recibes un correo por cada nueva. Sin hojas de cálculo.' },
      { title: 'Pagos cuando quieras', text: 'Conecta tu cuenta de pagos y la misma página cobra señales o el importe completo. Mientras tanto, la gente sigue reservando.' },
      { title: 'Cada vez mejor', text: 'Tu equipo mira qué servicios se reservan y propone el siguiente cambio en un informe semanal.' },
    ],
  },
  faq: {
    title: 'Preguntas',
    items: [
      { question: '¿El creador de páginas de reservas es gratis?', answer: 'Sí. Crear, previsualizar y compartir la página es gratis y sin registro. Publicarla también empieza gratis: los equipos nuevos reciben 500 créditos y no hace falta tarjeta.' },
      { question: '¿Necesito saber programar?', answer: 'No. Rellenas unos campos y la página se construye con ellos. Después del registro, tu equipo de IA hace el trabajo técnico.' },
      { question: '¿La vista previa acepta reservas reales?', answer: 'Todavía no. La vista previa muestra tal cual cómo será reservar, pero no se envía nada. Las reservas se guardan y te llegan por correo cuando la página está publicada.' },
      { question: '¿Qué pasa con lo que escribo?', answer: 'Se queda en tu navegador. El enlace para compartir lleva la página dentro del propio enlace, así que no se guarda nada en nuestros servidores, y deja de abrirse a los 7 días. Tus datos solo se envían cuando pulsas Publicarla.' },
      { question: '¿Se puede pagar al reservar?', answer: 'Sí, cuando la página esté publicada y conectes una cuenta de pagos. Mientras tanto, las reservas siguen entrando y el pago puede venir después.' },
      { question: '¿Puedo cambiar la página más tarde?', answer: 'Sí. Pídeselo a tu equipo con tus palabras: añadir un servicio, cambiar el horario, poner fotos u otro idioma.' },
    ],
  },
  idea: {
    intro: 'Una página de reservas para mi negocio, {name}.',
    services: 'Servicios: {services}.',
    hours: 'Horario: {hours}.',
    contact: 'Datos de contacto para la página: {contact}.',
    look: 'Estilo: {look}.',
    ask: 'Hice una vista previa con el creador de páginas de reservas de equipe.im. Publícala como primera versión tal como está arriba, luego guarda cada reserva, envíame un correo por cada nueva y añade el pago online cuando conecte mi cuenta.',
    closedDays: 'cerrado {days}',
  },
  sample: {
    name: 'Peluquería Tilo',
    tagline: 'Corte y color a cinco minutos de la estación',
    services: [{ n: 'Corte', d: 45, p: '25 €' }, { n: 'Corte y color', d: 120, p: '75 €' }, { n: 'Arreglo de barba', d: 20, p: '12 €' }],
  },
};
