"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const education = [
    { degree: "ACADEMIC EDUCATION ", school: "2008-PRESENT" },
  { degree: "B.Tech in CSE Cyber Security", school: "The Neotia University", year: "2024-2028" },
  { degree: "Higher Secondary", school: "Udairampur Pallishree Sikshayatan School", year: "2022-2024" },
  { degree: "Secondary", school: "St. Francis Elite School", year: "2020-2022" },
    { degree: "Nursery - 8th", school: "St. Joseph's Bright School", year: "2008-2020" },
  { degree: "EXTRA CURRICULAM ACTIVITIES ", school: "2010-PRESENT" },
    { degree: "Art & craft ", school: "Obtained a skill", year: "2012-2020" },
  { degree: "Sports ", school: "Obtained many abilities", year: "2016-present" },
    { degree: "Exercise", school: "Obtained Confidence, fitness, dedication, etc.", year: "2023-present" },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-50 px-5 py-12">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-green-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        My Education & Extra Curriculam
      </motion.h1>

      <ul className="space-y-6 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.li
            key={index}
            className="border-l-4 border-green-400 pl-6 py-4 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-2xl font-semibold text-green-900">{edu.degree}</h2>
            <p className="text-green-700">{edu.school} | {edu.year}</p>
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
