import { useReveal } from "@/hooks/use-reveal";

const FEATURES = [
  {
    id: "01",
    title: "Capa neural contextual",
    desc: "Una IA que no sólo completa código: entiende tu estilo arquitectónico y los patrones de tu proyecto.",
  },
  {
    id: "02",
    title: "Terminal integrada GPU",
    desc: "Un terminal acelerado por GPU dentro del editor, con pipe directo a modelos de lenguaje.",
  },
  {
    id: "03",
    title: "Multi-cursor nativo",
    desc: "Edita diez mil líneas a la vez sin una sola caída de frames ni pico de memoria.",
  },
  {
    id: "04",
    title: "Deep Git Lens",
    desc: "Historial por carácter con reconciliación automática de ramas y prevención de conflictos.",
  },
  {
    id: "05",
    title: "Sync en la nube",
    desc: "Tu entorno, atajos y extensiones sincronizados en tiempo real entre todos tus dispositivos.",
  },
  {
    id: "06",
    title: "Sandbox de extensiones",
    desc: "Arquitectura basada en WASM: ninguna extensión puede colgar ni ralentizar el núcleo.",
  },
  {
    id: "07",
    title: "Debugger nativo",
    desc: "Depuración paso a paso sin configuración gracias a nuestro inspector binario integrado.",
  },
  {
    id: "08",
    title: "LSP a velocidad warp",
    desc: "Servidores de lenguaje aislados y dedicados para resolución instantánea de símbolos.",
  },
];

function Card({ id, title, desc, delay }: { id: string; title: string; desc: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div
      ref={ref}
      className="group border border-border bg-background p-10 transition-colors hover:border-accent/50"
    >
      <div className="mb-6 flex size-10 items-center justify-center rounded border border-accent/20 bg-accent/10 font-mono-kinetic text-sm text-accent">
        {id}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
              03 — Funciones
            </span>
            <h2 className="max-w-[20ch] text-4xl font-bold tracking-tight md:text-5xl">
              Todo lo que necesitas. Nada de lo que no.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cada función existe por una razón. Ocho pilares para programar más rápido, con más precisión y sin fricción.
          </p>
        </div>
        <div className="grid gap-px md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Card key={f.id} {...f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}