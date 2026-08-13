import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { links } from "../data/links";
import { config } from "../data/config";
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
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const botcheck = String(data.get("botcheck") ?? "").trim();

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: config.web3FormsAccessKey,
          name,
          email,
          message,
          subject: `Portfolio contact from ${name}`,
          from_name: name,
          botcheck,
        }),
      });

      const result = (await response.json()) as { success: boolean };

      if (result.success) {
        form.reset();
        setStatus({
          type: "success",
          text: "Message sent! Thank you — I will get back to you as soon as possible.",
        });
      } else {
        setStatus({
          type: "error",
          text: "Something went wrong sending your message. Please try again or email me directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Could not reach the server. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
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

              <div className="contact-form__field contact-form__field--hidden" aria-hidden="true">
                <label htmlFor="contact-botcheck">Do not fill this out</label>
                <input
                  id="contact-botcheck"
                  name="botcheck"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--block"
                disabled={sending}
              >
                <Send size={18} aria-hidden="true" />
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status ? (
                <p className={`contact-form__status contact-form__status--${status.type}`} role="status">
                  {status.text}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
