import { useEffect, useRef, useState } from "react";
import { useGsap } from "@/hooks/useGsap";

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 8000, suffix: "Hz", label: "POLLING RATE" },
  { value: 0.125, suffix: "ms", label: "INPUT LATENCY" },
  { value: 100, suffix: "M", label: "KEYSTROKE LIFE" },
  { value: 250, suffix: "U", label: "LIMITED RUN" },
];

const SPEC_ROWS: [string, string][] = [
  ["CASE", "6063 aluminum, CNC milled, sandblasted"],
  ["MOUNTING", "Gasket mount with poron strips"],
  ["PCB", "1.6mm 4-layer, hot-swap, south-facing RGB"],
  ["WEIGHT", "Cast brass insert, 480g"],
  ["CONNECTIVITY", "USB-C 3.2, Bluetooth 5.3, 2.4 GHz wireless"],
  ["BATTERY", "4000 mAh, up to 200 hours"],
  ["FIRMWARE", "QMK / VIA / custom Axon Studio"],
  ["KEYCAPS", "PBT doubleshot, cherry profile, 1.5mm walls"],
  ["DIMENSIONS", "355 × 130 × 32 mm (TKL)"],
  ["WARRANTY", "3 years, lifetime service"],
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  const formatted = to < 1 ? val.toFixed(3) : Math.round(val).toLocaleString();
  return (
    <span ref={ref}>
      {formatted}
      <span className="text-[var(--cyan-glow)]">{suffix}</span>
    </span>
  );
}

export function Specs() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".spec-row", {
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.04,
      scrollTrigger: { trigger: ".spec-table", start: "top 75%" },
    });
  });

  return (
    <section ref={ref} id="specs" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// SPECIFICATIONS</div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            Numbers that<br />don't compromise.
          </h2>
        </div>

        <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-t border-border pt-6">
              <div className="font-display text-4xl font-bold leading-none tracking-tight md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-mono text-[10px] tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="spec-table border-t border-border">
          {SPEC_ROWS.map(([k, v]) => (
            <div
              key={k}
              className="spec-row grid grid-cols-1 gap-2 border-b border-border py-5 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <div className="font-mono text-xs tracking-widest text-muted-foreground">{k}</div>
              <div className="text-base md:text-lg">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
