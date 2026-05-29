import anatomy from "@/assets/anatomy.jpg";
import { useGsap, gsap } from "@/hooks/use-gsap";

const PARTS = [
  {
    side: "left",
    top: "18%",
    title: "Tapón hermético",
    body: "Rosca de acero con junta de silicona alimentaria. Cero fugas, cero goteo.",
  },
  {
    side: "right",
    top: "42%",
    title: "Doble pared al vacío",
    body: "Cámara sellada entre dos paredes de acero 18/8 para aislamiento térmico extremo.",
  },
  {
    side: "left",
    top: "66%",
    title: "Acabado mate cerámico",
    body: "Textura antideslizante resistente a arañazos, golpes y rayos UV.",
  },
  {
    side: "right",
    top: "88%",
    title: "Base de silicona",
    body: "Apoyo silencioso que protege superficies y evita deslizamientos accidentales.",
  },
];

export function Anatomy() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelector("[data-anatomy-img]"), {
      scale: 1.08,
      opacity: 0,
      duration: 1.4,
      ease: "expo.out",
      scrollTrigger: { trigger: scope, start: "top 70%" },
    });
    gsap.from(scope.querySelectorAll("[data-part]"), {
      x: (i) => (i % 2 === 0 ? -40 : 40),
      opacity: 0,
      duration: 0.9,
      ease: "expo.out",
      stagger: 0.15,
      scrollTrigger: { trigger: scope, start: "top 60%" },
    });
  });

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 md:px-8 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-4">
          04 / Anatomía
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">
          Cada detalle, intencional
        </h2>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="aspect-[3/4] relative">
          <img
            data-anatomy-img
            src={anatomy}
            alt="Anatomía de la botella AURA"
            width={1024}
            height={1408}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {PARTS.map((p) => (
          <div
            key={p.title}
            data-part
            className={`hidden md:block absolute w-64 ${
              p.side === "left" ? "right-full mr-8 text-right" : "left-full ml-8"
            }`}
            style={{ top: p.top }}
          >
            <div
              className={`flex items-center gap-3 ${
                p.side === "left" ? "justify-end" : "justify-start"
              }`}
            >
              {p.side === "right" && <div className="w-12 h-px bg-gold-muted" />}
              <span className="text-[10px] uppercase tracking-widest text-gold-muted">
                Detalle
              </span>
              {p.side === "left" && <div className="w-12 h-px bg-gold-muted" />}
            </div>
            <h4 className="font-display text-lg text-platinum mt-2">{p.title}</h4>
            <p className="text-xs text-platinum/50 mt-1 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="md:hidden mt-12 grid grid-cols-1 gap-6 max-w-md mx-auto">
        {PARTS.map((p) => (
          <div key={p.title} data-part className="border-t border-platinum/10 pt-4">
            <span className="text-[10px] uppercase tracking-widest text-gold-muted">Detalle</span>
            <h4 className="font-display text-lg text-platinum mt-1">{p.title}</h4>
            <p className="text-xs text-platinum/50 mt-1 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
