'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
    style={{ backgroundColor: showLogo ? '#DAD9D6' : 'transparent' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-0">
        {/*Logo, MV*/}
        <div>
          {showLogo && (
            <p style={{ fontFamily: 'Limelight', color:'#3D3935' }} className="text-3xl font-bold">
              MV
            </p>
          )}
        </div>

        {/* Hamburger menu*/}
        <div className="z-50">
          {!isOpen ? (
            <button
              className="text-3xl p-5"
              style={{ color: showLogo ? '#3D3935' : 'white' }}
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>
          ) : (
            <button
              className="text-3xl text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Sidebar menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-1/4 bg-white flex flex-col items-center justify-center shadow-lg z-40">
          <nav
            style={{ fontFamily: 'Jura' }}
            className="flex flex-col gap-6 text-xl text-black"
          >
            <a href="#farmhouse" onClick={() => setIsOpen(false)}>The Farmhouse</a>
            <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
            <a href="#Titlar" onClick={() => setIsOpen(false)}>Titlar</a>
          </nav>
        </div>
      )}
    </header>
  );
}