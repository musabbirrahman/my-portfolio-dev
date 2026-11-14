"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Responsive Lab — layout fix (Atelier restyle + Act 2 proof, 2026-11-14).
 * Two acts. Act 1: the fix — five real bugs, before/after at a 360px
 * phone frame, code changes. Act 2: the proof — the same fixed layout
 * rendered at all twelve widths the portfolio is checked on (320 to
 * 1920), as named devices, with four checks measured live on the
 * frame — not asserted. The red/green in Act 1 is meaning, not
 * branding: broken is red, fixed is green. The preview frames are
 * the specimen (the bakery's cards), so they keep their own look;
 * everything around them is Atelier. */

const cards = [
  { title: "Fresh bread every single morning for the whole neighbourhood", desc: "Baked daily, simple prices, message to order." },
  { title: "Chocolate cake slice", desc: "Rich chocolate, soft sponge." },
  { title: "Chicken patties", desc: "Golden pastry, savoury filling." },
];

const bugs = [
  { title: "Bug 1: Fixed 900px container", desc: "Before: content is 900px wide, so a phone has to scroll sideways. After: content fits the phone width." },
  { title: "Bug 2: Titles that do not wrap", desc: "Before: long titles use nowrap, so they get cut off. After: titles wrap to two lines, fully readable." },
  { title: "Bug 3: Row that never stacks", desc: "Before: three cards stay in one row and get squeezed off screen. After: cards stack in one column on a phone." },
  { title: "Bug 4: Buttons too small to tap", desc: "Before: buttons are 10px text with tiny padding, hard to tap on a phone. After: buttons are large, with clear padding." },
  { title: "Bug 5: Stretched image box", desc: "Before: an image box is forced to a fixed height, so it looks stretched. After: the box keeps its shape, with the image cropped cleanly from the top." },
];

function BeforePreview() {
  return (
    <div className="w-[360px] max-w-full border border-red-200 rounded-2xl overflow-x-auto bg-white">
      <div className="w-[900px] p-4">
        <h3 className="text-xl font-bold whitespace-nowrap">Our services and products for every customer today</h3>
        <div className="mt-4 flex gap-4">
          {cards.map((card) => (
            <div key={card.title} className="w-[280px] shrink-0 border border-neutral-200 rounded-xl p-4">
              <p className="font-bold whitespace-nowrap overflow-hidden">{card.title}</p>
              <p className="mt-2 text-sm text-neutral-500">{card.desc}</p>
              <button className="mt-3 px-1 py-1 bg-neutral-900 text-white rounded-full text-[10px]">Order</button>
            </div>
          ))}
        </div>
        <div className="mt-4 h-[80px] w-[900px] bg-amber-200 flex items-center justify-center text-sm font-bold">Stretched image box — forced height, wrong shape</div>
      </div>
    </div>
  );
}

function AfterPreview() {
  return (
    <div className="w-[360px] max-w-full border border-emerald-200 rounded-2xl overflow-hidden bg-white">
      <div className="w-full p-4 min-w-0">
        <h3 className="text-xl font-bold leading-snug">Our services and products for every customer today</h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {cards.map((card) => (
            <div key={card.title} className="w-full border border-neutral-200 rounded-xl p-4 min-w-0">
              <p className="font-bold leading-snug">{card.title}</p>
              <p className="mt-2 text-sm text-neutral-500">{card.desc}</p>
              <button className="mt-3 px-5 py-3 bg-neutral-900 text-white rounded-full text-sm font-bold">Order now</button>
            </div>
          ))}
        </div>
        <div className="mt-4 aspect-video w-full bg-amber-200 rounded-xl flex items-center justify-center text-sm font-bold">Image box — shape kept, cropped from the top</div>
      </div>
    </div>
  );
}

/* --- Act 2 · The proof: one layout, twelve widths --- */
const DEVICES = [
  { w: 320, label: "Small phone" },
  { w: 360, label: "Pixel" },
  { w: 390, label: "iPhone" },
  { w: 430, label: "iPhone Pro Max" },
  { w: 600, label: "Small tablet" },
  { w: 768, label: "iPad Mini" },
  { w: 820, label: "iPad Air" },
  { w: 834, label: "iPad Pro 11″" },
  { w: 1024, label: "iPad Pro 12.9″" },
  { w: 1280, label: "Laptop" },
  { w: 1440, label: "Desktop" },
  { w: 1920, label: "Wide desktop" },
];

function ProofFrame({ width }) {
  const wrapRef = useRef(null);
  const contentRef = useRef(null);
  const [checks, setChecks] = useState(null);

  /* The frame renders the fixed layout at the device width, scaled
   * down with zoom so it fits the page. Zoom (unlike transform)
   * scales the layout itself, so the frame's height follows. The
   * checks below read layout values, which zoom does not change —
   * so a pass at 320px means a pass at 320px, not at the scaled size. */
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function measure() {
      const wrap = wrapRef.current;
      const content = contentRef.current;
      if (!wrap || !content) return;
      setScale(Math.min(1, wrap.clientWidth / width));
      const overflowPx = Math.max(0, content.scrollWidth - content.clientWidth);
      const titles = [...content.querySelectorAll("[data-title]")];
      const titlesFit = titles.filter((t) => t.scrollWidth <= t.clientWidth + 1).length;
      const buttons = [...content.querySelectorAll("button")];
      const btnH = buttons.length ? Math.min(...buttons.map((b) => b.offsetHeight)) : 0;
      const img = content.querySelector("[data-image]");
      const r = img ? img.getBoundingClientRect() : null;
      const ratio = r && r.height ? r.width / r.height : 0;
      setChecks([
        { label: "No sideways scroll", value: `${overflowPx}px overflow`, ok: overflowPx === 0 },
        { label: "Titles fully readable", value: `${titlesFit}/${titles.length} fit`, ok: titlesFit === titles.length },
        { label: "Buttons tappable", value: `${btnH}px tall`, ok: btnH >= 44 },
        { label: "Image keeps its shape", value: `${ratio.toFixed(2)}:1`, ok: Math.abs(ratio - 16 / 9) < 0.15 },
      ]);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [width]);

  /* Columns from the device width, not the viewport — the frame is a
   * scaled render, so media queries would read the wrong width. */
  const cols = width < 480 ? 1 : width < 900 ? 2 : 3;

  return (
    <div>
      {/* The frame is the device: as wide as the device, centered —
          so a 390px phone reads as a phone, not a narrow column in a
          wide empty box. Wide devices scale down via zoom to fit. */}
      <div ref={wrapRef} className="mx-auto overflow-hidden rounded-2xl border border-hairline bg-card" style={{ maxWidth: width }}>
        <div ref={contentRef} className="bg-paper p-4" style={{ width, zoom: scale }}>
          <h3 className="text-xl font-bold leading-snug text-ink">Our services and products for every customer today</h3>
          <div className="mt-4 grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {cards.map((card) => (
              <div key={card.title} className="w-full rounded-xl border border-hairline bg-card p-4 min-w-0">
                <p data-title className="font-bold leading-snug text-ink">{card.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{card.desc}</p>
                <button className="mt-3 px-5 py-3 bg-ink text-paper rounded-full text-sm font-bold">Order now</button>
              </div>
            ))}
          </div>
          <div data-image className="mt-4 aspect-video w-full bg-muted rounded-xl flex items-center justify-center text-sm font-bold text-ink">Image box — shape kept, cropped from the top</div>
        </div>
      </div>
      {checks && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center justify-between gap-3 rounded-xl border border-hairline bg-card px-4 py-3">
              <span className="text-sm font-semibold text-ink">
                <span className={c.ok ? "text-emerald-600" : "text-red-600"}>{c.ok ? "✓ " : "✗ "}</span>
                {c.label}
              </span>
              <span className="font-mono text-xs text-ink-faint whitespace-nowrap">{c.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProofSection() {
  const [device, setDevice] = useState(390);
  const current = DEVICES.find((d) => d.w === device);
  return (
    <section className="mt-16 border-t border-hairline pt-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">Act 2 · The proof</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        One layout, <em className="font-serif font-medium italic">twelve widths.</em>
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
        The same fixed layout, rendered at every width this portfolio is checked on — 320 to 1920. Pick a device; the four checks below are measured live on the frame, not asserted.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {DEVICES.map((d) => (
          <button
            key={d.w}
            type="button"
            onClick={() => setDevice(d.w)}
            aria-pressed={device === d.w}
            className={`rounded-full px-3 py-2 font-mono text-xs font-bold transition-colors ${
              device === d.w
                ? "bg-ink text-paper"
                : "border border-hairline bg-card text-ink hover:border-ink-faint"
            }`}
          >
            {d.w}px · {d.label}
          </button>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs text-ink-faint">
        Showing {device}px — {current.label}
      </p>
      <div className="mt-4">
        <ProofFrame width={device} />
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Swept at all twelve widths in the portfolio&apos;s QA pass — the same sweep that caught the 320px card-thumb and library cover-crop fixes on GolpoNeer.
      </p>
    </section>
  );
}

export default function LayoutFixDemo() {
  const [view, setView] = useState("after");
  const [showCode, setShowCode] = useState(false);

  return (
    <main className="bg-paper text-ink min-w-0">
      <div className="bg-card border-b border-hairline px-4 py-3 text-center">
        <p className="text-sm text-ink-soft">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Demo · Layout fix — </span>
          the Before version is intentionally broken, to show the problem. The After version is the fix.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Way out (fixed 2026-11-14): the demo pages had no exit at the
            top — the dock anchors and the wordmark all point to sections
            that don't exist on demo pages, and the only back link was
            buried at the very bottom. */}
        <p className="mb-6"><Link href="/" className="text-sm font-bold text-ink underline underline-offset-4">← Back to portfolio</Link></p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">Responsive Lab · Act 1 · The fix</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight tracking-[-0.02em]">
          Layout fix: <em className="font-serif font-medium italic">before and after.</em>
        </h1>
        <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">The same cards, shown first the broken way, then the fixed way. Use the toggle below. The phone frame is 360px wide, a common phone width. This demo now covers five bugs, not three.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bugs.map((bug) => (
            <div key={bug.title} className="atelier-surface rounded-2xl p-5">
              <h2 className="font-bold text-ink">{bug.title}</h2>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{bug.desc}</p>
            </div>
          ))}
          <div className="bg-ink text-paper rounded-2xl p-5">
            <h2 className="font-bold">Checked after the fix</h2>
            <p className="mt-2 text-sm leading-relaxed opacity-80">Phone width: no sideways scroll. Titles: fully readable. Buttons: large enough to tap. Image: shape kept.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <button onClick={() => setView("before")} className={`px-6 py-3 rounded-full font-bold ${view === "before" ? "bg-red-600 text-white" : "bg-card border border-hairline text-ink"}`}>Show Before (broken)</button>
          <button onClick={() => setView("after")} className={`px-6 py-3 rounded-full font-bold ${view === "after" ? "bg-emerald-600 text-white" : "bg-card border border-hairline text-ink"}`}>Show After (fixed)</button>
          <button onClick={() => setShowCode(!showCode)} className="px-6 py-3 rounded-full font-bold bg-card border border-hairline text-ink">{showCode ? "Hide code changes" : "Show code changes"}</button>
          <p className="text-sm text-ink-soft">{view === "before" ? "Before: scroll sideways inside the frame to see the cut-off cards." : "After: everything fits, no sideways scroll, titles fully readable."}</p>
        </div>

        <div className="mt-6 flex justify-center">{view === "before" ? <BeforePreview /> : <AfterPreview />}</div>

        {showCode && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900 text-red-200 rounded-2xl p-5 overflow-x-auto">
              <h3 className="font-bold text-white">Before code (broken)</h3>
              <pre className="mt-3 text-xs leading-relaxed whitespace-pre">{`width: 900px;
white-space: nowrap;
display: flex; /* never stacks */
button: 10px, tiny padding;
image: fixed height, stretched;`}</pre>
            </div>
            <div className="bg-neutral-900 text-emerald-200 rounded-2xl p-5 overflow-x-auto">
              <h3 className="font-bold text-white">After code (fixed)</h3>
              <pre className="mt-3 text-xs leading-relaxed whitespace-pre">{`width: 100%;
white-space: normal;
grid: 1 column on phones;
button: large padding, readable;
image: aspect ratio kept;`}</pre>
            </div>
          </div>
        )}

        <div className="mt-8 rounded-3xl border border-hairline bg-card p-6">
          <h2 className="text-xl font-bold text-ink">What was changed, in plain terms</h2>
          <ul className="mt-3 space-y-2 text-ink-soft list-disc list-inside">
            <li>Fixed 900px width → full width, with a max width for large screens.</li>
            <li>nowrap titles → normal wrapping, so long titles show in full.</li>
            <li>Single row → one column on phones, three columns only on large screens.</li>
            <li>Tiny buttons → large, tappable buttons.</li>
            <li>Stretched image box → box that keeps its shape.</li>
            <li>Checked at phone width: no horizontal scroll on the fixed version.</li>
          </ul>
        </div>

        <ProofSection />

        <p className="mt-12 text-center text-sm text-ink-faint"><Link href="/" className="underline">Back to portfolio</Link> · Demo by Musabbir Rahman</p>
      </div>
    </main>
  );
}
