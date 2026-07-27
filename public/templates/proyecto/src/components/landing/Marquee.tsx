const LANGS = [
  "TYPESCRIPT",
  "RUST",
  "PYTHON",
  "GO",
  "SWIFT",
  "C++",
  "HASKELL",
  "JAVA",
  "RUBY",
  "PHP",
  "KOTLIN",
  "ELIXIR",
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-border py-12">
      <div className="flex animate-kinetic-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center gap-20 px-10">
            {LANGS.map((l) => (
              <span key={`${k}-${l}`} className="font-mono-kinetic text-xl opacity-30">
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}