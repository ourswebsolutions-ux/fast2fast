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
  TrendingDown,
  TrendingUp,
  LineChart,
  Menu,
  X,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ================= PRICE ITEM COMPONENT ================= */
const PriceItem = ({ label, price, change, isDown }: any) => (
  <div className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0">
    <span className="font-bold text-white text-[13.5px]">{label}</span>
    {price && <span className="text-white text-[13.5px] ml-0.5">{price}</span>}
    <div className={`flex items-center text-[13.5px] ml-0.5 font-medium ${isDown ? "text-[#FF4D4D]" : "text-[#00E676]"}`}>
      {isDown ? <TrendingDown size={14} className="mr-0.5" /> : <TrendingUp size={14} className="mr-0.5" />}
      <span>({change})</span>
    </div>
    <ChevronDown size={14} className="text-white ml-0.5 font-bold" />
  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black font-sans selection:bg-[#C9B067] relative">
      
      {/* 1. TOP TICKER BAR - All Items visible via horizontal scroll on Mobile */}
      <div className="h-[40px] flex items-center border-b border-zinc-200 w-full">
        <div className="max-w-[1350px] mx-auto w-full flex items-center justify-between px-4 overflow-hidden">
          
          {/* Scrollable Container for ALL items */}
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2 w-full lg:w-auto">
            <PriceItem label="Zlato" price="1249,3 USD/oz" change="0,06 $" isDown={true} />
            <PriceItem label="Stříbro" price="16,39 USD/oz" change="0,54 $" isDown={false} />

            <div className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0">
              <LineChart size={16} className="text-white" />
              <span className="text-white text-[13.5px] font-bold">Aktuální ceny</span>
              <ChevronDown size={14} className="text-white" />
            </div>

            <PriceItem label="USD" change="0,06 $" isDown={true} />
            <PriceItem label="EUR" change="0,06 €" isDown={false} />
            <PriceItem label="GBP" change="0,06 £" isDown={true} />

            {/* Added Language & Currency to Mobile Scroll */}
            <div className="flex items-center gap-6 shrink-0 lg:hidden">
                <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                  <div className="relative w-5 h-3.5"><Image src="https://flagcdn.com/cz.svg" alt="CZ" fill className="object-cover" /></div>
                  <span className="text-white text-[13px] font-bold">Česky</span>
                  <ChevronDown size={14} className="text-white" />
                </div>
                <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                  <span className="text-white text-[13px] font-bold">CZK / Kč</span>
                  <ChevronDown size={14} className="text-white" />
                </div>
            </div>
          </div>

          {/* Language & Currency (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-6 ml-4 shrink-0">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-5 h-3.5"><Image src="https://flagcdn.com/cz.svg" alt="CZ" fill className="object-cover" /></div>
              <span className="text-white text-[13px] font-bold">Česky</span>
              <ChevronDown size={14} className="text-white" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-white text-[13px] font-bold">CZK / Kč</span>
              <ChevronDown size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="h-[80px] lg:h-[100px] flex items-center px-4 max-w-[1350px] mx-auto justify-between">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
          <h1 className="text-white text-2xl sm:text-4xl font-black tracking-tighter">GULDEN</h1>
          <div className="w-2 h-2 bg-zinc-500 rotate-45"></div>
        </div>

        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center px-10">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-white" strokeWidth={2.5} />
              <span className="text-white text-lg font-bold">800 01 02 03</span>
            </div>
            <div className="flex flex-1 max-w-[500px] h-[45px]">
              <input type="text" placeholder="Napište co hledáte" className="flex-1 bg-white px-6 text-zinc-500 text-[15px] outline-none" />
              <button className="w-[60px] bg-[#C9B067] flex items-center justify-center"><Search className="text-white" size={24} /></button>
            </div>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:flex items-center">
            <div className="px-4 text-center cursor-pointer text-white group">
                <Heart size={24} strokeWidth={1.5} className="mx-auto group-hover:text-[#C9B067]" />
                <span className="text-[13px]">Oblíbené</span>
            </div>
            <div className="px-4 text-center cursor-pointer text-white group">
                <User size={24} strokeWidth={1.5} className="mx-auto group-hover:text-[#C9B067]" />
                <span className="text-[13px]">Přihlášení</span>
            </div>
            <div className="px-4 text-center cursor-pointer text-white relative group">
                <ShoppingCart size={24} strokeWidth={1.5} className="mx-auto group-hover:text-[#C9B067]" />
                <span className="absolute top-[-5px] right-3 bg-[#C9B067] text-black text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">9</span>
                <span className="text-[13px]">Košík</span>
            </div>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 p-4 absolute w-full z-50 shadow-2xl">
          <div className="flex h-[48px] mb-6">
            <input type="text" placeholder="Napište co hledáte" className="flex-1 bg-white px-4 text-black outline-none" />
            <button className="w-[55px] bg-[#C9B067] flex items-center justify-center"><Search className="text-white" size={22} /></button>
          </div>

          <div className="flex items-center justify-between px-2 pb-2">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Phone size={20} className="text-[#C9B067]" /></div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Volat</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Heart size={20} className="text-white" /></div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Oblíbené</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><User size={20} className="text-white" /></div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Účet</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 relative">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <ShoppingCart size={20} className="text-white" />
                <span className="absolute top-0 right-0 bg-[#C9B067] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">9</span>
              </div>
              <span className="text-[11px] text-zinc-400 font-bold uppercase">Košík</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}