'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import { ENVIRONMENT_URL } from '@/constants/global';
import Image from 'next/image';

//Images
import desktopBg from "./assets/NewToTopTier/bg_desktop.webp"
import mobileBg from "./assets/NewToTopTier/bg_mobile.webp"
import discount from "./assets/NewToTopTier/discount.webp"

function NewToTopTier({ locale, translations }) {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const mainLang = locale.split('-')[0]

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundImage: `url(${currentBg.src})`,
    };
    
    return (
        <a href={`${ENVIRONMENT_URL}/new-to-toptier`}
        className='relative'
            target='_blank'
            onClick={() => { track('Banner - New to TopTier Trader?') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-col items-center justify-center w-full h-24 pl-3 -mb-1 overflow-hidden text-white shadow-2xl cursor-pointer md:gap-8 md:flex-row mb:mb-0 rounded-t-2xl mb:pl-0 mb:h-20 re" style={bgImageStyle}
                >

                    <p className='py-1 absolute md:relative grid place-items-center w-[300px] bg-[#FF532D] -rotate-[40deg] md:-rotate-[25deg] md:-ml-32 scale-75 -left-28 top-5 md:top-0 md:left-0 md:scale-100'>{translations.p4}</p>

                    <span className='flex items-center gap-1 -ml-12 md:gap-0 md:text-2xl md:flex-col md:-ml-16'>
                        <p>{translations.p1}</p>
                        <p className='md:-mt-1'>{translations.p2}</p>
                    </span>

                    <span className='flex flex-col items-center -ml-12 md:ml-0'>
                        <Image alt='discount' src={discount} className='w-full max-w-[212px] md:max-w-[282px]'/>
                        <p className='px-2 border border-[#45D1FF] rounded-lg -mt-4 bg-gradient-to-r from-[#0052B4]/50 to-[#45D1FF]/50 backdrop-blur-sm uppercase scale-75'>{translations.p3}</p>
                    </span>

                    <p className={`px-4 py-2 border border-[#45D1FF] rounded-md bg-gradient-to-r from-[#0052B4]/50 to-[#45D1FF]/50 backdrop-blur-sm absolute md:relative scale-50 md:scale-100 ${mainLang === 'es' ? '-right-2' : 'right-2'} top-4 md:top-0 md:right-0`}>{translations.CTA}</p>

                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default NewToTopTier;
