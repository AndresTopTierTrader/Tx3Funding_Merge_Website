'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Icon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4137_815)">
            <path d="M7.5 30C7.5 32.9547 8.08198 35.8806 9.21271 38.6104C10.3434 41.3402 12.0008 43.8206 14.0901 45.9099C16.1794 47.9992 18.6598 49.6566 21.3896 50.7873C24.1194 51.918 27.0453 52.5 30 52.5C32.9547 52.5 35.8806 51.918 38.6104 50.7873C41.3402 49.6566 43.8206 47.9992 45.9099 45.9099C47.9992 43.8206 49.6566 41.3402 50.7873 38.6104C51.918 35.8806 52.5 32.9547 52.5 30C52.5 24.0326 50.1295 18.3097 45.9099 14.0901C41.6903 9.87053 35.9674 7.5 30 7.5C24.0326 7.5 18.3097 9.87053 14.0901 14.0901C9.87053 18.3097 7.5 24.0326 7.5 30Z" stroke="#FF532D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 22.5H30.0251" stroke="#FF532D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.5 30H30V40H32.5" stroke="#FF532D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_4137_815">
                <rect width="60" height="60" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export function Considerations({ translations }) {
    const [account, setAccount] = useState('flex');
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Set visible on mount to trigger animations
        setIsVisible(true);
    }, []);

    const considerations = {
        pro: [
            {
                title: translations.pro_st_1,
                desc: translations.pro_p_1
            },
            {
                title: translations.pro_st_2,
                desc: translations.pro_p_2
            },
            {
                title: translations.pro_st_3,
                desc: translations.pro_p_3
            },
            {
                title: translations.pro_st_4,
                desc: translations.pro_p_4
            },
        ],
        flex: [
            {
                title: translations.flex_st_1,
                desc: translations.flex_p_1,
            },
            {
                title: translations.flex_st_2,
                desc: translations.flex_p_2,
            },
            {
                title: translations.flex_st_3,
                desc: translations.flex_p_3,
            },
            {
                title: translations.flex_st_4,
                desc: translations.flex_p_4,
            },
        ],
        conclusions: {
            flex: translations.flex_sug,
            pro: translations.pro_sug
        }
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

    const tabsAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.7,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const cardsContainerAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const conclusionAnimation = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.97
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.8,
                ease: "easeOut",
                delay: 0.9
            }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const iconPulse = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 0.5,
                ease: "easeOut",
                delay: 1.1
            }
        }
    };
    
    return (
        <SectionLayout padding>
            <motion.h2 
                className="text-center mx-auto text-2xl md:text-4xl text-textPrimary"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={titleAnimation}
            >
                {translations.t2}
            </motion.h2>

            <motion.span 
                className="grid grid-cols-2 max-w-4xl mx-auto mt-16"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={tabsAnimation}
            >
                <button 
                    onClick={() => setAccount('flex')} 
                    className={`text-xl md:text-2xl text-center w-full pb-4 relative ${account === 'flex' ? 'font-semibold bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent' : 'border-b border-[#717892] font-light text-textPrimary'}`}
                >
                    {translations.flex}
                    {account === 'flex' && (
                        <motion.div 
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-[#45D1FF]"
                            layoutId="activeConsiderationTab"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </button>

                <button 
                    onClick={() => setAccount('pro')} 
                    className={`text-xl md:text-2xl text-center w-full pb-4 relative ${account === 'pro' ? 'font-semibold bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent' : 'border-b border-[#717892] font-light text-textPrimary'}`}
                >
                    {translations.pro}
                    {account === 'pro' && (
                        <motion.div 
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-[#45D1FF]"
                            layoutId="activeConsiderationTab"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </button>
            </motion.span>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={`cards-${account}`}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl mt-12"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={cardsContainerAnimation}
                >
                    {
                        considerations[account].map((item, index) => (
                            <AnimatedCard 
                                key={`${account}-${item.title}`} 
                                title={item.title} 
                                desc={item.desc}
                                index={index}
                            />
                        ))
                    }
                </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.span 
                    key={`conclusion-${account}`}
                    className="mx-auto max-w-3xl rounded-xl bg-[#0B111D]/70 p-6 flex items-center gap-4 mt-12 border-2 border-[#FF532D]"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={conclusionAnimation}
                >
                    <motion.span 
                        className="aspect-square w-[60px]"
                        variants={iconPulse}
                        whileHover={{ 
                            rotate: [0, -10, 10, -5, 5, 0],
                            transition: { duration: 0.6 }
                        }}
                    >
                        <Icon />
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: { delay: 1.2, duration: 0.5 }
                        }}
                    >
                        {considerations.conclusions[account]}
                    </motion.p>
                </motion.span>
            </AnimatePresence>

        </SectionLayout>
    )
}

function AnimatedCard({ title, desc, index }) {
    const cardAnimation = {
        hidden: { 
            opacity: 0, 
            y: 30, 
            scale: 0.95,
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15
            }
        }
    };
    
    const titleAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.4,
                delay: 0.2 + (index * 0.15)
            }
        }
    };
    
    const descAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.4,
                delay: 0.4 + (index * 0.15)
            }
        }
    };

    return (
        <motion.article 
            className="flex flex-col gap-4 px-6 py-4 rounded-lg bg-gradient-to-br from-[#717892]/10 to-transparent border border-[#717892]"
            variants={cardAnimation}
            whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 12px rgba(69, 209, 255, 0.15)",
                borderColor: "rgba(69, 209, 255, 0.5)",
                transition: { duration: 0.2 }
            }}
        >
            <motion.strong 
                className="font-medium text-textPrimary"
                variants={titleAnimation}
            >
                {title}
            </motion.strong>
            <motion.p variants={descAnimation}>{desc}</motion.p>
        </motion.article>
    )
}