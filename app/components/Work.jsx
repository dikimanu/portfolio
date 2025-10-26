"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, workData } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Work = () => {
  return (
    <section
      id="work"
      className="w-full px-5 sm:px-10 md:px-12 lg:px-[12%] py-16 bg-gradient-to-b from-blue-50 via-purple-50 to-white scroll-mt-20"
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-700"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo text-gray-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        My Latest Works
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 font-Ovo text-sm sm:text-base"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        A selection of my recent projects, blending design and technology for
        beautiful, functional web experiences.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workData.map((project, i) => (
          <motion.div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition"
            style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm w-10/12 rounded-md p-4 flex justify-between items-center transform group-hover:-translate-y-2 transition-all duration-500">
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">{project.title}</h3>
                <p className="text-xs text-gray-600">{project.description}</p>
              </div>
              <div className="border border-gray-700 rounded-full w-7 h-7 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 shadow-md">
                <Image src={assets.send_icon} alt="send" className="w-3" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#"
        className="block w-max mx-auto mt-16 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        Show More
      </motion.a>
    </section>
  );
};

export default Work;
