"use client";

import { useEffect, useState } from "react";

// Live numbers from GolpoNeer, pulled from its public API each time the page
// loads. The publishable key is public (it ships in GolpoNeer's own site
// bundle) and only reads public data. The known counts are the starting
// values, so the strip is never blank — it updates to the live numbers when
// the fetch returns, and stays on the known numbers if the fetch fails.
const SUPABASE_URL = "https://gwqngoywcupkytyxukfu.supabase.co/rest/v1";
const PUBLISHABLE_KEY = "sb_publishable_zynfKNRZXjfZSFX6dVrdhg_mimIkF1h";

const FALLBACK = { stories: 37, chapters: 510, words: 1139125 };

function parseTotal(contentRange) {
  if (!contentRange) return null;
  const parts = contentRange.split("/");
  const total = parseInt(parts[1], 10);
  return Number.isFinite(total) ? total : null;
}

export default function GolpoNeerLiveStats() {
  const [stats, setStats] = useState(FALLBACK);
  const [live, setLive] = useState(false);

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
          stories: stories ?? FALLBACK.stories,
          chapters: chapters.length,
          words,
        });
        setLive(true);
      } catch {
        // Keep the known numbers; the strip stays useful without a fetch.
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const items = [
    { value: stats.stories, label: "Stories published" },
    { value: stats.chapters, label: "Chapters published" },
    { value: stats.words, label: "Words published" },
  ];

  return (
    <section id="golponeer-live" className="py-16 md:py-24 bg-[#050505] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-100 tracking-tight">
            GolpoNeer, live.
          </h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            {live ? "Live from golponeer.com" : "Last known counts"}
          </span>
        </div>
        <p className="mt-3 text-neutral-400 text-center font-light max-w-xl mx-auto">
          The story platform I run, counted right now — not a screenshot, not a claim. These numbers update every time this page loads.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {items.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white/[0.02] border border-white/[0.05] px-4 py-6 md:py-8 text-center">
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight">
                {item.value.toLocaleString("en-US")}
              </p>
              <p className="mt-2 text-xs md:text-sm text-neutral-400 font-light">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-neutral-500">
          <a href="https://golponeer.com" target="_blank" rel="noreferrer" className="underline text-neutral-300 hover:text-white">Visit GolpoNeer →</a>
        </p>
      </div>
    </section>
  );
}
