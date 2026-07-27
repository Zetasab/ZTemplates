export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[var(--surface)] py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
              <div className="h-2 w-2 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_12px_var(--cyan-glow)]" />
              AXON//KB
            </div>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              Custom mechanical keyboards built by hand in Barcelona, Spain. Studio est. 2021.
            </p>
            <div className="mt-8">
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground">JOIN THE LIST</label>
              <form className="mt-2 flex border border-border" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="flex-1 bg-transparent px-3 py-2 font-mono text-xs outline-none placeholder:text-muted-foreground/60"
                />
                <button className="border-l border-border px-4 font-mono text-xs hover:bg-[var(--cyan-glow)] hover:text-background transition-colors">
                  →
                </button>
              </form>
            </div>
          </div>

          {[
            { h: "PRODUCT", l: ["Standard", "Pro", "Artisan", "Switches", "Keycaps"] },
            { h: "STUDIO", l: ["About", "Process", "Press", "Contact"] },
            { h: "SUPPORT", l: ["Docs", "QMK / VIA", "Service", "Warranty"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="font-mono text-[10px] tracking-widest text-muted-foreground">{col.h}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {col.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[var(--cyan-glow)] transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 font-mono text-[10px] tracking-widest text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 AXON LABS S.L. — BARCELONA</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">PRIVACY</a>
            <a href="#" className="hover:text-foreground">TERMS</a>
            <a href="#" className="hover:text-foreground">INSTAGRAM</a>
            <a href="#" className="hover:text-foreground">YOUTUBE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
