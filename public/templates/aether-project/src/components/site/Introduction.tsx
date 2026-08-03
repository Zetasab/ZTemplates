import { useEffect, useRef } from "react";
import portrait from "@/assets/portrait.jpg";
import intro from "@/assets/intro-bottle.jpg";
import { gsap, ScrollTrigger } from "@/hooks/useGsap";

export function Introduction() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
      gsap.to(".intro-parallax", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-8">
          <span
            data-reveal
            className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold italic block"
          >
            El nuevo estándar
          </span>
          <h2
            data-reveal
            className="font-display text-4xl md:text-6xl leading-[1.05] text-balance"
          >
            Pigmentos universales para el rostro contemporáneo.
          </h2>
          <p
            data-reveal
            className="text-base md:text-lg text-brand-dark/70 leading-relaxed font-light max-w-prose"
          >
            Aether trasciende las fronteras del género con fórmulas adaptativas
            que celebran la piel como un lienzo. Nuestros productos no son solo
            maquillaje; son la luz capturada en frascos de vidrio.
          </p>
          <div data-reveal className="pt-4 overflow-hidden">
            <img
              src={intro}
              alt="Frasco de vidrio sobre mármol oscuro"
              width={1200}
              height={800}
              loading="lazy"
              className="intro-parallax w-full aspect-[3/2] object-cover will-change-transform"
            />
          </div>
        </div>
        <div className="relative pt-12 md:pt-0">
          <div data-reveal className="overflow-hidden">
            <img
              src={portrait}
              alt="Retrato editorial con maquillaje de lujo"
              width={800}
              height={1200}
              loading="lazy"
              className="w-full aspect-[2/3] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-brand-gold p-8 md:p-12 hidden md:block">
            <p className="text-white font-display italic text-2xl md:text-3xl max-w-[220px] leading-tight">
              La belleza no tiene binario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
