import Link from "next/link";

/* Architectural Capabilities Matrix (Step 3, 2026-11-13): replaces the
 * scrolling SkillsMarquee. Same facts, presented as proof instead of
 * a ticker — every layer below is running in a real, live project,
 * and each column names the project that proves it.
 *
 * React, TypeScript, and Framer Motion were added 2026-11-13 on the
 * owner's call, after Muse verified them in the shipped repos:
 * React runs in all three projects, TypeScript in GolpoNeer
 * (30 .tsx files) and Sweet Cravings (104 .ts/.tsx files), Framer
 * Motion in 8 files of this portfolio. That satisfies the old
 * marquee's "stay out until a shipped project proves them" rule.
 * Still out, deliberately: Node.js (no Node backend in any project)
 * and DaisyUI (only loaded as a CSS plugin, barely used). */
const layers = [
  {
    id: "01",
    title: "Frontend",
    description: "The pages visitors touch.",
    tech: ["Next.js", "Vite", "React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion"],
    liveIn: [
      { label: "Sweet Cravings (Next.js, TypeScript, React)", href: "/projects/sweetcravings" },
      { label: "GolpoNeer (Vite, React, TypeScript)", href: "/projects/golponeer" },
      { label: "This portfolio (React, Framer Motion)", href: "/" },
    ],
  },
  {
    id: "02",
    title: "Data & Edge",
    description: "Where the stories and the orders live.",
    tech: ["Supabase", "Turso", "Cloudflare Workers", "Vercel"],
    liveIn: [
      { label: "GolpoNeer (Supabase)", href: "/projects/golponeer" },
      { label: "Sweet Cravings (Turso, Cloudflare Workers)", href: "/projects/sweetcravings" },
    ],
  },
  {
    id: "03",
    title: "Quality",
    description: "Checked by hand, on real phones, before delivery.",
    tech: ["12-Viewport Manual QA", "AI-Assisted Development", "Manual Testing"],
    liveIn: [
      { label: "Responsive Lab — the before/after proof", href: "/projects/responsive-lab" },
    ],
  },
];

export default function CapabilitiesMatrix() {
  return (
    <section className="py-16 md:py-24 bg-[#050505] px-6 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight">
            Capabilities, proven live.
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-xl font-light leading-relaxed">
            Every layer below runs in a real project — not a list of things once tried. Each one names the project that proves it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className="flex flex-col bg-white/[0.02] rounded-3xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-500 p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {layer.id}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-neutral-200">
                {layer.title}
              </h3>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed font-light">
                {layer.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6 mb-8">
                {layer.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-[#050505] text-xs font-medium text-neutral-300 border border-white/[0.05] shadow-inner shadow-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/[0.05]">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
                  Live in
                </p>
                <ul className="space-y-2">
                  {layer.liveIn.map((item) => (
                    <li key={item.href + item.label}>
                      <Link href={item.href} className="text-sm font-medium text-neutral-300 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors">
                        {item.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
