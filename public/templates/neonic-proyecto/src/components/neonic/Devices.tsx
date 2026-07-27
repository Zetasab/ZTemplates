import devicesImg from "@/assets/devices-cinema.jpg";

const devices = [
  { label: "Smart TV", note: "Samsung · LG · Sony · Hisense" },
  { label: "Móvil", note: "iOS 16+ · Android 12+" },
  { label: "Tablet", note: "iPad · Android · Fire" },
  { label: "Laptop", note: "Safari · Chrome · Firefox" },
  { label: "Consolas", note: "PS5 · Xbox Series" },
  { label: "Streaming", note: "Apple TV · Chromecast · Fire" },
];

export function Devices() {
  return (
    <section
      id="dispositivos"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-border relative"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-6 block">
              Ecosistema · Multi-dispositivo
            </span>
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-[0.95]">
              UN CINE. <br />
              <span className="text-primary">CADA PANTALLA.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground text-base leading-relaxed max-w-md">
            Sincroniza tu experiencia entre dispositivos. Pausa en el móvil,
            continúa en la sala. Descarga en la tablet, termina en la TV. Todo
            a resolución nativa 4K HDR.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
            <img
              src={devicesImg}
              alt="Sala de cine premium NEONIC"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-2 block">
                Home Cinema Edition
              </span>
              <p className="font-display text-2xl md:text-4xl tracking-tight">
                DOLBY ATMOS · IMAX ENHANCED
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-px bg-border">
            {devices.map((d) => (
              <div
                key={d.label}
                className="bg-background p-6 hover:bg-primary/5 transition-colors"
              >
                <span className="text-primary text-[10px] font-mono-tight tracking-[0.2em] uppercase block mb-3">
                  ●
                </span>
                <h4 className="font-display text-xl tracking-tight mb-2">
                  {d.label}
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {d.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}