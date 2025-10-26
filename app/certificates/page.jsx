"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const certificates = [
  { title: "AI Labs Certificate", image: "/certificate1.jpg", issuer: "Coursera", date: "Jan 2024" },
  { title: "Next.js Expert", image: "/nextjs-cert.png", issuer: "Udemy", date: "Mar 2024" },
  { title: "JavaScript Mastery", image: "/js-cert.png", issuer: "freeCodeCamp", date: "Dec 2023" },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 px-5 py-12">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-blue-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        My Certificates
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-400"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="relative w-full h-64">
              <Image src={cert.image} alt={cert.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-blue-900">{cert.title}</h2>
              <p className="text-blue-700">{cert.issuer}</p>
              <p className="text-blue-500 text-sm">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
