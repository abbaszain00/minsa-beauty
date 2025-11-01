"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("stripWax");

  const categories = [
    { id: "stripWax", name: "Strip Wax" },
    { id: "stripWaxPackages", name: "Wax Packages" },
    { id: "hotWax", name: "Hot Wax" },
    { id: "sugaringWax", name: "Sugaring" },
    { id: "eyeTreatments", name: "Eyes & Brows" },
    { id: "nails", name: "Nails" },
    { id: "facials", name: "Facials" },
    { id: "aesthetics", name: "Aesthetics" },
  ];

  const services = {
    stripWax: [
      { name: "Full Leg", price: "£32" },
      { name: "3/4 Leg", price: "£27" },
      { name: "Half Leg", price: "£22" },
      { name: "Full Arms", price: "£20" },
      { name: "3/4 Legs", price: "£37" },
      { name: "Half Arms", price: "£32" },
      { name: "Hollywood", price: "£15" },
      { name: "Brazilian", price: "£32" },
      { name: "3/4 Bikini", price: "£25" },
      { name: "Peli Anal", price: "£17" },
      { name: "Bikini Line", price: "£20" },
      { name: "Full Back", price: "£37" },
      { name: "Lower Back", price: "£15" },
      { name: "Tummy Wax", price: "£10" },
      { name: "Back and Shoulder", price: "£10" },
      { name: "Chest", price: "£10" },
      { name: "Upper Lip", price: "£10" },
      { name: "Eyebrows", price: "£10" },
      { name: "Full Face", price: "£20" },
      { name: "Lip + Chin", price: "£20" },
      { name: "Side of Face", price: "£20" },
    ],
    stripWaxPackages: [
      { name: "Full Leg + Bikini Line", price: "£48" },
      { name: "Full Leg + Brazilian", price: "£64" },
      { name: "Full Leg + Hollywood", price: "£64" },
      { name: "Full Leg + Under Arm + Bikini Line", price: "£55" },
      { name: "Full Leg + Under Arm + Brazilian", price: "£79" },
      { name: "Full Leg + Under Arm + Hollywood", price: "£79" },
      { name: "Half Leg + Bikini Line", price: "£38" },
      { name: "Half Leg + Brazilian", price: "£56" },
      { name: "Half Leg + Hollywood", price: "£58" },
      { name: "Half Leg + Under Arm + Bikini Line", price: "£48" },
      { name: "Half Leg + Under Arm + Brazilian", price: "£68" },
      { name: "Half Leg + Under Arm + Hollywood", price: "£68" },
      { name: "Under Arm + Bikini Line", price: "£28" },
      { name: "Under Arm + Brazilian", price: "£46" },
      { name: "Under Arm + Hollywood", price: "£46" },
    ],
    hotWax: [
      { name: "Hot Wax Bikini Line", price: "£25" },
      { name: "Hot Wax Brazilian", price: "£40" },
      { name: "Hot Wax Hollywood", price: "£42" },
      { name: "Hot Wax Under Arm", price: "£15" },
      { name: "Hot Wax Face Wax", price: "£30" },
      { name: "Hot Wax Side and Face", price: "£25" },
    ],
    sugaringWax: [
      { name: "Hollywood", price: "£52" },
      { name: "Brazilian", price: "£52" },
      { name: "High Bikini", price: "£30" },
      { name: "Bikini Line", price: "£28" },
      { name: "Buttocks", price: "£22" },
      { name: "Under Arm", price: "£20" },
      { name: "Upper Lip", price: "£12" },
      { name: "Nostril", price: "£10" },
      { name: "Arm + Hands", price: "£20" },
      { name: "Upper Leg", price: "£50" },
      { name: "Lower Leg", price: "£50" },
      { name: "Full Leg", price: "£75" },
    ],
    eyeTreatments: [
      { name: "Micro Blading", price: "£300", featured: true },
      { name: "Eyebrow Threading", price: "£15" },
      { name: "Eyebrow Waxing", price: "£15" },
      { name: "Eyebrow Tinting", price: "£15" },
      { name: "Eyelash Tinting", price: "£15" },
      { name: "Eyebrow and Eyelash Tint", price: "£32" },
      { name: "Eyebrow Wax and Tint", price: "£30" },
      { name: "Eyebrow and Lip Threading", price: "£25" },
      { name: "Eyebrow Tinting + Threading", price: "£30" },
      { name: "Eyelash + Eyebrow Tint + Threading", price: "£45" },
      { name: "Eyelash Lift (Without Tint)", price: "£50" },
      { name: "Eyelash Lift (With Tint)", price: "£55" },
      { name: "Eyelash Perming", price: "£50" },
      { name: "Henna Brows", price: "£25" },
      { name: "Henna Brows and Threading", price: "£35" },
      { name: "Henna Brows and Waxing", price: "£35" },
      { name: "Brow Lamination", price: "£55" },
      { name: "Brow Lamination + Tint + Shaping", price: "£70" },
    ],
    nails: [
      // Normal Paint
      {
        name: "File and Polish on Hand",
        price: "£16",
        category: "Normal Paint",
      },
      {
        name: "File and Polish on Feet",
        price: "£16",
        category: "Normal Paint",
      },
      { name: "Full Manicure", price: "£28", category: "Normal Paint" },
      {
        name: "French File and Polish",
        price: "£30",
        category: "Normal Paint",
      },
      { name: "Full Pedicure", price: "£38", category: "Normal Paint" },
      { name: "Dry Pedicure", price: "£35", category: "Normal Paint" },
      {
        name: "Full Pedicure + French Polish",
        price: "£40",
        category: "Normal Paint",
      },
      {
        name: "File and Polish (Hand + Toes)",
        price: "£32",
        category: "Normal Paint",
      },
      {
        name: "Manicure (Without Paint)",
        price: "£25",
        category: "Normal Paint",
      },
      { name: "Men Manicure", price: "£25", category: "Normal Paint" },
      {
        name: "Gel Removal + Normal Paint",
        price: "£30",
        category: "Normal Paint",
      },
      {
        name: "Gel Removal + Normal Manicure",
        price: "£43",
        category: "Normal Paint",
      },
      // Gel
      { name: "Acrylic + SNS Soak Off", price: "£22", category: "Gel" },
      { name: "Shellac Soak Off (Hand + Toes)", price: "£30", category: "Gel" },
      { name: "Two in One Gel File and Polish", price: "£30", category: "Gel" },
      { name: "Gel Soak Off", price: "£15", category: "Gel" },
      { name: "Gel Full Manicure", price: "£38", category: "Gel" },
      { name: "Soak Off (File + Polish)", price: "£38", category: "Gel" },
      { name: "Gel French Manicure", price: "£40", category: "Gel" },
      { name: "Soak Off Full Manicure", price: "£48", category: "Gel" },
      {
        name: "Gel File and Polish (Hand + Toes)",
        price: "£54",
        category: "Gel",
      },
      { name: "Gel Dry Pedicure", price: "£42", category: "Gel" },
      { name: "Gel French Dry Pedicure", price: "£45", category: "Gel" },
      { name: "Gel Full Pedicure", price: "£50", category: "Gel" },
      { name: "Gel Full French Pedicure", price: "£55", category: "Gel" },
      { name: "Gel File and Polish Hand", price: "£28", category: "Gel" },
      { name: "Gel File and Polish Toes", price: "£28", category: "Gel" },
      { name: "Gel French File and Polish", price: "£32", category: "Gel" },
    ],
    facials: [
      { name: "Express Facial", price: "£50" },
      { name: "Deep Cleansing Facial", price: "£70" },
      { name: "Anti-Ageing Facial", price: "£80" },
      { name: "Hydrating Facial", price: "£70" },
      {
        name: "Hydra Peeling Facial",
        price: "£85",
        description: "Skin Renewing Facial",
      },
      { name: "Dermalogica Pro Power Peel 60", price: "£85" },
      { name: "Dermalogica Pro Power Peel 30", price: "£60" },
      { name: "Back Facial", price: "£45" },
      { name: "CACI - Non-Surgical Facial", price: "£70" },
      { name: "CACI Non-Surgical Face Lift", price: "£95" },
      { name: "CACI Eye Treatment", price: "£40" },
      { name: "CACI Jaw Lift Treatment", price: "£40" },
    ],
    aesthetics: [
      {
        name: "Anti-Wrinkle (Botox) - 1 Area",
        price: "£170",
        category: "Botox",
      },
      {
        name: "Anti-Wrinkle (Botox) - 2 Areas",
        price: "£190",
        category: "Botox",
      },
      {
        name: "Anti-Wrinkle (Botox) - 3 Areas",
        price: "£250",
        category: "Botox",
      },
      { name: "Excess Sweating Treatments", price: "£300", category: "Botox" },
      { name: "Nefertiti Neck", price: "£300", category: "Botox" },
      { name: "Massate (Botox)", price: "£300", category: "Botox" },
      { name: "Gummy Line", price: "£200", category: "Botox" },
      { name: "Bunny Line", price: "£200", category: "Botox" },
      { name: "Brow Lift", price: "£200", category: "Botox" },
      { name: "Smoker Line", price: "£200", category: "Botox" },
      {
        name: "Downturned Lines",
        price: "£200",
        category: "Botox",
        description: "Corner of Mouth",
      },
      { name: "Pebble Chin", price: "£200", category: "Botox" },
      { name: "Lip Augmentation 0.5ML", price: "£180", category: "Fillers" },
      { name: "Lip Augmentation 1ML", price: "£210", category: "Fillers" },
      { name: "Marionette Lines 1ML", price: "£250", category: "Fillers" },
      { name: "Nasolabial Folds 1ML", price: "£300", category: "Fillers" },
      { name: "Cheeks Contouring 1ML", price: "£210", category: "Fillers" },
      { name: "Cheeks Contouring 2ML", price: "£380", category: "Fillers" },
      { name: "Chin Contouring 1ML", price: "£210", category: "Fillers" },
    ],
  };

  const activeServices = services[activeTab as keyof typeof services];

  // Group nails by subcategory
  const nailsByCategory =
    activeTab === "nails"
      ? activeServices.reduce((acc: any, service: any) => {
          const cat = service.category || "Other";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(service);
          return acc;
        }, {})
      : null;

  // Group aesthetics by subcategory
  const aestheticsByCategory =
    activeTab === "aesthetics"
      ? activeServices.reduce((acc: any, service: any) => {
          const cat = service.category || "Other";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(service);
          return acc;
        }, {})
      : null;

  return (
    <div className={`min-h-screen bg-stone-50 ${outfit.className}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-stone-900 ">
            Our Services & Pricing
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Professional beauty and aesthetic treatments with transparent
            pricing
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="mx-auto px-4 max-w-6xl">
          <div className="flex overflow-x-auto scrollbar-hide justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-all whitespace-nowrap  ${
                  activeTab === category.id
                    ? "text-stone-900 border-b-4 border-stone-800"
                    : "text-stone-600 hover:text-stone-900 border-b-4 border-transparent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12">
        <div className="mx-auto px-4 w-full max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Nails - Grouped by subcategory */}
            {activeTab === "nails" && nailsByCategory && (
              <div className="space-y-8">
                {Object.entries(nailsByCategory).map(
                  ([subcat, items]: [string, any]) => (
                    <div key={subcat}>
                      <h3 className="text-2xl font-bold mb-4 text-stone-900 border-b-2 border-stone-200 pb-2 ">
                        {subcat}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {items.map((service: any, index: number) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-stone-50 transition"
                          >
                            <span className="text-stone-700">
                              {service.name}
                            </span>
                            <span className="font-bold text-stone-900 text-lg">
                              {service.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* Aesthetics - Grouped by subcategory */}
            {activeTab === "aesthetics" && aestheticsByCategory && (
              <div className="space-y-8">
                {Object.entries(aestheticsByCategory).map(
                  ([subcat, items]: [string, any]) => (
                    <div key={subcat}>
                      <h3 className="text-2xl font-bold mb-4 text-stone-900 border-b-2 border-stone-200 pb-2 ">
                        {subcat === "Botox"
                          ? "Anti-Wrinkle Treatments (Botox)"
                          : "Dermal Fillers"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {items.map((service: any, index: number) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-stone-50 transition"
                          >
                            <div>
                              <span className="text-stone-700">
                                {service.name}
                              </span>
                              {service.description && (
                                <p className="text-sm text-stone-500">
                                  {service.description}
                                </p>
                              )}
                            </div>
                            <span className="font-bold text-stone-900 text-lg ml-4">
                              {service.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* All other categories */}
            {activeTab !== "nails" && activeTab !== "aesthetics" && (
              <div className="grid md:grid-cols-2 gap-4">
                {activeServices.map((service: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg hover:bg-stone-50 transition ${
                      service.featured
                        ? "bg-stone-100 ring-2 ring-stone-300"
                        : ""
                    }`}
                  >
                    <div>
                      <span
                        className={`${
                          service.featured ? "font-semibold" : ""
                        } text-stone-700`}
                      >
                        {service.name}
                      </span>
                      {service.description && (
                        <p className="text-sm text-stone-500">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <span className="font-bold text-stone-900 text-lg ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment or ask any questions
            about our services
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-stone-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-100 transition"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
