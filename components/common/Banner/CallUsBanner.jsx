'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import { ENVIRONMENT_URL } from '@/constants/global';
import Image from 'next/image';



//Images
import desktopBg from './assets/CallUs/bg_desktop.webp'
import mobileBg from './assets/CallUs/bg_mobile.webp'
import decoration_img from './assets/CallUs/decoration_img.png'



function CallUsBanner({ locale, translations }) {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const mainLang = locale.split('-')[0]

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundImage: `url(${currentBg.src})`,
    };
    return (
        <a href={`${ENVIRONMENT_URL}/${locale}/contact`}
            onClick={() => { track('Banner - Call Us') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer shadow-2xl -mb-1 mb:mb-0 fixed bottom-0 left-0 right-0 rounded-t-2xl flex flex-row justify-start pl-3 mb:pl-0 mb:justify-center items-center w-full h-24 mb:h-20  z-30 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="mb:hidden flex flex-row items-center w-full -ml-3 -mt-1">


                        <div className='flex flex-col items-start ml-8 mt-0'>
                            <p className='text-textPrimary font-medium text-2xl flex flex-row items-end z-50'>
                                {mainLang == 'es' ? "¿Dudas? Estamos para ayudarte" : "Doubts? We're here to help"}
                            </p>
                            <div className='bg-black/40 px-5 py-2 rounded-lg mt-1 border border-[#45D1FF]'>
                                <p className='text-sm text-textPrimary text-light'> <span className='font-semibold  text-slate-300'> {mainLang == 'es' ? "LLAMANOS YA: " : "CALL US NOW: "}</span> +1 (786) 957-8539 </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden mb:flex mb:flex-row  items-center ">

                        {/* No Cap, No Gimmicks, WERE RUNNING IT BACK */}
                        <div className='flex flex-col items-start -ml-16'>
                            <section className='flex flex-row items-start'>
                                <p className='text-textPrimary text-3xl font-light flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "¿Tienes preguntas sobre" : "Have a questions about"}
                                </p>
                            </section>
                            <p className='text-3xl  bg-gradient-to-b font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? "Comprar un challenge?" : "Purchasing a Challenge?"} </p>
                        </div>

                        <Image src={decoration_img} alt="box" width={200} height={90} className='ml-16 ' />

                        <div className='flex flex-col items-center ml-16 mt-2'>
                            <p className='text-textPrimary font-medium text-2xl flex flex-row items-end z-50'>
                                {mainLang == 'es' ? "Estamos para ayudarte" : "We're here to help"}
                            </p>
                            <div className='bg-black/40 px-5 py-2 rounded-lg mt-1 border border-[#45D1FF]'>
                                <p className='text-xs text-textPrimary text-light'> <span className='font-semibold  text-slate-300'> {mainLang == 'es' ? "LLAMANOS YA: " : "CALL US NOW: "}</span> +1 (786) 957-8539 </p>
                            </div>
                        </div>




                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default CallUsBanner;
