import { useGsap, gsap } from "@/hooks/use-gsap";

const QUOTES = [
  {
    q: "Es la única pieza de mi escritorio que mis clientes siempre comentan. Pura escultura funcional.",
    a: "Marta Solé",
    r: "Directora creativa, Barcelona",
  },
  {
    q: "He llevado mi AURA del gimnasio al desierto de Atacama. El hielo seguía intacto al amanecer.",
    a: "Iván Reyes",
    r: "Fotógrafo de viaje",
  },
  {
    q: "Compré la cobalto y al mes la pino alpino. La obsidiana está en camino. Adictivas.",
    a: "Laura Méndez",
    r: "Arquitecta de interiores",
  },
];

export function Testimonials() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-quote]"), {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.15,
      scrollTrigger: { trigger: scope, start: "top 70%" },
    });
  });

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-6">
          06 / Palabras
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-20 leading-[0.95]">
          Cultura <br /> AURA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {QUOTES.map((q) => (
            <figure key={q.a} data-quote className="flex flex-col gap-8">
              <span className="font-display text-5xl text-gold-muted leading-none">"</span>
              <blockquote className="font-display text-xl md:text-2xl text-platinum leading-snug">
                {q.q}
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm text-platinum">{q.a}</p>
                <p className="text-[10px] uppercase tracking-widest text-platinum/40 mt-1">
                  {q.r}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
