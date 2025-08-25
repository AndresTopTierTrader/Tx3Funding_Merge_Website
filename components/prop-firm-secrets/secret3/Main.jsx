'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";
import { SectionLayout } from "@/components/common/SectionLayout"
import Image from "next/image"
import manEN from './assets/man.webp'
import manES from './assets/imageES.webp'

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="#00B21B" />
    </svg>
)

export function Secret3({translations, locale}) {

    const steps = [
        translations.p11,
        translations.p12,
        translations.p13,
        translations.p14,
    ]

    const image = locale === "es" ? manES : manEN

    return (
        <SectionLayout padding className={'flex flex-col items-center gap-12 md:gap-20'}>
            <div className="text-center flex flex-col items-center gap-6">
                <motion.p {...animationSteps} className="px-4 py-2 rounded-md text-[#0B111D] font-bold bg-[#45D1FF]">{translations.secret_3}</motion.p>
                <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl font-light">{translations.t3}</motion.h2>
                <motion.p {...animationSteps} className="max-w-xl">{translations.p10}</motion.p>
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap w-full max-w-5xl">
                <motion.ul {...animationSteps} className="flex flex-col gap-4 text-white">
                    {
                        steps.map(step => (
                            <li key={step} className="flex items-center gap-2 p-4 border border-[#717892] rounded-xl bg-gradient-to-br from-[#717892]/10 to-[#717892]/0">
                                <span className="w-[24px] h-[24px]">
                                    <CheckIcon/>
                                </span>
                                {step}
                            </li>
                        ))
                    }
                </motion.ul>

                <Image alt="man" className="w-full md:max-w-lg" src={image}/>
            </div>
        </SectionLayout>
    )
}