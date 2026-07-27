import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-neon-city.jpg";

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let cancelled = false;
    let kill: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !imgRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.to(imgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top",
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
    <section className="relative h-screen min-h-[720px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={imgRef}
          src={heroImg}
          alt="Ciudad neón bajo la lluvia"
          className="w-full h-[120%] object-cover animate-neonic-scale"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-10 pb-24 max-w-[1600px]">
        <div className="flex items-center gap-3 mb-8 animate-neonic-reveal">
          <span className="h-px w-12 bg-primary" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-primary font-mono-tight">
            NEONIC · Digital Cinema · MMXXVI
          </span>
        </div>
        <h1
          className="font-display text-[18vw] md:text-[15vw] leading-[0.82] tracking-tighter mb-10 flex flex-col animate-neonic-reveal"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-primary">CINEFILIA</span>
          <span className="ml-[8vw] md:ml-[12vw]">SIN LÍMITES</span>
        </h1>
        <div
          className="flex flex-col md:flex-row gap-10 md:items-end animate-neonic-reveal"
          style={{ animationDelay: "400ms" }}
        >
          <p className="max-w-md text-lg md:text-xl italic text-muted-foreground leading-relaxed font-editorial">
            La curaduría más exigente del cine contemporáneo y clásico. Una experiencia visual sin concesiones en 4K HDR con audio Dolby Atmos.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-primary-foreground px-8 md:px-10 py-4 md:py-5 font-bold text-xs tracking-[0.2em] uppercase hover:brightness-110 transition-all">
              Suscríbete ahora
            </button>
            <button className="border border-foreground/30 px-8 py-4 md:py-5 uppercase text-xs tracking-[0.2em] hover:bg-foreground hover:text-background transition-all">
              Ver tráiler
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-10 z-10 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground animate-neonic-blink">
        <span>Scroll</span>
        <span className="h-10 w-px bg-muted-foreground/50" />
      </div>
    </section>
  );
}