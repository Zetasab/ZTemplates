export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone px-6 pb-12 pt-24 md:px-20">
      <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-8 font-serif text-4xl italic tracking-tighter">
            MÓDULO
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Arquitectura para el descanso cotidiano. Diseñado y fabricado en
            España con intención y en silencio.
          </p>
        </div>
        <div>
          <h4 className="mb-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Casa
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#colecciones" className="hover:text-accent">Colecciones</a></li>
            <li><a href="#artesania" className="hover:text-accent">Artesanía</a></li>
            <li><a href="#espacio" className="hover:text-accent">Espacio</a></li>
            <li><a href="#contacto" className="hover:text-accent">Showroom</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Social
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-accent">Instagram</a></li>
            <li><a href="#" className="hover:text-accent">Pinterest</a></li>
            <li><a href="#" className="hover:text-accent">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 border-t border-ink/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
        <p>© 2026 MÓDULO Atelier</p>
        <p>Hecho en España · Enviado a todo el mundo</p>
      </div>
    </footer>
  );
}
