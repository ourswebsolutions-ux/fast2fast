"use client";
import React, { useState } from 'react';

const ProductInfoSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Popis');

    const tabs = [
        { name: 'Popis' },
        { name: 'Specifikace' },
        { name: 'Historie ceny' },
        { name: 'Možnosti doručení' },
        { name: 'Vše o výkupu' }
    ];

    return (
        <section className="mt-16 py-12 px-4 font-sans bg-white">
            <div className="max-w-[1350px] mx-auto">

                {/* Section Title */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-1.5 mb-6">
                        <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
                        <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
                        <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
                    </div>
                    <h2 className="text-4xl font-serif text-[#333333]">Informace o produktu</h2>
                </div>

                {/* Navigation Tabs - Desktop Grid / Mobile Scroll */}
                <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-5 gap-2 mb-4 pb-2 md:pb-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`py-3.5 px-6 md:px-2 text-[13px] font-bold tracking-wider transition-all border border-gray-200 whitespace-nowrap
                                ${activeTab === tab.name
                                    ? 'bg-[#C5A059] text-white border-gray-300'
                                    : 'bg-white text-[#666666] hover:bg-[#C5A059] hover:text-white'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Main Content Container */}
                <div className="bg-white border border-gray-100 p-6 md:p-16 lg:p-24 shadow-[0_10px_50px_rgba(0,0,0,0.05)] rounded-sm">

                    {/* First Block - Image Right, Text Left (Desktop) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-32">
                        <div className="lg:col-span-7 lg:text-right order-2 lg:order-1 flex flex-col lg:items-end">
                            <h3 className="text-[19px] font-serif text-[#333333] mb-2">Investiční zlatá mince</h3>
                            <h2 className="text-3xl md:text-[38px] font-serif text-[#111111] mb-8 leading-tight">
                                Maple Leaf <span className='font-sans '>1 oz 999,9/1000</span> Au
                            </h2>
                            <p className="text-[#3a3a3a] text-[15px] leading-[1.8] lg:max-w-[550px]">
                                Kanadská královská mincovna razí investiční mince Maple Leaf<br className="hidden lg:block" />
                                (javorový list) již od roku 1979. Tvůrcem návrhu mince je Walter Ott.<br className="hidden lg:block" />
                                Mince neobsahují žádné jiné kovy, jen čisté zlato vytěžené
                                ve zlatých <br className="hidden lg:block" /> dolech v Kanadě. Tato zlatá mince je nabízena ve velikostech 1/20 oz,<br className="hidden lg:block" />
                                1/10 oz, 1/4 oz, 1/2 oz a 1oz a je zaručen obsah kovu (v trojských<br className="hidden lg:block" />
                                uncích) 0,9999 (24 karátů), liší se pouze na lícové i rubové straně<br className="hidden lg:block" />
                                indikací váhy a nominální hodnoty.
                            </p>
                        </div>
                        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                            <img
                                src="/can-img.png"
                                alt="Maple Leaf Gold"
                                className="w-[180px] md:w-[250px] lg:w-[320px] drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Second Block - Image Left, Text Right (Desktop) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <img
                                src="/box-coin.png"
                                alt="Mince a pouzdro"
                                className="w-[180px] md:w-[250px] lg:w-[320px] drop-shadow-xl"
                            />
                        </div>

                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            <h3 className="text-[19px] font-serif text-[#111111] mb-3">
                                Krátká specifikace
                            </h3>
                            <h2 className="text-3xl md:text-[38px] font-serif text-[#111111] mb-8 leading-tight">
                                Proč investiční zlatou minci?
                            </h2>
                            <div className="text-[15px] leading-[1.8] text-[#333333] lg:max-w-[560px]">
                                <p className="mb-0">Emitent: Kanada</p>
                                <p className="mb-0">
                                    Líc: Královna Alžběta II. hledící vpravo text "ELIZABETH II 50
                                </p>
                                <p className="mb-0">
                                    DOLLARS" Rok Autor Arnold Machin (1979-1989) Vyobrazení
                                </p>
                                <p className="mb-0">
                                    Alžběty II se od roku 1990 změnilo. Novým autorem je
                                </p>
                                <p className="mb-0">
                                    dePedery-Hunt (1990+) Rub: Maple leaf - Javorový list text
                                </p>
                                <p className="mb-0">
                                    "CANADA 9999 FINE GOLD 1 OZ OR PUR 9999" Autor Cosme
                                </p>
                                <p>Saffioti</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default ProductInfoSection;