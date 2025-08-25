'use client';

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { track } from '@vercel/analytics'
import { ENVIRONMENT_URL } from '@/constants/global';

//icons
import ghostIcon from './assets/ghostIcon.svg'
import chartIcon from './assets/chartIcon.svg'
import loudIcon from './assets/loudIcon.svg'
import lineIcon from './assets/line.svg'
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa'
import finalImg from "./assets/finalImg.svg";

const AnimatedSection = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

function Steps({ translations, locale }) {
    return (
        <div className="relative flex flex-col items-center bg-gradient-to-br from-[#010101] to-[#412790] mb:mt-0 mb:pb-20 pb-6 -mt-[100px] pt-24 mb:py-24 overflow-hidden">
            <div className="mb:max-w-[2000px] w-full z-10">

                {/* Steps Title*/}
                <AnimatedSection>
                    <div className="mx-10 flex flex-col items-center">
                        <h3 className="text-center text-2xl mb:text-center mb:text-3xl font-black text-ttorange max-w-[500px] mb:mt-5 ">
                            {translations.titleTwo}
                        </h3>
                        <p className="text-white text-center text-lg mt-2"> {translations.descTwo} </p>
                    </div>
                </AnimatedSection>

                <section className='flex flex-col mb:flex-row w-full items-center justify-center mb:justify-evenly mt-10 mb:mt-20'>

                    {/* Show off your costume */}
                    <AnimatedSection>
                        <div className='flex flex-col items-center bg-[#271855] rounded-2xl p-10 max-w-[350px] '>
                            <Image src={ghostIcon} alt='ghost-icon' width={80} height={80} loading='lazy' />
                            <p className='text-ttorange text-center font-bold text-xl mt-5'>{translations.costumeTitle}</p>
                            <p className='text-white text-center mt-5' >{translations.costumeDesc}</p>
                            <p className='mt-10 text-ttorange font-bold text-xl' >1 {translations.costumeSubmission} =</p>
                            <p className='mt-3 text-ttorange font-bold text-base'>15,000 {translations.entries} <span className='text-white'> + </span>  3X {translations.costumeMultiplier}</p>
                            <p className='text-white text-center' >{translations.costumeAll}</p>

                            <Image src={lineIcon} alt='line' className='my-10' />

                            <p className=' text-ttorange font-bold text-lg' >{translations.subRequirements}</p>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-10 h-10 -mt-2' />
                                <p className='ml-3 text-white' > {translations.costumeReqOne}</p>
                            </div>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-7 h-7 -mt-1' />
                                <p className='ml-3 text-white text-base' > {translations.costumeReqTwo}</p>
                            </div>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-4 h-4 mt-1' />
                                <p className='ml-3 text-white text-base' > {translations.costumeReqThree}</p>
                            </div>

                            <a href={`${ENVIRONMENT_URL}/${locale}/halloween/form`} className='w-full'>
                                <button onClick={() => { track('Halloween - Clicked  Fill the Form') }} className='flex flex-row text-white bg-ttorange w-full items-center justify-center py-2.5 mt-10 mb:mt-16 rounded-lg hover:scale-110 hover:bg-orange-600 transition-all ' >
                                    {translations.ctaFill}
                                    <FaArrowRight className='text-white ml-3 ' />
                                </button>
                            </a>

                        </div>
                    </AnimatedSection>

                    {/* Purchase a TopTier Challenge Account */}
                    <AnimatedSection>
                        <div className='flex flex-col mt-16 mb:mt-0 items-center bg-[#271855] rounded-2xl p-10 max-w-[350px] '>
                            <Image src={chartIcon} alt='ghost-icon' width={100} height={100} loading='lazy' />
                            <p className='text-ttorange text-center font-bold text-xl mt-5'>{translations.challengeTitle}</p>
                            <p className='text-white text-center mt-5'>{translations.challengeDesc}</p>
                            <p className='mt-10 text-white font-semibold text-lg' >5K {translations.challengeAccount} = <span className='text-ttorange' > 500 {translations.entries} </span></p>
                            <p className='mt-1 text-white font-semibold text-lg' >10K {translations.challengeAccount} = <span className='text-ttorange' > 1,000 {translations.entries} </span></p>
                            <p className='mt-1 text-white font-semibold text-lg' >25K {translations.challengeAccount} = <span className='text-ttorange' > 2,500 {translations.entries} </span></p>
                            <p className='mt-1 text-white font-semibold text-lg' >50K {translations.challengeAccount} = <span className='text-ttorange' > 5,000 {translations.entries} </span></p>
                            <p className='mt-1 text-white font-semibold text-lg' >100K {translations.challengeAccount} = <span className='text-ttorange' > 10,000 {translations.entries} </span></p>
                            <p className='mt-1 text-white font-semibold text-lg' >200K {translations.challengeAccount} = <span className='text-ttorange' > 20,000 {translations.entries} </span></p>
                            <p className='mt-1 text-white font-semibold text-lg' >300K {translations.challengeAccount} = <span className='text-ttorange' > 30,000 {translations.entries} </span></p>
                            <Image src={lineIcon} alt='line' className='my-10' />

                            <p className=' text-ttorange font-bold text-lg' >{translations.subRequirements}</p>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-[26px] object-contain ' />
                                <p className='ml-3 text-white' > {translations.challengeReqOne}</p>
                            </div>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-[24px] object-contain mt-1' />
                                <p className='ml-3 text-white text-base' >{translations.challengeReqTwo}</p>
                            </div>

                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-[16px] object-contain mt-1' />
                                <p className='ml-3 text-white text-base' >{translations.challengeReqThree}</p>
                            </div>

                            <a href={`${ENVIRONMENT_URL}/${locale}/halloween/form`} className='w-full'>
                                <button onClick={() => { track('Halloween - Clicked  Fill the Form') }} className='flex flex-row text-white bg-ttorange w-full items-center justify-center py-2.5 mt-10 mb:mt-16 rounded-lg hover:scale-110 hover:bg-orange-600 transition-all ' >
                                    {translations.ctaFill}
                                    <FaArrowRight className='text-white ml-3 ' />
                                </button>
                            </a>
                        </div>
                    </AnimatedSection>

                    {/* Refer a Friend */}
                    <AnimatedSection>
                        <div className='flex flex-col mt-16 mb:mt-0 items-center bg-[#271855] rounded-2xl p-10 max-w-[350px] '>
                            <Image src={loudIcon} alt='ghost-icon' width={100} height={100} loading='lazy' />
                            <p className='text-ttorange text-center font-bold text-xl mt-8'>{translations.referTitle}</p>
                            <p className='text-white text-center mt-10'>{translations.referDesc}</p>
                            <p className='mt-10 text-ttorange font-bold text-xl' >1 {translations.referRefferal} =</p>
                            <p className='mt-3 text-ttorange font-semibold text-base'>5,000 <span className='text-white'>{translations.entries} </span> </p>

                            <Image src={lineIcon} alt='line' className='my-10' />

                            <p className=' text-ttorange font-bold text-lg' >{translations.subRequirements}</p>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-6 h-6' />
                                <p className='ml-3 text-white'> {translations.referDescOne}</p>
                            </div>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-4 h-4' />
                                <p className='ml-3 text-white text-base' >  {translations.referDescTwo}</p>
                            </div>
                            <div className='flex flex-row items-start mt-4'>
                                <FaCheckCircle className='text-ttorange w-7 h-7' />
                                <p className='ml-3 text-white text-base' >  {translations.referDescThree}</p>
                            </div>


                            <a href={`https://app.toptiertrader.com/affiliate-program`} className='w-full'>
                                <button onClick={() => { track('Halloween - Clicked Become an Affiliate Now') }} className='flex flex-row text-white bg-ttorange w-full items-center justify-center py-2.5 mt-10 mb:mt-44 rounded-lg hover:scale-110 hover:bg-orange-600 transition-all ' >
                                    {translations.ctaBecome}
                                    <FaArrowRight className='text-white ml-3 ' />
                                </button>
                            </a>
                        </div>
                    </AnimatedSection>

                </section>

                {/* Final Rewards */}
                <AnimatedSection>
                    <div className="mb:mx-10  flex mt-20 flex-col items-center">
                        <h3 className="text-center text-2xl mb:text-center mb:text-3xl font-black text-ttorange mb:max-w-[500px] mb:mt-5 ">
                            {translations.participantsTitle}
                        </h3>
                        <div className='flex flex-col text-center mb:text-left mb:flex-row w-full justify-around px-8 mb:px-36 mb:mt-10 mt-5 ' >
                            <div className='mb:w-[400px] text-white '>
                                {translations.participantsDescOne}
                                <br /> <br /> <span className='font-semibold'>{translations.participantsDescTwo}</span>
                            </div>

                            <div className='mb:w-[500px] text-white text-xl mt-10 mb:mt-0 mb-20 mb:mb-10 '>
                                <p>{translations.participantsFirst} <span className='text-ttorange font-semibold' > 100K {translations.participantsFully} </span></p>
                                <p className='mt-5' >{translations.participantsSecond}: <span className='text-ttorange font-semibold' > 50K {translations.participantsFully} </span></p>
                                <p className='mt-5' >{translations.participantsThird} <span className='text-ttorange font-semibold' > 25K {translations.participantsFully} </span></p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none">
                <Image src={finalImg} alt="Final image" layout="responsive" />
            </div>
        </div>
    )
}

export default Steps