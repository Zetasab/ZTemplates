import { useGsap, gsap } from "@/hooks/use-gsap";

const SPECS = [
  ["Capacidad", "750 ml / 25 oz"],
  ["Material", "Acero inoxidable 18/8"],
  ["Peso (vacía)", "430 g"],
  ["Aislamiento", "Doble pared al vacío"],
  ["Conservación frío", "48 horas"],
  ["Conservación calor", "24 horas"],
  ["Acabado", "Polvo cerámico mate"],
  ["Certificación", "Libre de BPA · CO₂ Neutral"],
];

export function Specs() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-row]"), {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: { trigger: scope, start: "top 75%" },
    });
  });

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 md:px-8 bg-obsidian">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-6">
          05 / Especificaciones
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-16 text-platinum">
          La ficha técnica.
        </h2>
        <div className="border-t border-platinum/10">
          {SPECS.map(([k, v]) => (
            <div
              key={k}
              data-row
              className="flex justify-between items-center py-6 border-b border-platinum/10 gap-6"
            >
              <span className="text-platinum/50 text-sm uppercase tracking-wider">{k}</span>
              <span className="font-display text-platinum text-right text-base md:text-lg">
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
