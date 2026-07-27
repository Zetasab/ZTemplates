import { useGsap } from "@/hooks/useGsap";
import explodedImg from "@/assets/exploded-view.jpg";

const PARTS = [
  { label: "TOP PLATE", desc: "6063 aluminum, CNC milled", pos: "top-[10%] left-[20%]" },
  { label: "PCB", desc: "Hot-swap 1.6mm 4-layer", pos: "top-[38%] left-[55%]" },
  { label: "DAMPENING", desc: "Poron + silicone stack", pos: "top-[60%] left-[30%]" },
  { label: "BRASS WEIGHT", desc: "Cast brass, 480g", pos: "top-[78%] left-[65%]" },
];

export function Anatomy() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".anatomy-img", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: ".anatomy-img", start: "top 75%" },
    });
    gsap.from(".hotspot", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "back.out(2)",
      scrollTrigger: { trigger: ".anatomy-img", start: "top 60%" },
    });
  });

  return (
    <section ref={ref} id="anatomy" className="relative bg-[var(--surface)] py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// ANATOMY</div>
            <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
              Engineered<br />layer by layer.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Twelve precision-tolerance components stack into a board that feels carved from a single piece.
          </p>
        </div>

        <div className="anatomy-img relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-background">
          <img
            src={explodedImg}
            alt="Exploded view of mechanical keyboard layers"
            loading="lazy"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          {PARTS.map((p) => (
            <div key={p.label} className={`hotspot absolute ${p.pos} hidden md:block`}>
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_20px_var(--cyan-glow)]">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[var(--cyan-glow)] opacity-50" />
                </div>
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap border-l border-[var(--cyan-glow)] bg-background/80 px-3 py-1.5 backdrop-blur">
                  <div className="font-mono text-[10px] tracking-widest text-[var(--cyan-glow)]">{p.label}</div>
                  <div className="text-xs text-muted-foreground">{p.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
          {PARTS.map((p) => (
            <div key={p.label} className="border-l border-[var(--cyan-glow)] pl-3">
              <div className="font-mono text-[10px] tracking-widest text-[var(--cyan-glow)]">{p.label}</div>
              <div className="text-xs text-muted-foreground">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
