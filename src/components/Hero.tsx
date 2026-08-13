import { useState } from "react";
import { ArrowDown, Download, User } from "lucide-react";
import { resume } from "../data/resume";

const PROFILE_SRC = "/profile.jpg";
const PLACEHOLDER_SRC = "/profile-placeholder.svg";

const FOCUS_AREAS = ["Web Development", "Mobile Development", "Databases", "IT Systems"];

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(PROFILE_SRC);

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I'm</p>
          <h1 className="hero__name">Jerson Tebiaso</h1>
          <p className="hero__role">Information Technology Professional</p>
          <p className="hero__text">
            I build practical software solutions and continuously develop my
            skills in web development, mobile development, databases, and IT
            systems. As a BSIT graduate, I am eager to contribute to real-world
            projects and grow as a professional.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href={resume.path} className="btn btn--outline btn--on-dark" download={resume.fileName}>
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="btn btn--ghost btn--on-dark">
              Contact Me
            </a>
          </div>

          <ul className="hero__focus" aria-label="Focus areas">
            {FOCUS_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
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
            <User size={16} />
            Open to entry-level IT &amp; developer roles
          </div>
        </div>
      </div>
    </section>
  );
}
