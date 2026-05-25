"use client";
import { aiProjects } from "./data";

function Tag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: 100,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.04em",
        fontFamily: "var(--font-mono)",
        textTransform: "uppercase" as const,
        background: accent ? "rgba(200,255,0,0.08)" : "#141414",
        border: `1px solid ${accent ? "rgba(200,255,0,0.2)" : "#1E1E1E"}`,
        color: accent ? "#C8FF00" : "#888",
      }}
    >
      {children}
    </span>
  );
}

function ProjectCard({ project, large }: { project: (typeof aiProjects)[0]; large?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1A1A1A" : "#141414",
        border: `1px solid ${hovered ? "rgba(200,255,0,0.2)" : "#1E1E1E"}`,
        borderRadius: 16,
        padding: large ? 40 : 28,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "default",
        transition: "border-color 0.2s, background 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner glow on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            background: "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.badge && <Tag accent>{project.badge}</Tag>}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#5A5A5A", transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5A5A5A", transition: "color 0.2s", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: large ? 28 : 22,
            color: "#F0EBE3",
            letterSpacing: "-0.02em",
            margin: "0 0 6px",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 14,
            color: "#C8FF00",
            fontWeight: 500,
            margin: 0,
            opacity: 0.8,
          }}
        >
          {project.tagline}
        </p>
      </div>

      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 14,
          color: "#666",
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function AIProjects() {
  const featured = aiProjects.filter((p) => p.featured);
  const rest = aiProjects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "96px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#C8FF00",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              01 — AI & AGENTIC SYSTEMS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 56px)",
                color: "#F0EBE3",
                letterSpacing: "-0.04em",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Frontier builds.
            </h2>
          </div>
          <a
            href="https://github.com/thisisaman408"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 13,
              color: "#5A5A5A",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
          >
            All repos →
          </a>
        </div>

        {/* Featured grid: 2 large + 1 full-width */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          {featured.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} large />
          ))}
        </div>
        <div style={{ marginBottom: 16 }}>
          {featured.slice(2, 3).map((p) => (
            <div
              key={p.id}
              style={{
                background: "#141414",
                border: "1px solid #1E1E1E",
                borderRadius: 16,
                padding: "36px 40px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "center",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,255,0,0.2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E")}
            >
              <div>
                {p.badge && (
                  <Tag accent>{p.badge}</Tag>
                )}
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 28,
                    color: "#F0EBE3",
                    letterSpacing: "-0.02em",
                    margin: "12px 0 6px",
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#C8FF00", margin: "0 0 16px", opacity: 0.8 }}>
                  {p.tagline}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "#666", lineHeight: 1.7, margin: "0 0 24px" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", gap: 12 }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 600, color: "#050505", background: "#C8FF00", padding: "8px 18px", borderRadius: 100, textDecoration: "none" }}>
                      Live demo →
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#888", border: "1px solid #1E1E1E", padding: "8px 18px", borderRadius: 100, textDecoration: "none" }}>
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
