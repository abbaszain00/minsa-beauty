// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-32 relative mb-4">
              <Image
                src="/assets/images/minsa-bg.png"
                alt="Minsa Beauty & Aesthetics"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-stone-400 font-light">
              Premium aesthetic treatments in Central London
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-stone-400 font-light">
              35 New Broad Street
              <br />
              London, EC2M 1NH
              <br />
              United Kingdom
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-stone-400 font-light">
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Monday</span>
                <span>11am–8pm</span>
              </div>
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Tuesday</span>
                <span>11am–8pm</span>
              </div>
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Wednesday</span>
                <span>11am–8pm</span>
              </div>
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Thursday</span>
                <span>11am–8pm</span>
              </div>
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Friday</span>
                <span>11am–8pm</span>
              </div>
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Saturday</span>
                <span className="text-stone-500">Closed</span>
              </div>
              <div className="flex justify-between md:justify-start">
                <span className="w-28">Sunday</span>
                <span className="text-stone-500">Closed</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/minsabeautyandaesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-stone-400 hover:text-white transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-light">@minsabeautyandaesthetics</span>
            </a>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 font-light">
          <p>© 2025 Minsa Beauty & Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
