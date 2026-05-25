"use client";

const items = [
  "AI BUILDER", "MULTI-AGENT SYSTEMS", "MILAN AI WEEK 2026", "IBM HACKATHON",
  "FREELANCE DEV", "10+ CLIENTS", "BRAND VIDEOS", "NEXT.JS", "FASTAPI",
  "LLM ORCHESTRATION", "INDIA-BASED", "SHIPPING GLOBALLY",
];

export default function Marquee() {
  return (
    <div
      style={{
        overflow: "hidden",
        background: "#C8FF00",
        padding: "14px 0",
        borderTop: "1px solid #141414",
        borderBottom: "1px solid #141414",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 0,
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: 12,
              color: "#050505",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {item}
            <span style={{ fontSize: 6, color: "rgba(5,5,5,0.4)" }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
