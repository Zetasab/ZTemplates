import { useGsap } from "@/hooks/useGsap";
import keycaps from "@/assets/keycaps.jpg";
import setup1 from "@/assets/setup-1.jpg";
import setup3 from "@/assets/setup-3.jpg";

export function Customization() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".bento-cell", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".bento", start: "top 75%" },
    });
  });

  return (
    <section ref={ref} className="relative bg-[var(--surface)] py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// CUSTOMIZATION</div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            One board.<br />Infinite voices.
          </h2>
        </div>

        <div className="bento grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[280px_280px_280px]">
          <div className="bento-cell relative md:col-span-4 md:row-span-2 overflow-hidden border border-border group">
            <img src={keycaps} alt="Artisan keycap colorways" loading="lazy" width={1400} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-xs text-[var(--cyan-glow)]">KEYCAPS / 24 COLORWAYS</div>
              <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Doubleshot PBT, cherry profile.</h3>
            </div>
          </div>

          <div className="bento-cell md:col-span-2 border border-border bg-background p-6 flex flex-col justify-between">
            <div className="font-mono text-xs text-muted-foreground">LAYOUT</div>
            <div className="space-y-2">
              {["60%", "TKL", "FULL"].map((l, i) => (
                <div key={l} className={`flex items-baseline justify-between border-b border-border pb-2 ${i === 1 ? "text-[var(--cyan-glow)]" : ""}`}>
                  <span className="font-display text-2xl font-semibold">{l}</span>
                  <span className="font-mono text-xs">{["68", "87", "104"][i]} keys</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-cell md:col-span-2 border border-border bg-background p-6 flex flex-col justify-between">
            <div className="font-mono text-xs text-muted-foreground">FINISH</div>
            <div className="grid grid-cols-4 gap-2">
              {["#1a1a22", "#e8e8e8", "#3b3b48", "#8a4a3a", "#1f3a4d", "#c9a84c", "#5a2d6b", "#2d5a3d"].map((c) => (
                <div key={c} className="aspect-square border border-border" style={{ background: c }} />
              ))}
            </div>
            <div className="font-mono text-xs">8 ANODIZED FINISHES</div>
          </div>

          <div className="bento-cell relative md:col-span-3 overflow-hidden border border-border group">
            <img src={setup1} alt="60% keyboard layout" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
            <div className="absolute top-6 left-6">
              <div className="font-mono text-xs text-[var(--magenta-glow)]">CABLE</div>
              <div className="mt-1 font-display text-xl font-semibold">Coiled aviator. 12 colors.</div>
            </div>
          </div>

          <div className="bento-cell relative md:col-span-3 overflow-hidden border border-border group">
            <img src={setup3} alt="Custom keycap colorway" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-l from-background/80 to-transparent" />
            <div className="absolute top-6 right-6 text-right">
              <div className="font-mono text-xs text-[var(--magenta-glow)]">SOUND</div>
              <div className="mt-1 font-display text-xl font-semibold">Marble / Thock / Clack.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
