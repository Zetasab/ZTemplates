import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/lib/site-images";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const wordRef = useRef<HTMLHeadingElement>(null);
  const keycapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(wordRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(keycapRef.current, {
        yPercent: 15,
        rotate: 4,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <h1
          ref={wordRef}
          className="font-display leading-none text-white/[0.035] select-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "25vw" }}
        >
          ARTISAN
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="animate-reveal [animation-delay:150ms]">
          <p className="font-mono text-primary text-xs mb-6 tracking-widest">SERIE LIMITADA // 001</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-balance mb-8">
            JOYERÍA PARA <br />
            <span className="text-primary">TUS DEDOS.</span>
          </h2>
          <p className="max-w-md text-muted-foreground text-lg text-pretty mb-8">
            Esculturas de resina de 18 milímetros cuadrados. Diseñadas para elevar tu setup mecánico a una pieza de galería.
          </p>
          <div className="flex gap-4">
            <a href="#colecciones" className="px-6 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity">
              Ver colecciones
            </a>
            <a href="#craft" className="px-6 py-3 border border-border text-xs font-bold uppercase tracking-widest rounded-full hover:border-primary hover:text-primary transition-colors">
              El proceso
            </a>
          </div>
        </div>

        <div ref={keycapRef} className="animate-scale">
          <div className="w-full aspect-[4/5] rounded-2xl shadow-2xl shadow-primary/20 border border-white/5 overflow-hidden animate-float">
            <img src={img.hero} alt="Keycap artesanal roja con paisaje en su interior" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] animate-pulse">
        Scroll ↓
      </div>
    </section>
  );
}
