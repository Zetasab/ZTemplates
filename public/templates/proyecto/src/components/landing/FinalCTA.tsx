import { useReveal } from "@/hooks/use-reveal";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>(100);
  return (
    <section id="download" className="relative overflow-hidden px-6 py-40 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-10 text-5xl font-extrabold tracking-tighter md:text-7xl">
          Programa a la velocidad
          <br />
          del pensamiento.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          Descarga Kinetic gratis y siente la diferencia en tu primera pulsación.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="#"
            className="w-full rounded-xl bg-foreground px-10 py-5 text-xl font-bold text-background transition-all hover:bg-accent md:w-auto"
          >
            Descargar para macOS
          </a>
          <span className="font-mono-kinetic text-sm text-muted-foreground">
            v1.2.4 · ARM64 & x86 · Windows / Linux disponibles
          </span>
        </div>
      </div>
    </section>
  );
}