import { sneakers } from "@/data/sneakers";

const palette = sneakers.map((s, i) => ({
  name: s.color,
  hex: s.swatch,
  code: `KL-${String(i + 1).padStart(3, "0")}`,
}));

export function Palette() {
  return (
    <section className="bg-paper border-b-2 border-ink py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="font-display text-xs mb-8 flex items-center gap-3">
          <span className="bg-ink text-paper border-2 border-ink px-2 py-1">06</span>
          <span>SISTEMA DE COLOR</span>
          <span className="flex-1 h-0.5 bg-ink" />
        </div>
        <h2 className="text-5xl md:text-7xl mb-12">
          Una paleta <br />
          <span className="italic">que no pide perdón.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {palette.map((c) => (
            <div key={c.code} className="border-2 border-ink shadow-brutal-sm bg-paper">
              <div
                className="aspect-square border-b-2 border-ink"
                style={{ backgroundColor: c.hex }}
              />
              <div className="p-4">
                <div className="font-display text-xs text-ink/60">{c.code}</div>
                <div className="font-display text-base mt-1">{c.name}</div>
                <div className="font-body text-xs mt-2 uppercase tracking-wider">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
