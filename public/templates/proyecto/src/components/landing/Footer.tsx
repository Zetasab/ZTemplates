export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-4">
        <div className="col-span-2">
          <span className="mb-6 flex items-center gap-2 font-mono-kinetic text-xl font-bold tracking-tighter">
            <span className="size-5 rounded-sm bg-accent" aria-hidden /> KINETIC
          </span>
          <p className="max-w-sm text-muted-foreground">
            Una herramienta técnica para el arquitecto moderno. Ingeniería de precisión para desarrollo de alto rendimiento.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-mono-kinetic text-xs uppercase tracking-widest text-muted-foreground">Producto</h4>
          <a href="#features" className="text-sm transition-colors hover:text-accent">Funciones</a>
          <a href="#pricing" className="text-sm transition-colors hover:text-accent">Precios</a>
          <a href="#" className="text-sm transition-colors hover:text-accent">Changelog</a>
          <a href="#" className="text-sm transition-colors hover:text-accent">Documentación</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-mono-kinetic text-xs uppercase tracking-widest text-muted-foreground">Comunidad</h4>
          <a href="#" className="text-sm transition-colors hover:text-accent">Twitter / X</a>
          <a href="#" className="text-sm transition-colors hover:text-accent">Discord</a>
          <a href="#" className="text-sm transition-colors hover:text-accent">GitHub</a>
          <a href="#" className="text-sm transition-colors hover:text-accent">Blog</a>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-border pt-10">
        <span className="font-mono-kinetic text-xs text-muted-foreground">© 2026 KINETIC LABS INC.</span>
        <span className="font-mono-kinetic text-xs text-muted-foreground">STABLE // BUILD_ID: 8849-FF</span>
      </div>
    </footer>
  );
}