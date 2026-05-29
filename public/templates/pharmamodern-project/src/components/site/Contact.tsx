import { useState } from "react";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";

function FloatingInput({
  label,
  type = "text",
  textarea,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [v, setV] = useState("");
  const [focus, setFocus] = useState(false);
  const active = focus || v.length > 0;
  return (
    <div className="relative pt-5">
      {textarea ? (
        <textarea
          rows={4}
          value={v}
          onChange={(e) => setV(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 resize-none transition-organic"
        />
      ) : (
        <input
          type={type}
          value={v}
          onChange={(e) => setV(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 transition-organic"
        />
      )}
      <label
        className={`absolute left-0 pointer-events-none transition-organic ${
          active ? "top-0 text-xs text-primary" : "top-7 text-base text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium mb-5">
              Contacto
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5">
              Hablemos de tu <span className="gradient-text">bienestar</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Estamos aquí para ti. Elige el canal que prefieras o escríbenos directamente.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-10">
              <QuickCard icon={<Phone className="w-4 h-4" />} title="Llamar" sub="+34 900 000 000" />
              <QuickCard icon={<MessageCircle className="w-4 h-4" />} title="WhatsApp" sub="Respuesta &lt; 5min" />
              <QuickCard icon={<MapPin className="w-4 h-4" />} title="Visítanos" sub="Av. Bienestar 24" />
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingInput label="Nombre" />
                <FloatingInput label="Email" type="email" />
              </div>
              <FloatingInput label="¿En qué podemos ayudarte?" textarea />
              <button
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-organic"
              >
                Enviar mensaje
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-organic" />
              </button>
            </form>
          </div>

          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden bg-foreground h-full min-h-[500px] shadow-float">
              <MapDark />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">PharmaModern HQ</div>
                <div className="font-semibold">Av. Bienestar 24, 28001</div>
                <div className="text-sm text-muted-foreground">Lun – Dom · 24h Guardia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-border bg-card hover:bg-muted transition-organic"
    >
      <div className="w-9 h-9 grid place-items-center rounded-xl gradient-primary text-primary-foreground group-hover:scale-110 transition-organic">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: sub }} />
      </div>
    </a>
  );
}

function MapDark() {
  return (
    <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(1 0 0 / 0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="600" fill="oklch(0.18 0.02 240)" />
      <rect width="600" height="600" fill="url(#grid)" />
      <path d="M0 320 Q150 280 300 340 T600 300" stroke="oklch(0.74 0.16 165 / 0.4)" strokeWidth="2" fill="none" />
      <path d="M120 0 L140 600" stroke="oklch(1 0 0 / 0.08)" strokeWidth="20" fill="none" />
      <path d="M460 0 L420 600" stroke="oklch(1 0 0 / 0.08)" strokeWidth="14" fill="none" />
      <circle cx="300" cy="300" r="40" fill="oklch(0.74 0.16 165 / 0.2)" />
      <circle cx="300" cy="300" r="22" fill="oklch(0.74 0.16 165 / 0.4)" />
      <circle cx="300" cy="300" r="10" fill="oklch(0.74 0.16 165)" />
    </svg>
  );
}
