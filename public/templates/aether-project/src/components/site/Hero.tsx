import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { gsap, ScrollTrigger } from "@/hooks/useGsap";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      // Title clip reveal
      gsap.fromTo(
        ".hero-line",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.6,
          ease: "expo.out",
          stagger: 0.15,
          delay: 0.2,
        },
      );
      gsap.fromTo(
        ".hero-sub, .hero-cta, .hero-meta",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
          delay: 1.1,
        },
      );
      // Parallax on bg
      gsap.to(".hero-bg", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      // Scale on bg
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.15 },
        { scale: 1, duration: 2.4, ease: "expo.out" },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={rootRef}
      id="top"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Textura cremosa con destellos de oro"
          width={1920}
          height={1080}
          className="hero-bg w-full h-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-brand-dark/30" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.85] italic text-brand-bone drop-shadow-2xl">
          <span className="block overflow-hidden">
            <span className="hero-line block">Lumière</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line not-italic block md:ml-[10vw]">
              Absolue
            </span>
          </span>
        </h1>
        <div className="mt-10 md:mt-12 flex flex-col items-center">
          <p className="hero-sub text-brand-bone/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-8 max-w-xl">
            Alta definición y radiancia para todas las identidades
          </p>
          <a
            href="#esenciales"
            className="hero-cta inline-block px-10 py-4 bg-brand-bone text-brand-dark text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-brand-gold hover:text-white transition-all duration-500"
          >
            Explorar la edición
          </a>
        </div>
      </div>

      <div className="hero-meta absolute bottom-10 left-6 md:left-10 flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-bone/60">
        <span>01 / 06</span>
        <span className="h-px w-20 bg-brand-bone/30" />
        <span>Desliza</span>
      </div>
      <div className="hero-meta absolute bottom-10 right-6 md:right-10 text-[10px] uppercase tracking-widest text-brand-bone/60">
        Edición Otoño · MMXXIV
      </div>
    </header>
  );
}
