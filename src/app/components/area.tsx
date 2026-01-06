'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FadeInOnScroll from './scroll';

type CloudinaryItem = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
};

function transformFromSecureUrl(secureUrl: string, w = 1920, h = 1080) {
  const marker = '/upload/';
  const idx = secureUrl.indexOf(marker);
  if (idx === -1) return secureUrl;
  const before = secureUrl.slice(0, idx + marker.length);
  const after = secureUrl.slice(idx + marker.length);
  // Device-optimized + smart fill crop to your target box
  const transform = `f_auto,q_auto,dpr_auto,c_fill,g_auto,w_${w},h_${h}/`;
  return before + transform + after;
}

export default function Area() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [items, setItems] = useState<CloudinaryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);
    

  
  const [imagesLoaded, setImagesLoaded] = useState(false);


  useEffect(() => {
      const ac = new AbortController();
      (async () => {
        try {
          setLoading(true);
          setErr(null);
          const res = await fetch('/api/images/by-tag/area', {
            cache: 'no-store',
            signal: ac.signal,
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          setItems((data?.resources ?? []) as CloudinaryItem[]);
        } catch (e: any) {
          if (e?.name !== 'AbortError') setErr(e?.message ?? 'Failed to load images');
        } finally {
          setLoading(false);
        }
      })();
      return () => ac.abort();
    }, []);
      const targetW = 1920;
  const targetH = 1080;

    useEffect(() => {
        if (!items.length) {
          setImagesLoaded(false);
          return;
        }
        let cancelled = false;
        Promise.all(
          items.map(
            (it) =>
              new Promise<void>((resolve) => {
                const img = new window.Image();
                img.src = transformFromSecureUrl(it.secure_url, targetW, targetH);
                if (img.complete) resolve();
                else img.onload = img.onerror = () => resolve();
              }),
          ),
        ).then(() => {
          if (!cancelled) setImagesLoaded(true);
        });
        return () => {
          cancelled = true;
        };
      }, [items]);

      
    
      // Keen slider
      const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1.3, spacing: 16 },
        initial: 0,
        created(s) {
          setCurrentSlide(s.track.details.rel);
        },
        slideChanged(s) {
          setCurrentSlide(s.track.details.rel);
        },
        defaultAnimation: { duration: 2000 },
      });

      
useEffect(() => {
    if (!instanceRef.current) return;
    const id = setInterval(() => instanceRef.current?.next(), 5000);
    return () => clearInterval(id);
  }, [instanceRef, imagesLoaded]);
      

  //disablea scroll, æj því alltaf ekki í miðjunni en skiptir engu núna lowk
  useEffect(() => {
    document.body.style.overflow = lightboxIndex >= 0 ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);
   const slides = useMemo(
      () => items.map((it) => ({ src: it.secure_url })),
      [items],
    );

  return (
    <FadeInOnScroll>
      <div id="area" className="scroll-mt-10">
        <div className="pb-10"></div>
        <div className="flex flex-col md:items-center gap-4 w-full">
          {/* Lightbox */}
          <Lightbox
            open={lightboxIndex >= 0}
            close={() => setLightboxIndex(-1)}
            slides={slides}
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
          {loading && <div>Loading images…</div>}
          {err && <div className=" text-red-600">Error: {err}</div>}

          {/* Slider (taller for better fit) */}
          {!loading && !err && items.length > 0 && imagesLoaded && (
            <div
              key={`keen-${items.length}`}
              ref={sliderRef}
              className="keen-slider w-full md:h-[560px]  relative"
            >
              {items.map((it, i) => {
                const url = transformFromSecureUrl(it.secure_url, targetW, targetH);
                return (
                  <div
                    key={it.public_id}
                    className="keen-slider__slide basis-full shrink-0 w-full h-full"
                    onClick={() => (/* open lightbox at index */ setLightboxIndex(i))}
                  >
                    <img
                      src={url}
                      alt={it.public_id.split('/').pop() ?? `Slide ${i + 1}`}
                      className="block w-full h-full object-cover hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                      onLoad={() => instanceRef.current?.update()}
                      loading="lazy"
                    />
                    {i !== currentSlide && (
                      <div className="absolute inset-0 bg-white/30 z-10 pointer-events-none transition duration-300" />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* CONTROLS */}

          <FadeInOnScroll>
            <div className="flex flex-col-reverse md:flex-row md:gap-20 gap-5 pr-5 md:pr-10 items-start">

              <div className='accommodation-2'>
                <h3 className="text-xl font-light leading-relaxed">
                  Situated in the heart of the farmland of the South of Iceland, Minni-Vellir is conveniently located to explore
                  many of southern Iceland's stunning natural attractions. Within short driving distances you have local favorites and hidden waterfalls 
                  like Þjófafoss and Háifoss.<br /><br />

                  Adventurous travelers can also venture to Landmannalaugar (4x4 car required) to explore its colorful rhyolite mountains and bathe in its natural hot springs, to the powerful Hekla volcano, and the lush
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