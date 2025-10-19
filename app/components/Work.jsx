import React from 'react';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Work = () => {
  return (
    <div id='work' className='w-full px-5 sm:px-10 md:px-12 lg:px-[12%] py-10 scroll-mt-20'>
      <motion.h4 className='text-center mb-2 text-lg font-Ovo' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>My Portfolio</motion.h4>
      <motion.h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>My Latest Works</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        I am a developer. I do web development projects. For official work examples, you can visit platforms like Amazon or Microsoft.
      </motion.p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
        {workData.map((project, index) => (
          <motion.div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 sm:px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold text-sm sm:text-base'>{project.title}</h2>
                <p className='text-xs sm:text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-6 h-6 flex items-center justify-center shadow-[1px_2px_4px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-3 sm:w-4' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a href='#' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-6 sm:px-10 mx-auto my-20 hover:bg-gray-100 transition duration-500'
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
        Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-3 sm:w-4' />
      </motion.a>
    </div>
  );
};

export default Work;
