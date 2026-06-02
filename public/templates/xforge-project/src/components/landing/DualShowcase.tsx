import mc from "@/assets/controller-minecraft.jpg";
import lol from "@/assets/controller-lol.jpg";

export function DualShowcase() {
  return (
    <section id="collection" className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t border-white/5">
      <div className="group relative overflow-hidden bg-[#1a2d1a] min-h-[70vh] md:min-h-screen">
        <img
          src={mc}
          alt="Mando Xbox personalizado Minecraft con textura de grass block"
          width={1080}
          height={1792}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-3">
            Edition 04 / 05
          </span>
          <h3 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2 text-white">Craft Master</h3>
          <p className="text-sm text-zinc-300 max-w-xs">
            Inspirado en Minecraft. Topografía voxel en resina translúcida verde esmeralda sobre núcleo mecanizado.
          </p>
        </div>
      </div>
      <div className="group relative overflow-hidden bg-[#0a1428] min-h-[70vh] md:min-h-screen">
        <img
          src={lol}
          alt="Mando Xbox personalizado League of Legends estilo Hextech con filigrana dorada"
          width={1080}
          height={1792}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-3">
            Edition 05 / 05
          </span>
          <h3 className="font-display text-4xl md:text-5xl font-bold uppercase mb-2 text-white">Summoner's Edge</h3>
          <p className="text-sm text-zinc-300 max-w-xs">
            Inspirado en League of Legends. Filigrana hextech dorada y cristales cyan que pulsan con energía arcana.
          </p>
        </div>
      </div>
    </section>
  );
}
