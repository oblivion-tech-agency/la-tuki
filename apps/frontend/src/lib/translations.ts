export type Lang = 'es' | 'en';

export interface MarqueeItem {
  text: string;
  icon: string;
}

export interface TermsSection {
  title: string;
  p1: string;
  p2?: string;
  p3?: string;
  p2Highlight?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Translations {
  nav: {
    tickets: string;
    dates: string;
    contact: string;
  };
  hero: {
    tagline: string;
  };
  events: {
    sectionTag: string;
    title: string;
    subtitle: string;
    soldOut: string;
    tickets: string;
    comingSoon: string;
  };
  manifesto: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  playlist: {
    tag: string;
    title: string;
    openSpotify: string;
  };
  marquee: MarqueeItem[];
  team: {
    title: string;
  };
  faq: {
    title: string;
    termsTitle: string;
    termsIntro: string;
    sections: TermsSection[];
  };
  faqs: FaqItem[];
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    connectionError: string;
    defaultError: string;
  };
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      tickets: 'CONSEGUÍ TUS ENTRADAS',
      dates: 'FECHAS',
      contact: 'CONTACTO',
    },
    hero: {
      tagline: 'LO SIMPLE GARPA',
    },
    events: {
      sectionTag: 'TOUR 2026',
      title: 'AGENDÁ ESTAS FECHAS',
      subtitle: 'Próximos paraderos de la\ncarvana más grande del país',
      soldOut: 'AGOTADO',
      tickets: 'TICKETS',
      comingSoon: 'PRÓXIMAMENTE',
    },
    manifesto: {
      title: 'EL MANIFIESTO',
      p1: 'es una experiencia inmersiva que conecta generaciones a través del reggaetón y la cumbia old que todos sabemos cantar. Promovemos el respeto, el consentimiento y el cuidado entre todos.',
      p2: 'No es una moda: es un momento de conexión con ustedes y los recuerdos que se repiten en cada ciudad donde aterrizamos.',
      p3: 'Creamos noches con identidad propia, mucha energía y recuerdos que hacen revivir los 2000.',
      p4: 'No es una fiesta más, es un momento que te enciende en cada fecha y se guarda para siempre.',
    },
    playlist: {
      tag: 'NUESTRA MÚSICA',
      title: 'LA PLAYLIST',
      openSpotify: 'Abrir en Spotify',
    },
    marquee: [
      { text: '500+ EVENTOS ORGANIZADOS', icon: 'star' },
      { text: '100K+ FANS ACTIVOS', icon: 'bolt' },
      { text: '20+ CIUDADES', icon: 'public' },
      { text: 'EL MEJOR PERREO DE ARGENTINA', icon: 'favorite' },
    ],
    team: {
      title: 'EL EQUIPO',
    },
    faq: {
      title: 'F.A.Q.',
      termsTitle: 'Términos y Condiciones',
      termsIntro:
        'Cuando sacás tu entrada para La Tuki, ya sea comprando por la ticketera oficial o ingresando con invitación/cortesía autorizada, entendemos que aceptás estas condiciones básicas para que todos vivamos la noche como corresponde.',
      sections: [
        {
          title: 'Entradas',
          p1: 'Las entradas son válidas únicamente si fueron adquiridas a través de los canales oficiales comunicados por La Tuki en cada fecha.',
          p2: 'Si comprás entradas por reventa no autorizada, pueden ser rechazadas en el ingreso. En esos casos, la organización no puede hacerse responsable por duplicaciones, estafas o inconvenientes derivados de compras fuera de los medios oficiales.',
          p3: 'Nuestro consejo: usá siempre los links publicados en nuestras redes.',
        },
        {
          title: 'Edad de ingreso',
          p1: 'El ingreso respeta la edad mínima establecida según la normativa local y el venue de cada edición. Puede solicitarse DNI físico o Mi Argentina al ingresar.',
        },
        {
          title: 'No se realizan devoluciones',
          p1: 'En caso de inasistencia del comprador, errores al momento de la compra, confusión en la selección de fecha o ciudad, o cualquier motivo ajeno a la organización.',
          p2: 'En caso de reintegro, el mismo queda sujeto a lo que comuniquemos oficialmente por nuestras redes sociales.',
          p2Highlight: 'En caso de reintegro',
        },
      ],
    },
    faqs: [
      {
        question: '¿Edad mínima?',
        answer:
          'El ingreso respeta la edad mínima establecida según la normativa local y el venue de cada edición. Puede solicitarse DNI físico o Mi Argentina al ingresar.',
      },
      {
        question: '¿Entradas y devoluciones?',
        answer:
          'Las entradas son válidas únicamente si fueron adquiridas a través de los canales oficiales comunicados por La Tuki en cada fecha. Si comprás entradas por reventa no autorizada, pueden ser rechazadas en el ingreso. En esos casos, la organización no puede hacerse responsable por duplicaciones, estafas o inconvenientes derivados de compras fuera de los medios oficiales. Nuestro consejo: usá siempre los links publicados en nuestras redes.',
      },
      {
        question: '¿Se realizan devoluciones?',
        answer:
          'No se realizan devoluciones en caso de inasistencia del comprador, errores al momento de la compra, confusión en la selección de fecha o ciudad, o cualquier motivo ajeno a la organización. En caso de reintegro, el mismo queda sujeto a lo que comuniquemos oficialmente por nuestras redes sociales.',
      },
    ],
    contact: {
      title: 'Contactá al equipo',
      subtitle:
        'Si querés llevar La Tuki a tu ciudad, sumar tu marca como sponsor o tenés alguna consulta, escribinos.\nNos encanta crear cosas grandes en equipo.',
      formTitle: 'CONTACTÁ AL EQUIPO',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'ESCRIBÍ TU NOMBRE',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'TU@CORREO.COM',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'CONTANOS TODO...',
      submit: 'ENVIAR MENSAJE',
      sending: 'ENVIANDO...',
      successTitle: '¡Mensaje enviado!',
      successText: 'Nos ponemos en contacto a la brevedad.',
      sendAnother: 'Enviar otro mensaje',
      connectionError: 'Error de conexión. Intentá de nuevo.',
      defaultError: 'Error al enviar el mensaje.',
    },
  },

  en: {
    nav: {
      tickets: 'GET YOUR TICKETS',
      dates: 'DATES',
      contact: 'CONTACT',
    },
    hero: {
      tagline: 'KEEP IT SIMPLE',
    },
    events: {
      sectionTag: 'TOUR 2026',
      title: 'MARK THESE DATES',
      subtitle: "Next stops of the\ncountry's biggest caravan",
      soldOut: 'SOLD OUT',
      tickets: 'TICKETS',
      comingSoon: 'COMING SOON',
    },
    manifesto: {
      title: 'THE MANIFESTO',
      p1: 'is an immersive experience that connects generations through the reggaeton and cumbia old school we all know by heart. We promote respect, consent, and care for everyone.',
      p2: "It's not a trend: it's a moment of connection with you and the memories that repeat themselves in every city we land in.",
      p3: 'We create nights with their own identity, massive energy, and memories that bring the 2000s back to life.',
      p4: "It's not just another party — it's a moment that ignites you at every show and stays with you forever.",
    },
    playlist: {
      tag: 'OUR MUSIC',
      title: 'THE PLAYLIST',
      openSpotify: 'Open on Spotify',
    },
    marquee: [
      { text: '500+ EVENTS ORGANIZED', icon: 'star' },
      { text: '100K+ ACTIVE FANS', icon: 'bolt' },
      { text: '20+ CITIES', icon: 'public' },
      { text: 'THE BEST PERREO IN ARGENTINA', icon: 'favorite' },
    ],
    team: {
      title: 'THE TEAM',
    },
    faq: {
      title: 'F.A.Q.',
      termsTitle: 'Terms & Conditions',
      termsIntro:
        'When you get your ticket for La Tuki — whether you buy through the official ticketing platform or enter with an authorized invitation/courtesy — we understand that you accept these basic conditions so we can all enjoy the night as it should be.',
      sections: [
        {
          title: 'Tickets',
          p1: 'Tickets are only valid if purchased through the official channels communicated by La Tuki for each event.',
          p2: 'If you purchase tickets through unauthorized resellers, they may be rejected at the door. In those cases, the organization cannot be held responsible for duplications, fraud, or issues arising from purchases outside official channels.',
          p3: 'Our advice: always use the links posted on our social media.',
        },
        {
          title: 'Age requirement',
          p1: 'Entry respects the minimum age established by local regulations and the venue for each edition. A physical ID or Mi Argentina app may be requested at the door.',
        },
        {
          title: 'No refunds',
          p1: "Refunds are not issued in cases of buyer no-show, purchase errors, confusion when selecting date or city, or any reason outside the organization's control.",
          p2: 'In the event of a refund, it will be subject to what we officially communicate through our social media.',
          p2Highlight: 'In the event of a refund',
        },
      ],
    },
    faqs: [
      {
        question: 'Minimum age?',
        answer:
          'Entry respects the minimum age established by local regulations and the venue for each edition. A physical ID or Mi Argentina app may be requested at the door.',
      },
      {
        question: 'Tickets & refunds?',
        answer:
          'Tickets are only valid if purchased through the official channels communicated by La Tuki for each event. If you purchase tickets through unauthorized resellers, they may be rejected at the door. In those cases, the organization cannot be held responsible for duplications, fraud, or issues arising from purchases outside official channels. Our advice: always use the links posted on our social media.',
      },
      {
        question: 'Are refunds available?',
        answer:
          "Refunds are not issued in cases of buyer no-show, purchase errors, confusion when selecting date or city, or any reason outside the organization's control. In the event of a refund, it will be subject to what we officially communicate through our social media.",
      },
    ],
    contact: {
      title: 'Contact the team',
      subtitle:
        'Want to bring La Tuki to your city, add your brand as a sponsor, or have a question? Reach out.\nWe love creating big things together.',
      formTitle: 'CONTACT THE TEAM',
      nameLabel: 'Full Name',
      namePlaceholder: 'YOUR NAME',
      emailLabel: 'Email Address',
      emailPlaceholder: 'YOUR@EMAIL.COM',
      messageLabel: 'Message',
      messagePlaceholder: 'TELL US EVERYTHING...',
      submit: 'SEND MESSAGE',
      sending: 'SENDING...',
      successTitle: 'Message sent!',
      successText: "We'll get back to you shortly.",
      sendAnother: 'Send another message',
      connectionError: 'Connection error. Please try again.',
      defaultError: 'Error sending message.',
    },
  },
};
