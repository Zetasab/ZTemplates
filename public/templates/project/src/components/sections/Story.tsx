import { useGsap } from "@/hooks/useGsap";
import sideImg from "@/assets/side-profile.jpg";

const CHAPTERS = [
  {
    n: "01",
    title: "Machined, not molded.",
    body: "A single block of 6063 aluminum, milled for 4 hours per case, sandblasted and anodized in deep gunmetal. No plastic. No compromises.",
  },
  {
    n: "02",
    title: "Tuned by ear.",
    body: "Silicone foam, PE film, and gasket mounts dampen every keystroke into a single, satisfying thock. Each board is acoustically tested before it ships.",
  },
  {
    n: "03",
    title: "Calibrated for speed.",
    body: "8000 Hz polling, 0.125 ms response, magnetic Hall-effect switches with adjustable actuation from 0.1 mm. Faster than thought.",
  },
];

export function Story() {
  const ref = useGsap<HTMLElement>(({ gsap, ScrollTrigger }) => {
    const chapters = gsap.utils.toArray<HTMLElement>(".chapter");

    chapters.forEach((ch, i) => {
      gsap.from(ch, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: ch,
          start: "top 80%",
        },
      });
    });

    gsap.to(".story-img", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".story-img-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".story-img", {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: ".story-pin",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// PHILOSOPHY</div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            Built different.<br />
            <span className="gradient-text">From the inside out.</span>
          </h2>
        </div>

        <div className="story-pin grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
          <div className="story-img-wrap relative aspect-[3/4] overflow-hidden md:sticky md:top-24 md:h-[80vh] md:aspect-auto">
            <img
              src={sideImg}
              alt="Side profile of mechanical keyboard showing milled aluminum"
              loading="lazy"
              width={1600}
              height={900}
              className="story-img absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="space-y-32">
            {CHAPTERS.map((c) => (
              <div key={c.n} className="chapter">
                <div className="mb-6 font-mono text-sm text-[var(--magenta-glow)]">{c.n}</div>
                <h3 className="mb-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  {c.title}
                </h3>
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
