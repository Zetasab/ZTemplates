import { useEffect, useRef } from "react";
import { gsap, useGsapReady } from "@/hooks/use-gsap";

const notes = [
  {
    id: "salida",
    label: "Salida",
    roman: "I",
    title: "Sal marina · Bergamota helada · Cardamomo",
    body: "El primer impacto: una brisa cortante que despierta la piel, cítrica y mineral, como un amanecer sobre el Atlántico norte.",
  },
  {
    id: "corazon",
    label: "Corazón",
    roman: "II",
    title: "Almizcle blanco · Iris acuático · Lavanda nocturna",
    body: "El cuerpo respira. Una calma floral, casi metálica, que envuelve sin pesar — la quietud entre dos olas.",
  },
  {
    id: "fondo",
    label: "Fondo",
    roman: "III",
    title: "Ámbar gris · Vetiver húmedo · Maderas de driftwood",
    body: "Lo que queda en la piel horas después: la memoria de la madera arrastrada por la marea, cálida y profunda.",
  },
];

export function Notes() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".notes-head > *", {
        y: 24, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".notes-head", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".note-card").forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="notas" ref={root} className="relative bg-abyss py-32 md:py-48 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="notes-head mb-24 md:mb-32 max-w-3xl">
          <div className="flex items-center gap-6 mb-10">
            <span className="hairline max-w-20" />
            <span className="text-eyebrow text-silver/70">III · Composición</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-bone tracking-tight">
            Tres tiempos,<br />
            <em className="italic text-silver/90">una sola corriente.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-bone/10">
          {notes.map((n) => (
            <article key={n.id} className="note-card bg-abyss p-8 md:p-12 lg:p-16 min-h-[420px] flex flex-col">
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-display text-6xl md:text-7xl text-silver/40 leading-none">
                  {n.roman}
                </span>
                <span className="text-eyebrow text-silver/70">{n.label}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-snug text-bone mb-6 flex-1">
                {n.title}
              </h3>
              <p className="text-bone/60 leading-relaxed text-sm md:text-base">
                {n.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
