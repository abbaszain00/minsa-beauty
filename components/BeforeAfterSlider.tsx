"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== "mousemove") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, rect.width)
    );
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-4 text-stone-900">{title}</h3>
      <div
        className="relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl cursor-col-resize"
        onMouseMove={handleMove}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-stone-800">
            AFTER
          </div>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-stone-800">
            BEFORE
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-stone-800"></div>
              <div className="w-0.5 h-4 bg-stone-800"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-stone-600 mt-3">
        ← Drag the slider to compare →
      </p>
    </div>
  );
}