import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { links } from "../data/links";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  placeholder: string;
  href?: string;
}

function ContactItem({ icon, label, value, placeholder, href }: ContactItemProps) {
  const content = value ? value : placeholder;
  const item = (
    <>
      <span className="contact-info__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-info__body">
        <span className="contact-info__label">{label}</span>
        <span
          className={
            value
              ? "contact-info__value"
              : "contact-info__value contact-info__value--placeholder"
          }
        >
          {content}
        </span>
      </span>
    </>
  );

  if (value && href) {
    return (
      <a
        href={href}
        className="contact-info__item contact-info__item--link"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {item}
      </a>
    );
  }

  return <div className="contact-info__item">{item}</div>;
}

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!links.email) {
      setStatus(
        "The contact form is not configured yet. Add your email address to src/data/links.ts and I will start receiving messages here."
      );
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    form.reset();
    setStatus("Your email app should open with a pre-filled message. Thank you!");
  };

  return (
    <section id="contact" className="section section--tinted">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's get in touch"
            subtitle="Have an opportunity, a question, or just want to connect? Send me a message."
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={100}>
            <div className="contact-info">
              <ContactItem
                icon={<Mail size={20} />}
                label="Email"
                value={links.email}
                placeholder="your.email@example.com"
                href={links.email ? `mailto:${links.email}` : undefined}
              />
              <ContactItem
                icon={<Phone size={20} />}
                label="Phone"
                value={links.phone}
                placeholder="+63 XXX XXX XXXX"
                href={links.phone ? `tel:${links.phone}` : undefined}
              />
              <ContactItem
                icon={<MapPin size={20} />}
                label="Location"
                value={links.location}
                placeholder="City, Country"
              />
              <ContactItem
                icon={<Github size={20} />}
                label="GitHub"
                value={links.github}
                placeholder="github.com/yourusername"
                href={links.github || undefined}
              />
              <ContactItem
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value={links.linkedin}
                placeholder="linkedin.com/in/yourusername"
                href={links.linkedin || undefined}
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the opportunity or say hello."
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--block">
                <Send size={18} aria-hidden="true" />
                Send Message
              </button>

              {status ? (
                <p className="contact-form__status" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
