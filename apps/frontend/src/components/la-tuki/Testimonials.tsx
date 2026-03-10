'use client';

import { motion } from 'motion/react';

const TRANSITION = { duration: 0.6, ease: 'easeOut' as const };
const VIEWPORT = { once: true, amount: 0.2 as const };

export function Testimonials() {
  return (
    <section className="py-24 bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={TRANSITION}
        >
          <h2 className="text-6xl md:text-8xl font-anton text-white leading-none">
            VIVE LA <span className="text-primary italic">TUKI</span>
          </h2>
          <div className="h-1 bg-primary flex-1 hidden md:block"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="twitter-card p-8 rounded-2xl relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ ...TRANSITION, delay: 0 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHaprSogC7sRSaC1ek4yAm_UFGQfvq5zG7l12cLUoM9G0TkM72-1ZMeEespvlC2TSh-pqKXU7Dt8wFkdY7jLNbhGoY-1xZQZ4RhzBlVGjrWbc6bk1HoM9qxKdunS46mgnb3VGbzDoun9YMzJvsjG81lehv9ufe0D7sjBqcwCgRsFrICJlMJBipH_Kzyou24H-q-xDvh34HHAnIVPGwJHG5osD-fjN39oYvh3UufC_Ezknu5vq2j9dVoSYfdGeLb2Fq98JtyCM5pqwM"
                  referrerPolicy="no-referrer"
                  alt="Santi"
                />
                <div>
                  <p className="font-black text-white">Santi • Staff</p>
                  <p className="text-zinc-500 text-sm">@santi_tuki</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
            <p className="text-xl font-bold text-white mb-6 leading-relaxed">
              No es solo una fiesta, es un movimiento. Reggaeton de antes, energía de ahora. ⚡️
              Argentina sabe lo que es el verdadero perreo.
            </p>
            <div className="flex items-center gap-8 text-zinc-500 border-t border-white/10 pt-6">
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">mode_comment</span> 4.2k
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">repeat</span> 12.8k
              </button>
              <button className="flex items-center gap-2 text-primary">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>{' '}
                50k
              </button>
            </div>
          </motion.div>

          {/* Card 2 — center destacada */}
          <motion.div
            className="bg-primary p-8 rounded-2xl flex flex-col justify-center text-black md:scale-110 z-10 shadow-2xl shadow-primary/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ ...TRANSITION, delay: 0.14 }}
          >
            <span className="material-symbols-outlined text-5xl mb-4">format_quote</span>
            <p className="text-2xl md:text-3xl font-black italic uppercase leading-none mb-4">
              Venimos a recuperar el espacio que la calle nunca perdió.
            </p>
            <p className="font-bold text-sm tracking-widest opacity-70">LA TUKI MANIFIESTO 2024</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="twitter-card p-8 rounded-2xl relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ ...TRANSITION, delay: 0.28 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-black">
                  VC
                </div>
                <div>
                  <p className="font-black text-white">Voces de la Calle</p>
                  <p className="text-zinc-500 text-sm">@vozpueblo</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
            <p className="text-xl font-bold text-white mb-6 leading-relaxed">
              Sin poses, sin vips aburridos, puro sudor y bajos potentes. La verdadera esencia está
              acá. ¿Te animás a entrar al círculo? 🇦🇷
            </p>
            <div className="flex items-center gap-8 text-zinc-500 border-t border-white/10 pt-6">
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">mode_comment</span> 1.5k
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">repeat</span> 3.1k
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">favorite</span> 12k
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
