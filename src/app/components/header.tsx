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
    style={{ backgroundColor: showLogo ? '#5E6E73' : 'transparent' }} //#DAD9D6 GAMLI back og GAMLI TEXT #3D3935 kannski breyta um lit? er ekki að fýla þennan gráa en breytist kannski þegar myndir komnar
    //#BC9A6A brúnn sem ég fíla ágætlega, #BFA58A þennan líka, #A67B5B þessi aðeins dekkri, #8B6B4F dekkstur (flottastur kannski?)
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