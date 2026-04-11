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
import GridLayout from "./GridLayout";

interface NavItemProps {
  icon: React.ElementType;
  label?: string;
  href: string;
  badge?: string;
}

/* ================= PRICE ITEM ================= */
const PriceItem = ({
  label,
  price,
  change,
  isDown,
}: {
  label: string;
  price?: string;
  change: string;
  isDown: boolean;
}) => (
  <div className="flex items-center gap-1.5 cursor-pointer group whitespace-nowrap">
    <span className="font-bold text-white text-[11px] uppercase tracking-tight">
      {label}
    </span>
    {price && <span className="text-zinc-300 text-[11px]">{price}</span>}
    <div
      className={cn(
        "flex items-center gap-0.5 text-[10px]",
        isDown ? "text-[#FF4D4D]" : "text-[#00E676]"
      )}
    >
      {isDown ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
      <span>({change})</span>
    </div>
    <ChevronDown
      size={12}
      className="text-zinc-500 group-hover:text-white transition-colors"
    />
  </div>
);

/* ================= NAV ACTION ================= */
const NavAction = ({ icon: Icon, label, href, badge }: NavItemProps) => (
  <Link
    href={href}
    className="group flex flex-col items-center gap-1 transition-all duration-200 hover:opacity-80 relative"
  >
    <div className="relative">
      <Icon
        className="h-6 w-6 text-white transition-colors group-hover:text-[#C9B067]"
        strokeWidth={1.5}
      />
      {badge && (
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9B067] text-[10px] font-bold text-black">
          {badge}
        </span>
      )}
    </div>
    {label && (
      <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-white lg:block">
        {label}
      </span>
    )}
  </Link>
);

/* ================= NAVBAR ================= */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black font-sans text-white relative">
      {/* ================= TOP BAR ================= */}
      <div className="py-2.5 border-b border-white/10">
        <GridLayout className="items-center">
          <div className="col-span-12 lg:col-span-9">
            {/* MOBILE: Total 8 spots (4 rows, 2 items each) */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 sm:hidden px-2">
              <PriceItem label="Zlato" price="1249,3" change="0,06 $" isDown />
              <PriceItem label="Stříbro" price="16,39" change="0,54 $" isDown={false} />
              
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <LineChart size={14} className="text-zinc-400" />
                <span className="text-[11px] font-bold uppercase tracking-tight">Aktuální ceny</span>
                <ChevronDown size={12} className="text-zinc-500" />
              </div>

              <PriceItem label="USD" change="0,06 $" isDown />
              <PriceItem label="EUR" change="0,06 €" isDown={false} />
              <PriceItem label="GBP" change="0,06 £" isDown />

              {/* Added Language/Currency to Mobile Top Bar for total 8 items */}
              <div className="flex items-center gap-1 text-[11px] font-bold uppercase">
                <div className="relative h-2 w-3">
                  <Image src="https://flagcdn.com/w20/cz.png" alt="CZ" fill className="object-cover" />
                </div>
                <span>Česky</span>
              </div>
              <div className="text-[11px] font-bold uppercase text-zinc-300">CZK / Kč</div>
            </div>

            {/* DESKTOP */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-7 overflow-x-auto no-scrollbar">
              <PriceItem label="Zlato" price="1249,3 USD/oz" change="0,06 $" isDown />
              <PriceItem label="Stříbro" price="16,39 USD/oz" change="0,54 $" isDown={false} />
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <LineChart size={14} className="text-zinc-400" />
                <span className="text-[11px] font-bold uppercase tracking-tight">Aktuální ceny</span>
                <ChevronDown size={12} className="text-zinc-500" />
              </div>
              <PriceItem label="USD" change="0,06 $" isDown />
              <PriceItem label="EUR" change="0,06 €" isDown={false} />
              <PriceItem label="GBP" change="0,06 £" isDown />
            </div>
          </div>

          {/* RIGHT SETTINGS (Desktop) */}
          <div className="hidden sm:flex col-span-3 items-center justify-end gap-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="relative h-3 w-4">
                <Image src="https://flagcdn.com/w20/cz.png" alt="CZ" fill className="object-cover" />
              </div>
              <span className="text-[11px] font-bold uppercase">Česky</span>
              <ChevronDown size={12} className="text-zinc-500" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-300 group-hover:text-white">CZK / Kč</span>
              <ChevronDown size={12} className="text-zinc-500" />
            </div>
          </div>
        </GridLayout>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="py-4 bg-black">
        <GridLayout className="items-center">
          {/* LOGO AREA - Only 1 GULDEN will show because menu doesn't cover it */}
          <div className="col-span-12 flex items-center justify-between lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rotate-45 bg-zinc-600" />
              <Link href="/" className="text-2xl font-extrabold tracking-tighter sm:text-3xl">
                GULDEN
              </Link>
              <span className="h-1.5 w-1.5 rotate-45 bg-zinc-600" />
            </div>

            {/* MOBILE MENU TOGGLE (Menu/X Icon) */}
            <button className="lg:hidden p-1 z-[60]" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* DESKTOP ONLY */}
          <div className="hidden lg:flex items-center gap-3 lg:col-span-2">
            <Phone className="h-5 w-5 text-[#C9B067]" />
            <span className="text-sm font-extrabold">800 01 02 03</span>
          </div>

          <div className="hidden lg:block lg:col-span-5 px-4">
            <form className="flex w-full">
              <input type="text" placeholder="Napište co hledáte" className="h-12 flex-1 bg-white px-5 text-sm text-black outline-none" />
              <button className="h-12 bg-[#C9B067] px-5 hover:bg-[#b39b5a] transition-colors"><Search className="h-5 w-5 text-white" /></button>
            </form>
          </div>

          <div className="hidden lg:flex items-center justify-end gap-8 lg:col-span-3">
            <NavAction href="#" icon={Heart} label="Oblíbené" />
            <NavAction href="#" icon={User} label="Přihlášení" />
            <NavAction href="#" icon={ShoppingCart} label="Košík" badge="9" />
          </div>

          {/* ================= MOBILE DROPDOWN (Logo removed from here) ================= */}
          {open && (
            <div className="absolute top-full left-0 w-full z-50 bg-black lg:hidden border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
              <div className="p-4 pt-6">
                {/* Logo and GULDEN text removed to prevent double logo */}
                
                <form className="flex w-full mb-8">
                  <input type="text" placeholder="Napište co hledáte" className="h-12 flex-1 bg-white px-5 text-sm text-black outline-none" />
                  <button className="h-12 bg-[#C9B067] px-5"><Search className="h-5 w-5 text-white" /></button>
                </form>

                <div className="flex items-center justify-between px-2 mb-10">
                  <NavAction href="tel:800010203" icon={Phone} />
                  <NavAction href="#" icon={Heart} />
                  <NavAction href="#" icon={User} />
                  <NavAction href="#" icon={ShoppingCart} badge="9" />
                </div>
              </div>
            </div>
          )}
        </GridLayout>
      </div>
    </header>
  );
}