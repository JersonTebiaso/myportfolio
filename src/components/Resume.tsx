import { Download, Eye, FileText } from "lucide-react";
import { resume } from "../data/resume";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Resume"
            title="Download my resume"
            subtitle="A printable summary of my education, skills, projects, and training."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="resume-card">
            <div className="resume-card__icon" aria-hidden="true">
              <FileText size={32} />
            </div>
            <div className="resume-card__content">
              <h3>Ready to review my resume?</h3>
              <p>Download or view the PDF below.</p>
            </div>
            <div className="resume-card__actions">
              <a
                href={resume.path}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                <Eye size={18} aria-hidden="true" />
                View Resume
              </a>
              <a href={resume.path} download={resume.fileName} className="btn btn--primary">
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
