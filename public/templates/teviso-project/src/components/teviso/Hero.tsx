import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroTv from "@/assets/hero-tv.jpg";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.8 })
        .from(".hero-title span", { y: 60, opacity: 0, duration: 1, stagger: 0.08 }, "-=0.5")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-tv", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=1.2")
        .from(".hero-orb", { scale: 0.6, opacity: 0, duration: 1.4, stagger: 0.15 }, "-=1.2");

      if (reduce) return;

      // Parallax layers on scroll
      gsap.to(".hero-orb-1", {
        yPercent: -30,
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-orb-2", {
        yPercent: 25,
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-tv", {
        yPercent: -12,
        scale: 1.05,
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -30,
        opacity: 0.2,
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28"
    >
      {/* Aurora orbs */}
      <div className="hero-orb hero-orb-1 aurora-orb left-[-10%] top-[10%] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] animate-float-slow bg-[#4ade80]" />
      <div className="hero-orb hero-orb-2 aurora-orb right-[-8%] bottom-[5%] h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] animate-float-slow bg-[#a78bfa]" style={{ animationDelay: "-3s" }} />
      <div className="hero-orb aurora-orb left-1/2 top-1/2 h-[30vw] w-[30vw] max-h-[400px] max-w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#22d3ee]" />

      {/* Copy */}
      <div className="hero-copy relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] animate-pulse-glow" />
          Nueva colección · Teviso 2026
        </p>
        <h1 className="hero-title font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-[8rem]">
          <span className="block">Ver es</span>
          <span className="block italic text-aurora">creer.</span>
          <span className="block">Otra vez.</span>
        </h1>
        <p className="hero-sub mx-auto mt-8 max-w-xl text-base text-white/70 sm:text-lg">
          Televisores diseñados sin compromisos. Resolución sobrehumana, color
          infinito y movimiento tan fluido que desaparece la pantalla.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#specs"
            className="hero-cta rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.04]"
          >
            Ver la gama
          </a>
          <a
            href="#resolucion"
            className="hero-cta rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Descubrir la tecnología
          </a>
        </div>
      </div>

      {/* TV image */}
      <div className="hero-tv relative z-0 mx-auto mt-14 w-[92%] max-w-5xl">
        <div className="pointer-events-none absolute -inset-x-20 -bottom-10 top-1/2 rounded-[3rem] bg-gradient-to-b from-[#a78bfa]/40 via-[#4ade80]/10 to-transparent blur-3xl" />
        <img
          src={heroTv}
          alt="Televisor Teviso con reflejos aurora"
          width={1600}
          height={1200}
          className="relative w-full rounded-[2rem] shadow-[0_40px_120px_-20px_rgba(74,222,128,0.35)]"
        />
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/25 pt-2">
          <div className="h-2 w-[2px] rounded-full bg-white/70 animate-scroll-tick" />
        </div>
      </div>
    </section>
  );
}
