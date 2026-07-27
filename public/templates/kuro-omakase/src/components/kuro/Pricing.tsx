export function Pricing() {
  return (
    <section className="bg-kuro-bg py-32 md:py-40 px-6 flex flex-col items-center text-kuro-fg">
      <div className="text-center mb-16" data-reveal>
        <p className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary mb-4">
          05 — La Experiencia
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl italic">Dos rituales, una mesa</h2>
      </div>

      <div className="w-full max-w-5xl border border-kuro-border p-10 md:p-16 lg:p-20 relative overflow-hidden bg-kuro-surface/40">
        <div className="absolute -top-6 -right-6 font-[family-name:var(--font-mono-kuro)] text-kuro-fg/[0.04] text-[12rem] md:text-[18rem] leading-none pointer-events-none select-none">
          金
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="md:border-r md:border-kuro-border md:pr-12" data-reveal>
            <h3 className="font-[family-name:var(--font-display)] text-3xl mb-3">Almuerzo Zen</h3>
            <p className="text-xs text-kuro-muted uppercase tracking-widest mb-8">Lun — Vie · 13:30 — 16:00</p>
            <div className="font-[family-name:var(--font-display)] text-6xl italic mb-8">
              45€ <span className="text-sm not-italic font-sans text-kuro-muted tracking-normal">/ persona</span>
            </div>
            <ul className="text-xs space-y-3 text-kuro-muted uppercase tracking-wider">
              <li>• Selección de 40 piezas</li>
              <li>• Postre artesanal incluido</li>
              <li>• Té matcha de bienvenida</li>
              <li>• Maridaje opcional · +18€</li>
            </ul>
          </div>
          <div data-reveal>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-kuro-primary">Cena Imperial</h3>
              <span className="text-[9px] border border-kuro-primary/50 text-kuro-primary px-2 py-1 uppercase tracking-widest">Recomendado</span>
            </div>
            <p className="text-xs text-kuro-muted uppercase tracking-widest mb-8">Lun — Dom · 20:30 — 00:00</p>
            <div className="font-[family-name:var(--font-display)] text-6xl italic mb-8">
              65€ <span className="text-sm not-italic font-sans text-kuro-muted tracking-normal">/ persona</span>
            </div>
            <ul className="text-xs space-y-3 text-kuro-muted uppercase tracking-wider">
              <li>• Carta completa · 85+ piezas</li>
              <li>• Sashimi de temporada ilimitado</li>
              <li>• Toro premium incluido</li>
              <li>• Cóctel de bienvenida del chef</li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 mt-16 text-center">
          <a
            href="#reserva"
            className="inline-block bg-kuro-primary text-kuro-fg px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-kuro-fg hover:text-kuro-bg transition-all duration-500"
          >
            Reservar Experiencia
          </a>
        </div>
      </div>
    </section>
  );
}