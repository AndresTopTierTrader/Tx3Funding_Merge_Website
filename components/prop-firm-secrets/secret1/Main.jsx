'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";
import { SectionLayout } from "@/components/common/SectionLayout";

export function Secret1({ translations }) {

    const cards = [
        {
            title: translations.st_1,
            desc: translations.p3
        },
        {
            title: translations.st_2,
            desc: translations.p4
        },
        {
            title: translations.st_3,
            desc: translations.p3
        },
    ]

    return (
        <SectionLayout padding className={'flex flex-col items-center gap-12 md:gap-20'}>
            <div className="text-center flex flex-col items-center gap-6">
                <motion.p {...animationSteps} className="px-4 py-2 rounded-md text-[#0B111D] font-bold bg-[#45D1FF]">{translations.secret_1}</motion.p>
                <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl font-light">{translations.t1}</motion.h2>
                <motion.p {...animationSteps} className="max-w-xl">{translations.p2}</motion.p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
                {
                    cards.map(({ title, desc }, index) => (
                        <li key={title} className="rounded-xl border border-[#717892] p-6 flex flex-col gap-4 md:gap-8 bg-gradient-to-br from-[#717892]/10 to-[#717892]/0">
                            <motion.strong {...animationSteps} className="font-bold text-3xl md:text-4xl text-transparent bg-gradient-to-br bg-clip-text from-[#0052B4] to-[#45D1FF]">{index + 1}</motion.strong>
                            <motion.h6 {...animationSteps} className="text-white">{title}</motion.h6>
                            <motion.p {...animationSteps}>{desc}</motion.p>
                        </li>
                    ))
                }
            </ul>

            <motion.h4 {...animationSteps} className="text-white font-extralight max-w-3xl italic text-2xl md:text-4xl text-center">{translations.quote_1_1} <span className="text-[#45D1FF]">{translations.quote_1_2}</span> {translations.quote_1_3}</motion.h4>
        </SectionLayout>
    )
}