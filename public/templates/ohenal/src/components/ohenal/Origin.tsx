import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";
import craft from "@/assets/craft.jpg";

export function Origin() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".origin-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(".origin-copy > *", {
        y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".origin-copy", start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="origen" ref={root} className="relative bg-ink overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 px-6 md:px-12 lg:px-16 py-24 lg:py-40 flex items-center order-2 lg:order-1">
          <div className="origin-copy max-w-md">
            <div className="flex items-center gap-6 mb-10">
              <span className="hairline max-w-16" />
              <span className="text-eyebrow text-silver/70">IV · Origen</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-bone mb-10">
              El oficio del <em className="italic">silencio</em>.
            </h2>
            <p className="text-bone/70 leading-relaxed mb-6">
              Compuesta por Henri Allard en su taller de Grasse, O'Henal
              nace de catorce años persiguiendo una sola idea: capturar el
              instante exacto en que el mar toca la piedra.
            </p>
            <p className="text-bone/70 leading-relaxed mb-10">
              Cada lote macera durante seis meses antes de ser embotellado.
              Las materias primas — ámbar gris del Atlántico, iris de
              Florencia, vetiver de Haití — se seleccionan personalmente,
              cosecha por cosecha.
            </p>
            <blockquote className="border-l border-silver/40 pl-6 font-display italic text-xl md:text-2xl text-bone/90 leading-snug">
              «Un perfume no se huele. Se recuerda antes de existir.»
              <footer className="text-eyebrow text-silver/60 mt-4 not-italic">
                — Henri Allard, Maître Parfumeur
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[80vh] lg:h-[120vh] overflow-hidden order-1 lg:order-2">
          <img
            src={craft}
            alt="Maestro perfumero Henri Allard trabajando en su taller de Grasse"
            loading="lazy"
            className="origin-img absolute inset-0 h-[120%] w-full object-cover"
            width={1400}
            height={1800}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-ink/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
