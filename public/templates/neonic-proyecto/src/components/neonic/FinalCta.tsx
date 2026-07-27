import { useEffect, useRef } from "react";
import ctaImg from "@/assets/cta-projector.jpg";

export function FinalCta() {
  const bgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    let cancelled = false;
    let kill: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !bgRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      kill = () => {
        t.scrollTrigger?.kill();
        t.kill();
      };
    })();
    return () => {
      cancelled = true;
      kill?.();
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src={ctaImg}
          alt="Proyector cinematográfico"
          className="w-full h-[130%] object-cover"
          loading="lazy"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="relative z-10 max-w-4xl px-6 md:px-10 py-32 md:py-40 text-center">
        <span className="text-[10px] font-mono-tight uppercase tracking-[0.35em] text-primary mb-8 block">
          El telón está por levantarse
        </span>
        <h2 className="font-display text-6xl md:text-9xl tracking-tighter leading-[0.9] mb-8">
          EL CINE <br />
          <span className="italic font-editorial font-normal text-primary">te está</span> ESPERANDO.
        </h2>
        <p className="text-lg md:text-xl font-editorial italic text-muted-foreground max-w-xl mx-auto mb-12">
          Comienza tu prueba de 30 días y descubre por qué NEONIC está
          redefiniendo el streaming premium.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary text-primary-foreground px-12 py-5 uppercase text-xs tracking-[0.25em] font-bold hover:brightness-110 transition-all">
            Empezar prueba gratuita
          </button>
          <button className="border border-foreground/30 px-12 py-5 uppercase text-xs tracking-[0.25em] hover:bg-foreground hover:text-background transition-all">
            Ver planes
          </button>
        </div>
      </div>
    </section>
  );
}