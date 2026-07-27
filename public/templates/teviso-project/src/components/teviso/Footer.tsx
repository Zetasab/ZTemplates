export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#4ade80] to-[#a78bfa]">
              <span className="h-2 w-2 rounded-full bg-black/80" />
            </span>
            <span className="font-serif text-xl">Teviso</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Televisores diseñados en Barcelona. Fabricados sin compromisos.
          </p>
        </div>
        {[
          { title: "Producto", links: ["Studio 55", "Pro 65", "Theater 77", "Grand 98"] },
          { title: "Soporte", links: ["Ayuda", "Garantía", "Instalación", "Contacto"] },
          { title: "Compañía", links: ["Sobre Teviso", "Prensa", "Empleo", "Sostenibilidad"] },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <div>© {new Date().getFullYear()} Teviso. Todos los derechos reservados.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Términos</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
