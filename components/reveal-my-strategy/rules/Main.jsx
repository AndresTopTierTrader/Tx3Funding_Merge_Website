'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

export function Rules({translations}) {

    const rules = [
        translations.p6,
        translations.p7,
        translations.p8,
        translations.p9,
    ]

    return (
        <SectionLayout padding className={'flex flex-col items-center'}>
            <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl mx-auto max-w-xl text-center font-light">{translations.t2}</motion.h2>

            <motion.ul {...animationSteps} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mt-8 md:mt-16 text-white">
                {
                    rules.map((rule, index) => (
                        <li key={rule} className="rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex flex-col gap-12 p-6">
                            <strong className="font-medium px-4 py-2 text-xl md:text-2xl w-full max-w-[100px] md:max-w-[144px] bg-gradient-to-r from-[#0052B4] to-[#45D1FF] rounded-md">{translations.rule} {index + 1}</strong>
                            {rule}
                        </li>
                    ))
                }
            </motion.ul>
        </SectionLayout>
    )
}