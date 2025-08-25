'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { ENVIRONMENT_URL } from '@/constants/global';


function Main({ locale, translations }) {
  return (
    <motion.main
      className="flex flex-col items-center mb:mt-0 mb:pb-44 -mt-20 pb-36 pt-60"
    >
      <motion.div
        className="flex flex-col max-w-[1200px] items-center justify-center w-full"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title Section */}
        <header className="flex flex-col items-center px-8 mb:px-0">
          <motion.h1
            className="text-4xl mb:text-6xl text-center font-light"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TopTier{" "}
            <motion.span
              className="bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block font-medium text-transparent bg-clip-text"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Paid For It
            </motion.span>
          </motion.h1>
          <motion.h2
            className=" font-medium text-xl mt-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {translations.received}
          </motion.h2>
          <motion.h3
            className="font-light text-base text-center mt-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {translations.interested}{" "}
            <motion.span
              className="font-medium"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              50% OFF
            </motion.span>{" "}
            {translations.next}
          </motion.h3>
          <Link href={`${ENVIRONMENT_URL}/${locale}/toptier-paid-for-it/form`} className='hover:scale-105 transition-all' >
            <motion.button
              className="flex flex-row  mt-8 items-center text-sm text-white rounded-md bg-[#FF532D] hover:bg-orange-700 transition-all py-2 px-4 scaleIn"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 2 }}
            >
              {translations.cta}
              <FaArrowRight className='ml-2' />
            </motion.button>
          </Link>
        </header>
      </motion.div>
    </motion.main>
  )
}

export default Main