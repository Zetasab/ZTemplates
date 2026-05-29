import { useEffect, useState } from "react";
import { Moon, Sun, Plus, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#conocenos", label: "Conócenos" },
  { href: "#contacto", label: "Contáctanos" },
];

export function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto glass rounded-full w-full max-w-5xl transition-organic ${
          scrolled ? "shadow-float" : ""
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-5 py-2.5">
          <a href="#inicio" className="flex items-center gap-2 pr-2 sm:pr-4">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl gradient-primary shadow-glow">
              <Plus className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
            </span>
            <span className="font-bold text-base tracking-tight hidden sm:block">
              Pharma<span className="gradient-text">Modern</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 mx-auto">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-organic"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-success animate-pulse-ring" />
                <span className="relative w-2 h-2 rounded-full bg-success" />
              </span>
              <span className="text-muted-foreground">Guardia:</span>
              <span className="text-foreground">ABIERTO</span>
            </div>
            <button
              onClick={toggle}
              aria-label="Cambiar tema"
              className="relative w-10 h-10 grid place-items-center rounded-full bg-muted hover:bg-secondary transition-organic"
            >
              <Sun className={`w-4 h-4 absolute transition-organic ${dark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <Moon className={`w-4 h-4 absolute transition-organic ${dark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden w-10 h-10 grid place-items-center rounded-full bg-muted"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-border px-3 py-2 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-xl hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
