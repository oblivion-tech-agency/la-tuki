'use client';

import { motion } from 'motion/react';

const NAV_ITEMS = [
  { label: 'FECHAS', href: '#fechas' },
  { label: 'CONTACTO', href: '#contacto' },
];

export function Hero() {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video background — reemplazar src con el video real del Drive */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-bg.mp4"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center gap-8 px-6 text-center"
      >
        {/* Logo */}
        <img
          alt="La Tuki"
          src="/logo.png"
          className="w-full max-w-xs md:max-w-sm mx-auto drop-shadow-[0_0_40px_rgba(166,214,0,0.4)]"
        />

        {/* Nav bar */}
        <nav className="flex items-center gap-10 border-t border-b border-white/20 py-3 px-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white text-sm font-black tracking-widest uppercase hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Tagline */}
        <p className="text-white text-lg md:text-xl font-black tracking-[0.25em] uppercase">
          LO SIMPLE GARPA
        </p>
      </motion.div>
    </header>
  );
}
