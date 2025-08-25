'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

import { SectionLayout } from "@/components/common/SectionLayout";
import cardBg from './assets/cardBg.webp'

export function Secret2({translations}) {

    const coins = [
        'EUR/USD',
        'GBP/USD',
        'US30 (Dow Jones)',
        'XAU/USD'
    ]

    return (
        <SectionLayout padding className={'flex flex-col items-center gap-12 md:gap-20'}>
            <div className="text-center flex flex-col items-center gap-6">
                <motion.p {...animationSteps} className="px-4 py-2 rounded-md text-[#0B111D] font-bold bg-[#45D1FF]">{translations.secret_2}</motion.p>
                <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl font-light">{translations.t2}</motion.h2>
                <motion.p {...animationSteps} className="max-w-xl">{translations.p6}</motion.p>
                <motion.ul {...animationSteps} className="flex justify-center items-center flex-wrap gap-4">
                    {
                        coins.map(coin => (
                            <li key={coin} className="px-4 py-1 bg-[#0B111D]/70 rounded-lg text-white font-bold border-2 border-[#45D1FF]">{coin}</li>
                        ))
                    }
                </motion.ul>
            </div>

            <div className="flex items-center flex-wrap justify-between gap-6 w-full max-w-4xl">
                <motion.span {...animationSteps} className="flex flex-col gap-4 text-white">
                    {translations.p7}
                    <h6 className="text-white font-extralight max-w-sm italic text-2xl md:text-3xl">{translations.quote_2_1} <span className="text-[#45D1FF]">{translations.quote_2_2}</span>.”</h6>
                </motion.span>

                <motion.span {...animationSteps} style={{backgroundImage: `url(${cardBg.src})`}} className="p-6 bg-opacity-40 rounded-xl border border-[#717892] max-w-sm gap-8 flex flex-col bg-cover bg-center">
                    <strong className="text-white">{translations.p8}</strong>

                    <p>{translations.p9}</p>
                </motion.span>
            </div>
        </SectionLayout>
    )
}