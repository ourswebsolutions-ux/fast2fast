"use client";
import React, { useState } from 'react';
import { Heart, Check, Plus, Minus, ChevronDown } from 'lucide-react';
import SalesPopup from './SalesPopup';

const HeroSection: React.FC = () => {
    // States
    const [quantity, setQuantity] = useState<number>(1);
    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
    const [accQuantities, setAccQuantities] = useState<number[]>([1, 1]);
    const [selectedAccs, setSelectedAccs] = useState<number[]>([0]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Handlers
    const handleAccQty = (index: number, type: 'inc' | 'dec') => {
        const newQtys = [...accQuantities];
        if (type === 'inc') newQtys[index] += 1;
        else if (newQtys[index] > 1) newQtys[index] -= 1;
        setAccQuantities(newQtys);
    };

    const toggleCheckbox = (index: number) => {
        setSelectedAccs(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-6 md:py-10 px-3 md:px-4 bg-gray-50 font-sans">
            <div className="max-w-[1350px] mx-auto grid grid-cols-12 gap-8 lg:gap-12">

                {/* Left Side: Image Gallery */}
                <div className="col-span-12 md:col-span-6 lg:col-span-7 rounded">
                    <div className="relative bg-white border border-gray-100 p-4 pt-24 md:pt-10 md:p-8 flex flex-col md:flex-row justify-center items-center min-h-[350px] md:min-h-[550px]">

                        {/* Badges Container */}
                        <div className="flex md:absolute flex-col gap-1.5 z-10 w-full md:w-auto md:top-6 md:left-6 mb-4 md:mb-0">

                            {/* 1. Novinka - White with Gray Border & Scalloped Corners */}
                            <span
                                className="w-fit bg-white text-black text-[11px] px-3 py-1 border border-[#e5e7eb] relative"
                                style={{
                                    mask: "radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%",
                                    maskSize: "51% 51%",
                                    maskRepeat: "no-repeat",
                                    WebkitMask: "radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%",
                                    WebkitMaskSize: "51% 51%",
                                    WebkitMaskRepeat: "no-repeat"
                                }}
                            >
                                Novinka
                            </span>

                            {/* 2. Množstevní slevy % - Solid Black & Scalloped Corners */}
                            <span
                                className="w-fit bg-black text-white text-[11px] px-3 py-1 font-semibold relative"
                                style={{
                                    mask: "radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%",
                                    maskSize: "51% 51%",
                                    maskRepeat: "no-repeat",
                                    WebkitMask: "radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%",
                                    WebkitMaskSize: "51% 51%",
                                    WebkitMaskRepeat: "no-repeat"
                                }}
                            >
                                Množstevní slevy %
                            </span>

                            {/* 3. Online výkupní cena - Light Gray Background & Scalloped Corners */}
                            <span
                                className="w-fit bg-[#f2f2f2] text-[#2b2a2a] text-[11px] px-3 py-1 border border-[#e0e0e0] relative"
                                style={{
                                    mask: "radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%",
                                    maskSize: "51% 51%",
                                    maskRepeat: "no-repeat",
                                    WebkitMask: "radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%",
                                    WebkitMaskSize: "51% 51%",
                                    WebkitMaskRepeat: "no-repeat"
                                }}
                            >
                                Online výkupní cena
                            </span>
                        </div>

                        {/* Wishlist Button */}
                        <button onClick={() => setIsWishlisted(!isWishlisted)} className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                            <Heart size={32} strokeWidth={1.2} className={`transition-all ${isWishlisted ? 'fill-[#C5A059] text-[#C5A059]' : 'text-gray-300'}`} />
                        </button>

                        <img
                            src="/imgcoin.svg"
                            alt="Coin"
                            className="w-[55%] md:max-w-[320px] lg:max-w-[380px] h-auto object-contain drop-shadow-2xl mt-4 md:mt-0"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className={`min-w-[64px] w-16 h-16 md:w-20 md:h-20 border p-1 cursor-pointer transition-all hover:border-[#C5A059] ${i === 0 ? 'border-[#C5A059]' : 'border-gray-300'}`}>
                                <img src="/imgcoin.svg" alt="thumb" className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <h1 className="text-2xl md:text-3xl font-sans font-medium text-[#292929] leading-tight ">
                        Kanada 50$ 2018 Maple Leaf 1 oz 999,9/1000 Au
                    </h1>

                    <p className="text-[#5a5959] text-[13px] mt-4 leading-relaxed">
                        Kanadská královská mincovna razí investiční mince Maple Leaf (javorový list) již od roku 1979. Tvůrcem návrhu mince je Walter Ott. Mince neobsahují žádné jiné kovy, jen čisté zlato vytěžené ve zlatých dolech v Kanadě. <span className="text-[#C5A059] border-b border-[#C5A059] cursor-pointer ml-1">Více informací</span>
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-8">
                        <button className="w-[140px] bg-[#C5A059] text-white py-3 font-bold text-sm hover:bg-[#b38f4d] transition-colors">Chci koupit</button>
                        {/* Width fixed and Hover added */}
                        <button className="w-[140px] border border-gray-300 flex items-center justify-between px-4 py-3 text-sm text-[#333333] font-medium hover:bg-gray-50 transition-colors">
                            Chci prodat <ChevronDown size={18} className="text-gray-400" />
                        </button>
                    </div>

                    {/* Price Section */}
                    <div className="mt-8">
                        <div className="text-[#E54B4B] text-sm line-through font-medium">46 003 Kč</div>
                        <div className="flex items-baseline gap-4 mt-1">
                            <span className="text-3xl md:text-4xl font-medium text-[#00A651]">45 703 Kč</span>
                            <span className="text-[#C5A059] text-xs underline cursor-pointer font-bold">Hlídat cenu</span>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-[13px]">
                        <div className="flex items-center gap-1.5 text-[#666666] font-bold">
                            {/* Check icon ka color green kar diya gaya hai */}
                            <Check size={20} strokeWidth={3} className="text-[#00A651]" /> Skladem
                        </div>
                        <div className="text-[#00A651]">Můžeme doručit do <span className="text-[#00A651] font-bold">10.01.2023</span></div>
                        <div className="text-[#C5A059] underline cursor-pointer font-bold">Možnosti dopravy</div>
                    </div>

                    {/* Main Cart Area */}
                    <div className="flex gap-2 mt-8 h-12">
                        <div className="flex items-center border border-gray-200">
                            <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="w-10 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors"><Minus size={14} /></button>
                            <input type="text" value={quantity} readOnly className="w-12 text-center text-sm font-bold text-[#333333]" />
                            <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors"><Plus size={14} /></button>
                        </div>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="w-full bg-[#00A651] hover:bg-[#008d44] text-white text-[13px] font-bold tracking-wider transition-colors py-3.5"
                        >
                            Přidat do košíku
                        </button>

                        {/* Sales Popup Component */}
                        <SalesPopup
                            isOpen={isPopupOpen}
                            onClose={() => setIsPopupOpen(false)}
                        />                    </div>

                    {/* Pricing Table - All text weights synced */}
<div className="mt-10 border border-gray-200 bg-white">
    <table className="w-full text-left text-[13px] md:text-xs border-collapse">
        <thead className="bg-[#EEEEEE] text-[#333333] border-b border-gray-200 font-bold">
            <tr>
                <th className="px-4 py-3">Množství</th>
                <th className="px-4 py-3">Cena</th>
                <th className="px-4 py-3">Fixace ceny</th>
                <th className="px-4 py-3">Platba kartou</th>
            </tr>
        </thead>
        <tbody className="text-[#333333]">
            {[
                { q: '1–19', p: '45 703 Kč', f: 'Ihned', c: 'Ano' }, 
                { q: '20–99', p: '44 703 Kč', f: 'Ihned', c: 'Ano' }, 
                { q: '100–499', p: '43 703 Kč', f: 'Ihned', c: 'Ano' }, 
                { q: '500+', p: '42 703 Kč', f: 'Po zaplacení', c: 'Ne' }
            ].map((row, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5">{row.q}</td>
                    {/* font-bold remove kar diya gaya hai aur color inherit ho raha hai */}
                    <td className="px-4 py-3.5 text-[#333333]">{row.p}</td>
                    <td className="px-4 py-3.5">{row.f}</td>
                    <td className="px-4 py-3.5">{row.c}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

                    {/* Accessories Section - EXACT IMAGE MATCH */}
                    <div className="mt-8 border border-gray-200 bg-white">
                        {/* Header with light gray bg */}
                        <div className="bg-[#EEEEEE] p-4 border-b border-gray-300">
                            <h3 className="text-[13px] font-bold text-[#333333]">Příslušenství k tomuto produktu</h3>
                        </div>

                        <div className="divide-y divide-gray-200">
                            {[0, 1].map((idx) => (
                                <div key={idx} className="flex items-center justify-between gap-4 p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4 flex-1">
                                        {/* Checkbox */}
                                        <div
                                            onClick={() => toggleCheckbox(idx)}
                                            className={`w-5 h-5 border flex items-center justify-center cursor-pointer transition-colors ${selectedAccs.includes(idx) ? 'bg-[#00A651] border-[#00A651]' : 'border-gray-300 bg-white'}`}
                                        >
                                            {selectedAccs.includes(idx) && <Check size={14} className="text-white" strokeWidth={4} />}
                                        </div>

                                        {/* Icon/Image Placeholder */}
                                        <div className="w-10 h-10 p-1 flex-shrink-0">
                                            <img src="/imgcoin.svg" alt="acc" className="w-full h-full object-contain opacity-40" />
                                        </div>

                                        <span className="text-[#333333] text-[13px]">Kapsle na minci – kulatá</span>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        {/* Quantity Controls - Golden Style */}
                                        <div className="flex items-center border border-[#C5A059] h-8 bg-white">
                                            <button onClick={() => handleAccQty(idx, 'dec')} className="w-8 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors">
                                                <Minus size={12} strokeWidth={3} />
                                            </button>
                                            <span className="w-10 flex items-center justify-center text-sm text-[#333333]">{accQuantities[idx]}</span>
                                            <button onClick={() => handleAccQty(idx, 'inc')} className="w-8 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors">
                                                <Plus size={12} strokeWidth={3} />
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <span className=" text-[13px] text-[#5a5959] min-w-[40px] text-right">10 Kč</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Link */}
                        <div className="p-3 border-t border-gray-200 text-center">
                            <button className="text-[#C5A059] text-[13px] font-medium underline underline-offset-4 hover:text-[#b38f4d]">
                                Zobrazit další
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;