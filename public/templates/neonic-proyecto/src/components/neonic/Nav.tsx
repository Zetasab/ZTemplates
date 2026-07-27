import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full flex justify-between items-center px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      <BrandMark />
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.22em] font-medium text-muted-foreground">
        <a href="#catalogo" className="hover:text-foreground transition-colors">Catálogo</a>
        <a href="#originales" className="hover:text-foreground transition-colors">Originales</a>
        <a href="#dispositivos" className="hover:text-foreground transition-colors">Dispositivos</a>
        <a href="#planes" className="hover:text-foreground transition-colors">Planes</a>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden md:inline-flex text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Iniciar sesión
        </button>
        <button className="border border-foreground/20 px-5 py-2 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300">
          Comenzar
        </button>
      </div>
    </nav>
  );
}