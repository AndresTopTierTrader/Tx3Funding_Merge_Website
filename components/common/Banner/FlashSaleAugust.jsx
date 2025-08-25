'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';

//Images
import desktopBg from './assets/FlashSaleAugust/desktop_bg.webp'
import mobileBg from './assets/FlashSaleAugust/mobile_bg.webp'
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';


//PNG Images 
import desktopEn from './assets/FlashSaleAugust/desktop_en.png'
import desktopEs from './assets/FlashSaleAugust/desktop_es.png'
import mobileEn from './assets/FlashSaleAugust/mobile_en.png'
import mobileEs from './assets/FlashSaleAugust/mobile_es.png'


function FlashSaleAugust({ locale }) {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const mainLang = locale.split('-')[0]

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${currentBg.src})`,
    };
    return (
        <a href={`https://app.toptiertrader.com/buy-challenge/?el=FlashSaleAugust_WebsiteBanner&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=FASTFUNDING25`}
            onClick={() => { track('Banner - All Challenges - FASTFUNDING25') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center justify-start w-full h-[80px] pl-3 -mb-1 shadow-2xl cursor-pointer mb:mb-0 rounded-t-2xl mb:pl-0 mb:justify-center mb:h-[80px] " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="flex flex-row items-center w-full h-full mb:hidden ">

                        <section className='flex flex-col items-center justify-center w-full h-full mt-1 -ml-3' >

                          <Image src={mainLang == 'es' ? mobileEs : mobileEn} alt="decoration" width={350} height={100} className='object-contain ml-5' style={{width: 'auto', height: '100%'}} />

                        </section>

                    </div>

                    {/* Desktop */}
                    <div className="relative items-center justify-center w-full h-full hidden mb:flex mb:flex-row ">

                        <Image src={mainLang == 'es'? desktopEs : desktopEn } alt="decoration" width={1080} height={120} className='object-contain' style={{width: 'auto', height: '100%'}} />
                      
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default FlashSaleAugust;