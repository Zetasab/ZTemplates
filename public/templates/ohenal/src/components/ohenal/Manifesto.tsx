import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsapReady } from "@/hooks/use-gsap";

export function Manifesto() {
  useGsapReady();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
      gsap.from(words, {
        opacity: 0.12,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      });
      gsap.from(".manifesto-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const text =
    "Nacida del silencio entre dos olas. O'Henal no busca seducir — convoca. Una composición acuática que respira a sal, almizcle y piedra mojada, hecha para hombres que entienden que la elegancia es un murmullo, nunca un grito.";

  return (
    <section id="manifiesto" ref={root} className="relative bg-ink py-32 md:py-48 px-6 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="manifesto-eyebrow flex items-center gap-6 mb-16">
          <span className="hairline max-w-20" />
          <span className="text-eyebrow text-silver/70">I · Manifiesto</span>
        </div>
        <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-bone tracking-tight">
          {text.split(" ").map((w, i) => (
            <span key={i} className="manifesto-word inline-block mr-[0.25em]">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
