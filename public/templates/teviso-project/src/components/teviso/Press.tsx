const quotes = [
  {
    q: "Teviso ha redefinido lo que esperamos de una imagen en casa.",
    a: "Cine & Sonido",
  },
  {
    q: "El mejor panel 8K del mercado, sin lugar a dudas.",
    a: "TechRadar",
  },
  {
    q: "Una obra de ingeniería que se olvida de sí misma para mostrarte todo lo demás.",
    a: "Wallpaper*",
  },
];

export function Press() {
  return (
    <section className="relative px-6 py-32 sm:py-48">
      <div className="mx-auto max-w-6xl">
        <p className="mb-16 text-center text-xs uppercase tracking-[0.3em] text-white/50">
          La prensa
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote key={q.a} className="glass rounded-3xl p-8">
              <p className="font-serif text-2xl leading-tight text-white/90">
                “{q.q}”
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.25em] text-white/50">
                — {q.a}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
