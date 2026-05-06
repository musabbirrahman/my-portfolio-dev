import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import Education from "../components/Education"; // <-- Add this import
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Education /> {/* <-- The Education section goes here! */}
      <Projects />
      <About />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}