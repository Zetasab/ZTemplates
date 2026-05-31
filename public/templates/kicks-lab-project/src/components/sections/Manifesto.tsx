import { useRef } from "react";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

const text = "No diseñamos zapatillas. Construimos declaraciones de intenciones. Cada par sale del taller para romper, no para encajar. Hecho para los jóvenes que se mueven rápido y miran a los ojos.";

export function Manifesto() {
  const root = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".manif-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-paper border-b-2 border-ink py-24 md:py-40 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="font-display text-xs mb-8 flex items-center gap-3">
          <span className="bg-pop border-2 border-ink px-2 py-1">01</span>
          <span>MANIFIESTO</span>
          <span className="flex-1 h-0.5 bg-ink" />
        </div>
        <p className="font-display text-3xl md:text-6xl lg:text-7xl leading-[1.05]">
          {words.map((w, i) => (
            <span key={i} className="manif-word inline-block mr-3 md:mr-5">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
