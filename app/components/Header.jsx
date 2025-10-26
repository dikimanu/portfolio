"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Header = () => {
  return (
    <motion.header
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center w-11/12 max-w-3xl mx-auto bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      {assets.profile_img && (
        <motion.div
          className="p-[3px] bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full shadow-lg mb-4"
          variants={fadeUp}
        >
          <Image
            src={assets.profile_img}
            alt="Satyabrata Pal"
            className="rounded-full w-32 sm:w-40"
            priority
          />
        </motion.div>
      )}

      <motion.h3
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-2 font-Ovo text-gray-700"
        variants={fadeUp}
      >
        Hi, I am <span className="font-semibold text-gray-900">Satyabrata Pal</span>
        {assets.hand_icon && (
          <Image src={assets.hand_icon} alt="Hand" className="w-6" />
        )}
      </motion.h3>

      <motion.h1
        className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        variants={fadeUp}
      >
        I am a Developer
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto mt-4 text-gray-600 font-Ovo text-sm sm:text-base"
        variants={fadeUp}
      >
        I’m a passionate developer from Kolkata — creating modern, responsive, and interactive web applications.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        variants={fadeUp}
      >
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Contact Me
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 border border-gray-300 bg-white text-gray-800 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition flex items-center gap-2"
        >
          <Image src={assets.download_icon} alt="Download" className="w-5 h-5" />
          My Resume
        </a>
      </motion.div>
    </motion.header>
  );
};

export default Header;
