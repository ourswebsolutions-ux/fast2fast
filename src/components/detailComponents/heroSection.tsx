"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Heart, Check, Plus, Minus, ChevronDown, Info } from 'lucide-react';
import SalesPopup from './SalesPopup';

const HeroSection: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
    const [accQuantities, setAccQuantities] = useState<number[]>([1, 1]);
    const [selectedAccs, setSelectedAccs] = useState<number[]>([0]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [sellOption, setSellOption] = useState('Chci prodat');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            buttonLabel: "Prodat",
            showShipping: false,
            showAccessories: false
        },
        'Komisní prodej': {
            icon: <Info size={20} className="text-gray-400" />,
            statusText: "Cena při prodeji nyní.",
            buttonLabel: "Prodat",
            showShipping: false,
            showAccessories: false
        },
        'Na prodejně': {
            icon: <Info size={20} className="text-gray-400" />,
            statusText: "Cena je proměnlivá a záleží kdy daný produkt obdržíme.",
            buttonLabel: "Prodat",
            showShipping: false,
            showAccessories: false
        }
    };

    const currentData = sellData[sellOption] || sellData['Chci prodat'];
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

    const [selectedImage, setSelectedImage] = useState(null);

    const toggleCheckbox = (index: number) => {
        setSelectedAccs(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-4 md:py-10 px-3 md:px-4 bg-gray-50 font-sans overflow-x-hidden">
            <div className="max-w-[1350px] mx-auto">
                {/* Breadcrumbs */}
                <div className="flex items-center mb-6 md:mb-8 overflow-x-auto no-scrollbar gap-0.5 pb-2">
                    <Link href="/" className="h-9 md:h-10 px-4 md:px-6 bg-[#f2f2f2] flex-shrink-0 flex items-center justify-center text-[#777]">
                        <Home size={14} />
                    </Link>
                    {steps.map((step, index) => (
                        <div key={index} className="h-9 md:h-10 flex items-center bg-[#f2f2f2] -ml-[3px] flex-shrink-0" style={{ clipPath: "polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%, 12px 50%)" }}>
                            {step.href ? (
                                <Link href={step.href} className="pl-7 md:pl-9 pr-6 md:pr-8 text-[12px] md:text-[14px] text-[#666] whitespace-nowrap">
                                    <span className="border-b border-[#999]">{step.name}</span>
                                </Link>
                            ) : (
                                <span className="pl-7 md:pl-9 pr-6 md:pr-8 text-[12px] md:text-[14px] text-[#999] whitespace-nowrap">{step.name}</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-12 gap-6 lg:gap-18">
                    {/* Left: Images */}
                    <div className="col-span-12 md:col-span-5 lg:col-span-7">
                        <div className="relative bg-white border border-gray-100 p-4 pt-16 md:pt-10 md:p-8 flex flex-col justify-center items-center min-h-[320px] md:min-h-[550px]">
                            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1.5 z-10">
                                <div className="inline-block w-fit p-[1px] bg-[#e5e7eb] custom-scallop">
                                    <span className="block bg-white text-black text-[10px] md:text-[11px] px-2 md:px-3 py-1 font-semibold custom-scallop">Novinka</span>
                                </div>
                                <span className="w-fit bg-black text-white text-[10px] md:text-[11px] px-2 md:px-3 py-1 font-semibold custom-scallop">Množstevní slevy %</span>
                                <span className="w-fit bg-[#f2f2f2] text-[#2b2a2a] text-[10px] md:text-[11px] px-2 md:px-3 py-1 border border-[#e0e0e0] custom-scallop">Online výkupní cena</span>
                            </div>

                            <button onClick={() => setIsWishlisted(!isWishlisted)} className="absolute top-4 right-4 md:top-6 md:right-6">
                                <Heart strokeWidth={1.2} className={`w-7 h-7 md:w-8 md:h-8 ${isWishlisted ? 'fill-[rgb(199,177,93)] text-[rgb(199,177,93)]' : 'text-gray-300'}`} />
                            </button>

                            <img src="/can-img.png" alt="Coin" className="w-[65%] md:w-[320px] lg:w-[380px] h-auto object-contain drop-shadow-2xl" />
                        </div>
                        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedImage(i)} // Click karne par border golden hoga
                                    className={`
            min-w-[64px] w-16 h-16 md:w-20 md:h-20 
            border p-1 cursor-pointer transition-all duration-200
            /* Default sab gray border honge, sirf selected wala golden hoga */
            ${selectedImage === i
                                            ? 'border-[rgb(199,177,93)] border-2'
                                            : 'border-gray-300 hover:border-[rgb(199,177,93)]'
                                        }
          `}
                                >
                                    <img
                                        src={img}
                                        alt="thumb"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-5">
                        <h1 className="text-xl md:text-3xl font-medium text-[#292929]">
                            Kanada 50$ 2018 Maple Leaf 1 oz 999,9/1000 Au
                        </h1>

                        {/* Description Text - Font Size adjusted for Image matching */}
                        <p className="text-[#3b3a3a] text-[12px] md:text-[13.5px] mt-4 leading-relaxed max-w-[500px]">
                            Kanadská královská mincovna razí investiční mince Maple Leaf (javorový list) již od roku 1979. Tvůrcem návrhu mince je Walter Ott. Mince neobsahují žádné jiné kovy, jen čisté zlato vytěžené ve zlatých dolech v Kanadě.
                            <span className="text-[rgb(199,177,93)] border-b border-[rgb(199,177,93)] cursor-pointer ml-1 font-medium whitespace-nowrap hover:text-[#b38f4d]">Více informací</span>
                        </p>

                        <div className="flex flex-row gap-2 mt-6 md:mt-8">
                            <button className={`flex-1 md:flex-none md:w-[140px] py-3 font-bold text-sm border ${sellOption !== 'Chci prodat' || isDropdownOpen ? 'bg-white text-black border-gray-300' : 'bg-[rgb(199,177,93)] text-white border-[rgb(199,177,93)]'}`}>Chci koupit</button>
                            <div className="relative flex-1 md:flex-none md:w-[160px]">
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`w-full border flex items-center justify-between px-3 md:px-4 py-3 text-sm font-medium ${isDropdownOpen || sellOption !== 'Chci prodat' ? 'bg-[rgb(199,177,93)] text-white border-[rgb(199,177,93)]' : 'bg-white text-[#333] border-gray-300'}`}>
                                    <span className="truncate">{sellOption}</span>
                                    <ChevronDown size={18} />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl z-50 mt-1">
                                        {Object.keys(sellData).map((option) => (
                                            <div key={option} onClick={() => { setSellOption(option); setIsDropdownOpen(false); }} className="px-4 py-2.5 text-sm hover:bg-[rgb(199,177,93)] hover:text-white cursor-pointer">{option}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Price Section - Correct Alignment */}
                        <div className="mt-6 md:mt-8">
                            {sellOption === 'Chci prodat' && <div className="text-[#E54B4B] text-sm line-through font-medium">46 003 Kč</div>}
                            <div className="flex items-baseline gap-4 mt-1">
                                <span className="text-2xl md:text-4xl font-medium text-[#00A651]">45 703 Kč</span>
                                <span className="text-[rgb(199,177,93)] text-[10px] md:text-[11px] underline cursor-pointer font-bold tracking-wider  self-end mb-1">Hlídat cenu</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-6 gap-y-3 mt-6 text-[12px] md:text-[13px]">
                            <div className="flex items-center gap-1.5 text-[#666] font-bold">
                                {currentData.icon} {currentData.statusText}
                            </div>
                            {currentData.date && (
                                <div className="text-[#00A651]">
                                    {currentData.deliveryText} <span className="font-bold">{currentData.date}</span>
                                </div>
                            )}
                            {currentData.showShipping && <div className="text-[rgb(199,177,93)] underline cursor-pointer font-bold">Možnosti dopravy</div>}
                        </div>

                        {/* Counter Buttons Design */}
                        <div className="flex flex-row gap-2 mt-8 md:h-12">
                            <div className="flex items-center gap-0.5 h-12 md:h-full">
                                <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="w-10 h-full bg-[rgb(199,177,93)] text-white flex items-center justify-center hover:bg-[#b38f4d]"><Minus size={14} /></button>
                                <div className="w-10 h-full border border-gray-200 flex items-center justify-center bg-white text-sm font-bold text-[#333]">{quantity}</div>
                                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-full bg-[rgb(199,177,93)] text-white flex items-center justify-center hover:bg-[#b38f4d]"><Plus size={14} /></button>
                            </div>
                            <button
                                onClick={() => (sellOption === 'Chci prodat' || sellOption === 'Na prodejně') && setIsPopupOpen(true)}
                                className="flex-1 bg-[#00A651] hover:bg-[#008d44] transition-colors text-white text-[12px] md:text-[13px] font-bold tracking-wider"
                            >
                                {currentData.buttonLabel}
                            </button>
                        </div>

                        <SalesPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

                        {/* Table 1 */}
                        <div className="mt-10 border border-gray-200 bg-white overflow-x-auto no-scrollbar">
                            <table className="min-w-[420px] md:w-full text-left text-[12px] md:text-[13px]">
                                <thead className="bg-[#EEEEEE] text-[#333] font-bold border-b border-gray-200">
                                    <tr>
                                        <th className="px-3 md:px-4 py-3">Množství</th>
                                        <th className="px-3 md:px-4 py-3">Cena</th>
                                        <th className="px-3 md:px-4 py-3">Fixace ceny</th>
                                        <th className="px-3 md:px-4 py-3">Platba kartou</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#292828] divide-y divide-gray-200">
                                    {[
                                        { q: '1–19', p: '45 703 Kč', f: 'Ihned', c: 'Ano' },
                                        { q: '20–99', p: '44 703 Kč', f: 'Ihned', c: 'Ano' },
                                        { q: '100–499', p: '43 703 Kč', f: 'Ihned', c: 'Ano' },
                                        { q: '500+', p: '42 703 Kč', f: 'Po zaplacení', c: 'Ne' }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="px-3 md:px-4 py-3">{row.q}</td>
                                            <td className="px-3 md:px-4 py-3 text-[#333] font-medium">{row.p}</td>
                                            <td className="px-3 md:px-4 py-3">{row.f}</td>
                                            <td className="px-3 md:px-4 py-3">{row.c}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Table 2: Accessories */}
                        {currentData.showAccessories && (
                            <div className="mt-8 border border-gray-200 bg-white">
                                <div className="bg-[#EEEEEE] p-4 border-b border-gray-300">
                                    <h3 className="text-[13px] font-bold text-[#333]">Příslušenství k tomuto produktu</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {[0, 1].map((idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 hover:bg-gray-50">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div onClick={() => toggleCheckbox(idx)} className={`w-5 h-5 border flex items-center justify-center cursor-pointer transition-all ${selectedAccs.includes(idx) ? 'bg-[#00A651] border-[#00A651]' : 'border-gray-300'}`}>
                                                    {selectedAccs.includes(idx) && <Check size={14} className="text-white" strokeWidth={4} />}
                                                </div>
                                                <img src="/queen-coin.svg" alt="acc" className="w-8 h-8 object-contain opacity-40" />
                                                <span className="text-[#3a3a3a] text-[13px]">Kapsle na minci – kulatá</span>
                                            </div>
                                            <div className="flex items-center justify-between w-full sm:w-auto gap-4 pl-8 sm:pl-0">
                                                <div className="flex items-center gap-0.5 h-8">
                                                    <button onClick={() => handleAccQty(idx, 'dec')} className="w-8 h-full bg-[rgb(199,177,93)] text-white flex items-center justify-center hover:bg-[#b38f4d]"><Minus size={12} /></button>
                                                    <div className="w-8 h-full border border-gray-200 flex items-center justify-center text-xs bg-white font-medium">{accQuantities[idx]}</div>
                                                    <button onClick={() => handleAccQty(idx, 'inc')} className="w-8 h-full bg-[rgb(199,177,93)] text-white flex items-center justify-center hover:bg-[#b38f4d]"><Plus size={12} /></button>
                                                </div>
                                                <span className="text-[13px] text-[#5a5959] font-bold min-w-[50px] text-right">10 Kč</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-3 border-t border-gray-200 text-center">
                                    <button className="text-[rgb(199,177,93)] text-[12px] font-medium underline hover:text-[#b38f4d]">Zobrazit další</button>
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
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default HeroSection;