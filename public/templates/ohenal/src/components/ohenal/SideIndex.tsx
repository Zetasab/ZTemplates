import { useEffect, useState } from "react";

const items = [
  { id: "manifiesto", n: "I" },
  { id: "notas", n: "III" },
  { id: "origen", n: "IV" },
  { id: "ritual", n: "VI" },
];

export function SideIndex() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="fixed top-1/2 right-6 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-5">
      {items.map((i) => (
        <a
          key={i.id}
          href={`#${i.id}`}
          className="flex items-center gap-3 group"
          aria-label={`Ir a ${i.id}`}
        >
          <span
            className={`text-eyebrow transition-colors ${active === i.id ? "text-bone" : "text-silver/40"}`}
          >
            {i.n}
          </span>
          <span
            className={`h-px transition-all ${active === i.id ? "w-10 bg-bone" : "w-5 bg-silver/40"}`}
          />
        </a>
      ))}
    </aside>
  );
}
