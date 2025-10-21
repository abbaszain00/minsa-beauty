import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero-image1.jpg"
            alt="Minsa Beauty & Aesthetics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-3xl text-white">
  <h1 className="text-7xl font-bold mb-6 leading-tight">
    Minsa Beauty & Aesthetics
  </h1>
            <p className="text-xl mb-8 text-stone-200 max-w-2xl font-light">
              Professional aesthetic treatments by certified practitioners. Specializing in advanced skin treatments, anti-aging procedures, and beauty therapy.
            </p>
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
            <p className="text-stone-600 text-lg mb-2 font-light">Our Treatments</p>
            <h2 className="text-5xl font-bold mb-4 text-stone-900">Aesthetic Services</h2>
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
                <h3 className="text-2xl font-bold mb-3 text-stone-900">Anti-Wrinkle Injections</h3>
                <p className="text-stone-600 mb-4 font-light">
                  Botox and anti-wrinkle treatments to smooth fine lines and prevent aging signs.
                </p>
                <button className="text-stone-800 font-semibold hover:text-stone-600">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 2 - Dermal Fillers */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/about-image.jpg"
                  alt="Dermal Fillers"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">Dermal Fillers</h3>
                <p className="text-stone-600 mb-4 font-light">
                  Premium polynucleotide fillers including Profhilo, Seventy Hyal 2000, and more.
                </p>
                <button className="text-stone-800 font-semibold hover:text-stone-600">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 3 - Skin Boosters */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/oil-massage.jpg"
                  alt="Skin Boosters"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">Skin Boosters</h3>
                <p className="text-stone-600 mb-4 font-light">
                  Advanced skin boosters including Lumi Eyes, Prp, and Meso therapy treatments.
                </p>
                <button className="text-stone-800 font-semibold hover:text-stone-600">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 4 - Microblading */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/reflexology.jpg"
                  alt="Microblading"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">Microblading</h3>
                <p className="text-stone-600 mb-4 font-light">
                  Semi-permanent eyebrow enhancement for naturally fuller brows.
                </p>
                <button className="text-stone-800 font-semibold hover:text-stone-600">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 5 - Nucleofill */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/facials.jpg"
                  alt="Nucleofill"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">Nucleofill</h3>
                <p className="text-stone-600 mb-4 font-light">
                  Advanced bio-revitalization treatment for skin rejuvenation.
                </p>
                <button className="text-stone-800 font-semibold hover:text-stone-600">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Service 6 - Gel Manicures */}
            <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80">
                <Image
                  src="/assets/images/reflexology.jpg"
                  alt="Gel Manicures"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-stone-900">Gel Manicures</h3>
                <p className="text-stone-600 mb-4 font-light">
                  Professional gel manicures and nail care treatments.
                </p>
                <button className="text-stone-800 font-semibold hover:text-stone-600">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/about-image.jpg"
                alt="About Minsa Beauty & Aesthetics"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-stone-600 text-lg mb-2 font-light">About Us</p>
              <h2 className="text-5xl font-bold mb-6 text-stone-900">Professional Aesthetic Care</h2>
              <p className="text-lg text-stone-700 mb-6 font-light">
                Minsa Beauty & Aesthetics is your trusted destination for advanced aesthetic treatments in the heart of London. Our qualified aesthetic practitioner and beauty therapist specialize in delivering safe, effective treatments tailored to your individual needs.
              </p>
              <p className="text-lg text-stone-700 mb-8 font-light">
                We use only premium products and the latest techniques to ensure you receive the highest standard of care in a professional, welcoming environment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-stone-700 text-2xl mr-4 mt-1">✓</span>
                  <div>
                    <p className="text-lg font-semibold text-stone-900">Certified Aesthetic Practitioner</p>
                    <p className="text-stone-600 font-light">Qualified professional with extensive training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-700 text-2xl mr-4 mt-1">✓</span>
                  <div>
                    <p className="text-lg font-semibold text-stone-900">Premium Products</p>
                    <p className="text-stone-600 font-light">Profhilo, Seventy Hyal, Nucleofill & more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-stone-700 text-2xl mr-4 mt-1">✓</span>
                  <div>
                    <p className="text-lg font-semibold text-stone-900">Personalized Treatments</p>
                    <p className="text-stone-600 font-light">Tailored to your unique aesthetic goals</p>
                  </div>
                </div>
              </div>

              <button className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-stone-600 text-lg mb-2 font-light">Visit Us</p>
            <h2 className="text-5xl font-bold mb-6 text-stone-900">Central London Location</h2>
            <p className="text-xl text-stone-700 mb-8 font-light">
              35 New Broad Street, London, EC2M 1NH
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition">
                Get Directions
              </button>
              <button className="border-2 border-stone-800 text-stone-800 px-8 py-4 rounded-full text-lg hover:bg-stone-800 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/cta-bg.jpg"
            alt="Book Your Treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Enhance Your Natural Beauty?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
            Book your consultation today and discover personalized aesthetic treatments designed just for you
          </p>
          <button className="bg-stone-800 text-white px-10 py-5 rounded-full text-lg hover:bg-stone-900 transition shadow-lg border border-stone-600">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/assets/images/minsa-logo.png"
                  alt="Minsa Beauty & Aesthetics"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-stone-400 font-light">
                Professional aesthetic treatments in Central London
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-stone-400 font-light">
                35 New Broad Street<br />
                London, EC2M 1NH<br />
                United Kingdom
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-stone-400 font-light">
                @minsabeautyandaesthetics
              </p>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-stone-500">
            <p className="font-light">© 2025 Minsa Beauty & Aesthetics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}