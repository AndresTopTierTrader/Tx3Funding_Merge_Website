'use client'

import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';
import { ENVIRONMENT_URL } from '@/constants/global';


//Images
import desktopBg from './assets/LevelsPromo/LevelsDk.svg'
import mobileBg from './assets/LevelsPromo/LevelsMb.svg'

//Desktop Images
import levelsLogoImg from './assets/LevelsPromo/levelsLogo.svg'



function LevelsPromo({ locale, translations }) {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const mainLang = locale.split('-')[0]

    const bgImageStyle = {
        background: "rgb(229,249,253)",
        backgroundImage: `url(${currentBg.src})`,
        backgroundPosition: "center",

    };
    return (
        <a href={`${ENVIRONMENT_URL}/levels"`}
            onClick={() => { track('Banner - Levels Promo') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer shadow-2xl -mb-1 mb:mb-0 fixed bottom-0 left-0 right-0 rounded-t-2xl flex flex-row justify-start pl-3 mb:pl-0 mb:justify-center items-center w-full h-24 mb:h-20  z-30 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="mb:hidden flex flex-row -mt-2">

                        <section>
                            {/* First Row */}
                            <div className='flex flex-col items-start'>
                                <Image src={levelsLogoImg} alt='mb-title' width={'auto'} height={'auto'} className='w-28  my-1' />
                                <div>
                                    <p className='text-white text-sm font-light'> {mainLang == 'es' ? 'Las Reglas del Juego Estan a Punto de' : 'The Rules of the Game are About to'}<span className=' bg-gradient-to-r font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'> &nbsp;{mainLang == 'es' ? 'Cambiar' : 'Change'}</span> </p>

                                </div>
                            </div>

                        </section>


                    </div>

                    {/* Desktop */}
                    <div className="hidden mb:flex mb:flex-row mb:justify-between items-center ">

                        <div className='flex flex-col'>
                            <p className='text-white text-lg font-light'> {mainLang == 'es' ? 'Las Reglas del Juego' : 'The Rules of the Game'} </p>
                            <p className='text-white text-lg -mt-2  font-light'> {mainLang == 'es' ? 'Están a Punto de' : 'Are About to'} <span className=' bg-gradient-to-r font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'> {mainLang == 'es' ? 'Cambiar' : 'Change'} </span></p>
                        </div>

                        <Image src={levelsLogoImg} alt='dk-title' width={'auto'} height={'auto'} className='w-44 ml-10 mr-1' />


                    </div>

                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default LevelsPromo;
