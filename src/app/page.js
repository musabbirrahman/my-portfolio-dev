import Hero from "../components/atelier/Hero";
import ProductDeck from "../components/atelier/ProductDeck";
import Showcases from "../components/atelier/Showcase";
import Bento from "../components/atelier/Bento";
import Sequence from "../components/atelier/Sequence";
import Ledger from "../components/atelier/Ledger";
import Closing from "../components/atelier/Closing";

/* The Tactile Atelier — demo page order (2026-11-14, NOT shipped).
 * A fresh redesign from the brief the owner uploaded — daylight-first,
 * Swiss grid, editorial type. The hero rule stands: headline + CTAs
 * only; the Live Product Deck lives below the hero, in the work.
 * No entry ritual, no world canvas, no brain — those are parked
 * (Entry.jsx, World.jsx, Brain.jsx stay in the repo, unused).
 * The old sections (Projects, GolpoNeerLiveStats, BeforeAfterSlider,
 * CapabilitiesMatrix, Education, About, Contact) stay in the repo,
 * unused — their approved content (capabilities, async protocol,
 * scope builder) is carried into the new sections where the brief
 * covers it. The old scope-builder contact form is replaced here by
 * the brief's 3-field inquiry card. */
export default function Home() {
  return (
    <main className="relative bg-paper text-ink">
      <Hero />
      <ProductDeck />
      <Showcases />
      <Bento />
      <Sequence />
      <Ledger />
      <Closing />
    </main>
  );
}
