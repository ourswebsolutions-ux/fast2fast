"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Heart, Check, Plus, Minus, ChevronDown, Info } from 'lucide-react';
import SalesPopup from './SalesPopup';

const HeroSection: React.FC = () => {
    // States
    const [quantity, setQuantity] = useState<number>(1);
    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
    const [accQuantities, setAccQuantities] = useState<number[]>([1, 1]);
    const [selectedAccs, setSelectedAccs] = useState<number[]>([0]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Dropdown State
    const [sellOption, setSellOption] = useState('Chci prodat');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Dynamic Data Mapping for different dropdown options
    const sellData: Record<string, any> = {
        'Chci prodat': {
            icon: <Check size={20} strokeWidth={3} className="text-[#00A651]" />,
            statusText: "Skladem",
            deliveryText: "Můžeme doručit do ",
            date: "10.01.2023",
            buttonLabel: "Přidat do košíku",
            showShipping: true,
            showAccessories: true
        },
        'Prodej ihned': {
            icon: <Info size={20} className="text-gray-400" />,
            statusText: "Zboží musí být doručeno do dvou dnů na naši pobočku.",
            deliveryText: "",
            date: "",
            buttonLabel: "Prodat",
            showShipping: false,
            showAccessories: false
        },
        'Komisní prodej': {
            icon: <Info size={20} className="text-gray-400" />,
            statusText: "Cena při prodeji nyní.",
            deliveryText: "",
            date: "",
            buttonLabel: "Prodat",
            showShipping: false,
            showAccessories: false
        },
        'Na prodejně': {
            icon: <Info size={20} className="text-gray-400" />,
            statusText: "Cena je proměnlivá a záleží kdy daný produkt obdržíme.",
            deliveryText: "",
            date: "",
            buttonLabel: "Prodat",
            showShipping: false,
            showAccessories: false
        }
    };

    const currentData = sellData[sellOption] || sellData['Chci prodat'];

    // Breadcrumbs Data
    const steps = [
        { name: "Zlato", href: "#" },
        { name: "Investiční zlaté mince", href: "#" },
        { name: "Kanada 50$ 2018 Maple Leaf 1 oz 999,9/1000 Au", href: null },
    ];

    const images = ["/queen-coin.svg", "/line-coin.svg", "/b-coin.svg"];

    const handleAccQty = (index: number, type: 'inc' | 'dec') => {
        setAccQuantities(prev => prev.map((q, i) =>
            i === index ? (type === 'inc' ? q + 1 : Math.max(1, q - 1)) : q
        ));
    };

    const toggleCheckbox = (index: number) => {
        setSelectedAccs(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-6 md:py-10 px-3 md:px-4 bg-gray-50 font-sans">
            <div className="max-w-[1350px] mx-auto">

                {/* 1. Breadcrumbs with extra spacing */}
                <div className="flex items-center mb-8 overflow-x-auto no-scrollbar gap-1">
                    <Link
                        href="/"
                        className="h-10 px-6 bg-[#f2f2f2] flex-shrink-0 flex items-center justify-center text-[#777] hover:text-[#C5A059]"
                        style={{ clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)" }}
                    >
                        <Home size={16} />
                    </Link>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="h-10 flex items-center bg-[#f2f2f2] -ml-[4px] flex-shrink-0"
                            style={{ clipPath: "polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%, 16px 50%)" }}
                        >
                            {step.href ? (
                                <Link href={step.href} className="pl-9 pr-8 text-[14px] text-[#666] hover:text-black whitespace-nowrap">
                                    <span className="border-b border-[#999]">{step.name}</span>
                                </Link>
                            ) : (
                                <span className="pl-9 pr-8 text-[14px] text-[#999] whitespace-nowrap">{step.name}</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Side: Image Gallery & Labels */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-7">
                        <div className="relative bg-white border border-gray-100 p-4 pt-24 md:pt-10 md:p-8 flex flex-col md:flex-row justify-center items-center min-h-[350px] md:min-h-[550px] rounded-sm">

                            {/* Image Labels (From Image) */}
                            <div className="flex md:absolute flex-col gap-1.5 z-10 w-full md:w-auto md:top-6 md:left-6 mb-4 md:mb-0">
                                <div className="inline-block w-fit p-[1px] bg-[#e5e7eb] custom-scallop">
                                    <span className="block bg-white text-black text-[11px] px-3 py-1 font-semibold custom-scallop">Novinka</span>
                                </div>
                                <span className="w-fit bg-black text-white text-[11px] px-3 py-1 font-semibold custom-scallop">Množstevní slevy %</span>
                                <span className="w-fit bg-[#f2f2f2] text-[#2b2a2a] text-[11px] px-3 py-1 border border-[#e0e0e0] custom-scallop">Online výkupní cena</span>
                            </div>

                            <button onClick={() => setIsWishlisted(!isWishlisted)} className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                                <Heart size={32} strokeWidth={1.2} className={`transition-all ${isWishlisted ? 'fill-[#C5A059] text-[#C5A059]' : 'text-gray-300'}`} />
                            </button>

                            <img src="/can-img.png" alt="Coin" className="w-[55%] md:max-w-[320px] lg:max-w-[380px] h-auto object-contain drop-shadow-2xl mt-4 md:mt-0" />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-2 mt-4 overflow-x-auto">
                            {images.map((img, i) => (
                                <div key={i} className={`min-w-[64px] w-16 h-16 md:w-20 md:h-20 border p-1 cursor-pointer transition-all hover:border-[#C5A059] ${i === 0 ? 'border-[#C5A059]' : 'border-gray-300'}`}>
                                    <img src={img} alt="thumb" className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-5">
                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl font-medium text-[#292929] leading-tight">
                            Kanada 50$ 2018 Maple Leaf 1 oz 999,9/1000 Au
                        </h1>

                        {/* Description (Exact Text from image) */}
                        <p className="text-[#3b3a3a] text-[14px] mt-4 leading-relaxed">
                            Kanadská královská mincovna razí investiční mince Maple Leaf (javorový list) již od roku 1979. Tvůrcem návrhu mince je Walter Ott. Mince neobsahují žádné jiné kovy, jen čisté zlato vytěžené ve zlatých dolech v Kanadě.
                            <span className="text-[#C5A059] border-b border-[#C5A059] cursor-pointer ml-1 font-medium hover:text-[#b38f4d]">Více informací</span>
                        </p>

                        {/* Top Action Buttons with Hover Effect */}
                        <div className="flex gap-2 mt-8">
                            <button className={`w-[140px] py-3 font-bold text-sm transition-all border ${sellOption !== 'Chci prodat' || isDropdownOpen ? 'bg-white text-black border-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]' : 'bg-[#C5A059] text-white border-[#C5A059] hover:bg-[#b38f4d]'}`}>
                                Chci koupit
                            </button>

                            <div className="relative w-[160px]">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`w-full border flex items-center justify-between px-4 py-3 text-sm font-medium transition-all 
                ${isDropdownOpen || sellOption !== 'Chci prodat'
                                            ? 'bg-[#C5A059] text-white border-[#C5A059]'
                                            : 'bg-white text-[#333333] border-gray-300 hover:border-[#C5A059]'
                                        }`}
                                >
                                    {/* Yahan text color condition ke mutabiq white ho jayega */}
                                    <span className={`${isDropdownOpen || sellOption !== 'Chci prodat' ? 'text-white' : 'text-[#333333]'}`}>
                                        {sellOption}
                                    </span>

                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${isDropdownOpen || sellOption !== 'Chci prodat' ? 'rotate-180 text-white' : 'text-gray-400'}`}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl z-50 mt-1">
                                        {Object.keys(sellData).map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => { setSellOption(option); setIsDropdownOpen(false); }}
                                                className="px-4 py-2.5 text-sm hover:bg-[#C5A059] hover:text-white cursor-pointer text-[#333] transition-colors"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="mt-8">
                            {sellOption === 'Chci prodat' && (
                                <div className="text-[#E54B4B] text-sm line-through font-medium">46 003 Kč</div>
                            )}
                            <div className="flex items-baseline gap-4 mt-1">
                                <span className="text-3xl md:text-4xl font-medium text-[#00A651]">45 703 Kč</span>
                                <span className="text-[#C5A059] text-xs underline cursor-pointer font-bold  tracking-wider hover:text-[#b38f4d]">Hlídat cenu</span>
                            </div>
                        </div>

                        {/* Status/Delivery Labels */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-[13px]">
                            <div className="flex items-center gap-1.5 text-[#666666] font-bold">
                                {currentData.icon} {currentData.statusText}
                            </div>
                            {currentData.date && (
                                <div className="text-[#00A651]">
                                    {currentData.deliveryText} <span className="font-bold">{currentData.date}</span>
                                </div>
                            )}
                            {currentData.showShipping && (
                                <div className="text-[#C5A059] underline cursor-pointer font-bold hover:text-[#b38f4d]">Možnosti dopravy</div>
                            )}
                        </div>

                        {/* Cart Area */}
                        <div className="flex gap-2 mt-8 h-12">
                            <div className="flex items-center border border-gray-200">
                                <button
                                    onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}
                                    className="w-10 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors"
                                >
                                    <Minus size={14} />
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center text-sm font-bold text-[#333333de] bg-transparent focus:outline-none border-[#C5A059]"
                                />
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="w-10 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors"
                                >
                                    <Plus size={14} />
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    // Check if selected option is one of the two allowed for popup
                                    if (sellOption === 'Chci prodat' || sellOption === 'Na prodejně') {
                                        setIsPopupOpen(true);
                                    } else {
                                        // Yahan aap normal cart logic ya koi aur action add kar sakte hain
                                        console.log("No popup for this option");
                                    }
                                }}
                                className="w-full bg-[#00A651] hover:bg-[#008d44] text-white text-[13px] font-bold tracking-wider transition-colors py-3.5 "
                            >
                                {currentData.buttonLabel}
                            </button>
                        </div>

                        {/* Popup Component */}
                        <SalesPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

                        {/* PRICING TABLE - Always Visible */}
                        <div className="mt-10 border border-gray-200 bg-white overflow-hidden">
                            <table className="w-full text-left text-[13px] border-collapse">
                                <thead className="bg-[#EEEEEE] text-[#333333] border-b border-gray-200 font-bold">
                                    <tr>
                                        <th className="px-4 py-3">Množství</th>
                                        <th className="px-4 py-3">Cena</th>
                                        <th className="px-4 py-3">Fixace ceny</th>
                                        <th className="px-4 py-3">Platba kartou</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#292828]">
                                    {[
                                        { q: '1–19', p: '45 703 Kč', f: 'Ihned', c: 'Ano' },
                                        { q: '20–99', p: '44 703 Kč', f: 'Ihned', c: 'Ano' },
                                        { q: '100–499', p: '43 703 Kč', f: 'Ihned', c: 'Ano' },
                                        { q: '500+', p: '42 703 Kč', f: 'Po zaplacení', c: 'Ne' }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-3.5">{row.q}</td>
                                            <td className="px-4 py-3.5 text-[#333333] font-medium">{row.p}</td>
                                            <td className="px-4 py-3.5">{row.f}</td>
                                            <td className="px-4 py-3.5">{row.c}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* ACCESSORIES - Only visible when currentData.showAccessories is true */}
                        {currentData.showAccessories && (
                            <div className="mt-8 border border-gray-200 bg-white animate-in fade-in duration-300">
                                <div className="bg-[#EEEEEE] p-4 border-b border-gray-300">
                                    <h3 className="text-[13px] font-bold text-[#333333]">Příslušenství k tomuto produktu</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {[0, 1].map((idx) => (
                                        <div key={idx} className="flex items-center justify-between gap-4 p-4 hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center gap-4 flex-1">
                                                <div onClick={() => toggleCheckbox(idx)} className={`w-5 h-5 border flex items-center justify-center cursor-pointer transition-colors ${selectedAccs.includes(idx) ? 'bg-[#00A651] border-[#00A651]' : 'border-gray-300 bg-white'}`}>
                                                    {selectedAccs.includes(idx) && <Check size={14} className="text-white" strokeWidth={4} />}
                                                </div>
                                                <div className="w-10 h-10 p-1 flex-shrink-0">
                                                    <img src="/queen-coin.svg" alt="acc" className="w-full h-full object-contain opacity-40" />
                                                </div>
                                                <span className="text-[#3a3a3a] text-[13px]">Kapsle na minci – kulatá</span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="flex items-center border border-[#C5A059] h-8 bg-white">
                                                    <button onClick={() => handleAccQty(idx, 'dec')} className="w-8 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors"><Minus size={12} strokeWidth={3} /></button>
                                                    <span className="w-10 flex items-center justify-center text-sm text-[#333333] font-medium">{accQuantities[idx]}</span>
                                                    <button onClick={() => handleAccQty(idx, 'inc')} className="w-8 h-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#b38f4d] transition-colors"><Plus size={12} strokeWidth={3} /></button>
                                                </div>
                                                <span className="text-[13px] text-[#5a5959] min-w-[40px] text-right">10 Kč</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 border-t border-gray-200 text-center">
                                    <button className="text-[#C5A059] text-[13px] font-medium underline underline-offset-4 hover:text-[#b38f4d]">
                                        Zobrazit další
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scallop {
                    -webkit-mask: radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0,
                                 radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0,
                                 radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%,
                                 radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%;
                    -webkit-mask-size: 51% 51%;
                    -webkit-mask-repeat: no-repeat;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;