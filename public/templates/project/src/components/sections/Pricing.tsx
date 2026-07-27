import { useGsap } from "@/hooks/useGsap";

const TIERS = [
  {
    name: "STANDARD",
    code: "AXN-S",
    price: "€289",
    desc: "The full Axon experience. Standard finish, choice of switch.",
    features: ["TKL or 65% layout", "Aluminum case, 4 colorways", "Choice of switch (3 types)", "PBT keycaps included", "USB-C wired", "3-year warranty"],
    accent: "var(--cyan-glow)",
  },
  {
    name: "PRO",
    code: "AXN-P",
    price: "€489",
    desc: "Wireless. Magnetic switches. Tournament-grade.",
    features: ["All layouts available", "8 anodized finishes", "Magnetic Hall-effect switches", "Tri-mode wireless", "200h battery", "Lifetime service"],
    accent: "var(--magenta-glow)",
    featured: true,
  },
  {
    name: "ARTISAN",
    code: "AXN-A",
    price: "€1,290",
    desc: "Hand-finished, numbered edition. 250 units only.",
    features: ["Polished brass weight", "Custom artisan keycap", "Signed certificate, wood case", "Pick switch & colorway", "Premium coiled cable", "Direct line to studio"],
    accent: "oklch(0.78 0.15 80)",
  },
];

export function Pricing() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".tier", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".tiers", start: "top 80%" },
    });
  });

  return (
    <section ref={ref} id="pricing" className="relative bg-[var(--surface)] py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// EDITIONS</div>
            <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
              Pick your tier.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Each board hand-assembled and tested in our Barcelona studio. Ships within 3 weeks.
          </p>
        </div>

        <div className="tiers grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`tier group relative flex flex-col border bg-background p-8 transition-all hover:-translate-y-2 md:p-10 ${
                t.featured ? "border-[var(--cyan-glow)] md:scale-[1.02]" : "border-border"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 bg-[var(--cyan-glow)] px-3 py-1 font-mono text-[10px] tracking-widest text-background">
                  MOST CHOSEN
                </div>
              )}
              <div className="font-mono text-xs text-muted-foreground">{t.code}</div>
              <h3 className="mt-2 font-display text-4xl font-bold tracking-tight">{t.name}</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">{t.price}</span>
                <span className="font-mono text-xs text-muted-foreground">/ board</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-6 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span style={{ color: t.accent }}>+</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="mt-8 border px-6 py-4 font-mono text-xs tracking-widest transition-all"
                style={{
                  borderColor: t.featured ? "var(--cyan-glow)" : "var(--color-border)",
                  background: t.featured ? "var(--cyan-glow)" : "transparent",
                  color: t.featured ? "var(--background)" : "var(--foreground)",
                }}
              >
                {t.name === "ARTISAN" ? "RESERVE 1 OF 250 →" : "CONFIGURE →"}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
