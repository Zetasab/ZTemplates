import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const t1 = useReveal<HTMLHeadingElement>(200);
  const t2 = useReveal<HTMLParagraphElement>(400);
  const t3 = useReveal<HTMLDivElement>(600);
  const t4 = useReveal<HTMLDivElement>(800);

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center overflow-hidden pt-32 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="z-10 max-w-4xl px-6 text-center">
        <div className="mb-8 inline-block rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono-kinetic text-[10px] uppercase tracking-widest text-accent">
          v2.0 — El punto de inflexión de la IA
        </div>
        <h1
          ref={t1}
          className="mb-8 text-5xl leading-[0.9] font-extrabold tracking-tight text-balance md:text-8xl"
        >
          El editor <span className="text-muted-foreground">que piensa</span> antes que tú.
        </h1>
        <p ref={t2} className="mx-auto mb-10 max-w-2xl text-lg text-pretty text-muted-foreground md:text-xl">
          Kinetic fusiona rendimiento nativo con un motor neuronal profundo para anticipar tu próxima decisión arquitectónica.
          Minimalista, veloz, inevitable.
        </p>
        <div ref={t3} className="flex flex-wrap justify-center gap-4">
          <a
            href="#download"
            className="rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            Empezar gratis
          </a>
          <a
            href="#features"
            className="rounded-lg border border-border bg-white/5 px-8 py-4 text-lg font-bold transition-all hover:bg-white/10"
          >
            Explorar funciones
          </a>
        </div>
      </div>

      {/* Editor mockup */}
      <div ref={t4} className="mt-20 w-full max-w-6xl px-6">
        <div className="animate-kinetic-float relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e] shadow-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent"
          />
          <div className="flex h-10 items-center gap-2 border-b border-white/5 px-4">
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="ml-4 font-mono-kinetic text-[10px] uppercase tracking-widest text-muted-foreground">
              main.ts — kinetic
            </span>
          </div>
          <div className="flex">
            <div className="w-12 border-r border-white/5 p-4 text-right font-mono-kinetic text-xs text-white/20 leading-6">
              1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
            </div>
            <pre className="p-6 font-mono-kinetic text-sm leading-6 text-white/80">
              <span className="text-blue-400">import</span> {"{ engine }"}{" "}
              <span className="text-blue-400">from</span>{" "}
              <span className="text-emerald-300">"@kinetic/core"</span>;{"\n\n"}
              <span className="text-purple-400">const</span> app = engine.
              <span className="text-yellow-200">initialize</span>({"{"}
              {"\n  "}intelligence: <span className="text-orange-300">true</span>,
              {"\n  "}performance: <span className="text-accent">"ultra"</span>
              {"\n"}
              {"});"}
              {"\n\n"}
              <span className="text-muted-foreground">
                // Predictive suggestion...
              </span>
              {"\n"}
              <span className="text-accent/60">app.optimize()</span>
              <span className="animate-kinetic-cursor ml-1 inline-block h-4 w-2 bg-accent align-middle" />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}