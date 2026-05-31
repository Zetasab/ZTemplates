export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl">KICKS//LAB</div>
          <p className="font-body text-sm mt-3 text-paper/70">
            Zapatillas hechas para los que no encajan. Drops limitados, calidad sin compromisos.
          </p>
        </div>
        <FooterCol title="Producto" links={["Drop 05", "Próximos drops", "Tallas", "Cuidado"]} />
        <FooterCol title="Marca" links={["Manifiesto", "Atelier", "Press", "Sostenibilidad"]} />
        <FooterCol title="Ayuda" links={["Envíos", "Devoluciones", "Contacto", "FAQ"]} />
      </div>
      <div className="border-t-2 border-paper/20 py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-body text-xs text-paper/60">
          © 2026 KICKS//LAB. Hecho con ruido en Barcelona.
        </div>
        <div className="flex gap-4 font-display text-xs">
          <a href="#" className="hover:text-pop">IG</a>
          <a href="#" className="hover:text-pop">TT</a>
          <a href="#" className="hover:text-pop">YT</a>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="font-display text-[28vw] leading-[0.8] text-paper/10 select-none pointer-events-none -mb-[6vw] text-center">
          KICKS
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display text-sm mb-4">{title}</div>
      <ul className="space-y-2 font-body text-sm text-paper/70">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-pop transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
