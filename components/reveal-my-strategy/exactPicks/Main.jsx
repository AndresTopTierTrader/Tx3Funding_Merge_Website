'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import man from './assets/man.webp'
import Image from "next/image";
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

const CheckIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_501)">
            <path d="M5 12.5L10 17.5L20 7.5" stroke="#45D1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_4232_501">
                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>
)

const ClickIcon = () => (
    <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4283_408)">
            <path d="M13.1815 25.7475C12.7555 26.2034 12.356 26.6294 11.9581 27.0576C10.4947 28.6312 9.02902 30.202 7.57179 31.7806C7.22579 32.1555 6.82514 32.297 6.33545 32.14C5.90775 32.003 5.69869 31.6818 5.62036 31.2592C4.94922 27.6566 4.27527 24.0552 3.6047 20.4526C2.91891 16.768 2.23763 13.0834 1.55184 9.39874C1.04863 6.6953 0.543161 3.99131 0.0354405 1.28788C-0.0445776 0.860233 -0.0130212 0.46864 0.383124 0.199073C0.79054 -0.0777041 1.21204 -0.0538535 1.62566 0.195191C4.62633 2.00173 7.62701 3.80717 10.626 5.61593C13.8329 7.55004 17.0376 9.48804 20.2445 11.4227C23.2829 13.2564 26.3231 15.0879 29.362 16.9205C29.9199 17.2572 30.111 17.6666 29.938 18.1586C29.8196 18.4941 29.561 18.6688 29.2291 18.7709C26.5902 19.5824 23.9524 20.3972 21.3146 21.2114C21.2098 21.2436 21.1078 21.2852 20.9652 21.3362C21.1585 21.6341 21.3304 21.9059 21.5096 22.1727C23.8183 25.6066 26.1281 29.0394 28.4368 32.4728C28.8194 33.0419 28.696 33.5843 28.0908 33.926C26.3828 34.8911 24.672 35.8518 22.9584 36.8075C22.3408 37.1519 21.8003 37.026 21.38 36.4741C18.7135 32.9725 16.0447 29.472 13.3759 25.9716C13.3263 25.9067 13.2688 25.8473 13.1815 25.7464V25.7475ZM26.1715 32.7179C26.105 32.6137 26.0531 32.5288 25.9973 32.4456C23.5134 28.7493 21.0283 25.0536 18.5455 21.3573C18.1223 20.7278 18.3562 20.0716 19.0871 19.8447C20.9647 19.2623 22.844 18.6866 24.7221 18.107C25.3183 17.9228 25.914 17.7359 26.589 17.5257C18.5275 12.6613 10.5302 7.83569 2.53347 3.00956C2.51036 3.02287 2.48782 3.03618 2.46472 3.05005C4.07635 11.6956 5.68798 20.3406 7.31201 29.0522C7.4557 28.9024 7.54587 28.8114 7.63321 28.7177C9.21723 27.0149 10.799 25.311 12.3847 23.6104C12.9245 23.0313 13.6661 23.0612 14.1445 23.6858C15.4322 25.367 16.7136 27.052 17.9978 28.7354C19.4731 30.6701 20.9506 32.6037 22.4208 34.5422C22.543 34.7031 22.6332 34.7164 22.8085 34.6149C23.5438 34.1889 24.2905 33.7807 25.0321 33.3647C25.4051 33.155 25.777 32.9426 26.1715 32.7191V32.7179Z" fill="white" />
            <path d="M26.1716 32.718C25.7771 32.9416 25.4052 33.154 25.0322 33.3637C24.2906 33.7797 23.5445 34.1879 22.8086 34.6139C22.6333 34.7154 22.5432 34.7021 22.4209 34.5412C20.9507 32.6027 19.4732 30.6691 17.9979 28.7344C16.7137 27.051 15.4323 25.3659 14.1447 23.6848C13.6662 23.0602 12.9247 23.0303 12.3848 23.6093C10.7997 25.3105 9.21735 27.0144 7.63333 28.7167C7.54599 28.8104 7.45583 28.9019 7.31213 29.0511C5.6881 20.3407 4.07647 11.6951 2.46484 3.05013C2.48795 3.03682 2.51049 3.02351 2.53359 3.00964C10.5309 7.83578 18.5276 12.6614 26.5892 17.5263C25.9141 17.7365 25.319 17.9235 24.7223 18.1076C22.8441 18.6872 20.9648 19.263 19.0872 19.8454C18.3563 20.0722 18.1225 20.7284 18.5456 21.3579C21.029 25.0548 23.5135 28.7505 25.9975 32.4462C26.0533 32.5289 26.1051 32.6143 26.1716 32.7186V32.718Z" fill="#0B111D" />
        </g>
        <defs>
            <clipPath id="clip0_4283_408">
                <rect width="30" height="37" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export function ExactPicks({translations}) {
    return (
        <SectionLayout padding className={'flex flex-col items-center'}>
            <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl mx-auto max-w-xl text-center font-light">{translations.t1_1} <span className="bg-clip-text text-transparent bg-gradient-to-br from-ttblue to-ttelectricBlue font-medium italic pr-2">{translations.t1_2}</span> {translations.t1_3}</motion.h2>

            <motion.div {...animationSteps} className="mt-16 md:mt-24 rounded-xl border border-[#717892] flex flex-col md:flex-row md:items-end justify-between px-6 md:px-12 bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 max-w-4xl w-full relative overflow-hidden md:overflow-visible">
                <div className="flex flex-col gap-8 md:gap-16 py-12 relative z-10">
                    <span className="text-white text-xl md:text-2xl flex flex-col gap-2">
                        {translations.p1}
                        <span className="flex items-center gap-4">
                            <div className="px-6 py-3 rounded-xl border border-[#717892] text-white text-base">FLEX</div>
                            <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-ttblue to-ttelectricBlue text-white text-base relative">
                                PRO
                                <span className="absolute -right-4 -bottom-4">
                                    <ClickIcon/>
                                </span>
                            </div>
                        </span>
                    </span>

                    <span className="text-white text-xl md:text-2xl flex flex-col gap-2">
                        {translations.p2}
                        <strong className="text-transparent bg-clip-text bg-gradient-to-br from-ttblue to-ttelectricBlue text-4xl md:text-5xl">100K</strong>
                    </span>

                    <span className="text-white text-xl md:text-2xl flex flex-col gap-4">
                        Add-ons:
                        <ul className="flex flex-col gap-6 text-base">
                            <li className="flex items-center gap-2">
                                <span className="w-[24px] h-[24px]">
                                    <CheckIcon />
                                </span>
                                {translations.p3}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-[24px] h-[24px]">
                                    <CheckIcon />
                                </span>
                                {translations.p4}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-[24px] h-[24px]">
                                    <CheckIcon />
                                </span>
                                {translations.p5}
                            </li>
                        </ul>
                    </span>
                </div>

                <Image src={man} alt="man" className="w-full max-w-[456px] md:-mt-12 relative z-10" />

                <div className="absolute right-2 md:right-[10%] bottom-0 md:top-[20%] w-[400px] h-[400px] bg-[#14497A] blur-[80px] rounded-full"></div>
            </motion.div>
        </SectionLayout>
    )
}