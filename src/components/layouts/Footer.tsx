"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#3d3d3d] text-white overflow-hidden">

      {/* RED BACKGROUND */}
      <div
        className="absolute right-0 top-0 h-full w-full md:w-[42%] bg-[#e3503e] z-0"
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl mx-auto  sm:px-8 lg:px-6 py-14 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-10 md:gap-12">

        {/* LOGO + SOCIAL */}
        <div className="md:col-span-2 flex flex-col items-start md:items-start text-center md:text-left">

          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-28 sm:h-32 md:h-40 w-auto object-contain"
          />

          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-[#AF1E23] transition" />
            <FaTwitter className="cursor-pointer hover:text-[#AF1E23] transition" />
            <FaInstagram className="cursor-pointer hover:text-[#AF1E23] transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#AF1E23] transition" />
          </div>
        </div>

        {/* ABOUT */}
        <div className="md:col-span-2">
          <h3 className="text-white text-xl sm:text-2xl font-bold border-l-4 border-[#AF1E23] pl-3 mb-4">
            About Us
          </h3>

          <p className="text-[#77c7e4] text-sm sm:text-[15px] md:text-[16px] leading-relaxed">
            Al Rasheediah Safety & Security was established in 2000 with a mission
            to improve safety training standards and workplace compliance across
            industries with high-quality professional services.
          </p>
        </div>

        {/* CONTACT */}
        <div className="md:col-span-2">
          <h3 className="text-white text-xl sm:text-2xl font-bold border-l-4 border-[#AF1E23] pl-3 mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-sm sm:text-[15px]">
            <p><span className="font-semibold">Address:</span> Musaffah 17, Abu Dhabi</p>
            <p><span className="font-semibold">Phone:</span> +971 2 5547955</p>
            <p><span className="font-semibold">Email:</span> info@alrasheediah.com</p>
          </div>
        </div>

        {/* QR */}
        <div className="">

          <div className="">
            <img
              src="/qr.png"
              alt="QR Code"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
            />
          </div>


        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 w-full bg-white py-5 px-4">
        <p className="text-[#AF1E23] text-sm sm:text-base md:text-lg font-bold text-center leading-relaxed">
          © 2026 Al Rasheediah Safety & Security EST. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;