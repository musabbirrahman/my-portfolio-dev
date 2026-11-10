import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GolpoNeerBanner from "../components/GolpoNeerBanner";
import SkillsMarquee from "../components/SkillsMarquee";
import Education from "../components/Education"; // <-- Add this import
import Projects from "../components/Projects";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import GolpoNeerLiveStats from "../components/GolpoNeerLiveStats";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GolpoNeerBanner />
      <SkillsMarquee />
      <Education /> {/* <-- The Education section goes here! */}
      <Projects />
      <BeforeAfterSlider />
      <GolpoNeerLiveStats />
      <About />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}