"use client";

import { useState } from "react";

/* Selected Work — full-width editorial showcases (demo 2026-11-14).
 * One flagship per showcase: a tactile device frame, a 3-line story
 * (Problem → Engineering Decision → Live Outcome), and an expandable
 * "Inspect Blueprint" drawer styled as engraved blueprint paper with
 * a system diagram of nodes joined by fine lines. Facts only — the
 * "12-genre" and "sub-second" claims from the brief are NOT printed
 * (unverified). The Responsive Lab links to the real demos already on
 * the site. LotM part 2: each showcase carries a Major Arcana name —
 * I The Storyteller, II The Merchant, III The Artisan. */

const SHOWCASES = [
  {
    id: "01",
    arcana: "I — The Storyteller",
    title: "GolpoNeer",
    url: "https://golponeer.com",
    tag: "Consumer literary platform — founded, architected, operated",
    problem:
      "Bangla readers had no calm, modern home for stories — and writers had nowhere free to publish chapter by chapter.",
    decision:
      "A bilingual Bangla/English reading engine on Supabase, with a genre taxonomy, chapter-by-chapter publishing, and a prerender layer so Google can read a client-side app.",
    outcome:
      "38 stories, 511 chapters, 1,139,932 words live — reading and writing free, forever.",
    stack: ["Vite", "React", "TypeScript", "Supabase", "Vercel", "Prerender"],
    arch: "Vite SPA behind a server-built prerender for crawlers (full chapter text stays out of the index by decision — only a ~300-char excerpt). Stories, chapters and keepsakes live in Supabase; covers go through Cloudflare image resizing. Turnstile CAPTCHA on auth. Verified by hand on twelve viewports, 320 to 1920.",
    frame: "reader",
  },
  {
    id: "02",
    arcana: "II — The Merchant",
    title: "Sweet Cravings",
    url: "https://sweetcravingsrajshahi.com",
    tag: "High-speed commercial infrastructure — a dessert store in Rajshahi",
    problem:
      "A homemade dessert shop taking orders over chat needed a real storefront: menu, checkout, payment proof, and kitchen alerts.",
    decision:
      "Next.js storefront on Cloudflare Workers with Turso at the edge, bKash/Nagad payment verification by transaction ID, and automated Telegram alerts to the kitchen.",
    outcome:
      "Live with the real menu and a full payment flow — orders, payment checks, and kitchen alerts running.",
    stack: ["Next.js", "Cloudflare Workers", "Turso", "bKash / Nagad", "Telegram"],
    arch: "Next.js 14 + OpenNext on Cloudflare Workers, Turso for orders, env-based admin, tiered daily order caps and a loyalty reward. Order codes are random 5-digit SC-XXXXX, checked unique before saving. Checkout calls the kitchen notifier; payment is verified by TrxID before the order is accepted.",
    frame: "store",
  },
  {
    id: "03",
    arcana: "III — The Artisan",
    title: "Responsive Lab",
    url: "/demos/layout-fix",
    tag: "Hands-on engineering demo — how CSS architecture prevents overflow",
    problem:
      "Real layouts break on real phones: long titles stretch grids, buttons fall off-screen, tap targets go unreachable.",
    decision:
      "A lab of before/after demos where visitors drag a viewport handle and watch the same layout fail, then hold — min-w-0 grid children, overflow guards, tap targets that stay reachable.",
    outcome:
      "Every fix in the lab is a fix that shipped on a live site — including the 320px card-thumb and library cover-crop fixes on GolpoNeer.",
    stack: ["CSS Grid", "Tailwind CSS", "12-Viewport Manual QA"],
    arch: "Two live demos: a landing page that overflowed at 390px (fixed with min-w-0 + break-words) and a layout-fix demo that proves the same page at 320–1920. The sweep runs on twelve widths: 320, 360, 390, 430, 600, 768, 820, 834, 1024, 1280, 1440, 1920.",
    frame: "lab",
  },
];

