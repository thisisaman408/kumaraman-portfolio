"use client";
import Image from "next/image";

const timeline = [
  { year: "2026", event: "Founded Resyl — AI brand creation platform", color: "#A78BFA" },
  { year: "2026", event: "Milan AI Week — ECHO autonomous meeting agent", color: "#C8FF00" },
  { year: "2025", event: "IBM Bob Hackathon — Renatus code migration engine", color: "#38BDF8" },
  { year: "2024", event: "10+ businesses taken online across India", color: "#FB923C" },
  { year: "Now", event: "Learning: Agentic infra · Brand motion · Rust", color: "#4ADE80" },
];

export default function About() {
  return (
    <section
      id="about"
      className="s-section"
      style={{ padding: "96px 48px", borderTop: "1px solid #252525" }}
    >
      <div className="about-grid" style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "start",
      }}>
        {/* Left — text */}
        <div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, color: "#C8FF00",
            letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 20,
          }}>05 — ABOUT</span>
          <h2 style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 52px)",
            color: "#F0EBE3", letterSpacing: "-0.04em", margin: "0 0 32px", lineHeight: 1,
          }}>
            Builder, developer,<br />
            <span style={{ color: "#C8FF00" }}>always learning.</span>
          </h2>

          <div style={{
            fontFamily: "var(--font-dm-sans)", fontSize: 16, color: "#C4BDB5",
            lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16, marginBottom: 40,
          }}>
            <p style={{ margin: 0 }}>
              I'm Aman Kumar — an AI builder from India who doesn't stay in one lane.
              TypeScript today. Multi-agent systems this week. Brand video the day after.
              The pattern isn't chaos — it's compounding.
            </p>
            <p style={{ margin: 0 }}>
              I founded <span style={{ color: "#A78BFA", fontWeight: 600 }}>Resyl</span>, an AI platform
              that turns brand ideas into full identities using Claude. I've competed at Milan AI Week
              and the IBM Bob Hackathon. I've shipped for 10+ real businesses across India.
            </p>
            <p style={{ margin: 0 }}>
              I don't just write code — I do brand video production, marketing strategy, and UI/UX design.
              When a client needs everything from the site to the launch video, I'm the person they call.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 40 }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0", borderBottom: i < timeline.length - 1 ? "1px solid #252525" : "none" }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, color: item.color,
                  letterSpacing: "0.04em", flexShrink: 0, marginTop: 2, minWidth: 32,
                }}>{item.year}</span>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "#C4BDB5", lineHeight: 1.5 }}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:thisisaman408@gmail.com" style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 14,
              color: "#050505", background: "#C8FF00",
              padding: "12px 24px", borderRadius: 100, textDecoration: "none",
            }}>Get in touch</a>
            <a href="https://github.com/thisisaman408" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 14,
              color: "#9A9A9A", border: "1px solid #252525",
              padding: "12px 24px", borderRadius: 100, textDecoration: "none",
            }}>GitHub →</a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="about-photo" style={{ display: "flex", justifyContent: "center", position: "sticky", top: 120 }}>
          <div style={{ position: "relative", width: "min(420px, 100%)", aspectRatio: "3/4" }}>
            <div style={{
              position: "absolute", inset: -12,
              border: "1px solid rgba(200,255,0,0.15)",
              borderRadius: 20, zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: 16, overflow: "hidden",
              width: "100%", height: "100%", background: "#141414",
            }}>
              <Image
                src="/aman.jpg"
                alt="Aman Kumar"
                fill
                sizes="(max-width: 1024px) 0px, 420px"
                style={{ objectFit: "cover", objectPosition: "center top", filter: "contrast(1.05)" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                <div style={{
                  background: "rgba(5,5,5,0.85)", backdropFilter: "blur(20px)",
                  border: "1px solid #252525", borderRadius: 10, padding: "14px 18px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 16, color: "#F0EBE3" }}>
                      Aman Kumar
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, color: "#7A7A7A",
                      textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2,
                    }}>AI Builder · Brand Creator</div>
                  </div>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "4px 10px", borderRadius: 100,
                    background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.2)",
                    fontFamily: "var(--font-mono)", fontSize: 10, color: "#C8FF00",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>
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
