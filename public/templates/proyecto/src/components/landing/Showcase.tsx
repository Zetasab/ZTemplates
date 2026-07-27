import editorShowcase from "@/assets/editor-showcase.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { useReveal } from "@/hooks/use-reveal";

export function Showcase() {
  const wrap = useReveal<HTMLDivElement>(100);
  const img = useParallax<HTMLDivElement>(80);
  return (
    <section id="engine" className="overflow-hidden px-6 py-32">
      <div ref={wrap} className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
            04 — Interfaz
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Una interfaz que desaparece para que quede tu código.
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
          <div ref={img} className="will-change-transform">
            <img
              src={editorShowcase}
              alt="Interfaz del editor Kinetic con syntax highlighting en verde esmeralda"
              loading="lazy"
              width={1920}
              height={1200}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}