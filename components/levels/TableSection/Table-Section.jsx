'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import diamondImg from "./assets/diamondImg.svg"
import { track } from '@vercel/analytics'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    }
}

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const cardVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.9,
        y: 30
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3
        }
    }
}

function TableSection({ locale, translations }) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div className='px-8 bg-[#0B111D] mb:px-32 pt-0 mb:pt-2 pb-16 -mt-1 mb:mt-0 flex flex-col items-center' id='challenges' ref={ref}>
            <motion.section
                className="flex flex-col items-center max-w-[1200px]"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h3 
                    className="text-textPrimary font-light text-3xl mb:text-4xl max-w-[300px] mb:max-w-full text-center mb:text-left"
                    variants={titleVariants}
                >
                    {translations.title}
                </motion.h3>
                <div className="flex flex-col mb:flex-row w-[340px] mb:w-full items-center justify-around">
                    {/* Gold Section */}
                    <motion.section 
                        className="bg-gradient-to-br mb:min-w-[340px] w-full border mt-10 z-20 px-6 py-8 rounded-lg border-[#44495c] from-[#3D392A] to-[#0B111D]"
                        variants={cardVariants}
                    >
                        <motion.p variants={itemVariants} className="text-textPrimary text-4xl font-normal">{translations.gold}</motion.p>
                        <div className="mt-16">
                            {/* Payout Levels */}
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 4</p>
                                <p className="mb:ml-20 text-[#D7DDF4]">$100</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 7</p>
                                <p className="mb:ml-20 text-[#D7DDF4]">$500</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 10</p>
                                <p className="mb:ml-16 text-[#D7DDF4]">$2,500</p>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants}>
                            <Link href="https://app.toptierlevels.com/checkout/payment">
                                <button onClick={() => {track('Lv -Gold Table CTA - Clicked')}} className="z-20 flex flex-row w-full mt-16 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                                    {translations.start} {translations.gold} {translations.now}
                                    <FaArrowRight className="ml-2 w-3 h-3" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.section>

                    {/* Platinum Section */}
                    <motion.section 
                        className="bg-gradient-to-br mb:min-w-[330px] w-full border mt-10 mb:ml-10 z-20 px-6 py-8 rounded-lg border-[#44495c] from-[#5E6D72] to-[#0B111D]"
                        variants={cardVariants}
                    >
                        <motion.p variants={itemVariants} className="text-textPrimary text-4xl font-normal">{translations.platinum}</motion.p>
                        <div className="mt-16">
                            {/* Payout Levels */}
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 4</p>
                                <p className="mb:ml-20 text-[#D7DDF4]">$500</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 7</p>
                                <p className="mb:ml-16 text-[#D7DDF4]">$2,500</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 10</p>
                                <p className="mb:ml-14 text-[#D7DDF4]">$12,500</p>
                            </motion.div>
                        </div>
                        <motion.div variants={itemVariants}>
                            <Link href="https://app.toptierlevels.com/checkout/payment">
                                <button onClick={() => {track('Lv -Platinum Table CTA - Clicked')}} className="z-20 flex flex-row w-full mt-16 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                                    {translations.start} {translations.platinum} {translations.now}
                                    <FaArrowRight className="ml-2 w-3 h-3" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.section>

                    {/* Diamond Section */}
                    <motion.section 
                        className="relative bg-gradient-to-br mb:min-w-[320px] w-full border mt-10 mb:ml-10 z-20 px-6 py-8 rounded-lg border-[#45D1FF] from-[#176973] to-[#0B111D]"
                        variants={cardVariants}
                    >
                        <motion.p variants={itemVariants} className="text-textPrimary text-4xl font-normal">{translations.diamond}</motion.p>
                        <div className="mt-16">
                            {/* Payout Levels */}
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 4</p>
                                <p className="text-[#D7DDF4]">$1,000</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 7</p>
                                <p className="text-[#D7DDF4]">$5,000</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-row items-center mt-3 w-full justify-between">
                                <p className="text-[#A2ACCF] text-sm">{translations.payoutLevel} 10</p>
                                <p className="text-[#D7DDF4]">$25,000</p>
                            </motion.div>
                        </div>
                        <motion.div 
                            variants={imageVariants}
                            className="absolute bottom-0 right-0"
                        >
                            <Image src={diamondImg} alt="diamond" className="w-44 h-44" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="https://app.toptierlevels.com/checkout/payment">
                                <button onClick={() => {track('Lv - Diamond Table CTA - Clicked')}} className="z-20 flex flex-row w-full mt-16 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                                    {translations.start} {translations.diamond} {translations.now}
                                    <FaArrowRight className="ml-2 w-3 h-3" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.section>
                </div>
            </motion.section>
        </div>
    )
}

export default TableSection;