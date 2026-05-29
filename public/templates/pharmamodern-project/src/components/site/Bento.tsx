import { ArrowUpRight, Leaf, Sparkles, HeartPulse, Pill, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import featured from "@/assets/bento-featured.jpg";
import nutrition from "@/assets/cat-nutrition.jpg";
import care from "@/assets/cat-care.jpg";
import kit from "@/assets/cat-kit.jpg";

export function Bento() {
  return (
    <section id="productos" className="py-20 sm:py-32 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Escaparate
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black max-w-2xl">
              Productos que te <span className="gradient-text">acompañan</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selección curada de marcas premium para skincare, nutrición y bienestar diario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[repeat(4,minmax(180px,auto))] gap-4 sm:gap-5">
          <BentoCard
            className="md:col-span-4 md:row-span-2"
            image={featured}
            tag="Línea destacada"
            title="Cosmética con activos clínicos"
            sub="Resultados visibles en 14 días"
            big
          />
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            image={care}
            tag="Cuidado personal"
            title="Daily Skincare"
            icon={<Sparkles className="w-4 h-4" />}
          />
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            image={nutrition}
            tag="Nutrición"
            title="Vitaminas & adaptógenos"
            icon={<Leaf className="w-4 h-4" />}
          />
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            image={kit}
            tag="Botiquín inteligente"
            title="Esenciales en casa"
            icon={<HeartPulse className="w-4 h-4" />}
          />
          <div className="md:col-span-2 md:row-span-2 rounded-3xl gradient-primary p-7 flex flex-col justify-between text-primary-foreground shadow-glow reveal group cursor-pointer">
            <div>
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-background/20 backdrop-blur-sm mb-4">
                <Pill className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-2">Receta digital</h3>
              <p className="text-sm opacity-90">Sube tu receta y recíbela en casa en menos de 2 horas.</p>
            </div>
            <div className="inline-flex items-center gap-2 font-semibold text-sm">
              Probar ahora
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-organic" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center reveal">
          <Link
            to="/productos"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-semibold shadow-card hover:scale-[1.02] transition-organic"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-organic" />
          </Link>
        </div>
      </div>
    </section>
  );
}


function BentoCard({
  className,
  image,
  tag,
  title,
  sub,
  icon,
  big,
}: {
  className?: string;
  image: string;
  tag: string;
  title: string;
  sub?: string;
  icon?: React.ReactNode;
  big?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden bg-card shadow-card reveal group cursor-pointer ${className ?? ""}`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-organic group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="inline-flex self-start items-center gap-2 px-2.5 py-1 rounded-full glass-card text-[11px] font-medium mb-2">
          {icon}
          {tag}
        </div>
        <h3 className={`font-bold tracking-tight ${big ? "text-3xl sm:text-4xl" : "text-xl"}`}>{title}</h3>
        {sub && <p className="text-sm text-muted-foreground mt-1">{sub}</p>}
        <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-organic" />
      </div>
    </div>
  );
}
