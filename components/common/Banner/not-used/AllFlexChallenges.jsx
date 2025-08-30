'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';

//Images
import desktopBg from './assets/AllFlexChallenges/bg_desktop.webp'
import mobileBg from './assets/AllFlexChallenges/bg_mobile.webp'
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';

function AllFlexChallenges({ locale }) {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);
    const mainLang = locale.split('-')[0]

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundImage: `url(${currentBg.src})`,
    };

    const translations = {
        p1: mainLang === 'es' ? 'Flex Y ONE PHASe Challenges' : 'Flex AND ONE PHASe Challenges',
        p3: mainLang === 'es' ? 'VÁLIDO HASTA' : 'valid until',
        p4: mainLang === 'es' ? 'JUNIO 30' : 'JUNE 30TH',
        p5: mainLang === 'es' ? 'CÓDIGO:' : 'CODE:',
    }

    return (
        <a href={`https://app.toptiertrader.com/buy-challenge/?el=AllFlexChallengesPromo_Banner&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=SUMMER35`}
            target='_blank'
            onClick={() => { track('Banner - All Flex Challenges') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center w-full h-24 gap-2 pl-3 -mb-1 text-textPrimary shadow-2xl cursor-pointer md:justify-center md:items-cente md:gap-8 mb:mb-0 rounded-t-2xl mb:pl-0 mb:h-20" style={bgImageStyle}
                >
                    <div className='flex items-center gap-4 px-1 md:px-4 py-1 rounded-md text-nowrap border border-[#45D1FF] bg-gradient-to-br from-[#0B111D] to-[#45D1FF]/0 justify-between max-w-[150px] md:max-w-full'>
                        <span className='flex flex-col items-center w-full text-center'>
                            <strong className='text-2xl font-bold md:text-3xl'>35% OFF</strong>
                            <p className='text-xs font-semibold uppercase scale-50 md:scale-90'>{translations.p1}</p>

                            <span className='px-1 rounded-md uppercase bg-gradient-to-r from-[#675042] to-[#3082A1] md:hidden -mb-3 scale-75'>
                                {translations.p5} <strong>SUMMER35</strong>
                            </span>
                        </span>

                        <div className='uppercase aspect-square rounded-full items-center justify-center w-[80px] h-[80px] bg-gradient-to-br from-[#635449] to-[#3F7486] rotate-6 text-center md:scale-100 scale-75 -my-20 z-10 border border-[#588692] hidden md:flex'>
                            <p className='flex flex-col items-center justify-center leading-none scale-75'>{translations.p5} <strong>SUMMER35</strong></p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 px-1 md:px-4 py-1 rounded-md text-nowrap border border-[#45D1FF] bg-gradient-to-br from-[#0B111D] to-[#45D1FF]/0 justify-center max-w-[150px] md:max-w-full'>
                        <span className='flex flex-col items-center text-center'>
                            <strong className='text-2xl font-bold md:text-3xl'>20% OFF</strong>
                            <p className='text-xs font-semibold uppercase scale-50 md:scale-90'>PRO Challenges</p>
                            <span className='px-1 rounded-md uppercase bg-gradient-to-r from-[#675042] to-[#3082A1] md:hidden -mb-3 scale-75'>
                                {translations.p5} <strong>SUMMER20</strong>
                            </span>
                        </span>

                        <div className='uppercase aspect-square rounded-full items-center justify-center w-[80px] h-[80px] bg-gradient-to-br from-[#635449] to-[#3F7486] rotate-6 text-center md:scale-100 scale-75 -my-20 z-10 border border-[#588692] hidden md:flex'>
                            <p className='flex flex-col items-center justify-center leading-none scale-75'>{translations.p5} <strong>SUMMER20</strong></p>
                        </div>
                    </div>

                    <span className='hidden text-sm font-medium leading-tight text-center uppercase md:block'>
                        <p>{translations.p3} <br /> {translations.p4}</p>
                    </span>

                    <div className='uppercase aspect-square absolute -top-1 -right-2 rounded-full grid place-items-center w-[80px] h-[80px] bg-gradient-to-br from-[#635449] to-[#3F7486] rotate-6 text-center md:scale-90 scale-75 md:hidden'>
                        <p className='leading-none scale-90'>{translations.p3} <strong>{translations.p4}</strong></p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default AllFlexChallenges;
