import React from 'react';
import HeroSection from '@/components/detailComponents/heroSection';
import ProductInfo from '@/components/detailComponents/productInfo';
import Testimonials from '@/components/homePageComponents/Testimonials';
import SimilarProductsSlider from '@/components/detailComponents/similarSlider';
export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection/>
        < ProductInfo/>
        < SimilarProductsSlider/>
        < Testimonials/>
      </div>
    </>
  );
}