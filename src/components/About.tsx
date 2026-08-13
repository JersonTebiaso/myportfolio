import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const QUICK_FACTS = [
  { label: "Education", value: "BSIT — City of Malabon University" },
  { label: "Interest", value: "Full-stack web & mobile development" },
  { label: "Experience", value: "Technical Documentation Intern (OJT)" },
  { label: "Looking For", value: "Entry-level IT & developer roles" },
];

export default function About() {
  return (
    <section id="about" className="section section--tinted">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            title="A motivated IT graduate ready to contribute"
            subtitle="Focused on software development, web and mobile applications, databases, and IT systems."
          />
        </Reveal>

        <div className="about__grid">
          <Reveal delay={100}>
            <div className="about__text">
              <p>
                I am a graduate of the Bachelor of Science in Information
                Technology from the City of Malabon University. Through my
                coursework and on-the-job training, I have built hands-on
                experience developing web and mobile applications, working with
                relational databases, and supporting IT systems. During my OJT
                as a Technical Documentation Intern at Doña Alejandra
                Incorporated, I created user manuals, standard operating
                procedures, and system documentation — sharpening my attention
                to detail and my ability to communicate clearly.
              </p>
              <p>
                I enjoy the full development process — from understanding a
                problem and designing a solution, to writing clean code and
                delivering a working product. My academic projects gave me
                exposure to Django, Python, MySQL, and machine learning, while
                my current personal project with React Native, TypeScript, and
                Spring Boot continues to deepen my skills.
              </p>
              <p>
                I value reliability, clear communication, and attention to
                detail, and I am committed to continuous learning. I am looking
                for an entry-level opportunity where I can apply what I have
                learned, keep growing, and contribute to a team that builds
                practical software.
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
