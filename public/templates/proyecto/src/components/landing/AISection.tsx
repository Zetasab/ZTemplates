import aiGhost from "@/assets/ai-ghost.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";

export function AISection() {
  const textRef = useReveal<HTMLDivElement>(100);
  const imgRef = useParallax<HTMLDivElement>(60);

  return (
    <section id="intelligence" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div ref={textRef}>
          <span className="mb-6 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
            01 — Inteligencia integrada
          </span>
          <h2 className="mb-6 max-w-[22ch] text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
            Generación contextual que se adelanta a tus pulsaciones.
          </h2>
          <p className="mb-8 max-w-[52ch] text-pretty text-lg text-muted-foreground">
            Kinetic no completa líneas: comprende tu workspace entero.
            Refactorizaciones multi-archivo, sugerencias arquitectónicas y respuestas conversacionales sobre tu propio código,
            todo con inferencia local sub-10ms.
          </p>
          <ul className="space-y-4">
            {[
              "Inferencia local para latencia sub-10ms",
              "Búsqueda semántica en toda la base de código",
              "Refactorización multi-archivo con un comando",
              "Chat contextual con memoria del proyecto",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <div ref={imgRef} className="will-change-transform">
            <img
              src={aiGhost}
              alt="Sugerencia de autocompletado con brillo verde en el editor Kinetic"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}