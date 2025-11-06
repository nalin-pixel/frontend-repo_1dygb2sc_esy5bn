import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(99,102,241,0.25),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 ring-1 ring-black/5 dark:ring-white/10">
            <Star size={14} className="text-yellow-500" />
            Introducing Stasera — your sleek, modern landing
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            A clean, elegant landing for modern products
          </h1>
          <p className="mt-5 text-neutral-600 dark:text-neutral-300 text-lg max-w-xl">
            Craft a beautiful first impression. Stasera blends refined typography, subtle motion, and tasteful gradients to showcase your product with clarity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
          <div className="relative z-10 aspect-square rounded-2xl bg-white/70 dark:bg-neutral-900/70 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur flex items-center justify-center">
            <div className="p-8 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30" />
              <h3 className="text-xl font-semibold">Designed for polish</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Crisp visuals, balanced spacing, and a delightful aesthetic out of the box.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
