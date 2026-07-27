import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. NEONIC es un servicio sin permanencia. Puedes cancelar tu suscripción desde tu cuenta con un solo clic, sin llamadas ni formularios.",
  },
  {
    q: "¿Qué diferencia a NEONIC de otras plataformas?",
    a: "Un catálogo curado por críticos y programadores de festivales, calidad 4K HDR nativa (no upscaling), audio Dolby Atmos en todos los originales, y cero anuncios en cualquier plan.",
  },
  {
    q: "¿En cuántos dispositivos puedo ver contenido?",
    a: "Depende de tu plan: 1 dispositivo en Básico, 4 simultáneos en Premium y dispositivos ilimitados en Cineasta.",
  },
  {
    q: "¿Los originales están incluidos en todos los planes?",
    a: "Los originales NEONIC están disponibles desde el plan Premium. En Básico tienes acceso al catálogo licenciado completo.",
  },
  {
    q: "¿Puedo descargar películas para ver sin conexión?",
    a: "Sí, en los planes Premium y Cineasta puedes descargar cualquier título en móvil y tablet, con calidad hasta 4K HDR.",
  },
  {
    q: "¿Hay periodo de prueba gratuito?",
    a: "Sí, ofrecemos 30 días de prueba gratuita en el plan Premium. Cancela antes y no se realizará ningún cargo.",
  },
];

export function Faq() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-[10px] font-mono-tight uppercase tracking-[0.3em] text-primary mb-6 block">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none">
            LO QUE SUELEN PREGUNTAR.
          </h2>
        </div>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-display text-xl md:text-2xl tracking-tight py-6 hover:no-underline hover:text-primary">
                  <span className="flex gap-6 items-start">
                    <span className="text-primary text-xs font-mono-tight tracking-widest mt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-11 font-editorial italic">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}