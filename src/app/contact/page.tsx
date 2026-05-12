import React from 'react';
import Hero from '@/components/ContactPageCompoents/hero';
import ContactSection from '@/components/ContactPageCompoents/ContactSection';

export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
{/* Hello world */}
<Hero/>
<ContactSection/>

{/* <Footer/> */}
      </div>
    </>
  );
}