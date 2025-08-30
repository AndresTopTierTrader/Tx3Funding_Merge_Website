'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';

//Images
import desktopBg from './assets/ProfitSplitFlash/bg_desktop.webp'
import mobileBg from './assets/ProfitSplitFlash/bg_mobile.webp'
import percent12 from './assets/ProfitSplitFlash/12percent.webp'
import percent100 from './assets/ProfitSplitFlash/100percent.webp'
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';

function ProfitSplitFlash({ locale }) {
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

    const translations = {
        p1: mainLang === 'es' ? 'En tu primer payout en la cuenta.' : 'For your first payout on the account.',
        p2: mainLang === 'es' ? 'CÓDIGO:' : 'CODE:',
        p3: mainLang === 'es' ? 'Máximo 2 compras' : 'Max Purchases:',
        p4: mainLang === 'es' ? 'por usuario' : '2 per user',
        p5: mainLang === 'es' ? 'VÁLIDO HASTA' : 'valid until',
        p6: mainLang === 'es' ? 'JUNIO 19' : 'JUNE 19TH',
    }

    return (
        <a href={`https://app.toptiertrader.com/buy-challenge/?el=ProfitSplitFlashPromo_Banner&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=KEEP100`}
            target='_blank'
            onClick={() => { track('Banner - Profit Split Flash') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-center w-full h-24 -mb-1 text-textPrimary shadow-2xl cursor-pointer md:pl-4 md:gap-8 md:flex-row mb:mb-0 rounded-t-2xl mb:pl-0 mb:h-20" style={bgImageStyle}
                >

                    {/* DESKTOP */}
                    <picture className='items-center hidden gap-4 md:flex'>
                        <Image src={percent12} alt='twelve percent' className='w-full max-w-[220px]' />
                        <Image src={percent100} alt='twelve percent' className='w-full max-w-[200px]' />
                    </picture>

                    <span className='flex-col items-center hidden italic md:flex text-nowrap'>
                        <h4 className='text-2xl italic font-bold md:text-4xl border-dashed border-b border-[#45D1FF]'>PROFIT SPLIT</h4>
                        <p className='font-light'>{translations.p1}</p>
                    </span>

                    <span className='flex-col items-center hidden gap-2 md:flex'>
                        <p className='text-lg italic font-light md:text-2xl px-4 py-1 border border-[#45D1FF] text-nowrap'>{translations.p2} <strong className='text-[#45D1FF] font-bold'>KEEP100</strong></p>
                        <small className='font-semibold tracking-widest uppercase text-nowrap'>{translations.p3} <span className='text-[#45D1FF]'>{translations.p4}</span></small>
                    </span>

                    <div className='uppercase aspect-square rounded-full md:grid place-items-center w-[80px] h-[80px] bg-gradient-to-br from-[#45D1FF] to-[#0052B4] rotate-6 text-center md:scale-90 scale-75 hidden'>
                        <p className='leading-none scale-90'>{translations.p5} <strong>{translations.p6}</strong></p>
                    </div>

                    {/* MOBILE */}

                    <span className='flex flex-col items-center -ml-8 scale-75 md:hidden'>
                        <Image src={percent12} alt='twelve percent' className='w-full max-w-[100px]' />
                        <div className='flex items-center'>
                            <Image src={percent100} alt='twelve percent' className='w-full max-w-[164px]' />
                            <h4 className='text-2xl italic font-bold md:text-4xl'>PROFIT <br /> SPLIT</h4>
                        </div>
                        <p className='font-light text-center text-nowrap'>{translations.p1}</p>
                    </span>

                    <span className='flex flex-col items-center -ml-4 text-center md:hidden'>
                        <p className='text-sm italic font-light md:text-2xl px-4 py-1 border border-[#45D1FF] text-nowrap'>{translations.p2} <strong className='text-[#45D1FF] font-bold'>KEEP100</strong></p>

                        <small className='text-xs font-semibold tracking-widest uppercase scale-75'>{translations.p3} <br /> <span className='text-[#45D1FF]'>{translations.p4}</span></small>

                        <small className='text-xs font-light uppercase scale-75 text-nowrap'>{translations.p5} <strong className='font-bold'>{translations.p6}</strong></small>
                    </span>

                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default ProfitSplitFlash;
