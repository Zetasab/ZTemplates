export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
      <span className="font-display font-bold text-2xl tracking-tighter text-platinum">AURA.</span>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium text-platinum">
        <a href="#vessel" className="hover:text-gold-muted transition-colors">La Botella</a>
        <a href="#tech" className="hover:text-gold-muted transition-colors">Tecnología</a>
        <a href="#colors" className="hover:text-gold-muted transition-colors">Colores</a>
        <a href="#shop" className="hover:text-gold-muted transition-colors">Tienda</a>
      </div>
    </nav>
  );
}
