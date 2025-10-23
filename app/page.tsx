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
      {/* rest of your page */}

      {/* Everything below uses Outfit */}
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
          <div className="max-w-3xl text-white">
            <h1 className="text-7xl mb-6 leading-tight font-thin">
              Minsa Beauty & Aesthetics
            </h1>
            {/* <p className="text-xl mb-8 text-stone-200 max-w-2xl font-light">
                Professional aesthetic treatments by certified practitioners.
                Specializing in advanced skin treatments, anti-aging procedures,
                and beauty therapy.
              </p> */}
            <div className="flex gap-4">
              <button className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-stone-900 transition">
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
            <h2 className="text-5xl font-bold mb-4 text-stone-900">
              Aesthetic Services
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Advanced aesthetic treatments delivered by qualified practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h2 className="text-5xl font-bold mb-6 text-stone-900">
                Expert Aesthetic Care
              </h2>
              <p className="text-xl text-stone-600 mb-8 font-light leading-relaxed">
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
              <button className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition">
                Learn More About Us
              </button>
            </div>
            <div className="relative h-96 lg:h-full">
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

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-600 text-lg mb-2 font-light">Visit Us</p>
          <h2 className="text-5xl font-bold mb-6 text-stone-900">
            Our Location
          </h2>
          <p className="text-2xl text-stone-700 mb-8 font-light">
            35 New Broad Street, London, EC2M 1NH
          </p>
          <div className="flex gap-4 justify-center">
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
          <h2 className="text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
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
              <p className="text-stone-400 font-light">
                Instagram: @minsabeautyandaesthetics
              </p>
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
