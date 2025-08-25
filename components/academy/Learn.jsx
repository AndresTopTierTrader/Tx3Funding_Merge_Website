'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import iconOne from './assets/iconOne.svg'
import iconTwo from './assets/iconTwo.svg'
import iconThree from './assets/iconThree.svg'
import PopUp from './PopUp'

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

function Learn({ translations }) {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    React.useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <div className='flex flex-col items-center bg-[#0B111D] mb:mb-10 mb:-mt-2'>
            <motion.div 
                ref={ref}
                className='flex flex-col items-center max-w-[1200px] mb:-pt-10  py-24 px-8 mb:px-0'
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div 
                    className='flex flex-col w-full items-center'
                    variants={itemVariants}
                >
                    <div className='flex flex-col items-center w-full'>
                        <motion.p 
                            className='mb:max-w-[600px] text-white text-3xl font-ligth text-center'
                            variants={itemVariants}
                        >
                            {translations.learn.tOne}
                        </motion.p>
                        <motion.p 
                            className='mb:max-w-[600px] text-secondary text-center mt-5'
                            variants={itemVariants}
                        >
                            {translations.learn.pOne}
                        </motion.p>
                    </div>
                    <motion.div 
                        className='flex flex-col mb:flex-row items-center justify-between w-full mt-20'
                        variants={containerVariants}
                    >
                        <motion.div 
                            className='flex flex-col items-center mb:mr-36'
                            variants={itemVariants}
                        >
                            <Image src={iconOne} alt='iconOne'/>
                            <motion.p 
                                className='text-xl font-medium mt-5 max-w-[200px] text-center text-white'
                                variants={itemVariants}
                            >
                                {translations.learn.secOneTitleOne}
                            </motion.p>
                            <motion.p 
                                className='text-center max-w-[200px] text-secondary mt-5'
                                variants={itemVariants}
                            >
                                {translations.learn.secOneParOne}
                            </motion.p>
                        </motion.div>
                        <motion.div 
                            className='flex flex-col items-center mt-16 mb:mt-0'
                            variants={itemVariants}
                        >
                            <Image src={iconTwo} alt='iconTwo'/>
                            <motion.p 
                                className='text-xl font-medium mt-5 max-w-[200px] text-center text-white'
                                variants={itemVariants}
                            >
                                {translations.learn.secOneTitleTwo}
                            </motion.p>
                            <motion.p 
                                className='text-center max-w-[200px] text-secondary mt-5'
                                variants={itemVariants}
                            >
                                {translations.learn.secOneParTwo}
                            </motion.p>
                        </motion.div>
                        <motion.div 
                            className='flex flex-col items-center mb:ml-32 mt-16 mb:mt-0'
                            variants={itemVariants}
                        >
                            <Image src={iconThree} alt='iconThree'/>
                            <motion.p 
                                className='text-xl font-medium mt-5 max-w-[200px] text-center text-white'
                                variants={itemVariants}
                            >
                                {translations.learn.secOneTitleThree}
                            </motion.p>
                            <motion.p 
                                className='text-center max-w-[250px] text-secondary mt-5'
                                variants={itemVariants}
                            >
                                {translations.learn.secOneParThree}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Learn
