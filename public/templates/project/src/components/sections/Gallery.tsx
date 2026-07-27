import { useGsap } from "@/hooks/useGsap";
import s1 from "@/assets/setup-1.jpg";
import s2 from "@/assets/setup-2.jpg";
import s3 from "@/assets/setup-3.jpg";
import s4 from "@/assets/keycaps.jpg";
import s5 from "@/assets/side-profile.jpg";
import s6 from "@/assets/rgb-lifestyle.jpg";

const SHOTS = [
  { src: s1, alt: "60% keyboard setup", h: "tall" },
  { src: s2, alt: "TKL keyboard setup", h: "short" },
  { src: s3, alt: "Teal and orange colorway", h: "tall" },
  { src: s4, alt: "Artisan keycaps", h: "short" },
  { src: s5, alt: "Side profile", h: "short" },
  { src: s6, alt: "RGB lifestyle", h: "tall" },
];

export function Gallery() {
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: (i % 3) * 0.1,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
      const img = el.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    });
  });

  return (
    <section ref={ref} className="relative bg-[var(--surface)] py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// IN THE WILD</div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            Setups from the community.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SHOTS.map((s, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden border border-border ${s.h === "tall" ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[4/3]"}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-[115%] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-foreground/80">
                @AXON_{String(i + 1).padStart(3, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
