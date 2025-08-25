'use client'

import React from 'react'
import mainImg from './assets/joinUsImage.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

function JoinUs({ translations }) {
    return (
        <motion.div
            className='flex flex-col items-center -mt-10 mb:pt-3 pb-24'
        >
            <motion.section
                className='flex flex-col justify-center items-center px-8 mb:px-0 w-full max-w-[1200px]'
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className='flex flex-col mb:flex-row items-center'>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Image
                            src={mainImg}
                            alt='main-img'
                            className='w-[400px]'
                        />
                    </motion.div>
                    <motion.div
                        className='flex flex-col space-y-4 ml-0 mt-8 mb:mt-0 mb:ml-10'
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.p
                            className='text-3xl font-light'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            {translations.ready} {" "}
                            <motion.span
                                className="bg-gradient-to-r from-[#45D1FF] font-medium to-[#167BCC] inline-block text-transparent bg-clip-text"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {translations.join}
                            </motion.span>
                        </motion.p>
                        <motion.p
                            className='max-w-[400px] text-slate-400'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            {translations.the} <motion.span
                                className='font-bold'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            > #TopTierPaidForIt </motion.span> {translations.campaign}
                        </motion.p>
                        <motion.p
                            className='max-w-[400px] text-slate-400'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            {translations.excited} <motion.span
                                className='font-bold'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            > {translations.promo} </motion.span>
                        </motion.p>
                        <motion.p
                            className='text-[#45D1FF] text-sm font-bold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                            }}
                            whileHover={{
                                scale: 1.05,
                                color: '#167BCC',
                                transition: { duration: 0.3 }
                            }}
                        >
                            # T O P T I E R P A I D F O R I T
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default JoinUs