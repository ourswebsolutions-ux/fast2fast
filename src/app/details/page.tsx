import React from 'react';
import HeroSection from '@/components/detailComponents/heroSection';
import ProductInfo from '@/components/detailComponents/productInfo';
import Testimonials from '@/components/homePageComponents/Testimonials';
export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection/>
        < ProductInfo/>
        < Testimonials/>
      </div>
    </>
  );
}