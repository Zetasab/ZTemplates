import p1 from "@/assets/poster-neon-shadows.jpg";
import p2 from "@/assets/poster-void-echo.jpg";
import p3 from "@/assets/poster-last-frame.jpg";
import p4 from "@/assets/poster-glitch-protocol.jpg";
import p5 from "@/assets/poster-ecos.jpg";
import p6 from "@/assets/poster-sombras-ambar.jpg";

const releases = [
  { img: p1, title: "Sombras de Neón", genre: "Drama", year: "2025" },
  { img: p2, title: "Void & Echo", genre: "Sci-Fi", year: "2024" },
  { img: p3, title: "El Último Fotograma", genre: "Neo-noir", year: "2025" },
  { img: p4, title: "Protocolo Glitch", genre: "Thriller", year: "2024" },
  { img: p5, title: "Ecos Silenciosos", genre: "Western", year: "2025" },
  { img: p6, title: "Sombras de Ámbar", genre: "Épico", year: "2024" },
];

export function NewReleases() {
  return (
    <section id="catalogo" className="py-24 md:py-32 overflow-hidden border-t border-border">
      <div className="px-6 md:px-10 flex justify-between items-end mb-12 max-w-[1600px] mx-auto">
        <div>
          <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-4 block">
            Catálogo · Nuevos ingresos
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">
            RECIÉN AGREGADOS
          </h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-muted-foreground text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors">
          Ver toda la colección →
        </a>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-8 pl-6 md:pl-10 pr-6 no-scrollbar snap-x snap-mandatory">
        {releases.map((r, i) => (
          <div
            key={r.title}
            className="min-w-[260px] md:min-w-[320px] group cursor-pointer snap-start"
          >
            <div className="relative aspect-[2/3] w-full mb-5 overflow-hidden">
              <img
                src={r.img}
                alt={r.title}
                loading="lazy"
                width={640}
                height={960}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute top-4 left-4 text-[10px] font-mono-tight tracking-widest text-foreground/80 bg-background/50 backdrop-blur px-2 py-1">
                N°{String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary text-2xl">
                ▶
              </span>
            </div>
            <h4 className="font-display text-2xl tracking-tight">{r.title}</h4>
            <p className="text-xs text-muted-foreground font-editorial italic mt-1">
              {r.genre} · {r.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}