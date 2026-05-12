'use client'
// app/components/Navbar.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between ">
          {/* Logo */}
         <div className="flex items-center gap-3   w-50">
  <img 
    src="/logo.png" 
    alt="Logo" 
    className="h- w-auto" 
  />
</div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            <a href="#" className="hover:text-red-500 transition">Home</a>
            <a href="#" className="hover:text-red-500 transition">ABOUT US</a>
            <a href="#" className="hover:text-red-500 transition">SERVICES</a>
            <a href="#" className="hover:text-red-500 transition">Contact Us</a>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-blue-500 hover:text-[#AF1E23]"><FaFacebookF size={23} /></a>
            <a href="#" className="text-blue-400 hover:text-[#AF1E23]"><FaTwitter size={23} /></a>
            <a href="#" className="text-purple-500 hover:text-[#AF1E23]"><FaInstagram size={23} /></a>
            <a href="#" className="text-blue-500 hover:text-[#AF1E23]"><FaLinkedinIn size={23} /></a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border py-6">
            <div className="flex flex-col gap-6 text-center text-lg">
              <a href="#" className="hover:text-red-500">Home</a>
              <a href="#" className="hover:text-red-500">ABOUT US</a>
              <a href="#" className="hover:text-red-500">SERVICES</a>
              <a href="#" className="hover:text-red-500">Contact Us</a>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-blue-500 hover:text-[#AF1E23]"><FaFacebookF size={28} /></a>
              <a href="#" className="text-blue-400 hover:text-[#AF1E23]"><FaTwitter size={28} /></a>
              <a href="#" className="text-purple-500 hover:text-[#AF1E23]"><FaInstagram size={28} /></a>
              <a href="#" className="text-blue-500 hover:text-[#AF1E23]"><FaLinkedinIn size={28} /></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}