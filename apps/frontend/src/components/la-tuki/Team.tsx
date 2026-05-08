'use client';

import { motion } from 'motion/react';
import { TEAM } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const TRANSITION = { duration: 0.55, ease: 'easeOut' as const };
const VIEWPORT = { once: true, amount: 0.1 as const };

const AVATAR_SEEDS: Record<string, string> = {
  POLI: 'POLI-chica',
};

const HAIR_COLORS: Record<string, string> = {
  FEDU: 'f5d76e', // rubia
};

// Pelo corto para hombres con seed ambiguo
const SHORT_HAIR_GUYS = new Set(['TOMI']);

function avatarUrl(name: string, gender: 'm' | 'f'): string {
  const seed = encodeURIComponent(AVATAR_SEEDS[name] ?? name);

  if (gender === 'f') {
    const hairColor = HAIR_COLORS[name];
    const colorParam = hairColor ? `&hairColor[]=${hairColor}` : '';
    return `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}&radius=50${colorParam}`;
  } else {
    const hairParam = SHORT_HAIR_GUYS.has(name) ? '&hair[]=fonze&hair[]=pixie&hair[]=mrT' : '';
    return `https://api.dicebear.com/9.x/micah/svg?seed=${seed}&radius=50${hairParam}`;
  }
}

function MemberCard({ member, index }: { member: (typeof TEAM)[number]; index: number }) {
  return (
    <motion.div
      className="flex flex-col items-center group w-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ ...TRANSITION, delay: index * 0.05 }}
    >
      <div className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-primary/20 group-hover:border-primary mb-4 overflow-hidden transition-all duration-300 shrink-0">
        <img
          src={avatarUrl(member.name, member.gender as 'm' | 'f')}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="font-black text-lg text-white uppercase group-hover:text-primary transition-colors text-center leading-tight">
        {member.name}
      </span>
      <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 italic text-center leading-snug">
        {member.role}
      </span>
    </motion.div>
  );
}

const ROW_1 = TEAM.slice(0, 3); // Nico, Tomi, Poli
const ROW_2 = TEAM.slice(3, 8); // Marchu, Juani, Fedu, Jero, Fran
const ROW_3 = TEAM.slice(8, 11); // Dai, Chiche, Juanita

export function Team() {
  const { t } = useLanguage();

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
          {t.team.title}
        </motion.h2>

        <div className="flex flex-col gap-12">
          {/* Fila 1: Nico, Tomi, Poli — centrada */}
          <div className="flex flex-wrap justify-center gap-10">
            {ROW_1.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* Fila 2: Marchu, Juani, Fedu, Jero, Fran */}
          <div className="flex flex-wrap justify-center gap-10">
            {ROW_2.map((member, i) => (
              <MemberCard key={member.name} member={member} index={ROW_1.length + i} />
            ))}
          </div>

          {/* Fila 3: Dai, Chiche, Juanita — centrada */}
          <div className="flex flex-wrap justify-center gap-10">
            {ROW_3.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                index={ROW_1.length + ROW_2.length + i}
              />
            ))}
          </div>
        </div>

        {/* Card SUMATE — comentada hasta definir si va */}
        {/* <motion.div
          className="flex flex-col items-center group mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={TRANSITION}
        >
          <div className="w-32 h-32 rounded-full bg-black border-4 border-dashed border-zinc-700 group-hover:border-primary mb-4 flex items-center justify-center transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-zinc-700 group-hover:text-primary transition-all duration-300">
              add
            </span>
          </div>
          <span className="font-black text-lg text-white uppercase italic group-hover:text-primary transition-colors">
            SUMATE
          </span>
          <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 italic">
            Hacenos tu propuesta
          </span>
        </motion.div> */}
      </div>
    </section>
  );
}
