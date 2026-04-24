"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Heart,
  User,
  Phone,
  ChevronDown,
  LineChart,
  Menu,
  X,
  ShoppingCart,
  Database,
  ArrowDown,
  ArrowUp
} from "lucide-react";
import { cn } from "@/lib/utils";

// Components Import
import ActualniCeny from "../topBarComponents/ActualniCeny";
import MarketControls from "../topBarComponents/MarketControls";
import ExtendedChart from "../topBarComponents/ExtendedChart";

/* ================= PRICE ITEM COMPONENT ================= */
const PriceItem = ({ label, price, change, isDown, onMouseEnter, onClick, active, hasDropdown, showIcon = true }: any) => (
  <div
    className={cn(
      "flex items-center gap-0.5 whitespace-nowrap shrink-0 group transition-colors",
      hasDropdown ? "cursor-pointer" : "cursor-default",
      active ? "text-[rgb(199,177,93)]" : "text-white"
    )}
    onMouseEnter={hasDropdown ? onMouseEnter : undefined}
    onClick={hasDropdown ? onClick : undefined}
  >
    <span className={cn("font-bold text-[11.5px]", (hasDropdown && !active) && "group-hover:text-[#C9B067]")}>
      {label}
    </span>
    {price && <span className="text-[11.5px] ml-0.5">{price}</span>}
    <div className={`flex items-center text-[13.5px] ml-0.5 font-medium ${isDown ? "text-[#FF4D4D]" : "text-[#00E676]"}`}>
      {isDown ? <ArrowDown size={14} className="mr-0.5" /> : <ArrowUp size={14} className="mr-0.5" />}
      <span>({change})</span>
    </div>
 {showIcon && (
  <div
    className={cn(
      "ml-1 transition-transform duration-300",
      active && "rotate-180"
    )}
  >
    {/* Down arrow by default */}
    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent mt-1 border-t-[5px] border-t-white"></div>
  </div>
)}
  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dropdown States
  const [pricesOpen, setPricesOpen] = useState(false);
  const [pricesPinned, setPricesPinned] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [marketPinned, setMarketPinned] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);
  const [chartPinned, setChartPinned] = useState(false);

  const handleMouseLeaveTopBar = () => {
    if (!pricesPinned) setPricesOpen(false);
    if (!marketPinned) setMarketOpen(false);
    if (!chartPinned) setChartOpen(false);
  };

  return (
    <header className="w-full bg-black font-sans selection:bg-[rgb(199,177,93)] relative">

      {/* 1. TOP TICKER BAR */}
      <div
        className="h-[40px] flex items-center border-b border-zinc-400 w-full relative z-[60]"
        onMouseLeave={handleMouseLeaveTopBar}
      >
        <div className="max-w-[1350px] mx-auto w-full flex items-center justify-between px-4 overflow-hidden">

          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2 w-full lg:w-auto">
            {/* Market Trigger */}
            <PriceItem
              label="Zlato" price="1249,3 USD/oz" change="0,06 $" isDown={true}
              hasDropdown={true}
              active={marketOpen || marketPinned}
              onMouseEnter={() => { setMarketOpen(true); setPricesOpen(false); setChartOpen(false); }}
              onClick={() => { setMarketPinned(!marketPinned); setMarketOpen(!marketPinned); }}
            />

            <PriceItem
              label="Stříbro" price="16,39 USD/oz" change="0,54 $" isDown={false}
              hasDropdown={false}
              showIcon={true}
            />

            {/* Prices Trigger */}
            <div
              className={cn(
                "flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 group transition-colors",
                (pricesOpen || pricesPinned) ? "text-[#C9B067]" : "text-white"
              )}
              onMouseEnter={() => { setPricesOpen(true); setMarketOpen(false); setChartOpen(false); }}
              onClick={() => { setPricesPinned(!pricesPinned); setPricesOpen(!pricesPinned); }}
            >
              <LineChart size={16} />
              <span className="text-[13.5px] font-bold">Aktuální ceny</span>
              <ChevronDown size={14} className={cn("transition-transform duration-300", (pricesOpen || pricesPinned) && "rotate-180")} />
            </div>

            {/* Currency Chart Trigger */}
            <PriceItem
              label="USD" change="0,06 $" isDown={true}
              hasDropdown={true}
              active={chartOpen || chartPinned}
              onMouseEnter={() => { setChartOpen(true); setMarketOpen(false); setPricesOpen(false); }}
              onClick={() => { setChartPinned(!chartPinned); setChartOpen(!chartPinned); }}
            />

            <PriceItem label="EUR" change="0,06 €" isDown={false} hasDropdown={false} showIcon={true} />
            <PriceItem label="GBP" change="0,06 £" isDown={true} hasDropdown={false} showIcon={true} />

            {/* Mobile Selectors (Hidden on Desktop) */}
            <div className="flex items-center gap-6 shrink-0 lg:hidden">
              <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                <div className="relative w-5 h-3.5"><Image src="https://flagcdn.com/cz.svg" alt="CZ" fill className="object-cover" /></div>
                <span className="text-white text-[13px] font-bold">Česky</span>
                <ChevronDown size={14} className="text-white" />
              </div>

              <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                <Database size={16} className="text-white" strokeWidth={2.5} />
                <span className="text-white text-[13px] font-bold">CZK / Kč</span>
                <ChevronDown size={14} className="text-white" />
              </div>
            </div>
          </div>

          {/* Desktop Selectors (Visible on LG) */}
          <div className="hidden lg:flex items-center gap-6 ml-4 shrink-0">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-5 h-3.5"><Image src="https://flagcdn.com/cz.svg" alt="CZ" fill className="object-cover" /></div>
              <span className="text-white text-[13px] font-bold">Česky</span>
              <ChevronDown size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Database size={16} className="text-white" strokeWidth={2.5} />
              <span className="text-white text-[13px] font-bold">CZK / Kč</span>
              <ChevronDown size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* DROPDOWN AREA */}
      <div className="relative w-full bg-black">
        <div
          className={cn("w-full overflow-hidden transition-all duration-500 ease-in-out", marketOpen ? "max-h-[1200px] opacity-100 border-b border-zinc-400" : "max-h-0 opacity-0")}
          onMouseEnter={() => setMarketOpen(true)}
          onMouseLeave={() => { if (!marketPinned) setMarketOpen(false); }}
        >
          <MarketControls />
        </div>

        <div
          className={cn("w-full overflow-hidden transition-all duration-500 ease-in-out", pricesOpen ? "max-h-[1200px] opacity-100 border-b border-zinc-800" : "max-h-0 opacity-0")}
          onMouseEnter={() => setPricesOpen(true)}
          onMouseLeave={() => { if (!pricesPinned) setPricesOpen(false); }}
        >
          <ActualniCeny />
        </div>

        <div
          className={cn("w-full overflow-hidden transition-all duration-500 ease-in-out", chartOpen ? "max-h-[1200px] opacity-100 border-b border-zinc-800" : "max-h-0 opacity-0")}
          onMouseEnter={() => setChartOpen(true)}
          onMouseLeave={() => { if (!chartPinned) setChartOpen(false); }}
        >
          <ExtendedChart />
        </div>
      </div>

      {/* 2. MAIN NAVBAR CONTENT */}
      <div className="h-[80px] lg:h-[100px] flex items-center px-4 max-w-[1350px] mx-auto justify-between relative z-50 bg-black">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
          <a href="./">
          <p className="text-white text-4xl sm:text-4xl  ">GULDEN</p>
          </a>
          <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
        </div>

        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center px-10">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Phone size={18} className="text-white group-hover:text-[#C9B067]" strokeWidth={2.5} />
            <span className="text-white text-lg font-bold">800 01 02 03</span>
          </div>
          <div className="flex flex-1 max-w-[500px] h-[45px]">
            <input type="text" placeholder="Napište co hledáte" className="flex-1 bg-white px-6 text-zinc-500 text-[15px] outline-none" />
            <button className="w-[60px] bg-[rgb(199,177,93)] flex items-center justify-center hover:bg-[#b39e55]"><Search className="text-white" size={24} /></button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center">
            <div className="px-4 text-center cursor-pointer text-white group">
              <Heart size={24} strokeWidth={1.5} className="mx-auto group-hover:text-[rgb(199,177,93)]" />
              <span className="text-[13px]">Oblíbené</span>
            </div>
            <div className="px-4 text-center cursor-pointer text-white group">
              <User size={24} strokeWidth={1.5} className="mx-auto group-hover:text-[rgb(199,177,93)]" />
              <span className="text-[13px]">Přihlášení</span>
            </div>
            <div className="px-4 text-center cursor-pointer text-white relative group">
              <ShoppingCart size={24} strokeWidth={1.5} className="mx-auto group-hover:text-[rgb(199,177,93)]" />
              <span className="absolute top-[-5px] right-3 bg-[rgb(199,177,93)] text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">9</span>
              <span className="text-[13px]">Košík</span>
            </div>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 p-4 absolute w-full z-50 shadow-2xl">
          <div className="flex h-[48px] mb-6">
            <input type="text" placeholder="Napište co hledáte" className="flex-1 bg-white px-4 text-black outline-none" />
            <button className="w-[55px] bg-[rgb(199,177,93)] flex items-center justify-center hover:bg-[#b39e55]"><Search className="text-white" size={22} /></button>
          </div>

          <div className="flex items-center justify-between px-2 pb-2 group">
            <div className="flex flex-col items-center gap-1.5 ">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Phone size={20} className="text-white group-hover:text-[rgb(199,177,93)]" /></div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Volat</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Heart size={20} className="text-white group-hover:text-[rgb(199,177,93)]" /></div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Oblíbené</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><User size={20} className="text-white group-hover:text-[rgb(199,177,93)]" /></div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Účet</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 relative">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <ShoppingCart size={20} className="text-white group-hover:text-[rgb(199,177,93)]" />
                <span className="absolute top-0 right-0 bg-[rgb(199,177,93)] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">9</span>
              </div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Košík</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}