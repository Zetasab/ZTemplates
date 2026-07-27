import { useGsap } from "@/hooks/useGsap";
import heroImg from "@/assets/hero-keyboard.jpg";

export function FinalCTA() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.to(".cta-img", {
      scale: 1.15,
      ease: "none",
      scrollTrigger: { trigger: ".cta-root", start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from(".cta-text > *", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.1,
      scrollTrigger: { trigger: ".cta-text", start: "top 80%" },
    });
  });

  return (
    <section ref={ref} className="cta-root relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" loading="lazy" className="cta-img h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-40 md:px-12 md:py-56">
        <div className="cta-text text-center">
          <div className="mb-6 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">
            // 173 / 250 ARTISAN UNITS REMAINING
          </div>
          <h2 className="mx-auto max-w-4xl font-display text-6xl font-bold leading-[0.85] tracking-tighter md:text-[9rem]">
            Reserve <span className="gradient-text">yours.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
            €100 deposit holds your slot. Final configuration confirmed two weeks before assembly begins.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <button className="bg-foreground px-8 py-5 font-mono text-xs tracking-widest text-background transition-transform hover:-translate-y-0.5">
              RESERVE NOW →
            </button>
            <button className="border border-border px-8 py-5 font-mono text-xs tracking-widest hover:border-[var(--cyan-glow)] hover:text-[var(--cyan-glow)] transition-colors">
              JOIN WAITLIST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
