// app/about/page.tsx
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import { Award, Sparkles, MapPin, Target, Shield, Heart } from "lucide-react";
import BrandCarousel from "@/components/BrandCarousel";

export default function About() {
  return (
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/about-image1.jpg"
            alt="About Minsa Beauty & Aesthetics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 leading-tight font-thin text-white">
            About Minsa Beauty & Aesthetics
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto font-light">
            Your trusted destination for professional aesthetic treatments in Central London
          </p>
        </div>
      </section>
      <BrandCarousel />

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-stone-800 mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-stone-700 mb-6 font-light leading-relaxed">
                Welcome to Minsa Beauty & Aesthetics, where expertise meets elegance in the heart of London's financial district. Founded with a passion for enhancing natural beauty and confidence, we've established ourselves as a trusted name in aesthetic treatments and beauty therapy.
              </p>
              
              <p className="text-lg md:text-xl text-stone-700 mb-6 font-light leading-relaxed">
                Located at 35 New Broad Street, just steps from Liverpool Street station, our clinic offers a peaceful sanctuary where busy professionals can escape the hustle of city life and indulge in premium aesthetic treatments.
              </p>

              <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed">
                We believe that everyone deserves to look and feel their best. That's why we combine advanced medical aesthetic procedures with traditional beauty services, all delivered with the highest standards of care and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
              Why Choose Minsa Beauty & Aesthetics
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light">
              We're dedicated to providing exceptional care and outstanding results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">
                Expert Care
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Over 19 years of experience delivering safe, effective aesthetic treatments with proven results.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">
                Premium Products
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                We use only the highest quality products including Profhilo, Seventy Hyal, and Nucleofill.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">
                Prime Location
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Conveniently located in the financial district, just 5 minutes from Liverpool Street station.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">
                Personalized Approach
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Every treatment is tailored to your unique needs and aesthetic goals for natural results.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">
                Safe & Professional
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Certified practitioners following strict safety protocols and industry best practices.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900">
                Client-Focused
              </h3>
              <p className="text-stone-700 font-light leading-relaxed">
                Warm, welcoming environment where your comfort and satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/cta-image.jpg"
            alt="Book Your Consultation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
            Book your consultation today and discover how we can help you achieve your aesthetic goals.
          </p>
          <a
            href="/booking"
            className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition inline-block"
          >
            Book Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
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

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}