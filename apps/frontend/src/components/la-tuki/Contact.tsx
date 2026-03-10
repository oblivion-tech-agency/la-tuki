'use client';

export function Contact() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-6xl md:text-8xl font-anton mb-8 italic text-white leading-[0.9] uppercase">
          CONSULTAS, INCORPORACIONES O SPONSOREO
        </h2>
        <p className="text-zinc-400 text-xl font-bold mb-10 leading-relaxed">
          ¿Querés llevar La Tuki a tu boliche? ¿Tenés una marca que vibra con la calle? Escribinos y
          sumate a la revolución del reggaeton.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-black">
                mail
              </span>
            </div>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-primary transition-colors">
              info@latuki.com
            </span>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-black">
                public
              </span>
            </div>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-primary transition-colors">
              @latukioficial
            </span>
          </div>
        </div>
      </div>
      <div className="bg-card-dark p-10 border-2 border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <h3 className="text-3xl font-anton text-primary mb-8 italic">CONTACTÁ AL EQUIPO</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
              Nombre Completo
            </label>
            <input
              className="w-full bg-black border-2 border-zinc-800 p-5 text-white focus:border-primary outline-none transition-all font-bold placeholder:text-zinc-700"
              placeholder="ESCRIBÍ TU NOMBRE"
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
              Correo Electrónico
            </label>
            <input
              className="w-full bg-black border-2 border-zinc-800 p-5 text-white focus:border-primary outline-none transition-all font-bold placeholder:text-zinc-700"
              placeholder="TU@CORREO.COM"
              type="email"
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
              Mensaje
            </label>
            <textarea
              className="w-full bg-black border-2 border-zinc-800 p-5 text-white focus:border-primary outline-none transition-all font-bold placeholder:text-zinc-700"
              placeholder="CONTANOS TODO..."
              rows={4}
            ></textarea>
          </div>
          <button
            className="w-full bg-primary text-black font-black py-5 uppercase tracking-tighter text-xl hover:brightness-110 shadow-[0_10px_30px_rgba(166,214,0,0.2)] transition-all"
            type="submit"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
}
