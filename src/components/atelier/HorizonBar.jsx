"use client";

import { useEffect, useState } from "react";

/* Minimal Top Horizon Bar — the Atelier navigation (demo 2026-11-14).
 * Wordmark left; right: availability pulse, Jamalpur BD, a live
 * GMT+6 clock, and the Light/Dark switcher. Sticky, hairline bottom,
 * paper background with a soft blur. */
function useDhakaClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    function tick() {
      setNow(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Dhaka",
        }).format(new Date())
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

/* The realm toggle (LotM part 2): Material World ↔ Above the Gray Fog.
 * The label names the realm; the icon flips the theme. */
function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);
  function flip() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("atelier-theme", next);
    } catch {}
    setTheme(next);
  }
  return (
    <span className="flex items-center gap-2">
      <span className="hidden font-mono text-[11px] text-ink-faint lg:block">
        {theme === "light" ? "Material World" : "Above the Gray Fog"}
      </span>
      <button
        type="button"
        onClick={flip}
        aria-label={theme === "light" ? "Enter Above the Gray Fog" : "Return to the Material World"}
        title={theme === "light" ? "Above the Gray Fog" : "Material World"}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-card text-ink transition-colors hover:border-ink-faint"
      >
      {theme === "light" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
      </button>
    </span>
  );
}

export default function HorizonBar() {
  const time = useDhakaClock();
  return (
    <header className="atelier-surface sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* The wordmark always goes home (fixed 2026-11-14): it used to
            point at #top, an anchor that doesn't exist on the demo
            pages — so the brand was a dead link inside the lab. */}
        <a href="/" className="text-[15px] font-extrabold tracking-[-0.02em] text-ink">
          Musabbir Rahman
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="hidden items-center gap-2 text-xs font-medium text-ink-soft sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot animate-pulse-ring absolute inline-flex h-full w-full rounded-full" />
              <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full" />
            </span>
            Open for projects
          </span>
          <span className="hidden text-xs font-medium text-ink-soft md:block">Jamalpur, BD</span>
          <span className="hidden font-mono text-xs text-ink-soft tabular-nums sm:block">
            {time} GMT+6
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
