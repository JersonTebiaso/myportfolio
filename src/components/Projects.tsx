import { useState } from "react";
import { Check, Eye, Github, ExternalLink, Plus } from "lucide-react";
import { comingSoon, projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function ProjectCard({ project }: { project: Project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <article className="project-card">
        <div className="project-card__media">
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
          <span className={`status-badge status-badge--${project.status === "Academic / Capstone" ? "academic" : "development"}`}>
            {project.status}
          </span>
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__full-title">{project.fullTitle}</p>
          <p className="project-card__description">{project.description}</p>

          <div className="project-card__problem">
            <strong>Problem solved:</strong>
            <p>{project.problemSolved}</p>
          </div>

          <div className="project-card__tech" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-card__features">
            <h4>Main features</h4>
            <ul>
              {project.features.slice(0, 6).map((feature) => (
                <li key={feature}>
                  <Check size={15} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-card__actions">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            ) : null}
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => setDetailsOpen(true)}
            >
              <Eye size={16} aria-hidden="true" />
              View Details
            </button>
          </div>
        </div>
      </article>

      {detailsOpen ? (
        <ProjectModal project={project} onClose={() => setDetailsOpen(false)} />
      ) : null}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Featured projects"
            subtitle="Practical applications I have built — what each one does and the problems it solves."
          />
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} />
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
