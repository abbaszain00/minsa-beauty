import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-36 h-36 relative">
            <Image
              src="/assets/images/MB-logo.png"
              alt="Minsa Beauty & Aesthetics"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-white text-base tracking-wide font-p22-mackinac">
          <li>
            <Link
              href="/"
              className="hover:text-stone-300 transition font-medium"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-stone-300 transition font-medium"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/treatments"
              className="hover:text-stone-300 transition font-medium"
            >
              TREATMENTS
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:text-stone-300 transition font-medium"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-stone-300 transition font-medium"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Book Appointment Button */}
        <Link
          href="/booking"
          className="bg-white text-stone-900 px-8 py-3.5 rounded-full hover:bg-stone-100 transition text-sm font-medium tracking-wide font-p22-mackinac"
        >
          BOOK NOW
        </Link>
      </nav>
    </header>
  );
}
