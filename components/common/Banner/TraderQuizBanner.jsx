'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import { ENVIRONMENT_URL } from '@/constants/global';
import Image from 'next/image';

//Images
import desktopBg from './assets/TraderQuiz/bg_desktop.webp'
import mobileBg from './assets/TraderQuiz/bg_mobile.webp'
import discount from './assets/TraderQuiz/discount.svg'
import CtaButton from '../Buttons/CtaButton';

function TraderQuizBanner({ locale, translations }) {
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
        <a href={`${ENVIRONMENT_URL}/trader-quiz/start`}
            target='_blank'
            onClick={() => { track('Banner - Trader Quiz') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-col justify-center w-full h-24 pl-3 -mb-1 text-white shadow-2xl cursor-pointer md:items-center md:gap-8 md:flex-row mb:mb-0 rounded-t-2xl mb:pl-0 mb:h-20" style={bgImageStyle}
                >
                    <span className='flex gap-1 md:gap-0 text-md md:text-2xl md:flex-col'>
                        <p>{translations.p1}</p>
                        <p className='md:-mt-2'>{translations.p2}</p>
                    </span>

                    <picture>
                        <Image alt='15% off discount' src={discount} className='w-full max-w-[232px] md:max-w-[344px]' />
                    </picture>

                    <span className='absolute right-0 scale-50 md:scale-100 top-4 md:top-0 md:relative px-4 py-2 rounded-lg bg-[#FF532D]'>
                        {translations.CTA}
                    </span>

                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default TraderQuizBanner;
