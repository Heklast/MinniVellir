'use client';

import { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useEffect } from 'react';

const photos = [
  { src: "/image.png", width: 1200, height: 800 },
   { src: "https://res.cloudinary.com/ddnepgvbc/image/upload/v1760093721/PANO_0002_ogzlda.jpg", width: 1200, height: 800 },
];

export default function Gallery() {
     const [index, setIndex] = useState(-1);
     

useEffect(() => {
  document.body.style.overflow = index >= 0 ? 'hidden' : '';
  return () => {
    document.body.style.overflow = '';
  };
}, [index]);
  return (
    <div className="p-0">
      <h1 className="hidden">Hekla</h1>
      <PhotoAlbum layout="rows" photos={photos}   onClick={({ index }) => setIndex(index)}
      />

    <Lightbox
  open={index >= 0}
  close={() => setIndex(-1)}
  slides={photos}
  index={index}
  styles={{
    container: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // ← adjust this value
    },
  }}
      />
    </div>
  );
}