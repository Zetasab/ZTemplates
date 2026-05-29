import { useEffect, useRef, useState } from "react";
import teamImg from "@/assets/team.jpg";
import { AboutForm } from "./AboutForm";


const stats = [
  { n: 10000, suffix: "+", label: "Clientes felices" },
  { n: 24, suffix: "/7", label: "Atención" },
  { n: 98, suffix: "%", label: "Satisfacción" },
  { n: 15, suffix: "y", label: "De experiencia" },
];

function useCounter(target: number, run: boolean, dur = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, dur]);
  return v;
}

function Stat({ n, suffix, label, run }: { n: number; suffix: string; label: string; run: boolean }) {
  const v = useCounter(n, run);
  return (
    <div>
      <div className="text-4xl sm:text-5xl font-black tracking-tight">
        {v.toLocaleString()}<span className="gradient-text">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="conocenos" className="py-20 sm:py-32 gradient-soft">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="relative rounded-3xl overflow-hidden shadow-float">
            <img src={teamImg} alt="Equipo PharmaModern" width={1280} height={1280} loading="lazy" className="w-full h-auto" />
            <div className="absolute inset-0 ring-1 ring-foreground/5 rounded-3xl pointer-events-none" />
          </div>
        </div>
        <div ref={ref} className="space-y-8 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium">
            Conócenos
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
            Más que una farmacia,
            <br />
            tu <span className="gradient-text">partner de bienestar</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Combinamos la cercanía de la farmacia de barrio con la precisión de la tecnología.
            Un equipo joven, multidisciplinar y obsesionado con tu salud.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((s) => (
              <Stat key={s.label} n={s.n} suffix={s.suffix} label={s.label} run={run} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 sm:px-6 mt-20 reveal">
        <AboutForm />
      </div>
    </section>
  );
}

