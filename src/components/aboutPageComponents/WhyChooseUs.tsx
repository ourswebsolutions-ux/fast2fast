"use client";

import { motion } from "framer-motion";
import { FaAward, FaShieldAlt, FaTools } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6 relative overflow-hidden">

      {/* Background Sketch */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/sketch-1.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[900px]"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h4 className="text-brand text-lg font-medium">Why Choose Us</h4>

        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-12">
          Reason For Choosing Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 hover:shadow-md transition"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full text-brand text-3xl">
              <FaAward />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Accredited Company
            </h3>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 hover:shadow-md transition"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full text-brand text-3xl">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              100% Guarantee
            </h3>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 hover:shadow-md transition"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full text-brand text-3xl">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Quality Material
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}