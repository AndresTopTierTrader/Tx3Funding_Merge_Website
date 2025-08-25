'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';

//Images
import desktopBg from './assets/Challenge2K5Latam/desktop_bg.webp'
import mobileBg from './assets/Challenge2K5Latam/mobile_bg.webp'
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';


//Images 
import desktopEs from './assets/Challenge2K5Latam/desktop_es.svg'
import mobileEs from './assets/Challenge2K5Latam/mobile_es.svg'


function Challenge2K5Latam() {
    const {width} = useWindowDimensions()
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundImage: `url(${currentBg.src})`,
    };

    return (
        <a href={`https://app.toptiertrader.com/buy-challenge/?el=Challenge2K5Latam_WebsiteBanner&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=d9459695-66f7-41ea-a123-ed206d0f4a78&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=NEW200K`}
            onClick={() => { track('Banner - 2.5K Challenge LATAM') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center justify-start w-full h-24 pl-3 -mb-1 shadow-2xl cursor-pointer mb:mb-0 rounded-t-2xl mb:pl-0 mb:justify-center mb:h-20 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="flex flex-row items-center w-full md:hidden ">

                        <section className='flex flex-col items-center mt-1 -ml-3' >

                          <Image src={ mobileEs } alt="decoration" width={350} height={100} className='object-contain ml-5' />

                        </section>

                    </div>

                    {/* Desktop */}
                    <div className="relative items-center hidden md:flex md:flex-row ">

                        <Image src={ desktopEs } alt="decoration" width={940} height={130} className='object-contain ' />
                      
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default Challenge2K5Latam;