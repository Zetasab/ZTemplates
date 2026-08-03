import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Manifesto() {
  const ref = useScrollReveal<HTMLElement>("[data-reveal]");

  return (
    <section ref={ref} className="px-6 py-32 md:px-20 md:py-48">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <span
            data-reveal
            className="text-[10px] uppercase tracking-[0.35em] text-accent"
          >
            · Manifiesto
          </span>
        </div>
        <div className="md:col-span-9">
          <h2
            data-reveal
            className="mb-16 font-serif text-3xl leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            Creemos en el lujo silencioso. Objetos que no gritan, sino que
            sostienen el espacio con una <em className="italic">presencia calmada</em>.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <p
              data-reveal
              className="text-base leading-relaxed text-muted-foreground text-pretty"
            >
              Diseñamos sofás que son arquitecturas habitables. Cada línea está
              pensada para equilibrar la estética escultórica con la ergonomía
              más sofisticada — porque descansar también es un acto de estilo.
            </p>
            <p
              data-reveal
              className="text-base leading-relaxed text-muted-foreground text-pretty"
            >
              Desde nuestro taller, seleccionamos pieles de grano completo,
              linos belgas y bouclés italianos que desarrollan una pátina
              propia con el paso de las décadas. Piezas para heredar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
