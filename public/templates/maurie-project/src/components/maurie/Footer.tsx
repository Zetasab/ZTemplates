export function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-12 pt-24 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <h2 className="mb-6 font-display text-5xl italic">Maurié</h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Atelier de moda femenina. Calle del Olivar 14, Madrid — España.
            <br />
            Lunes a sábado, 11:00 — 20:00.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Colecciones
          </h5>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Invierno 24</a></li>
            <li><a href="#" className="hover:text-foreground">Archivo</a></li>
            <li><a href="#" className="hover:text-foreground">Esenciales</a></li>
            <li><a href="#" className="hover:text-foreground">Hecho a medida</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Contacto
          </h5>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground">Prensa</a></li>
            <li><a href="#" className="hover:text-foreground">Términos</a></li>
            <li><a href="#" className="hover:text-foreground">Privacidad</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-7xl flex-col justify-between gap-3 border-t border-border pt-8 font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground md:flex-row md:items-center">
        <span>© MMXXIV Maurié Studio</span>
        <span>Madrid — París — Ciudad de México</span>
      </div>
    </footer>
  );
}
