import { useRef } from "react";
import heroImg from "@/assets/hero-sneaker.jpg";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".hero-line > span", {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.1,
      });
      gsap.from(".hero-meta", { opacity: 0, y: 20, duration: 0.8, delay: 0.6 });
      gsap.from(".hero-img", { scale: 0.9, opacity: 0, duration: 1.2, ease: "expo.out", delay: 0.2 });

      gsap.to(".hero-img", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-bg-volt", {
        yPercent: -40,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-screen pt-20 border-b-2 border-ink overflow-hidden"
    >
      {/* color blocks */}
      <div className="hero-bg-volt absolute top-20 -left-10 w-[40vw] h-[40vw] bg-volt -rotate-6" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-pop" aria-hidden />

      <div className="relative grid md:grid-cols-12 gap-6 px-4 md:px-8 py-10 md:py-16 items-center">
        <div className="md:col-span-7">
          <div className="inline-block bg-ink text-paper px-3 py-1 font-display text-xs mb-6">
            DROP 05 / 2026 — LIMITED
          </div>
          <h1 className="text-[18vw] md:text-[12vw] lg:text-[10vw] leading-[0.85]">
            <span className="hero-line block reveal-line"><span>KICKS</span></span>
            <span className="hero-line block reveal-line"><span className="text-pop">NO RULES</span></span>
            <span className="hero-line block reveal-line"><span className="italic">/ raw.</span></span>
          </h1>
          <p className="hero-meta mt-8 max-w-md font-body text-lg leading-snug">
            Cinco siluetas. Cero compromisos. Zapatillas hechas para los que escriben sus propias reglas en la calle.
          </p>
          <div className="hero-meta mt-8 flex flex-wrap gap-3">
            <a href="#models" className="border-2 border-ink bg-pop text-ink px-6 py-3 font-display shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              EXPLORAR DROP
            </a>
            <a href="#anatomy" className="border-2 border-ink bg-paper text-ink px-6 py-3 font-display shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              VER TECH ↓
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="hero-img relative aspect-square border-2 border-ink bg-paper">
            <img
              src={heroImg}
              alt="Zapatilla protagonista del drop"
              className="absolute inset-0 w-full h-full object-cover"
              width={1536}
              height={1536}
            />
            <div className="absolute -bottom-4 -right-4 bg-volt border-2 border-ink px-3 py-1 font-display text-sm">
              €189
            </div>
            <div className="absolute -top-4 -left-4 bg-ink text-paper border-2 border-ink px-3 py-1 font-display text-xs">
              VOLT-01
            </div>
          </div>
        </div>
      </div>

      {/* ticker */}
      <div className="relative border-t-2 border-ink bg-ink text-paper overflow-hidden">
        <div className="marquee-ticker flex whitespace-nowrap py-4 font-display text-2xl md:text-4xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8 px-4 animate-[marquee_30s_linear_infinite]">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="flex items-center gap-8">
                  KICKS LAB <span className="text-pop">★</span> NO RULES <span className="text-volt">●</span> DROP 05
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-ticker > div { will-change: transform; }
      `}</style>
    </section>
  );
}
