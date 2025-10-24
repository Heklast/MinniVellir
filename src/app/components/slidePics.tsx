'use client';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import  { useEffect } from 'react';

const images = [
  "/image.png",
 "/image.png",
  "/image.png",
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) { setCurrentSlide(s.track.details.rel); },
    defaultAnimation: { duration: 2000 },
  });

  // autoplay
  useEffect(() => {
    const id = setInterval(() => instanceRef.current?.next(), 5000);
    return () => clearInterval(id);
  }, [instanceRef]);

  return (
    <div className="relative w-full h-full overflow-hidden"> {/* <-- NEW wrapper */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide basis-full shrink-0 w-full h-full">
            <img src={src} alt={`Slide ${i + 1}`} className="block w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-1">
        <button onClick={() => instanceRef.current?.prev()}
          className="w-10 h-10 flex items-center justify-center text-2xl bg-[rgba(200,140,120,0.6)] text-white hover:bg-[rgba(230,160,120,0.4)]">
          &larr;
        </button>
        <button onClick={() => instanceRef.current?.next()}
          className="w-10 h-10 flex items-center justify-center text-2xl bg-[rgba(200,140,120,0.6)] text-white hover:bg-[rgba(230,160,120,0.4)]">
          &rarr;
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentSlide === idx ? 'bg-[rgba(200,140,120,0.6)]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}