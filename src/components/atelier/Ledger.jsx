"use client";

/* Credentials & Background — a single architectural ledger (demo 2026-11-14).
 * Academic and career details, crisp and dignified, in one horizontal
 * strip — no sprawling timeline cards. */

const PROFILES = [
  { label: "GitHub", href: "https://github.com/musabbirrahman" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/musabbirrahman" },
  { label: "X", href: "https://x.com/MusabbirRahman0" },
  { label: "Medium", href: "https://medium.com/@musabbirrahman" },
  { label: "Resume", href: "/Musabbir_Rahman_Resume.pdf", external: true },
];

export default function Ledger() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">Credentials & Background</p>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
        I&apos;m Musabbir Rahman, an independent builder from Jamalpur, Bangladesh. I design and engineer digital products from zero to live — GolpoNeer, a free bilingual home for Bangla and English stories, and Sweet Cravings, a full ordering website for a real dessert shop in Rajshahi. I learn by building: every product is verified on twelve viewports before it ships, and every line of it is something I can explain. Right now I&apos;m learning backend and taking on small freelance builds.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-card">
        <div className="grid divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Academic</p>
            <p className="mt-3 text-[15px] font-bold leading-snug text-ink">B.Sc. in Computer Science & Engineering</p>
            <p className="mt-1 text-sm text-ink-soft">Brahmaputra International University · 2026 — Present</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Base & Timezone</p>
            <p className="mt-3 text-[15px] font-bold leading-snug text-ink">Jamalpur, Bangladesh · GMT+6</p>
            <p className="mt-1 text-sm text-ink-soft">Built for seamless async collaboration with global teams.</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Profiles</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {PROFILES.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  {...(p.href.startsWith("http") || p.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="text-[15px] font-bold text-ink underline decoration-hairline underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
                >
                  {p.label} ↗
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-soft">Independent builder — AI-assisted, hand-verified.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
