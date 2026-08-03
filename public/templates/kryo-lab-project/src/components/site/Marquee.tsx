const items = ["Anime", "Gaming", "Paisajes", "Ediciones Limitadas", "Custom", "Hecho en Madrid"];

export function Marquee() {
  return (
    <section className="border-y border-border py-8 overflow-hidden">
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl tracking-wide flex items-center gap-16">
            <span className={i % 2 === 0 ? "text-foreground" : "text-primary"}>{it}</span>
            <span className="text-white/10">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
