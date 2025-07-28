'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/*hamburger menu*/}
      <div className="absolute top-4 right-4 z-50 p-2">
        {!isOpen ? (
          <button
            style={{ color: 'white' }}
            className="text-3xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        ) : (
          <button
            style={{ color: 'black' }}
            className="text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        )}
      </div>

      {/*sidebar menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-1/4 bg-white flex flex-col items-center justify-center shadow-lg z-40">
          <nav
            style={{ fontFamily: 'Jura' }}
            className="flex flex-col gap-6 text-xl text-black"
          >
            <a href="#farmhouse" onClick={() => setIsOpen(false)}>The Farmhouse</a>
            <a href="#Fleiri" onClick={() => setIsOpen(false)}>Fleiri</a>
            <a href="#Titlar" onClick={() => setIsOpen(false)}>Titlar</a>
          </nav>
        </div>
      )}
    </header>
  );
}