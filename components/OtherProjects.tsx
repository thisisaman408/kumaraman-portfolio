"use client";
import { useState } from "react";
import { otherProjects } from "./data";

export default function OtherProjects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "80px 32px",
        borderTop: "1px solid #1E1E1E",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#5A5A5A",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 12,
            }}
          >
            03 — MORE BUILDS
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#F0EBE3",
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Full-stack & data.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, border: "1px solid #1E1E1E", borderRadius: 16, overflow: "hidden" }}>
          {otherProjects.map((project, i) => (
            <div
              key={project.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "28px 28px",
                borderRight: i % 3 !== 2 ? "1px solid #1E1E1E" : "none",
                borderBottom: i < 3 ? "1px solid #1E1E1E" : "none",
                background: hovered === i ? "#141414" : "transparent",
                transition: "background 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#F0EBE3",
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  {project.name}
                </h3>
                <div style={{ display: "flex", gap: 10 }}>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#5A5A5A", transition: "color 0.2s", textDecoration: "none" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#5A5A5A", transition: "color 0.2s", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  color: "#888",
                  margin: 0,
                  letterSpacing: "0.01em",
                  fontStyle: "italic",
                }}
              >
                {project.tagline}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  color: "#555",
                  margin: 0,
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-flex",
                      padding: "2px 8px",
                      borderRadius: 100,
                      fontSize: 10,
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      background: "#141414",
                      border: "1px solid #1E1E1E",
                      color: "#666",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
