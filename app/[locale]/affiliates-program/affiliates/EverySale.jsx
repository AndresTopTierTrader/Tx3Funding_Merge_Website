'use client'

import React from 'react'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'
import { LuTrophy } from "react-icons/lu";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export function EverySale({ translatedTexts }) {
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const arrowVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, delay: 0.3 }
        },
        shake: {
            x: [0, -4, 4, -4, 4, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2 * (index + 1),
                ease: "easeOut"
            }
        })
    };

    const trophyVariants = {
        hidden: { rotate: -180, scale: 0 },
        visible: {
            rotate: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 200
            }
        }
    };

    return (
        <div className='flex flex-col mt-12 mb:mt-0 items-center w-full' ref={containerRef}>
            <div className='flex flex-col mb:flex-row items-center justify-center w-full mb-12'>
                <motion.h3
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className='text-3xl md:text-4xl font-light text-white text-center'
                >
                    {translatedTexts.salesTitleOne}
                </motion.h3>
                <motion.div
                    variants={arrowVariants}
                    initial="hidden"
                    animate={isInView ? ["visible", "shake"] : "hidden"}
                >
                    <FaArrowRight className='w-6 h-6 hidden mb:block mb:mx-6 text-[#45D1FF]' />
                    <FaArrowDown className='w-8 h-8 block mb:hidden my-4 text-[#45D1FF]' />
                </motion.div>
                <motion.p
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className='text-3xl md:text-4xl font-light text-white text-center max-w-[200px] mb:max-w-full'
                >
                    {translatedTexts.salesTitleTwo}  {translatedTexts.salesTitleThree}
                </motion.p>
            </div>

            <section className='flex flex-col -mt-8 mb:mt-0 mb:flex-row w-full mb:w-fit items-center'>
                {[15, 50, 100, 200].map((sales, index) => (
                    <motion.div
                        key={sales}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className='flex flex-col items-start mb:items-center p-6 mb:mx-4 w-full mb:w-fit mt-5 mb:mt-0 rounded-xl bg-gradient-to-br border border-[#717892] from-white/5 to-[#0B111D] relative shadow-md '
                    >
                        <div className='flex flex-row items-center mb:flex-col'>
                            <motion.div
                                variants={trophyVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <div className='rounded-full border-2 border-[#45D1FF] mb:mb-5 p-2' >
                                    <LuTrophy className='w-4 mb:w-7 h-4 mb:h-7 text-[#45D1FF] ' />
                                </div>

                            </motion.div>
                            <p className='text-white text-2xl ml-2 mb:ml-0 font-light'>{translatedTexts.salesAfter} {sales} {translatedTexts.salesSales}</p>
                        </div>

                        <div className='h-[1px] hidden mb:block w-full bg-gray-200 my-4' />
                        <div className='flex flex-row mb:flex-col mt-5 mb:mt-0 items-end mb:items-center' >
                            <p className='bg-gradient-to-r from-[#45D1FF] py-0 mb:py-2 to-[#167BCC] inline-block text-transparent bg-clip-text text-4xl mb:text-5xl mt-0 mb:mt-10 font-semibold mb:font-bold'>
                                {sales === 15 ? '5K' : sales === 50 ? '25K' : sales === 100 ? '100K' : '300K'}
                            </p>
                            <p className='ml-1 mb:ml-0 bg-gradient-to-r from-[#45D1FF] py-0 mb:py-2 to-[#167BCC] inline-block text-transparent mb:mt-0 bg-clip-text font-medium mb:font-semibold text-2xl mb:text-3xl'>Challenge</p>
                        </div>

                    </motion.div>
                ))}
            </section>
        </div>
    )
}