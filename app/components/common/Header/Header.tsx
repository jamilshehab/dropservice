"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* glass background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-black/5" />

      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md" />
          <span className="font-semibold tracking-tight text-lg">
            YourBrand
          </span>
        </Link>

        {/* nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="#about" className="hover:text-black transition">
            Why Choose Us
          </Link>

          <Link href="#services" className="hover:text-black transition">
            Services
          </Link>
          <Link href="#cta" className="hover:text-black transition">
            Get In Touch
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            className="text-sm px-5 py-2.5 rounded-xl bg-black text-white hover:bg-black/90 transition shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
