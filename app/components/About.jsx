import React from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div id='about' className='w-full px-5 sm:px-10 md:px-12 lg:px-[12%] py-10 scroll-mt-20'>
      <motion.h4 className='text-center mb-2 text-lg font-Ovo' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        Introduction
      </motion.h4>
      <motion.h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        About me
      </motion.h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-16'>
        <motion.div className='w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500'
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          <Image src={assets.user_image} alt='User' className='w-full rounded-3xl' priority />
        </motion.div>

        <div className='flex-1'>
          <motion.p className='mb-10 max-w-2xl font-Ovo text-sm sm:text-base'
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            I am a cyber expert as well as a developer, learning everything from the basics of CSE.
            I have done core subjects, projects, internships, and have experience working with companies like ISRO.
          </motion.p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 hover:shadow-lg transition duration-500 ease-in-out'
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}
              >
                {icon && <Image src={icon} alt={title} className='mt-3 w-10 h-10' />}
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </motion.li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
          <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer transform hover:scale-110 hover:-translate-y-1 transition duration-300'
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
