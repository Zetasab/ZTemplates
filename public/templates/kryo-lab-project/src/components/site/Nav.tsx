import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a href="#top" className="font-display text-2xl tracking-[0.15em]">
        KRYO<span className="text-primary">.</span>LAB
      </a>
      <div className="hidden md:flex gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
        <a href="#colecciones" className="hover:text-primary transition-colors">Colecciones</a>
        <a href="#craft" className="hover:text-primary transition-colors">Craft</a>
        <a href="#proceso" className="hover:text-primary transition-colors">Proceso</a>
        <a href="#custom" className="hover:text-primary transition-colors">Custom</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </div>
      <a
        href="#colecciones"
        className="px-5 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        Shop
      </a>
    </nav>
  );
}
