"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  ArrowDown,
  TrendingUp,
  LineChart,
} from "lucide-react";

/**
 * Updated to match the exact pixel-perfect design provided in the image.
 * Features:
 * - Specific hex colors: #C9B067 (Gold), #FF4D4D (Red), #00E676 (Green)
 * - Exact typography and spacing based on the visual layout.
 */

/* ================= PRICE ITEM COMPONENT ================= */
const PriceItem = ({
  label,
  price,
  change,
  isDown,
  hideSymbol = false,
}: {
  label: string;
  price?: string;
  change: string;
  isDown: boolean;
  hideSymbol?: boolean;
}) => (
  <div className="flex items-center gap-2 cursor-pointer">
    <span className="font-bold text-white text-[13.5px]">{label}</span>
    {price && <span className="text-white text-[13.5px] ml-0.5">{price}</span>}
    <div
      className={`flex items-center text-[13.5px] ml-0.5 font-medium ${
        isDown ? "text-[#FF4D4D]" : "text-[#00E676]"
      }`}
    >
      {isDown ? (
        <ArrowDown size={14} className="mr-0.5" />
      ) : (
        <TrendingUp size={14} className="mr-0.5" />
      )}
      <span>({change})</span>
    </div>
    <ChevronDown size={14} className="text-white ml-0.5 font-bold" />
  </div>
);

/* ================= NAV ACTION COMPONENT ================= */
const NavAction = ({
  icon: Icon,
  label,
  badge,
}: {
  icon: any;
  label: string;
  badge?: string;
}) => (
  <div className="flex flex-col items-center justify-center cursor-pointer group px-4">
    <div className="relative mb-1">
      <Icon size={24} strokeWidth={1.5} className="text-white" />
      {badge && (
        <div className="absolute -top-2 -right-3 bg-[#C9B067] text-black text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center border border-black">
          {badge}
        </div>
      )}
    </div>
    <span className="text-white text-[13px] font-medium tracking-wide">
      {label}
    </span>
  </div>
);

export default function Navbar() {
  return (
    <header className="w-full bg-black font-sans selection:bg-[#C9B067]">
      {/* 1. TOP TICKER BAR */}
      <div className="h-[40px]  border-zinc-800 flex items-center px-4 max-w-[1440px] mx-auto justify-between overflow-hidden">
        <div className="flex items-center gap-9 ml-2">
          <PriceItem
            label="Zlato"
            price="1249,3 USD/oz"
            change="0,06 $"
            isDown={true}
          />
          <PriceItem
            label="Stříbro"
            price="16,39 USD/oz"
            change="0,54 $"
            isDown={false}
          />

          <div className="flex items-center gap-1.5 cursor-pointer">
            <LineChart size={16} className="text-white" />
            <span className="text-white text-[13.5px] font-bold">
              Aktuální ceny
            </span>
            <ChevronDown size={14} className="text-white" />
          </div>

          <PriceItem label="USD" change="0,06 $" isDown={true} />
          <PriceItem label="EUR" change="0,06 €" isDown={false} />
          <PriceItem label="GBP" change="0,06 £" isDown={true} />
        </div>

        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-5 h-3.5 overflow-hidden rounded-[1px]">
              <Image
                src="https://flagcdn.com/cz.svg"
                alt="Czech Flag"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white text-[13px] font-bold">Česky</span>
            <ChevronDown size={14} className="text-white" />
          </div>

          {/* Currency Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center">
              <div className="w-3 h-1.5 border-b-2 border-zinc-400"></div>
            </div>
            <span className="text-white text-[13px] font-bold">CZK / Kč</span>
            <ChevronDown size={14} className="text-white" />
          </div>
        </div>
      </div>
<hr className="text-white"></hr>
      {/* 2. MAIN NAVBAR */}
      <div className="h-[100px] flex items-center px-4 max-w-[1440px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3 min-w-[220px]">
          <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
          <h1 className="text-white text-4xl font-black tracking-tighter">
            GULDEN
          </h1>
          <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
        </div>

        {/* Phone Section */}
        <div className="flex items-center gap-3 ml-12">
          <div className="text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span className="text-white text-lg  tracking-tight">
            800 01 02 03
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-[650px] mx-10 flex h-[45px]">
          <input
            type="text"
            placeholder="Napište co hledáte"
            className="flex-1 bg-white px-6 text-zinc-500 text-[15px] outline-none"
          />
          <button className="w-[60px] bg-[#C9B067] flex items-center justify-center hover:brightness-110 transition-all">
            <Search className="text-white" size={24} />
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center divide-x divide-transparent ml-auto">
          <NavAction icon={Heart} label="Oblíbené" />
          <NavAction icon={User} label="Přihlášení" />
          <NavAction icon={ShoppingCart} label="Košík" badge="9" />
        </div>
      </div>
    </header>
  );
}