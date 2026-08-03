import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { n: "01", t: "Concepto", d: "Bocetos inspirados en paisajes oníricos, cultura pop japonesa y universos gaming." },
  { n: "02", t: "Molde", d: "Silicona de alta fidelidad captura cada detalle sub-milimétrico del prototipo." },
  { n: "03", t: "Vaciado en Resina", d: "Vertido por capas para lograr profundidad óptica, gradientes y suspensiones internas." },
  { n: "04", t: "Pulido & QC", d: "Pulido manual en 4 pasos e inspección microscópica antes del empaquetado." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const track = ref.current!.querySelector<HTMLElement>(".track")!;
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">El Método</span>
        <h2 className="text-5xl md:text-7xl font-display mt-4">De la idea a la tecla.</h2>
      </div>

      <div className="track flex gap-6 pl-6 md:pl-10 will-change-transform">
        {steps.map((s) => (
          <article
            key={s.n}
            className="shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] bg-neutral-950 border border-border rounded-2xl p-10 md:p-14 flex flex-col justify-between min-h-[420px]"
          >
            <span className="font-display text-8xl md:text-9xl text-primary/80 leading-none">{s.n}</span>
            <div>
              <h4 className="text-3xl md:text-4xl font-display mb-4">{s.t}</h4>
              <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">{s.d}</p>
            </div>
          </article>
        ))}
        <div className="shrink-0 w-8" />
      </div>
    </section>
  );
}
