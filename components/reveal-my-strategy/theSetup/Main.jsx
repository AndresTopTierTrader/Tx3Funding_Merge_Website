'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

const USDicon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_598)">
            <rect width="36" height="36" rx="4" fill="url(#paint0_linear_4232_598)" />
            <path d="M23.7442 13.1112C23.5009 12.4209 23.0567 11.8193 22.4686 11.3836C21.8804 10.948 21.1754 10.6983 20.4442 10.6667H15.5553C14.5829 10.6667 13.6502 11.0531 12.9626 11.7407C12.275 12.4283 11.8887 13.361 11.8887 14.3334C11.8887 15.3059 12.275 16.2385 12.9626 16.9261C13.6502 17.6138 14.5829 18.0001 15.5553 18.0001H20.4442C21.4167 18.0001 22.3493 18.3864 23.037 19.074C23.7246 19.7617 24.1109 20.6943 24.1109 21.6667C24.1109 22.6392 23.7246 23.5718 23.037 24.2595C22.3493 24.9471 21.4167 25.3334 20.4442 25.3334H15.5553C14.8241 25.3018 14.1191 25.0522 13.531 24.6165C12.9429 24.1809 12.4986 23.5792 12.2553 22.889" stroke="white" strokeWidth="2.44444" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 7V10.6667M18 25.3333V29" stroke="white" strokeWidth="2.44444" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_4232_598" x1="0.147541" y1="4.4" x2="34.2032" y2="25.627" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <clipPath id="clip0_4232_598">
                <rect width="36" height="36" rx="4" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const EURicon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_610)">
            <rect width="36" height="36" rx="6" fill="url(#paint0_linear_4232_610)" />
            <path d="M24.9999 11.1559C23.8447 9.83541 22.3811 8.94222 20.7926 8.5883C19.2041 8.23438 17.5613 8.43549 16.0704 9.16641C14.5794 9.89733 13.3066 11.1255 12.4116 12.697C11.5165 14.2685 11.0391 16.1132 11.0391 18C11.0391 19.8868 11.5165 21.7316 12.4116 23.303C13.3066 24.8745 14.5794 26.1027 16.0704 26.8336C17.5613 27.5645 19.2041 27.7657 20.7926 27.4117C22.3811 27.0578 23.8447 26.1646 24.9999 24.8442" stroke="white" strokeWidth="2.73766" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.2509 15.2625H8.30029M8.30029 20.7378H19.2509" stroke="white" strokeWidth="2.73766" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_4232_610" x1="0.147541" y1="4.4" x2="34.2032" y2="25.627" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <clipPath id="clip0_4232_610">
                <rect width="36" height="36" rx="6" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const COINicon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_622)">
            <rect width="36" height="36" rx="4" fill="url(#paint0_linear_4232_622)" />
            <path d="M14.3638 20.2726C14.3638 22.0301 17.416 23.4545 21.182 23.4545C24.9479 23.4545 28.0001 22.0301 28.0001 20.2726C28.0001 18.5152 24.9479 17.0908 21.182 17.0908C17.416 17.0908 14.3638 18.5152 14.3638 20.2726Z" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.3638 19.8181V24.4934C14.3638 26.429 17.416 27.9999 21.182 27.9999C24.9479 27.9999 28.0001 26.429 28.0001 24.4934V19.8181" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11.1818C8 12.3188 9.3 13.3688 11.4091 13.9373C13.5182 14.5058 16.1182 14.5058 18.2273 13.9373C20.3364 13.3688 21.6364 12.3188 21.6364 11.1818C21.6364 10.0448 20.3364 8.99485 18.2273 8.42636C16.1182 7.85788 13.5182 7.85788 11.4091 8.42636C9.3 8.99485 8 10.0448 8 11.1818Z" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11.6365V22.2425C8 23.1844 8.70182 23.7804 9.81818 24.3637" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 17.0908C8 17.8981 8.70182 18.409 9.81818 18.909" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_4232_622" x1="0.147541" y1="4.4" x2="34.2032" y2="25.627" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <clipPath id="clip0_4232_622">
                <rect width="36" height="36" rx="4" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export function TheSetup({translations}) {

    const options = [
        {
            coin: 'GBP/USD',
            value: '1.2777',
            money: '$128.02M',
            icon: <USDicon/>
        },
        {
            coin: 'EUR/USD',
            value: '1.1060',
            money: '$76.09M',
            icon: <EURicon/>
        },
        {
            coin: 'XAU/USD',
            value: '3,239.97',
            money: '$64.89M',
            icon: <COINicon/>
        },
    ]

    return (
        <SectionLayout padding>
            <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl mx-auto max-w-xl text-center font-light">{translations.t3}</motion.h2>

            <ul className="flex items-center gap-6 flex-wrap justify-center mt-8 md:mt-16 w-full">
                {
                    options.map(({coin, value, money, icon}) => (
                        <li key={coin} className="p-4 rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 flex flex-col gap-8 text-white w-full max-w-xs">
                            <motion.span {...animationSteps} className="flex items-center gap-4">
                                {icon}
                                <strong>{coin}</strong>
                            </motion.span>

                            <motion.strong {...animationSteps} className="text-xl md:text-2xl">{value}</motion.strong>

                            <motion.span {...animationSteps} className="flex items-center justify-between pt-3 border-t border-[#717892]">
                                <p className="text-[#A2ACCF]">{translations.volume}</p>
                                {money}
                            </motion.span>
                        </li>
                    ))
                }
            </ul>
        </SectionLayout>
    )
}