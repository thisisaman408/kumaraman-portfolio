import { stats } from "./data";

export default function Stats() {
  return (
    <div style={{ borderTop: "1px solid #252525", borderBottom: "1px solid #252525", background: "#0A0A0A" }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 48px",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          background: "#252525", gap: "1px",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} style={{
            padding: "40px 32px", background: "#0A0A0A",
            display: "flex", flexDirection: "column", gap: 6,
          }}>
            <span style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#C8FF00", letterSpacing: "-0.04em", lineHeight: 1,
            }}>{stat.value}</span>
            <span style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "#7A7A7A",
              fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em",
            }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
