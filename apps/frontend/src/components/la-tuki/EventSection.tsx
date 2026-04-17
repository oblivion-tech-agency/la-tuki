import { TOUR_DATES } from '@/constants';

export function EventSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden" id="fechas">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-black tracking-widest text-sm block mb-4 border-l-4 border-primary pl-4">
              TOUR 2026
            </span>
            <h2 className="text-7xl md:text-9xl font-anton text-white leading-[0.85] italic">
              AGENDÁ ESTAS FECHAS
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">
              Próximos paraderos de la <br />
              caravana más grande del país
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOUR_DATES.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary transition-all duration-300 aspect-[3/4]"
            >
              {/* Flyer */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={event.image}
                alt={`${event.city} - ${event.date}`}
                loading="lazy"
              />
              {/* Overlay oscuro que se levanta en hover para "revelar" el color del flyer */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-xs font-black uppercase tracking-widest mb-1">
                  {event.date} · {event.venue}
                </p>
                <h3 className="text-2xl font-anton text-white mb-4 leading-tight">{event.city}</h3>
                <button className="w-full py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs uppercase hover:bg-primary hover:text-black transition-all duration-200">
                  CONSEGUIR ENTRADAS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
