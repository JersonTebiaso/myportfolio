import { CheckCircle2 } from "lucide-react";
import { skillGroups, type SkillLevel } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function levelClass(level: SkillLevel): string {
  switch (level) {
    case "Familiar":
      return "level--familiar";
    case "Intermediate":
      return "level--intermediate";
    case "Currently Learning":
      return "level--learning";
  }
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            title="Technologies I work with"
            subtitle="Honest, entry-level skill levels — I am actively learning and improving every day."
          />
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="skill-card">
                <h3 className="skill-card__title">{group.title}</h3>
                <p className="skill-card__description">{group.description}</p>
                <ul className="skill-card__list">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="skill-card__item">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span className="skill-card__name">{skill.name}</span>
                      <span
                        className={`level-badge ${levelClass(skill.level)}`}
                        title={`Skill level: ${skill.level}`}
                      >
                        {skill.level}
                      </span>
                    </li>
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
