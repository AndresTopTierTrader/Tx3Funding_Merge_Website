'use client'

import CtaButton from "@/components/common/Buttons/CtaButton";
import { SectionLayout } from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import { animationProps } from "@/components/common/animation";

export function TheProcess({ translations, pageType = 'onePhase' }) {

    const steps = [
        translations.p14,
        translations.p15,
        translations.p16,
        translations.p17
    ]

    // Dynamic UTM URL based on page type
    const getUTMUrl = () => {
        const baseUrl = 'https://app.toptiertrader.com/buy-challenge/?';
        const commonParams = 'hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss';
        
        const elParam = pageType === 'twoPhase' 
            ? 'el=TwoPhaseChallengeLandingPageCTA' 
            : 'el=OnePhaseChallengeLandingPageCTA';
        
        return `${baseUrl}${elParam}&${commonParams}`;
    };

    // Dynamic page name for tracking
    const getPageName = () => {
        return pageType === 'twoPhase' ? 'Two Phase Challenge' : 'One Phase Challenge';
    };

    return (
        <SectionLayout padding className='flex flex-col items-center gap-12'>
            <motion.h2 {...animationProps} className="text-center mx-auto text-2xl md:text-4xl text-white">{translations.t4_1} <span className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent">{translations.t4_2}</span></motion.h2>

            <ul className="flex flex-col gap-6">
                {
                    steps.map((step, index) => (
                        <li key={step} className="flex items-center divide-x divide-[#717892] rounded-lg bg-gradient-to-br from-[#717892]/10 to-transparent border border-[#717892] px-8 py-6">
                            <motion.strong {...animationProps} className="font-semibold bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent text-lg md:text-2xl pr-4">{index + 1}</motion.strong>
                            <motion.p {...animationProps} className="pl-4">{step}</motion.p>
                        </li>
                    ))
                }
            </ul>

            <CtaButton 
                utm={getUTMUrl()} 
                translation={translations.CTA} 
                page={getPageName()} 
                section={'The process Section'} 
            />
        </SectionLayout>
    )
}