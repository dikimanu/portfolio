"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = ["home", "about", "services", "work", "contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track section visibility
  useEffect(() => {
    const handleScrollSection = () => {
      const scrollPos = window.scrollY + 300;
      for (let section of navItems) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop) setActiveSection(section);
      }
    };
    window.addEventListener("scroll", handleScrollSection);
    return () => window.removeEventListener("scroll", handleScrollSection);
  }, []);

  return (
    <>
      {/* Gradient Background overlay behind navbar */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-30%] opacity-70">
        <Image
          src={assets.header_bg_color}
          alt="Navbar Background"
          className="w-full"
          priority
        />
      </div>

      <motion.nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "backdrop-blur-md bg-gradient-to-r from-white/70 to-white/60 shadow-md"
            : "bg-transparent"
        }`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <a href="#home">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14 hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.08 }} transition={{ duration: 0.25 }}>
              <a
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`font-Ovo px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg"
                    : "hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400 hover:text-white border border-transparent hover:border-white/20"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Contact Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full font-Ovo bg-gradient-to-r from-purple-400 to-blue-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          {/* Mobile Menu Icon */}
          <button
            className="block md:hidden ml-3 transform hover:scale-110 transition duration-300"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-green-100 shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute right-6 top-6 hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image src={assets.close_black} alt="Close Menu" className="w-5 cursor-pointer" />
          </div>

          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className={`font-Ovo block px-4 py-3 rounded-full transition duration-300 ${
                  activeSection === item
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md"
                    : "hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-400 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
