import { useState } from "react";
import { useGsap } from "@/hooks/useGsap";

const QS = [
  { q: "How long does a custom board take to ship?", a: "Each board is hand-assembled, tested, and tuned in our Barcelona studio. Standard and Pro editions ship within 3 weeks. Artisan editions take 6–8 weeks." },
  { q: "Are the switches really hot-swappable?", a: "Yes. Every Axon board uses MX-compatible 5-pin hot-swap sockets. No soldering, no commitment. Swap your switches in under a minute." },
  { q: "Does it work with macOS, Linux, and consoles?", a: "Axon is plug-and-play on macOS, Windows, Linux, and SteamOS. Console support via USB on PS5 and Xbox Series. Tri-mode wireless on Pro and Artisan." },
  { q: "Can I program every key?", a: "Yes. Out of the box with VIA. Power users get full QMK source and our Axon Studio app for layers, macros, and per-key RGB scripting." },
  { q: "What's the warranty?", a: "3 years on Standard. Lifetime service on Pro and Artisan, including switch socket replacements and case re-anodizing." },
  { q: "Can I switch keycap sets later?", a: "All Axon boards use standard cherry-profile MX spacing. Any aftermarket PBT or ABS set will fit." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useGsap<HTMLElement>(({ gsap }) => {
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.06,
      scrollTrigger: { trigger: ".faq-list", start: "top 80%" },
    });
  });

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 font-mono text-xs tracking-[0.3em] text-[var(--cyan-glow)]">// QUESTIONS</div>
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">Things you might ask.</h2>
        </div>

        <div className="faq-list border-t border-border">
          {QS.map((item, i) => (
            <div key={i} className="faq-item border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[var(--cyan-glow)]"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="font-display text-xl font-medium md:text-2xl">{item.q}</span>
                </div>
                <span className={`text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid overflow-hidden transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="max-w-2xl pl-10 text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
