import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Outfit } from "next/font/google";
import ServicesContent from "@/components/ServicesContent";
import {
  getServicesFromSheet,
  groupServicesByCategory,
} from "@/lib/googleSheets";

const outfit = Outfit({ subsets: ["latin"] });

export const revalidate = 3600; // Revalidate every hour

export default async function ServicesPage() {
  // Fetch services from Google Sheets
  const services = await getServicesFromSheet();
  const servicesByCategory = groupServicesByCategory(services);

  return (
    <div className={`min-h-screen bg-stone-50 ${outfit.className}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-stone-900">
            Our Services & Pricing
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Professional beauty and aesthetic treatments with transparent
            pricing
          </p>
        </div>
      </section>

      <Suspense
        fallback={<div className="text-center py-12">Loading services...</div>}
      >
        <ServicesContent servicesByCategory={servicesByCategory} />
      </Suspense>

      {/* CTA Section */}
      <CTASection
        title="Ready to Book Your Treatment?"
        description="Contact us today to schedule your appointment or ask any questions about our services"
        buttonText="Book Appointment"
      />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
