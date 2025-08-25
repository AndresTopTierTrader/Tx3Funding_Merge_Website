'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image'
import submissionImg from './assets/submissionImage.png'
import Link from 'next/link'
import { ENVIRONMENT_URL } from '@/constants/global';

function Submission({ translations, locale }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 }
        }
    }

    const checkItemVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: custom * 0.15,
                ease: "easeOut"
            }
        })
    }

    const boxVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            className='flex flex-col items-center -mt-2 mb:mt-0 pt-0 mb:pt-10 pb-24'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <section className='flex flex-col px-8 mb:px-0 justify-center items-start w-full max-w-[1200px]'>
                <motion.p
                    className='text-3xl font-light'
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {translations.submission}{" "}{translations.guidelines}
              
                </motion.p>
                <motion.p
                    className='text-start text-slate-400 mt-6 max-w-[500px]'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {translations.before}
                </motion.p>

                {/* Box */}
                <motion.div
                    className='w-full mt-60 rounded-2xl mb:mt-16 flex flex-col mb:flex-row border-2 border-[#717892]'
                    variants={boxVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Image */}
                    <motion.div
                        className='mb:p-12 flex flex-col items-center justify-center mb:w-2/4 bg-transparent rounded-t-2xl mb:rounded-l-2xl'
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Image
                            src={submissionImg}
                            alt='submission-img'
                            className='-mt-48 mb:mt-0  w-[700px]'
                            loading='lazy'
                        />
                    </motion.div>

                    {/* Video Requirements */}
                    <div className='mb:w-2/4 flex flex-col p-8 mb:p-12 items-center mb:items-start'>
                        <motion.p
                            className='bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-transparent bg-clip-text text-2xl font-medium'
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {translations.video_req}
                        </motion.p>

                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={`video-${index}`}
                                className='flex flex-row items-start mt-4'
                                variants={checkItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <FaCheck className='text-[#45D1FF] mt-1 w-4 h-4' />
                                <p className='ml-2 max-w-[220px] text-slate-300 font-light mb:max-w-[420px]'>
                                    {index === 0 && <><span className='font-medium'>{translations.orientation} </span> {translations.orientation_desc} </>}
                                    {index === 1 && <><span className='font-medium'>{translations.light}</span> {translations.light_desc}</>}
                                    {index === 2 && <><span className='font-medium'>{translations.length} </span> {translations.length_desc} </>}
                                </p>
                            </motion.div>
                        ))}

                        <motion.p
                            className='bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-transparent bg-clip-text text-2xl font-medium mt-10'
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            {translations.content}
                        </motion.p>

                        {[0, 1, 2, 3].map((index) => (
                            <motion.div
                                key={`content-${index}`}
                                className='flex flex-row items-start mt-4'
                                variants={checkItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index + 4} // Continuing the sequence from the previous items
                            >
                                <FaCheck className='text-[#45D1FF] mt-1 w-4 h-4' />
                                <p className='ml-2 font-light max-w-[220px] text-slate-300 mb:max-w-[420px]'>
                                    {index === 0 && <><span className='font-medium'>{translations.funding}  </span> {translations.funding_desc}</>}
                                    {index === 1 && <><span className='font-medium'>{translations.biggest}  </span> {translations.biggest_desc} </>}
                                    {index === 2 && <><span className='font-medium'>{translations.used}  </span> {translations.used_desc} </>}
                                    {index === 3 && <><span className='font-medium'>{translations.receiving}  </span>{translations.receiving_desc} </>}
                                </p>
                            </motion.div>
                        ))}

                        <div className='flex flex-col mb:flex-row mt-8'>
                            <a target='_blank' href="https://www.youtube.com/watch?v=IiyJQRacsuE">
                                <motion.button
                                    className="flex flex-row mb-4 w-full mb:w-fit items-center text-sm text-white rounded-lg border border-white hover:bg-white/30 transition-all py-2 px-4 scaleIn"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    whiletap={{ scale: 0.95 }}
                                    transition={{ delay: 1.8, duration: 0.4 }}
                                >
                                    {translations.check_video}
                                </motion.button>
                            </a>

                            <Link href={`${ENVIRONMENT_URL}/${locale}/toptier-paid-for-it/form`} className='hover:scale-105 transition-all' >
                                <motion.button
                                    className="flex flex-row mb:ml-3 mb:-mt-0.5 items-center text-sm text-white rounded-md  bg-ttorange hover:bg-orange-700 transition-all py-1 px-4 min-h-[40px] scaleIn"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    whiletap={{ scale: 0.95 }}
                                    transition={{ delay: 1.8, duration: 0.4 }}
                                >
                                    {translations.cta}
                                    <motion.div
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaArrowRight className='ml-2' />
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </div>


                    </div>
                </motion.div>

                {/* Note */}
                <div className='mt-5 font-thin'>
                    <span className='font-light'>{translations.note_title}</span> {translations.note_desc}
                </div>
            </section>
        </motion.div>
    )
}

export default Submission