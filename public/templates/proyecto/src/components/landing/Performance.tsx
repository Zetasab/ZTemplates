import mercuryImg from "@/assets/performance-mercury.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useEffect, useRef, useState } from "react";

function Bar({ label, ms, max, highlight }: { label: string; ms: number; max: number; highlight?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(Math.min(100, (ms / max) * 100));
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ms, max]);
  return (
    <div ref={ref} className="relative flex h-12 items-center overflow-hidden rounded border border-border px-4">
      <div
        className={`absolute top-0 left-0 h-full transition-[width] duration-[1400ms] ease-out ${
          highlight ? "bg-accent/25" : "bg-white/5"
        }`}
        style={{ width: `${w}%` }}
      />
      <span
        className={`relative z-10 font-mono-kinetic text-xs uppercase tracking-wider ${
          highlight ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {label} — {ms}ms
      </span>
    </div>
  );
}

export function Performance() {
  const textRef = useReveal<HTMLDivElement>(100);
  const imgRef = useParallax<HTMLDivElement>(80);

  return (
    <section id="benchmarks" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-24 md:grid-cols-2">
        <div ref={textRef}>
          <span className="mb-6 inline-block font-mono-kinetic text-[11px] uppercase tracking-[0.3em] text-accent">
            02 — Rendimiento
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Cero latencia.
            <br />
            Ejecución nativa pura.
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Construido sobre un núcleo en C++, Kinetic procesa archivos de millones de líneas en milisegundos.
            Sin pausas del recolector de basura, sólo velocidad pura.
          </p>
          <div className="space-y-4">
            <Bar label="Kinetic Engine" ms={12} max={160} highlight />
            <Bar label="Editor A" ms={94} max={160} />
            <Bar label="Editor B" ms={140} max={160} />
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <div ref={imgRef} className="will-change-transform">
            <img
              src={mercuryImg}
              alt="Mercurio líquido fluyendo sobre un microchip"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}