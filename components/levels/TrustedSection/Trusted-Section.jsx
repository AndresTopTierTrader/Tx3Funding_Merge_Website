'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import imgOne from './assets/imgOne.svg'
import imgTwo from './assets/imgTwo.svg'
import imgThree from './assets/imgThree.svg'
import { FaArrowRight } from 'react-icons/fa'
import { track } from '@vercel/analytics'
import { bgImageStyle } from "@/constants/styles"


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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
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

const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2
        }
    }
}


function TrustedSection({ locale, translations }) {
    const mainLang = locale.split('-')[0]

    return (
        <div className='px-8 mb:px-32 pt-16 mb:pt-20 pb-32 mb:pb-28 -mt-1 mb:mt-0 flex flex-col items-center' id='how-it-works' style={bgImageStyle} >
            <motion.section 
                className="flex flex-col items-center max-w-[1200px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="flex flex-col items-center">
                    <motion.h3
                        className="text-3xl text-center mb:text-4xl font-light mb:font-light text-textPrimary"
                        variants={itemVariants}
                    >
                        {translations.title}
                    </motion.h3>

                    <motion.div 
                        className='flex flex-col w-full mt-10'
                        variants={containerVariants}
                    >
                        <motion.section 
                            className='flex flex-col mb:flex-row mb:h-[530px]'
                            variants={containerVariants}
                        >
                            <motion.div 
                                className='relative bg-gradient-to-br h-[520px] mb:h-[530px] border mb:w-[500px] z-20 p-6 rounded-lg border-[#717892] from-white/5 to-black/40'
                                variants={cardVariants}
                            >
                                <motion.p variants={itemVariants} className="text-6xl font-light bg-gradient-to-b mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">1</motion.p>
                                <motion.p variants={itemVariants} className='text-2xl text-textPrimary mt-1'>{translations.firstTitle}</motion.p>
                                <motion.p variants={itemVariants} className="text-[#717892] mt-7 max-w-[450px]">{translations.firstDesc}</motion.p>
                                <motion.div 
                                    className='w-full flex flex-col items-center'
                                    variants={imageVariants}
                                >
                                    <Image src={imgOne} width='auto' loading='lazy' height='auto' className='w-96 mt-10 absolute bottom-0' alt='coint-vector' />
                                </motion.div>
                            </motion.div>
                            <motion.div 
                                className='relative bg-gradient-to-br h-[600px] mb:h-[530px] border w-full mb:w-[500px] mb:ml-10 z-20 p-6 mt-10 mb:mt-0 rounded-lg border-[#717892] from-white/5 to-black/40'
                                variants={cardVariants}
                            >
                                <motion.p variants={itemVariants} className="text-6xl font-light bg-gradient-to-b mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">2</motion.p>
                                <motion.p variants={itemVariants} className='text-2xl text-textPrimary mt-1'>{translations.secondTitle}</motion.p>
                                <motion.p variants={itemVariants} className="text-[#717892] mt-7 max-w-[450px]">{translations.secondDesc}</motion.p>
                                <motion.div 
                                    className='w-full flex flex-col items-center'
                                    variants={imageVariants}
                                >
                                    <Image src={imgTwo} width='auto' height='auto' loading='lazy' className='w-96 mt-10 absolute bottom-0' alt='coint-vector' />
                                </motion.div>
                            </motion.div>
                        </motion.section>
                        <motion.section 
                            className='relative flex h-[550px] mb:h-[350px] flex-col mb:flex-row justify-center items-center bg-gradient-to-br border mb:w-[1040px] mt-10 z-20 p-6 mb:px-16 mb:py-6 rounded-lg border-[#717892] from-white/5 to-black/40'
                            variants={cardVariants}
                        >
                            <div>
                                <motion.p variants={itemVariants} className="text-6xl font-light bg-gradient-to-b mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">3</motion.p>
                                <motion.p variants={itemVariants} className='text-2xl text-textPrimary mt-1'>{translations.thirdTitle}</motion.p>
                                <motion.p variants={itemVariants} className="text-[#717892] mt-7 max-w-[450px]">{translations.thirdDesc}</motion.p>
                            </div>
                            <motion.div 
                                variants={imageVariants}
                            >
                                <Image src={imgThree} loading='lazy' width='auto' height='auto' className='w-96 mb:ml-12 mt-10' alt='coint-vector' />
                            </motion.div>
                        </motion.section>
                    </motion.div>

                    <motion.a 
                        href='https://app.toptierlevels.com/checkout/payment' 
                        className="mt-5 titleSecond"
                        variants={itemVariants}
                    >
                        <button onClick={() => {track('Lv - How It Works CTA - Clicked')}} className="z-20 flex flex-row w-full mt-6 mb:mt-10 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                            {translations.cta}
                            <FaArrowRight className="ml-2 w-3 h-3" />
                        </button>
                    </motion.a>
                </div>
            </motion.section>
        </div>
    )
}

export default TrustedSection