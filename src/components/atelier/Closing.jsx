"use client";

import { useState } from "react";

/* Distraction-Free Closing — the Atelier (demo 2026-11-14).
 * An oversized edge-to-edge wordmark, a one-click email copy button
 * (musabbirrahman.dev@gmail.com — confirmed his, 2026-11-14), and a
 * clean 3-field inquiry card wired to the same Web3Forms endpoint
 * the live contact form already uses. The old scope-builder form
 * stays in Contact.jsx, unused in this demo. */

const EMAIL = "musabbirrahman.dev@gmail.com";
const WEB3FORMS_KEY = "381a0fb1-c048-4171-904e-8f74ca3a6ca5";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper transition-transform hover:scale-[1.03]"
      >
        {copied ? "Copied to clipboard ✓" : "Copy email"}
      </button>
      <a href={`mailto:${EMAIL}`} className="font-mono text-sm text-ink-soft underline decoration-hairline underline-offset-4 hover:text-ink">
        {EMAIL}
      </a>
    </div>
  );
}

function InquiryCard() {
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [brief, setBrief] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !brief.trim()) {
      setError("Please fill in all three fields first.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("subject", `Portfolio inquiry — ${name.trim()}`);
      fd.append("name", name.trim());
      fd.append("contact", contact.trim());
      fd.append("message", brief.trim());
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) setState("sent");
      else {
        setState("error");
        setError("Something went wrong sending it — please email directly instead.");
      }
    } catch {
      setState("error");
      setError("Something went wrong sending it — please email directly instead.");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-hairline bg-card p-6 sm:p-8">
        <p className="text-2xl font-extrabold tracking-[-0.02em] text-ink">Brief received.</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          Thanks, {name.trim().split(" ")[0]} — I reply in writing, usually within a day. No calls, no meetings.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-hairline bg-card p-6 sm:p-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Start a project</p>
      <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">What are you building?</h3>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="inq-name" className="text-sm font-semibold text-ink">Name</label>
          <input
            id="inq-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="inq-contact" className="text-sm font-semibold text-ink">Email or WhatsApp</label>
          <input
            id="inq-contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="How do I reach you?"
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="inq-brief" className="text-sm font-semibold text-ink">Brief description</label>
          <textarea
            id="inq-brief"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            placeholder="What are you building, and when do you need it?"
            rows={4}
            className="mt-1.5 w-full resize-none rounded-xl border border-hairline bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint focus:border-ink-faint focus:outline-none"
          />
        </div>
        {error && <p role="alert" className="text-sm font-medium text-signal">{error}</p>}
        <button
          type="submit"
          disabled={state === "sending"}
          className="w-full rounded-full bg-signal py-4 text-[15px] font-bold text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send the brief →"}
        </button>
        <p className="text-center font-mono text-[11px] text-ink-faint">
          Written only — brief, staging link, then revisions until it works on your device.
        </p>
      </div>
    </form>
  );
}

export default function Closing() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-hairline pb-32 pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p
          aria-hidden="true"
          className="select-none text-center text-[18vw] font-black leading-[0.85] tracking-[-0.04em] text-ink sm:text-[9rem] lg:text-[11rem]"
        >
          MUSABBIR
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
              Let&rsquo;s build it <em className="font-serif font-medium italic">from zero to live.</em>
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
              A landing page, a storefront, a layout that finally holds on every phone — send a brief and I&rsquo;ll reply in writing.
            </p>
            <div className="mt-6">
              <CopyEmail />
            </div>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              Jamalpur, Bangladesh · GMT+6 · Open for projects
            </p>
          </div>
          <InquiryCard />
        </div>
      </div>
    </footer>
  );
}
