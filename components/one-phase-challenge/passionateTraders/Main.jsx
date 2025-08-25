'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChallengeCTA } from "@/components/one-phase-challenge/challengeCTA/Main";

const CheckIcon = ({ isFirstCard }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check ${isFirstCard ? 'text-[#FF532D]' : 'text-[#45D1FF]'}`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" /></svg>
)

export function PassionateTraders({ translations, ctaTranslations }) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Set visible on mount to trigger animations
        setIsVisible(true);
    }, []);

    const cards = [
        {
            phase: translations.phase,
            profitTarget: translations.profit_target,
            description: translations.p2,
            bulletPoints: [
                translations.p3,
                translations.p4,
                translations.p5
            ]
        },
        {
            phase: translations.funded,
            profitTarget: "",
            description: translations.p6,
            bulletPoints: [
                translations.p7
            ]
        }
    ];

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

    const cardsContainerAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.4,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardAnimation = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const bulletPointAnimation = {
        hidden: { opacity: 0, x: -10 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <SectionLayout padding>
            <motion.h2 
                className="text-center mx-auto max-w-md text-2xl md:text-4xl text-white"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={titleAnimation}
            >
                {translations.t1_1} <span className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent">{translations.t1_2}</span>
            </motion.h2>

            <motion.div 
                className="flex items-center gap-8 justify-center flex-wrap mt-12"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={cardsContainerAnimation}
            >
                {
                    cards.map(({ phase, profitTarget, description, bulletPoints }, cardIndex) => (
                        <motion.div 
                            key={phase} 
                            className="max-w-md rounded-lg bg-gradient-to-br from-[#717892]/10 to-transparent p-6 flex flex-col gap-8 min-h-[383px] border border-[#717892]"
                            variants={cardAnimation}
                        >
                            <motion.span 
                                className="flex items-center justify-between"
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.3 + (cardIndex * 0.3), duration: 0.6 }}
                            >
                                <p className={`px-4 py-2 rounded-lg text-white bg-[#0B111D]/70 ${cardIndex === 0 ? 'border-2 border-[#FF532D]' : 'border-2 border-[#45D1FF]'}`}>{phase}</p>
                                <p className="text-white">{profitTarget}</p>
                            </motion.span>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.5 + (cardIndex * 0.3), duration: 0.6 }}
                            >
                                {description}
                            </motion.p>

                            <motion.ul 
                                className="pt-6 border-t border-[#717892] flex flex-col gap-4"
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.2,
                                            delayChildren: 0.6 + (cardIndex * 0.3)
                                        }
                                    }
                                }}
                            >
                                {
                                    bulletPoints.map(bullet => (
                                        <motion.li 
                                            key={bullet} 
                                            className="flex gap-4"
                                            variants={bulletPointAnimation}
                                        >
                                            <motion.span 
                                                className="aspect-square w-[24px] text-[#45D1FF] -mb-2"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                                transition={{ 
                                                    delay: 0.7 + (cardIndex * 0.3), 
                                                    duration: 0.5,
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20
                                                }}
                                            >
                                                    <CheckIcon isFirstCard={cardIndex === 0} />
                                            </motion.span>
                                            {bullet}
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                        </motion.div>
                    ))
                }
            </motion.div>
            <ChallengeCTA translations={ctaTranslations} />
        </SectionLayout>
    )
}