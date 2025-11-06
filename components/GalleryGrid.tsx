"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  beforeUrl?: string;
  afterUrl?: string;
  description?: string;
}

export default function GalleryGrid() {
  const categories = [
    "All",
    "Anti-Wrinkle",
    "Dermal Fillers",
    "Skin Boosters",
    "Microblading",
    "Facials",
    "Nails",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Sample gallery data - you'll replace these with real images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Lip Filler Transformation",
      category: "Dermal Fillers",
      imageUrl: "/assets/images/facials.jpg",
      beforeUrl: "/assets/images/facials.jpg",
      afterUrl: "/assets/images/about-image.jpg",
      description: "1ml lip augmentation with natural results",
    },
    {
      id: 2,
      title: "Anti-Wrinkle Results",
      category: "Anti-Wrinkle",
      imageUrl: "/assets/images/oil-massage.jpg",
      description: "Forehead lines treated with Botox",
    },
    {
      id: 3,
      title: "Skin Booster Glow",
      category: "Skin Boosters",
      imageUrl: "/assets/images/reflexology.jpg",
      description: "Profhilo treatment for enhanced hydration",
    },
    {
      id: 4,
      title: "Microblading Brows",
      category: "Microblading",
      imageUrl: "/assets/images/about-image.jpg",
      beforeUrl: "/assets/images/facials.jpg",
      afterUrl: "/assets/images/about-image.jpg",
      description: "Natural-looking eyebrow enhancement",
    },
    {
      id: 5,
      title: "Cheek Filler Contour",
      category: "Dermal Fillers",
      imageUrl: "/assets/images/facials.jpg",
      description: "2ml cheek augmentation for definition",
    },
    {
      id: 6,
      title: "CACI Facial Results",
      category: "Facials",
      imageUrl: "/assets/images/oil-massage.jpg",
      description: "Non-surgical facelift treatment",
    },
    {
      id: 7,
      title: "Gel Manicure Art",
      category: "Nails",
      imageUrl: "/assets/images/reflexology.jpg",
      description: "French gel manicure",
    },
    {
      id: 8,
      title: "Bunny Lines Treatment",
      category: "Anti-Wrinkle",
      imageUrl: "/assets/images/about-image.jpg",
      description: "Subtle nose line smoothing",
    },
    {
      id: 9,
      title: "Chin Contouring",
      category: "Dermal Fillers",
      imageUrl: "/assets/images/facials.jpg",
      beforeUrl: "/assets/images/facials.jpg",
      afterUrl: "/assets/images/about-image.jpg",
      description: "1ml chin augmentation",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-stone-800 text-white"
                    : "bg-white text-stone-700 hover:bg-stone-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-stone-200"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-200">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-600 text-lg">
                No images found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-stone-800 rounded-full p-3 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-video w-full bg-stone-100">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm font-medium mb-3">
                {selectedImage.category}
              </span>
              <h2 className="text-3xl font-bold mb-3 text-stone-900">
                {selectedImage.title}
              </h2>
              {selectedImage.description && (
                <p className="text-stone-600 text-lg">
                  {selectedImage.description}
                </p>
              )}

              {/* Before/After indicator */}
              {selectedImage.beforeUrl && selectedImage.afterUrl && (
                <div className="mt-6 p-4 bg-stone-50 rounded-xl">
                  <p className="text-sm text-stone-600 font-medium">
                    ✨ This image shows before/after transformation
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}