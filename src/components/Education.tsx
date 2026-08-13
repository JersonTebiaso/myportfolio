import { BookOpen, Calendar, GraduationCap } from "lucide-react";
import { education } from "../data/education";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section section--tinted">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Education"
            title="Academic background"
            subtitle="My formal training in information technology."
          />
        </Reveal>

        <div className="education__list">
          {education.map((entry, index) => (
            <Reveal key={`${entry.school}-${index}`} delay={100}>
              <article className="education-card">
                <div className="education-card__icon" aria-hidden="true">
                  <GraduationCap size={26} />
                </div>

                <div className="education-card__content">
                  <h3 className="education-card__degree">{entry.degree}</h3>
                  <p className="education-card__school">{entry.school}</p>
                  <p className="education-card__year">
                    <Calendar size={16} aria-hidden="true" />
                    {entry.year}
                  </p>

                  {entry.coursework.length > 0 ? (
                    <div className="education-card__coursework">
                      <h4>
                        <BookOpen size={16} aria-hidden="true" />
                        Relevant coursework
                      </h4>
                      <ul>
                        {entry.coursework.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {entry.achievements.length > 0 ? (
                    <div className="education-card__achievements">
                      <h4>Achievements</h4>
                      <ul>
                        {entry.achievements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
