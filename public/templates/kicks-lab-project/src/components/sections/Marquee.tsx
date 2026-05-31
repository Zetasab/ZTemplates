import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import detail1 from "@/assets/detail-1.jpg";
import detail2 from "@/assets/detail-2.jpg";
import { sneakers } from "@/data/sneakers";

const row1 = [lifestyle1, sneakers[0].image, detail1, sneakers[1].image, lifestyle2, sneakers[2].image];
const row2 = [detail2, sneakers[3].image, lifestyle2, sneakers[4].image, detail1, lifestyle1];

export function MarqueeGallery() {
  return (
    <section className="bg-ink border-b-2 border-ink py-16 overflow-hidden">
      <div className="px-4 md:px-8 mb-10">
        <div className="font-display text-xs mb-4 flex items-center gap-3 text-paper">
          <span className="bg-volt text-ink border-2 border-volt px-2 py-1">04</span>
          <span>IN THE WILD</span>
          <span className="flex-1 h-0.5 bg-paper/40" />
        </div>
        <h2 className="text-paper text-5xl md:text-7xl">Visto en la calle.</h2>
      </div>

      <MarqueeRow images={row1} direction="left" speed={40} />
      <div className="h-6" />
      <MarqueeRow images={row2} direction="right" speed={50} />
    </section>
  );
}

function MarqueeRow({
  images,
  direction,
  speed,
}: {
  images: string[];
  direction: "left" | "right";
  speed: number;
}) {
  const dup = [...images, ...images];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-6 w-max"
        style={{
          animation: `marq-${direction} ${speed}s linear infinite`,
        }}
      >
        {dup.map((src, i) => (
          <div
            key={i}
            className="w-[280px] md:w-[420px] aspect-[4/3] border-2 border-paper bg-paper shrink-0 overflow-hidden"
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marq-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marq-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
