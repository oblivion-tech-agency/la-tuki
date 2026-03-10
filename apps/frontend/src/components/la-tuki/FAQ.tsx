import { FAQS } from '@/constants';

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-y border-white/10" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl font-anton text-center text-white italic mb-16">F.A.Q.</h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group p-8 bg-black border border-white/10 hover:border-primary/50 transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer font-black text-xl list-none text-white uppercase italic">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-6 text-zinc-400 font-bold text-lg leading-relaxed border-t border-white/5 pt-6">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
