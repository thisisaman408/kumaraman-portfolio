import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aman Kumar — AI Builder & Freelance Developer",
  description:
    "I build AI-native products, agentic systems, and high-quality websites for real clients. Based in India, shipping globally.",
  keywords: ["Aman Kumar", "AI developer", "freelance developer", "Next.js", "agentic AI", "portfolio"],
  openGraph: {
    title: "Aman Kumar — AI Builder & Freelance Developer",
    description: "Multi-agent systems. Hackathon winner. Freelance developer for 10+ businesses.",
    type: "website",
    url: "https://kumaraman.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar — AI Builder",
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
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
      style={{ background: "#050505" }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
