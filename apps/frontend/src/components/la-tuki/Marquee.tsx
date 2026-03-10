const ITEMS = [
  { text: '500+ EVENTOS ORGANIZADOS', icon: 'star' },
  { text: '100K+ FANS ACTIVOS', icon: 'bolt' },
  { text: '20+ CIUDADES', icon: 'public' },
  { text: 'EL MEJOR PERREO DE ARGENTINA', icon: 'favorite' },
];

export function Marquee() {
  return (
    <section className="py-16 bg-primary overflow-hidden border-y-4 border-black">
      <div className="flex animate-marquee">
        {[0, 1].map((setIdx) => (
          <div key={setIdx} className="flex items-center gap-16 flex-shrink-0 pr-16">
            {ITEMS.map((item) => (
              <span
                key={item.text}
                className="text-black font-anton text-5xl flex items-center gap-4 italic uppercase tracking-tighter whitespace-nowrap"
              >
                {item.text}
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
