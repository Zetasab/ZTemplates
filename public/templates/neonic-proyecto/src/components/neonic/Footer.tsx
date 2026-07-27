import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="p-10 md:p-16 lg:p-24 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 max-w-md">
            <BrandMark size="lg" />
            <p className="text-muted-foreground text-sm leading-relaxed mt-8 mb-8 font-editorial italic">
              La plataforma definitiva para los amantes del séptimo arte.
              Calidad sin compromisos, curaduría sin precedentes.
            </p>
            <form
              className="flex border border-border max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-transparent px-4 py-3 text-sm w-full focus:outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-5 text-[10px] uppercase tracking-widest font-bold hover:brightness-110 transition-all"
              >
                Unirme
              </button>
            </form>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-[10px] font-mono-tight uppercase tracking-[0.25em] mb-6 text-primary">
                Contenido
              </h5>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors">Películas</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Series</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Originales</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Festivales</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono-tight uppercase tracking-[0.25em] mb-6 text-primary">
                Soporte
              </h5>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Dispositivos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Estado del servicio</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono-tight uppercase tracking-[0.25em] mb-6 text-primary">
                Compañía
              </h5>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre NEONIC</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Prensa</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Trabaja con nosotros</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Inversores</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono-tight uppercase tracking-[0.25em] mb-6 text-primary">
                Legal
              </h5>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">DMCA</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-mono-tight text-muted-foreground tracking-[0.2em] uppercase">
          <span>© 2026 NEONIC Digital Cinema · Todos los derechos reservados</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Letterboxd</a>
            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
          </div>
          <span className="hidden md:block">Engineered for the discerning eye.</span>
        </div>
      </div>
    </footer>
  );
}