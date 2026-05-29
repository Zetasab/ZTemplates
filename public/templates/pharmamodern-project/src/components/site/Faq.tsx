import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Cuánto tarda mi pedido?", a: "Entre 1 y 2 horas en la ciudad. Fuera, en 24-48h con seguimiento en tiempo real." },
  { q: "¿Puedo subir mi receta electrónica?", a: "Sí. Tras tu pedido podrás adjuntar el código de receta y un farmacéutico lo validará." },
  { q: "¿La consulta online tiene coste?", a: "La primera consulta es gratuita. Después, suscripción mensual desde 4,90€." },
  { q: "¿Hacen envíos fuera del país?", a: "Por ahora solo enviamos a península y Baleares. Próximamente UE." },
  { q: "¿Puedo devolver un producto?", a: "Tienes 14 días para devolver productos sin abrir, salvo medicamentos por normativa sanitaria." },
  { q: "¿Aceptan tarjeta sanitaria?", a: "Sí, en farmacia física y para recetas validadas a través del sistema oficial." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium mb-4">FAQ</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border border-border overflow-hidden transition-organic reveal ${
                  isOpen ? "bg-card shadow-card" : "bg-muted/40"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span className="w-8 h-8 grid place-items-center rounded-full bg-background border border-border shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground animate-fade-in">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
