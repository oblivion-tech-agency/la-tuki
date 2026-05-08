'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const faq = t.faq;
  const [ticketsSection, ageSection, refundSection] = faq.sections;

  return (
    <section className="py-24 px-6 bg-zinc-950 border-y border-white/10" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* FAQ */}
        <h2 className="text-6xl font-anton text-center text-white italic mb-16">{faq.title}</h2>
        <div className="space-y-6 mb-8">
          {t.faqs.map((item, i) => (
            <details
              key={i}
              className="group p-8 bg-black border border-white/10 hover:border-primary/50 transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer font-black text-xl list-none text-white uppercase italic">
                <span>{item.question}</span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-6 text-zinc-400 font-bold text-lg leading-relaxed border-t border-white/5 pt-6">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Términos y Condiciones */}
        <details className="group border-t border-white/5 pt-6 mt-6">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
              {faq.termsTitle}
            </span>
            <span className="material-symbols-outlined text-zinc-600 text-base group-open:rotate-180 group-hover:text-zinc-300 transition-all">
              expand_more
            </span>
          </summary>

          <div className="mt-10 space-y-10">
            <p className="text-zinc-400 font-bold text-lg leading-relaxed">{faq.termsIntro}</p>

            <div>
              <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 border-l-4 border-primary pl-4">
                {ticketsSection.title}
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">{ticketsSection.p1}</p>
              <p className="text-zinc-400 font-bold leading-relaxed mt-4">{ticketsSection.p2}</p>
              <p className="text-zinc-500 font-bold leading-relaxed mt-4 italic">
                {ticketsSection.p3}
              </p>
            </div>

            <div>
              <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 border-l-4 border-primary pl-4">
                {ageSection.title}
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">{ageSection.p1}</p>
            </div>

            <div>
              <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 border-l-4 border-primary pl-4">
                {refundSection.title}
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">{refundSection.p1}</p>
              {refundSection.p2 && (
                <p className="text-zinc-400 font-bold leading-relaxed mt-4">
                  {refundSection.p2Highlight && (
                    <span className="text-white">{refundSection.p2Highlight}</span>
                  )}
                  {refundSection.p2Highlight
                    ? refundSection.p2.replace(refundSection.p2Highlight, '')
                    : refundSection.p2}
                </p>
              )}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
