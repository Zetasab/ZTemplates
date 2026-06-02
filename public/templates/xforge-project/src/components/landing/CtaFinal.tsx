export function CtaFinal() {
  return (
    <section id="reserve" className="py-32 md:py-48 px-6 border-t border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-8">
          // Reserve Yours
        </span>
        <h2 className="font-display font-bold uppercase italic text-acid text-[clamp(5rem,18vw,20rem)] leading-[0.85] tracking-tighter mb-12">
          Ready?
        </h2>
        <p className="text-zinc-400 max-w-xl mb-12 text-lg leading-relaxed">
          Solo 5 piezas disponibles este trimestre. Reserva tu edición numerada antes de que cierre la cola.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-24">
          <a
            href="mailto:forge@xforge.custom"
            className="px-10 py-5 bg-acid text-black font-display font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform"
          >
            Reservar mi mando
          </a>
          <a
            href="#collection"
            className="px-10 py-5 border border-white/30 text-white font-display font-bold uppercase text-sm tracking-widest hover:border-acid hover:text-acid transition-colors"
          >
            Ver la colección
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          <div className="text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Inquiries</p>
            <p className="font-bold text-white">forge@xforge.custom</p>
          </div>
          <div className="text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Studio</p>
            <p className="font-bold text-white">Madrid // Los Angeles</p>
          </div>
          <div className="text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Production</p>
            <p className="font-bold text-white">5 pieces / quarter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
