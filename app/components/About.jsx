"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { assets, infoList, toolsData } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-5 sm:px-10 md:px-12 lg:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-blue-50 via-purple-50 to-white"
    >
      {/* Section Title */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-700"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo text-gray-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-16">
        {/* Profile Image */}
        <motion.div
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-xl border-4 border-transparent bg-gradient-to-br from-blue-400 to-purple-400 p-[2px] hover:shadow-2xl transition duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={assets.user_image}
              alt="User"
              className="w-full rounded-3xl"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.p
            className="mb-10 max-w-2xl font-Ovo text-gray-700 text-sm sm:text-base leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            I am a cyber expert as well as a developer, learning everything from
            the basics of CSE. I have done core subjects, projects, internships,
            and have experience working with companies like ISRO.
          </motion.p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className="p-[1px] rounded-xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transition-transform hover:-translate-y-2"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <div className="bg-white rounded-xl p-6 h-full cursor-pointer hover:shadow-xl transition duration-500">
                  {icon && (
                    <Image
                      src={icon}
                      alt={title}
                      className="mt-3 w-10 h-10 opacity-90"
                    />
                  )}
                  <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Tab Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/certificates"
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Certificates
            </Link>
            <Link
              href="/education"
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Education
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Projects
            </Link>
          </div>

          {/* Tools */}
          <h4 className="my-8 text-gray-800 font-Ovo text-lg">Tools I use</h4>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
