import { Check, ExternalLink, Github, Plus } from "lucide-react";
import { comingSoon, projects, type Project } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function ProjectButtons({ project }: { project: Project }) {
  const hasGitHub = project.githubUrl !== "";
  const hasLive = project.liveUrl !== "";

  return (
    <div className="project-card__actions">
      {hasGitHub ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline"
        >
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
      ) : (
        <span className="btn btn--outline is-disabled" title="Repository link will be added once available">
          <Github size={16} aria-hidden="true" />
          GitHub (coming soon)
        </span>
      )}

      {hasLive ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
        >
          <ExternalLink size={16} aria-hidden="true" />
          Live Demo
        </a>
      ) : (
        <span className="btn btn--primary is-disabled" title="Live demo link will be added once available">
          <ExternalLink size={16} aria-hidden="true" />
          Live Demo (coming soon)
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--tinted">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Things I have built"
            subtitle="My academic capstone and personal projects — practical applications of the technologies I have been learning."
          />
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article className="project-card">
                <div className="project-card__media">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                  <span className={`status-badge status-badge--${project.status === "Academic / Capstone" ? "academic" : "development"}`}>
                    {project.status}
                  </span>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.name}</h3>
                  <p className="project-card__description">{project.description}</p>

                  <div className="project-card__tech" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__features">
                    <h4>Features</h4>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <Check size={15} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ProjectButtons project={project} />
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={80}>
            <div className="project-card project-card--placeholder">
              <div className="project-card__placeholder">
                <Plus size={40} aria-hidden="true" />
                <h3>{comingSoon.title}</h3>
                <p>{comingSoon.description}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
