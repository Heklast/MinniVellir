'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

type CloudinaryItem = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
};

// Insert transform after /upload/ (preserves folders/extension)
function transformFromSecureUrl(secureUrl: string, w = 2400, h = 1600) {
  const marker = '/upload/';
  const i = secureUrl.indexOf(marker);
  if (i === -1) return secureUrl;
  const before = secureUrl.slice(0, i + marker.length);
  const after = secureUrl.slice(i + marker.length);
  return `${before}f_auto,q_auto,dpr_auto,c_fill,g_auto,w_${w},h_${h}/${after}`;
}

export default function Carousel() {
  const [items, setItems] = useState<CloudinaryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    defaultAnimation: { duration: 2000 },
  });

  // Fetch images by tag "fm" (or your tag)
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch('/api/images/by-tag/fm', { cache: 'no-store', signal: ac.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setItems((data?.resources ?? []) as CloudinaryItem[]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  // Autoplay
  useEffect(() => {
    if (!instanceRef.current) return;
    const id = setInterval(() => instanceRef.current?.next(), 5000);
    return () => clearInterval(id);
  }, [instanceRef, items.length]);

  // Nudge layout when slides change or image loads
  const handleImgLoad = () => instanceRef.current?.update();
  useEffect(() => { instanceRef.current?.update(); }, [items.length]);

  return (
  
  <div className="relative w-full overflow-hidden">
    {!loading && !err && items.length > 0 && (
      <div ref={sliderRef} className="keen-slider w-full">
        {items.map((it) => {
          const url = transformFromSecureUrl(it.secure_url, 1920, 1080);
          return (
            <div
              key={it.public_id}
              className="keen-slider__slide w-full"
            >
              <img
                src={url}
                alt={it.public_id.split('/').pop() ?? 'Slide'}
                className="w-full aspect-[4/3] object-cover block"
                onLoad={handleImgLoad}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    )}
  </div>
);}