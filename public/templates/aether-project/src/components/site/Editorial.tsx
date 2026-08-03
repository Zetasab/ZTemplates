import { useEffect, useRef } from "react";
import ed1 from "@/assets/editorial-1.jpg";
import ed2 from "@/assets/editorial-2.jpg";
import { gsap } from "@/hooks/useGsap";

export function Editorial() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
      gsap.to(".ed-img-1", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".ed-strip",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".ed-img-2", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".ed-strip",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="diario" className="py-24 md:py-40 relative">
      <div className="flex flex-col items-center text-center px-6 md:px-8">
        <div className="max-w-4xl">
          <h2
            data-reveal
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-10 md:mb-12 tracking-tighter italic text-balance"
          >
            El rostro del mañana
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-left">
            <p
              data-reveal
              className="text-sm leading-relaxed uppercase tracking-wider"
            >
              Creemos que el maquillaje es una herramienta de auto-escultura.
              Nuestra colección está diseñada para la individualista, la
              artista, y la visionaria que no ve límites en la auto-expresión.
            </p>
            <p data-reveal className="text-sm leading-relaxed text-brand-dark/60">
              Origen ético, vegano y neutro en carbono. Priorizamos la salud de
              tu piel y del planeta, utilizando extractos botánicos raros y
              minerales bio-tecnológicos avanzados para un rendimiento sin
              igual.
            </p>
          </div>
        </div>
      </div>

      <div className="ed-strip mt-20 md:mt-24 flex gap-4 overflow-hidden px-6 md:px-0">
        <div className="w-2/3 h-[400px] md:h-[560px] flex-shrink-0 overflow-hidden bg-brand-accent">
          <img
            src={ed1}
            alt="Editorial con maquillaje metálico"
            width={1200}
            height={800}
            loading="lazy"
            className="ed-img-1 w-full h-[120%] object-cover will-change-transform"
          />
        </div>
        <div className="w-1/3 h-[400px] md:h-[560px] flex-shrink-0 overflow-hidden bg-brand-accent/40">
          <img
            src={ed2}
            alt="Mezcla de pigmentos sobre paleta"
            width={800}
            height={800}
            loading="lazy"
            className="ed-img-2 w-full h-[120%] object-cover will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
