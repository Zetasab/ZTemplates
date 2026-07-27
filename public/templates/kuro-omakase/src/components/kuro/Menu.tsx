const categories = [
  {
    n: "01",
    title: "Nigiri & Gunkan",
    items: [
      ["Salmón Ahumado en Robata", "Signature"],
      ["Anguila Unagi con Foie", "+5€"],
      ["Pez Mantequilla con Trufa", ""],
      ["Langostino Tigre Flambeado", ""],
      ["Vieira Hokkaido con Yuzu", ""],
    ],
  },
  {
    n: "02",
    title: "Maki Especiales",
    items: [
      ["Kuro Roll · Tempura de Bogavante", "Signature"],
      ["Spicy Tuna Tartare Roll", ""],
      ["Dragon Roll de Espárrago Triguero", ""],
      ["Soft Shell Crab Futomaki", ""],
      ["Salmon Crunch con Mango", ""],
    ],
  },
  {
    n: "03",
    title: "Sashimi & Tiraditos",
    items: [
      ["Sashimi de Toro Premium", "+8€"],
      ["Tiradito Nikkei de Corvina", ""],
      ["Carpaccio de Pez Limón", ""],
      ["Sashimi Variado del Día", "Chef's Pick"],
    ],
  },
  {
    n: "04",
    title: "Cocina Caliente & Postres",
    items: [
      ["Gyozas de Pato Confitado", ""],
      ["Tempura de Verduras de Temporada", ""],
      ["Black Cod Miso (24h marinado)", "Signature"],
      ["Mochi de Matcha y Sésamo Negro", ""],
      ["Helado de Yuzu con Aceite de Oliva", ""],
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-32 md:py-48 px-6 max-w-6xl mx-auto bg-kuro-bg text-kuro-fg">
      <div className="text-center mb-20 md:mb-28" data-reveal>
        <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.5em] text-kuro-primary mb-4">
          02 — La Carta
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl italic">El Catálogo Infinito</h2>
        <p className="text-xs font-[family-name:var(--font-mono-kuro)] uppercase tracking-[0.3em] mt-6 text-kuro-muted">
          Todo incluido · Preparación al momento · Más de 80 piezas
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-20 gap-y-16" data-reveal-group>
        {categories.map((cat) => (
          <div key={cat.n} data-reveal-item>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-kuro-primary text-lg font-[family-name:var(--font-mono-kuro)]">{cat.n}</span>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] border-b border-kuro-primary/40 pb-1">
                {cat.title}
              </h3>
            </div>
            <ul className="space-y-4 text-sm">
              {cat.items.map(([name, tag]) => (
                <li key={name} className="flex justify-between gap-4 border-b border-kuro-border pb-3">
                  <span className="text-kuro-fg/90">{name}</span>
                  {tag && (
                    <span className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-widest text-kuro-muted italic shrink-0">
                      {tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}