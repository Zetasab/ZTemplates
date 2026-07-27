import { useParallax } from "@/hooks/use-parallax";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(80);

  return (
    <header
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 md:px-10 md:pb-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 -inset-y-[10%]">
          <img
            src={heroImg}
            alt="Vestido de seda drapeado sobre silla escultórica al amanecer"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />
      </div>

      <div className="max-w-4xl animate-fade-up">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-white/90">
          L'Atelier de l'Aube — MMXXIV
        </p>
        <h1 className="mb-10 text-balance font-display text-5xl italic leading-[0.85] text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          La arquitectura
          <br />
          del silencio textil.
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#coleccion"
            className="group inline-flex items-center gap-3 border border-white/40 bg-white/5 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
          >
            Explorar Colección
            <span className="block h-[1px] w-6 bg-current transition-all group-hover:w-10" />
          </a>
          <a
            href="#manifiesto"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70 underline-offset-4 hover:underline"
          >
            Leer el manifiesto
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-cue">
        <div className="h-12 w-px bg-white/50" />
      </div>
    </header>
  );
}
