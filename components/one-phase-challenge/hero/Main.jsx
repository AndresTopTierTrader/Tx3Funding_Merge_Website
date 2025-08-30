'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { trailingSlash } from "@/i18nConfig";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection({translations}) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Set visible on mount to trigger animations
        setIsVisible(true);
    }, []);

    return (
        <SectionLayout className='text-center pt-32 relative'>
            <motion.h1 
                className="text-3xl md:text-5xl text-textPrimary mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent">
                    {translations.h1_title_1}
                </span> {translations.h1_title_2}
            </motion.h1>
            
            <motion.p 
                className="mx-auto max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
                {translations.p1}
            </motion.p>

            <motion.div 
                className="rounded-full w-[700px] h-[100px] mx-auto bg-[#0052B4]/30 absolute top-28 -z-10 inset-0 blur-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            ></motion.div>
        </SectionLayout>
    );
}