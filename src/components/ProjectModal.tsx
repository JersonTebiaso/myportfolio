import { useEffect, useRef } from "react";
import { Check, Github, ExternalLink, X } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const titleId = `${project.id}-modal-title`;

  return (
    <div
      className="modal__backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className="modal__header">
          <h2 id={titleId}>{project.name}</h2>
          <p>{project.fullTitle}</p>
          <span className={`status-badge status-badge--${project.status === "Academic / Capstone" ? "academic" : "development"}`}>
            {project.status}
          </span>
        </div>

        <div className="modal__body">
          <section className="modal__section">
            <h3>Overview</h3>
            <p>{project.details.overview}</p>
          </section>

          <section className="modal__section">
            <h3>Problem</h3>
            <p>{project.details.problem}</p>
          </section>

          <section className="modal__section">
            <h3>Solution</h3>
            <p>{project.details.solution}</p>
          </section>

          <section className="modal__section">
            <h3>Features</h3>
            <ul className="modal__features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="modal__section">
            <h3>Technologies</h3>
            <div className="modal__tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="modal__section">
            <h3>My Role</h3>
            <p>{project.details.role}</p>
          </section>

          <section className="modal__section">
            <h3>Challenges</h3>
            <ul className="modal__list">
              {project.details.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="modal__section">
            <h3>Outcome</h3>
            <p>{project.details.outcome}</p>
          </section>
        </div>

        {project.githubUrl || project.liveUrl ? (
          <div className="modal__footer">
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
          </div>
        ) : null}
      </div>
    </div>
  );
}
