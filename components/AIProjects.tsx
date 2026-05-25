"use client";
import { useState } from "react";
import Image from "next/image";
import { aiProjects } from "./data";

function Tag({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "3px 10px", borderRadius: 100,
      fontSize: 11, fontWeight: 500, letterSpacing: "0.04em",
      fontFamily: "var(--font-mono)", textTransform: "uppercase" as const,
      background: color ? `${color}12` : "#1A1A1A",
      border: `1px solid ${color ? `${color}30` : "#303030"}`,
      color: color || "#9A9A9A",
    }}>
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof aiProjects)[0] }) {
  const [hovered, setHovered] = useState(false);
  const accent = project.color;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1A1A1A" : "#141414",
        border: `1px solid ${hovered ? `${accent}35` : "#252525"}`,
        borderRadius: 16, display: "flex", flexDirection: "column",
        cursor: "default", transition: "all 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        overflow: "hidden", height: "100%",
      }}
    >
      {/* Screenshot thumbnail */}
      {project.screenshot && (
        <div style={{ position: "relative", width: "100%", height: 160, overflow: "hidden", flexShrink: 0 }}>
          <Image
            src={project.screenshot}
            alt={project.name}
            fill
            style={{ objectFit: "cover", objectPosition: "top", filter: hovered ? "none" : "brightness(0.8)" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, transparent 50%, #141414 100%)`,
          }} />
          {project.badge && (
            <div style={{ position: "absolute", top: 12, left: 12 }}>
              <Tag color={project.badgeType === "purple" ? "#A78BFA" : accent}>{project.badge}</Tag>
            </div>
          )}
        </div>
      )}

      <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            {!project.screenshot && project.badge && <Tag color={project.badgeType === "purple" ? "#A78BFA" : accent}>{project.badge}</Tag>}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                style={{ color: "#5A5A5A", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accent || "#C8FF00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ color: "#5A5A5A", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accent || "#C8FF00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }} />
            <h3 style={{
              fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 18,
              color: "#F0EBE3", letterSpacing: "-0.02em", margin: 0,
            }}>{project.name}</h3>
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: accent, margin: 0, fontWeight: 500, opacity: 0.9 }}>
            {project.tagline}
          </p>
        </div>

        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "#C4BDB5", lineHeight: 1.65, margin: 0, flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
          {project.tags.map((tag) => <Tag key={tag} color={accent}>{tag}</Tag>)}
        </div>
      </div>
    </div>
  );
}

export default function AIProjects() {
  const featured = aiProjects.filter((p) => p.featured);
  const rest = aiProjects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#C8FF00",
              letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 12,
            }}>01 — AI & AGENTIC SYSTEMS</span>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#F0EBE3", letterSpacing: "-0.04em", margin: 0, lineHeight: 1,
            }}>Frontier builds.</h2>
          </div>
          <a href="https://github.com/thisisaman408" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "#7A7A7A", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8FF00")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7A7A7A")}>
            75+ repos →
          </a>
        </div>

        {/* Featured 3-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
          {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>

        {/* Rest 4-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {rest.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
