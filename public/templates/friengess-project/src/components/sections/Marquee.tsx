const words = [
  "Seguro",
  "Fluido",
  "Confiable",
  "Cifrado",
  "En tiempo real",
  "Sin límites",
  "Privado",
  "Potente",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-border/60 bg-card/40 py-6"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-semibold text-muted-foreground/70"
          >
            {w}
            <span className="text-signal">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}