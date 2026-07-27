export function FinalCTA() {
  return (
    <section id="cta" className="grain relative overflow-hidden px-6 py-40 sm:py-56">
      <div className="aurora-orb left-[10%] top-1/3 h-[36vw] w-[36vw] max-h-[500px] max-w-[500px] bg-[#4ade80] animate-float-slow" />
      <div className="aurora-orb right-[10%] bottom-1/4 h-[38vw] w-[38vw] max-h-[520px] max-w-[520px] bg-[#a78bfa] animate-float-slow" style={{ animationDelay: "-4s" }} />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-6xl leading-[0.95] sm:text-8xl md:text-9xl">
          Lleva el <span className="italic text-aurora">cine</span>
          <br />a casa
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-white/70">
          Envío gratuito, instalación profesional y 5 años de garantía en todos
          los modelos Teviso.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#specs"
            className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.04]"
          >
            Comprar ahora
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Reservar demo en tienda
          </a>
        </div>
      </div>
    </section>
  );
}
