const quotes = [
  { q: "La Summit Essence es la joya de mi Keychron. Las fotos no le hacen justicia.", a: "— Álex R.", city: "Barcelona" },
  { q: "Encargué una custom con el logo de mi guild. Tres semanas y llegó en una urna de cristal.", a: "— Mika T.", city: "Berlín" },
  { q: "Materiales top y un acabado que ya quisieran marcas 10 veces más grandes.", a: "— Diego L.", city: "CDMX" },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">La comunidad</span>
        <h2 className="text-5xl md:text-6xl font-display mt-4">Voces del gremio mecánico.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <blockquote key={q.a} className="p-8 border border-border rounded-2xl bg-neutral-950/50 hover:border-primary/40 transition-colors">
            <p className="font-serif italic text-xl leading-snug mb-8">&ldquo;{q.q}&rdquo;</p>
            <footer className="flex justify-between items-baseline text-xs">
              <span className="font-mono uppercase tracking-widest">{q.a}</span>
              <span className="text-muted-foreground">{q.city}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
