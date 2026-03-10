'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  '/images/isma_seguraa-268.jpeg',
  '/images/isma_seguraa-227.jpeg',
  '/images/dsc-0450.jpeg',
  '/images/h2.jpeg',
  '/images/h3.jpeg',
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <AnimatePresence>
          <motion.img
            key={SLIDES[current]}
            src={SLIDES[current]}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-6"
      >
        <div className="opacity-50 hover:opacity-100 transition-opacity duration-700 cursor-default">
          <img
            alt="La Tuki"
            className="w-full max-w-xs md:max-w-sm mx-auto mb-10 drop-shadow-[0_0_40px_rgba(166,214,0,0.4)]"
            src="/logo.png"
          />
          <p className="text-xl md:text-3xl font-bold text-primary mb-12 tracking-[0.15em] uppercase max-w-2xl mx-auto leading-tight">
            La experiencia definitiva del reggaeton old school
          </p>
          <div className="flex flex-col gap-4 items-center">
            <button className="group/btn relative bg-primary text-black text-xl font-black px-14 py-6 hover:pr-16 transition-all shadow-[0_0_40px_rgba(166,214,0,0.5)] uppercase flex items-center gap-3">
              CONSEGUÍ TUS ENTRADAS
              <span className="material-symbols-outlined font-bold group-hover/btn:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
      </div>
    </header>
  );
}
