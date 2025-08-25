'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

import { SectionLayout } from "@/components/common/SectionLayout";
import bg from './assets/revealBg.webp'
import CtaButton from "@/components/common/Buttons/CtaButton";
import { FaArrowRight } from "react-icons/fa"


export function Hero({ translations }) {

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
        <SectionLayout style={{ backgroundImage: `url(${bg.src})` }} padding className={'md:min-h-[700px]'} >
            <div className="max-w-3xl flex flex-col text-center items-center justify-center md:text-start md:items-start gap-6 pt-12">
                <motion.h1 {...animationSteps} className="text-3xl md:text-6xl text-white text-balance flex flex-col gap-2 font-light">{translations.h1_title_1}<span className="font-semibold text-5xl md:text-9xl">{translations.h1_title_2}</span> <span className="font-semibold text-5xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-ttblue to-ttelectricBlue">{translations.h1_title_3}</span> {translations.h1_title_4}</motion.h1>

                <motion.button {...animationSteps} onClick={handleScroll} className="text-white bg-ttorange px-4 py-2 rounded-md transition-colors hover:bg-orange-500 flex items-center justify-center gap-2 group">
                    How Can I Do IT Myself
                    <span className="transition-all group-hover:translate-x-1">
                        <FaArrowRight />
                    </span>
                </motion.button>
            </div>
        </SectionLayout>
    )
}