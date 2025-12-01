'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useMemo, useState } from 'react';
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

// Insert a transform right after `/upload/` in the original secure_url.
// Keeps the exact folder + filename + extension (avoids 404s).
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

export default function Accommodation() {
  const [items, setItems] = useState<CloudinaryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Fetch by Cloudinary tag "accom"
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch('/api/images/by-tag/accom', {
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

  // Match these to your visual target (slider height/aspect)
  const targetW = 1920;
  const targetH = 1080;

  // Preload transformed URLs so Keen measures correctly on first paint
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

  // Nudge layout once images are ready
  useEffect(() => {
    if (imagesLoaded && instanceRef.current) instanceRef.current.update();
  }, [imagesLoaded, instanceRef]);

  // Optional autoplay (every 5s)
  useEffect(() => {
    if (!instanceRef.current) return;
    const id = setInterval(() => instanceRef.current?.next(), 5000);
    return () => clearInterval(id);
  }, [instanceRef, imagesLoaded]);

  // Lightbox uses originals (you can swap to bigger transforms if you like)
  const slides = useMemo(
    () => items.map((it) => ({ src: it.secure_url })),
    [items],
  );

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex >= 0 ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <FadeInOnScroll>
      <div id="accommodation" className="pl-10">
        <div className="pb-10" />
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Lightbox */}
          <Lightbox
            open={lightboxIndex >= 0}
            close={() => setLightboxIndex(-1)}
            slides={slides}
            index={lightboxIndex}
            styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
          />

          <div className="TTD-intro">
            <h1 className="pb-0 md:text-center">The old farmhouse</h1>
            <h3 className="text-xl font-light leading-relaxed pb-10">
              A sneakpeak into the cozy farmhouse that Minni-Vellir Farmhouse is.
            </h3>
          </div>

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
                      className="block w-full h-full object-cover"
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

          {!loading && !err && items.length === 0 && (
            <div className=" text-gray-500">No images with tag “accom” yet.</div>
          )}

          {/* Controls */}
          {!loading && !err && items.length > 0 && (
            <div className="flex flex-col-reverse md:flex-row md:gap-20 gap-2 md:pr-10 pr-5 items-start">
              <div className="accommodation-2">
                <h1>Amenities</h1>
                <h3 className="text-xl font-light leading-relaxed">
                  The farmhouse comfortably accommodates up to six guests in three bedrooms, each thoughtfully furnished to create a warm and restful atmosphere. The spacious double living room
                  offers plenty of space to unwind — whether you wish to enjoy a quiet evening with a book, or simply take in the peaceful views across the fields. <br /><br />

                  The fully equipped kitchen has everything you need to prepare meals, from morning coffee to hearty dinners after a day of exploration. The house also features two modern bathrooms,
                  ensuring comfort and convenience for families and small groups alike. <br /><br />

                  Blending traditional charm with modern comfort, the farmhouse provides the perfect balance between authenticity and relaxation — a welcoming home base for your adventures in southern Iceland.
                </h3>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  disabled={!imagesLoaded || !items.length}
                  className="font-serif w-10 h-10 flex items-center justify-center text-4xl text-black hover:text-5xl hover:cursor-pointer disabled:opacity-50 disabled:hover:text-4xl"
                >
                  &larr;
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
                  disabled={!imagesLoaded || !items.length}
                  className="font-serif w-10 h-10 flex items-center justify-center text-4xl text-black hover:text-5xl hover:cursor-pointer disabled:opacity-50 disabled:hover:text-4xl"
                >
                  &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </FadeInOnScroll>
  );
}