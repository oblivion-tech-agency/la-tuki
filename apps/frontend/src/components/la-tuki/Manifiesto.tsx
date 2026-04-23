'use client';

import { motion } from 'motion/react';

const TRANSITION = { duration: 0.7, ease: 'easeOut' as const };
const VIEWPORT = { once: true, amount: 0.25 as const };

export function Manifiesto() {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={TRANSITION}
        >
          <h2 className="text-7xl font-anton text-primary italic mb-12">EL MANIFIESTO</h2>
          <div className="space-y-8 text-2xl font-bold leading-tight text-zinc-300">
            <p>
              <span className="text-white">La Tuki</span> es una experiencia inmersiva que conecta
              generaciones a través del reggaetón y la cumbia old que todos sabemos cantar.
              Promovemos el respeto, el consentimiento y el cuidado entre todos.
            </p>
            <p>
              No es una moda: es un momento de conexión con ustedes y los recuerdos que se repiten
              en cada ciudad donde aterrizamos.
            </p>
            <p>
              Creamos noches con identidad propia, mucha energía y recuerdos que hacen revivir los
              2000.
            </p>
            <p>
              No es una fiesta más, es un momento que te enciende en cada fecha y se guarda para
              siempre.
            </p>
          </div>
        </motion.div>

        {/* Testimonios del manifiesto — descomentar cuando tengamos los reales
        <motion.div
          className="space-y-6 mt-16"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ ...TRANSITION, delay: 0.1 }}
        >
          <div className="p-8 bg-black/50 border-l-8 border-primary rounded-r-xl">
            <p className="italic text-xl text-white font-bold mb-6 leading-relaxed">
              &quot;La energía no tiene comparación. Si amás el perreo old school, este es el único
              lugar donde tenés que estar. Cada detalle es puro fuego.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary overflow-hidden shadow-[0_0_15px_rgba(166,214,0,0.5)]">
                <img
                  className="w-full h-full object-cover"
                  src="REEMPLAZAR_CON_FOTO_REAL"
                  referrerPolicy="no-referrer"
                  alt="Nombre"
                />
              </div>
              <div>
                <span className="font-black text-white block uppercase text-sm">Nombre Apellido</span>
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  @handle — Descripción
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 bg-black/50 border-l-8 border-primary rounded-r-xl opacity-80 scale-95 origin-left">
            <p className="italic text-xl text-white font-bold mb-6 leading-relaxed">
              &quot;Finalmente una fiesta que respeta los clásicos. No lo piensen, consigan las
              entradas antes de que vuelen.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-primary"></div>
              <div>
                <span className="font-black text-white block uppercase text-sm">Nombre Apellido</span>
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  @handle — Descripción
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
