import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

const education = [
  {
    degree: "B.Sc. Mechatronics Engineering (Very Good)",
    institution: "MSA University",
    period: "2020 – 2025",
  },
  {
    degree: "Generative AI Professional Certifications",
    institution: "IBM & Coursera",
    period: "2025 – 2026",
  },
  {
    degree: "Embedded Systems Diploma",
    institution: "Embedded C/C++, RTOS, Embedded Linux",
    period: "2024",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.15} distance={50}>
              <div className="bg-card border border-border rounded-xl p-6 card-hover h-full">
                <GraduationCap size={28} className="text-primary mb-4" />
                <h3 className="font-heading font-semibold mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.period}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
