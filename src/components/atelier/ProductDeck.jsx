"use client";

import { useState } from "react";

/* Live Product Deck — the Atelier (demo 2026-11-14).
 * The deck lives BELOW the hero (the hero rule: headline + CTAs
 * only). Three tactile cards visitors can touch right away:
 * 1) GolpoNeer Live Pulse — real numbers, Bangla/English toggle.
 * 2) Sweet Cravings Checkout — a working mini-preview of the
 *    order flow (no real order is placed).
 * 3) Viewport Stress-Test — a live slider, 320px to 1440px.
 * Numbers are real: 38 stories, 511 chapters, 1,139,932 words,
 * verified live 2026-11-13. */

function Card({ children, className = "" }) {
  return (
    <div
      className={`atelier-surface rounded-2xl border border-hairline bg-card p-5 shadow-[0_8px_30px_rgba(17,17,16,0.06)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
      {children}
    </p>
  );
}

/* --- 1 · GolpoNeer Live Pulse --- */
function PulseCard() {
  const [bn, setBn] = useState(false);
  const stats = bn
    ? [
        { n: "৩৮+", l: "গল্প" },
        { n: "৫১১+", l: "পর্ব" },
        { n: "১.১M+", l: "শব্দ" },
      ]
    : [
        { n: "38+", l: "Stories" },
        { n: "511+", l: "Chapters" },
        { n: "1.1M+", l: "Words" },
      ];
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <div>
          <Eyebrow>GolpoNeer · Live Pulse</Eyebrow>
          <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-ink">
            {bn ? "গল্পনীড়" : "GolpoNeer"}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setBn(!bn)}
          aria-label="Toggle Bangla and English"
          className="shrink-0 rounded-full border border-hairline bg-muted px-3 py-1.5 font-mono text-xs font-bold text-ink transition-colors hover:border-ink-faint"
        >
          {bn ? "EN" : "বাংলা"}
        </button>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {bn
          ? "বাংলা ও ইংরেজি গল্পের প্ল্যাটফর্ম — পড়া ও লেখা ফ্রি, চিরকাল।"
          : "A bilingual Bangla / English story platform — reading and writing free, forever."}
      </p>
      <div className="mt-5 grid grid-cols-3 divide-x divide-hairline rounded-xl border border-hairline bg-paper py-3">
        {stats.map((s) => (
          <div key={s.l} className="px-2 text-center">
            <p className="font-mono text-lg font-bold tabular-nums text-ink sm:text-xl">{s.n}</p>
            <p className="mt-0.5 text-[11px] font-medium text-ink-soft">{s.l}</p>
          </div>
        ))}
      </div>
      <a
        href="https://golponeer.com"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-bold text-signal hover:underline"
      >
        Visit golponeer.com ↗
      </a>
    </Card>
  );
}

/* --- 2 · Sweet Cravings Checkout (mini-preview) --- */
function CheckoutCard() {
  const [qty, setQty] = useState(1);
  const [pay, setPay] = useState("bKash");
  const price = 750;
  return (
    <Card>
      <Eyebrow>Sweet Cravings · Checkout Preview</Eyebrow>
      <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-ink">Dream Cake</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        A working mini-preview of the mobile dessert order flow. No real order is placed.
      </p>
      <div className="mt-5 rounded-xl border border-hairline bg-paper p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">Dream Cake</span>
          <span className="font-mono text-sm font-bold text-ink">৳{price}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-full border border-hairline bg-card px-2 py-1">
            <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-ink hover:bg-muted">−</button>
            <span className="font-mono text-sm font-bold tabular-nums text-ink">{qty}</span>
            <button type="button" aria-label="Increase quantity" onClick={() => setQty(Math.min(9, qty + 1))} className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-ink hover:bg-muted">+</button>
          </div>
          {/* Fixed-width, right-aligned: the total grows leftward from a
              fixed right edge, so the row never moves when qty changes
              (fixed 2026-11-14 — the total used to jump 10px sideways). */}
          <span className="w-[5ch] text-right font-mono text-base font-bold tabular-nums text-ink">৳{price * qty}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {["bKash", "Nagad"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setPay(m)}
              className={`rounded-full py-2 text-[13px] font-bold transition-colors ${
                pay === m ? "bg-signal text-white" : "border border-hairline bg-card text-ink-soft hover:text-ink"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        {/* One line, always: the old "Paying with …" line wrapped to two
            lines and reflowed as the total grew. Shortened + nowrap so
            the card height never changes with qty. */}
        <p className="mt-3 whitespace-nowrap text-center font-mono text-[11px] text-ink-faint">
          {pay} · Total ৳{price * qty} + delivery
        </p>
      </div>
      <a
        href="https://sweetcravingsrajshahi.com"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-bold text-signal hover:underline"
      >
        Visit the live store ↗
      </a>
    </Card>
  );
}

/* --- 3 · Viewport Stress-Test --- */
function StressCard() {
  const [w, setW] = useState(390);
  return (
    <Card>
      <Eyebrow>Viewport Stress-Test</Eyebrow>
      <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-ink">320 → 1440px</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Drag the slider. The layout adapts cleanly — no sideways scroll, no cut-off titles.
      </p>
      <div className="mt-5 overflow-hidden rounded-xl border border-hairline bg-paper">
        <div
          className="mx-auto border-x border-hairline bg-card transition-[width] duration-200 ease-out"
          style={{ width: `${Math.max(34, (w / 1440) * 100)}%`, minWidth: 120 }}
        >
          <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
            {/* Truncated: the full URL overflowed the mini frame by 69px
                at every width (fixed 2026-11-14). */}
            <span className="ml-2 min-w-0 flex-1 truncate font-mono text-[10px] text-ink-faint">musabbirrahman.vercel.app</span>
          </div>
          <div className="space-y-2 p-3">
            <div className="h-3 w-3/4 rounded bg-ink/80" />
            <div className="h-2 w-full rounded bg-muted" />
            <div className="h-2 w-5/6 rounded bg-muted" />
            <div className="flex gap-2 pt-1">
              <div className="h-6 w-16 rounded-full bg-signal" />
              <div className="h-6 w-16 rounded-full border border-hairline" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <input
          type="range"
          min={320}
          max={1440}
          step={10}
          value={w}
          onChange={(e) => setW(Number(e.target.value))}
          aria-label="Viewport width in pixels"
          className="h-1.5 w-full cursor-pointer accent-[#FF4D00]"
        />
        <span className="w-20 shrink-0 text-right font-mono text-xs font-bold tabular-nums text-ink">
          {w}px
        </span>
      </div>
    </Card>
  );
}

export default function ProductDeck() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            Live Product Deck
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-3xl">
            The work, <em className="font-serif font-medium italic">alive.</em>
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm leading-relaxed text-ink-soft sm:block">
          Touch them. These are the real products, not screenshots.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <PulseCard />
        <CheckoutCard />
        <StressCard />
      </div>
    </section>
  );
}
