"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "96px 32px",
        borderTop: "1px solid #1E1E1E",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#C8FF00",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 20,
            }}
          >
            05 — ABOUT
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#F0EBE3",
              letterSpacing: "-0.04em",
              margin: "0 0 32px",
              lineHeight: 1,
            }}
          >
            Builder, developer,
            <br />
            <span style={{ color: "#C8FF00" }}>brand creator.</span>
          </h2>

          <div
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 16,
              color: "#666",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <p style={{ margin: 0 }}>
              I'm Aman Kumar — a developer from India who builds AI-native products and
              high-quality websites for real clients. I've shipped at Milan AI Week, the
              IBM Bob Hackathon, and dozens of freelance engagements for businesses across
              India.
            </p>
            <p style={{ margin: 0 }}>
              I don't just write code. I do brand video production, marketing strategy,
              and UI/UX design. When a client needs a complete digital presence — from the
              site to the launch video — I'm the person they call.
            </p>
            <p style={{ margin: 0 }}>
              My stack spans TypeScript, Python, Next.js, FastAPI, and LLM orchestration.
              My work spans e-commerce, agentic infrastructure, social media platforms,
              and ML systems.
            </p>
          </div>

          {/* Contact row */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="mailto:thisisaman408@gmail.com"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 600,
                fontSize: 14,
                color: "#050505",
                background: "#C8FF00",
                padding: "12px 24px",
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              Get in touch
            </a>
            <a
              href="https://github.com/thisisaman408"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 500,
                fontSize: 14,
                color: "#666",
                border: "1px solid #1E1E1E",
                padding: "12px 24px",
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: "min(420px, 100%)",
              aspectRatio: "3/4",
            }}
          >
            {/* Accent border offset */}
            <div
              style={{
                position: "absolute",
                inset: -12,
                border: "1px solid rgba(200,255,0,0.15)",
                borderRadius: 20,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 16,
                overflow: "hidden",
                width: "100%",
                height: "100%",
                background: "#141414",
              }}
            >
              <Image
                src="/aman.jpg"
                alt="Aman Kumar"
                fill
                style={{ objectFit: "cover", objectPosition: "center top", filter: "contrast(1.05)" }}
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 100%)",
                }}
              />
              {/* Name card */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <div
                  style={{
                    background: "rgba(5,5,5,0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid #1E1E1E",
                    borderRadius: 10,
                    padding: "14px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: 16,
                        color: "#F0EBE3",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Aman Kumar
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "#5A5A5A",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginTop: 2,
                      }}
                    >
                      AI Builder & Developer
                    </div>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 10px",
                      borderRadius: 100,
                      background: "rgba(200,255,0,0.1)",
                      border: "1px solid rgba(200,255,0,0.2)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "#C8FF00",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8FF00", display: "block" }} />
                    Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
