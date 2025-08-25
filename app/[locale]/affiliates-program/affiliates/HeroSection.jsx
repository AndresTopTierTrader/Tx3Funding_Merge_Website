'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

 
export function HeroSection({ translatedTexts }) {

    return (
        <section className='mt-24 mb-16 mb:mb-24 md:mt-12'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col gap-6 items-center relative z-10 px-7 md:px-24'
            >
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2
                    }}
                    className='transform-y-16 pt-12 mb:pt-0 text-4xl md:text-5xl text-white font-light text-center max-w-2xl'
                >
                    {translatedTexts.t1_1} <span
                        className='bg-gradient-to-r font-medium from-[#45D1FF] py-2 to-[#167BCC] inline-block text-transparent bg-clip-text'
                    >
                        {translatedTexts.t1_2}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.6
                    }}
                    className='text-center text-secondary text-xl pb-8 mb:pb-0'
                >
                    {translatedTexts.p1}
                </motion.p>

                <a href='https://app.toptiertrader.com/login' target='_blank'>
                    <button className="flex flex-row -mt-5 mb:mt-0 items-center text-sm text-white rounded-lg bg-[#FF532D] hover:bg-orange-700 transition-all py-2 px-4 scaleIn">
                        {translatedTexts.cta}
                        <FaArrowRight className="ml-2 w-3 h-3" />
                    </button>
                </a>

            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0.8
                }}
            >

            </motion.div>
        </section>
    )
}