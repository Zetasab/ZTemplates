export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-bone/5 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-4">Ubicación</h4>
            <p className="font-display text-lg text-bone italic leading-snug">
              Via Montenapoleone, 27<br />20121 Milano, Italia
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-4">Contacto</h4>
            <p className="font-display text-lg text-bone italic leading-snug">
              +39 02 1234 5678<br />concierge@lavetrinadoro.com
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-4">Horarios</h4>
            <p className="font-display text-lg text-bone italic leading-snug">
              Mar – Dom · 19:30 – 23:30<br />Lunes cerrado
            </p>
          </div>
        </div>
        <div className="pt-10 border-t border-bone/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-2xl italic">
            La <span className="text-gold">Vetrina</span> d'Oro
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-bone/50">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Private Dining</a>
            <a href="#" className="hover:text-gold transition-colors">Press Kit</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-bone/30">
            © 2026 Luxury Italian Gastronomy
          </p>
        </div>
      </div>
    </footer>
  );
}
