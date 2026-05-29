const brands = ["LUMEN", "VITACORE", "HYDRA+", "PURELAB", "MEDITECH", "BIOTIK", "SUNGUARD", "WHITOX", "TINYCARE", "BODYLY"];

export function Brands() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-8 reveal">
          Marcas de confianza
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 reveal">
          {brands.map((b) => (
            <div
              key={b}
              className="font-black text-xl sm:text-2xl text-muted-foreground/60 hover:text-foreground transition-organic tracking-tight"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
