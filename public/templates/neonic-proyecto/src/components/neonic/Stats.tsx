import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return val;
}

function StatItem({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, active);
  return (
    <div ref={ref} className="p-8 md:p-12 border-l border-border first:border-l-0">
      <div className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter text-primary">
        {n.toLocaleString("es-ES")}
        {suffix}
      </div>
      <p className="mt-4 text-[11px] font-mono-tight uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-4 block">
            Cifras · Diciembre 2026
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none">
            NÚMEROS QUE HABLAN.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <StatItem value={4200} label="Títulos curados" />
          <StatItem value={96} suffix="+" label="Países cubiertos" />
          <StatItem value={148} label="Premios ganados" />
          <StatItem value={2} suffix="M" label="Suscriptores activos" />
        </div>
      </div>
    </section>
  );
}