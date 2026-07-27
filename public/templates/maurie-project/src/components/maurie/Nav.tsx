export function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 text-white mix-blend-difference md:px-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
        Colección 03 / Invierno 24
      </span>
      <a
        href="#top"
        className="font-display text-2xl italic tracking-tighter md:text-3xl"
      >
        Maurié
      </a>
      <div className="hidden gap-8 font-mono text-[10px] uppercase tracking-[0.25em] md:flex">
        <a href="#coleccion" className="transition-opacity hover:opacity-50">
          Tienda
        </a>
        <a href="#atelier" className="transition-opacity hover:opacity-50">
          Atelier
        </a>
        <a href="#contacto" className="transition-opacity hover:opacity-50">
          Cesta (0)
        </a>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] md:hidden">
        Menú
      </span>
    </nav>
  );
}
