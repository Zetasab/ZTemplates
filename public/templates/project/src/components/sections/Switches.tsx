import { useGsap } from "@/hooks/useGsap";
import linear from "@/assets/switch-linear.jpg";
import tactile from "@/assets/switch-tactile.jpg";
import magnetic from "@/assets/switch-magnetic.jpg";

const SWITCHES = [
  {
    img: linear,
    name: "LINEAR",
    code: "AXN-L1",
    desc: "Smooth top-to-bottom travel. Zero tactile feedback. Built for sustained APM.",
    specs: [["FORCE", "45g"], ["TRAVEL", "4.0 mm"], ["ACTUATION", "2.0 mm"]],
    glow: "var(--cyan-glow)",
  },
  {
    img: tactile,
    name: "TACTILE",
    code: "AXN-T2",
    desc: "Pronounced bump at actuation. Confident feedback for precision typists.",
    specs: [["FORCE", "55g"], ["TRAVEL", "4.0 mm"], ["BUMP", "0.4 mm"]],
    glow: "var(--magenta-glow)",
  },
  {
    img: magnetic,
    name: "MAGNETIC",
    code: "AXN-M3",
    desc: "Hall-effect sensing. Adjustable actuation per key from 0.1 to 4.0 mm.",
    specs: [["FORCE", "40g"], ["TRAVEL", "4.0 mm"], ["RAPID TRIGGER", "✓"]],
    glow: "oklch(0.7 0.22 25)",
  },
];

export function Switches() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".switch-card", {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ".switches-grid", start: "top 75%" },
    });
  });

  return (
    <section ref={ref} id="switches" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// SWITCHES</div>
            <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
              Three feels.<br />One discipline.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Hot-swappable. No soldering. Change the soul of your board in 30 seconds.
          </p>
        </div>

        <div className="switches-grid grid gap-6 md:grid-cols-3">
          {SWITCHES.map((s) => (
            <article
              key={s.name}
              className="switch-card group relative overflow-hidden border border-border bg-[var(--surface)] p-8 transition-all duration-500 hover:border-[var(--cyan-glow)]"
            >
              <div
                className="pointer-events-none absolute -inset-1 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: s.glow }}
              />
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-background">
                  <img
                    src={s.img}
                    alt={`${s.name} mechanical switch macro`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between font-mono text-xs">
                  <span className="text-muted-foreground">{s.code}</span>
                  <span className="text-[var(--cyan-glow)]">// 03 series</span>
                </div>
                <h3 className="mt-2 font-display text-4xl font-bold tracking-tight">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <dl className="mt-6 space-y-2 border-t border-border pt-4 font-mono text-xs">
                  {s.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
