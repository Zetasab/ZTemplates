import { useReveal } from "@/hooks/use-reveal";

const STEPS = [
  {
    n: "01",
    title: "Instala en 8 segundos",
    desc: "Un binario nativo. Sin dependencias, sin runtime pesado. Disponible para macOS, Windows y Linux.",
    code: "$ curl -sSL kinetic.dev/install | sh",
  },
  {
    n: "02",
    title: "Conecta tu repositorio",
    desc: "Kinetic indexa localmente tu código y construye un mapa semántico privado. Nada sale de tu máquina.",
    code: "$ kinetic index ./mi-proyecto",
  },
  {
    n: "03",
    title: "Programa con la IA",
    desc: "Autocompletado predictivo, refactor con lenguaje natural y chat contextual. Todo dentro del editor.",
    code: "⌘K  →  \"refactor a hooks\"",
  },
];

function Step({ n, title, desc, code, delay }: (typeof STEPS)[number] & { delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className="relative">
      <span className="mb-6 block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
        Paso {n}
      </span>
      <h3 className="mb-4 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mb-6 text-muted-foreground">{desc}</p>
      <pre className="overflow-x-auto rounded border border-border bg-white/[0.03] p-4 font-mono-kinetic text-xs text-accent">
        {code}
      </pre>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-white/[0.02] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <span className="mb-4 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
            05 — Cómo funciona
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            De cero a producción en tres pasos.
          </h2>
        </div>
        <div className="grid gap-16 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Step key={s.n} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}