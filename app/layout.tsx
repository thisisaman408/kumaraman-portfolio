import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kumaraman-portfolio-iota.vercel.app"),
  title: "Aman Kumar — AI Product Engineer & Founder",
  description: "Aman Kumar builds AI-powered products and the systems behind them. Founder of Resyl, working across agentic workflows, backend systems, and full-stack products.",
  keywords: ["Aman Kumar", "AI product engineer", "founder", "full-stack engineer", "agentic systems", "portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aman Kumar — AI Product Engineer & Founder",
    description: "I build AI-powered products and the systems behind them.",
    type: "website",
    url: "https://kumaraman-portfolio-iota.vercel.app",
    images: [{ url: "/formal2.png", width: 1103, height: 1426, alt: "Aman Kumar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar — AI Product Engineer & Founder",
    description: "I build AI-powered products and the systems behind them.",
    images: ["/formal2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
      style={{ background: "#f5f2ea" }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
