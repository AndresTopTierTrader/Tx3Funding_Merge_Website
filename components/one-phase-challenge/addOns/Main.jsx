'use client'

import Image from "next/image"
import young from './assets/young.webp'
import { motion } from "framer-motion"
import { animationProps } from "@/components/common/animation"

export function AddOns({ translations }) {

    const addons = [
        {
            title: translations.st_4,
            desc: translations.p11
        },
        {
            title: translations.st_5,
            desc: translations.p12
        },
        {
            title: translations.st_6,
            desc: translations.p13
        },
    ]

    return (
        <article className="rounded-lg bg-gradient-to-br from-[#717892]/10 to-transparent border border-[#717892] px-8 pt-12 pb-6 mx-auto max-w-4xl relative overflow-hidden">
            <motion.h2 {...animationProps} className="text-center mx-auto text-2xl md:text-4xl text-white">{translations.t3_1} <span className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent">{translations.t3_2}</span></motion.h2>

            <ul className="flex flex-col divide-y divide-[#717892] max-w-sm">
                {
                    addons.map(({ title, desc }) => (
                        <li key={title} className="flex flex-col gap-4 py-6">
                            <motion.strong {...animationProps} className="font-medium text-white">{title}</motion.strong>
                            <motion.p {...animationProps}p>{desc}</motion.p>
                        </li>
                    ))
                }
            </ul>
                
            <Image src={young} alt="man holding a laptop" className="hidden lg:block absolute -right-6 -bottom-32 max-w-[412px] h-auto" />
        </article>
    )
}