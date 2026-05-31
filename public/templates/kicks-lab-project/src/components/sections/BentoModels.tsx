import { useRef } from "react";
import { sneakers } from "@/data/sneakers";
import { gsap, registerGsap, useIsoLayoutEffect } from "@/hooks/useGsap";

export function BentoModels() {
  const root = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from(".bento-cell", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const [a, b, c, d, e] = sneakers;

  return (
    <section id="models" ref={root} className="relative bg-volt border-b-2 border-ink py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="font-display text-xs mb-8 flex items-center gap-3">
          <span className="bg-ink text-paper border-2 border-ink px-2 py-1">02</span>
          <span>EL DROP COMPLETO — 5 SILUETAS</span>
          <span className="flex-1 h-0.5 bg-ink" />
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl mb-12">
          Cinco. <br />
          <span className="text-pop">No</span> seis.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[repeat(6,minmax(180px,1fr))] md:grid-rows-[repeat(4,minmax(220px,1fr))] gap-4 md:gap-6">
          <BentoCard sneaker={a} className="md:col-span-4 md:row-span-2" big />
          <BentoCard sneaker={b} className="md:col-span-2 md:row-span-2" />
          <BentoCard sneaker={c} className="md:col-span-2 md:row-span-2" />
          <BentoCard sneaker={d} className="md:col-span-2 md:row-span-2" />
          <BentoCard sneaker={e} className="md:col-span-2 md:row-span-2" />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  sneaker,
  className = "",
  big = false,
}: {
  sneaker: (typeof sneakers)[number];
  className?: string;
  big?: boolean;
}) {
  return (
    <a
      href={`#${sneaker.id}`}
      className={`bento-cell group relative border-2 border-ink bg-paper shadow-brutal hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden ${className}`}
    >
      <img
        src={sneaker.image}
        alt={sneaker.name}
        loading="lazy"
        width={1280}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
        <div className="flex items-start justify-between">
          <span
            className="border-2 border-ink w-8 h-8 shadow-brutal-sm"
            style={{ backgroundColor: sneaker.swatch }}
            aria-label={sneaker.color}
          />
          <span className="bg-ink text-paper px-2 py-1 font-display text-xs">{sneaker.price}</span>
        </div>
        <div>
          <h3 className={`font-display leading-none ${big ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"}`}>
            {sneaker.name}
          </h3>
          <p className="font-body text-xs md:text-sm mt-2 text-ink/70">{sneaker.color}</p>
        </div>
      </div>
    </a>
  );
}
