import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";
import bottleMacro from "@/assets/bottle-macro.jpg";

export function Bottle() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bottle-img", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(".bottle-copy > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".bottle-copy", start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-ink overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 relative h-[80vh] lg:h-[120vh] overflow-hidden">
          <img
            src={bottleMacro}
            alt="Detalle macro del frasco facetado de O'Henal con gotas de agua"
            loading="lazy"
            className="bottle-img absolute inset-0 h-[120%] w-full object-cover"
            width={1600}
            height={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
        </div>
        <div className="lg:col-span-5 flex items-center px-6 md:px-12 lg:px-16 py-24">
          <div className="bottle-copy max-w-md">
            <div className="flex items-center gap-6 mb-10">
              <span className="hairline max-w-16" />
              <span className="text-eyebrow text-silver/70">II · El Objeto</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-bone mb-8">
              Cristal facetado, <em className="italic">peso de piedra</em>.
            </h2>
            <p className="text-bone/70 text-base md:text-lg leading-relaxed mb-6">
              Doce caras pulidas a mano que refractan la luz como una ola
              detenida en el tiempo. El tapón, fundido en latón cepillado,
              cierra con la precisión de un mecanismo náutico.
            </p>
            <p className="text-bone/70 text-base md:text-lg leading-relaxed">
              Cada frasco se rellena en taller, numerado y firmado.
              Ediciones limitadas a 500 unidades por temporada.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
              <div>
                <dt className="text-eyebrow text-silver/50 mb-2">Volumen</dt>
                <dd className="font-display text-2xl text-bone">100 ml</dd>
              </div>
              <div>
                <dt className="text-eyebrow text-silver/50 mb-2">Concentración</dt>
                <dd className="font-display text-2xl text-bone">22%</dd>
              </div>
              <div>
                <dt className="text-eyebrow text-silver/50 mb-2">Persistencia</dt>
                <dd className="font-display text-2xl text-bone">10–12 h</dd>
              </div>
              <div>
                <dt className="text-eyebrow text-silver/50 mb-2">Origen</dt>
                <dd className="font-display text-2xl text-bone">Grasse, FR</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
