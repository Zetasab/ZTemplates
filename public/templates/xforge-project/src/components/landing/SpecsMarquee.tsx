import { useGsap, gsap } from "@/hooks/use-gsap";

const specs = [
  "Cerakote Finish",
  "Hair Triggers",
  "Hall Effect Sticks",
  "Mechanical Buttons",
  "Hand-Stitched Grips",
  "7-Layer Paint",
  "Numbered Edition",
  "Lifetime Calibration",
];

export function SpecsMarquee() {
  const scope = useGsap(() => {
    gsap.to(".marquee-track", {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  });

  const items = [...specs, ...specs];

  return (
    <section ref={scope} className="bg-acid text-black py-8 overflow-hidden border-y border-acid">
      <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            <span>{s}</span>
            <span className="text-black/40">✕</span>
          </div>
        ))}
      </div>
    </section>
  );
}
