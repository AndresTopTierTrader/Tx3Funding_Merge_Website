'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";
import { SectionLayout } from "@/components/common/SectionLayout";
import bg from './assets/bg.webp'
import bgMobile from './assets/bgMobile.webp'
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"


export function Hero({ translations }) {

    const [currentImage, setCurrentImage] = useState(bg);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 828) {
                setCurrentImage(bgMobile);
            } else {
                setCurrentImage(bg);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = () => {
        const element = document.getElementById('sameSecrets');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // 'start', 'center', 'end', 'nearest'
            });
        }
    }

    return (
        <SectionLayout style={{ backgroundImage: `url(${currentImage.src})` }} padding className={'md:min-h-[700px] flex items-center'} >
            <div className="max-w-3xl flex flex-col text-center items-center md:text-start md:items-start gap-8 pt-36 md:pt-0">
                <motion.h1 {...animationSteps} className="text-3xl md:text-6xl text-white text-balance font-light">{translations.h1_title_1} <br /> <span className="font-medium text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-[#0052B4] to-[#45D1FF]">{translations.h1_title_2}</span></motion.h1>

                <motion.p {...animationSteps} className="md:text-xl max-w-xl">{translations.p1}</motion.p>

                <motion.button {...animationSteps} onClick={handleScroll} className="text-white bg-ttorange px-4 py-2 rounded-md transition-colors hover:bg-orange-500 flex items-center justify-center gap-2 group">
                    {translations.CTA}
                    <span className="transition-all group-hover:translate-x-1">
                        <FaArrowRight />
                    </span>
                </motion.button>
            </div>
        </SectionLayout>
    )
}