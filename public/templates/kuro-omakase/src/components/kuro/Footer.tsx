export function Footer() {
  return (
    <footer className="bg-kuro-bg border-t border-kuro-border pt-24 pb-12 px-6 lg:px-16 text-kuro-fg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-20">
        <div>
          <div className="font-[family-name:var(--font-display)] italic text-4xl mb-6">Kuro · 黒</div>
          <p className="text-sm text-kuro-muted leading-relaxed max-w-[30ch]">
            Buffet de sushi de autor. Madrid, desde 2019.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-kuro-muted mb-6 font-[family-name:var(--font-mono-kuro)]">Navegación</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#concepto" className="hover:text-kuro-primary transition-colors">Concepto</a></li>
            <li><a href="#menu" className="hover:text-kuro-primary transition-colors">Carta</a></li>
            <li><a href="#chef" className="hover:text-kuro-primary transition-colors">Filosofía</a></li>
            <li><a href="#ambiente" className="hover:text-kuro-primary transition-colors">Ambiente</a></li>
            <li><a href="#reserva" className="hover:text-kuro-primary transition-colors">Reservar</a></li>
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-[10px] uppercase tracking-[0.4em] text-kuro-muted mb-6 font-[family-name:var(--font-mono-kuro)]">Síguenos</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-kuro-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-kuro-primary transition-colors">Guía Michelin 2024</a></li>
            <li><a href="#" className="hover:text-kuro-primary transition-colors">Prensa</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-kuro-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-[family-name:var(--font-mono-kuro)] uppercase tracking-[0.4em] text-kuro-muted">
          © 2026 Kuro Omakase
        </p>
        <p className="text-[10px] font-[family-name:var(--font-mono-kuro)] uppercase tracking-[0.5em] text-kuro-muted">
          Cuchillo · Fuego · Arroz · Alma
        </p>
      </div>
    </footer>
  );
}