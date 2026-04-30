export const TOUR_DATES = [
  {
    id: 'tandil-0418',
    date: '18/04',
    venue: 'Glow',
    city: 'TANDIL',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1GeLjhTIJ04P1j7uTTiK7A5J9vD7mNyFj
    image: '/images/flyers/tandil-0418.jpg',
    past: true,
  },
  {
    id: 'bahia-0424',
    date: '24/04',
    venue: 'La Barraca',
    city: 'BAHÍA BLANCA',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1IPBfwHWfNN8trvOXRaeqdbolncbigpNC
    image: '/images/flyers/bahia-0424.jpg',
    past: true,
  },
  {
    id: 'neuquen-0425',
    date: '25/04',
    venue: 'Mood',
    city: 'NEUQUÉN CAPITAL',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1N-ShChA-G2i7tF5zWE43xMgRvGXKsZwI
    image: '/images/flyers/neuquen-0425.jpg',
    past: true,
  },
  {
    id: 'plottier-0509',
    date: '09/05',
    venue: 'Animal',
    city: 'PLOTTIER, NEUQUÉN',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1Xv0hYRp66Lp-t8WLW9CEFYDb7pcW1Cne
    image: '/images/flyers/plottier-0509.jpg',
    ticketUrl: 'https://centralticket.net/Plotier',
  },
  {
    id: 'cordoba-0509',
    date: '09/05',
    venue: 'Club Lúmina',
    city: 'CÓRDOBA CAPITAL',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1Io5pb_xJZuYRx6O41wE1sIvZKbYQ__Vf
    image: '/images/flyers/cordoba-0509.jpg',
    ticketUrl: 'https://alpogo.com/evento/la-tuki-25707',
  },
  {
    id: 'viedma-0515',
    date: '15/05',
    venue: 'Aura',
    city: 'VIEDMA',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1Lt2luIy4jxSfDwpTEsAPpL6eEoicSkQ0
    image: '/images/flyers/viedma-0515.jpg',
    ticketUrl: 'https://centralticket.net/Viedmatuki',
  },
  {
    id: 'madryn-0516',
    date: '16/05',
    venue: 'Club Cero Uno',
    city: 'PUERTO MADRYN, CHUBUT',
    image: '/images/flyers/flyer-pto-madryn.png',
    ticketUrl: 'https://centralticket.net/Tukiclubmadryn',
  },
  {
    id: 'laprida-0516',
    date: '16/05',
    venue: 'El Castillo',
    city: 'LAPRIDA',
    // Reemplazar con flyer real: https://drive.google.com/drive/folders/1OFqRaSlPoswp_wnviZflj7jzG7QtoNTe
    image: '/images/flyers/laprida-0516.jpg',
    ticketUrl: 'https://centralticket.net/Lapridatuki',
  },
  {
    id: 'trelew-0523',
    date: '23/05',
    venue: 'Goat',
    city: 'TRELEW',
    image: '/images/flyers/trelew-flyer.png',
    ticketUrl: 'https://centralticket.net/Trelewtuki',
  },
];

export const TWEETS = [
  {
    user: 'marta_perreo',
    initial: 'M',
    handle: '@marta_perreo',
    content:
      'Obras se cae abajo. El último set de reggaeton old school me voló la peluca. ¡Yendooo! 🚀',
  },
  {
    user: 'juancho_tuki',
    initial: 'J',
    handle: '@juancho_tuki',
    content: '¿Alguien tiene entradas de sobra? No me puedo perder esta locura otra vez.',
  },
  {
    user: 'Mateo (Staff)',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNNk77zRFc2UocSWBQ2nwDkVhPweEBIRfEjn-gUtvT6O80Q7T3QnYAd7C8wnSjt1ku0Tqn-1tA4b4PBpbVgyVjsKlotx2UijzuNZOajcCwNp_w9T4fp2292bM6peIf5ww8YidZd0a0eIFBS-WdvTMmnuoi5a9TjLKJA0xSs9q1ubPl1RBZrfbLBJtDC8Oz9E-HXd6BXAN5lZAKeqYxKwfjKiCiVk94YlLcwmwJ-GK7frpr-lhw5sTtkthkDxig_K8l7JlFcf9dCH3d',
    handle: 'Staff',
    content: 'Prepárense para las sorpresas que tenemos para Obras. Se pudre todo.',
    isStaff: true,
  },
];

export const TEAM = [
  { name: 'NICO', role: 'Productor y logística', gender: 'm' },
  { name: 'TOMI', role: 'Productor y logística', gender: 'm' },
  { name: 'POLI', role: 'Productor y logística', gender: 'f' },
  { name: 'MARCHU', role: 'Directora de marketing', gender: 'f' },
  { name: 'JUANI', role: 'Productor creativo', gender: 'm' },
  { name: 'FEDU', role: 'Relaciones públicas', gender: 'f' },
  { name: 'JERO', role: 'Difusores', gender: 'm' },
  { name: 'FRAN', role: 'Diseño gráfico', gender: 'm' },
  { name: 'DAI', role: 'Creadora de contenido en TikTok', gender: 'f' },
  { name: 'CHICHE', role: 'Community manager', gender: 'm' },
  { name: 'JUANITA', role: 'Difusores', gender: 'f' },
] as const;

export const FAQS = [
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
];
