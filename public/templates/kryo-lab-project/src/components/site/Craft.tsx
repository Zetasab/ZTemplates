import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/lib/site-images";

const steps = [
  { n: "01", t: "Esculpido Digital", d: "Modelado en alta poligonización para capturar hasta el poro más mínimo de la textura." },
  { n: "02", t: "Resina Grado Óptico", d: "Claridad cristalina que no amarillea con el tiempo ni con la exposición a la luz UV." },
  { n: "03", t: "Acabado Manual", d: "Cada tecla pasa por 4 etapas de pulido a mano para un tacto suave y premium." },
];

export function Craft() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(".craft-img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".craft-step", {
        y: 30, opacity: 0, stagger: 0.15, duration: 0.9, ease: "expo.out",
        scrollTrigger: { trigger: ".craft-steps", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="craft" ref={ref} className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="w-full aspect-square rounded-full border border-white/10 p-4 overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={img.brush}
                alt="Pincel pintando el detalle de una keycap artesanal"
                loading="lazy"
                width={1024}
                height={1024}
                className="craft-img w-full h-full object-cover scale-110"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 md:-right-8 bg-primary p-6 md:p-8 rounded-2xl shadow-2xl shadow-primary/40">
            <span className="font-serif italic text-3xl md:text-4xl">0.05mm</span>
            <p className="text-[10px] uppercase font-bold tracking-widest mt-2">Precisión de pincel</p>
          </div>
        </div>

        <div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">La Anatomía del Detalle</span>
          <h2 className="text-5xl md:text-6xl font-display mt-4 mb-10 leading-[0.95]">
            Obsesión por <br />lo diminuto.
          </h2>
          <div className="craft-steps space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="craft-step flex gap-6">
                <span className="font-mono text-primary text-sm mt-1">{s.n}</span>
                <div>
                  <h5 className="font-bold mb-2 uppercase text-xs tracking-widest">{s.t}</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
