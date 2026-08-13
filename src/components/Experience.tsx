import { Briefcase, Building2, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { experience } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  placeholder: string;
}

function DetailRow({ icon, label, value, placeholder }: DetailRowProps) {
  return (
    <div className="detail-row">
      <span className="detail-row__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="detail-row__content">
        <span className="detail-row__label">{label}</span>
        <span className={value ? "detail-row__value" : "detail-row__value detail-row__value--placeholder"}>
          {value || placeholder}
        </span>
      </span>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title="On-the-Job Training"
            subtitle="My practical exposure to a professional IT environment during my studies."
          />
        </Reveal>

        {experience.map((entry, index) => (
          <Reveal key={`${entry.type}-${index}`} delay={100}>
            <article className="experience-card">
              <div className="experience-card__header">
                <div className="experience-card__icon" aria-hidden="true">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="experience-card__type">{entry.type}</h3>
                </div>
              </div>

              <div className="experience-card__details">
                <DetailRow
                  icon={<Building2 size={17} />}
                  label="Company"
                  value={entry.company}
                  placeholder="Company name"
                />
                <DetailRow
                  icon={<Briefcase size={17} />}
                  label="Position"
                  value={entry.position}
                  placeholder="Position / role"
                />
                <DetailRow
                  icon={<CalendarDays size={17} />}
                  label="Duration"
                  value={entry.duration}
                  placeholder="e.g. June 2024 – September 2024"
                />
                <DetailRow
                  icon={<MapPin size={17} />}
                  label="Location"
                  value={entry.location}
                  placeholder="City, Country"
                />
              </div>

              <div className="experience-card__responsibilities">
                <h4>Responsibilities</h4>
                {entry.responsibilities.length > 0 ? (
                  <ul>
                    {entry.responsibilities.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="experience-card__empty">
                    Responsibilities to be added.
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
