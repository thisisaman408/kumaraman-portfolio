"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const words = ["SHIPS.", "BUILDS.", "CREATES.", "LEARNS.", "DEPLOYS."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 250);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(200,255,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.025) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        pointerEvents: "none",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "15%", left: "30%", width: 700, height: 700,
        background: "radial-gradient(circle, rgba(200,255,0,0.035) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          {/* Left text */}
          <div>
            {/* Status pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px", borderRadius: 100,
              border: "1px solid rgba(200,255,0,0.3)",
              background: "rgba(200,255,0,0.07)",
              marginBottom: 36,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8FF00", animation: "pulse 2s infinite", display: "block" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#C8FF00", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Available · Founder of Resyl
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(60px, 9vw, 128px)",
              lineHeight: 0.88, letterSpacing: "-0.04em",
              color: "#F0EBE3", margin: "0 0 20px",
            }}>
              AMAN<br />
              <span style={{ color: "#C8FF00" }}>KUMAR</span>
            </h1>

            {/* Animated tagline */}
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontFamily: "var(--font-syne)", fontSize: "clamp(18px, 2.5vw, 28px)",
                fontWeight: 600, color: "#7A7A7A", letterSpacing: "-0.02em", margin: 0,
              }}>
                AI builder who{" "}
                <span style={{
                  color: "#F0EBE3", transition: "opacity 0.25s ease",
                  opacity: visible ? 1 : 0, display: "inline-block", minWidth: 160,
                }}>
                  {words[wordIndex]}
                </span>
              </p>
            </div>

            {/* Sub description */}
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 17,
              color: "#C4BDB5", maxWidth: 520, lineHeight: 1.75,
              margin: "0 0 16px",
            }}>
              I build agentic AI products, brand identities, and high-converting websites.
              Founded <span style={{ color: "#A78BFA", fontWeight: 600 }}>Resyl</span>.
              Competed at Milan AI Week and IBM. Shipped for 10+ real businesses.
            </p>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 15,
              color: "#7A7A7A", maxWidth: 480, lineHeight: 1.7, margin: "0 0 44px",
              fontStyle: "italic",
            }}>
              "The builder who never stops learning — TypeScript today, multi-agent systems tomorrow, brand video the day after."
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects" style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14,
                color: "#050505", background: "#C8FF00",
                padding: "13px 26px", borderRadius: 100, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "transform 0.2s, opacity 0.2s",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                See my work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#brand-video" style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 14,
                color: "#A78BFA", background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.25)",
                padding: "13px 26px", borderRadius: 100, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.25)"; }}>
                ▶ Watch Resyl video
              </a>
              <a href="https://github.com/thisisaman408" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 14,
                color: "#7A7A7A", border: "1px solid #252525",
                padding: "13px 22px", borderRadius: 100, textDecoration: "none",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#C8FF00"; el.style.color = "#C8FF00"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#252525"; el.style.color = "#7A7A7A"; }}>
                GitHub
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, flexShrink: 0 }}>
            <div style={{
              position: "relative",
              width: 280, height: 340,
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid #252525",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute", inset: -1,
                border: "2px solid transparent",
                borderRadius: 20,
                background: "linear-gradient(135deg, rgba(200,255,0,0.4), rgba(167,139,250,0.3), transparent) border-box",
                zIndex: 2,
                pointerEvents: "none",
              }} />
              <Image
                src="/aman.jpg"
                alt="Aman Kumar"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                background: "linear-gradient(to top, rgba(5,5,5,0.75) 0%, transparent 100%)",
              }} />
              <div style={{
                position: "absolute", bottom: 16, left: 16, right: 16,
                background: "rgba(5,5,5,0.85)", backdropFilter: "blur(20px)",
                border: "1px solid #252525", borderRadius: 10, padding: "12px 14px",
              }}>
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 14, color: "#F0EBE3" }}>Aman Kumar</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#7A7A7A", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 }}>AI Builder · Brand Creator</div>
              </div>
            </div>

            {/* Learning streak card */}
            <div style={{
              background: "#141414", border: "1px solid #252525", borderRadius: 12,
              padding: "14px 18px", width: 280,
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#7A7A7A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                Currently learning
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Agentic infra", "Brand motion", "Rust basics"].map((item, i) => {
                  const colors = ["#C8FF00", "#A78BFA", "#38BDF8"];
                  return (
                    <span key={item} style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11,
                      fontFamily: "var(--font-dm-sans)", fontWeight: 600,
                      background: `${colors[i]}15`, border: `1px solid ${colors[i]}30`,
                      color: colors[i],
                    }}>{item}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
          section > div > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
