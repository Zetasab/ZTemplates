export function Marquee({ text }: { text: string }) {
  const repeated = Array.from({ length: 2 }).map((_, i) => (
    <span key={i} className="flex shrink-0 gap-16 px-8 font-[family-name:var(--font-display)] italic text-6xl md:text-8xl text-kuro-fg/10 whitespace-nowrap">
      {Array.from({ length: 6 }).map((_, j) => (
        <span key={j}>{text}</span>
      ))}
    </span>
  ));
  return (
    <div className="overflow-hidden py-10 border-y border-kuro-border bg-kuro-bg">
      <div className="flex animate-kuro-marquee">{repeated}</div>
    </div>
  );
}