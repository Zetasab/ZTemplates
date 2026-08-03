import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Testimonial() {
  const ref = useScrollReveal<HTMLElement>("[data-reveal]", { y: 30 });
  return (
    <section
      ref={ref}
      className="border-y border-ink/10 bg-muted px-6 py-32 md:px-20 md:py-48"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div data-reveal className="mb-10 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1.5 rounded-full bg-accent" />
          ))}
        </div>
        <blockquote
          data-reveal
          className="mb-10 font-serif text-3xl italic leading-snug text-balance md:text-5xl"
        >
          «Buscaba una pieza que no gritara lujo, sino que lo susurrara. El sofá
          de MÓDULO ha transformado no solo mi salón — ha transformado mi forma
          de habitar la casa.»
        </blockquote>
        <cite data-reveal className="not-italic">
          <span className="block text-xs font-medium uppercase tracking-[0.25em]">
            Elena Rivas
          </span>
          <span className="mt-1 block text-xs text-muted-foreground">
            Coleccionista de arte · Madrid
          </span>
        </cite>
      </div>
    </section>
  );
}
