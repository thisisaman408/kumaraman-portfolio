import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AboutContact, ClientWork, FeaturedWork, Highlights, MoreWork, TechnicalFocus } from "@/components/PortfolioSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlights />
        <FeaturedWork />
        <ClientWork />
        <MoreWork />
        <TechnicalFocus />
        <AboutContact />
      </main>
    </>
  );
}
