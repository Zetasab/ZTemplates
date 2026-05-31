import { useRef } from "react";
import { sneakers, type Sneaker } from "@/data/sneakers";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

export function ModelsDetail() {
  return (
    <section className="bg-paper border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28">
        <div className="font-display text-xs mb-8 flex items-center gap-3">
          <span className="bg-pop border-2 border-ink px-2 py-1">03</span>
          <span>DESGLOSE POR MODELO</span>
          <span className="flex-1 h-0.5 bg-ink" />
        </div>
      </div>
      {sneakers.map((s, i) => (
        <ModelRow key={s.id} sneaker={s} index={i} />
      ))}
    </section>
  );
}

function ModelRow({ sneaker, index }: { sneaker: Sneaker; index: number }) {
  const root = useRef<HTMLDivElement>(null);
  const reverse = index % 2 === 1;

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.to(root.current!.querySelector(".det-img-inner"), {
        yPercent: -15,
        rotate: reverse ? -8 : 8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(root.current!.querySelectorAll(".det-fade"), {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
    }, root);
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div
      id={sneaker.id}
      ref={root}
      className={`relative grid md:grid-cols-12 gap-8 px-4 md:px-8 py-20 md:py-32 border-t-2 border-ink ${
        index % 2 === 1 ? "bg-paper" : "bg-paper"
      }`}
    >
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="relative aspect-square border-2 border-ink bg-volt overflow-hidden">
          <div className="det-img-inner absolute inset-0 will-change-transform">
            <img
              src={sneaker.image}
              alt={sneaker.name}
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 bg-ink text-paper px-3 py-1 font-display text-xs">
            0{index + 1} / 05
          </div>
          <div className="absolute bottom-4 right-4 bg-pop border-2 border-ink px-3 py-1 font-display text-sm">
            {sneaker.price}
          </div>
        </div>
      </div>

      <div className={`md:col-span-6 flex flex-col justify-center ${reverse ? "md:order-1" : ""}`}>
        <div className="det-fade flex items-center gap-3 mb-4 font-display text-xs">
          <span
            className="border-2 border-ink w-6 h-6"
            style={{ backgroundColor: sneaker.swatch }}
            aria-hidden
          />
          {sneaker.color}
        </div>
        <h3 className="det-fade text-6xl md:text-8xl lg:text-9xl">{sneaker.name}</h3>
        <p className="det-fade font-display text-xl md:text-2xl mt-4 text-pop">{sneaker.tagline}</p>
        <p className="det-fade font-body text-base md:text-lg mt-6 max-w-md text-ink/80">
          {sneaker.description}
        </p>

        <div className="det-fade grid grid-cols-3 gap-3 mt-8 max-w-md">
          <Spec label="Peso" value={sneaker.weight} />
          <Spec label="Drop" value={sneaker.drop} />
          <Spec label="Material" value={sneaker.material} />
        </div>

        <div className="det-fade mt-8">
          <a
            href="#cta"
            className="inline-block border-2 border-ink bg-ink text-paper px-6 py-3 font-display shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            RESERVAR {sneaker.name} →
          </a>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-ink p-3">
      <div className="font-body text-[10px] uppercase tracking-wider text-ink/60">{label}</div>
      <div className="font-display text-sm mt-1">{value}</div>
    </div>
  );
}
