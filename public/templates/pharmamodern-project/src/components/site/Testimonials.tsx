import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Lucía M.", role: "Cliente desde 2023", text: "Pedí a las 9, llegó a las 11. Y la atención por chat es real, no un bot. 10/10.", stars: 5 },
  { name: "Carlos R.", role: "Cliente desde 2022", text: "La consulta online me ahorró una visita al médico. Profesionales de verdad.", stars: 5 },
  { name: "María P.", role: "Cliente VIP", text: "La selección de skincare es brutal, no hay nada que envidiar a una perfumería de lujo.", stars: 5 },
  { name: "Javier S.", role: "Cliente nuevo", text: "App, web y farmacia física al mismo nivel. Por fin alguien lo hace bien.", stars: 4 },
];

export function Testimonials() {
  return (
    <section id="opiniones" className="py-20 sm:py-32 gradient-soft">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium mb-4">
            <Star className="w-3.5 h-3.5 fill-warning text-warning" /> 4.9 / 5 · +2.300 reseñas
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Nuestros clientes nos <span className="gradient-text">quieren</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative rounded-3xl bg-card border border-border p-6 shadow-card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="w-8 h-8 text-primary opacity-30 mb-3" />
              <p className="text-sm leading-relaxed mb-5">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
