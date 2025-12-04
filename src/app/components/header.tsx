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
    style={{ backgroundColor: showLogo ? 'black' : 'transparent' }} //#DAD9D6 GAMLI back og GAMLI TEXT #3D3935 kannski breyta um lit? er ekki að fýla þennan gráa en breytist kannski þegar myndir komnar
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/*Logo, MV*/}
        <div>
          {showLogo && (
            <a href="#home" style={{ fontFamily: 'Limelight', color:'white' }} className="text-3xl p-5 font-bold"> 
              MV
            </a>
            //<p href="#home" >
              //MV
            //</p>
          )}
        </div>
<HamburgerMenu></HamburgerMenu>
      </div>
    </header>
  );
}