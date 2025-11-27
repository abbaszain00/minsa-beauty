// components/CTASection.tsx

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CTASection({
  title = "Ready to Begin Your Journey?",
  description = "Book your consultation today and discover how we can help you achieve your aesthetic goals.",
  buttonText = "Book Consultation",
}: CTASectionProps) {
  return (
    <section className="relative py-32 bg-stone-800">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
          {description}
        </p>
        <a
          href="https://www.instagram.com/minsabeautyandaesthetics/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-stone-800 px-8 py-4 rounded-full text-lg hover:bg-stone-100 transition inline-block"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
