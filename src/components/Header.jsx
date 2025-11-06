import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/50 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30">
            <Sparkles size={18} />
          </span>
          <span className="text-xl font-semibold tracking-tight">Stasera</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
