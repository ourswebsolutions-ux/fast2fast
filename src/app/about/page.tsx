import React from 'react';
import Hero from '@/components/aboutPageComponents/hero';
import AboutCompany from '@/components/aboutPageComponents/aboutSections';
export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
{/* Hello world */}
<Hero/>
<AboutCompany/>
      </div>
    </>
  );
}