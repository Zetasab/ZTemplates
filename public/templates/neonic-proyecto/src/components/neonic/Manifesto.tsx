import { useEffect, useRef } from "react";

export function Manifesto() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let kill: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !trackRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.to(trackRef.current, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
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
    <section className="py-32 md:py-48 overflow-hidden border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-16 grid md:grid-cols-12 gap-8">
        <span className="md:col-span-2 text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary">
          Manifiesto / 00
        </span>
        <p className="md:col-span-8 text-2xl md:text-4xl font-editorial italic leading-[1.2] text-pretty">
          "El cine no es un producto que se consume, es una experiencia que se
          <span className="text-primary"> habita</span>. NEONIC existe para
          quienes entienden la diferencia."
        </p>
      </div>
      <div ref={trackRef} className="flex gap-16 whitespace-nowrap font-display text-[14vw] md:text-[10vw] leading-none tracking-tighter text-foreground/10">
        <span>CINEFILIA ·</span>
        <span className="text-primary/40">CURADURÍA ·</span>
        <span>OBSESIÓN ·</span>
        <span className="text-primary/40">CINEFILIA ·</span>
        <span>CURADURÍA ·</span>
      </div>
    </section>
  );
}