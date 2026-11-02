"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  { name: "Butter Croissant", desc: "Flaky, baked fresh every morning.", price: "৳80" },
  { name: "Chocolate Cake Slice", desc: "Rich chocolate, soft sponge, simple frosting.", price: "৳120" },
  { name: "Chicken Patties (2 pc)", desc: "Golden pastry with a savoury chicken filling.", price: "৳100" },
  { name: "Banana Bread Loaf", desc: "Soft, not too sweet, good with tea.", price: "৳250" },
  { name: "Plain Bread Loaf", desc: "Daily loaf for breakfast and sandwiches.", price: "৳90" },
  { name: "Egg Tart (2 pc)", desc: "Crisp shell, smooth egg custard.", price: "৳110" },
];

export default function LandingDemo() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-[#fdf8f0] text-neutral-900 min-w-0">
      <div className="bg-amber-100 border-b border-amber-200 px-4 py-3 text-center">
        <p className="text-xs sm:text-sm text-amber-900">
          Demo landing page — fictional business, built for portfolio only. Prices and hours below are examples, not a real shop.
        </p>
      </div>

      <header className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-2xl font-extrabold tracking-tight">Shonar Bakery</p>
          <p className="text-sm text-neutral-500">Jamalpur — demo bakery</p>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm font-medium">
          <a href="#menu" className="px-4 py-2 rounded-full bg-white border border-neutral-200">Menu</a>
          <a href="#visit" className="px-4 py-2 rounded-full bg-white border border-neutral-200">Visit us</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-neutral-900 text-white">Message us</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-3xl bg-neutral-900 text-white px-6 sm:px-10 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-2xl">
            Fresh bread every morning, in Jamalpur.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
            Simple bakery food, baked daily, at prices a neighbourhood shop can actually keep. No complicated ordering, just send a message.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-6 py-3 rounded-full bg-amber-400 text-neutral-900 font-bold">See the menu</a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 font-medium">Message us</a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">Open daily, 8am to 9pm — demo hours.</p>
        </div>
      </section>

      <section id="menu" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Today&apos;s menu</h2>
        <p className="mt-2 text-neutral-500">Example items and prices. A real shop would update this list when items sell out.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((item) => (
            <article key={item.name} className="bg-white rounded-2xl border border-neutral-200 p-5 flex flex-col gap-2 min-w-0">
              <h3 className="font-bold text-lg leading-snug">{item.name}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed flex-grow">{item.desc}</p>
              <p className="font-bold">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-bold">Baked daily</h3>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">Bread and cakes are baked in the morning, not kept for days.</p>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-bold">Simple prices</h3>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">Every price is shown on the menu, before you message.</p>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <h3 className="font-bold">Message to order</h3>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">No app, no account, no call needed. Send a message with what you want.</p>
          </div>
        </div>
      </section>

      <section id="visit" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-extrabold">Visit us</h2>
            <p className="mt-3 text-neutral-500 leading-relaxed">Jamalpur town — demo address only, not a real shop location.</p>
            <p className="mt-2 text-neutral-500 leading-relaxed">Open daily: 8am to 9pm (demo hours).</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">How to order</h2>
            <ol className="mt-3 space-y-2 text-neutral-600 list-decimal list-inside">
              <li>Pick items from the menu above.</li>
              <li>Send a message with the items and your time.</li>
              <li>We confirm by message, and you collect.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold">Message us</h2>
          <p className="mt-2 text-neutral-300">Demo form only — it does not send anything, and it does not store your message.</p>
          {sent ? (
            <p className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-4">
              Demo message received on this page only. In a real site, this would go to the shop owner by message.
            </p>
          ) : (
            <form
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block">
                <span className="text-sm text-neutral-300">Your name</span>
                <input required className="mt-1 w-full rounded-xl bg-white text-neutral-900 px-4 py-3 min-w-0" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm text-neutral-300">What do you want?</span>
                <input required className="mt-1 w-full rounded-xl bg-white text-neutral-900 px-4 py-3 min-w-0" placeholder="e.g. 2 croissants" />
              </label>
              <button type="submit" className="sm:col-span-2 px-6 py-3 rounded-full bg-amber-400 text-neutral-900 font-bold w-fit">
                Send demo message
              </button>
            </form>
          )}
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">
          <Link href="/#projects" className="underline">Back to portfolio</Link> · Demo by Musabbir Rahman
        </p>
      </section>
    </main>
  );
}
