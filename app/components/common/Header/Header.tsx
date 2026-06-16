"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-black/5" />

      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md" />
          <span className="font-semibold tracking-tight text-lg">
            YourBrand
          </span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="https://wa.me/+96181963427"
            target="_blank"
            className="inline-flex bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden relative bg-white/90 backdrop-blur-xl border-b border-black/5">
          <nav className="flex flex-col px-6 py-5 gap-5 text-gray-700">
            <Link
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-black"
            >
              Why Choose Us
            </Link>

            <Link
              href="#services"
              onClick={() => setOpen(false)}
              className="hover:text-black"
            >
              Services
            </Link>

            <Link
              href="#cta"
              onClick={() => setOpen(false)}
              className="hover:text-black"
            >
              Get In Touch
            </Link>

            <Link
              href="https://wa.me/961XXXXXXXX"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-2 bg-color-primary text-white rounded-xl py-3 text-center hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
