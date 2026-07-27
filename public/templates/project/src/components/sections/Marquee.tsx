import { useGsap } from "@/hooks/useGsap";

const ITEMS = [
  "HOT-SWAPPABLE",
  "8000 Hz POLLING",
  "CNC ALUMINUM",
  "PBT DOUBLESHOT",
  "MAGNETIC SWITCHES",
  "GASKET MOUNT",
  "PER-KEY RGB",
  "QMK / VIA",
  "BRASS WEIGHT",
];

export function Marquee() {
  const ref = useGsap<HTMLDivElement>(({ gsap }) => {
    const track = ref.current?.querySelector(".marquee-track");
    if (!track) return;
    gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1,
    });
  });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border bg-[var(--surface)] py-8">
      <div className="marquee-track flex whitespace-nowrap font-display text-4xl font-semibold tracking-tight md:text-6xl">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 text-foreground">
            {item}
            <span className="text-[var(--cyan-glow)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
