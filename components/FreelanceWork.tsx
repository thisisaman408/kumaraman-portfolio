"use client";
import { useState } from "react";
import Image from "next/image";
import { freelanceProjects } from "./data";

export default function FreelanceWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="freelance"
      style={{ padding: "96px 48px", background: "#080808", borderTop: "1px solid #252525" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#C8FF00",
              letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 12,
            }}>02 — FREELANCE WORK</span>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#F0EBE3", letterSpacing: "-0.04em", margin: 0, lineHeight: 1,
            }}>
              Real clients.<br />
              <span style={{ color: "#7A7A7A" }}>Real impact.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#7A7A7A",
            maxWidth: 280, lineHeight: 1.6, textAlign: "right", margin: 0,
          }}>
            From a sneaker brand with 38.5K Instagram followers to heritage craft exporters — every site built to convert.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          {freelanceProjects.map((project) => {
            const accent = project.color;
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: isHovered ? "#1A1A1A" : "#141414",
                  border: `1px solid ${isHovered ? `${accent}35` : "#252525"}`,
                  borderRadius: 12, cursor: "default",
                  transition: "all 0.2s ease",
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                  display: "flex", flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Screenshot thumbnail */}
                {project.screenshot ? (
                  <div style={{ position: "relative", width: "100%", height: 120, overflow: "hidden", flexShrink: 0 }}>
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top", filter: isHovered ? "none" : "brightness(0.75)" }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to bottom, transparent 40%, #141414 100%)`,
                    }} />
                  </div>
                ) : (
                  <div style={{
                    width: "100%", height: 80, flexShrink: 0,
                    background: `linear-gradient(135deg, ${accent}18, ${accent}05)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${accent}30`, border: `1px solid ${accent}50` }} />
                  </div>
                )}

                <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 9, color: "#5A5A5A",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>{project.category}</span>
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 13,
                      color: "#F0EBE3", letterSpacing: "-0.01em", margin: "0 0 3px", lineHeight: 1.2,
                    }}>{project.name}</h3>
                    <p style={{
                      fontFamily: "var(--font-dm-sans)", fontSize: 11, color: "#9A9A9A",
                      margin: 0, lineHeight: 1.45,
                    }}>{project.tagline}</p>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-mono)", fontSize: 10,
                          color: accent, textDecoration: "none",
                          textTransform: "uppercase", letterSpacing: "0.04em",
                        }}>Live ↗</a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)", fontSize: 10,
                        color: "#5A5A5A", textDecoration: "none",
                        textTransform: "uppercase", letterSpacing: "0.04em",
                      }}>Code →</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: 40, padding: "24px 32px",
          background: "#141414", border: "1px solid #252525",
          borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 28, color: "#C8FF00" }}>10+</span>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#9A9A9A" }}>
              businesses taken online — from Delhi street markets to EPCH-listed exporters
            </span>
          </div>
          <a href="mailto:thisisaman408@gmail.com" style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 13,
            color: "#050505", background: "#C8FF00",
            padding: "10px 22px", borderRadius: 100, textDecoration: "none", whiteSpace: "nowrap",
          }}>Build mine →</a>
        </div>
      </div>
    </section>
  );
}
