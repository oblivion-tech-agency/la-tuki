'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? c.defaultError);
        setState('error');
        return;
      }

      setState('success');
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch {
      setErrorMsg(c.connectionError);
      setState('error');
    }
  }

  return (
    <section
      id="contacto"
      className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
    >
      {/* Columna izquierda */}
      <div>
        <h2 className="text-6xl md:text-8xl font-anton mb-8 italic text-white leading-[0.9] uppercase">
          {c.title}
        </h2>
        <p className="text-zinc-400 text-xl font-bold mb-10 leading-relaxed whitespace-pre-line">
          {c.subtitle}
        </p>

        <div className="space-y-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/latukiofi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors shrink-0">
              <svg
                className="w-5 h-5 text-primary group-hover:text-black transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-primary transition-colors">
              @latukiofi
            </span>
          </a>

          {/* Email */}
          <a href="mailto:Fiestalatuki@gmail.com" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors shrink-0">
              <span className="material-symbols-outlined text-primary group-hover:text-black transition-colors">
                mail
              </span>
            </div>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-primary transition-colors">
              Fiestalatuki@gmail.com
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5492920378488"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors shrink-0">
              <svg
                className="w-5 h-5 text-primary group-hover:text-black transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-primary transition-colors">
              +54 9 2920378488
            </span>
          </a>
        </div>
      </div>

      {/* Formulario */}
      <div className="bg-card-dark p-10 border-2 border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <h3 className="text-3xl font-anton text-primary mb-8 italic">{c.formTitle}</h3>

        {state === 'success' ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
            <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
            <p className="text-white font-black text-2xl uppercase tracking-tighter">
              {c.successTitle}
            </p>
            <p className="text-zinc-400 font-bold">{c.successText}</p>
            <button
              onClick={() => setState('idle')}
              className="mt-4 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
            >
              {c.sendAnother}
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
                {c.nameLabel}
              </label>
              <input
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-black border-2 border-zinc-800 p-5 text-white focus:border-primary outline-none transition-all font-bold placeholder:text-zinc-700"
                placeholder={c.namePlaceholder}
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
                {c.emailLabel}
              </label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border-2 border-zinc-800 p-5 text-white focus:border-primary outline-none transition-all font-bold placeholder:text-zinc-700"
                placeholder={c.emailPlaceholder}
                type="email"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
                {c.messageLabel}
              </label>
              <textarea
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full bg-black border-2 border-zinc-800 p-5 text-white focus:border-primary outline-none transition-all font-bold placeholder:text-zinc-700"
                placeholder={c.messagePlaceholder}
                rows={4}
              />
            </div>

            {state === 'error' && (
              <p className="text-red-500 text-xs font-bold uppercase tracking-wider">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === 'loading'}
              className="w-full bg-primary text-black font-black py-5 uppercase tracking-tighter text-xl hover:brightness-110 shadow-[0_10px_30px_rgba(166,214,0,0.2)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state === 'loading' ? c.sending : c.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
