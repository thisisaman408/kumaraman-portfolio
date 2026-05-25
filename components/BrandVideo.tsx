"use client";
import { useRef, useState, useEffect } from "react";

export default function BrandVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setInViewport(entries[0].isIntersecting); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (inViewport) {
      videoRef.current.muted = false;
      setMuted(false);
      videoRef.current.play().catch(() => {
        if (!videoRef.current) return;
        videoRef.current.muted = true;
        setMuted(true);
        videoRef.current.play().catch(() => {});
      });
    } else {
      videoRef.current.pause();
    }
  }, [inViewport]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); } else { videoRef.current.play(); }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const gmailUrl = "https://mail.google.com/mail/?view=cm&to=thisisaman408@gmail.com&subject=Brand%20Video%20Request&body=Hi%20Aman%2C%0A%0AI%27d%20love%20to%20get%20a%20brand%20video%20made%20for%20my%20business.";

  return (
    <section
      ref={sectionRef}
      id="brand-video"
      style={{ padding: "0", background: "#080808", borderTop: "1px solid #252525", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 48 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#A78BFA",
              letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 16,
            }}>Brand Creation · AI-Powered</span>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#F0EBE3", letterSpacing: "-0.04em", margin: "0 0 20px", lineHeight: 1,
            }}>
              Built with just Claude.
              <br />
              <span style={{ color: "#A78BFA" }}>Want yours too?</span>
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, color: "#C4BDB5", lineHeight: 1.75, margin: "0 0 32px" }}>
              I built <span style={{ color: "#A78BFA", fontWeight: 600 }}>Resyl</span> — an AI platform that turns brand ideas into
              full identities. Logo, copy, marketing video, launch assets. Everything.
              This is a real brand video made using Claude and Resyl.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {["Brand strategy", "Motion graphics", "AI video", "Identity design", "Launch assets"].map((tag) => (
                <span key={tag} style={{
                  padding: "4px 12px", borderRadius: 100, fontSize: 12,
                  fontFamily: "var(--font-dm-sans)", fontWeight: 500,
                  background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)",
                  color: "#A78BFA",
                }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://resyl.app" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14,
                color: "#050505", background: "#A78BFA",
                padding: "12px 24px", borderRadius: 100, textDecoration: "none",
              }}>Try Resyl →</a>
              <a href={gmailUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 14,
                color: "#C4BDB5", border: "1px solid #252525",
                padding: "12px 24px", borderRadius: 100, textDecoration: "none",
              }}>Get your brand video</a>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { v: "Resyl", l: "AI brand platform", c: "#A78BFA" },
              { v: "1 day", l: "from idea to brand video", c: "#C8FF00" },
              { v: "Claude", l: "as the creative engine", c: "#38BDF8" },
              { v: "Full", l: "brand kit included", c: "#F472B6" },
            ].map((s) => (
              <div key={s.l} style={{
                background: "#141414", border: "1px solid #252525",
                borderRadius: 12, padding: "20px",
              }}>
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 22, color: s.c, letterSpacing: "-0.03em", marginBottom: 4 }}>{s.v}</div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "#7A7A7A" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video player */}
        <div style={{
          position: "relative", borderRadius: 20, overflow: "hidden",
          border: "1px solid #252525", background: "#0A0A0A",
          aspectRatio: "16/9", maxHeight: 520,
        }}>
          {inViewport && (
            <video
              ref={videoRef}
              src="/brand-video.mp4"
              muted={muted}
              loop
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}
          {!inViewport && (
            <div style={{ width: "100%", height: "100%", background: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }} />
            </div>
          )}

          {/* Overlay controls */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between", padding: 24,
            background: playing ? "transparent" : "rgba(5,5,5,0.6)",
            transition: "background 0.3s",
          }}>
            {/* Top label */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, color: "#A78BFA",
                background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)",
                padding: "4px 12px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.06em",
              }}>Resyl Brand Film</span>
              <button onClick={toggleMute} style={{
                background: "rgba(5,5,5,0.7)", border: "1px solid #252525",
                borderRadius: 100, padding: "6px 14px", cursor: "pointer",
                fontFamily: "var(--font-mono)", fontSize: 11, color: "#C4BDB5",
                letterSpacing: "0.04em", textTransform: "uppercase",
              }}>
                {muted ? "🔇 Unmute" : "🔊 Mute"}
              </button>
            </div>

            {/* Center play button */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
              <button onClick={togglePlay} style={{
                width: 72, height: 72, borderRadius: "50%",
                background: playing ? "transparent" : "rgba(200,255,0,0.9)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s", opacity: playing ? 0 : 1,
                transform: playing ? "scale(0.8)" : "scale(1)",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#050505">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>
            <div />
          </div>

          {playing && (
            <div onClick={togglePlay} style={{ position: "absolute", inset: 0, cursor: "pointer" }} />
          )}
        </div>
      </div>
    </section>
  );
}
