'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';
import logo from './assets/MarketMemo/logo.svg'



//Images
import desktopBg from './assets/MarketMemo/bg_desktop.png'
import mobileBg from './assets/MarketMemo/bg_mobile.png'
import decoration_img from './assets/MarketMemo/decoration_img.png'



function MarketMemo({ locale, translations }) {
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
        <a href="https://app.marketmemo.com/select-plan"
            target='_blank'
            onClick={() => { track('Banner - Market Memo') }}>
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

                        <div className='flex flex-col items-start ml-2 min-w-[250px] '>
                            <section className='flex text-lg flex-row items-start'>
                                <p className='text-white  font-medium flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "Obtén tu Primer Mes " : "Get Your 1st Month "}
                                </p>


                            </section>

                            <section className='flex text-lg -mt-2 flex-row items-start'>

                                <span className=' bg-gradient-to-br font-semibold from-[#0DA2A2] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? "GRATIS" : "FREE"} </span>

                                <p className='text-white ml-2 font-medium flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "Y " : "And"}
                                </p>

                                <span className='ml-2 bg-gradient-to-br font-semibold from-[#0DA2A2] to-[#167BCC] inline-block text-transparent bg-clip-text'> 20% OFF </span>
                            </section>


                            <section className='flex text-lg -mt-2 flex-row items-start'>

                                <p className='text-white  font-medium flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "de Market Memo" : "of Market Memo"}
                                </p>

                                <br />
                            </section>

                            <p className='text-white text-[10px] ml-0  font-light flex flex-row items-end z-50'>
                                {mainLang == 'es' ? "de Por Vida con la compra de Cualquier Challenge" : "for Life with the Purchase of Any Challenge"}
                            </p>


                        </div>



                        <div className='flex flex-col -ml-6 items-center  '>

                            <div className='bg-gradient-to-b from-[#1270E0] to-[#0DA2A2] px-3 py-2 rounded-lg mt-1 border border-[#0DA2A2]'>
                                <p className='text-xs text-white text-light'> {mainLang == 'es' ? "Obtén un Mes GRATIS Hoy" : "Get 1 Month FREE Now"}</p>
                            </div>
                            <Image src={logo} alt="logo" className=' mt-1  h-auto object-cover ' />
                        </div>

                    </div>

                    {/* Desktop */}
                    <div className="hidden mb:flex mb:flex-row  items-center ">

                        <div className='flex flex-col items-center -ml-8'>
                            <section className='flex text-xl flex-row items-start'>
                                <p className='text-white  font-medium flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "Obtén tu Primer Mes " : "Get Your 1st Month "}
                                </p>

                                <span className='ml-2 bg-gradient-to-br font-semibold from-[#0DA2A2] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? "GRATIS" : "FREE"} </span>

                                <p className='text-white ml-2  font-medium flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "Y " : "And"}
                                </p>

                                <span className='ml-2 bg-gradient-to-br font-semibold from-[#0DA2A2] to-[#167BCC] inline-block text-transparent bg-clip-text'> 20% OFF </span>


                                <p className='text-white ml-2  font-medium flex flex-row items-end z-50'>
                                    {mainLang == 'es' ? "de Market Memo" : "of Market Memo"}
                                </p>

                                <br />


                            </section>

                            <p className='text-white text-xl ml-2  font-medium flex flex-row items-end z-50'>
                                {mainLang == 'es' ? "de Por Vida con la compra de Cualquier Challenge" : "for Life with the Purchase of Any Challenge"}
                            </p>
                        </div>

                        <Image src={decoration_img} alt="decoration_img" className='hidden mb:block ml-8  h-auto object-cover ' />


                        <div className='flex flex-col items-center ml-8'>

                            <div className='bg-gradient-to-b from-[#1270E0] to-[#0DA2A2] px-5 py-1 rounded-lg mt-1 border border-[#0DA2A2]'>
                                <p className='text-lg text-white text-light'> {mainLang == 'es' ? "Obtén un Mes GRATIS Hoy" : "Get 1 Month FREE Now"}</p>
                            </div>
                            <Image src={logo} alt="logo" className='hidden mb:block mt-1  h-auto object-cover ' />
                        </div>




                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default MarketMemo;
