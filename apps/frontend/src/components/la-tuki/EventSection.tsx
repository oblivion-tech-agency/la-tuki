import { TOUR_DATES, TWEETS } from '@/constants';
import { cn } from '@/lib/utils';

export function EventSection() {
  const mainEvent = TOUR_DATES.find((d) => d.isMain);
  const secondaryEvents = TOUR_DATES.filter((d) => !d.isMain && !d.isLast);
  const lastEvent = TOUR_DATES.find((d) => d.isLast);

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="events">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Event Card */}
          <div className="md:col-span-8 group relative aspect-[16/10] md:aspect-auto md:h-[700px] overflow-hidden bg-zinc-900 border-2 border-white/5 hover:border-primary transition-colors duration-500">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src={mainEvent?.image}
              referrerPolicy="no-referrer"
              alt={mainEvent?.city}
            />
            <div className="absolute inset-0 urban-gradient-overlay"></div>

            {/* Sidebar Tweets */}
            <div className="absolute top-0 right-0 w-80 h-full bg-black/60 backdrop-blur-md border-l border-white/10 p-6 hidden xl:flex flex-col transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
              <h4 className="text-primary font-anton text-xl mb-4 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                VIVE LA TUKI
              </h4>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 thread-scroll">
                {TWEETS.map((tweet, i) => (
                  <div key={i} className="twitter-card p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {tweet.image ? (
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src={tweet.image}
                          referrerPolicy="no-referrer"
                          alt={tweet.user}
                        />
                      ) : (
                        <div
                          className={cn(
                            'w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs',
                            tweet.initial === 'M'
                              ? 'bg-primary text-black'
                              : 'bg-zinc-800 border border-primary text-primary'
                          )}
                        >
                          {tweet.initial}
                        </div>
                      )}
                      <span
                        className={cn(
                          'font-bold text-xs',
                          tweet.isStaff ? 'text-primary' : 'text-white'
                        )}
                      >
                        {tweet.isStaff ? tweet.user : tweet.handle}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300">{tweet.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="bg-primary text-black inline-block px-4 py-1 font-black text-sm mb-4 skew-tag uppercase">
                {mainEvent?.date} • {mainEvent?.venue}
              </div>
              <h3 className="text-6xl md:text-8xl font-anton text-white mb-6">{mainEvent?.city}</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="bg-white text-black font-black px-10 py-4 hover:bg-primary transition-colors flex items-center gap-2 group-hover:scale-105 duration-300">
                  CONSEGUÍ TUS ENTRADAS
                </button>
                <span className="text-primary font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">local_fire_department</span>
                  {mainEvent?.soldOut}% VENDIDO
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Events */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {secondaryEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary transition-all aspect-square md:aspect-auto md:h-[334px]"
              >
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  src={event.image}
                  referrerPolicy="no-referrer"
                  alt={event.city}
                />
                <div className="absolute inset-0 urban-gradient-overlay"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <p className="text-primary text-xs font-black uppercase mb-1">
                    {event.date} • {event.venue}
                  </p>
                  <h3 className="text-4xl font-anton text-white mb-4">{event.city}</h3>
                  <button className="w-full py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black text-xs uppercase hover:bg-primary hover:text-black transition-all">
                    TICKETS
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Last Event Banner */}
          {lastEvent && (
            <div className="md:col-span-12 group relative h-64 overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary transition-all">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src={lastEvent.image}
                referrerPolicy="no-referrer"
                alt={lastEvent.city}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-12 gap-6">
                <div>
                  <p className="text-primary text-sm font-black uppercase mb-1">
                    {lastEvent.date} • {lastEvent.venue}
                  </p>
                  <h3 className="text-5xl md:text-7xl font-anton text-white">{lastEvent.city}</h3>
                </div>
                <button className="bg-primary text-black font-black px-12 py-5 hover:scale-110 transition-transform uppercase text-lg">
                  ÚLTIMO SHOW
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
