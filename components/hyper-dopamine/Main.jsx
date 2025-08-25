'use client'

//Functions & Hooks
import { useEffect, useState } from 'react'
import decorationBgImg from "./assets/decorationBg.svg"
import Image from 'next/image'
import CtaButton from '@/components/common/Buttons/CtaButton';
import { FaArrowRight } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

//Images
import cueBanksPhoto from './assets/cueBanksPhoto.png'

//Pop Up Image
import popUpImageEn from './assets/popUpImageEn.png'
import popUpImageEs from './assets/popUpImageEs.png'

const bgImageStyle = {
    backgroundColor: 'hsla(219,45%,7%,1)',
    backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `
}

function Main({ translations, locale }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const mainLang = locale.split('-')[0]
    const [currentPopUpImage, setCurrentPopUpImage] = useState(popUpImageEn)

    useEffect(() => {
        if (mainLang === "es" ){
            setCurrentPopUpImage(popUpImageEs)
        } else {
            setCurrentPopUpImage(popUpImageEn)
        }
    }, [mainLang])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    
    // Staggered children animation for text elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <main style={bgImageStyle} className="flex flex-col items-center mb:mt-0 mb:pb-0 mb:pt-20 pt-32">
            {/* Decoration Background Image */}
            <div className="flex flex-col items-center">
                <Image src={decorationBgImg} priority alt="decoration_bg" className="absolute w-[1000px] -top-32 mb:-top-40 z-0" />
            </div>

            <div className="flex flex-col mb:flex-row items-center">

                {/* Text Part */}
                <motion.div 
                    className="flex relative flex-col items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="flex flex-col items-start px-6 mb:px-0 justify-evenly w-full">
                        <motion.h1 
                            className="text-center mb:text-start text-4xl mb:text-6xl font-light text-white"
                            variants={containerVariants}
                        >
                            <motion.div variants={textVariants}>{translations.titleOne}</motion.div>
                            <motion.div variants={textVariants}>{translations.titleTwo}</motion.div>
                            <motion.div variants={textVariants}>{translations.titleThree}</motion.div>
                        </motion.h1>

                        <motion.div variants={textVariants}>
                            <Image src={cueBanksPhoto} alt="Cue Banks" className="block mb:hidden w-[300px] mb:w-[500px] -mb-10 mt-10 object-contain" />
                        </motion.div>

                        <motion.div 
                            className="flex mb:flex-row w-full flex-col items-center px-12 mb:px-0 my-10"
                            variants={textVariants}
                        >
                            <motion.button 
                                onClick={openModal}
                                className="flex flex-row w-full  text-sm justify-center items-center bg-[#0052B4] py-2 rounded-lg px-6 text-white hover:bg-[#0045a0] transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {translations.cta_cue}
                                <FaArrowRight className="ml-2 w-3 h-3" />
                            </motion.button>
                            <div className="w-full flex  flex-col items-center">
                                <CtaButton
                                    utm="https://app.toptiertrader.com/buy-challenge/?el=ProductsPageCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                                    page="Products Page"
                                    section="Landing Section"
                                    translation={translations.ctaButton} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Cue Photo */}
                <div>
                    <Image src={cueBanksPhoto} alt="Cue Banks" className="hidden mb:block w-[300px] mb:w-[500px] object-contain" />
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.a 
                    href="https://app.toptiertrader.com/buy-challenge/?el=ProductsPageCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div 
                            className="relative max-w-full max-h-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="absolute right-2 top-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors duration-300 z-10"
                                onClick={closeModal}
                            >
                                <FaTimes />
                            </button>
                            <div className="relative">
                                <Image 
                                    src={currentPopUpImage}
                                    alt="Popup content"
                                    className="rounded-lg shadow-xl max-h-[80vh] w-auto"
                                />
                            </div>
                        </motion.div>
                    </motion.a>
                )}
            </AnimatePresence>

            <div className="bg-gradient-to-b from-transparent to-[#0B111D] -mt-20 mb:-mt-32 z-0  h-32 w-full fadeInUp">
            </div>
        </main>
    )
}

export default Main