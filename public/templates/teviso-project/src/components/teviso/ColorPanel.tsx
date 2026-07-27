import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gamut from "@/assets/color-gamut.jpg";

export function ColorPanel() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".color-card", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="color" ref={root} className="relative px-6 py-32 sm:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#a78bfa]">
              Color
            </p>
            <h2 className="max-w-2xl font-serif text-5xl leading-[1] sm:text-7xl">
              Un billón <br />
              <span className="italic text-aurora">de matices</span>
            </h2>
          </div>
          <p className="max-w-md text-white/70">
            Quantum Dot de última generación y calibración Dolby Vision IQ.
            Colores que no existen en otras pantallas, ahora en la tuya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <div className="color-card glass relative col-span-1 overflow-hidden rounded-3xl md:col-span-4 md:row-span-2 aspect-[16/10] md:aspect-auto">
            <img
              src={gamut}
              alt="Espectro de color aurora"
              width={1600}
              height={1000}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="font-serif text-6xl text-aurora">100%</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/70">
                Cobertura DCI-P3
              </div>
            </div>
          </div>

          <ColorCard title="Dolby Vision IQ" desc="Adapta cada escena a tu luz ambiente en tiempo real." />
          <ColorCard title="1.07B" desc="Colores reales sobre panel 10-bit nativo." />
          <ColorCard title="Δ E < 1" desc="Precisión de referencia calibrada en fábrica." />
          <ColorCard title="Filmmaker Mode" desc="Ve cine exactamente como su director lo imaginó." />
        </div>
      </div>
    </section>
  );
}

function ColorCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="color-card glass col-span-1 md:col-span-2 flex flex-col justify-between rounded-3xl p-6 min-h-[180px]">
      <div className="font-serif text-2xl">{title}</div>
      <div className="text-sm text-white/60">{desc}</div>
    </div>
  );
}
