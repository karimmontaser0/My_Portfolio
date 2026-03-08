import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";
import projectRobot from "@/assets/project-robot-real.png";
import projectClinic from "@/assets/project-clinic-real.jpg";
import projectJdmatch from "@/assets/project-jdmatch-real.png";

const imageMap: Record<string, string> = {
  "humanoid-receptionist": projectRobot,
  "clinic-automation": projectClinic,
  "jd-match": projectJdmatch,
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.15} distance={50}>
              <Link
                to={`/project/${project.id}`}
                className="block bg-card border border-border rounded-xl overflow-hidden card-hover group h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={imageMap[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
