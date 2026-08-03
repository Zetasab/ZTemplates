import { useParallax, useScrollReveal } from "@/hooks/use-scroll-reveal";
import flowSofa from "@/assets/flow-sofa.jpg";

export function LiquidSilhouette() {
  const revealRef = useScrollReveal<HTMLElement>("[data-reveal]");
  const parallaxRef = useParallax<HTMLImageElement>(80);

  return (
    <section
      ref={revealRef}
      className="grid grid-cols-1 items-center gap-16 border-t border-ink/10 px-6 py-32 md:grid-cols-12 md:gap-12 md:px-20 md:py-48"
    >
      <div className="space-y-8 md:col-span-5 md:col-start-1">
        <span
          data-reveal
          className="block text-[10px] font-medium uppercase tracking-[0.35em] text-accent"
        >
          · Formas orgánicas
        </span>
        <h2
          data-reveal
          className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
        >
          La silueta <br />
          <em className="italic">líquida</em>
        </h2>
        <p
          data-reveal
          className="max-w-md text-base leading-relaxed text-muted-foreground"
        >
          Nuestra serie <em className="italic">Flow</em> desafía la caja
          tradicional. Cada pieza se talla a mano emulando la erosión suave de
          los cantos rodados — más escultura que mobiliario, un centro de
          gravedad para toda la estancia.
        </p>
        <div data-reveal className="pt-4">
          <a
            href="#colecciones"
            className="inline-flex items-center gap-3 bg-ink px-8 py-5 text-[11px] uppercase tracking-[0.25em] text-bone transition-colors hover:bg-ink/85"
          >
            Descubrir Flow
            <span>→</span>
          </a>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <img
            ref={parallaxRef}
            src={flowSofa}
            alt="Detalle escultórico del sofá Flow en cuero blanco"
            width={1200}
            height={1500}
            loading="lazy"
            className="h-[110%] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
