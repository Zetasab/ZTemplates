import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "@/assets/resolution-8k.jpg";

export function Resolution() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.to(".res-img", {
        yPercent: -15,
        scale: 1.1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".res-stat", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".res-stats", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="resolucion" ref={root} className="relative">
      <div className="relative h-[110vh] overflow-hidden">
        <img
          src={bg}
          alt="Paisaje 8K con auroras boreales"
          width={1920}
          height={1080}
          loading="lazy"
          className="res-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />

        <div className="sticky top-0 flex h-screen items-center px-6">
          <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#4ade80]">
                Resolución
              </p>
              <h2 className="font-serif text-5xl leading-[1] sm:text-7xl">
                33 millones <br />
                <span className="italic text-aurora">de razones</span>
              </h2>
              <p className="mt-6 max-w-md text-white/70">
                Nuestro panel 8K QLED reconstruye cada detalle con una densidad
                nunca vista. El grano de una hoja, la textura de la piel, la
                niebla en el horizonte. Todo, exactamente donde debe estar.
              </p>
            </div>
            <div className="res-stats grid grid-cols-2 gap-4 self-end">
              <Stat kpi="8K" label="7680 × 4320 px" />
              <Stat kpi="1M:1" label="Contraste dinámico" />
              <Stat kpi="4000" label="nits pico HDR" />
              <Stat kpi="AI×4" label="Upscaling neuronal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="res-stat glass rounded-2xl p-5">
      <div className="font-serif text-4xl text-aurora">{kpi}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
        {label}
      </div>
    </div>
  );
}
