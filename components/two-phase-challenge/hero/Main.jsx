'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero({translations}) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Set visible on mount to trigger animations
        setIsVisible(true);
    }, []);

    // Animation variants
    const headingAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.9,
                ease: "easeOut"
            }
        }
    };

    const gradientSpanAnimation = {
        hidden: { opacity: 0, scale: 0.97 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    const subtitleAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.7,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const paragraphAnimation = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.7,
                ease: "easeOut",
                delay: 0.8
            }
        }
    };

    return (
        <SectionLayout className='pt-32'>
            <motion.h1 
                className="text-4xl md:text-7xl text-textPrimary mb-2 mx-auto text-center"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={headingAnimation}
            >
                <motion.span 
                    className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent font-bold"
                    variants={gradientSpanAnimation}
                >
                    {translations.h1_1}
                </motion.span>{" "}
                {translations.h1_2}{" "}
                <motion.span 
                    className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent font-bold"
                    variants={gradientSpanAnimation}
                >
                    {translations.h1_3}
                </motion.span>
            </motion.h1>
            
            <motion.p 
                className="text-textPrimary text-center mb-4"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={subtitleAnimation}
            >
                {translations.st_1}
            </motion.p>

            <motion.p 
                className="mx-auto max-w-sm text-center"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={paragraphAnimation}
            >
                {translations.p1}
            </motion.p>

            {/* Add a subtle background animation */}
            <motion.div
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#0052B4]/20 rounded-full blur-[180px] -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
        </SectionLayout>
    )
}

