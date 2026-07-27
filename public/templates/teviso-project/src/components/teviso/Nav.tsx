const links = [
  { href: "#resolucion", label: "Resolución" },
  { href: "#color", label: "Color" },
  { href: "#hercios", label: "Movimiento" },
  { href: "#tamaños", label: "Tamaños" },
  { href: "#specs", label: "Modelos" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass-strong flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#4ade80] to-[#a78bfa]">
            <span className="h-2 w-2 rounded-full bg-black/80" />
          </span>
          <span className="font-serif text-xl leading-none">Teviso</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
        >
          Descubrir
        </a>
      </nav>
    </header>
  );
}
