import React from 'react';
import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Services = () => {
  return (
    <div id='services' className='w-full px-5 sm:px-10 md:px-12 lg:px-[12%] py-10 scroll-mt-20'>
      <motion.h4 className='text-center mb-2 text-lg font-Ovo' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>What I offer</motion.h4>
      <motion.h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>My Services</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        I am a developer. I do web development projects. For official examples, you can visit platforms like Amazon or Microsoft.
      </motion.p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div key={index} className='border border-gray-400 rounded-lg px-6 sm:px-8 py-8 sm:py-12 hover:shadow-lg cursor-pointer hover:bg-gray-100 hover:-translate-y-1 transition duration-500'
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            <Image src={icon} alt={title} className='w-10' />
            <h3 className='text-lg sm:text-xl my-4 text-gray-700'>{title}</h3>
            <p className='text-sm sm:text-base text-gray-600 leading-5'>{description}</p>
            {link && (
              <a href={link} className='flex items-center gap-2 text-sm sm:text-base mt-5'>
                Read more <Image src={assets.right_arrow} alt='Arrow' className='w-4' />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
