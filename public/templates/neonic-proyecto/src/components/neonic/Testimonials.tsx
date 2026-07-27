const quotes = [
  {
    text: "NEONIC es lo que Netflix quiso ser antes de rendirse al algoritmo. Curaduría con criterio, sin ruido.",
    author: "Sight & Sound",
    role: "Reseña editorial",
  },
  {
    text: "La única plataforma que respeta al espectador como espectador y no como métrica.",
    author: "Cahiers du Néon",
    role: "Editorial 2026",
  },
  {
    text: "Un santuario digital para el séptimo arte. El detalle en el color y el sonido no tiene rival.",
    author: "IndieWire",
    role: "Tech review",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-6 block">
              La crítica dice
            </span>
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-[0.95]">
              APLAUDIDA POR <br />
              <span className="italic font-editorial font-normal text-primary">quienes saben.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {quotes.map((q) => (
            <figure key={q.author} className="bg-background p-10 md:p-12 flex flex-col justify-between min-h-[360px]">
              <span className="font-display text-6xl text-primary leading-none mb-6">"</span>
              <blockquote className="font-editorial italic text-xl md:text-2xl leading-snug text-pretty text-foreground/90 mb-8">
                {q.text}
              </blockquote>
              <figcaption>
                <div className="font-display text-xl tracking-tight">{q.author}</div>
                <div className="text-[10px] font-mono-tight uppercase tracking-[0.25em] text-muted-foreground mt-1">
                  {q.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}