"use client";

import { useEffect, useRef, useState } from "react";

/* Live Product Deck — the Atelier (demo 2026-11-14).
 * The deck lives BELOW the hero (the hero rule: headline + CTAs
 * only). Three tactile cards visitors can touch right away:
 * 1) GolpoNeer Live Pulse — real numbers, Bangla/English toggle.
 * 2) Sweet Cravings Checkout — a working mini-preview of the
 *    order flow (no real order is placed).
 * 3) Viewport Stress-Test — a live slider, 320px to 1440px.
 * Pulse numbers are LIVE (added 2026-11-14): fetched from
 * GolpoNeer's public API on every page load, same query the
 * old GolpoNeerLiveStats strip used. The baked-in numbers below
 * are the fallback — verified live 2026-11-14 (38 / 511 /
 * 1,139,932) — shown first, kept if the fetch fails. */

function Card({ children, className = "" }) {
  return (
    <div
      className={`atelier-surface flex flex-col rounded-2xl border border-hairline bg-card p-5 shadow-[0_8px_30px_rgba(17,17,16,0.06)] sm:p-6 ${className}`}
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
/* Same public read the old GolpoNeerLiveStats strip used. The key is
 * publishable — it ships in GolpoNeer's own site bundle and only
 * reads public data. */
const SUPABASE_URL = "https://gwqngoywcupkytyxukfu.supabase.co/rest/v1";
const PUBLISHABLE_KEY = "sb_publishable_zynfKNRZXjfZSFX6dVrdhg_mimIkF1h";
const FALLBACK_STATS = { stories: 38, chapters: 511, words: 1139932 };

function parseTotal(contentRange) {
  if (!contentRange) return null;
  const total = parseInt(contentRange.split("/")[1], 10);
  return Number.isFinite(total) ? total : null;
}

/* Bangla digits for the toggle — "1.1M+" becomes "১.১M+"; the dot
 * and the M stay as they are. */
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
function toBn(s) {
  return String(s).replace(/\d/g, (d) => BN_DIGITS[d]);
}

function formatWords(words) {
  return `${(words / 1e6).toFixed(1)}M+`;
}

function PulseCard() {
  const [bn, setBn] = useState(false);
  /* Fallback first: the card renders instantly with the known
   * numbers and swaps to the live ones when the fetch returns.
   * Same shape, same format, so the swap moves nothing. */
  const [stats, setStats] = useState(FALLBACK_STATS);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const headers = {
          apikey: PUBLISHABLE_KEY,
          Authorization: `Bearer ${PUBLISHABLE_KEY}`,
          Prefer: "count=exact",
        };
        const [storiesRes, chaptersRes] = await Promise.all([
          fetch(`${SUPABASE_URL}/stories?select=id`, { headers }),
          fetch(`${SUPABASE_URL}/chapters?select=word_count&status=eq.published&limit=1000`, { headers }),
        ]);
        if (!storiesRes.ok || !chaptersRes.ok) return;
        const stories = parseTotal(storiesRes.headers.get("content-range"));
        const chapters = await chaptersRes.json();
        if (!Array.isArray(chapters)) return;
        const words = chapters.reduce((sum, c) => sum + (c.word_count || 0), 0);
        if (cancelled) return;
        setStats({
          stories: stories ?? FALLBACK_STATS.stories,
          chapters: chapters.length,
          words,
        });
      } catch {
        // Keep the known numbers; the card stays useful without a fetch.
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const statsDisplay = [
    { n: `${stats.stories}+`, l: bn ? "গল্প" : "Stories" },
    { n: `${stats.chapters}+`, l: bn ? "পর্ব" : "Chapters" },
    { n: formatWords(stats.words), l: bn ? "শব্দ" : "Words" },
  ];
  const statsShown = bn
    ? statsDisplay.map((s) => ({ n: toBn(s.n), l: s.l }))
    : statsDisplay;
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
      {/* min-h on phones (2026-11-14): the English description wraps
          to 3 lines while the Bangla wraps to 2 below 360px, and to
          2 lines while the Bangla fits on 1 between ~410-560px — so
          toggling the language shrank the card. Reserving the taller
          line count keeps the box the same in both languages. */}
      <p className="mt-2 text-sm leading-relaxed text-ink-soft max-[360px]:min-h-[69px] min-[361px]:max-[575px]:min-h-[46px]">
        {bn
          ? "বাংলা ও ইংরেজি গল্পের প্ল্যাটফর্ম — পড়া ও লেখা ফ্রি, চিরকাল।"
          : "A bilingual Bangla / English story platform — reading and writing free, forever."}
      </p>
      <div className="mt-5 grid grid-cols-3 divide-x divide-hairline rounded-xl border border-hairline bg-paper py-3">
        {statsShown.map((s) => (
          <div key={s.l} className="min-w-0 px-2 text-center">
            {/* whitespace-nowrap: the number line must never break,
                at any width (2026-11-14). tabular-nums keeps every
                digit the same width, so a live swap moves nothing.
                The md one-step-smaller numbers are gone (2026-11-14):
                the deck used to be 3-across at 768-1023, so the cells
                were only ~43px and "1.1M+" at text-xl (60px) could
                not fit. The deck now stacks until lg, so md cells
                are full-width and text-xl fits everywhere. */}
            <p className="whitespace-nowrap font-mono text-lg font-bold tabular-nums text-ink sm:text-xl">{s.n}</p>
            <p className="mt-0.5 whitespace-nowrap text-[11px] font-medium text-ink-soft">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Writer line (replaced the Latest line 2026-11-14): শেষ পাতা
          was duplicated — the showcase below already shows it as the
          reader mock. The card was also reader-only; this line states
          the writer side, which the site must show equally. */}
      {/* min-h on phones (2026-11-14): the English writer line wraps
          to 2 lines while the Bangla fits on 1 between ~410-448px, so
          toggling shrank the card by 23px. Reserving pt-4 + 2 lines
          (63px) keeps the box the same in both languages. (Tailwind
          v4 max-* is exclusive, so 450 covers the 440-448 edge.) */}
      <p className="mt-4 border-t border-hairline pt-4 text-sm leading-relaxed text-ink-soft max-[450px]:min-h-[63px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          {bn ? "লেখকদের জন্য — " : "For writers — "}
        </span>
        {bn
          ? "আপনার গল্প পর্বে পর্বে প্রকাশ করুন।"
          : "publish your story chapter by chapter."}
      </p>
      <div className="mt-auto pt-4">
        <a
          href="https://golponeer.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-bold text-signal hover:underline"
        >
          Visit golponeer.com ↗
        </a>
      </div>
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
            the card height never changes with qty. (The md wrap added
            2026-11-14 is gone too: the deck stacked until lg, so the
            box is wide at md now and the line fits on one line.) */}
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
  const wrapRef = useRef(null);
  const [wrapW, setWrapW] = useState(0);
  useEffect(() => {
    function measure() {
      if (wrapRef.current) setWrapW(wrapRef.current.clientWidth);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  /* The frame grows with the slider across the whole card: 155px at
     320, the full card width at 1440. (Fixed 2026-11-14: the old
     fixed 155→325px map was capped by maxWidth at the narrow 229px
     iPad cards, so the whole slider moved the frame 22px and the
     demo looked dead. Measuring the card — the same pattern Act 2
     uses — makes the frame use the full width at every size.) */
  const frameW = wrapW ? Math.min(wrapW, 155 + ((w - 320) / 1120) * (wrapW - 155)) : 155;
  return (
    <Card>
      <Eyebrow>Viewport Stress-Test</Eyebrow>
      <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-ink">320 → 1440px</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Drag the slider. The layout adapts cleanly — no sideways scroll, no cut-off titles.
      </p>
      <div ref={wrapRef} className="mt-5 overflow-hidden rounded-xl border border-hairline bg-paper">
        <div
          className="mx-auto border-x border-hairline bg-card transition-[width] duration-200 ease-out"
          style={{ width: `${frameW}px`, maxWidth: "100%" }}
        >
          <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#28C840]" />
            {/* Full name, never truncated (fixed 2026-11-14): the long
                portfolio URL overflowed, then truncated to "musabb…"
                — which reads as the very cut-off title this card
                promises never happens. "golponeer.com" is shorter
                and shows in full at every slider position. */}
            <span className="ml-2 whitespace-nowrap font-mono text-[10px] text-ink-faint">golponeer.com</span>
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
      {/* One column until lg (2026-11-14): three-across at 768-1023
          made 229px cards and every widget cramped — the viewport
          slider moved its frame 22px over its whole range, the
          ৳750 total touched the + button (0px gap), and "1.1M+" sat
          in a 51px cell with zero margin. Stacked, each card gets
          the full width and all three breathe. */}
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <PulseCard />
        <CheckoutCard />
        <StressCard />
      </div>
    </section>
  );
}
