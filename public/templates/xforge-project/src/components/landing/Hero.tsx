import { useGsap, gsap } from "@/hooks/use-gsap";

export function Hero() {
  const scope = useGsap((ctx) => {
    const split = (selector: string) => {
      const el = document.querySelector(selector) as HTMLElement | null;
      if (!el) return [];
      const words = (el.dataset.text ?? el.textContent ?? "").split(" ");
      el.innerHTML = words
        .map(
          (w) =>
            `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block hero-word">${w}</span></span> `,
        )
        .join("");
      return Array.from(el.querySelectorAll(".hero-word"));
    };

    const wordsA = split("[data-hero-line='1']");
    const wordsB = split("[data-hero-line='2']");

    gsap.from([...wordsA, ...wordsB], {
      yPercent: 110,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.15,
    });

    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.9,
      ease: "expo.out",
    });

    gsap.to(".hero-halo", {
      scale: 1.15,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  });

  return (
    <section
      id="top"
      ref={scope}
      className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="hero-halo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] bg-[radial-gradient(circle_at_center,var(--color-acid)_0%,transparent_60%)] opacity-20" />
      </div>

      <div className="absolute top-32 left-6 md:left-8 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid">
        Edition 2024 / Limited 05 Pieces
      </div>

      <h1 className="relative font-display font-bold uppercase tracking-tighter text-center leading-[0.85] text-white text-[clamp(4rem,12vw,16rem)]">
        <span data-hero-line="1" className="block">Beyond</span>
        <span data-hero-line="2" className="block text-acid italic">Standard</span>
      </h1>

      <p className="hero-sub max-w-md text-center text-zinc-400 text-sm leading-relaxed tracking-wide mt-8 px-4">
        Hand-sculpted interfaces for the world's most immersive realms. Limited run of five masterwork controllers for the elite player.
      </p>

      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-acid to-transparent animate-pulse" />
      </div>
    </section>
  );
}
