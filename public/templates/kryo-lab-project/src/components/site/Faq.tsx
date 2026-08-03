import { useState } from "react";

const faqs = [
  { q: "¿Qué compatibilidad tienen las teclas?", a: "Todas nuestras keycaps utilizan stem MX estándar, compatible con la mayoría de teclados mecánicos (Cherry, Gateron, Kailh, etc.)." },
  { q: "¿Cuánto tarda un envío?", a: "Envíos en 24-72h dentro de España, 5-10 días al resto del mundo. Los encargos custom añaden 3-5 semanas de producción." },
  { q: "¿Cómo cuido una keycap de resina?", a: "Basta con paño de microfibra y agua tibia. Evita disolventes y la exposición prolongada a luz solar directa." },
  { q: "¿Hacéis restock de ediciones limitadas?", a: "No. Cada Serie Limitada se produce una única vez. Sí lanzamos referencias inspiradas o v.2 con variaciones cromáticas." },
  { q: "¿Puedo devolver una keycap?", a: "Devoluciones aceptadas en 14 días para piezas de catálogo. Los custom son no reembolsables por su naturaleza única." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Preguntas Frecuentes</span>
        <h2 className="text-5xl md:text-6xl font-display mt-4">Antes de que preguntes.</h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-6 text-left group"
            >
              <span className="text-lg md:text-xl font-display tracking-wide group-hover:text-primary transition-colors">{f.q}</span>
              <span className={`font-mono text-primary text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                open === i ? "max-h-40 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
