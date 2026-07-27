import heroImg from "@/assets/hero-tuna.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] flex flex-col justify-center items-center overflow-hidden bg-kuro-bg">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          data-parallax="0.5"
          src={heroImg}
          alt="Corte de atún rojo bluefin con cuchillo yanagiba sobre piedra negra"
          width={1920}
          height={1080}
          className="w-full h-[120%] object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kuro-bg/40 via-transparent to-kuro-bg" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] tracking-[0.5em] uppercase mb-6 text-kuro-fg/80 animate-kuro-reveal">
          Experiencia · Infinita
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-9xl italic text-balance mb-8 text-kuro-fg animate-kuro-reveal [animation-delay:150ms] leading-[0.95]">
          Kuro <span className="not-italic">Omakase</span>
        </h1>
        <div className="flex flex-col items-center gap-8 animate-kuro-reveal [animation-delay:300ms]">
          <p className="max-w-md text-sm md:text-base text-kuro-muted text-pretty leading-relaxed">
            El buffet de sushi reimaginado como un ritual de medianoche. Técnica japonesa impecable, servida sin límites.
          </p>
          <a
            href="#reserva"
            className="mt-4 border border-kuro-fg/20 text-kuro-fg px-10 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-kuro-fg hover:text-kuro-bg transition-all duration-500"
          >
            Asegurar Mesa
          </a>
        </div>
      </div>

      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-5 font-[family-name:var(--font-mono-kuro)] text-kuro-primary/60 text-2xl">
        <span>無</span><span>限</span><span>の</span><span>美</span>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.4em] text-kuro-fg font-[family-name:var(--font-mono-kuro)]">Scroll</span>
        <div className="w-px h-14 bg-kuro-fg animate-pulse" />
      </div>
    </section>
  );
}