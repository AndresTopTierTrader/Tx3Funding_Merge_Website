'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { AddOns } from "../addOns/Main";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuChartNoAxesCombined, LuPiggyBank, LuBanknote } from "react-icons/lu";


export function WhyChoose({ translations }) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Set visible on mount to trigger animations
        setIsVisible(true);
    }, []);

    const gradientClass = "text-transparent bg-clip-text bg-gradient-to-br from-[#0052B4] to-[#45D1FF]";

    const keys = [
        {
            icon: <LuBanknote size={72} color="#45D1FF" />,
            title: translations.st_1,
            desc: translations.p8
        },
        {
            icon: <LuPiggyBank size={72} color="#45D1FF" />,
            title: translations.st_2,
            desc: translations.p9
        },
        {
            icon: <LuChartNoAxesCombined size={72} color="#45D1FF" />,
            title: translations.st_3,
            desc: translations.p10
        },
    ]

    const addOnsTranslations = {
        t3_1: translations.t3_1,
        t3_2: translations.t3_2,
        st_4: translations.st_4,
        st_5: translations.st_5,
        st_6: translations.st_6,
        p11: translations.p11,
        p12: translations.p12,
        p13: translations.p13,
    }

    // Animation variants
    const titleAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const listAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.4,
                ease: "easeOut"
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const iconAnimation = {
        hidden: { opacity: 0, scale: 0.5, rotate: -10 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            transition: { 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.1
            }
        }
    };

    const textAnimation = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const descAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    return (
        <SectionLayout padding className='relative'>
            <motion.h2 
                className="text-center mx-auto text-2xl md:text-4xl text-textPrimary"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={titleAnimation}
            >
                {translations.t2_1} <span className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent">{translations.t2_2}</span>?
            </motion.h2>

            <motion.ul 
                className="flex justify-center gap-12 flex-wrap my-12 md:my-16"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={listAnimation}
            >
                {
                    keys.map(({ icon, title, desc }, index) => (
                        <motion.li 
                            key={title} 
                            className="flex flex-col items-center gap-6 max-w-xs text-center"
                            variants={itemAnimation}
                            custom={index}
                        >
                            <motion.span variants={iconAnimation}>{icon}</motion.span>
                            <motion.strong 
                                className="text-textPrimary font-medium"
                                variants={textAnimation}
                            >
                                {title}
                            </motion.strong>
                            <motion.p variants={descAnimation}>{desc}</motion.p>
                        </motion.li>
                    ))
                }
            </motion.ul>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.8
                }}
            >
                <AddOns translations={addOnsTranslations} />
            </motion.div>
        </SectionLayout>
    )
}