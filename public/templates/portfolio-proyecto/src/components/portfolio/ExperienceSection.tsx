import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { SectionTitle } from "./AboutSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechVanguard Solutions",
    period: "2023 - Presente",
    description: "Lideré el desarrollo de aplicaciones web con React y Next.js para clientes enterprise. Implementé sistemas de diseño y mejoré el rendimiento un 40%.",
  },
  {
    role: "Desarrollador Multiplataforma",
    company: "AppForge Studio",
    period: "2021 - 2023",
    description: "Desarrollé aplicaciones móviles multiplataforma con Flutter y React Native. Publicadas en App Store y Google Play con más de 50K descargas.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Craft Agency",
    period: "2020 - 2021",
    description: "Creé soluciones full stack con Node.js y React. Integré APIs de terceros, sistemas de pago y bases de datos PostgreSQL.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description: "Mis primeros pasos profesionales: desarrollo de sitios web responsivos, mantenimiento de CMS y colaboración en sprints ágiles.",
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 60%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Mi Experiencia" />
        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-primary rounded-full" />
          </div>

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  exp,
  index,
  isLeft,
}: {
  exp: typeof experiences[0];
  index: number;
  isLeft: boolean;
}) => {
  const { ref, isInView } = useScrollReveal();

  return (
    <div ref={ref} className={`relative flex items-center mb-12 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background z-10"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
      >
        <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={16} className="text-primary" />
            <span className="text-xs font-mono text-accent">{exp.period}</span>
          </div>
          <h3 className="font-bold text-lg">{exp.role}</h3>
          <p className="text-sm text-primary mb-2">{exp.company}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
