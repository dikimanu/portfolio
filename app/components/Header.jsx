import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Header = () => {
  return (
    <motion.div
      id='home'
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      {/* Profile Image */}
      {assets.profile_img && (
        <motion.div variants={fadeUp}>
          <Image
            src={assets.profile_img}
            alt='Satyabrata Pal'
            className='rounded-full w-32'
            priority
          />
        </motion.div>
      )}

      {/* Intro Text */}
      <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo' variants={fadeUp}>
        Hi I am Satyabrata Pal
        {assets.hand_icon && <Image src={assets.hand_icon} alt='Hand wave' className='w-6' />}
      </motion.h3>

      <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' variants={fadeUp}>
        I am a developer
      </motion.h1>

      <motion.p className='max-w-2xl mx-auto font-Ovo text-sm sm:text-base' variants={fadeUp}>
        Hi, I am a developer from Kolkata.
      </motion.p>

      {/* Buttons */}
      <motion.div className='flex flex-col sm:flex-row items-center gap-4 mt-4' variants={fadeUp}>
        {/* Contact Button */}
        <a
          href="#contact"
          className='px-10 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer'
        >
          Contact me
          {assets.right_arrow_white && <Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />}
        </a>

        {/* My Resume Button */}
        <a
          href="/sample-resume.pdf"
          download
          className="flex items-center gap-3 px-6 py-3 border rounded-lg border-gray-400 bg-white hover:bg-gray-100 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 cursor-pointer"
        >
          {/* Animated Download Icon */}
          <motion.div
            className="w-5 h-5 flex items-center justify-center text-gray-700"
            whileHover={{ y: 3, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={assets.download_icon} alt="Download" className="w-5 h-5" />
          </motion.div>

          <span className="font-Ovo text-gray-800 text-sm sm:text-base">My Resumee</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
