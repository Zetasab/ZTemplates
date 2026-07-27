import { useCountUp } from "@/hooks/use-count-up";

function Stat({ value, suffix, label, decimals = 0 }: { value: number; suffix: string; label: string; decimals?: number }) {
  const { ref, value: v } = useCountUp(value, 1800, decimals);
  return (
    <div className="flex flex-col items-start border-l border-border pl-6">
      <span ref={ref} className="mb-2 font-mono-kinetic text-5xl font-bold tracking-tighter text-foreground md:text-6xl">
        {decimals ? v.toFixed(decimals) : Math.round(v)}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="font-mono-kinetic text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="border-y border-border bg-white/[0.02] px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
        <Stat value={8} suffix="×" label="Más rápido al arrancar" />
        <Stat value={42} suffix="%" label="Menos memoria RAM" />
        <Stat value={120} suffix="fps" label="Render objetivo" />
        <Stat value={4} suffix="ms" label="Latencia de tecleo" />
      </div>
    </section>
  );
}