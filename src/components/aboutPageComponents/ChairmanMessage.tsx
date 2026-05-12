"use client";

import { motion } from "framer-motion";

export default function ChairmanMessage() {
  return (
    <section className="py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* MAIN ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center lg:items-start">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] h-auto flex-shrink-0">

              {/* Background Shadow Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="absolute -left-6 sm:-left-10 lg:-left-12 -top-6 sm:-top-10 lg:-top-12 w-full h-full bg-gray-400/80 rounded-sm"
              />

              {/* IMAGE CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white shadow-2xl overflow-hidden"
              >
                <img
                  src="/ali.jpeg"
                  alt="Mr. Shlash Al-Kurdi"
                  className="w-full h-[280px] sm:h-[320px] object-cover"
                />

                {/* LABEL */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-[#a32323] py-3 px-4"
                >
                  <div className="text-white font-bold text-lg leading-tight">
                    Mr. Shlash Al-Kurdi
                  </div>

                  <div className="text-white/80 text-xs uppercase tracking-wider">
                    CEO
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-4 lg:-ml-10 text-center lg:text-left"
          >

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#64b4dc] text-xl sm:text-2xl font-bold mb-5 sm:mb-6 tracking-[0.2em]"
            >
              CHAIRMAN MESSAGE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-900 leading-relaxed text-[15px] sm:text-[16px] font-medium"
            >
              We, at Al-Rasheediah Safety & Security, have always believed in the
              concept of total quality and complete customer satisfaction as the key
              to achieve our corporate goals and enjoy the pleasure of attaining
              genuine success. Our managerial and executive work force have a clear
              understanding of the cooperate culture and leave no stone unturned in
              their effort to achieve our goals and high standards.
            </motion.p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}