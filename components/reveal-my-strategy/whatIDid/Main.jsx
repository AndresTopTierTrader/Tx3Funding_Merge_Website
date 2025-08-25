'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";

const ClockIcon = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_551)">
            <path d="M9 36C9 39.5457 9.69838 43.0567 11.0553 46.3325C12.4121 49.6082 14.4009 52.5847 16.9081 55.0919C19.4153 57.5991 22.3918 59.5879 25.6675 60.9447C28.9433 62.3016 32.4543 63 36 63C39.5457 63 43.0567 62.3016 46.3325 60.9447C49.6082 59.5879 52.5847 57.5991 55.0919 55.0919C57.5991 52.5847 59.5879 49.6082 60.9447 46.3325C62.3016 43.0567 63 39.5457 63 36C63 28.8392 60.1554 21.9716 55.0919 16.9081C50.0284 11.8446 43.1608 9 36 9C28.8392 9 21.9716 11.8446 16.9081 16.9081C11.8446 21.9716 9 28.8392 9 36Z" stroke="url(#paint0_linear_4232_551)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 21V36L45 45" stroke="url(#paint1_linear_4232_551)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_4232_551" x1="9.22131" y1="15.6" x2="60.3049" y2="47.4404" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_4232_551" x1="29.5" y1="10.5" x2="48.4336" y2="13.8416" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <clipPath id="clip0_4232_551">
                <rect width="72" height="72" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const BookIcon = () => (
    <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4232_558)">
            <path d="M27.5 12V66M18.5 12H51.5C53.0913 12 54.6174 12.6321 55.7426 13.7574C56.8679 14.8826 57.5 16.4087 57.5 18V54C57.5 55.5913 56.8679 57.1174 55.7426 58.2426C54.6174 59.3679 53.0913 60 51.5 60H18.5C17.7044 60 16.9413 59.6839 16.3787 59.1213C15.8161 58.5587 15.5 57.7956 15.5 57V15C15.5 14.2044 15.8161 13.4413 16.3787 12.8787C16.9413 12.3161 17.7044 12 18.5 12Z" stroke="url(#paint0_linear_4232_558)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.5 24H45.5" stroke="url(#paint1_linear_4232_558)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.5 36H45.5" stroke="url(#paint2_linear_4232_558)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_4232_558" x1="15.6721" y1="18.6" x2="60.3415" y2="40.2552" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_4232_558" x1="29.5" y1="14.5" x2="57" y2="59" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_4232_558" x1="19" y1="13.5" x2="6.5185" y2="37.1548" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <clipPath id="clip0_4232_558">
                <rect width="72" height="72" fill="white" transform="translate(0.5)" />
            </clipPath>
        </defs>
    </svg>
)

const BulbIcon = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.0002 23.6699L32.7902 29.2499C32.0702 30.4799 32.6702 31.4999 34.0802 31.4999H37.8902C39.3302 31.4999 39.9002 32.5199 39.1802 33.7499L36.0002 39.3299" stroke="url(#paint0_linear_4239_1262)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.9001 54.12V50.64C18.0001 46.47 12.3301 38.34 12.3301 29.7C12.3301 14.85 25.9801 3.21004 41.4001 6.57004C48.1801 8.07004 54.1201 12.57 57.2101 18.78C63.4801 31.38 56.8801 44.76 47.1901 50.61V54.09C47.1901 54.96 47.5201 56.97 44.3101 56.97H27.7801C24.4801 57 24.9001 55.71 24.9001 54.12Z" stroke="url(#paint1_linear_4239_1262)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.5 66.0001C32.37 64.0501 39.63 64.0501 46.5 66.0001" stroke="url(#paint2_linear_4239_1262)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="paint0_linear_4239_1262" x1="35.9879" y1="23.6699" x2="35.9879" y2="39.3299" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_4239_1262" x1="35.9984" y1="5.98779" x2="35.9984" y2="56.9706" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_4239_1262" x1="28" y1="8" x2="38.5" y2="74" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
        </defs>
    </svg>
)

export function WhatIDid({translations}) {

    const advices = [
        {
            title: translations.st_5,
            desc: translations.p22,
            icon: <ClockIcon />
        },
        {
            title: translations.st_6,
            desc: translations.p23,
            icon: <BookIcon />
        },
        {
            title: translations.st_7,
            desc: translations.p24,
            icon: <BulbIcon />
        },
    ]

    return (
        <SectionLayout padding>
            <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl mx-auto max-w-xl text-center font-light">{translations.t5}</motion.h2>

            <ul className="flex gap-16 md:gap-6 justify-evenly flex-wrap mt-8 md:mt-16">
                {
                    advices.map(({ title, desc, icon }) => (
                        <li key={title} className="flex flex-col items-center gap-4 md:gap-8 text-center max-w-[264px]">
                            <motion.span {...animationSteps}>
                                {icon}
                            </motion.span>

                            <motion.h6 {...animationSteps} className="text-white md:text-xl">{title}</motion.h6>

                            <motion.p {...animationSteps}>{desc}</motion.p>
                        </li>
                    ))
                }
            </ul>
        </SectionLayout>
    )
}