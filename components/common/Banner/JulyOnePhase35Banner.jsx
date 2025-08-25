'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';

//Images
import desktopBg from './assets/JulyOnePhase35Banner/desktopBg.webp'
import mobileBg from './assets/JulyOnePhase35Banner/mobileBg.webp'


//Images 
import desktopEn from './assets/JulyOnePhase35Banner/desktopEn.svg'
import desktopEs from './assets/JulyOnePhase35Banner/desktopEs.svg'
import mobileEn from './assets/JulyOnePhase35Banner/mobileEn.svg'
import mobileEs from './assets/JulyOnePhase35Banner/mobileEs.svg'


function JulyOnePhase35Banner({ locale }) {
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
        <a href={`https://app.toptiertrader.com/buy-challenge/?el=ONEPHASE35_WebsiteBanner&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=a4ef64e7-ebd8-4b33-b538-c03c9ebfad61&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=ONEPHASE35`}
            onClick={() => { track('Banner - One Phase Challenge 35OFF - ONEPHASE35') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center justify-start w-full h-24 pl-3 -mb-1 shadow-2xl cursor-pointer mb:mb-0 rounded-t-2xl mb:pl-0 mb:justify-center mb:h-20 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="flex flex-row items-center w-full mb:hidden ">

                        <section className='flex flex-col items-center mt-1 -ml-3' >

                          <Image src={mainLang == 'es' ? mobileEs : mobileEn} alt="decoration" width={350} height={100} className='object-contain ml-5' />

                        </section>

                    </div>

                    {/* Desktop */}
                    <div className="relative items-center hidden mb:flex mb:flex-row ">

                        <Image src={mainLang == 'es'? desktopEs : desktopEn } alt="decoration" width={1250} height={120} className='object-contain ' />
                      
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default JulyOnePhase35Banner;
