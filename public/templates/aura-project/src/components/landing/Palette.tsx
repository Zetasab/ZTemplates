import cobalt from "@/assets/color-cobalt.jpg";
import copper from "@/assets/color-copper.jpg";
import pine from "@/assets/color-pine.jpg";
import obsidian from "@/assets/color-obsidian.jpg";
import sand from "@/assets/color-sand.jpg";
import burgundy from "@/assets/color-burgundy.jpg";
import { useGsap, gsap } from "@/hooks/use-gsap";

const COLORS = [
  { img: cobalt, tag: "Mar Profundo", name: "Cobalto Eléctrico", accent: "text-blue-300" },
  { img: copper, tag: "Crepúsculo", name: "Cobre Cañón", accent: "text-orange-300" },
  { img: pine, tag: "Naturaleza", name: "Pino Alpino", accent: "text-emerald-300" },
  { img: obsidian, tag: "Eclipse", name: "Obsidiana Pura", accent: "text-zinc-300" },
  { img: sand, tag: "Desierto", name: "Arena Cálida", accent: "text-amber-200" },
  { img: burgundy, tag: "Vino Tinto", name: "Borgoña Noche", accent: "text-rose-300" },
];

export function Palette() {
  const ref = useGsap((_ctx, scope) => {
    gsap.from(scope.querySelectorAll("[data-color]"), {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: "top 70%" },
    });
  });

  return (
    <section ref={ref} id="colors" className="py-32 md:py-48 bg-obsidian">
      <div className="px-6 md:px-8 mb-16 md:mb-20 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <span className="text-xs text-gold-muted uppercase tracking-[0.3em] block mb-4">
            03 / La Paleta
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-[0.95]">
            Precisión <br /> vibrante
          </h2>
        </div>
        <p className="max-w-sm text-sm text-platinum/40 leading-relaxed">
          Seis acabados de autor inspirados en minerales tectónicos y fases lunares. Cada color
          aplicado en polvo cerámico para una durabilidad eterna.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {COLORS.map((c) => (
          <div
            key={c.name}
            data-color
            className="group relative aspect-[3/4] overflow-hidden bg-slate-950"
          >
            <img
              src={c.img}
              alt={`Botella en color ${c.name}`}
              width={800}
              height={1088}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent flex flex-col justify-end p-8">
              <span className={`text-[10px] uppercase tracking-widest ${c.accent} mb-1`}>
                {c.tag}
              </span>
              <h4 className="text-xl md:text-2xl font-display text-platinum">{c.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
