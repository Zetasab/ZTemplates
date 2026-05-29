import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { SectionTitle } from "./AboutSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className="py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Hablemos" />
        <div ref={ref} className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Tu nombre" className="bg-background border-border" />
            <Input type="email" placeholder="Tu email" className="bg-background border-border" />
            <Textarea placeholder="Tu mensaje..." rows={5} className="bg-background border-border resize-none" />
            <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground glow">
              <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escucharte. Puedes escribirme directamente o conectar
              conmigo en redes sociales.
            </p>

            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">alejandro@devportfolio.com</span>
            </div>

            <div className="flex gap-3 mt-4">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <Button key={label} size="icon" variant="outline" className="border-border hover:border-primary/50 hover:text-primary transition-colors">
                  <Icon size={18} />
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
