import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Search, Star, SlidersHorizontal } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos · PharmaModern" },
      { name: "description", content: "Explora nuestra selección de productos premium de salud, skincare, nutrición y bienestar." },
      { property: "og:title", content: "Productos · PharmaModern" },
      { property: "og:description", content: "Selección curada de salud, skincare y bienestar." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [cat, setCat] = useState<string>("Todos");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"rel" | "price-asc" | "price-desc" | "rating">("rel");
  const [max, setMax] = useState(100);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (cat !== "Todos" && p.category !== cat) return false;
      if (p.price > max) return false;
      if (q && !`${p.name} ${p.brand} ${p.desc}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort, max]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 sm:pt-40 pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-organic mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium mb-4">
                Catálogo completo
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Todos los <span className="gradient-text">productos</span>
              </h1>
              <p className="text-muted-foreground mt-3 max-w-xl">
                {filtered.length} productos seleccionados a mano por nuestros farmacéuticos.
              </p>
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar producto, marca…"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border focus:border-primary focus:outline-none transition-organic"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 space-y-8">
              <div className="glass-card rounded-3xl p-5 sticky top-28">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-4">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filtros
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold mb-3">Categoría</div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCat(c)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-organic ${
                          cat === c
                            ? "gradient-primary text-primary-foreground shadow-glow"
                            : "bg-muted hover:bg-secondary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span>Precio máximo</span>
                    <span className="text-primary">{max}€</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    value={max}
                    onChange={(e) => setMax(Number(e.target.value))}
                    className="w-full accent-[color:var(--color-primary)]"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold mb-3">Ordenar</div>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as typeof sort)}
                    className="w-full px-3 py-2 rounded-xl bg-muted border border-border text-sm focus:border-primary focus:outline-none"
                  >
                    <option value="rel">Relevancia</option>
                    <option value="price-asc">Precio: menor a mayor</option>
                    <option value="price-desc">Precio: mayor a menor</option>
                    <option value="rating">Mejor valorados</option>
                  </select>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                  No hay productos con esos filtros.
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((p) => (
                    <article key={p.id} className="group rounded-3xl bg-card border border-border shadow-card overflow-hidden hover:-translate-y-1 transition-organic">
                      <div className="relative aspect-square gradient-soft grid place-items-center overflow-hidden">
                        <div className="text-7xl group-hover:scale-110 transition-organic">{p.emoji}</div>
                        {p.badge && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-foreground text-background">
                            {p.badge}
                          </span>
                        )}
                        <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-[11px] font-medium glass-card flex items-center gap-1">
                          <Star className="w-3 h-3 fill-warning text-warning" /> {p.rating}
                        </span>
                      </div>
                      <div className="p-5">
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{p.brand}</div>
                        <h3 className="font-bold mt-1 leading-tight">{p.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.desc}</p>
                        <div className="flex items-end justify-between mt-4">
                          <div>
                            <div className="text-lg font-black">{p.price.toFixed(2)}€</div>
                            {p.oldPrice && (
                              <div className="text-xs text-muted-foreground line-through">{p.oldPrice.toFixed(2)}€</div>
                            )}
                          </div>
                          <button className="px-3.5 py-2 rounded-full gradient-primary text-primary-foreground text-xs font-semibold hover:scale-105 transition-organic">
                            Añadir
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
