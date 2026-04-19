import React from 'react';
import { ChevronRight, BookOpen, Coins } from 'lucide-react';
import Image from "next/image";

type NavItem = {
    label: string;
    icon?: React.ReactNode;
    active?: boolean;
};

type Banner = {
    label: string;
    active?: boolean;
};

const GuldenHeroSection: React.FC = () => {

    const navItems: NavItem[] = [
        { label: 'Investiční zlato', icon: 'Au' },
        { label: 'Investiční stříbro', icon: 'Ag' },
        {label: 'Pro sběratele', icon: (
         <Image src="/sberatele.svg"alt="sberatele" width={20} height={20}  />)},
        { label: 'Příslušenství', icon:  (
         <Image src="/side-bar-icon-7.svg"alt="sberatele" width={20} height={20}  />), active: true },
        { label: 'Spoření' },
        { label: 'Online rádce' },
        { label: 'Naše prodejny' },
        { label: 'Kontakt' },
    ];

    const banners: Banner[] = [
        { label: 'Banner č. 1' },
        { label: 'Banner č. 2' },
        { label: 'Investiční zlato', active: true },
        { label: 'Banner č. 4' },
        { label: 'Banner č. 5' },
    ];

    return (
        <section className="py-6 md:py-10 px-3 md:px-4 bg-gray-100 ">
            <div className="max-w-[1350px] mx-auto grid grid-cols-12 gap-4 md:gap-9">

                {/* Sidebar */}
                <div className="col-span-12 md:col-span-3 bg-black text-white">
                    <ul className="flex flex-col">
                        {navItems.map((item, i) => (
                            <li
                                key={i}
                                className={`flex items-center justify-between px-3 md:px-4 py-3 md:py-4 border-b border-gray-800 cursor-pointer
                ${item.active ? 'bg-[rgb(199,177,93)] text-black' : 'hover:bg-[rgb(199,177,93)]'}`}
                            >
                                <div className="flex items-center gap-2 md:gap-3">
                                    {item.icon && (
                                        <div
                                            className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold
                      ${item.active ? 'text-white' : 'border-black bg-white text-black'}`}
                                        >
                                            {item.icon}
                                        </div>
                                    )}
                                    <span className={`text-xs md:text-sm font-medium ${!item.icon ? 'ml-7 md:ml-9' : ''}`}>
                                        {item.label}
                                    </span>
                                </div>

                                {item.icon && <ChevronRight size={16} color='white' strokeWidth={4} className="md:w-5 md:h-5" />}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hero */}
                <div className="col-span-12 md:col-span-9 bg-gray-200 p-5 sm:p-6 md:p-12 relative">
                    <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">

                        {/* Text */}
                        <div className="col-span-12 md:col-span-5 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800">
                                Investiční zlato
                            </h2>
                            <p className="text-gray-600 mt-2 md:mt-3 mb-5 md:mb-8 text-sm md:text-base">
                                Zlato, které ochrání vaše úspory.
                            </p>
                            <button className="bg-[rgb(199,177,93)] hover:bg-[rgb(199,177,93)] text-white px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium rounded-none">
                                Prohlédnout
                            </button>
                        </div>

                        {/* Images */}
                        <div className="col-span-12 md:col-span-4 flex justify-center relative mt-6 md:mt-0">
                            <img
                                src="/produkty.png"
                                alt="Gold Bar"
                                className="w-40 sm:w-52 md:w-auto drop-shadow-2xl"
                            />

                        </div>

                        {/* Banners */}
                        <div className="col-span-12 md:col-span-3 flex flex-col gap-2 mt-6 md:mt-0 md:pl-4">
                            {banners.map((banner, i) => (
                                <button
                                    key={i}
                                    className={`group relative w-full py-3 md:py-4 px-4 md:px-6 text-left text-[10px] md:text-xs font-bold  tracking-wider transition-all duration-300 rounded-none
                  ${banner.active
                                            ? 'bg-[rgb(199,177,93)] hover:bg-[rgb(199,177,93)] text-white shadow-lg'
                                            : 'bg-black text-white hover:bg-[rgb(199,177,93)] hover:text-black'}`}
                                >
                                    {banner.label}

                                    {banner.active && (
                                        <div
                                            className="absolute top-0    -left-[120px]  md:-left-[18px] w-0 h-0 
border-t-[20px] md:border-t-[26px] border-t-transparent 
border-b-[20px] md:mr-2 border-b-transparent 
border-r-[12px] md:border-r-[18px] border-r-[rgb(199,177,93)]"
                                            style={{ height: '99%' }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default GuldenHeroSection;