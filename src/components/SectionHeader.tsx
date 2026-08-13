interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle ? <p className="section-header__subtitle">{subtitle}</p> : null}
    </header>
  );
}
