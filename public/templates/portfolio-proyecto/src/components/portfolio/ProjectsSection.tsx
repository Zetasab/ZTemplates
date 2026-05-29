import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { SectionTitle } from "./AboutSection";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos con Stripe y panel de administración completo.",
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-[hsl(250,80%,65%)] to-[hsl(280,70%,55%)]",
  },
  {
    title: "Fitness Tracker App",
    description: "Aplicación multiplataforma para seguimiento de rutinas de ejercicio con estadísticas en tiempo real y planes personalizados.",
    techs: ["Flutter", "Firebase", "Dart", "Charts"],
    color: "from-[hsl(200,90%,55%)] to-[hsl(170,80%,45%)]",
  },
  {
    title: "Task Management Dashboard",
    description: "Dashboard colaborativo para gestión de proyectos con tableros Kanban, chat integrado y reportes automáticos.",
    techs: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
    color: "from-[hsl(330,70%,55%)] to-[hsl(280,70%,55%)]",
  },
  {
    title: "Social Media Analytics",
    description: "Herramienta de análisis de redes sociales con visualización de datos avanzada y generación de informes PDF.",
    techs: ["React", "D3.js", "Python", "FastAPI"],
    color: "from-[hsl(40,90%,55%)] to-[hsl(20,80%,50%)]",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <SectionTitle title="Proyectos Destacados" />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      {/* Gradient header */}
      <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white/20">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techs.map((tech) => (
            <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-secondary rounded-md text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button size="sm" variant="outline" className="text-xs">
            <ExternalLink className="mr-1 h-3 w-3" /> Ver Proyecto
          </Button>
          <Button size="sm" variant="ghost" className="text-xs text-muted-foreground">
            <Github className="mr-1 h-3 w-3" /> Código
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
