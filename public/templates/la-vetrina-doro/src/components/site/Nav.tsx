export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center backdrop-blur-sm bg-midnight/40">
      <a href="#top" className="font-display text-2xl italic tracking-tight">
        La <span className="text-gold">Vetrina</span> d'Oro
      </a>
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-medium text-bone/70">
        <a href="#filosofia" className="hover:text-gold transition-colors">Filosofía</a>
        <a href="#menu" className="hover:text-gold transition-colors">Menú</a>
        <a href="#galeria" className="hover:text-gold transition-colors">Galería</a>
        <a href="#reserva" className="hover:text-gold transition-colors">Reserva</a>
      </div>
      <a
        href="#reserva"
        className="px-5 py-2.5 md:px-6 md:py-3 bg-gold text-midnight text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold hover:bg-bone transition-colors"
      >
        Reservar
      </a>
    </nav>
  );
}
