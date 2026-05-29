import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Flutter / Dart", level: 85 },
  { name: "Kotlin / Android", level: 80 },
  { name: "Node.js", level: 88 },
  { name: "UI/UX Design", level: 82 },
];

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div style={{ y }} className="relative">
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 blur-2xl" />
              <div className="relative w-full h-full rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center">
                <span className="text-6xl font-bold text-gradient">AC</span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <SectionTitle title="Sobre Mí" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Soy un desarrollador apasionado con más de 5 años de experiencia creando aplicaciones web y móviles.
              Me especializo en React, Flutter y tecnologías multiplataforma. Mi objetivo es transformar ideas
              en productos digitales que marquen la diferencia, siempre con atención al detalle y al rendimiento.
            </motion.p>

            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div ref={ref} className="mb-8">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold"
      >
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="text-gradient"> {word}</span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="h-1 w-20 bg-gradient-primary rounded-full mt-3 origin-left"
      />
    </motion.div>
  );
};

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const { ref, isInView } = useScrollReveal();
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-primary rounded-full"
        />
      </div>
    </div>
  );
};

export { SectionTitle };
export default AboutSection;
