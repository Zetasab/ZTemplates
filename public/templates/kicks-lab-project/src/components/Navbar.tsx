export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-ink bg-paper">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        <a href="#top" className="font-display text-xl md:text-2xl tracking-tight">
          KICKS//LAB
        </a>
        <nav className="hidden md:flex items-center gap-8 font-display text-sm">
          <a href="#drop" className="hover:text-pop transition-colors">Drop</a>
          <a href="#models" className="hover:text-pop transition-colors">Modelos</a>
          <a href="#anatomy" className="hover:text-pop transition-colors">Tech</a>
          <a href="#press" className="hover:text-pop transition-colors">Press</a>
        </nav>
        <a
          href="#cta"
          className="border-2 border-ink bg-ink text-paper px-4 py-2 font-display text-xs md:text-sm shadow-brutal-sm hover:bg-pop hover:text-ink transition-colors"
        >
          Comprar →
        </a>
      </div>
    </header>
  );
}
