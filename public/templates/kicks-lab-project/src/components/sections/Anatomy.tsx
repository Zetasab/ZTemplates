import { useRef } from "react";
import anatomyImg from "@/assets/anatomy.jpg";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

const specs = [
  { n: "01", label: "Upper Mesh", val: "Tejido aireado con refuerzo TPU" },
  { n: "02", label: "Plantilla", val: "Espuma de memoria reactiva" },
  { n: "03", label: "Midsole", val: "EVA de doble densidad" },
  { n: "04", label: "Outsole", val: "Caucho geométrico anti-deslizante" },
];

export function Anatomy() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".spec-card", {
        x: -40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
      gsap.to(".anatomy-img", {
        rotate: 10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="anatomy" ref={root} className="relative bg-paper border-b-2 border-ink py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="font-display text-xs mb-8 flex items-center gap-3">
          <span className="bg-volt border-2 border-ink px-2 py-1">05</span>
          <span>ANATOMÍA / TECH</span>
          <span className="flex-1 h-0.5 bg-ink" />
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl mb-12">
          Cuatro capas. <br />
          <span className="bg-pop px-2">Cero relleno.</span>
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[4/3] border-2 border-ink bg-volt overflow-hidden">
            <img
              src={anatomyImg}
              alt="Vista explotada"
              loading="lazy"
              className="anatomy-img w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
          <div className="md:col-span-5 space-y-4">
            {specs.map((s) => (
              <div key={s.n} className="spec-card border-2 border-ink bg-paper shadow-brutal-sm p-5 flex gap-4">
                <div className="font-display text-4xl md:text-5xl text-pop leading-none">{s.n}</div>
                <div>
                  <div className="font-display text-lg">{s.label}</div>
                  <div className="font-body text-sm text-ink/70 mt-1">{s.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
