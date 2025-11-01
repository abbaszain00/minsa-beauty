// app/page.tsx
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero.jpg"
            alt="Minsa Beauty & Aesthetics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight font-thin">
              Minsa Beauty & Aesthetics
            </h1>
            {/* <p className="text-lg md:text-xl mb-8 text-stone-200 max-w-2xl font-light mx-auto md:mx-0">
              Professional aesthetic treatments by certified practitioners.
              Specializing in advanced skin treatments, anti-aging procedures,
              and beauty therapy.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-stone-900 transition-all duration-300">
                View Treatments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-600 text-lg mb-2 font-light">
              Our Treatments
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
              Aesthetic Services
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Advanced aesthetic treatments delivered by qualified practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Anti-Wrinkle */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/facials.jpg"
                  alt="Anti-Wrinkle Injections"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">
                  Anti-Wrinkle Injections
                </h3>
                <p className="text-stone-600 mb-4 font-light">
                  Botox and anti-wrinkle treatments to smooth fine lines and
                  prevent aging signs.
                </p>
                <button className="text-stone-800 font-medium hover:text-stone-600 transition">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 2 - Dermal Fillers */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/treatments-1.jpg"
                  alt="Dermal Fillers"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">
                  Dermal Fillers
                </h3>
                <p className="text-stone-600 mb-4 font-light">
                  Premium fillers including Profhilo, Seventy Hyal for natural
                  volume and hydration.
                </p>
                <button className="text-stone-800 font-medium hover:text-stone-600 transition">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 3 - Skin Boosters */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/treatments-2.jpg"
                  alt="Skin Boosters"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">
                  Skin Boosters
                </h3>
                <p className="text-stone-600 mb-4 font-light">
                  Lumi Eyes, PRP, and mesotherapy for deep hydration and radiant
                  skin.
                </p>
                <button className="text-stone-800 font-medium hover:text-stone-600 transition">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 4 - Microblading */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/treatments-3.jpg"
                  alt="Microblading"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">
                  Microblading
                </h3>
                <p className="text-stone-600 mb-4 font-light">
                  Semi-permanent eyebrow enhancement for natural, defined brows.
                </p>
                <button className="text-stone-800 font-medium hover:text-stone-600 transition">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 5 - Nucleofill */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/treatments-4.jpg"
                  alt="Nucleofill Treatment"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">
                  Nucleofill
                </h3>
                <p className="text-stone-600 mb-4 font-light">
                  Advanced polynucleotide bio-revitalization for skin
                  regeneration.
                </p>
                <button className="text-stone-800 font-medium hover:text-stone-600 transition">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 6 - Gel Manicures */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/treatments-5.jpg"
                  alt="Gel Manicures"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">
                  Gel Manicures
                </h3>
                <p className="text-stone-600 mb-4 font-light">
                  Long-lasting, chip-free gel manicures in a relaxing
                  environment.
                </p>
                <button className="text-stone-800 font-medium hover:text-stone-600 transition">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-stone-600 text-lg mb-2 font-light">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
                Expert Aesthetic Care
              </h2>
              <p className="text-lg md:text-xl text-stone-600 mb-8 font-light leading-relaxed">
                Minsa Beauty & Aesthetics offers premium aesthetic treatments in
                the heart of London. Our certified practitioners specialize in
                advanced anti-aging procedures and beauty therapies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-stone-800 text-2xl">✓</span>
                  <p className="text-stone-700">
                    Certified aesthetic practitioners with years of experience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stone-800 text-2xl">✓</span>
                  <p className="text-stone-700">
                    Premium products: Profhilo, Seventy Hyal, Nucleofill
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stone-800 text-2xl">✓</span>
                  <p className="text-stone-700">
                    Personalized treatment plans for natural results
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stone-800 text-2xl">✓</span>
                  <p className="text-stone-700">
                    Central London location in the financial district
                  </p>
                </div>
              </div>
              {/* <button className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition w-full sm:w-auto">
                Learn More About Us
              </button> */}
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="/assets/images/about-image1.jpg"
                alt="About Minsa Beauty & Aesthetics"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-stone-600 text-lg mb-2 font-light">Client Reviews</p>
            <h2 className="text-5xl font-bold mb-4 text-stone-900">What Our Clients Say</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Real experiences from our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 - Lyuba */}
            <div className="bg-stone-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 mb-6 italic font-light">
                This is my second visit with Shazia and she gets better with every visit. My nails have never looked and felt good. She will go far and beyond to do the best service. Will definitely recommend and keep coming back.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center text-stone-700 font-semibold">
                  LM
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-stone-900">Lyuba M.</p>
                  <p className="text-stone-600 text-sm">Google Review</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Monal */}
            <div className="bg-stone-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 mb-6 italic font-light">
                Went to get my eyebrows threaded. I was asked how I&apos;d like them done and that&apos;s exactly how they turned out - rare to have such an experience. I felt Shazia really cared, 10/10 would go back again.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center text-stone-700 font-semibold">
                  MS
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-stone-900">Monal S.</p>
                  <p className="text-stone-600 text-sm">Google Review</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Kirtley */}
            <div className="bg-stone-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 mb-6 italic font-light">
                Been a few times at this place for different treatments and def will be back again. Good service and lovely beautician!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center text-stone-700 font-semibold">
                  KO
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-stone-900">Kirtley O.</p>
                  <p className="text-stone-600 text-sm">Google Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/maps/search/Minsa+Beauty+%26+Aesthetics+35+New+Broad+Street+London"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-stone-800 font-semibold hover:text-stone-600 transition"
            >
              Read more reviews on Google
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-600 text-lg mb-2 font-light">Visit Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
            Our Location
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 mb-8 font-light">
            35 New Broad Street, London, EC2M 1NH
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition">
              Get Directions
            </button>
            <button className="border-2 border-stone-800 text-stone-800 px-8 py-4 rounded-full text-lg hover:bg-stone-800 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/cta-image.jpg"
            alt="Book Your Treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
            Book your consultation today and discover personalized aesthetic
            treatments tailored to your needs.
          </p>
          <button className="bg-white text-stone-900 px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-100 transition">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
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
    </div>
  );
}
