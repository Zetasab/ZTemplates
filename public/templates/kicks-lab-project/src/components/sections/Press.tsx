import { useRef } from "react";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

const quotes = [
  {
    text: "Las zapatillas más ruidosas del año. Imposibles de ignorar.",
    source: "HYPE / Magazine",
    rotate: -2,
    bg: "bg-paper",
  },
  {
    text: "Brutalist por fuera, ingeniería suiza por dentro.",
    source: "STREET-X",
    rotate: 1.5,
    bg: "bg-volt",
  },
  {
    text: "Si te las pones, te las ponen. No hay vuelta atrás.",
    source: "@kicks.daily",
    rotate: -1,
    bg: "bg-pop",
  },
  {
    text: "Cinco modelos. Un manifesto. Un fenómeno.",
    source: "DROP REPORT",
    rotate: 2,
    bg: "bg-paper",
  },
];

export function Press() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".quote-card", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="press" ref={root} className="bg-ink border-b-2 border-ink py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="font-display text-xs mb-8 flex items-center gap-3 text-paper">
          <span className="bg-pop border-2 border-pop text-ink px-2 py-1">07</span>
          <span>LA PRENSA HABLA</span>
          <span className="flex-1 h-0.5 bg-paper/40" />
        </div>
        <h2 className="text-paper text-5xl md:text-7xl mb-12">Lo que dicen.</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`quote-card ${q.bg} border-2 border-ink shadow-brutal-lg p-8 md:p-10`}
              style={{ transform: `rotate(${q.rotate}deg)` }}
            >
              <div className="font-display text-2xl md:text-4xl leading-tight text-ink">
                &ldquo;{q.text}&rdquo;
              </div>
              <div className="mt-6 font-display text-sm text-ink/70">— {q.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
