// app/about/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import { Award, Sparkles, MapPin, Target, Shield, Heart } from "lucide-react";
import BrandCarousel from "@/components/BrandCarousel";
import CTASection from "@/components/CTASection";

export default function About() {
  return (
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <Navbar />

      {/* Hero Section - Smaller */}
      <section className="relative h-[30vh] flex items-center bg-stone-800">
        <div className="container mx-auto px-4 pt-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl leading-tight font-thin text-white">
            About Minsa Beauty & Aesthetics
          </h1>
        </div>
      </section>

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
                Welcome to Minsa Beauty & Aesthetics, where expertise meets
                elegance in the heart of London&apos;s financial district. With
                over 19 years of experience in the aesthetic industry,
                we&apos;ve established ourselves as a trusted destination for
                discerning clients seeking natural, refined results.
              </p>

              <p className="text-lg md:text-xl text-stone-700 mb-6 font-light leading-relaxed">
                Our clinic specializes in advanced medical aesthetics, combining
                cutting-edge treatments with traditional beauty therapy. From
                anti-wrinkle injections and premium dermal fillers to innovative
                skin boosters like Profhilo, Seventy Hyal, and Nucleofill, we
                offer a comprehensive range of services designed to enhance your
                natural beauty and restore youthful radiance.
              </p>

              <p className="text-lg md:text-xl text-stone-700 mb-6 font-light leading-relaxed">
                Located at 35 New Broad Street, just moments from Liverpool
                Street station, our clinic provides a tranquil escape from the
                bustling City of London. We&apos;ve created a sophisticated
                sanctuary where busy professionals can unwind and invest in
                themselves, whether that&apos;s through a precision microblading
                session, rejuvenating skin treatment, or a perfectly executed
                gel manicure.
              </p>

              <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed">
                At Minsa Beauty & Aesthetics, we believe that true beauty is
                about feeling confident in your own skin. Our certified
                practitioners take a personalized approach to every treatment,
                ensuring that each client receives bespoke care tailored to
                their unique aesthetic goals. We&apos;re committed to delivering
                exceptional results using only the highest quality products and
                the latest techniques in medical aesthetics.
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
              We&apos;re dedicated to providing exceptional care and outstanding
              results
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
                Over 19 years of experience delivering safe, effective aesthetic
                treatments with proven results.
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
                We use only the highest quality products including Profhilo,
                Seventy Hyal, and Nucleofill.
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
                Conveniently located in the financial district, just 5 minutes
                from Liverpool Street station.
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
                Every treatment is tailored to your unique needs and aesthetic
                goals for natural results.
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
                Certified practitioners following strict safety protocols and
                industry best practices.
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
                Warm, welcoming environment where your comfort and satisfaction
                are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BrandCarousel />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
