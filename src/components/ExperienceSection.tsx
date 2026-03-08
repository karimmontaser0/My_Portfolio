import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Automation & Backend Developer",
    company: "Freelance / Independent Projects",
    period: "Jul 2025 – Oct 2025",
    description:
      "Built AI-powered WhatsApp and Telegram chatbots, designed n8n automation workflows, delivered pipelines achieving 80% reduction in manual workload.",
  },
  {
    role: "Technical & HR Intern",
    company: "Ezz Group (GEMMA)",
    period: "Aug 2024 – Sep 2024",
    description:
      "Quality control, testing, documentation and workflow optimization.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-12" />
        </motion.div>

        <div className="relative pl-10 space-y-12">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="timeline-dot top-1.5" />
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-2">
                  <Briefcase size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
