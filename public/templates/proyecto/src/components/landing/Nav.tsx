export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2 font-mono-kinetic text-lg font-bold tracking-tighter">
            <span className="size-4 rounded-sm bg-accent" aria-hidden />
            KINETIC
          </a>
          <div className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#engine" className="transition-colors hover:text-foreground">Motor</a>
            <a href="#intelligence" className="transition-colors hover:text-foreground">Inteligencia</a>
            <a href="#benchmarks" className="transition-colors hover:text-foreground">Rendimiento</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Precios</a>
          </div>
        </div>
        <a
          href="#download"
          className="rounded-md bg-foreground px-4 py-1.5 text-sm font-bold text-background transition-colors hover:bg-accent"
        >
          Descargar Beta
        </a>
      </div>
    </nav>
  );
}