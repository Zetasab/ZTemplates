export function Footer() {
  return (
    <footer className="bg-brand-bone border-t border-brand-dark/10 pt-20 pb-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h2 className="font-display italic text-4xl md:text-5xl mb-6">
              Aether.
            </h2>
            <p className="max-w-xs text-xs uppercase tracking-widest text-brand-dark/60 leading-loose">
              Redefiniendo la belleza de lujo a través de la inclusividad y la
              precisión arquitectónica. Hecho en Europa.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold">
              Conectar
            </h5>
            <ul className="text-xs space-y-3 text-brand-dark/60">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Editorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Carreras
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold">
              Asistencia
            </h5>
            <ul className="text-xs space-y-3 text-brand-dark/60">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Envíos & Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Boutiques
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-brand-dark/40">
          <span>© 2024 Aether Beauty Corp.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-dark">
              Privacidad
            </a>
            <a href="#" className="hover:text-brand-dark">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
