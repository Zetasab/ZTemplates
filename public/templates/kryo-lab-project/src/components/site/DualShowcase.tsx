import { img } from "@/lib/site-images";

export function DualShowcase() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <article className="relative overflow-hidden rounded-2xl border border-border group">
        <img src={img.gaming} alt="Keycaps gaming iluminadas en rojo" loading="lazy" width={1024} height={1280} className="w-full h-[560px] object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10">
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Serie Gaming</span>
          <h3 className="font-display text-4xl md:text-5xl mt-2 mb-2">Arcade Nights</h3>
          <p className="text-muted-foreground text-sm max-w-xs">Homenaje pixel-art a los clásicos que nos definieron.</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-2xl border border-border group md:translate-y-12">
        <img src={img.landscape} alt="Keycap con ola azul en su interior" loading="lazy" width={1024} height={1280} className="w-full h-[560px] object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10">
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Serie Paisajes</span>
          <h3 className="font-display text-4xl md:text-5xl mt-2 mb-2">Kanagawa</h3>
          <p className="text-muted-foreground text-sm max-w-xs">Micro-esculturas de olas, montañas y horizontes.</p>
        </div>
      </article>
    </section>
  );
}
