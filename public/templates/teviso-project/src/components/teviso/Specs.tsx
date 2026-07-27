const models = [
  {
    name: "Studio 55",
    tag: "Salón moderno",
    price: "1.499 €",
    specs: ["55\" QLED 4K", "144Hz nativo", "HDR 1500 nits", "Atmos 40W"],
    accent: "from-[#4ade80]/30 to-transparent",
  },
  {
    name: "Pro 65",
    tag: "Nuestro estrella",
    price: "2.699 €",
    specs: ["65\" QLED 8K", "240Hz nativo", "HDR 3000 nits", "Atmos 4.2.2 · 80W"],
    accent: "from-[#a78bfa]/40 to-transparent",
    featured: true,
  },
  {
    name: "Theater 77",
    tag: "Cine en casa",
    price: "4.199 €",
    specs: ["77\" QLED 8K", "240Hz nativo", "HDR 4000 nits", "Atmos 5.2.2 · 120W"],
    accent: "from-[#22d3ee]/30 to-transparent",
  },
];

export function Specs() {
  return (
    <section id="specs" className="relative px-6 py-32 sm:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#a78bfa]">
            Modelos
          </p>
          <h2 className="font-serif text-5xl leading-[1] sm:text-7xl">
            Encuentra el <span className="italic text-aurora">tuyo</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {models.map((m) => (
            <article
              key={m.name}
              className={`glass-strong relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                m.featured ? "ring-1 ring-[#a78bfa]/60" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${m.accent}`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {m.tag}
                  </span>
                  {m.featured && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                      Recomendado
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-serif text-5xl">{m.name}</h3>
                <div className="mt-2 font-serif text-2xl text-aurora">{m.price}</div>

                <ul className="mt-8 space-y-3 text-sm text-white/75">
                  {m.specs.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
                      {s}
                    </li>
                  ))}
                </ul>

                <button className="mt-10 w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
                  Configurar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
