'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

const TRANSITION = { duration: 0.7, ease: 'easeOut' as const };
const VIEWPORT = { once: true, amount: 0.25 as const };

export function Manifiesto() {
  const { t } = useLanguage();
  const m = t.manifesto;

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={TRANSITION}
        >
          <h2 className="text-7xl font-anton text-primary italic mb-12">{m.title}</h2>
          <div className="space-y-8 text-2xl font-bold leading-tight text-zinc-300">
            <p>
              <span className="text-white">La Tuki</span> {m.p1}
            </p>
            <p>{m.p2}</p>
            <p>{m.p3}</p>
            <p>{m.p4}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
