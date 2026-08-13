import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "../data/links";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">Jerson Tebiaso</p>
          <p className="footer__tagline">
            Aspiring Software Developer &middot; BSIT Graduate
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__social">
          {links.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
          ) : null}
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
          ) : null}
          {links.email ? (
            <a href={`mailto:${links.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 Jerson Tebiaso. All rights reserved.</p>
      </div>
    </footer>
  );
}
