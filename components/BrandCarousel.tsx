// components/BrandCarousel.tsx
"use client";
import Image from "next/image";

export default function BrandCarousel() {
  // Array of brand logos with their paths
  const brands = [
{ name: "Dermalogica", logo: "/assets/brands/dermalogica.png" },    
{ name: "Mesoestetic", logo: "/assets/brands/mesoestetic.png" },
    { name: "Profhilo", logo: "/assets/brands/profhilo.png" },
    { name: "Nucleofill", logo: "/assets/brands/nucleofill.png" },
    { name: "Seventy Hyal", logo: "/assets/brands/seventyhyal.png" },
    { name: "Ejal 40", logo: "/assets/brands/ejal40.png" },
    { name: "Revolax", logo: "/assets/brands/revolax.png" },
    { name: "Lumi Eyes", logo: "/assets/brands/lumi.png" },
    { name: "Dermalax", logo: "/assets/brands/dermalax.png" },
    { name: "Juvederm", logo: "/assets/brands/juvederm.webp" },
    { name: "Fillmed", logo: "/assets/brands/filmed.png" },
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
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="250px"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: "250px", height: "150px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="250px"
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
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}