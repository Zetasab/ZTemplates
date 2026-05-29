import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Desarrollador Web", "Desarrollador Multiplataforma", "Diseñador UI/UX", "Freelancer"];

const FloatingShape = ({ className, delay }: { className: string; delay: number }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-primary opacity-10 blur-3xl ${className}`}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape className="w-96 h-96 -top-20 -left-20" delay={0} />
      <FloatingShape className="w-72 h-72 top-1/3 right-10" delay={2} />
      <FloatingShape className="w-64 h-64 bottom-10 left-1/3" delay={4} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-primary p-1"
          >
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-3xl font-bold text-gradient">
              AC
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent font-mono text-sm mb-4 tracking-widest uppercase"
          >
            Hola, soy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Alejandro <span className="text-gradient">Castro</span>
          </motion.h1>

          <div className="h-10 mb-6">
            <span className="text-xl md:text-2xl text-muted-foreground font-mono">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            Creo experiencias digitales excepcionales que combinan diseño elegante con código limpio y eficiente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground glow"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-4 w-4" /> Contactar
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              <Download className="mr-2 h-4 w-4" /> Descargar CV
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
