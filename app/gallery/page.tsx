import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Outfit } from "next/font/google";
import GalleryGrid from "@/components/GalleryGrid";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Gallery | Minsa Beauty & Aesthetics",
  description: "View our treatment results and before/after transformations",
};

export default function GalleryPage() {
  return (
    <div className={`min-h-screen bg-stone-50 ${outfit.className}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-stone-900">
            Our Gallery
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Explore our treatment results and client transformations
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <GalleryGrid />

      {/* CTA Section */}
      <CTASection
        title="Ready for Your Transformation?"
        description="Book a consultation to discuss your aesthetic goals"
        buttonText="Book Consultation"
      />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
