import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import projectRobot from "@/assets/project-robot-real.png";
import projectClinic from "@/assets/project-clinic-real.jpg";
import projectJdmatch from "@/assets/project-jdmatch-real.png";

const imageMap: Record<string, string> = {
  "humanoid-receptionist": projectRobot,
  "clinic-automation": projectClinic,
  "jd-match": projectJdmatch,
};

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border border-border mb-8 aspect-video">
              <img
                src={imageMap[project.id]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
              {project.title}
            </h1>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>

            {/* Description */}
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-xl font-semibold mb-3">
                About this <span className="gradient-text">Project</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Results */}
            <div className="bg-card border border-border rounded-xl p-6 mb-10 max-w-3xl">
              <h3 className="font-heading font-semibold mb-3 text-primary">Key Results</h3>
              <div className="flex flex-wrap gap-4">
                {project.results.split(" · ").map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Media */}
            {project.id === "humanoid-receptionist" && (
              <div className="max-w-4xl">
                <h2 className="font-heading text-xl font-semibold mb-4">
                  Demo <span className="gradient-text">Videos</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">English Demo</h3>
                    <video
                      controls
                      className="w-full rounded-xl border border-border bg-card"
                      poster={imageMap[project.id]}
                    >
                      <source src="/videos/AI-Robot-En.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Arabic Demo</h3>
                    <video
                      controls
                      className="w-full rounded-xl border border-border bg-card"
                      poster={imageMap[project.id]}
                    >
                      <source src="/videos/AI-Robot-Arabic.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            )}

            {/* Clinic Automation Demo */}
            {project.id === "clinic-automation" && (
              <div className="max-w-4xl">
                <h2 className="font-heading text-xl font-semibold mb-4">
                  Demo <span className="gradient-text">Video</span>
                </h2>
                <video
                  controls
                  className="w-full rounded-xl border border-border bg-card"
                  poster={imageMap[project.id]}
                >
                  <source src="/videos/Clinic-Bot.mp4" type="video/mp4" />
                </video>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ProjectPage;
