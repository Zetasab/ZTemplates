import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/lib/site-images";

export function Endgame() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(".endgame-img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">The Endgame</span>
        <h2 className="text-6xl md:text-8xl font-display mt-4">El setup definitivo.</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Nuestras teclas en su hábitat natural — teclados custom montados con obsesión por el detalle.</p>
      </div>
      <div className="relative w-full h-[70vh] overflow-hidden border-y border-border">
        <img
          src={img.setup}
          alt="Setup completo con teclado mecánico y keycaps artesanales KRYO.LAB"
          loading="lazy"
          width={1920}
          height={1088}
          className="endgame-img absolute inset-0 w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 pointer-events-none" />
      </div>
    </section>
  );
}
