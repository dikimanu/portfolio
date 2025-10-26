"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-b from-purple-50 via-blue-50 to-green-50 pt-12 pb-6">
      {/* --- Logo and Email --- */}
      <div className="text-center mb-10">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-4 drop-shadow-md"
        />
        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 font-Ovo">
          <Image src={assets.mail_icon} alt="Mail" className="w-5" />
          <a
            href="mailto:satyabratapal50@gmail.com"
            className="hover:text-purple-600 transition"
          >
            satyabratapal50@gmail.com
          </a>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="border-t border-gray-300 mx-[10%] mb-8" />

      {/* --- Bottom Section --- */}
      <div className="text-center sm:flex items-center justify-between mx-[10%] text-gray-700">
        <p className="text-sm font-Ovo">
          © 2025 <span className="font-semibold text-gray-900">Bulu Pal</span>.
          All rights reserved.
        </p>

        <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0 text-sm font-Ovo">
          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/_satyabrata.pal/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:text-purple-600 transition"
            >
              Instagram
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          {/* LinkedIn */}
          <li>
            <a
              href="https://linkedin.com/in/your_linkedin_username"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:text-purple-600 transition"
            >
              LinkedIn
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          {/* GitHub */}
          <li>
            <a
              href="https://github.com/dikimanu"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:text-purple-600 transition"
            >
              GitHub
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          {/* Facebook */}
          <li>
            <a
              href="https://www.facebook.com/satyabrata.pal.5264"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hover:text-purple-600 transition"
            >
              Facebook
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
