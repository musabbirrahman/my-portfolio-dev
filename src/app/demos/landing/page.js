"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  { name: "Butter Croissant", desc: "Flaky, baked fresh every morning.", price: 80, cat: "Breads" },
  { name: "Plain Bread Loaf", desc: "Daily loaf for breakfast and sandwiches.", price: 90, cat: "Breads" },
  { name: "Banana Bread Loaf", desc: "Soft, not too sweet, good with tea.", price: 250, cat: "Breads" },
  { name: "Chocolate Cake Slice", desc: "Rich chocolate, soft sponge, simple frosting.", price: 120, cat: "Cakes" },
  { name: "Vanilla Cupcake", desc: "Light sponge with a simple vanilla top.", price: 70, cat: "Cakes" },
  { name: "Fruit Cake Slice", desc: "Mixed fruit, baked in a small batch.", price: 140, cat: "Cakes" },
  { name: "Chicken Patties (2 pc)", desc: "Golden pastry with a savoury chicken filling.", price: 100, cat: "Savoury" },
  { name: "Egg Tart (2 pc)", desc: "Crisp shell, smooth egg custard.", price: 110, cat: "Savoury" },
  { name: "Vegetable Samosa (2 pc)", desc: "Crisp pastry, spiced vegetable filling.", price: 60, cat: "Savoury" },
];

const faqs = [
  { q: "Do I need an account to order?", a: "No. In a real shop, you would just send a message with what you want. This demo form sends nothing." },
  { q: "Can I order for pickup later today?", a: "Yes, in a real shop you would say the time in your message, and the shop would confirm by message." },
  { q: "Are the prices real?", a: "No, these are demo example prices. A real shop would set its own prices here." },
  { q: "Do you deliver?", a: "This demo is pickup only, to keep it simple. Delivery would be a separate section in a real site." },
];

