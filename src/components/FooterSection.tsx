import { Github, Linkedin, Mail } from "lucide-react";
import FadeIn from "./FadeIn";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="section-container text-center">
        <FadeIn>
          <h2 className="text-2xl font-heading font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://github.com/karimmontaser0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/karim-montaser-bb608a313"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:karimmontaser40@gmail.com"
              className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kareem Montaser. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};

export default FooterSection;
