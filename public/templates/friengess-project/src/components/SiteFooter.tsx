import { MessagesSquare } from "lucide-react";

const cols = [
  {
    title: "Producto",
    links: ["Seguridad", "Notificaciones", "Fluidez", "Interfaz"],
  },
  {
    title: "Casos de uso",
    links: ["Empresas", "Equipos", "Comunidades", "Gaming"],
  },
  {
    title: "Recursos",
    links: ["Novedades", "Guías", "Soporte", "Estado"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-foreground">
              <MessagesSquare className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Friengess</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Conversaciones seguras, notificaciones potentes y fluidez total.
            Comunicación de confianza para todos.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="font-display text-sm font-semibold">{c.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#top" className="transition-colors hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border/60 px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Friengess. Todos los derechos reservados.
      </div>
    </footer>
  );
}