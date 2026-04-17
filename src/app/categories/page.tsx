import React from 'react';
import HeroSection from '@/components/categorieComponents/categorieHeroSection';
import ProductFilterSection from '@/components/categorieComponents/productFilterSection';
import ProductGrid from '@/components/categorieComponents/productsData';
import Testimonials from '@/components/homePageComponents/Testimonials';

export default function Page() {
    return (
        <main className="overflow-x-hidden bg-[#F9F9F9]">
            <HeroSection />
            <ProductFilterSection />
            <ProductGrid />
            <Testimonials />
        </main>
    );
}