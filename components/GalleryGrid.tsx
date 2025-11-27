"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Sample gallery data - you'll replace these with real images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Microblading Transformation",
      category: "Microblading",
      imageUrl: "/assets/images/micro-1.webp",
    },
    {
      id: 2,
      title: "Anti-Wrinkle Results",
      category: "Anti-Wrinkle Injections",
      imageUrl: "/assets/images/botox-1.webp",
    },
    {
      id: 3,
      title: "Soak Off & Gel Manicure",
      category: "Nails",
      imageUrl: "/assets/images/nails-1.webp",
    },
    {
      id: 4,
      title: "Dermal Filler Look",
      category: "Dermal Fillers",
      imageUrl: "/assets/images/dermal-1.webp",
    },
    {
      id: 5,
      title: "Defined Eyebrow Threading",
      category: "Eyebrows",
      imageUrl: "/assets/images/thread-1.webp",
    },
    {
      id: 6,
      title: "Lash Lift & Tint",
      category: "Lashes",
      imageUrl: "/assets/images/lash-1.webp",
    },
    {
      id: 7,
      title: "Henna Brows",
      category: "Eyebrows",
      imageUrl: "/assets/images/henna-1.webp",
    },
    {
      id: 8,
      title: "French Gel Manicure",
      category: "Nails",
      imageUrl: "/assets/images/nails-2.webp",
    },
    {
      id: 9,
      title: "Brow Lamination, Tint & Shape",
      category: "Eyebrows",
      imageUrl: "/assets/images/brows-1.webp",
    },
  ];

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
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
        </div>
      </section>

      {/* Lightbox Modal - Full Screen Image Only */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition"
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

          {/* Full Screen Image */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
