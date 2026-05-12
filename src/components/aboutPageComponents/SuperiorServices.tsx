"use client";

import { motion } from "framer-motion";

export default function SuperiorServices() {
  return (
    <section className="bg-[#1a1a1a] py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Background Sketch */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/sketch-1.png"
        alt=""
        className="absolute top-0 left-0 pointer-events-none
        w-[500px] sm:w-[650px] lg:w-[840px] h-auto md:mt-10"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
          Superior Services.
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* MAIN ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:items-start">

          {/* LEFT SIDE IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="flex flex-col sm:flex-row gap-4">

              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                src="/AMC-Package-DCD-annual-maintenance-contract-Dubai.png"
                alt="AMC Fire Systems"
                className="w-[280px] sm:w-[290px] h-[210px] object-cover"
              />

              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                src="/home-10-600x410-grayscale-bababa-d0011b.jpg"
                alt="Service Team"
                className="w-[280px] sm:w-[300px] h-[212px] object-cover brightness-75"
              />

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md lg:ml-10 text-center lg:text-left"
          >

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-blue-400 text-sm mb-2"
            >
              2000-2023
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-2xl font-semibold mb-4"
            >
              Our Most Efficient Service.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-300 text-sm leading-relaxed mb-8"
            >
              One of the important factors in safety is the proper functioning of
              the existing system with timely repairs and maintenance and upgrading
              of the system whenever ever necessary. In order to achieve this
              objective, periodical maintenance of the installed systems is
              necessary. Hence we extend our service through Annual Maintenance
              Contract and Breakdown or Call Out Maintenance as well.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-brand hover:bg-green-600 transition-all duration-300 text-white px-8 py-3 text-sm font-medium rounded"
            >
              READ MORE
            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}