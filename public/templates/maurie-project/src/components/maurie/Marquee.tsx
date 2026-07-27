const items = [
  "Seda salvaje",
  "Lino orgánico",
  "Cachemira italiana",
  "Artesanía local",
  "Made in Madrid",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border whitespace-nowrap py-20 md:py-28">
      <div className="flex animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-12 px-12 font-display text-4xl italic md:text-6xl lg:text-7xl"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
