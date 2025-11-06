import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Stasera. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
