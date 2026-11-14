"use client";

/* The Statement Hero — the Atelier (demo 2026-11-14).
 * Headline + two CTAs only. The hero rule stands: no subheadline,
 * no product deck, no GolpoNeer in the hero — the deck lives below,
 * in the work. "zero to live" is set in Newsreader italic.
 * No mount fade (fixed 2026-11-14): the headline used to start at
 * opacity 0 and fade in at 0:00.5 while the deck below was already
 * visible. It now paints at full opacity on the first paint. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* The Gray Fog drifts behind the hero — visible only in the dark realm */}
      <div aria-hidden="true" className="fog-layer" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:pt-28">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          Musabbir Rahman — Portfolio
        </p>
        <h1 className="mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[5.2rem]">
          Designing and engineering digital products from{" "}
          <em className="font-serif font-medium italic tracking-normal text-ink">
            zero to live.
          </em>
        </h1>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-4 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
          >
            See selected work
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-hairline bg-card px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:border-ink-faint"
          >
            Get in touch
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
