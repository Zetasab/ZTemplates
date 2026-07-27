import { useGsap } from "@/hooks/useGsap";

const QUOTES = [
  {
    quote: "I switched mid-tournament. Took two scrims to feel native. Now I won't touch anything else.",
    name: "KENJI / Pro VAL",
    team: "Aurora Esports",
  },
  {
    quote: "The acoustic profile is unreal. It's the first board I've tested that sounds as good as it feels.",
    name: "RHEA / Reviewer",
    team: "Mech Lab",
  },
  {
    quote: "Magnetic switches with rapid trigger genuinely change movement tech. The build is just bonus.",
    name: "SOLENN / Pro CS",
    team: "Black Star",
  },
  {
    quote: "Three years into custom keyboards and this is the first one that survived my touring rig.",
    name: "AKIRA / Streamer",
    team: "Independent",
  },
];

export function Testimonials() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".testimonial", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: { trigger: ".testimonial-grid", start: "top 75%" },
    });
  });

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// FIELD TESTED</div>
          <h2 className="max-w-3xl font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            Used by people<br />who measure milliseconds.
          </h2>
        </div>

        <div className="testimonial-grid grid gap-6 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              className="testimonial group relative border border-border bg-[var(--surface)] p-8 transition-colors hover:border-[var(--cyan-glow)] md:p-10"
            >
              <div className="absolute right-6 top-6 font-display text-6xl leading-none text-[var(--cyan-glow)] opacity-30">"</div>
              <blockquote className="text-balance text-xl leading-relaxed md:text-2xl">{q.quote}</blockquote>
              <figcaption className="mt-8 border-t border-border pt-4 font-mono text-xs">
                <div className="text-[var(--cyan-glow)]">{q.name}</div>
                <div className="mt-1 text-muted-foreground">{q.team}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
