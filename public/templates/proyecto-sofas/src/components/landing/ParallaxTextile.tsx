import { useParallax } from "@/hooks/use-scroll-reveal";
import textile from "@/assets/textile.jpg";

export function ParallaxTextile() {
  const ref = useParallax<HTMLImageElement>(150);
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img
        ref={ref}
        src={textile}
        alt="Detalle macro de un lino belga de alta calidad"
        width={1920}
        height={1280}
        loading="lazy"
        className="absolute inset-0 h-[130%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/15" />
      <div className="relative z-10 flex h-full items-end px-6 pb-16 text-bone md:px-20 md:pb-24">
        <h2 className="max-w-4xl font-serif text-5xl leading-none tracking-tight md:text-8xl">
          Ingeniería <br />
          <em className="italic">para el silencio.</em>
        </h2>
      </div>
    </section>
  );
}
