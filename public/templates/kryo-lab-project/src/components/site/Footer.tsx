export function Footer() {
  return (
    <footer className="border-t border-border py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm">
          <span className="font-display text-3xl mb-6 block tracking-[0.15em]">
            KRYO<span className="text-primary">.</span>LAB
          </span>
          <p className="text-muted-foreground text-sm">
            Elevando el estándar de la artesanía mecánica desde Madrid para el mundo.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-4">
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-primary">Síguenos</h6>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">TikTok</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-primary">Legal</h6>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">© 2026 KRYO.LAB · HANDCRAFTED IN MADRID</p>
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Envíos a todo el mundo</p>
      </div>
    </footer>
  );
}
