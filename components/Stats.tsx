import { stats } from "./data";

export default function Stats() {
  return (
    <div
      style={{
        borderTop: "1px solid #1E1E1E",
        borderBottom: "1px solid #1E1E1E",
        background: "#0A0A0A",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "40px 32px",
              borderRight: i < stats.length - 1 ? "1px solid #1E1E1E" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(36px, 4vw, 52px)",
                color: "#C8FF00",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                color: "#5A5A5A",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
