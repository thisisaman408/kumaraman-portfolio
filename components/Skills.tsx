"use client";
import { skills } from "./data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "80px 48px", background: "#080808", borderTop: "1px solid #252525" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, color: "#C8FF00",
            letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 12,
          }}>04 — SKILLS & STACK</span>
          <h2 style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#F0EBE3", letterSpacing: "-0.04em", margin: 0, lineHeight: 1,
          }}>What I bring.</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {Object.entries(skills).map(([category, { color, items }]) => (
            <div
              key={category}
              style={{
                background: "#141414", border: "1px solid #252525",
                borderRadius: 12, padding: "24px",
                display: "flex", flexDirection: "column", gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 14,
                  color: "#F0EBE3", letterSpacing: "-0.01em",
                }}>{category}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-flex", padding: "4px 12px", borderRadius: 100,
                      fontSize: 12, fontFamily: "var(--font-dm-sans)", fontWeight: 500,
                      background: `${color}10`, border: `1px solid ${color}28`,
                      color: color,
                    }}
                  >
                    {skill}
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
