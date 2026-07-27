import ingredientsImg from "@/assets/parallax-ingredients.jpg";

export function ParallaxBand() {
  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          data-parallax="0.6"
          src={ingredientsImg}
          alt="Ingredientes japoneses sobre piedra oscura"
          loading="lazy"
          width={1920}
          height={1280}
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-kuro-bg/60" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-3xl" data-reveal>
          <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.5em] text-kuro-primary mb-6">
            La materia prima
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl italic text-kuro-fg text-balance leading-tight">
            Donde la lonja se encuentra <br className="hidden md:block" /> con la disciplina.
          </h2>
        </div>
      </div>
    </section>
  );
}