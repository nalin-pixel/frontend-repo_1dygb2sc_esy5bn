import React from 'react';
import { LayoutGrid, Zap, Palette, Shield } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: 'Clean Layout',
    desc: 'Thoughtful spacing and hierarchy keep attention on what matters.',
  },
  {
    icon: Zap,
    title: 'Fast by Default',
    desc: 'Built on a modern stack for instant loads and smooth interactions.',
  },
  {
    icon: Palette,
    title: 'Tasteful Aesthetics',
    desc: 'Soft gradients, refined type, and gentle motion for premium feel.',
  },
  {
    icon: Shield,
    title: 'Production-Ready',
    desc: 'Accessible, responsive, and ready to plug into your backend.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need for a polished launch</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">A minimal, elegant system that helps your brand look its best from day one.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/30">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
