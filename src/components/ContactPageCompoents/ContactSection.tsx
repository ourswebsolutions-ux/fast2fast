"use client";
// components/ContactSection.tsx
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#2A2A2A] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl text-brand font-semibold leading-tight mb-2">
              Get In Touch.
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Any Question? Write Down And Send To Us.
            </p>

            <form className="space-y-6">

              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">
                    Name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First"
                    className="w-full bg-white text-black px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 opacity-0">
                    Last
                  </label>
                  <input
                    type="text"
                    placeholder="Last"
                    className="w-full bg-white text-black px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full bg-white text-black px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm mb-2">Phone *</label>
                <input
                  type="tel"
                  className="w-full bg-white text-black px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2">
                  Comment or Message
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-white text-black px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <button className="bg-brand text-white px-8 py-3 rounded hover:opacity-90 transition">
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end text-right pt-[145px]">

            <h3 className="text-2xl font-semibold mb-8">
              Al Rasheediah Safety & Security EST.
            </h3>

            <div className="space-y-6 text-[15.5px] leading-relaxed">

              <div>
                <p><strong>Main Office:</strong> Musaffah 17, Abu Dhabi</p>
                <p><strong>Store1:</strong> Musaffah 37, Abu Dhabi</p>
                <p><strong>Store2:</strong> Musaffah 38, Abu Dhabi</p>
              </div>

              <div>
                <p><strong>Mobile:</strong> +971 2 55 47 955</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@alrasheediah.com" className="hover:text-brand">
                    info@alrasheediah.com
                  </a>
                </p>
                <p><strong>P.O. Box:</strong> 35319</p>
              </div>

              <div>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.alrasheediah.com"
                    target="_blank"
                    className="hover:text-brand"
                  >
                    www.alrasheediah.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-5 mt-12">
              <a href="#" className="text-2xl hover:text-brand">f</a>
              <a href="#" className="text-2xl hover:text-brand">𝕏</a>
              <a href="#" className="text-2xl hover:text-brand">📷</a>
              <a href="#" className="text-2xl hover:text-brand">in</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;