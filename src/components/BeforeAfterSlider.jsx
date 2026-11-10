"use client";

import { useRef, useState } from "react";

// The same cards and the same broken/fixed previews as the layout-fix demo
// (/demos/layout-fix). The slider shows both at once: drag the handle to
// reveal the broken layout on the left and the fixed layout on the right.
const cards = [
  { title: "Fresh bread every single morning for the whole neighbourhood", desc: "Baked daily, simple prices, message to order." },
  { title: "Chocolate cake slice", desc: "Rich chocolate, soft sponge." },
  { title: "Chicken patties", desc: "Golden pastry, savoury filling." },
];

function BeforePreview() {
  return (
    <div className="w-[360px] max-w-full border border-red-200 rounded-2xl overflow-x-auto bg-white">
      <div className="w-[900px] p-4">
        <h3 className="text-xl font-bold whitespace-nowrap text-neutral-900">Our services and products for every customer today</h3>
        <div className="mt-4 flex gap-4">
          {cards.map((card) => (
            <div key={card.title} className="w-[280px] shrink-0 border border-neutral-200 rounded-xl p-4">
              <p className="font-bold whitespace-nowrap overflow-hidden text-neutral-900">{card.title}</p>
              <p className="mt-2 text-sm text-neutral-500">{card.desc}</p>
              <button className="mt-3 px-1 py-1 bg-neutral-900 text-white rounded-full text-[10px]">Order</button>
            </div>
          ))}
        </div>
        <div className="mt-4 h-[80px] w-[900px] bg-amber-200 flex items-center justify-center text-sm font-bold text-neutral-900">Stretched image box — forced height, wrong shape</div>
      </div>
    </div>
  );
}

function AfterPreview() {
  return (
    <div className="w-[360px] max-w-full border border-emerald-200 rounded-2xl overflow-hidden bg-white">
      <div className="w-full p-4 min-w-0">
        <h3 className="text-xl font-bold leading-snug text-neutral-900">Our services and products for every customer today</h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {cards.map((card) => (
            <div key={card.title} className="w-full border border-neutral-200 rounded-xl p-4 min-w-0">
              <p className="font-bold leading-snug text-neutral-900">{card.title}</p>
              <p className="mt-2 text-sm text-neutral-500">{card.desc}</p>
              <button className="mt-3 px-5 py-3 bg-neutral-900 text-white rounded-full text-sm font-bold">Order now</button>
            </div>
          ))}
        </div>
        <div className="mt-4 aspect-video w-full bg-amber-200 rounded-xl flex items-center justify-center text-sm font-bold text-neutral-900">Image box — shape kept, cropped from the top</div>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef(null);
  const draggingRef = useRef(false);

  function updateFromClientX(clientX) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  function onPointerDown(e) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }

  function onPointerUp() {
    draggingRef.current = false;
  }

  function onKeyDown(e) {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  }

  return (
    <section id="before-after" className="py-16 md:py-24 bg-[#0a0a0a] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight">
          Drag to see the fix.
        </h2>
        <p className="mt-4 text-neutral-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
          The same cards, in a 360px phone frame. On the left, the broken layout — sideways scroll, cut-off titles, tiny buttons. On the right, the fix. Drag the handle.
        </p>

        {/* Slider — After is the base; Before is clipped to the left of the handle */}
        <div
          ref={trackRef}
          className="relative w-[360px] max-w-full mx-auto mt-12 select-none touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <AfterPreview />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            aria-hidden="true"
          >
            <BeforePreview />
          </div>

          {/* Labels */}
          <span className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg">
            Before — broken
          </span>
          <span className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-lg">
            After — fixed
          </span>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 cursor-ew-resize outline-none"
            style={{ left: `${pos}%` }}
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
          >
            <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#050505] flex items-center justify-center shadow-2xl border border-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          Five bugs fixed: 900px container, nowrap titles, a row that never stacks, tiny buttons, a stretched image box.{" "}
          <a href="/demos/layout-fix" className="underline text-neutral-300 hover:text-white">See the full demo →</a>
        </p>
      </div>
    </section>
  );
}
