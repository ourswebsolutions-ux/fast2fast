"use client";

import React from "react";
import { motion } from "framer-motion";

const SafetySection = () => {
  return (
    <section className="w-full bg-[#decb8c] py-6 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center font-sans">

        {/* Top Heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#333333] text-[18px] md:text-[20px] italic leading-relaxed mb-4 tracking-tight"
        >
          Showcasing an innovative, practical and robust approach to fire and safety engineering.
        </motion.p>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#333333] text-[16px] md:text-[18px] leading-[1.8] mb-2 mx-auto tracking-tight"
        >
          Over the years <span className="font-bold">AL RASHEEDIAH SAFETY & SECURITY</span> has developed a professional team of technically trained staff providing quick response to the timely needs of our valued customers. . Thanks to our quality, Team work, Team spirit, back up support service, competitive prices and latest solutions. Health, Safety, Quality and the environment are among the most important concern of our company.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#333333] text-[16px] md:text-[18px] leading-[1.8] mx-auto tracking-tight"
        >
          We pride ourselves on being able to provide a friendly and professional service through our open manner and personal approach to your fire protection requirements. We aim to meet all our deadlines and completion of projects in a timely manner. We have networked our services with other fields within the fire protection industry and in return we are able to offer reasonable prices to enable Customers to meet their requirements for Essential Safety Services.
        </motion.p>

      </div>
    </section>
  );
};

export default SafetySection;