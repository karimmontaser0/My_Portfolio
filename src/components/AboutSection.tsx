import { Download } from "lucide-react";
import FadeIn from "./FadeIn";

const skills = [
  "Python", "n8n", "LLM Integration", "Prompt Engineering",
  "OpenCV", "YOLOv8", "REST APIs", "Docker",
  "Raspberry Pi", "Arduino", "Embedded C/C++", "Git/GitHub",
];

const AboutSection = () => {
  const handleDownloadCV = async () => {
    const pdfPath = "/Kareem-Montaser-CV.pdf";

    try {
      const response = await fetch(pdfPath);
      if (!response.ok) throw new Error("Failed to fetch CV");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = "Kareem-Montaser-CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(pdfPath, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-8" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            Backend & Automation Engineer with a Mechatronics Engineering background, specializing in Generative AI integration, intelligent automation workflows, and computer vision systems. I have built AI-powered chatbots, humanoid robots, and end-to-end automation pipelines achieving up to 80% reduction in manual workload.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h3 className="font-heading text-xl font-semibold mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <button
            type="button"
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Download size={18} />
            Download CV
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
