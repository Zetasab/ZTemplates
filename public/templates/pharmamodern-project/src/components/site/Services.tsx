import { Truck, Stethoscope, FileText, Pill, HeartPulse, Calendar } from "lucide-react";

const services = [
  { icon: Truck, title: "Envío en 2 horas", desc: "A toda la ciudad, hasta tu puerta. Sin coste a partir de 30€." },
  { icon: Stethoscope, title: "Consulta farmacéutica online", desc: "Videollamada con un profesional en menos de 10 minutos." },
  { icon: FileText, title: "Receta electrónica", desc: "Sube tu receta y la preparamos antes de que llegues." },
  { icon: Pill, title: "Pastillero inteligente", desc: "Recordatorios y seguimiento de tu medicación." },
  { icon: HeartPulse, title: "Chequeos express", desc: "Tensión, glucosa y SpO₂ en 5 minutos en farmacia." },
  { icon: Calendar, title: "Citas y vacunación", desc: "Reserva tu hora para campañas estacionales." },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium mb-4">
            Servicios
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Todo lo que necesitas,
            <br />
            <span className="gradient-text">en un solo sitio.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-card hover:-translate-y-1 transition-organic reveal overflow-hidden"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-organic"
              />
              <div className="relative">
                <div className="w-12 h-12 grid place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-glow mb-5 group-hover:scale-110 transition-organic">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
