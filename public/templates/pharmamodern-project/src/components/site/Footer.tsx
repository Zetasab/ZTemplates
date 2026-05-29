import { useEffect, useState } from "react";
import { Plus, Instagram, Twitter, Linkedin, ArrowUp, ArrowRight } from "lucide-react";

const cols = [
  { title: "Tienda", items: ["Skincare", "Nutrición", "Cuidado personal", "Botiquín"] },
  { title: "Empresa", items: ["Conócenos", "Equipo", "Blog", "Trabaja con nosotros"] },
  { title: "Soporte", items: ["Envíos", "Devoluciones", "Privacidad", "Cookies"] },
];

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl gradient-primary text-primary-foreground p-8 sm:p-12 mb-16 shadow-glow flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Tu dosis semanal de bienestar 💌</h3>
            <p className="text-sm opacity-90 mt-1">Tips, lanzamientos y descuentos. Cero spam, palabra de farma.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 md:w-72 bg-background/20 backdrop-blur-sm border border-background/30 rounded-full px-5 py-3 placeholder:text-primary-foreground/70 focus:outline-none focus:bg-background/30 transition-organic"
            />
            <button type="button" className="px-5 py-3 rounded-full bg-foreground text-background font-semibold inline-flex items-center gap-2 hover:scale-[1.02] transition-organic">
              Suscribirme <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid gap-10 md:grid-cols-12 mb-12">
          <div className="md:col-span-4">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-xl gradient-primary">
                <Plus className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
              </span>
              <span className="font-bold text-lg">
                Pharma<span className="gradient-text">Modern</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              La farmacia reimaginada. Salud, ciencia y diseño en un solo lugar.
            </p>
            <div className="flex gap-2 mt-5">
              {[Instagram, Twitter, Linkedin].map((Ic, i) => (
                <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full bg-muted hover:bg-secondary transition-organic">
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">{c.title}</div>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:text-primary transition-organic">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">Contacto</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Av. Bienestar 24</li>
              <li>28001 Madrid</li>
              <li>+34 900 000 000</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} PharmaModern. Todos los derechos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-organic">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-organic">Términos</a>
            <a href="#" className="hover:text-foreground transition-organic">Cookies</a>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver arriba"
        className={`fixed bottom-6 right-6 w-12 h-12 grid place-items-center rounded-full gradient-primary text-primary-foreground shadow-float transition-organic z-40 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
