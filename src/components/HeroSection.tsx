import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="section-container relative z-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge-available mb-6">Available for Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-7xl font-bold mt-6 mb-4 font-heading"
        >
          Kareem <span className="gradient-text">Montaser</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-6"
        >
          Backend & Automation Engineer | Mechatronics Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
        >
          <MapPin size={16} />
          <span className="text-sm">Giza, Egypt — Open to Remote</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/karimmontaser0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/karim-montaser-bb608a313"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:karimmontaser40@gmail.com"
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
