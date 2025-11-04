// components/BrandCarousel.tsx
"use client";
import Image from "next/image";

export default function BrandCarousel() {
  // Array of brand logos with their paths
  const brands = [
    { name: "Profhilo", logo: "/assets/images/brands/profhilo.png" },
    { name: "Seventy Hyal", logo: "/assets/images/brands/seventy-hyal.png" },
    { name: "Nucleofill", logo: "/assets/images/brands/nucleofill.png" },
    { name: "Hydrafacial", logo: "/assets/images/brands/hydrafacial.png" },
    { name: "Lumi Eyes", logo: "/assets/images/brands/lumi-eyes.png" },
    { name: "Botox", logo: "/assets/images/brands/botox.png" },
    { name: "PRP", logo: "/assets/images/brands/prp.png" },
    { name: "Mesotherapy", logo: "/assets/images/brands/mesotherapy.png" },
  ];

  return (
    <section className="py-16 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-900 mb-2">
          Premium Brands We Trust
        </h2>
        <p className="text-center text-stone-600 font-light">
          Working with industry-leading products for exceptional results
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-100 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-100 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-white rounded-2xl shadow-sm flex items-center justify-center"
              style={{ width: "200px", height: "120px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-white rounded-2xl shadow-sm flex items-center justify-center"
              style={{ width: "200px", height: "120px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}