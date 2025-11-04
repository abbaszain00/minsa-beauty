'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Lyuba M.',
    initials: 'LM',
    review: "This is my second visit with Shazia and she gets better with every visit. My nails have never looked and felt good. She will go far and beyond to do the best service. Will definitely recommend and keep coming back.",
    source: 'Google Review'
  },
  {
    name: 'Monal S.',
    initials: 'MS',
    review: "Went to get my eyebrows threaded. I was asked how I'd like them done and that's exactly how they turned out - rare to have such an experience. I felt Shazia really cared, 10/10 would go back again.",
    source: 'Google Review'
  },
  {
    name: 'Kirtley O.',
    initials: 'KO',
    review: "Been a few times at this place for different treatments and def will be back again. Good service and lovely beautician!",
    source: 'Google Review'
  },
  {
    name: 'Katie',
    initials: 'K',
    review: "Great lash lift in a peaceful clean environment, thank you",
    source: 'Treatwell Review'
  },
  {
    name: 'Amanda',
    initials: 'A',
    review: "So quick & straightforward - sugaring done on my lunch break!",
    source: 'Treatwell Review'
  },
  {
    name: 'Client',
    initials: 'C',
    review: "Shazia was friendly. She cared about the nail colour I wanted and let me see a few different options. Service was great. Will go back.",
    source: 'Treatwell Review'
  },
  {
    name: 'Sophie',
    initials: 'S',
    review: "Great place to dash for a quick lunchtime manicure for people working in offices near Liverpool Street - sorted me out at short notice before a wedding this weekend and was pleased with the results!",
    source: 'Treatwell Review'
  },
  {
    name: 'Ellen',
    initials: 'E',
    review: "Shazia rescued my nails! Lovely person and nice cosy salon.",
    source: 'Treatwell Review'
  },
  {
    name: 'Regular Client',
    initials: 'R',
    review: "Fantastic service as always :) eyebrow and upper lip threading is perfect & my nails are looking absolutely amazing",
    source: 'Treatwell Review'
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const getCardWidth = () => {
    if (cardRef.current) {
      return cardRef.current.offsetWidth + 32; // card width + gap
    }
    return 0;
  };

  const updatePosition = (index: number, animate: boolean = true) => {
    if (containerRef.current) {
      const offset = index * getCardWidth();
      containerRef.current.style.transition = animate ? 'transform 0.5s ease' : 'none';
      containerRef.current.style.transform = `translateX(-${offset}px)`;
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // If we're at or past the cloned section, jump back to the start
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0);
      updatePosition(0, false);
    }
    // If we're before the start, jump to the end
    else if (currentIndex < 0) {
      setCurrentIndex(testimonials.length - 1);
      updatePosition(testimonials.length - 1, false);
    }
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    updatePosition(newIndex, true);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    updatePosition(newIndex, true);
  };

  useEffect(() => {
    updatePosition(currentIndex, false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const renderCard = (testimonial: typeof testimonials[0], index: number, isFirst: boolean = false) => (
    <div
      key={`${testimonial.initials}-${index}`}
      ref={isFirst ? cardRef : null}
      className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-stone-50 p-8 rounded-2xl flex flex-col"
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-amber-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-stone-700 mb-6 italic font-light flex-grow">
        {testimonial.review}
      </p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center text-stone-700 font-semibold">
          {testimonial.initials}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-stone-900">{testimonial.name}</p>
          <p className="text-stone-600 text-sm">{testimonial.source}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8"
          onTransitionEnd={handleTransitionEnd}
        >
          {testimonials.map((testimonial, index) => renderCard(testimonial, index, index === 0))}
          {/* Clone cards for seamless loop */}
          {testimonials.map((testimonial, index) => renderCard(testimonial, index + testimonials.length))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-stone-100 text-stone-800 rounded-full p-3 shadow-lg transition z-10"
        aria-label="Previous testimonials"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-stone-100 text-stone-800 rounded-full p-3 shadow-lg transition z-10"
        aria-label="Next testimonials"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}