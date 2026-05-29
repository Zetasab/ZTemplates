import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { SectionTitle } from "./AboutSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María López",
    role: "CEO, TechStart",
    text: "Alejandro transformó nuestra visión en una aplicación impecable. Su atención al detalle y capacidad técnica superaron todas nuestras expectativas.",
  },
  {
    name: "Carlos Ruiz",
    role: "CTO, DataFlow",
    text: "Un profesional excepcional. Entregó el proyecto antes de plazo con una calidad de código que raramente he visto. Sin duda volveremos a colaborar.",
  },
  {
    name: "Ana Martínez",
    role: "Product Manager, CreativeHub",
    text: "Su habilidad para entender las necesidades del usuario y traducirlas en interfaces intuitivas es impresionante. Un verdadero crack del desarrollo.",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <SectionTitle title="Testimonios" />
        <div ref={ref} className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 relative"
            >
              <Quote size={24} className="text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
