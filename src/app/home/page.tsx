import React from 'react';

import GuldenHeroSection from '@/components/homePageComponents/GuldenHeroSection';
import BenefitsSection from '@/components/homePageComponents/BenefitsSection';
import PreciousMetalsGrid from '@/components/homePageComponents/PreciousMetalsGrid';
import DealOfTheDay from '@/components/homePageComponents/DealOfTheDay';
import ProductSlider from '@/components/homePageComponents/ProductSlider';
import NewsAndCharts from '@/components/homePageComponents/NewsAndCharts';
import Testimonials from '@/components/homePageComponents/Testimonials';
export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
        <GuldenHeroSection />
        <BenefitsSection />
        <PreciousMetalsGrid />
        <DealOfTheDay />
        <ProductSlider />
        <NewsAndCharts />
        <Testimonials />
      </div>
    </>
  );
}