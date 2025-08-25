'use client'

import React from 'react'
import { motion } from 'framer-motion'

//Images
import stepOneImg from './assets/stepOne.svg'
import stepTwoImg from './assets/stepTwo.svg'
import stepThreeImg from './assets/stepThree.svg'

import stepOneImgEs from './assets/stepOne_es.svg'
import stepTwoImgEs from './assets/stepTwo_es.svg'
import stepThreeImgEs from './assets/stepThree_es.svg'

import Image from 'next/image'

function Testimonial({ translations, locale }) {

    const mainLang = locale.split('-')[0]

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: custom * 0.4, // Creates the domino effect
                type: "spring",
                stiffness: 50
            }
        })
    }

    return (
        <motion.div
            className='flex flex-col items-center -mt-2 mb:mt-0 pt-0 mb:pt-10 pb-24'
        >
            <section className='flex flex-col px-8 mb:px-0 justify-center items-center w-full max-w-[1200px]'>
                <motion.p
                    className='text-3xl font-light'
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >{translations.how}{" "}
                    {translations.testimonial}
                </motion.p>

                {/* Row */}
                <div className='grid grid-cols-1 mb:grid-cols-3 mt-8 mb:mt-12 gap-6 mb:gap-12'>
                    {/* First Card */}
                    <motion.div
                        className="flex flex-col items-start bg-gradient-to-br border z-20 p-3 rounded-lg border-[#717892] from-white/5 to-[#0B111D]"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0} // First delay
                    >
                        <div className="flex flex-col p-9 gap-12">
                            <motion.span
                                className="bg-gradient-to-r from-[#45D1FF] font-medium to-[#167BCC] inline-block text-transparent bg-clip-text text-2xl"
                                whileHover={{ scale: 1.05 }}
                            > {mainLang == 'es'? 'Paso Uno' : 'Step One'} </motion.span>
                            <p className='text-start font-light'>
                                {translations.step_one}
                            </p>
                        </div>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        className="flex flex-col items-start bg-gradient-to-br border z-20 p-3 rounded-lg border-[#717892] from-white/5 to-[#0B111D]"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1} // Second delay
                    >
                        <div className="flex flex-col p-9 gap-12">
                            <motion.span
                                className="bg-gradient-to-r from-[#45D1FF] font-medium to-[#167BCC] inline-block text-transparent bg-clip-text text-2xl"
                                whileHover={{ scale: 1.05 }}
                            > {mainLang == 'es'? 'Paso Dos' : 'Step Two'}  </motion.span>
                            <p className='text-start font-light'>
                                {translations.step_two}
                            </p>
                        </div>
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        className="flex flex-col items-start bg-gradient-to-br border z-20 p-3 rounded-lg border-[#717892] from-white/5 to-[#0B111D]"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2} // Third delay
                    >
                        <div className="flex flex-col p-9 gap-12">
                        <motion.span
                                className="bg-gradient-to-r from-[#45D1FF] font-medium to-[#167BCC] inline-block text-transparent bg-clip-text text-2xl"
                                whileHover={{ scale: 1.05 }}
                            >{mainLang == 'es'? 'Paso Tres' : 'Step Three'} </motion.span>
                            <p className='text-start font-light'>
                                {translations.step_three}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default Testimonial