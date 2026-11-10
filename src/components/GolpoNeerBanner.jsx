"use client";

import Image from "next/image";

// GolpoNeer, on its own below the hero — not inside it. The hero is about
// the craft; this is the flagship project, shown once, as a featured band.
export default function GolpoNeerBanner() {
  return (
    <section className="bg-[#050505] px-4 sm:px-6 py-16 border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Featured project
        </p>
        <a
          href="https://golponeer.com"
          target="_blank"
          rel="noreferrer"
          className="block mt-6 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.06)] hover:border-white/20 transition-colors"
        >
          <span className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 flex-1 max-w-[220px] mx-auto rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-neutral-400 text-center truncate">
              golponeer.com
            </span>
          </span>
          <Image
            src="/golponeer-desktop.jpg"
            alt="GolpoNeer homepage"
            width={1600}
            height={716}
            className="w-full h-auto block"
          />
        </a>
        <p className="mt-3 text-xs text-neutral-500">
          GolpoNeer — the story platform I built and run. Click to visit it live.
        </p>
      </div>
    </section>
  );
}
