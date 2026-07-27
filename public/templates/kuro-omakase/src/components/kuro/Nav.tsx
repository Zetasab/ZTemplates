export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
      <a href="#top" className="text-xs font-[family-name:var(--font-mono-kuro)] tracking-[0.3em] uppercase text-kuro-fg">
        Kuro <span className="text-kuro-primary">/</span> 黒
      </a>
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-kuro-fg">
        <a href="#concepto" className="hover:text-kuro-primary transition-colors">Concepto</a>
        <a href="#menu" className="hover:text-kuro-primary transition-colors">Menú</a>
        <a href="#chef" className="hover:text-kuro-primary transition-colors">Filosofía</a>
        <a href="#ambiente" className="hover:text-kuro-primary transition-colors">Ambiente</a>
        <a href="#reserva" className="text-kuro-primary">Reservar</a>
      </div>
    </nav>
  );
}