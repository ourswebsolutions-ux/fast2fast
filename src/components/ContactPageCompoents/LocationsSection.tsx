
// components/LocationsSection.tsx
import React from 'react';

const LocationsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Three Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Main Office Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 text-xl">📍</span>
              <h3 className="text-lg font-semibold text-gray-800">— Main Office</h3>
            </div>
            <div className="space-y-2 text-[15px]">
              <p className="font-medium text-blue-600">Al Rasheediah Safety & Security</p>
              <p>Musaffah 17, Abu Dhabi</p>
              <p>+971 2 55 47 955</p>
              <p className="text-gray-600">Mon - Sat: 08am - 04:30pm</p>
            </div>
          </div>

          {/* Store Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 text-xl">📍</span>
              <h3 className="text-lg font-semibold text-gray-800">— Store</h3>
            </div>
            <div className="space-y-2 text-[15px]">
              <p className="font-medium text-blue-600">Al Rasheediah Safety & Security</p>
              <p>Musaffah 37, Abu Dhabi</p>
              <p>Musaffah 09, Abu Dhabi</p>
              <p>+971 2 55 47 955</p>
              <p className="text-gray-600">Mon - Sat: 08am - 04:30pm</p>
            </div>
          </div>

          {/* Send a Mail Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 text-xl">✉️</span>
              <h3 className="text-lg font-semibold text-gray-800">— Send a Mail</h3>
            </div>
            <div className="space-y-2 text-[15px]">
              <p>info@alrasheediah.com</p>
              <p>maintenance@alrasheediah.com</p>
              <p>project1@alrasheediah.com</p>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Office Map */}
          <div>
            <h3 className="text-[#00AEEF] text-xl font-semibold mb-4">
              Main Office, Abu Dhabi UAE
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.123456789!2d54.506600!3d24.375205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIyJzMwLjciTiA1NMKwMzAnMjMuOCJF!5e0!3m2!1sen!2sae!4v1710000000000"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Musaffah Office Map */}
          <div>
            <h3 className="text-[#00AEEF] text-xl font-semibold mb-4">
              Musaffah Office
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.5!2d54.52!3d24.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIyJzQ4LjUiTiA1NMKwMzEnMTkuMiJF!5e0!3m2!1sen!2sae!4v1710000000000"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Musaffah Warehouse Map */}
          <div>
            <h3 className="text-[#00AEEF] text-xl font-semibold mb-4">
              Musaffah Warehouse
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2!2d54.493343!3d24.349091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIwJzU2LjciTiA1NMKwMjknMzYuMCJF!5e0!3m2!1sen!2sae!4v1710000000000"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;