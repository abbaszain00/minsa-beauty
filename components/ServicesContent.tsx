"use client";

import { useState } from "react";
import type { Service } from "@/lib/googleSheets";

interface ServicesContentProps {
  servicesByCategory: Record<string, Service[]>;
}

export default function ServicesContent({
  servicesByCategory,
}: ServicesContentProps) {
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

  const [activeTab, setActiveTab] = useState("stripWax");

  // Safety check for servicesByCategory
  if (!servicesByCategory || Object.keys(servicesByCategory).length === 0) {
    return (
      <section className="py-12">
        <div className="mx-auto px-4 w-full max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-stone-600">
              No services available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Get the active category name
  const activeCategoryName =
    categories.find((c) => c.id === activeTab)?.name || "";
  const activeServices = servicesByCategory[activeCategoryName] || [];

  // Group by subcategory for Nails and Aesthetics
  const servicesBySubcategory =
    activeTab === "nails" || activeTab === "aesthetics"
      ? activeServices.reduce((acc: Record<string, Service[]>, service) => {
          const subcat = service.subcategory || "Other";
          if (!acc[subcat]) acc[subcat] = [];
          acc[subcat].push(service);
          return acc;
        }, {})
      : null;

  return (
    <>
      {/* Tabs Navigation */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="mx-auto px-4 max-w-6xl">
          <div className="flex overflow-x-auto scrollbar-hide justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-all whitespace-nowrap ${
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
            {/* Nails & Aesthetics - Grouped by subcategory */}
            {servicesBySubcategory &&
              Object.keys(servicesBySubcategory).length > 0 && (
                <div className="space-y-8">
                  {Object.entries(servicesBySubcategory).map(
                    ([subcat, items]: [string, Service[]]) => (
                      <div key={subcat}>
                        <h3 className="text-2xl font-bold mb-4 text-stone-900 border-b-2 border-stone-200 pb-2">
                          {activeTab === "aesthetics"
                            ? subcat === "Botox"
                              ? "Anti-Wrinkle Treatments (Botox)"
                              : "Dermal Fillers"
                            : subcat}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {items.map((service, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-stone-100 transition"
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
                                £{service.price}
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
            {!servicesBySubcategory && activeServices.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {activeServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-stone-100 transition"
                  >
                    <div>
                      <span className="text-stone-700">{service.name}</span>
                      {service.description && (
                        <p className="text-sm text-stone-500">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <span className="font-bold text-stone-900 text-lg ml-4">
                      £{service.price}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Empty state for category with no services */}
            {!servicesBySubcategory && activeServices.length === 0 && (
              <div className="text-center py-8">
                <p className="text-stone-600">
                  No services available in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
