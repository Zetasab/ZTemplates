import { useGsap } from "@/hooks/useGsap";
import heroImg from "@/assets/hero-keyboard.jpg";

export function Hero() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-eyebrow", { opacity: 0, y: 30, duration: 0.8 })
      .from(".hero-word", { y: "110%", duration: 1.1, stagger: 0.08, ease: "expo.out" }, "-=0.4")
      .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
      .from(".hero-cta > *", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.5")
      .from(".hero-meta", { opacity: 0, duration: 0.8, stagger: 0.05 }, "-=0.4")
      .from(".hero-img", { opacity: 0, scale: 1.08, duration: 1.6, ease: "expo.out" }, 0.3)
      .from(".hero-glow", { opacity: 0, duration: 1.6 }, 0.4);

    gsap.to(".hero-img", {
      yPercent: 18,
      ease: "none",
      scrollTrigger: { trigger: ".hero-root", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero-text", {
      yPercent: -30,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: { trigger: ".hero-root", start: "top top", end: "bottom top", scrub: true },
    });
  });

  return (
    <section ref={ref} className="hero-root relative min-h-screen overflow-hidden grain">
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* glows */}
      <div className="hero-glow pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--cyan-glow)] opacity-30 blur-[140px]" />
      <div className="hero-glow pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[var(--magenta-glow)] opacity-25 blur-[160px]" />

      {/* nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
          <div className="h-2 w-2 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_12px_var(--cyan-glow)]" />
          AXON//KB
        </div>
        <div className="hidden gap-8 font-mono text-xs tracking-widest text-muted-foreground md:flex">
          <a href="#anatomy" className="hover:text-foreground">ANATOMY</a>
          <a href="#switches" className="hover:text-foreground">SWITCHES</a>
          <a href="#specs" className="hover:text-foreground">SPECS</a>
          <a href="#pricing" className="hover:text-foreground">EDITIONS</a>
        </div>
        <button className="font-mono text-xs tracking-widest border border-border px-4 py-2 hover:border-[var(--cyan-glow)] hover:text-[var(--cyan-glow)] transition-colors">
          RESERVE →
        </button>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-6 pt-8 md:px-12 md:pt-16">
        <div className="hero-text">
          <div className="hero-eyebrow mb-6 inline-flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">
            <span className="h-px w-10 bg-[var(--cyan-glow)]" />
            EDITION 03 / LIMITED 250 UNITS
          </div>
          <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.85] tracking-tighter">
            {["BUILT.", "FOR.", "ARTISANS."].map((w) => (
              <span key={w} className="block overflow-hidden">
                <span className="hero-word inline-block">{w}</span>
              </span>
            ))}
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="hero-sub max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              Custom mechanical keyboards machined from solid aluminum, tuned by hand, calibrated for the
              microsecond. Every keystroke engineered for the players who feel the difference.
            </p>
            <div className="hero-cta flex flex-wrap gap-3">
              <button className="group relative overflow-hidden bg-foreground px-6 py-4 font-mono text-xs tracking-widest text-background transition-transform hover:-translate-y-0.5">
                CONFIGURE YOURS
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="border border-border px-6 py-4 font-mono text-xs tracking-widest hover:border-[var(--cyan-glow)] hover:text-[var(--cyan-glow)] transition-colors">
                WATCH FILM
              </button>
            </div>
          </div>
        </div>

        {/* hero image */}
        <div className="relative">
          <div className="hero-img relative aspect-[16/9] w-full overflow-hidden rounded-sm">
            <img
              src={heroImg}
              alt="Custom mechanical gaming keyboard with cyan and magenta RGB lighting"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* spec meta below */}
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-6 font-mono text-xs md:grid-cols-4">
            {[
              ["LATENCY", "0.125 MS"],
              ["POLLING", "8000 HZ"],
              ["SWITCHES", "HOT-SWAP"],
              ["WEIGHT", "1.8 KG"],
            ].map(([k, v]) => (
              <div key={k} className="hero-meta">
                <div className="text-muted-foreground">{k}</div>
                <div className="mt-1 text-base text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-muted-foreground">
        SCROLL ↓
      </div>
    </section>
  );
}
