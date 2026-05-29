import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { SectionTitle } from "./AboutSection";
import {
  Code2, Smartphone, Server, Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    techs: ["Flutter", "Dart", "Kotlin", "React Native", "Android", "iOS"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    techs: ["Git", "Docker", "Figma", "VS Code", "Jira", "AWS"],
  },
];

const TechSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="tech" className="py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Mi Stack" />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, techIdx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.15 + techIdx * 0.05 + 0.3 }}
                    className="px-3 py-1.5 text-xs font-mono bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
