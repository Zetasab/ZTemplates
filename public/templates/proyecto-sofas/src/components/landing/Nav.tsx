export function Nav() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 mix-blend-difference text-bone md:px-12">
      <a href="#top" className="font-serif text-2xl tracking-tighter">
        MÓDULO
      </a>
      <div className="hidden gap-12 text-[11px] font-medium uppercase tracking-[0.25em] md:flex">
        <a href="#colecciones" className="transition-opacity hover:opacity-60">
          Colecciones
        </a>
        <a href="#artesania" className="transition-opacity hover:opacity-60">
          Artesanía
        </a>
        <a href="#espacio" className="transition-opacity hover:opacity-60">
          Espacio
        </a>
      </div>
      <a
        href="#contacto"
        className="border-b border-bone pb-1 text-[11px] uppercase tracking-[0.25em]"
      >
        Contacto
      </a>
    </nav>
  );
}
