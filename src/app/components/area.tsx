'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FadeInOnScroll from './scroll';

const images = [
  { src: "/mynd.JPG" },
  { src:"/mynd.JPG" },
  { src: "/mynd.JPG"  },
];

export default function Area() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.3,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    defaultAnimation: {
      duration: 2000,
    },
  });

  //disablea scroll, æj því alltaf ekki í miðjunni en skiptir engu núna lowk
  useEffect(() => {
    document.body.style.overflow = lightboxIndex >= 0 ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <FadeInOnScroll>
    <div id="area" className="pl-10">
      <div className="pb-10"></div>
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images}
        index={lightboxIndex}
        styles={{
          container: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      />

<div  className='TTD-intro'>
  <h1  className="pb-0 text-center">The Beautiful Area</h1>
  <h3  className="text-xl font-light leading-relaxed pb-10">BLABLA</h3>
</div>
      {/* SLIDER */}
      <div ref={sliderRef} className="keen-slider w-full h-130 relative">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setLightboxIndex(i)} 
            className="keen-slider__slide w-full h-full relative overflow-hidden group cursor-pointer"
          >
            <img
              src={img.src}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
              
            />
            {i !== currentSlide && (
              <div className="absolute inset-0 bg-white/40 z-10 pointer-events-none transition duration-300" />
            )}
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      
      <FadeInOnScroll>
      <div className="flex flex-row gap-20 pr-10 items-start">
        
        <div className='accommodation-2'>
          <h3 className="text-xl font-light leading-relaxed">
            The farmhouse is located in one of the most beautiful areas in Iceland. blabla
          </h3>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            style={{ color: "#3D3935", fontWeight: "500" }}
            className="font-serif w-10 h-10 flex items-center justify-center text-4xl text-black hover:text-5xl hover:cursor-pointer"
          >
            &larr;
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            style={{ color: "#3D3935", fontWeight: "500" }}
            className="font-serif w-10 h-10 flex items-center justify-center text-4xl text-black hover:text-5xl hover:cursor-pointer"
          >
            &rarr;
          </button>
        </div>
      </div></FadeInOnScroll>
    </div></div></FadeInOnScroll>
  );
}