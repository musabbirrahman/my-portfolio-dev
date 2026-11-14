"use client";

/* Floating Glass Bottom Dock — the Atelier navigation (demo 2026-11-14).
 * A compact macOS-inspired pill, fixed to the bottom, glassy and out
 * of the way. One thumb on mobile. Resume links to the PDF. Section
 * links are root-relative (/#work, not #work) so they work from the
 * demo pages too — on the lab pages the bare #work anchor has no
 * target and the button does nothing (fixed 2026-11-14). */
const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/Musabbir_Rahman_Resume.pdf", external: true },
];

export default function Dock() {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="atelier-surface flex items-center gap-0.5 rounded-full border border-hairline bg-paper/80 p-1.5 shadow-[0_8px_30px_rgba(17,17,16,0.12)] backdrop-blur-xl sm:gap-1">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-semibold text-ink-soft transition-colors hover:bg-muted hover:text-ink sm:px-4 sm:text-[13px] ${
              l.label === "Resume" ? "hidden min-[400px]:inline-flex" : ""
            }`}
          >
            {l.label}
            {l.external && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
        <a
          href="/#contact"
          className="ml-1 whitespace-nowrap rounded-full bg-signal px-3 py-2 text-[12px] font-bold text-white transition-transform hover:scale-[1.04] sm:px-5 sm:text-[13px]"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
