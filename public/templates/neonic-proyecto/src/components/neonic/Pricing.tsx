const tiers = [
  {
    name: "Básico",
    price: "9,99",
    highlight: false,
    features: ["1 dispositivo", "Full HD 1080p", "Catálogo completo", "Sin descargas offline"],
    cta: "Comenzar",
  },
  {
    name: "Premium",
    price: "15,99",
    highlight: true,
    features: ["4 dispositivos", "4K HDR + Dolby Atmos", "Descargas ilimitadas", "Originales exclusivos"],
    cta: "Seleccionar",
  },
  {
    name: "Cineasta",
    price: "19,99",
    highlight: false,
    features: ["Dispositivos ilimitados", "8K Master Quality", "Invitaciones a estrenos", "Comentarios de directores"],
    cta: "Seleccionar",
  },
];

export function Pricing() {
  return (
    <section id="planes" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-6 block">
            Planes · Cancela cuando quieras
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-none mb-6">
            ELIGE TU EXPERIENCIA
          </h2>
          <p className="text-muted-foreground font-editorial italic max-w-lg mx-auto">
            Planes adaptados a tu pasión por el cine. Sin permanencia. Sin
            letra pequeña.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-10 flex flex-col relative ${
                t.highlight
                  ? "border-2 border-primary bg-primary/5"
                  : "border border-border"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] px-3 py-1 uppercase tracking-[0.25em] font-bold">
                  Más popular
                </div>
              )}
              <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {t.name}
              </span>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="font-display text-6xl tracking-tighter">
                  {t.price}€
                </span>
                <span className="text-sm text-muted-foreground">/mes</span>
              </div>
              <ul className="text-sm space-y-4 mb-12 flex-grow border-t border-border pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 uppercase text-[11px] tracking-[0.25em] font-bold transition-all ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border hover:border-foreground"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}