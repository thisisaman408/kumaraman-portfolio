"use client";
import { useState } from "react";
import { freelanceProjects } from "./data";

const categoryColors: Record<string, string> = {
  "E-commerce": "#FF6B35",
  Architecture: "#7C9EFF",
  Beauty: "#FF9ECD",
  Manufacturing: "#FFD700",
  Fashion: "#C8FF00",
  Artisan: "#FF9F40",
  Fitness: "#40E0D0",
  Business: "#A78BFA",
};

export default function FreelanceWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="freelance"
      style={{
        padding: "96px 32px",
        background: "#080808",
        borderTop: "1px solid #1E1E1E",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
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
              02 — FREELANCE WORK
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
              Real clients.
              <br />
              <span style={{ color: "#5A5A5A" }}>Real impact.</span>
            </h2>
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14,
              color: "#5A5A5A",
              maxWidth: 280,
              lineHeight: 1.6,
              textAlign: "right",
            }}
          >
            From a sneaker brand with 38.5K Instagram followers to heritage craft exporters — every site is built to convert.
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12,
          }}
        >
          {freelanceProjects.map((project) => {
            const accent = categoryColors[project.category] || "#C8FF00";
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: isHovered ? "#1A1A1A" : "#141414",
                  border: `1px solid ${isHovered ? `${accent}33` : "#1E1E1E"}`,
                  borderRadius: 12,
                  padding: "20px",
                  cursor: "default",
                  transition: "all 0.2s ease",
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Category dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: accent,
                    marginBottom: 2,
                  }}
                />

                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      color: "#5A5A5A",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#F0EBE3",
                      letterSpacing: "-0.01em",
                      margin: "0 0 4px",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 12,
                      color: "#5A5A5A",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {project.tagline}
                  </p>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: accent,
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        opacity: 0.8,
                      }}
                    >
                      Live ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "#5A5A5A",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Code →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: 40,
            padding: "24px 32px",
            background: "#141414",
            border: "1px solid #1E1E1E",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 28, color: "#C8FF00" }}>
              10+
            </span>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#666" }}>
              businesses taken online — from Delhi street markets to EPCH-listed exporters
            </span>
          </div>
          <a
            href="mailto:thisisaman408@gmail.com"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 600,
              fontSize: 13,
              color: "#050505",
              background: "#C8FF00",
              padding: "10px 22px",
              borderRadius: 100,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Build mine →
          </a>
        </div>
      </div>
    </section>
  );
}
