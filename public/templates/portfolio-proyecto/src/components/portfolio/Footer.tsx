import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Alejandro Castro. Todos los derechos reservados.
      </p>
      <div className="flex gap-4 text-muted-foreground">
        <Github size={16} className="hover:text-foreground transition-colors cursor-pointer" />
        <Linkedin size={16} className="hover:text-foreground transition-colors cursor-pointer" />
        <Twitter size={16} className="hover:text-foreground transition-colors cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default Footer;
