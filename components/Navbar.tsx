"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background when scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
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
        <Link href="/" className="flex items-center relative">
          <div className="w-36 h-36 relative">
            {/* MB Logo (visible when at top) */}
            <Image
              src="/assets/images/MB-logo.png"
              alt="Minsa Beauty & Aesthetics"
              fill
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            />
            {/* Minsa-bg Logo (visible when scrolled - inverted to white) */}
            <Image
              src="/assets/images/minsa-bg.png"
              alt="Minsa Beauty & Aesthetics"
              fill
              className={`object-contain brightness-0 invert absolute inset-0 transition-all duration-500 ${
                isScrolled ? "opacity-100 scale-125" : "opacity-0 scale-100"
              }`}
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-white text-sm tracking-wide font-p22-mackinac">
          <li>
            <Link href="/" className="hover:text-gray transition font-medium">
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray transition font-medium"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/treatments"
              className="hover:text-gray transition font-medium"
            >
              TREATMENTS
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:text-gray transition font-medium"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray transition font-medium"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Book Appointment Button */}
        <Link
          href="/booking"
          className="bg-black text-primary px-7 py-3 rounded-full hover:bg-gray transition text-sm font-medium tracking-wide font-p22-mackinac"
        >
          BOOK NOW
        </Link>
      </nav>
    </header>
  );
}
