"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-32 h-32 md:w-36 md:h-36 relative">
            <Image
              src="/assets/images/MB-logo.png"
              alt="Minsa Beauty & Aesthetics"
              fill
              className={`object-contain transition-all duration-500 ${
                isScrolled
                  ? "opacity-0 scale-90"
                  : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90"
              }`}
            />
            <Image
              src="/assets/images/minsa-bg.png"
              alt="Minsa Beauty & Aesthetics"
              fill
              className={`object-contain brightness-0 invert absolute inset-0 transition-all duration-500 ${
                isScrolled
                  ? "opacity-100 scale-125"
                  : "opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-125"
              }`}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-white text-sm tracking-wide font-p22-mackinac">
          <li>
            <Link
              href="/"
              className="relative hover:text-gray transition font-medium group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative hover:text-gray transition font-medium group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="relative hover:text-gray transition font-medium group"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="relative hover:text-gray transition font-medium group"
            >
              GALLERY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Desktop Book Now Button */}
        <Link
          href="/booking"
          className="hidden md:block bg-white text-stone-900 px-7 py-3 rounded-full hover:bg-stone-100 hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm font-medium tracking-wide font-p22-mackinac"
        >
          BOOK NOW
        </Link>

        {/* Mobile: Book Now + Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/booking"
            className="bg-white text-stone-900 px-5 py-2 rounded-full hover:bg-stone-100 transition text-xs font-medium tracking-wide font-p22-mackinac"
          >
            BOOK NOW
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm animate-slideDown">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-white text-sm tracking-wide font-p22-mackinac">
            <li className="animate-slideIn" style={{ animationDelay: "75ms" }}>
              <Link
                href="/"
                className="block hover:text-gray transition font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li className="animate-slideIn" style={{ animationDelay: "100ms" }}>
              <Link
                href="/about"
                className="block hover:text-gray transition font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li className="animate-slideIn" style={{ animationDelay: "150ms" }}>
              <Link
                href="/services"
                className="block hover:text-gray transition font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TREATMENTS
              </Link>
            </li>
            <li className="animate-slideIn" style={{ animationDelay: "200ms" }}>
              <Link
                href="/gallery"
                className="block hover:text-gray transition font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}