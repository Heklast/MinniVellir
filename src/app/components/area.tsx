'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FadeInOnScroll from './scroll';

const images = [
  { src: "/mynd.JPG" },
  { src: "/mynd.JPG" },
  { src: "/mynd.JPG" },
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
      <div id="area" className="pl-10 scroll-mt-10">
        <div className="pb-10"></div>
        <div className="flex flex-col md:items-center gap-4 w-full">
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

          <div className='TTD-intro'>
            <h1 className="pb-0 md:text-center">The Area</h1>
            
          </div>
          {/* SLIDER */}
          <div ref={sliderRef} className="keen-slider w-full md:h-130 relative">
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
            <div className="flex flex-col-reverse md:flex-row md:gap-20 gap-5 pr-5 md:pr-10 items-start">

              <div className='accommodation-2'>
                <h3 className="text-xl font-light leading-relaxed">
                  Situated in the heart of the farmland of the South of Iceland, Minni vellir is conveniently located to explore
                  many of southern Iceland's stunning natural attractions. Within short driving distances you have local favorites and hidden gems
                  like Þjófafoss and Háifoss.<br /><br />

                  Adventurous travelers can also venture to the colorful rhyolite mountains of Landmannalaugar, the powerful Hekla volcano, and the lush
                  Þórsmörk valley and even Sólheimasandur and Vík, all within easy driving distance.<br /><br />

                  Closer to the farm, quiet country roads and open landscapes invite peaceful walks, photography, and a glimpse into the timeless rhythm of rural Icelandic life. Whether you’re exploring or simply unwinding, Minni-Vellir offers the ideal base in the heart of the south.
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