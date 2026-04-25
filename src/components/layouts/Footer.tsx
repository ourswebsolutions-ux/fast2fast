import React from 'react';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
    const icons = [
        { icon: FaFacebookF },
        { icon: FaInstagram },
        { icon: FaYoutube },
        { icon: FaTwitter },
    ];

    return (
        <footer className=" w-full bg-black text-white pt-12 pb-6 border-t-4 border-[rgb(199,177,93)] font-sans mt-8">
            <div className="mx-auto w-full max-w-[1412px] px-4">

                {/* Newsletter Box - Fixed spacing & shape */}
                <div className="relative mb-16">
                    <div className="relative md:-mt-24 -mt-28 overflow-hidden bg-[rgb(168,155,101,255)] py-6 lg:py-16 px-6 md:px-10 lg:px-12 shadow-2xl ">

                        {/* Background shapes */}
                        {/* Background shapes */}
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-r from-black/20 to-transparent">

                            {/* LEFT */}
                            <div className=" hidden md:block absolute md:left-102 top-1/2 -translate-y-1/2 w-12 h-12  bg-black/10 rotate-45" />

                            {/* CENTER */}
                            <div className="absolute hidden md:block  md:left-202 top-1/2 -translate-x-2/2 -translate-y-1/2 w-62 h-62 bg-black/10 rotate-45" />

                            {/* RIGHT */}
                            <div className="absolute md:right-102 hidden md:block top-1/2 -translate-y-1/2 w-12 h-12  bg-black/10 rotate-45" />

                        </div>

                        {/* Content - Původní styl, fixnutý pro small screens */}
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">

                            {/* Text - Vráceno původní text-3xl a 4xl, fixnuto pro small screen přes md:w-auto */}
                            <div className="w-full md:w-auto flex-1 md:text-end  text-xl md:tracking-wide md:text-3xl lg:text-4xl font-serif text-white leading-tight md:pr-10">
                                Nezmeškejte žádné novinky či slevy!
                            </div>

                            {/* Input Box - Původní barvy a paddingy */}
                            <div className="w-full md:w-auto flex justify-center md:justify-end  md:mr-25">
                                <div className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-md md:max-w-none">
                                    <input
                                        type="email"
                                        placeholder="Napište Váš e-mail"
                                        className="bg-black/20 border-none px-4 py-4 md:py-5 w-full sm:w-64 lg:w-83 text-white placeholder:text-white font-bold outline-none  transition-all text-sm "
                                    />
                                    <button className="bg-[rgb(199,177,93)] hover:bg-[rgb(167,145,75)] w-full  text-white px-6 lg:w-48 py-4.5 md:py-5.5 font-bold text-[11px] tracking-[2px] transition-all whitespace-nowrap shadow-inner ">
                                        Přihlásit k odběru
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rest unchanged */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 md:mb-27">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-[rgb(199,177,93)] font-serif md:text-xl  text-lg md:mb-9 mb-6">Hlavní kategorie</h3>
                        <ul className="flex tracking-wide text-white-400 flex-col gap-3 text-[13px] text-white-400 md:gap-6 md:text-[14px]">
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Investiční zlato</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Investiční stříbro</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Pro sběratele</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Příslušenství</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-[rgb(199,177,93)] font-serif md:text-xl text-lg md:mb-9 mb-6">Důležité informace</h3>
                        <ul className="flex flex-col gap-3 tracking-wide text-white-400 text-[13px] md:gap-6 md:text-[14px]">
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Investice</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Online rádce</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Vše o výkupu</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Slovníček pojmů</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Blog</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">O nás</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-[rgb(199,177,93)] font-serif md:text-xl text-lg md:mb-9 mb-6">Vše o nákupu</h3>
                        <ul className="flex flex-col tracking-wide text-white-400 gap-3  text-[13px] md:gap-6 md:text-[14px] ">
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Naše prodejny</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Hodnocení obchodu</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Obchodní podmínky</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Doprava a platba</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Záruka a reklamace</Link></li>
                            <li><Link href="#" className="hover:text-[rgb(199,177,93)] hover:underline transition-all">Odstoupení od smlouvy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="lg:pr-10 ">
                        <h3 className="text-[rgb(199,177,93)] font-serif md:text-xl text-lg md:mb-9 mb-6">Kontaktujte nás</h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex md:border-b border-zinc-800  items-start gap-4 group cursor-pointer">
                                <div className="mt-1 transition-transform group-hover:scale-110">
                                    <PhoneCall size={30} />
                                </div>
                                <div className=" pb-3 md:pb-5 max-w-[150px] w-full transition-colors group-hover:border-[rgb(199,177,93)]">
                                    <p className="text-[12px] md:text-[20px] font-bold tracking-wide text-white-400 mb-0.5 tracking-wider group-hover:text-[rgb(199,177,93)]">Infolinka</p>
                                    <p className="text-[14px] tracking-wide text-white-400 group-hover:text-[rgb(199,177,93)]">+420 800 01 02 03</p>
                                </div>
                            </div>

                            <div className="flex md:border-b border-zinc-800 items-start gap-4 group cursor-pointer">
                                <div className="mt-1 transition-transform group-hover:scale-110">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className=" pb-3 md:pb-5 max-w-[150px] w-full transition-colors group-hover:border-[rgb(199,177,93)]">
                                    <p className="text-[12px] md:text-[20px] tracking-wide  font-bold text-white-400 mb-0.5 tracking-wider group-hover:text-[rgb(199,177,93)]">E-mail</p>
                                    <p className="text-[14px] md:text-[20px] tracking-wide  group-hover:text-[rgb(199,177,93)]">info@gulden.cz</p>
                                </div>
                            </div>

                            <div className="flex gap-2.5 pt-2 ">
                                {icons.map((Item, idx) => {
                                    const Icon = Item.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="w-9 h-9 flex items-center justify-center bg-[rgb(199,177,93)] hover:bg-white group  transition-all cursor-pointer shadow-sm"
                                        >
                                            <Icon
                                                size={16}
                                                className="text-white group-hover:text-[rgb(199,177,93)]"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-1 md:pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-center items-center gap-8 text-[11px] text-black-500 tracking-[1px]">
                <div className="div  mx-auto w-full md:max-w-[1412px]  px-2 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-black-500 tracking-[1px]">


                    <div className="flex items-center gap-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 bg opacity-80" />
                        <div className="flex items-center justify-center">
                            <img src="visa.svg" alt="Mastercard" className="h- bg opacity-80" />

                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-80" />
                    </div>

                    <p className="font-medium text-center md:text-left text-gray-300">© Copyright 2026 GULDEN. Všechna práva vyhrazena.</p>

                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="flex flex-col items-center gap-[1.5px]">
                            <span className="w-2 h-2 bg-[#F6A119]" />
                            <div className="flex gap-[1.5px]">
                                <span className="w-2 h-2 bg-[#93C01F]" />
                                <span className="w-2 h-2 bg-[#00AEEF]" />
                            </div>
                        </div>
                        <span className="hover:text-white transition-all text-[10px] text-gray-400">Vytvořil Shoptet</span>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;