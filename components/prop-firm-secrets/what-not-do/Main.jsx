'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

import { SectionLayout } from "@/components/common/SectionLayout";

const Icon = () => (
    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4210_1464)">
            <path d="M3.81445 15C3.81445 16.4774 4.10544 17.9403 4.67081 19.3052C5.23617 20.6701 6.06484 21.9103 7.1095 22.955C8.15416 23.9996 9.39435 24.8283 10.7593 25.3936C12.1242 25.959 13.5871 26.25 15.0645 26.25C16.5418 26.25 18.0047 25.959 19.3696 25.3936C20.7346 24.8283 21.9747 23.9996 23.0194 22.955C24.0641 21.9103 24.8927 20.6701 25.4581 19.3052C26.0235 17.9403 26.3145 16.4774 26.3145 15C26.3145 12.0163 25.1292 9.15483 23.0194 7.04505C20.9096 4.93526 18.0481 3.75 15.0645 3.75C12.0808 3.75 9.21929 4.93526 7.1095 7.04505C4.99972 9.15483 3.81445 12.0163 3.81445 15Z" stroke="#45D1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0645 11.25H15.077" stroke="#45D1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.8145 15H15.0645V20H16.3145" stroke="#45D1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_4210_1464">
                <rect width="30" height="30" fill="white" transform="translate(0.0644531)" />
            </clipPath>
        </defs>
    </svg>
)

const BalanceIcon = () => (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.0002 12.8V74M38.0002 74H27.2002M38.0002 74H48.8002" stroke="url(#paint0_linear_4240_1340)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M70.3999 41.6001L61.3999 23.6001L52.3999 41.6001" stroke="url(#paint1_linear_4240_1340)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23.6001 41.6001L14.6001 23.6001L5.6001 41.6001" stroke="url(#paint2_linear_4240_1340)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.2002 23.6H12.9737C17.5222 23.6 21.9352 21.6956 25.487 18.2C32.8026 11 43.1978 11 50.5134 18.2C54.0652 21.6956 58.4782 23.6 63.0267 23.6H66.8002" stroke="url(#paint3_linear_4240_1340)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M61.3998 56.0001C66.2768 56.0001 70.5237 52.9987 72.73 48.5656C73.9207 46.173 74.516 44.9767 73.4292 43.2884C72.3425 41.6001 70.5438 41.6001 66.9465 41.6001H55.8531C52.2558 41.6001 50.4572 41.6001 49.3704 43.2884C48.2836 44.9767 48.8789 46.173 50.0697 48.5656C52.2759 52.9987 56.5228 56.0001 61.3998 56.0001Z" stroke="url(#paint4_linear_4240_1340)" strokeWidth="4" />
        <path d="M14.6 56.0001C19.477 56.0001 23.7239 52.9987 25.9302 48.5656C27.1209 46.173 27.7162 44.9767 26.6294 43.2884C25.5426 41.6001 23.744 41.6001 20.1467 41.6001H9.05331C5.456 41.6001 3.65735 41.6001 2.57057 43.2884C1.48379 44.9767 2.07914 46.173 3.26985 48.5656C5.47609 52.9987 9.72302 56.0001 14.6 56.0001Z" stroke="url(#paint5_linear_4240_1340)" strokeWidth="4" />
        <path d="M43.4001 7.4C43.4001 10.3823 40.9824 12.8 38.0001 12.8C35.0178 12.8 32.6001 10.3823 32.6001 7.4C32.6001 4.41766 35.0178 2 38.0001 2C40.9824 2 43.4001 4.41766 43.4001 7.4Z" stroke="url(#paint6_linear_4240_1340)" strokeWidth="4" />
        <defs>
            <linearGradient id="paint0_linear_4240_1340" x1="38.0002" y1="12.8" x2="38.0002" y2="74" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_4240_1340" x1="61.3999" y1="1.5" x2="61.3999" y2="76" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_4240_1340" x1="14.6001" y1="4" x2="14.6001" y2="77" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint3_linear_4240_1340" x1="38.0002" y1="1.5" x2="38.0002" y2="75.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint4_linear_4240_1340" x1="61.3998" y1="3" x2="61.3998" y2="77" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint5_linear_4240_1340" x1="14.6" y1="2" x2="14.6" y2="77" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint6_linear_4240_1340" x1="38.0001" y1="2" x2="38.0001" y2="76.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
        </defs>
    </svg>
)

const ClockIcon = () => (
    <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.75 39.75C62.75 54.24 50.99 66 36.5 66C22.01 66 10.25 54.24 10.25 39.75C10.25 25.26 22.01 13.5 36.5 13.5C50.99 13.5 62.75 25.26 62.75 39.75Z" stroke="url(#paint0_linear_4239_1331)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.5 24V39" stroke="url(#paint1_linear_4239_1331)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.5 6H45.5" stroke="url(#paint2_linear_4239_1331)" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="paint0_linear_4239_1331" x1="36.5" y1="13.5" x2="36.5" y2="66" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_4239_1331" x1="37" y1="24" x2="37" y2="39" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_4239_1331" x1="39" y1="2.5" x2="39.5" y2="69" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
        </defs>
    </svg>
)

const TargetIcon = () => (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.3998 23.6V12.8L63.1998 2L66.7998 9.2L73.9998 12.8L63.1998 23.6H52.3998ZM52.3998 23.6L37.9999 37.9998M74 38C74 57.8823 57.8823 74 38 74C18.1177 74 2 57.8823 2 38C2 18.1177 18.1177 2 38 2M56 38C56 47.9411 47.9411 56 38 56C28.0589 56 20 47.9411 20 38C20 28.0589 28.0589 20 38 20" stroke="url(#paint0_linear_4241_398)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="paint0_linear_4241_398" x1="38" y1="2" x2="38" y2="74" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
        </defs>
    </svg>
)

export function WhatIDidNotDo({translations}) {

    const advices = [
        {
            title: translations.st_4,
            desc: translations.p15,
            icon: <BalanceIcon />
        },
        {
            title: translations.st_5,
            desc: translations.p16,
            icon: <ClockIcon />
        },
        {
            title: translations.st_6,
            desc: translations.p17,
            icon: <TargetIcon />
        },
    ]

    return (
        <SectionLayout padding className={'flex flex-col items-center gap-12 md:gap-20'}>
            <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl font-light">{translations.t4_1} <span className="text-[#45D1FF] font-bold">{translations.t4_2}</span> {translations.t4_3}</motion.h2>
            <motion.ul {...animationSteps} className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 w-full max-w-6xl">
                {
                    advices.map(({ title, desc, icon }) => (
                        <li key={title} className="flex flex-col items-center gap-6 text-center">
                            <motion.span {...animationSteps}>
                                {icon}
                            </motion.span>

                            <motion.h6 {...animationSteps} className="text-white md:text-xl md:min-h-[60px]"><span className="px-2 py-1 mr-2 bg-gradient-to-b from-[#FF393D] to-[#840407] rounded-md">NO</span>{title}</motion.h6>

                            <motion.p {...animationSteps}>{desc}</motion.p>
                        </li>
                    ))
                }
            </motion.ul>
            <motion.div {...animationSteps} className="bg-[#0B111D]/70 rounded-lg px-6 py-4 border-2 border-[#45D1FF] flex items-center gap-6">
                <span className="w-[30px] h-[30px]">
                    <Icon />
                </span>
                {translations.p18}
            </motion.div>
        </SectionLayout>
    )
}