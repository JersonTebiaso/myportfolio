import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            title="Technologies & concepts"
            subtitle="The programming languages, frameworks, tools, and software development concepts I use."
          />
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="skill-card">
                <h3 className="skill-card__title">{group.title}</h3>
                <ul className="skill-card__badges">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
