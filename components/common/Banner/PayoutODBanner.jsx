'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';



//Images
import desktopBg from './assets/PayoutODBanner/bg_desktop.webp'
import mobileBg from './assets/PayoutODBanner/bg_mobile.webp'
import decoration_img from './assets/PayoutODBanner/decoration_img.png'
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';


function PayoutODBanner({ locale, translations }) {
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
        <a href={`https://app.toptiertrader.com/buy-challenge/?el=PayoutOnDemand_WebsiteBanner&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss`}
            onClick={() => { track('Banner - Payout on Demand') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-30 flex flex-row items-center justify-start w-full h-24 pl-3 -mb-1 shadow-2xl cursor-pointer mb:mb-0 rounded-t-2xl mb:pl-0 mb:justify-center mb:h-20 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="flex flex-row items-center w-full -mt-1 -ml-3 mb:hidden">

                        <Image src={decoration_img} alt="box" loading='lazy' width={300} height={200} className='absolute mt-4 -right-32' />


                        <div className='flex flex-col items-start ml-4'>
                            <p className='text-xs  bg-gradient-to-b font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? "I N T R O D U C I E N D O" : "I N T R O D U C I N G"} </p>

                            <p className='z-50 flex flex-row items-end -mt-1 text-xl font-medium text-white'>
                                Payout On Demand
                            </p>

                            <div className='flex flex-col items-start mt-1'>
                                <p className='z-50 flex flex-row items-end text-xs text-white -mt -1 font-regular'>
                                    {mainLang == 'es' ? "Solicita tu Payout" : "Request Your Payout"}
                                    <span className='-mt-1 bg-gradient-to-b font-medium from-[#45D1FF] to-[#167BCC] inline-block text-transparent ml-1 bg-clip-text'> {mainLang == 'es' ? "Cuando Quieras" : "When You Want It"} </span>
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* Desktop */}
                    <div className="items-center hidden mb:flex mb:flex-row ">

                        <div className='flex flex-col items-center'>
                            <p className='text-xl  bg-gradient-to-b font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? "I N T R O D U C I E N D O" : "I N T R O D U C I N G"} </p>

                            <p className='z-50 flex flex-row items-end text-3xl font-medium text-white -mt -1'>
                                Payout On Demand
                            </p>
                        </div>

                        <Image src={decoration_img} alt="box" width={300} height={200} loading='lazy' className='ml-10 ' />


                        <div className='flex flex-col items-start -ml-20'>
                            <p className='z-50 flex flex-row items-end text-lg text-white -mt -1 font-regular'>
                                {mainLang == 'es' ? "Solicita tu Payout" : "Request Your Payout"}
                            </p>
                            <p className='text-lg -mt-1 bg-gradient-to-b font-medium from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? "Cuando Quieras" : "When You Want It"} </p>
                        </div>

                        <div className='flex flex-col items-center ml-16 '>

                            <div className='px-5 py-2 rounded-lg bg-ttorange '>
                                <p className='text-base text-white text-semibold'>{mainLang == 'es' ? "FONDÉATE AHORA" : "GET FUNDED NOW"} </p>
                            </div>
                            <p className='z-50 flex flex-row items-end mt-1 text-xs italic text-white font-regular'>
                                {mainLang == 'es' ? "Disponible en Challenges de 2 Fases" : "Avalible on 2 Phase Challenges"}
                            </p>
                        </div>




                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default PayoutODBanner;