export default function LandingDemo() {
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const shown = filter === "All" ? products : products.filter((p) => p.cat === filter);
  const total = Object.entries(order).reduce((sum, [name, qty]) => {
    const item = products.find((p) => p.name === name);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const orderText = Object.entries(order).filter(([, qty]) => qty > 0).map(([name, qty]) => `${qty}x ${name}`).join(", ");

  function add(name) {
    setOrder((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  }
  function remove(name) {
    setOrder((prev) => {
      const next = { ...prev };
      if (!next[name]) return prev;
      next[name] -= 1;
      if (next[name] <= 0) delete next[name];
      return next;
    });
  }

  return (
    <main className="bg-[#fdf8f0] text-neutral-900 min-w-0">
      <div className="bg-card border-b border-hairline px-4 py-3 text-center">
        <p className="text-sm text-ink-soft">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">Demo · Fictional bakery — </span>
          prices and hours below are examples, not a real shop.
        </p>
      </div>

      {/* Way out (fixed 2026-11-14): see the layout-fix page — demo pages
          had no exit at the top. */}
      <p className="max-w-6xl mx-auto px-4 sm:px-6 pt-6"><Link href="/" className="text-sm font-bold text-ink underline underline-offset-4">← Back to portfolio</Link></p>
      <header className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-2xl font-extrabold tracking-tight">Shonar Bakery</p>
          <p className="text-sm text-neutral-500">Jamalpur — demo bakery</p>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm font-medium">
          <a href="#menu" className="px-4 py-2 rounded-full bg-white border border-neutral-200">Menu</a>
          <a href="#order" className="px-4 py-2 rounded-full bg-white border border-neutral-200">Your order</a>
          <a href="#faq" className="px-4 py-2 rounded-full bg-white border border-neutral-200">FAQ</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-neutral-900 text-white">Message us</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="rounded-3xl bg-neutral-900 text-white px-6 sm:px-10 py-10 sm:py-14">
          <p className="text-sm font-bold text-amber-300">Today&apos;s demo offer: buy 2 croissants, get 1 free — demo offer only.</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-tight max-w-2xl">Fresh bread every morning, in Jamalpur.</h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">Simple bakery food, baked daily, at prices a neighbourhood shop can actually keep. Pick from the menu, build your order below, and send a message. No app, no account, no call needed.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-6 py-3 rounded-full bg-amber-400 text-neutral-900 font-bold">See the menu</a>
            <a href="#order" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 font-medium">Build your order</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg text-center">
            <div><p className="text-2xl font-extrabold">6am</p><p className="text-xs text-neutral-400">Baking starts</p></div>
            <div><p className="text-2xl font-extrabold">9</p><p className="text-xs text-neutral-400">Menu items</p></div>
            <div><p className="text-2xl font-extrabold">7 days</p><p className="text-xs text-neutral-400">Open every day</p></div>
          </div>
        </div>
      </section>

      <section id="menu" className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Today&apos;s menu</h2>
        <p className="mt-2 text-neutral-500">Filter by type, then add items to your order. Example prices only.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["All", "Breads", "Cakes", "Savoury"].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-bold ${filter === cat ? "bg-neutral-900 text-white" : "bg-white border border-neutral-200"}`}>{cat}</button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shown.map((item) => (
            <article key={item.name} className="bg-white rounded-2xl border border-neutral-200 p-5 flex flex-col gap-2 min-w-0 hover:shadow-md transition-shadow">
              <span className="w-fit px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">{item.cat}</span>
              <h3 className="font-bold text-lg leading-snug">{item.name}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed flex-grow">{item.desc}</p>
              <div className="flex items-center justify-between gap-2 mt-2">
                <p className="font-bold">৳{item.price}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => remove(item.name)} aria-label={`Remove ${item.name}`} className="w-9 h-9 rounded-full bg-neutral-100 font-bold">−</button>
                  <span className="w-6 text-center font-bold">{order[item.name] || 0}</span>
                  <button onClick={() => add(item.name)} aria-label={`Add ${item.name}`} className="w-9 h-9 rounded-full bg-neutral-900 text-white font-bold">+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="order" className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold">Your order</h2>
          {total === 0 ? (
            <p className="mt-3 text-neutral-500">Nothing added yet. Use the + buttons in the menu above.</p>
          ) : (
            <div className="mt-4">
              <p className="text-neutral-700 leading-relaxed">{orderText}</p>
              <p className="mt-3 text-xl font-extrabold">Total: ৳{total} (demo total)</p>
              <p className="mt-2 text-sm text-neutral-500">Copy this line into your message, in a real shop. This demo does not send it anywhere.</p>
              <button onClick={() => setOrder({})} className="mt-4 px-5 py-2 rounded-full bg-neutral-100 font-bold text-sm">Clear order</button>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-neutral-200 p-5"><h3 className="font-bold">Baked daily</h3><p className="mt-2 text-sm text-neutral-500 leading-relaxed">Bread and cakes are baked in the morning, not kept for days.</p></div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5"><h3 className="font-bold">Simple prices</h3><p className="mt-2 text-sm text-neutral-500 leading-relaxed">Every price is shown on the menu, before you message.</p></div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5"><h3 className="font-bold">Message to order</h3><p className="mt-2 text-sm text-neutral-500 leading-relaxed">No app, no account, no call needed. Send a message with what you want.</p></div>
        </div>
      </section>

      <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Questions, answered</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-5 py-4 font-bold flex justify-between gap-4">
                <span>{faq.q}</span><span>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div><h2 className="text-2xl font-extrabold">Visit us</h2><p className="mt-3 text-neutral-500 leading-relaxed">Jamalpur town — demo address only, not a real shop location.</p><p className="mt-2 text-neutral-500">Open daily: 8am to 9pm (demo hours).</p></div>
          <div><h2 className="text-2xl font-extrabold">How to order</h2><ol className="mt-3 space-y-2 text-neutral-600 list-decimal list-inside"><li>Pick items from the menu above.</li><li>Build your order and check the total.</li><li>Send a message with the items and your time.</li><li>We confirm by message, and you collect.</li></ol></div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold">Message us</h2>
          <p className="mt-2 text-neutral-300">Demo form only — it does not send anything, and it does not store your message. Your order line, if any, is: {orderText || "none yet"}.</p>
          {sent ? (
            <p className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-4">Demo message received on this page only. In a real site, this would go to the shop owner by message.</p>
          ) : (
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label className="block"><span className="text-sm text-neutral-300">Your name</span><input required className="mt-1 w-full rounded-xl bg-white text-neutral-900 px-4 py-3 min-w-0" placeholder="Your name" /></label>
              <label className="block"><span className="text-sm text-neutral-300">What do you want?</span><input required defaultValue={orderText} className="mt-1 w-full rounded-xl bg-white text-neutral-900 px-4 py-3 min-w-0" placeholder="e.g. 2 croissants" /></label>
              <button type="submit" className="sm:col-span-2 px-6 py-3 rounded-full bg-amber-400 text-neutral-900 font-bold w-fit">Send demo message</button>
            </form>
          )}
        </div>
        <p className="mt-6 text-center text-sm text-ink-faint"><Link href="/" className="underline">Back to portfolio</Link> · Demo by Musabbir Rahman</p>
      </section>
    </main>
  );
}
