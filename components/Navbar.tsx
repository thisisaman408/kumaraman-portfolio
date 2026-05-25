"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "18px 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "background 0.3s ease, border-color 0.3s ease",
      background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
      borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
    }}>
      <span style={{
        fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 18,
        color: "#F0EBE3", letterSpacing: "-0.02em",
      }}>
        AK<span style={{ color: "#C8FF00" }}>.</span>
      </span>

      {/* Desktop nav */}
      <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Projects", "Freelance", "Skills", "About"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#5A5A5A",
            textDecoration: "none", transition: "color 0.2s", fontWeight: 500,
          }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F0EBE3")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5A5A5A")}>
            {item}
          </a>
        ))}
        <a href="mailto:thisisaman408@gmail.com" style={{
          fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 600,
          color: "#050505", background: "#C8FF00",
          padding: "8px 18px", borderRadius: 100, textDecoration: "none",
        }}>Hire me</a>
      </div>

      {/* Mobile: just the CTA */}
      <a href="mailto:thisisaman408@gmail.com" style={{
        display: "none",
        fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 600,
        color: "#050505", background: "#C8FF00",
        padding: "7px 16px", borderRadius: 100, textDecoration: "none",
      }}
        className="nav-cta-mobile">
        Hire me
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-cta-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