function Frame({ kind }) {
  if (kind === "reader") {
    return (
      <div className="rounded-xl border border-hairline bg-paper p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">golponeer.com · reader</p>
        <p className="mt-4 font-serif text-2xl leading-snug text-ink">শেষ পাতা</p>
        <p className="mt-1 font-serif text-sm italic text-ink-soft">The Last Leaf — O. Henry, translated by Musabbir Rahman</p>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-full rounded bg-muted" />
          <div className="h-2 w-11/12 rounded bg-muted" />
          <div className="h-2 w-4/5 rounded bg-muted" />
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-hairline pt-3">
          <span className="font-mono text-[11px] text-ink-faint">পর্ব ১ · 3 min read</span>
          <span className="rounded-full bg-signal px-3 py-1 text-[11px] font-bold text-white">Start reading →</span>
        </div>
      </div>
    );
  }
  if (kind === "store") {
    return (
      <div className="rounded-xl border border-hairline bg-paper p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">sweetcravingsrajshahi.com · checkout</p>
        <div className="mt-4 space-y-3">
          {[
            ["Dream Cake", "৳750"],
            ["Caramel Delights", "৳400"],
            ["Chocolate Royale", "৳650"],
          ].map(([name, price]) => (
            <div key={name} className="flex items-center justify-between rounded-lg border border-hairline bg-card px-3 py-2.5">
              <span className="text-sm font-semibold text-ink">{name}</span>
              <span className="font-mono text-sm font-bold text-ink">{price}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <span className="flex-1 rounded-full bg-signal py-2 text-center text-[12px] font-bold text-white">bKash</span>
          <span className="flex-1 rounded-full border border-hairline py-2 text-center text-[12px] font-bold text-ink">Nagad</span>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-hairline bg-paper p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">responsive lab · 320px — 1920px</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["320", "768", "1440"].map((w) => (
          <div key={w} className="rounded-lg border border-hairline bg-card p-2 text-center">
            <div className="mx-auto h-8 w-full rounded bg-muted" />
            <p className="mt-2 font-mono text-[11px] font-bold text-ink">{w}px ✓</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        One layout, twelve widths — zero sideways scroll.
      </p>
    </div>
  );
}

function Showcase({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="border-t border-hairline py-12 first:border-t-0 first:pt-0 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="font-mono text-sm font-bold text-signal">{s.arcana}</p>
          <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">{s.title}</h3>
          <p className="mt-2 text-sm font-medium text-ink-soft">{s.tag}</p>
          <dl className="mt-8 space-y-5">
            {[
              ["Problem", s.problem],
              ["Engineering Decision", s.decision],
              ["Live Outcome", s.outcome],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint pt-1">{k}</dt>
                <dd className="text-[15px] leading-relaxed text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={s.url}
              {...(s.url.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper transition-transform hover:scale-[1.03]"
            >
              {s.url.startsWith("http") ? "Visit live site ↗" : "Open the lab ↗"}
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink-faint"
            >
              Inspect Blueprint {open ? "−" : "+"}
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <Frame kind={s.frame} />
          <div className="flex flex-wrap gap-2">
            {s.stack.map((t) => (
              <span key={t} className="rounded-full border border-hairline bg-card px-3 py-1 font-mono text-[11px] font-medium text-ink-soft">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="blueprint-grid mt-8 rounded-2xl border border-hairline p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">Blueprint — {s.title}</p>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#E8F1F8]">{s.arch}</p>
          <div className="mt-6 flex flex-wrap items-center gap-y-3">
            {s.stack.map((t, i) => (
              <span key={t} className="flex items-center">
                {i > 0 && <span aria-hidden="true" className="mx-1 h-px w-5 bg-white/40 sm:w-8" />}
                <span className="rounded-md border border-white/30 px-3 py-1.5 font-mono text-[11px] font-medium text-[#E8F1F8]">
                  {t}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Showcases() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">Selected Work</p>
      <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        Three flagships. <em className="font-serif font-medium italic">Full stories.</em>
      </h2>
      <div className="mt-10">
        {SHOWCASES.map((s) => (
          <Showcase key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}
