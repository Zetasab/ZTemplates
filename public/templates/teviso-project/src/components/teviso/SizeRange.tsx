import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lineup from "@/assets/size-range.jpg";

const sizes = [
  { size: "43\"", model: "Teviso Air", desc: "Íntima, luminosa, perfecta para el estudio." },
  { size: "55\"", model: "Teviso Studio", desc: "El equilibrio ideal entre salón y cine." },
  { size: "65\"", model: "Teviso Pro", desc: "Nuestro modelo estrella. QLED 8K." },
  { size: "77\"", model: "Teviso Theater", desc: "Cine puro. HDR sin compromisos." },
  { size: "98\"", model: "Teviso Grand", desc: "La escala del asombro. Instalación premium." },
];

export function SizeRange() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      const track = el.querySelector(".sr-track") as HTMLElement | null;
      if (!track) return;
      const distance = () => track.scrollWidth - window.innerWidth + 48;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tamaños" ref={root} className="relative overflow-hidden">
      <div className="relative h-[100svh]">
        <img
          src={lineup}
          alt="Gama de televisores Teviso"
          width={1920}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-x-0 top-0 z-10 px-6 pt-24 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#a78bfa]">La gama</p>
          <h2 className="font-serif text-5xl leading-[1] sm:text-7xl">
            De 43 a <span className="italic text-aurora">98 pulgadas</span>
          </h2>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-52">
          <div className="sr-track flex h-full items-center gap-6 px-6 md:gap-10 md:px-12" style={{ width: "max-content" }}>
            {sizes.map((s) => (
              <article
                key={s.size}
                className="glass-strong flex h-[62vh] w-[78vw] shrink-0 flex-col justify-between rounded-3xl p-8 sm:w-[56vw] md:w-[38vw] lg:w-[32vw]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-serif text-6xl md:text-8xl text-aurora">
                    {s.size}
                  </div>
                  <div className="mt-2 rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60">
                    QLED 8K
                  </div>
                </div>
                <div className="relative mx-auto my-6 aspect-[16/10] w-full rounded-xl border border-white/15 bg-gradient-to-br from-[#4ade80]/20 via-[#a78bfa]/20 to-[#22d3ee]/20 shadow-[inset_0_0_60px_rgba(167,139,250,0.35)]" />
                <div>
                  <div className="font-serif text-3xl">{s.model}</div>
                  <p className="mt-2 text-sm text-white/60">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
