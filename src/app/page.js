import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import Education from "../components/Education"; // <-- Add this import
import Projects from "../components/Projects";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import GolpoNeerLiveStats from "../components/GolpoNeerLiveStats";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

/* Homepage order (Step 2 reorder, 2026-11-13): Selected Work sits
 * immediately below the Hero, led by GolpoNeer. The standalone
 * GolpoNeerBanner is gone — its image and link duplicated the
 * GolpoNeer project card, so the flagship is now one showcase:
 * the card first, then the live numbers right after it. The
 * GolpoNeerBanner component file stays in the repo, unused.
 * Education moves below Selected Work. */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <GolpoNeerLiveStats />
      <BeforeAfterSlider />
      <SkillsMarquee />
      <Education />
      <About />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
