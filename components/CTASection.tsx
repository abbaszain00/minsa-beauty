// components/CTASection.tsx
import Image from "next/image";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
}

export default function CTASection({
  title = "Ready to Begin Your Journey?",
  description = "Book your consultation today and discover how we can help you achieve your aesthetic goals.",
  buttonText = "Book Consultation",
  imageSrc = "/assets/images/cta-image.jpg",
}: CTASectionProps) {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Book Your Consultation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
          {description}
        </p>
        <a
          href="https://www.treatwell.co.uk/place/minsa-beauty-and-aesthetics-1/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg hover:bg-stone-900 transition inline-block"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
