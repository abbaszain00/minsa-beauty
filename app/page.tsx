// app/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import BrandCarousel from "@/components/BrandCarousel";
import CTASection from "@/components/CTASection";

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
              <a
                href="https://www.treatwell.co.uk/place/minsa-beauty-and-aesthetics-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition inline-block"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-stone-900 transition-all duration-300"
              >
                View Treatments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* <p className="text-stone-600 text-lg mb-2 font-light">
              Our Treatments
            </p> */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
              Most Popular Treatments
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
                Our Liverpool St. Clinic
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
                src="/assets/images/london-cityscape.jpg"
                alt="Liverpool Street London - Financial District"
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
            <p className="text-stone-600 text-lg mb-2 font-light">
              Client Reviews
            </p>
            <h2 className="text-5xl font-bold mb-4 text-stone-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Real experiences from our valued clients
            </p>
          </div>

          <TestimonialCarousel />

          {/* Google Reviews CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/search/Minsa+Beauty+%26+Aesthetics+35+New+Broad+Street+London"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-stone-800 font-semibold hover:text-stone-600 transition"
            >
              Read more reviews on Google
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <BrandCarousel />

      {/* Location Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-600 text-lg mb-2 font-light">Visit Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
            Our Location
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 mb-8 font-light">
            35 New Broad Street, London, EC2M 1NH
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=35+New+Broad+Street,+London,+EC2M+1NH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition"
            >
              Get Directions
            </a>
            <a
              href="https://wa.me/447969488545"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-stone-800 text-stone-800 px-8 py-4 rounded-full text-lg hover:bg-stone-800 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform Your Look Today"
        description="Discover our range of premium treatments"
      />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
