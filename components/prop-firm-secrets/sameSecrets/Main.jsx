'use client'
import { motion } from "framer-motion";
import { animationSteps } from "@/animations/animation";
import { track } from '@vercel/analytics'
import { SectionLayout } from "@/components/common/SectionLayout";
import getCurrentUTMMonth from "@/utils/misc/getCurrentUTM";
const CURRENT_MONTH = getCurrentUTMMonth();

export function SameSecrets({translations, promoCode}) {
    return (
        <SectionLayout padding className={'flex flex-col items-center gap-12 md:gap-20'}>
            <div id="sameSecrets" className="text-center flex flex-col items-center gap-6">
                <motion.h2 {...animationSteps} className="text-white text-3xl md:text-5xl font-light">{translations.t5_1} <span className="italic">{translations.t5_2}</span></motion.h2>
                <motion.p {...animationSteps} className="max-w-xl">{translations.p19}</motion.p>
                <motion.p {...animationSteps} className="text-[#45D1FF]">{translations.p20}</motion.p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl gap-8">
                <li className="border border-[#717892] rounded-xl text-center divide-y divide-[#717892] bg-gradient-to-b from-[#45D1FF]/20 to-[#0B111D]/0 relative">
                    <motion.div {...animationSteps} className="px-12 py-8 text-white font-semibold">{translations.st_7} <br />CHALLENGE</motion.div>
                    <div className="px-12 py-8 flex flex-col items-center gap-12">
                        <motion.p {...animationSteps}>{translations.p21}</motion.p>
                        <motion.a onClick={() => track(`Same secrets - The Secret Challenge - ${promoCode} - CTA Clicked `)} rel="noopener noreferrer" href={`https://app.toptiertrader.com/buy-challenge?id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=higherProfitShare&addons=doubleLeverage&addons=tradeOnWeekends${promoCode &&`&promo=${promoCode}`}`} {...animationSteps} className="px-4 py-3 rounded-xl bg-gradient-to-br from-[#0052B4] to-[#45D1FF] text-white font-bold hover:brightness-125">100K PRO CHALLENGE</motion.a>
                    </div>

                    <motion.p {...animationSteps} className="aspect-square w-fit px-2 rounded-full text-white bg-red-500 grid place-items-center tracking-tighter leading-none absolute -top-4 -right-3 scale-110 rotate-12">20% <br />OFF</motion.p>
                </li>

                <li className="border border-[#717892] rounded-xl text-center divide-y divide-[#717892] bg-gradient-to-b from-[#0052B4]/30 to-[#0B111D]/0">
                    <motion.div {...animationSteps} className="px-12 py-8 text-white font-semibold">{translations.st_8} <br />CHALLENGE</motion.div>
                    <div className="px-12 py-8 flex flex-col items-center gap-12">
                        <motion.p {...animationSteps}>{translations.p22}</motion.p>
                        <motion.span {...animationSteps} className="flex items-center gap-4 justify-center">
                            <a onClick={() => track(`Same secrets - Flex - CTA Clicked `)} rel="noopener noreferrer" href={`https://app.toptiertrader.com/buy-challenge/?el=PropFirmSecretsLP_Flex&hcategory=${CURRENT_MONTH}&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90`} className="px-6 py-3 rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 text-white hover:brightness-125">FLEX</a>
                            <a onClick={() => track(`Same secrets - Pro - CTA Clicked `)} rel="noopener noreferrer" href={`https://app.toptiertrader.com/buy-challenge/?el=PropFirmSecretsLP_Pro&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss`} className="px-6 py-3 rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 text-white hover:brightness-125">PRO</a>
                        </motion.span>
                    </div>
                </li>

                <li className="border border-[#717892] rounded-xl text-center divide-y divide-[#717892] bg-gradient-to-b from-[#FF532D]/20 to-[#0B111D]/0">
                    <motion.div {...animationSteps} className="px-12 py-8 text-white font-semibold">{translations.st_9} <br />CHALLENGE</motion.div>
                    <motion.div {...animationSteps} className="px-12 py-8 flex flex-col items-center gap-12">
                        <p>{translations.p23}</p>
                        <a onClick={() => track(`Same secrets - 100K Pro - CTA Clicked `)} rel="noopener noreferrer" href={`https://app.toptiertrader.com/buy-challenge/?el=PropFirmSecretsLP_OnePhase&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss`}className="px-4 py-3 rounded-xl border border-[#717892] bg-gradient-to-br from-[#717892]/10 to-[#717892]/0 text-white font-bold hover:brightness-125">100K PRO CHALLENGE</a>
                    </motion.div>
                </li>
            </ul>
        </SectionLayout>
    )
}
