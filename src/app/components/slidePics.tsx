'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const images = [
  "/image.png",
 "/image.png",
  "/image.png",
];

export default function Carousel() {
     const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full h-full">
      {images.map((src, index) => (
        <div key={index} className="keen-slider__slide w-full h-full">
          <img
            src={src}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      {/*arrows*/}
      <div className="absolute flex bottom-5 left-1/2 -translate-x-1/2 gap-1 z-10 "> {/*left segir hversu langt the left of the el er frá the left side, top segir hversu lant frá toppnum left 1/2 setur left edge í miðjuna á myndinni, síðan -translate-x-1/2: Shifts the entire element back by 50% of its width, effectively centering it horizontally.
      absolute segir að það eigi að horfa á næsta parent sem er myndin í rauninni, eða sliderinn*/}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="w-15 h-15 flex items-center justify-center text-5xl font-light bg-[rgba(200,140,120,0.6)] hover:bg-[rgba(230,160,120,0.4)] hover:cursor-pointer text-white shadow"
          
        >
          ‹
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="w-15 h-15 flex items-center justify-center text-5xl font-light bg-[rgba(200,140,120,0.6)] hover:bg-[rgba(230,160,120,0.4)] hover:cursor-pointer text-white shadow"
        >
          ›
        </button>
           </div>
         {/* Dots */}
      <div className="absolute flex gap-2 z-10 bottom-1 left-1/2 -translate-x-1/2">
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