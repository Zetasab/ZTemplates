import { useReveal } from "@/hooks/use-reveal";

function Check() {
  return (
    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-sm bg-accent/15 text-accent">
      ✓
    </span>
  );
}

export function Pricing() {
  const a = useReveal<HTMLDivElement>(0);
  const b = useReveal<HTMLDivElement>(120);
  return (
    <section id="pricing" className="border-y border-border px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
            07 — Precios
          </span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Simple para individuos. Escalable para equipos.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div ref={a} className="flex flex-col rounded-xl border border-border bg-card p-8">
            <span className="mb-2 font-mono-kinetic text-xs uppercase tracking-widest text-muted-foreground">
              Community
            </span>
            <div className="mb-8 text-4xl font-bold">
              $0<span className="text-base font-normal text-muted-foreground">/mes</span>
            </div>
            <ul className="mb-10 flex-1 space-y-4 text-sm">
              {[
                "Sugerencias de IA básicas",
                "Debugger nativo",
                "Soporte para 80+ lenguajes",
                "Sync local",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="w-full rounded-md border border-border bg-white/5 py-3 text-center text-sm font-medium transition-colors hover:bg-white/10"
            >
              Empezar gratis
            </a>
          </div>
          <div ref={b} className="relative flex flex-col overflow-hidden rounded-xl border border-accent/40 bg-card p-8 ring-1 ring-accent/20">
            <div className="absolute top-0 right-0 rounded-bl-md bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">
              Más popular
            </div>
            <span className="mb-2 font-mono-kinetic text-xs uppercase tracking-widest text-muted-foreground">
              Pro
            </span>
            <div className="mb-8 text-4xl font-bold">
              $20<span className="text-base font-normal text-muted-foreground">/mes</span>
            </div>
            <ul className="mb-10 flex-1 space-y-4 text-sm">
              {[
                "Inferencia avanzada ilimitada",
                "Cloud sync y colaboración en vivo",
                "Actualizaciones prioritarias del núcleo",
                "Chat contextual multi-proyecto",
                "Soporte prioritario",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="w-full rounded-md bg-accent py-3 text-center text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Obtener Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}