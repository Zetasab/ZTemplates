import { useGsap, gsap } from "@/hooks/use-gsap";

const FEATURES = [
  {
    n: "I",
    title: "Doble pared al vacío",
    body: "Una cámara de vacío absoluto entre dos paredes de acero detiene cualquier transferencia térmica. El frío permanece dentro, el calor exterior afuera.",
  },
  {
    n: "II",
    title: "Acero 18/8 quirúrgico",
    body: "Sin BPA, sin plásticos en contacto con el líquido. Solo acero inoxidable de grado alimentario que no altera el sabor ni libera partículas.",
  },
  {
    n: "III",
    title: "Acabado en polvo cerámico",
    body: "Un revestimiento mate antideslizante aplicado en hornos a alta temperatura. Resistente a arañazos, golpes y a la decoloración por luz solar.",
  },
];

export function Technology() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-reveal]"), {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: "expo.out",
      stagger: 0.12,
      scrollTrigger: { trigger: scope, start: "top 70%" },
    });
  });

  return (
    <section ref={ref} id="tech" className="py-32 md:py-48 px-6 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6">
          <div>
            <span
              data-reveal
              className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-4"
            >
              02 / Ingeniería
            </span>
            <h2
              data-reveal
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-[0.95]"
            >
              Frío que <br /> no se rinde
            </h2>
          </div>
          <p data-reveal className="max-w-md text-sm text-platinum/50 leading-relaxed">
            Tres capas de ingeniería que trabajan en silencio para que cada sorbo conserve la
            temperatura con la que lo serviste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-platinum/10">
          {FEATURES.map((f) => (
            <div
              key={f.n}
              data-reveal
              className="bg-slate-950 p-10 md:p-12 flex flex-col gap-6 min-h-[320px]"
            >
              <span className="font-display text-gold-muted text-sm tracking-widest">{f.n}</span>
              <h3 className="font-display text-2xl text-platinum leading-tight">{f.title}</h3>
              <p className="text-sm text-platinum/50 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
