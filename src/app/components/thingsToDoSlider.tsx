'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const images = [
   {
    src: "/image.png",
    title: "Horseback Riding",
    link:"https://www.ishestar.is",
    description: "Explore Icelandic landscapes on horseback with our partner Íshestar.",
    onclick:"ishestar.is"
  },
  {
    src: "/image.png",
    title: "Hiking",
    description: "Plan hikes on nearby mountains and hills with a guide completely at your disposal.",
  },
  {
    src: "/image.png",
    title: "Biking",
    description: "Go on mountain bike rides in the area with our partner Bikes.",
  },
];

export default function ThingsToDo() {
     const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
    perView: 2,
    spacing: 1,},
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full h-full">
    {images.map((img, index) => (
         <a
    key={index}
    href={img.link} 
    target="_blank"
    rel="noopener noreferrer"
    className="keen-slider__slide w-full h-full relative overflow-hidden group"
  >
    <img
      src={img.src}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 hover:cursor-pointer"
      alt={img.title}
    />
    {/* Texti ofan á */}
    <div className="absolute bottom-5 left-5 bg-black/50 text-white p-4 shadow-md">
      <h2 className="text-xl font-semibold">{img.title}</h2>
      <p className="text-sm">{img.description}</p>
    </div>
  </a>
))}

      {/*arrows*/}
      <div className="absolute flex bottom-5 left-1/3  gap-1 z-10 "> {/*left segir hversu langt the left of the el er frá the left side, top segir hversu lant frá toppnum left 1/2 setur left edge í miðjuna á myndinni, síðan -translate-x-1/2: Shifts the entire element back by 50% of its width, effectively centering it horizontally.
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
      <div className="absolute flex gap-2 z-10 bottom-1 left-1/3 translate-x-1/2">
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