import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tarda en llegar mi mando?",
    a: "Cada unidad se fabrica bajo pedido. El plazo es de 3 a 5 semanas desde la confirmación, más envío express asegurado.",
  },
  {
    q: "¿Es compatible con Xbox Series X|S y PC?",
    a: "Sí. Compatibilidad total con Xbox Series X|S, Xbox One y Windows 10/11 vía USB-C o Bluetooth.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Garantía de 12 meses sobre componentes y mano de obra, más recalibración gratuita de por vida.",
  },
  {
    q: "¿Puedo pedir un diseño totalmente custom?",
    a: "Sí. Aceptamos 2 encargos custom por mes. Contáctanos con tu briefing y presupuesto.",
  },
  {
    q: "¿Envío internacional?",
    a: "Enviamos a toda Europa, América del Norte y LATAM con DHL Express y seguro a valor declarado.",
  },
];

export function Faq() {
  return (
    <section className="bg-zinc-custom py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-acid mb-6 block">
          // FAQ
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-16 text-white leading-[0.9]">
          Antes de<br />reservar.
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-white font-display uppercase text-lg md:text-xl tracking-wide hover:text-acid hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed text-base pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
