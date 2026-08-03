import { useEffect, useRef } from "react";
import lipstick from "@/assets/prod-lipstick.jpg";
import powder from "@/assets/prod-powder.jpg";
import brow from "@/assets/prod-brow.jpg";
import mascara from "@/assets/prod-mascara.jpg";
import serum from "@/assets/prod-serum.jpg";
import blush from "@/assets/prod-blush.jpg";
import { gsap } from "@/hooks/useGsap";

const products = [
  { name: "Obsidian Noir Palette", sub: "Sombra multidimensional", price: "78€", img: lipstick },
  { name: "Prism Veil Fluid", sub: "Primer luminoso", price: "62€", img: powder },
  { name: "Structure Brow Wax", sub: "Arquitectura para cejas", price: "45€", img: brow },
  { name: "Velvet Carmín", sub: "Labial mate saturado", price: "52€", img: mascara },
  { name: "Liquid Aurum", sub: "Sérum iluminador", price: "84€", img: serum },
  { name: "Rose Métallique", sub: "Colorete en crema", price: "58€", img: blush },
];

export function Essentials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Title letter stagger
      const title = ref.current!.querySelector(".ess-title");
      if (title) {
        const text = title.textContent || "";
        title.innerHTML = text
          .split("")
          .map((ch) =>
            ch === " "
              ? '<span class="inline-block">&nbsp;</span>'
              : `<span class="inline-block translate-y-full opacity-0">${ch}</span>`,
          )
          .join("");
        gsap.to(title.querySelectorAll("span"), {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.03,
          scrollTrigger: { trigger: title, start: "top 80%" },
        });
      }
      gsap.fromTo(
        ".prod-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".prod-grid", start: "top 80%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="esenciales"
      className="bg-brand-dark text-brand-bone py-24 md:py-40"
    >
      <div className="px-6 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 md:mb-20">
          <h3
            className="ess-title font-display text-5xl md:text-7xl lg:text-8xl italic overflow-hidden inline-block"
            style={{ lineHeight: 1 }}
          >
            Esenciales
          </h3>
          <div className="text-[10px] uppercase tracking-[0.25em] border-b border-brand-bone/30 pb-2 cursor-pointer self-start">
            Ver catálogo completo
          </div>
        </div>

        <div className="prod-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`prod-card group cursor-pointer ${i % 3 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="overflow-hidden mb-6 aspect-[4/5] bg-neutral-900">
                <img
                  src={p.img}
                  alt={p.name}
                  width={600}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold">
                    {p.name}
                  </h4>
                  <p className="text-brand-bone/50 text-[10px] mt-1 uppercase tracking-wider">
                    {p.sub}
                  </p>
                </div>
                <span className="text-xs font-mono">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
