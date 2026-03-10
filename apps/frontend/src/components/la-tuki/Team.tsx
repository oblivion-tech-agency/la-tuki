'use client';

import { motion } from 'motion/react';
import { TEAM } from '@/constants';

const TRANSITION = { duration: 0.55, ease: 'easeOut' as const };
const VIEWPORT = { once: true, amount: 0.15 as const };

// 4 miembros + 1 card sumate = 5 items
// pares (0,2,4) desde izquierda, impares (1,3) desde derecha
function cardInitial(i: number) {
  return { opacity: 0, x: i % 2 === 0 ? -70 : 70 };
}

export function Team() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-6xl md:text-8xl font-anton text-white mb-20 italic"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={TRANSITION}
        >
          EL EQUIPO
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center group"
              initial={cardInitial(i)}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ ...TRANSITION, delay: i * 0.1 }}
            >
              <div className="w-48 h-48 rounded-full bg-zinc-900 border-4 border-primary/20 group-hover:border-primary mb-6 overflow-hidden transition-all grayscale group-hover:grayscale-0 scale-95 group-hover:scale-100">
                <img
                  className="w-full h-full object-cover"
                  src={member.image}
                  referrerPolicy="no-referrer"
                  alt={member.name}
                />
              </div>
              <span className="font-black text-xl text-white uppercase group-hover:text-primary transition-colors">
                {member.name}
              </span>
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 italic">
                {member.role}
              </span>
            </motion.div>
          ))}

          {/* Card SUMATE — índice 3 → desde la derecha */}
          <motion.div
            className="flex flex-col items-center group"
            initial={cardInitial(3)}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ ...TRANSITION, delay: 0.3 }}
          >
            <div className="w-48 h-48 rounded-full bg-black border-4 border-dashed border-zinc-700 group-hover:border-primary mb-6 flex items-center justify-center transition-all cursor-pointer">
              <span className="material-symbols-outlined text-6xl text-zinc-700 group-hover:text-primary group-hover:scale-125 transition-all">
                add
              </span>
            </div>
            <span className="font-black text-xl text-white uppercase italic group-hover:text-primary transition-colors">
              SUMATE
            </span>
            <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 italic">
              Hacenos tu propuesta
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
