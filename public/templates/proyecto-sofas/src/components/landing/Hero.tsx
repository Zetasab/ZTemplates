import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroSofa from "@/assets/hero-sofa.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Intro headline reveal
      gsap.from("[data-hero-line]", {
        yPercent: 110,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from("[data-hero-fade]", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.9,
      });

      // Parallax + subtle scale
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 15,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex h-screen w-full flex-col justify-end overflow-hidden p-6 md:p-20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src={heroSofa}
          alt="Sofá escultural de bouclé crema en salón arquitectónico de hormigón"
          width={1920}
          height={1280}
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      <div className="relative z-10 max-w-5xl text-bone">
        <div className="mb-8 overflow-hidden">
          <p
            data-hero-fade
            className="text-[10px] uppercase tracking-[0.35em] opacity-80"
          >
            Nueva colección · MMXXVI
          </p>
        </div>
        <h1 className="font-serif text-6xl leading-[0.86] tracking-tighter md:text-[9rem] lg:text-[11rem]">
          <span className="block overflow-hidden">
            <span data-hero-line className="block italic">Forma</span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block">&amp; Sentir</span>
          </span>
        </h1>
        <div className="mt-10 flex flex-col gap-6 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p
            data-hero-fade
            className="max-w-md text-base leading-relaxed opacity-90 md:text-lg"
          >
            Redefinimos la arquitectura del descanso. Siluetas minimalistas y
            expresiones escultóricas para un salón que respira.
          </p>
          <a
            data-hero-fade
            href="#colecciones"
            className="group inline-flex w-fit items-center gap-4 border-b border-bone/60 pb-2 text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
          >
            Explorar colección
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-bone md:bottom-10">
        <span className="text-[9px] uppercase tracking-[0.35em] opacity-70">
          Desliza
        </span>
        <span className="relative block h-8 w-px overflow-hidden bg-bone/30">
          <span className="animate-scroll-cue absolute top-0 h-3 w-px bg-bone" />
        </span>
      </div>
    </section>
  );
}
