import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// For staggered children animations
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]'
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo' variants={fadeUp}>
        Connect with me
      </motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo' variants={fadeUp}>
        Get latest Updates
      </motion.h2>
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base' variants={fadeUp}>
        I am a developer. I do development work and contribute to projects like Amazon, Microsoft.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div className='grid grid-cols-auto gap-6 mt-10 mb-8' variants={fadeUp}>
          <motion.input
            type="text"
            placeholder='Enter your name'
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            name='name'
            variants={fadeUp}
          />
          <motion.input
            type="email"
            placeholder='Enter your email'
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
            name='email'
            variants={fadeUp}
          />
        </motion.div>

        <motion.textarea
          rows='6'
          placeholder='Enter your message'
          required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
          name='message'
          variants={fadeUp}
        />

        <motion.button
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
          variants={fadeUp}
        >
          Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        <motion.p className='mt-4' variants={fadeUp}>{result}</motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
