import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Truck, Stethoscope, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-product.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setT({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="inicio" className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden
        className="absolute top-40 -right-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl bg-accent"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        <div className="lg:col-span-6 space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Nueva era del bienestar</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] animate-fade-up" style={{ animationDelay: "80ms" }}>
            La salud del{" "}
            <span className="gradient-text">futuro</span>,
            <br />
            hoy.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "160ms" }}>
            Tu farmacia reimaginada. Productos premium, consulta inteligente y entrega
            ultra-rápida — diseñado para cómo vives ahora.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a
              href="#productos"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-organic"
            >
              Explorar productos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-organic" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card hover:bg-muted font-semibold transition-organic"
            >
              Consulta online
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
            {[
              { n: "+10k", l: "Clientes" },
              { n: "24/7", l: "Atención" },
              { n: "4.9★", l: "Valoración" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold">{s.n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className="lg:col-span-6 relative h-[520px] sm:h-[600px] animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div
            className="absolute inset-6 rounded-[2.5rem] overflow-hidden shadow-float bg-card transition-organic"
            style={{
              transform: `perspective(1200px) rotateY(${t.x * -6}deg) rotateX(${t.y * 6}deg)`,
            }}
          >
            <img
              src={heroImg}
              alt="Producto premium de bienestar"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          <FloatingCard
            className="left-0 top-12"
            offset={{ x: t.x * 18, y: t.y * 18 }}
            icon={<Truck className="w-4 h-4 text-primary" />}
            title="Envío en 2h"
            sub="A toda la ciudad"
          />
          <FloatingCard
            className="right-0 top-1/3"
            offset={{ x: t.x * -22, y: t.y * 22 }}
            icon={<Stethoscope className="w-4 h-4 text-accent-foreground" />}
            title="Consulta Online"
            sub="Farmacéutico real"
          />
          <FloatingCard
            className="left-6 bottom-6"
            offset={{ x: t.x * 14, y: t.y * -14 }}
            icon={<ShieldCheck className="w-4 h-4 text-success" />}
            title="100% certificado"
            sub="Calidad garantizada"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  offset,
  icon,
  title,
  sub,
}: {
  className?: string;
  offset: { x: number; y: number };
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div
      className={`absolute glass-card rounded-2xl px-4 py-3 shadow-card flex items-center gap-3 animate-float-slow ${className ?? ""}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: "transform 0.4s var(--ease-organic)" }}
    >
      <div className="w-9 h-9 grid place-items-center rounded-xl bg-muted">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
