"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      e.target.reset();
    } else setResult("❌ " + data.message);
  };

  return (
    <motion.section
      id="contact"
      className="w-full px-[12%] py-16 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 scroll-mt-20"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo text-gray-700" variants={fadeUp}>
        Connect with Me
      </motion.h4>
      <motion.h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900" variants={fadeUp}>
        Get Latest Updates
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 font-Ovo text-sm sm:text-base"
        variants={fadeUp}
      >
        Let’s collaborate! Fill out the form below to reach out or discuss a project idea.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
        variants={fadeUp}
      >
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none mb-6"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          Submit Now
        </button>
        <p className="mt-4 text-center text-sm text-gray-700">{result}</p>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
