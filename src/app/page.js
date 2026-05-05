import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsMarquee /> {/* The infinite animation goes here! */}
      <Projects />
      <About />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}