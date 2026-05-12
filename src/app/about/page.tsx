import React from 'react';
import Hero from '@/components/aboutPageComponents/hero';
import AboutCompany from '@/components/aboutPageComponents/aboutSections';
import ChairmanMessage from '@/components/aboutPageComponents/ChairmanMessage';
import SuperiorServices from '@/components/aboutPageComponents/SuperiorServices';
import WhyChooseUs from '@/components/aboutPageComponents/WhyChooseUs';
import AboutSafetySection from '@/components/aboutPageComponents/AboutSafetySection';
import Footer from "@/components/layouts/Footer";

export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
{/* Hello world */}
<Hero/>
<AboutCompany/>
<ChairmanMessage/>
<SuperiorServices/>
<WhyChooseUs/>
<AboutSafetySection/>
{/* <Footer/> */}
      </div>
    </>
  );
}