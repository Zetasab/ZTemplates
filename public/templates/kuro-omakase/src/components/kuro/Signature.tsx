import otoro from "@/assets/dish-otoro.jpg";
import wagyu from "@/assets/dish-wagyu.jpg";
import uni from "@/assets/dish-uni.jpg";
import hamachi from "@/assets/dish-hamachi.jpg";

const dishes = [
  { img: otoro, title: "Otoro con Caviar", desc: "Ventresca de atún rojo, caviar Beluga.", offset: false },
  { img: wagyu, title: "Wagyu A5 Aburi", desc: "Ternera de Kagoshima, sal de Maldon, soja añeja.", offset: true },
  { img: uni, title: "Uni & Trufa", desc: "Erizo de mar fresco sobre arroz crujiente, láminas de trufa negra.", offset: false },
  { img: hamachi, title: "Hamachi Zest", desc: "Pez limón, yuzu y jalapeño ahumado.", offset: true },
];

export function Signature() {
  return (
    <section className="bg-kuro-paper text-kuro-bg py-32 md:py-40 px-6 lg:px-24">
      <div className="flex justify-between items-end mb-16 md:mb-20" data-reveal>
        <div>
          <span className="font-[family-name:var(--font-mono-kuro)] text-[10px] uppercase tracking-[0.4em] text-kuro-primary">
            Selección de Autor
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl mt-4 italic">Joyas de la Casa</h2>
        </div>
        <div className="hidden md:block font-[family-name:var(--font-mono-kuro)] text-[10px] text-zinc-500">01 — 04</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-group>
        {dishes.map((d) => (
          <div key={d.title} data-reveal-item className={`group cursor-crosshair ${d.offset ? "lg:mt-16" : ""}`}>
            <div className="overflow-hidden mb-5">
              <img
                src={d.img}
                alt={d.title}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-tight">{d.title}</h3>
            <p className="text-xs text-zinc-500 mt-1 italic">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}