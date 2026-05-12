// app/components/AboutCompany.tsx
export default function AboutCompany() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-13 items-start">
        {/* Left Column */}
        <div>
          <p className="text- font-medium">About Company</p>
          <h2 className="text-4xl font-bold text-brand 0 mt-2 mb-6">
            Professional and Expert Fire &amp; Safety Contractor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Al Rasheediah Safety &amp; Security was established in Abu Dhabi in the year 2000. 
            It has expanded with branches in Dubai, Sharjah, Ras Al-Khaimah and plays vital role 
            in the UAE market by providing turnkey solutions in the field of Fire &amp; Safety. 
            Over the years, the company has developed a professional team of technically trained 
            staff providing quick response to the timely needs of our valued customers in fire protection.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <p className="text-gray-600 leading-relaxed">
            Al Rasheediah Safety &amp; Security is one of the few companies that have obtained the license 
            and approval for supply, installation and maintenance of Fire protection systems in residential, 
            industrial and oil field facilities from the Civil Defense.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            We extend to our clients pre-sales services such as advising, preparation of proposals 
            including layouts and drawings based on the clients specific needs for the projects. 
            Thanks to our quality, back up support service, competitive prices and latest solutions. 
            We are committed towards high standard of safety and technical training for the manpower, 
            materials and machinery and protection of our environment.
          </p>

          {/* Manager Card */}
          <div className="flex items-center gap-4 pt-4">
            <img 
              src="/ali.jpeg" 
              alt="Thankachan Santhosh" 
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <p className="font-semibold text-lg">Thankachan Santhosh</p>
              <p className="text-gray-500">General Manager</p>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t">
            <p className="text-blue-600 font-medium">Need help? Contact me</p>
            <p className="text-gray-700 mt-1">
              +971 2 5547955 or info@alrasheediah.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}