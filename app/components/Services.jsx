"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, serviceData } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-5 sm:px-10 md:px-12 lg:px-[12%] py-16 bg-gradient-to-b from-purple-50 via-blue-50 to-white scroll-mt-20"
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-700"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        What I Offer
      </motion.h4>

      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo text-gray-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 font-Ovo text-sm sm:text-base"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        I build web experiences with clean design, intuitive user interfaces, and cutting-edge technologies.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {serviceData.map(({ icon, title, description, link }, i) => (
          <motion.div
            key={i}
            className="p-[2px] rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 hover:scale-105 transition-transform"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="bg-white rounded-xl p-8 hover:shadow-xl transition duration-500 h-full flex flex-col justify-between">
              <Image src={icon} alt={title} className="w-10 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-3">{description}</p>
              {link && (
                <a
                  href={link}
                  className="text-sm text-blue-600 mt-5 hover:underline flex items-center gap-2"
                >
                  Read More
                  <Image src={assets.right_arrow} alt="arrow" className="w-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
