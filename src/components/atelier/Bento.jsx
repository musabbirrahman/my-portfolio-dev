"use client";

/* Engineering Philosophy — asymmetric 4-tile bento (demo 2026-11-14).
 * How he works, without repeating his bio. The Async tile carries
 * the approved Step 4 protocol (Written Scope → Staging Link →
 * Verified Ship); the AI tile is honest about the method. */

const TILES = [
  {
    n: "01",
    title: "Bilingual & Mobile-First Craft",
    body: "Engineered for real-world networks and budget Android viewports — 320px upward — with native typographic care for both English and Bangla. Long titles, conjuncts, and small screens are handled, not hoped for.",
    span: "lg:col-span-2",
  },
  {
    n: "02",
    title: "Edge-First Stack",
    body: "Chosen for speed, low latency, and zero server bloat.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Turso", "Cloudflare Workers", "Vercel"],
    span: "",
  },
  {
    n: "03",
    title: "AI-Native Execution",
    body: "AI-accelerated development workflows, paired with rigorous manual QA on physical devices — production software in days, not quarters.",
    span: "",
  },
  {
    n: "04",
    title: "Async, Written Workflow",
    body: "No calls, no meetings. The whole job runs in writing, in three steps.",
    steps: ["01 — Written Brief & Scope Lock", "02 — Staging Link on Real Viewports", "03 — Zero-Meeting Iteration Until Verified"],
    span: "lg:col-span-2",
  },
];

export default function Bento() {
  return (
    <section id="approach" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">Engineering Philosophy</p>
      <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        How the work gets <em className="font-serif font-medium italic">done.</em>
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t) => (
          <div
            key={t.n}
            className={`atelier-surface rounded-2xl border border-hairline bg-card p-6 shadow-[0_8px_30px_rgba(17,17,16,0.04)] ${t.span}`}
          >
            <p className="font-mono text-xs font-bold text-signal">{t.n}</p>
            <h3 className="mt-3 text-xl font-extrabold tracking-[-0.02em] text-ink">{t.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t.body}</p>
            {t.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-hairline bg-paper px-3 py-1 font-mono text-[11px] font-medium text-ink-soft">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {t.steps && (
              <ol className="mt-4 space-y-2">
                {t.steps.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <span className="text-signal" aria-hidden="true">→</span> {s}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
