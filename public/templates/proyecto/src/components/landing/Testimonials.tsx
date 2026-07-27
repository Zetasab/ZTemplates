import { useReveal } from "@/hooks/use-reveal";

const QUOTES = [
  {
    quote:
      "Migré todo mi equipo en una semana. La latencia es literalmente imperceptible y el autocompletado entiende el proyecto entero.",
    name: "Elena Márquez",
    role: "Staff Engineer, Northwind",
  },
  {
    quote:
      "Pasé de perder minutos con refactorizaciones a resolverlas con un comando. Kinetic cambia cómo escribo software.",
    name: "Rafael Cortez",
    role: "Founder, Halo Labs",
  },
  {
    quote:
      "Lo instalé por curiosidad y no he vuelto a abrir mi editor anterior. La sensación es la de una herramienta de precisión.",
    name: "Yuki Nakamura",
    role: "Principal Architect, Meridian",
  },
];

function Card({ q, delay }: { q: (typeof QUOTES)[number]; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <figure
      ref={ref}
      className="flex h-full flex-col justify-between rounded-xl border border-border bg-white/[0.02] p-8 transition-colors hover:border-accent/40"
    >
      <blockquote className="mb-8 text-lg leading-relaxed text-foreground/90">"{q.quote}"</blockquote>
      <figcaption className="border-t border-border pt-4">
        <div className="font-medium">{q.name}</div>
        <div className="font-mono-kinetic text-[11px] uppercase tracking-widest text-muted-foreground">
          {q.role}
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
            06 — Testimonios
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Adoptado por equipos que no pueden permitirse lentitud.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Card key={q.name} q={q} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}