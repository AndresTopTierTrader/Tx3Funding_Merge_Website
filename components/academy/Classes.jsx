'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import lockedImg from './assets/locked.svg'
import iconSix from './assets/iconSix.svg'
import { track } from '@vercel/analytics'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Classes({ translations, setPopUpOpen }) {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    React.useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <div>
            <div className='flex flex-col items-center bg-[#0B111D]  mb-24 mb:-mt-10'>
                <motion.div
                    ref={ref}
                    className='flex flex-col items-center max-w-[1100px] mb:-pt-10 py-24'
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div
                        className='flex flex-col w-full items-center'
                        variants={itemVariants}
                    >
                        <p className='font-medium text-white py-10 mb:-mt-20 -mt-20 text-3xl'> {translations.learn.inside} </p>
                        <motion.div
                            className='flex mb:flex-row flex-col items-center mb:py-10 mb:justify-evenly w-full'
                            variants={containerVariants}
                        >
                            <motion.div className='' variants={itemVariants}>
                                <div className='flex flex-row items-center'>
                                    <Image src={lockedImg} alt="locked-img" className='w-10' />
                                    <p className='text-lg ml-2 text-secondary'> {translations.learn.classOne} </p>
                                </div>
                                <div className='flex flex-row items-center mt-8 mb:opacity-70 opacity-75'>
                                    <Image src={lockedImg} alt="locked-img" className='w-10' />
                                    <p className='text-lg ml-2 text-secondary'>{translations.learn.classTwo} </p>
                                </div>
                                <div className='flex flex-row items-center mt-8 mb:opacity-40 opacity-55'>
                                    <Image src={lockedImg} alt="locked-img" className='w-10' />
                                    <p className='text-lg ml-2 text-secondary'> {translations.learn.classThree} </p>
                                </div>
                            </motion.div>
                            <motion.div className='-ml-10 mt-8 mb:mt-0 mb:ml-0 pb-20 mb:pb-0' variants={itemVariants}>
                                <div className='flex flex-row items-center opacity-45 mb:opacity-100'>
                                    <Image src={lockedImg} alt="locked-img" className='w-10' />
                                    <p className='text-lg ml-2 text-secondary'> {translations.learn.classFour} </p>
                                </div>
                                <div className='flex flex-row items-center mt-8 mb:opacity-70 opacity-35'>
                                    <Image src={lockedImg} alt="locked-img" className='w-10' />
                                    <p className='text-lg ml-2 text-secondary'> {translations.learn.classFive} </p>
                                </div>
                                <div className='flex flex-row items-center mt-8 mb:opacity-40 opacity-25'>
                                    <Image src={lockedImg} alt="locked-img" className='w-10' />
                                    <p className='text-lg ml-2 text-secondary'> {translations.learn.classSix} </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className='flex flex-col-reverse items-center mb:flex-row justify-between w-full px-8 mb:px-0 mt-0 mb:mt-24 '
                            variants={containerVariants}
                        >
                            <motion.div
                                className='flex flex-col items-center mb:items-start text-center mb:text-left'
                                variants={itemVariants}
                            >
                                <p className='text-3xl text-white font-light mt-4 max-w-[440px]'>
                                    {translations.popular.secTwoTitleThree}
                                </p>
                                <motion.button
                                    className='bg-gradient-to-b from-[#0052B4] to-[#167ACC] text-center text-white py-2 mt-8 w-fit px-6 rounded-xl font-medium transition-all hover:scale-110'
                                    onClick={() => {
                                        track('Academy - CTA Clicked')
                                        setPopUpOpen(true)
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {translations.popular.goToClass}
                                </motion.button>
                            </motion.div>
                            <Image src={iconSix} alt='icon-four' className='w-80 mb:ml-24' />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Classes
