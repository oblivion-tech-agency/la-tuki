'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TOUR_DATES } from '@/constants';

const INITIAL_VISIBLE = 8;

// El evento es "pasado" si su fecha es anterior al día de hoy (hoy no cuenta como pasado).
function isPastEvent(fullDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(fullDate + 'T00:00:00') < today;
}

// Devuelve el mes que debe mostrarse:
// - Si el mes actual tiene algún evento cuya fecha aún no pasó → mes actual.
// - Si no quedan eventos próximos en el mes actual → el mes futuro más cercano con eventos.
// - Si no hay nada → mes actual (resultará en lista vacía → "Planificando...").
function getDisplayMonth(): { year: number; month: number } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const hasUpcomingThisMonth = TOUR_DATES.some((event) => {
    const d = new Date(event.fullDate + 'T00:00:00');
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth && d >= today;
  });

  if (hasUpcomingThisMonth) {
    return { year: currentYear, month: currentMonth };
  }

  // Buscar el mes futuro más próximo con al menos un evento
  let minYear = Infinity;
  let minMonth = Infinity;

  for (const event of TOUR_DATES) {
    const d = new Date(event.fullDate + 'T00:00:00');
    const y = d.getFullYear();
    const m = d.getMonth();
    if (y < currentYear || (y === currentYear && m <= currentMonth)) continue;
    if (y < minYear || (y === minYear && m < minMonth)) {
      minYear = y;
      minMonth = m;
    }
  }

  // Sin eventos próximos en ningún mes → lista vacía → "Planificando..."
  return minYear === Infinity ? { year: -1, month: -1 } : { year: minYear, month: minMonth };
}

export function EventSection() {
  const { t } = useLanguage();
  const ev = t.events;
  const [showAll, setShowAll] = useState(false);

  const { year: displayYear, month: displayMonth } = getDisplayMonth();
  const allEvents = TOUR_DATES.filter((event) => {
    const d = new Date(event.fullDate + 'T00:00:00');
    return d.getFullYear() === displayYear && d.getMonth() === displayMonth;
  });
  const visibleEvents = showAll ? allEvents : allEvents.slice(0, INITIAL_VISIBLE);
  const hasMore = allEvents.length > INITIAL_VISIBLE;

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="fechas">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-black tracking-widest text-sm block mb-4 border-l-4 border-primary pl-4">
              {ev.sectionTag}
            </span>
            <h2 className="text-7xl md:text-9xl font-anton text-white leading-[0.85] italic">
              {ev.title}
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm whitespace-pre-line">
              {ev.subtitle}
            </p>
          </div>
        </div>

        {visibleEvents.length === 0 ? (
          <div className="flex items-center justify-center py-24">
            <p className="text-zinc-700 font-bold text-sm uppercase tracking-widest text-center">
              {ev.planningDates}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleEvents.map((event) => {
                const past = isPastEvent(event.fullDate);
                return (
                  <div
                    key={event.id}
                    className={`group relative overflow-hidden bg-zinc-900 border transition-colors duration-300 aspect-[3/4] will-change-transform ${past ? 'border-white/5' : 'border-white/10 hover:border-primary'}`}
                  >
                    {/* Flyer */}
                    <img
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform-gpu ${past ? 'grayscale brightness-50' : 'group-hover:scale-105'}`}
                      src={event.image}
                      alt={`${event.city} - ${event.date}`}
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-500 ${past ? 'bg-black/40' : 'bg-black/50 group-hover:bg-black/10'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Badge agotado */}
                    {past && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-900/80 text-red-300 text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-red-800/60">
                          {ev.soldOut}
                        </span>
                      </div>
                    )}

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p
                        className={`text-xs font-black uppercase tracking-widest mb-1 ${past ? 'text-zinc-500' : 'text-primary'}`}
                      >
                        {event.date}
                        {event.venue ? ` · ${event.venue}` : ''}
                      </p>
                      <h3
                        className={`text-2xl font-anton mb-4 leading-tight ${past ? 'text-zinc-400' : 'text-white'}`}
                      >
                        {event.city}
                      </h3>
                      {past ? (
                        <button
                          disabled
                          className="w-full py-3 bg-red-950/40 text-red-500/60 border border-red-900/30 font-black text-xs uppercase cursor-not-allowed select-none"
                        >
                          {ev.soldOut}
                        </button>
                      ) : event.ticketUrl ? (
                        <a
                          href={event.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                              (window as any).gtag('event', 'ticket_click', {
                                event_category: 'tickets',
                                event_label: `${event.city} – ${event.date}`,
                                event_id: event.id,
                              });
                            }
                          }}
                          className="block w-full py-3 bg-primary text-black border border-primary font-black text-xs uppercase text-center hover:bg-primary/90 transition-colors duration-200"
                        >
                          {ev.tickets}
                        </a>
                      ) : (
                        <button
                          disabled
                          className="w-full py-3 bg-white/5 backdrop-blur-md text-zinc-500 border border-white/10 font-black text-xs uppercase cursor-not-allowed select-none"
                        >
                          {ev.comingSoon}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="px-10 py-4 border border-white/20 text-white font-black text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {showAll ? ev.showLess : ev.showMore}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
