import { useGsap } from "@/hooks/useGsap";
import rgbImg from "@/assets/rgb-lifestyle.jpg";

export function RGB() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.to(".rgb-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: { trigger: ".rgb-root", start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from(".rgb-content > *", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.1,
      scrollTrigger: { trigger: ".rgb-content", start: "top 75%" },
    });
  });

  return (
    <section ref={ref} className="rgb-root relative overflow-hidden">
      <div className="rgb-bg absolute inset-0 -top-32 -bottom-32">
        <img src={rgbImg} alt="RGB lit gaming setup" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-40 md:px-12 md:py-56">
        <div className="rgb-content max-w-2xl">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--magenta-glow)]">// LIGHT</div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            16.7 million colors.<br />
            <span className="gradient-text">One signature.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Per-key south-facing RGB with a custom diffuser layer for buttery, even illumination. Drive it
            with our companion app or write your own effects in QMK.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 font-mono text-xs md:grid-cols-4">
            {[
              ["EFFECTS", "32 BUILT-IN"],
              ["DIFFUSION", "MILK PE"],
              ["COLOR DEPTH", "24-BIT"],
              ["REFRESH", "1000 HZ"],
            ].map(([k, v]) => (
              <div key={k} className="border-l border-[var(--magenta-glow)] pl-3">
                <div className="text-muted-foreground">{k}</div>
                <div className="mt-1 text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
