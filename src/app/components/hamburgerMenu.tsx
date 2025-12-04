import { useEffect, useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger menu */}
      <div className="z-50 fixed top-0 right-0">
        {!isOpen ? (
          <button
            className="text-4xl md:text-3xl p-5 pt-3 transition-colors"
            style={{ color: showLogo ? "white" : "white" }} // #3D3935 GAMLI
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        ) : (
          <button
            className="text-3xl text-black p-5"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        )}
      </div>

      {/* Sidebar menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen md:w-1/4 w-full bg-white flex flex-col items-center justify-center shadow-lg z-40">
          <nav
            style={{ fontFamily: "Garamond" }}
            className="flex flex-col gap-6 md:text-xl text-2xl text-black"
          >
            <a href="#farmhouse" onClick={() => setIsOpen(false)}>
              The Farmhouse
            </a>
            <a href="#accommodation" onClick={() => setIsOpen(false)}>
              Amenities
            </a>
            <a href="#area" onClick={() => setIsOpen(false)}>
              The Area
            </a>
            <a href="#TTD" onClick={() => setIsOpen(false)}>
              Things To Do
            </a>
            <a href="#location" onClick={() => setIsOpen(false)}>
              Location
            </a>
            <a href="#contactUs" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}