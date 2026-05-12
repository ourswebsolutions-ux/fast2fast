'use client'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaCogs, FaPhoneAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "flex items-center gap-2 hover:text-red-500 transition text-base lg:text-[17px] font-medium";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md shadow-lg" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-0">

        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="w-44">
            <img src="/logo.png" alt="Logo" className="h-auto w-full" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 font-medium">

            <a href="#" className={linkClass}>
              <FaHome size={16} /> Home
            </a>

            <a href="#" className={linkClass}>
              <FaInfoCircle size={16} /> About Us
            </a>

            <a href="#" className={linkClass}>
              <FaCogs size={16} /> Services
            </a>

            <a href="#" className={linkClass}>
              <FaPhoneAlt size={16} /> Contact
            </a>

          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <FaFacebookF size={24} className="text-blue-500 hover:text-[#AF1E23]" />
            <FaTwitter size={24} className="text-blue-400 hover:text-[#AF1E23]" />
            <FaInstagram size={24} className="text-purple-500 hover:text-[#AF1E23]" />
            <FaLinkedinIn size={24} className="text-blue-500 hover:text-[#AF1E23]" />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 py-6">

            <div className="flex flex-col gap-6 text-center text-xl font-medium">

              <a href="#" className={linkClass + " justify-center"}>
                <FaHome size={18} /> Home
              </a>

              <a href="#" className={linkClass + " justify-center"}>
                <FaInfoCircle size={18} /> About Us
              </a>

              <a href="#" className={linkClass + " justify-center"}>
                <FaCogs size={18} /> Services
              </a>

              <a href="#" className={linkClass + " justify-center"}>
                <FaPhoneAlt size={18} /> Contact
              </a>

            </div>

            <div className="flex justify-center gap-6 mt-8">
              <FaFacebookF size={28} />
              <FaTwitter size={28} />
              <FaInstagram size={28} />
              <FaLinkedinIn size={28} />
            </div>

          </div>
        )}

      </div>
    </nav>
  );
}