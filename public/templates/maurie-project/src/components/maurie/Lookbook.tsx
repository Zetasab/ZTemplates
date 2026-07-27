import { useParallax } from "@/hooks/use-parallax";
import campaign from "@/assets/campaign.jpg";

export function Lookbook() {
  const ref = useParallax<HTMLDivElement>(140);
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div ref={ref} className="absolute inset-0 -inset-y-[15%]">
        <img
          src={campaign}
          alt="Campaña de invierno Maurié — figura caminando bajo arcos mediterráneos al atardecer"
          width={1920}
          height={1280}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-foreground/10" />

      <div className="absolute inset-0 flex items-end justify-end p-6 md:p-16">
        <div className="max-w-sm border border-black/5 bg-background/90 p-10 backdrop-blur-md md:p-12">
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
            Lookbook / Invierno 24
          </p>
          <h3 className="mb-6 font-display text-3xl italic md:text-4xl">
            El sur al amanecer
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            Fotografiado en Cádiz por Inés Vilanova. Catorce piezas, una sola
            silueta, tres horas de luz.
          </p>
          <a
            href="#"
            className="inline-block border-b border-foreground pb-1 font-mono text-[10px] uppercase tracking-[0.3em]"
          >
            Ver Editorial Completo
          </a>
        </div>
      </div>
    </section>
  );
}
