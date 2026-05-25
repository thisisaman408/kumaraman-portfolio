"use client";
import { socials } from "./data";

const socialLinks = [
  { label: "GitHub", href: socials.github },
  { label: "X / Twitter", href: socials.x },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "Discord", href: socials.discord },
  { label: "Email", href: socials.email },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "96px 48px 80px",
        borderTop: "1px solid #252525",
        background: "#080808",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, color: "#7A7A7A",
          letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 24,
        }}>06 — LET'S BUILD</span>

        <h2 style={{
          fontFamily: "var(--font-syne)", fontWeight: 800,
          fontSize: "clamp(40px, 7vw, 80px)",
          color: "#F0EBE3", letterSpacing: "-0.04em", margin: "0 0 16px", lineHeight: 0.95,
        }}>
          Have a project<br />
          <span style={{ color: "#C8FF00" }}>in mind?</span>
        </h2>

        <p style={{
          fontFamily: "var(--font-dm-sans)", fontSize: 17, color: "#C4BDB5",
          lineHeight: 1.7, margin: "0 0 48px",
        }}>
          Whether you need an agentic AI product, a high-converting website, a brand video — or all three — I'm open to the right project.
        </p>

        <a
          href={socials.email}
          style={{
            fontFamily: "var(--font-syne)", fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 32px)",
            color: "#F0EBE3", textDecoration: "none", letterSpacing: "-0.02em",
            display: "inline-block", padding: "0 0 4px",
            borderBottom: "2px solid #C8FF00", transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EBE3")}
        >
          thisisaman408@gmail.com
        </a>

        {/* Social links */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap",
          marginTop: 56, paddingTop: 56, borderTop: "1px solid #252525",
        }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 12, color: "#7A7A7A",
                textDecoration: "none", textTransform: "uppercase",
                letterSpacing: "0.08em", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7A7A7A")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 80, paddingTop: 32, borderTop: "1px solid #252525",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 1280, marginLeft: "auto", marginRight: "auto",
      }}>
        <span style={{
          fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 20,
          color: "#252525", letterSpacing: "-0.02em",
        }}>
          AMAN KUMAR<span style={{ color: "#C8FF00" }}>.</span>
        </span>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, color: "#3A3A3A", letterSpacing: "0.06em",
        }}>© 2026 — KUMARAMAN.ME</span>
      </div>
    </section>
  );
}
