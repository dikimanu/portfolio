import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = ["home", "about", "services", "work", "contact"];

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSection = () => {
      const scrollPos = window.scrollY + 200;
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-30%]">
        <Image src={assets.header_bg_color} alt="Background" className="w-full" priority />
      </div>

      <motion.nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 bg-white shadow-sm ${isScroll ? "backdrop-blur-lg bg-opacity-95" : ""}`}
        initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        
        <a href="#home">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          {navItems.map(item => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <a href={`#${item}`} onClick={() => setActiveSection(item)}
                className={`font-Ovo px-4 py-2 rounded transition duration-300 ${activeSection === item ? "bg-gray-200" : "hover:bg-gray-100"}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3 transform hover:scale-110 transition duration-300" onClick={() => setIsMenuOpen(true)}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 h-screen bg-rose-50 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="absolute right-6 top-6 transform hover:scale-110 transition duration-300" onClick={() => setIsMenuOpen(false)}>
            <Image src={assets.close_black} alt="Close" className="w-5 cursor-pointer" />
          </div>

          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => { setActiveSection(item); setIsMenuOpen(false); }}
                className={`font-Ovo block px-4 py-3 rounded transition duration-300 ${activeSection === item ? "bg-gray-200" : "hover:bg-gray-100"}`}>
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
