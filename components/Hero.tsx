"use client";
import { useEffect, useState } from "react";

const words = ["SHIPS.", "BUILDS.", "DEPLOYS.", "SHIPS AGAIN."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Status pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 100,
            border: "1px solid rgba(200,255,0,0.25)",
            background: "rgba(200,255,0,0.06)",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#C8FF00",
              animation: "pulse 2s infinite",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#C8FF00",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Available for projects
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(56px, 10vw, 140px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#F0EBE3",
            margin: "0 0 16px",
          }}
        >
          AMAN
          <br />
          <span style={{ color: "#C8FF00" }}>KUMAR</span>
        </h1>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 600,
              color: "#888",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            AI builder who{" "}
            <span
              style={{
                color: "#F0EBE3",
                transition: "opacity 0.3s ease",
                opacity: visible ? 1 : 0,
                display: "inline-block",
                minWidth: 180,
              }}
            >
              {words[wordIndex]}
            </span>
          </p>
        </div>

        {/* Sub description */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 17,
            color: "#666",
            maxWidth: 560,
            lineHeight: 1.7,
            margin: "0 0 56px",
          }}
        >
          Multi-agent systems. Hackathon-tested products. 10+ real businesses
          taken online. I build things that ship — from agentic AI to brand
          websites for Delhi's street market to Milan AI Week.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 600,
              fontSize: 15,
              color: "#050505",
              background: "#C8FF00",
              padding: "14px 28px",
              borderRadius: 100,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
          >
            See my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://github.com/thisisaman408"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              fontSize: 15,
              color: "#888",
              background: "transparent",
              border: "1px solid #1E1E1E",
              padding: "14px 28px",
              borderRadius: 100,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#C8FF00";
              (e.currentTarget as HTMLElement).style.color = "#C8FF00";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E";
              (e.currentTarget as HTMLElement).style.color = "#888";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 1,
              height: 64,
              background: "linear-gradient(to bottom, #1E1E1E, transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#5A5A5A",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            scroll
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
