"use client";
export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "96px 32px 80px",
        borderTop: "1px solid #1E1E1E",
        background: "#080808",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#5A5A5A",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: 24,
          }}
        >
          06 — LET'S BUILD
        </span>

        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(40px, 7vw, 80px)",
            color: "#F0EBE3",
            letterSpacing: "-0.04em",
            margin: "0 0 16px",
            lineHeight: 0.95,
          }}
        >
          Have a project
          <br />
          <span style={{ color: "#C8FF00" }}>in mind?</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 17,
            color: "#555",
            lineHeight: 1.7,
            margin: "0 0 48px",
          }}
        >
          Whether you need an agentic AI product, a high-converting website, a brand video — or all three — I'm open to the right project.
        </p>

        <a
          href="mailto:thisisaman408@gmail.com"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 32px)",
            color: "#F0EBE3",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            display: "inline-block",
            padding: "0 0 4px",
            borderBottom: "2px solid #C8FF00",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EBE3")}
        >
          thisisaman408@gmail.com
        </a>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginTop: 56,
            paddingTop: 56,
            borderTop: "1px solid #1E1E1E",
          }}
        >
          {[
            { label: "GitHub", href: "https://github.com/thisisaman408" },
            { label: "Email", href: "mailto:thisisaman408@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#5A5A5A",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: "1px solid #1E1E1E",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: 20,
            color: "#1E1E1E",
            letterSpacing: "-0.02em",
          }}
        >
          AMAN KUMAR<span style={{ color: "#C8FF00" }}>.</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#2A2A2A",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 — KUMARAMAN.ME
        </span>
      </div>
    </section>
  );
}
