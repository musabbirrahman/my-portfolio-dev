"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function LayoutFixDemo() {
  const [view, setView] = useState("after");
  const [showCode, setShowCode] = useState(false);

  return (
    <main className="bg-[#fdf8f0] text-neutral-900 min-w-0">
      <div className="bg-amber-100 border-b border-amber-200 px-4 py-3 text-center">
        <p className="text-xs sm:text-sm text-amber-900">Demo layout fix — the Before version is intentionally broken, to show the problem. The After version is the fix.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Layout fix: before and after</h1>
        <p className="mt-3 text-neutral-500 leading-relaxed max-w-2xl">The same cards, shown first the broken way, then the fixed way. Use the toggle below. The phone frame is 360px wide, a common phone width. This demo now covers five bugs, not three.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bugs.map((bug) => (
            <div key={bug.title} className="bg-white rounded-2xl border border-neutral-200 p-5">
              <h2 className="font-bold">{bug.title}</h2>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{bug.desc}</p>
            </div>
          ))}
          <div className="bg-neutral-900 text-white rounded-2xl p-5">
            <h2 className="font-bold">Checked after the fix</h2>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">Phone width: no sideways scroll. Titles: fully readable. Buttons: large enough to tap. Image: shape kept.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <button onClick={() => setView("before")} className={`px-6 py-3 rounded-full font-bold ${view === "before" ? "bg-red-600 text-white" : "bg-white border border-neutral-200"}`}>Show Before (broken)</button>
          <button onClick={() => setView("after")} className={`px-6 py-3 rounded-full font-bold ${view === "after" ? "bg-emerald-600 text-white" : "bg-white border border-neutral-200"}`}>Show After (fixed)</button>
          <button onClick={() => setShowCode(!showCode)} className="px-6 py-3 rounded-full font-bold bg-white border border-neutral-200">{showCode ? "Hide code changes" : "Show code changes"}</button>
          <p className="text-sm text-neutral-500">{view === "before" ? "Before: scroll sideways inside the frame to see the cut-off cards." : "After: everything fits, no sideways scroll, titles fully readable."}</p>
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

        <div className="mt-8 bg-white rounded-3xl border border-neutral-200 p-6">
          <h2 className="text-xl font-bold">What was changed, in plain terms</h2>
          <ul className="mt-3 space-y-2 text-neutral-600 list-disc list-inside">
            <li>Fixed 900px width → full width, with a max width for large screens.</li>
            <li>nowrap titles → normal wrapping, so long titles show in full.</li>
            <li>Single row → one column on phones, three columns only on large screens.</li>
            <li>Tiny buttons → large, tappable buttons.</li>
            <li>Stretched image box → box that keeps its shape.</li>
            <li>Checked at phone width: no horizontal scroll on the fixed version.</li>
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500"><Link href="/#projects" className="underline">Back to portfolio</Link> · Demo by Musabbir Rahman</p>
      </div>
    </main>
  );
}
