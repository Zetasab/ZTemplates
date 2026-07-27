export function Footer() {
  return (
    <footer className="bg-ink border-t border-silver/10 px-6 md:px-16 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-3xl text-bone">O'Henal</p>
          <p className="text-eyebrow text-silver/50 mt-2">MMXXVI</p>
        </div>
        <div>
          <p className="text-eyebrow text-silver/70 mb-4">Casa</p>
          <ul className="space-y-2 text-sm text-bone/70">
            <li><a href="#manifiesto" className="hover:text-bone">Manifiesto</a></li>
            <li><a href="#origen" className="hover:text-bone">El taller</a></li>
            <li><a href="#notas" className="hover:text-bone">Composición</a></li>
          </ul>
        </div>
        <div>
          <p className="text-eyebrow text-silver/70 mb-4">Contacto</p>
          <ul className="space-y-2 text-sm text-bone/70">
            <li>14 rue des Parfumeurs</li>
            <li>06130 Grasse, France</li>
            <li><a href="mailto:atelier@ohenal.com" className="hover:text-bone">atelier@ohenal.com</a></li>
          </ul>
        </div>
        <div>
          <p className="text-eyebrow text-silver/70 mb-4">Síguenos</p>
          <ul className="space-y-2 text-sm text-bone/70">
            <li><a href="#" className="hover:text-bone">Instagram</a></li>
            <li><a href="#" className="hover:text-bone">Pinterest</a></li>
            <li><a href="#" className="hover:text-bone">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-silver/10 flex flex-wrap items-center justify-between gap-4 text-eyebrow text-silver/40">
        <span>© MMXXVI · Maison O'Henal · Tous droits réservés</span>
        <span>Composé à Grasse · Embotellado en France</span>
      </div>
    </footer>
  );
}
