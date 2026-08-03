export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 mix-blend-difference text-brand-bone">
      <a href="#top" className="font-display italic text-2xl tracking-tighter">
        AETHER.
      </a>
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.25em] font-semibold">
        <a href="#colecciones" className="hover:text-brand-gold transition-colors">
          Colecciones
        </a>
        <a href="#filosofia" className="hover:text-brand-gold transition-colors">
          Filosofía
        </a>
        <a href="#diario" className="hover:text-brand-gold transition-colors">
          Diario
        </a>
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] font-semibold cursor-pointer hover:text-brand-gold transition-colors">
        Cesta (0)
      </div>
    </nav>
  );
}
