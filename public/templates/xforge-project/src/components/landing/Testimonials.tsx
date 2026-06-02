const quotes = [
  {
    q: "Esto no es un periférico. Es el objeto más bonito de mi estantería que además me hace ganar torneos.",
    a: "Julián D.",
    r: "Esports Vanguard",
  },
  {
    q: "Pedí el de God of War para mi colección. Llegó en una caja de madera numerada. Esto es otro nivel.",
    a: "Marco V.",
    r: "Collector",
  },
  {
    q: "El hair trigger del Ghost Protocol me bajó 40ms de reacción. No exagero.",
    a: "Kira N.",
    r: "FPS Streamer",
  },
];

export function Testimonials() {
  return (
    <section className="bg-obsidian py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-12 block">
          // Voices
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((t, i) => (
            <div key={i} className="border border-white/10 p-8 md:p-10 bg-zinc-custom/40 hover:border-acid/40 transition-colors group">
              <span className="font-display text-5xl text-acid leading-none block mb-6">"</span>
              <p className="text-white text-lg leading-relaxed mb-8">{t.q}</p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-display text-sm font-bold uppercase text-white">{t.a}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
