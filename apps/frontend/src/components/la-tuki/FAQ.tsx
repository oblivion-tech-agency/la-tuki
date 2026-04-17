import { FAQS } from '@/constants';

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-y border-white/10" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* FAQ */}
        <h2 className="text-6xl font-anton text-center text-white italic mb-16">F.A.Q.</h2>
        <div className="space-y-6 mb-24">
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

        {/* Términos y Condiciones */}
        <div className="border-t border-white/10 pt-20">
          <h2 className="text-5xl font-anton text-center text-white italic mb-12">
            TÉRMINOS Y CONDICIONES
          </h2>
          <p className="text-zinc-400 font-bold text-lg leading-relaxed mb-12">
            Cuando sacás tu entrada para La Tuki, ya sea comprando por la ticketera oficial o
            ingresando con invitación/cortesía autorizada, entendemos que aceptás estas condiciones
            básicas para que todos vivamos la noche como corresponde.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 border-l-4 border-primary pl-4">
                Entradas
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">
                Las entradas son válidas únicamente si fueron adquiridas a través de los canales
                oficiales comunicados por La Tuki en cada fecha.
              </p>
              <p className="text-zinc-400 font-bold leading-relaxed mt-4">
                Si comprás entradas por reventa no autorizada, pueden ser rechazadas en el ingreso.
                En esos casos, la organización no puede hacerse responsable por duplicaciones,
                estafas o inconvenientes derivados de compras fuera de los medios oficiales.
              </p>
              <p className="text-zinc-500 font-bold leading-relaxed mt-4 italic">
                Nuestro consejo: usá siempre los links publicados en nuestras redes.
              </p>
            </div>

            <div>
              <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 border-l-4 border-primary pl-4">
                Edad de ingreso
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">
                El ingreso respeta la edad mínima establecida según la normativa local y el venue de
                cada edición. Puede solicitarse DNI físico o Mi Argentina al ingresar.
              </p>
            </div>

            <div>
              <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 border-l-4 border-primary pl-4">
                No se realizan devoluciones
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">
                En caso de inasistencia del comprador, errores al momento de la compra, confusión en
                la selección de fecha o ciudad, o cualquier motivo ajeno a la organización.
              </p>
              <p className="text-zinc-400 font-bold leading-relaxed mt-4">
                <span className="text-white">En caso de reintegro</span>, el mismo queda sujeto a lo
                que comuniquemos oficialmente por nuestras redes sociales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
