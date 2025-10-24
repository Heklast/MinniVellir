'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import HamburgerMenu from './hamburgerMenu';

export default function Header() {
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
<HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
}