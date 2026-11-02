"use client";

import { useState } from "react";
import Link from "next/link";

const cards = [
  { title: "Fresh bread every single morning for the whole neighbourhood", desc: "Baked daily, simple prices, message to order." },
  { title: "Chocolate cake slice", desc: "Rich chocolate, soft sponge." },
  { title: "Chicken patties", desc: "Golden pastry, savoury filling." },
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
              <button className="mt-3 px-4 py-2 bg-neutral-900 text-white rounded-full text-sm">Order now today</button>
            </div>
          ))}
        </div>
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
              <button className="mt-3 px-4 py-2 bg-neutral-900 text-white rounded-full text-sm">Order now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LayoutFixDemo() {
  const [view, setView] = useState("after");

  return (
    <main className="bg-[#fdf8f0] text-neutral-900 min-w-0">
      <div className="bg-amber-100 border-b border-amber-200 px-4 py-3 text-center">
        <p className="text-xs sm:text-sm text-amber-900">
          Demo layout fix — the Before version is intentionally broken, to show the problem. The After version is the fix.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Layout fix: before and after</h1>
        <p className="mt-3 text-neutral-500 leading-relaxed max-w-2xl">
          The same three cards, shown first the broken way, then the fixed way. Use the toggle below. The phone frame is 360px wide, a common phone width.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h2 className="font-bold">Bug 1: Fixed 900px container</h2>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">Before: the content is 900px wide, so a phone has to scroll sideways. After: the content fits the phone width.</p>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h2 className="font-bold">Bug 2: Titles that do not wrap</h2>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">Before: long titles use nowrap, so they get cut off. After: titles wrap to two lines, fully readable.</p>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h2 className="font-bold">Bug 3: Row that never stacks</h2>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">Before: three cards stay in one row and get squeezed off screen. After: cards stack in one column on a phone.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <button
            onClick={() => setView("before")}
            className={`px-6 py-3 rounded-full font-bold ${view === "before" ? "bg-red-600 text-white" : "bg-white border border-neutral-200"}`}
          >
            Show Before (broken)
          </button>
          <button
            onClick={() => setView("after")}
            className={`px-6 py-3 rounded-full font-bold ${view === "after" ? "bg-emerald-600 text-white" : "bg-white border border-neutral-200"}`}
          >
            Show After (fixed)
          </button>
          <p className="text-sm text-neutral-500">
            {view === "before"
              ? "Before: scroll sideways inside the frame to see the cut-off cards."
              : "After: everything fits, no sideways scroll, titles fully readable."}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          {view === "before" ? <BeforePreview /> : <AfterPreview />}
        </div>

        <div className="mt-10 bg-white rounded-3xl border border-neutral-200 p-6">
          <h2 className="text-xl font-bold">What was changed, in plain terms</h2>
          <ul className="mt-3 space-y-2 text-neutral-600 list-disc list-inside">
            <li>Fixed 900px width → full width, with a max width for large screens.</li>
            <li>nowrap titles → normal wrapping, so long titles show in full.</li>
            <li>Single row → one column on phones, three columns only on large screens.</li>
            <li>Checked at phone width: no horizontal scroll on the fixed version.</li>
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          <Link href="/#projects" className="underline">Back to portfolio</Link> · Demo by Musabbir Rahman
        </p>
      </div>
    </main>
  );
}
