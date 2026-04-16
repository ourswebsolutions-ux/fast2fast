"use client";
import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const productsData = [
    { id: 1, title: "31.1g investiční zlatý slitek Argor Heraeus SA", price: "42 505 Kč", badge: "Novinka", rating: 5 },
    { id: 2, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "665 342 Kč", badge: "Novinka", rating: 5 },
    { id: 3, title: "Zlatá investiční mince Wiener Philharmoniker...", price: "43 024 Kč", badge: "Tip", rating: 5 },
    { id: 4, title: "Rakousko Uherská novoražba 100 Koruna...", price: "95 000 Kč", badge: "Novinka", rating: 5 },
    { id: 5, title: "Rakousko Uherská novoražba 100 Koruna...", price: "95 000 Kč", badge: "Novinka", rating: 5 },
    { id: 6, title: "250g investiční zlatý slitek Argor Heraeus SA", price: "337 106 Kč", badge: "Novinka", rating: 5 },
    { id: 7, title: "Zlatá investiční mince Rok Tygra Lunar III 1 Oz...", price: "67 110 Kč", badge: "Tip", rating: 5 },
    { id: 8, title: "31.1g investiční zlatý slitek Valcambi", price: "42 389 Kč", badge: "Novinka", rating: 5 },
    { id: 9, title: "31.1g investiční zlatý slitek Valcambi", price: "42 389 Kč", badge: "Novinka", rating: 5 },
    { id: 10, title: "50g investiční zlatý slitek Valcambi | Litý slitek", price: "68 310 Kč", badge: "Novinka", rating: 5 },
    { id: 11, title: "Zlatá mince 10000 Kč Kněžna Ludmila 2021...", price: "78 900 Kč", badge: "Tip", rating: 5 },
    { id: 12, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "665 342 Kč", badge: "Novinka", rating: 5 },
];

const ProductGrid = () => {
    const [quantities, setQuantities] = useState({});
    const [favorites, setFavorites] = useState({});

    const handleQuantity = (id, type) => {
        setQuantities(prev => ({
            ...prev,
            [id]: type === 'inc' ? (prev[id] ?? 1) + 1 : Math.max(1, (prev[id] ?? 1) - 1)
        }));
    };

    const toggleFavorite = (id) => {
        setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-[1350px] mx-auto">

                {/* Product Grid - 4 columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                    {productsData.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white flex flex-col border border-gray-200 hover:border-[#C5B367] p-4 transition-all duration-300 relative group"
                        >
                            {/* Badge */}
                            <div className="h-8">
                                {product.badge && (
                                    <span className="text-[10px] border border-gray-200 px-2 py-0.5 text-gray-400 font-sans">
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Image & Heart */}
                            <div className="relative h-64 flex items-center justify-center mb-4">
                                <img
                                    src="/imgcoins232.svg"
                                    alt={product.title}
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                />
                                <Heart
                                    size={18}
                                    onClick={() => toggleFavorite(product.id)}
                                    className={`absolute bottom-2 right-0 cursor-pointer transition-colors ${favorites[product.id] ? "fill-[#C5B367] text-[#C5B367]" : "text-gray-300 hover:text-[#C5B367]"
                                        }`}
                                />
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center gap-0.5 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-[#f8dc61] text-[#f8dc61]" />
                                ))}
                            </div>

                            {/* Title & Price - Single line alignment */}
                            <div className="text-center mb-6 px-1">
                                <h3 className="text-[12.5px] text-gray-500 underline underline-offset-4 leading-snug mb-2 cursor-pointer hover:text-black whitespace-nowrap overflow-hidden text-ellipsis">
                                    {product.title}
                                </h3>
                                <p className="text-[18px] font-bold text-[#333]">
                                    {product.price}
                                </p>
                            </div>

                            {/* Footer: Quantity & Cart Button - Aligned Flex */}
                            <div className="flex items-center gap-2 h-10 mt-auto">
                                <div className="flex border border-gray-200 h-full items-center shrink-0">
                                    <button
                                        onClick={() => handleQuantity(product.id, 'dec')}
                                        className="px-2 text-red-500 text-lg hover:bg-gray-50 transition-colors h-full"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="text"
                                        value={quantities[product.id] ?? 1}
                                        readOnly
                                        className="w-8 text-center text-xs outline-none border-x border-gray-100 h-full"
                                    />
                                    <button
                                        onClick={() => handleQuantity(product.id, 'inc')}
                                        className="px-2 text-green-500 text-lg hover:bg-gray-50 transition-colors h-full"
                                    >
                                        +
                                    </button>
                                </div>

                                <button className="flex-grow bg-[#00A651] hover:bg-[#008d44] text-white text-[11px] font-semibold transition-colors h-full rounded-sm px-1">
                                    Přidat do košíku
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



{/* Pagination & Load More Row */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center mt-16 mb-8 gap-6 w-full">

    {/* Empty div for layout balance on large screens */}
    <div className="hidden md:block"></div>

    {/* Center Side: Load More Button */}
    <div className="flex justify-center">
        <button className="bg-[#C5B367] text-white px-10 py-3 text-[14px] hover:bg-[#b5a256] transition-all">
            Další produkty
        </button>
    </div>

    {/* Right Side: Pagination */}
    <div className="flex justify-center md:justify-end items-center gap-4 text-[13px] font-sans text-[#C5B367]">
        {/* Previous */}
        <div className="flex items-center gap-1 cursor-pointer hover:underline underline-offset-4">
            <ChevronLeft size={14} />
            <span className="underline underline-offset-4">Předchozí</span>
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-2">
            <span className="cursor-pointer underline underline-offset-4">1</span>
            <span className="text-black font-bold px-1">2</span>
            {[3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <span key={n} className="cursor-pointer underline underline-offset-4">
                    {n}
                </span>
            ))}
        </div>

        {/* Next */}
        <div className="flex items-center gap-1 cursor-pointer hover:underline underline-offset-4">
            <span className="underline underline-offset-4">Další</span>
            <ChevronRight size={14} />
        </div>
    </div>

</div>
            </div>
        </div>
    );
};

export default ProductGrid;