"use client";

/* The Sequence — an engineering ledger (LotM part 2, demo 2026-11-14).
 * Skills as a progression, reading from foundational craft up to
 * AI-native product execution. To an outsider it is structured
 * seniority; to a fan it is the Beyonder path. The top rung says
 * "AI-native product execution" — never "full-stack" (honesty rule).
 * The rungs skip even numbers the way the brief wrote them (9, 7, 5,
 * 3); if a fan asks where 8, 6, 4 went, that is a fair question. */

const RUNGS = [
  {
    n: "9",
    title: "Foundation",
    body: "Semantic HTML5, CSS Grid/Flexbox, TypeScript, and 12-viewport mobile QA.",
    tags: ["HTML5", "CSS Grid", "Flexbox", "TypeScript", "12-Viewport QA"],
  },
  {
    n: "7",
    title: "Interface & Motion",
    body: "React, Next.js, Tailwind CSS, Framer Motion, and bilingual Bangla/English typography.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Bangla / English Type"],
  },
  {
    n: "5",
    title: "Edge & Persistence",
    body: "Supabase, Turso, Cloudflare Workers, payment gateways, and automated Telegram bots.",
    tags: ["Supabase", "Turso", "Cloudflare Workers", "bKash / Nagad", "Telegram"],
  },
  {
    n: "3",
    title: "AI-Native Architecture",
    body: "Gemini API orchestration, rapid zero-to-live MVP execution, and live product operations.",
    tags: ["Gemini API", "Zero-to-Live MVP", "Live Operations"],
  },
];

export default function Sequence() {
  return (
    <section id="sequence" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">The Sequence</p>
      <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        From foundation to <em className="font-serif font-medium italic">execution.</em>
      </h2>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
        Reading from foundational craft up to AI-native product execution — each rung is something shipped, not something studied.
      </p>
      <div className="relative mt-10">
        <span aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-px bg-hairline sm:left-[35px]" />
        <ol className="space-y-10">
          {RUNGS.map((r) => (
            <li key={r.n} className="relative flex gap-5 sm:gap-8">
              <span className="sequence-num relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-hairline bg-card font-mono text-xl font-bold text-ink shadow-[0_4px_16px_rgba(17,17,16,0.06)] sm:h-[72px] sm:w-[72px] sm:text-2xl">
                {r.n}
              </span>
              <div className="min-w-0 pt-1 sm:pt-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                  Sequence {r.n}
                </p>
                <h3 className="mt-1 text-xl font-extrabold tracking-[-0.02em] text-ink sm:text-2xl">{r.title}</h3>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{r.body}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full border border-hairline bg-card px-3 py-1 font-mono text-[11px] font-medium text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
