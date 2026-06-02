export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference">
      <a href="#top" className="font-display text-2xl font-bold tracking-tighter uppercase text-white">
        X-Forge
      </a>
      <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
        <a href="#collection" className="hover:text-acid transition-colors">The Collection</a>
        <a href="#craft" className="hover:text-acid transition-colors">Craftsmanship</a>
        <a href="#reserve" className="hover:text-acid transition-colors">Reserve</a>
      </div>
      <a
        href="#reserve"
        className="px-6 py-2 border border-white/30 text-white hover:border-acid hover:text-acid transition-all text-[10px] font-bold uppercase tracking-widest"
      >
        Shop Now
      </a>
    </nav>
  );
}
