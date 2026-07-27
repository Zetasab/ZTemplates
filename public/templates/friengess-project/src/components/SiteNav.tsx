import { useEffect, useState } from "react";
import { MessagesSquare } from "lucide-react";

const links = [
  { href: "#seguridad", label: "Seguridad" },
  { href: "#notificaciones", label: "Notificaciones" },
  { href: "#fluidez", label: "Fluidez" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#galeria", label: "Interfaz" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass-panel mx-4 shadow-lg sm:mx-auto" : "mx-4 sm:mx-auto"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-foreground">
            <MessagesSquare className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Friengess
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#descubre"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-105"
        >
          Descubrir
        </a>
      </nav>
    </header>
  );
}