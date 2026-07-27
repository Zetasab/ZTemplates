const quotes = [
  {
    text: "Es la única manera honesta de entender un buffet: como una sucesión infinita de gestos perfectos. Kuro juega en otra liga.",
    who: "Marta Reverte",
    role: "Crítica gastronómica · El País",
  },
  {
    text: "Cada pieza llegaba al ritmo exacto. No es sushi a discreción; es omakase ininterrumpido. Salí sin querer hablar.",
    who: "Daniel Ochoa",
    role: "Sumiller · Restaurante DSTAgE",
  },
  {
    text: "Una experiencia oscura, sensorial y profundamente japonesa en pleno barrio de Salamanca. Volveré antes del verano.",
    who: "Lucía Bermejo",
    role: "Editora · Vogue España",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 md:py-40 px-6 lg:px-24 bg-kuro-surface text-kuro-fg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center" data-reveal>
          <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary mb-4">
            04 — La Crítica
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic">Voces de la mesa</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8" data-reveal-group>
          {quotes.map((q) => (
            <figure key={q.who} data-reveal-item className="border-t border-kuro-primary/40 pt-8 space-y-8">
              <span className="font-[family-name:var(--font-display)] text-5xl italic text-kuro-primary leading-none">“</span>
              <blockquote className="font-[family-name:var(--font-display)] text-xl md:text-2xl italic leading-snug text-kuro-fg/90 text-balance">
                {q.text}
              </blockquote>
              <figcaption className="text-xs font-[family-name:var(--font-mono-kuro)] uppercase tracking-[0.2em] text-kuro-muted">
                <span className="text-kuro-fg">{q.who}</span> · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}