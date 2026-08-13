import { useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { links } from "../data/links";
import { resume } from "../data/resume";

const PROFILE_SRC = "./profile.jpg";
const PLACEHOLDER_SRC = "./profile-placeholder.svg";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(PROFILE_SRC);

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I'm</p>
          <h1 className="hero__name">Jerson Tebiaso</h1>
          <p className="hero__role">Aspiring Software Developer</p>
          <p className="hero__text">
            I build practical software applications and web-based systems using
            modern programming, database, and web development technologies.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href={resume.path}
              className="btn btn--outline btn--on-dark"
              download={resume.fileName}
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="hero__social">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            ) : (
              <span
                className="hero__social--missing"
                aria-hidden="true"
                title="Add your GitHub URL in src/data/links.ts"
              >
                <Github size={20} />
              </span>
            )}

            {links.linkedin ? (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            ) : (
              <span
                className="hero__social--missing"
                title="Add your LinkedIn URL in src/data/links.ts"
              >
                <Linkedin size={20} />
              </span>
            )}

            {links.email ? (
              <a href={`mailto:${links.email}`} aria-label="Email" title="Email">
                <Mail size={20} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame" aria-hidden="true" />
          <img
            className="hero__photo"
            src={imageSrc}
            alt="Profile photo of Jerson Tebiaso"
            onError={() => {
              if (imageSrc !== PLACEHOLDER_SRC) setImageSrc(PLACEHOLDER_SRC);
            }}
          />
          <div className="hero__badge" aria-hidden="true">
            Open to entry-level software &amp; IT roles
          </div>
        </div>
      </div>
    </section>
  );
}
