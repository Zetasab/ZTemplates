import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "I",
    title: "Diseño",
    body: "Bocetos a mano sobre papel vegetal. Cada silueta se prueba en muselina antes de cortarse en tejido definitivo.",
  },
  {
    n: "II",
    title: "Patronaje",
    body: "Patrones trazados en cartón rígido, archivados y reutilizables. Nada se digitaliza hasta que la pieza está validada.",
  },
  {
    n: "III",
    title: "Confección",
    body: "Doce manos en un taller de Lavapiés. Costuras francesas, ojales hechos a mano, dobladillos invisibles.",
  },
  {
    n: "IV",
    title: "Acabado",
    body: "Cada prenda se plancha al vapor, se etiqueta y se envuelve en papel de algodón antes de salir del atelier.",
  },
];

function Step({ s, i }: { s: (typeof steps)[number]; i: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className="reveal space-y-6 border-t border-foreground pt-6"
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <div className="flex items-baseline justify-between">
        <span className="font-display text-5xl italic">{s.n}</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          Etapa
        </span>
      </div>
      <h3 className="font-display text-2xl italic">{s.title}</h3>
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {s.body}
      </p>
    </li>
  );
}

export function Process() {
  return (
    <section id="atelier" className="border-y border-border bg-muted/30 px-6 py-32 md:px-16 md:py-40">
      <header className="mx-auto mb-20 max-w-5xl">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Proceso del atelier
        </p>
        <h2 className="text-balance font-display text-4xl italic leading-tight md:text-6xl">
          Cuatro semanas entre el boceto y tu armario.
        </h2>
      </header>

      <ol className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Step key={s.n} s={s} i={i} />
        ))}
      </ol>
    </section>
  );
}
