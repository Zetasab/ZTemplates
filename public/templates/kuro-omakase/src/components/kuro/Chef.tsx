import chefImg from "@/assets/chef.jpg";

export function Chef() {
  return (
    <section id="chef" className="bg-kuro-surface text-kuro-fg grid md:grid-cols-2">
      <div className="py-32 md:py-40 px-6 md:px-16 lg:px-24 flex items-center">
        <div className="max-w-[48ch] space-y-8" data-reveal>
          <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary">
            Itamae · Kenji Sato
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight text-balance">
            La mano que <span className="italic">guía la marea.</span>
          </h2>
          <p className="text-kuro-muted leading-relaxed text-lg">
            «El sushi no es solo alimento; es una conversación entre el mar y el alma. En Kuro, cada corte busca el
            equilibrio absoluto entre la tradición del período Edo y la vanguardia sensorial.»
          </p>
          <p className="text-kuro-muted leading-relaxed">
            Formado durante quince años en Ginza bajo el maestro Hiro Tanaka, Kenji ha levantado en Madrid un templo de
            disciplina donde el ritmo del omakase se sirve sin reloj.
          </p>
          <div className="font-[family-name:var(--font-display)] italic text-2xl text-kuro-primary pt-4">— K. Sato</div>
        </div>
      </div>
      <div className="relative min-h-[520px] md:min-h-0 overflow-hidden">
        <img
          data-parallax="0.3"
          src={chefImg}
          alt="Retrato del itamae Kenji Sato en su cocina"
          loading="lazy"
          width={1000}
          height={1280}
          className="absolute inset-0 w-full h-[115%] object-cover"
        />
        <div className="absolute bottom-8 right-8 font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-fg/70 bg-kuro-bg/40 backdrop-blur-sm px-3 py-2">
          Tokyo → Madrid · 2019
        </div>
      </div>
    </section>
  );
}