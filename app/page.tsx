import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import AIProjects from "@/components/AIProjects";
import FreelanceWork from "@/components/FreelanceWork";
import OtherProjects from "@/components/OtherProjects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#050505" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <AIProjects />
      <FreelanceWork />
      <OtherProjects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
