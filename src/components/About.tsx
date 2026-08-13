import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const QUICK_FACTS = [
  { label: "Education", value: "BSIT — City of Malabon University" },
  { label: "Interest", value: "Software & web development" },
  { label: "Experience", value: "Technical Documentation Intern (OJT)" },
  { label: "Looking For", value: "Entry-level software & IT roles" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            title="Who I am"
            subtitle="An aspiring software developer focused on building practical, database-driven applications."
          />
        </Reveal>

        <div className="about__grid">
          <Reveal delay={100}>
            <div className="about__text">
              <p>
                I am an Information Technology graduate with a strong interest
                in software development, web applications, databases, and
                application development.
              </p>
              <p>
                I enjoy building practical systems that solve real-world
                problems and continuously improving my technical skills through
                academic and personal projects.
              </p>
              <p>
                My project experience includes developing database-driven
                applications, web systems, business-oriented applications, and
                software projects using technologies such as Java, Python,
                Django, JavaScript, React, and SQL. During my on-the-job
                training as a Technical Documentation Intern at Doña Alejandra
                Incorporated, I also created user manuals and system
                documentation, strengthening my attention to detail and clear
                communication.
              </p>
              <p>
                I am currently seeking an entry-level opportunity where I can
                contribute my technical skills, learn from experienced
                professionals, and grow as a software developer.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="about__facts">
              <h3>At a glance</h3>
              <dl>
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="about__fact">
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
