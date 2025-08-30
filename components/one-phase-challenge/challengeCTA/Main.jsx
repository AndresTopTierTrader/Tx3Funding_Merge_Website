"use client";

import { motion } from "framer-motion";
import CtaButton from "@/components/common/Buttons/CtaButton";

export function ChallengeCTA({ translations }) {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
    >
      <div className="w-full max-w-md min-[1120px]:max-w-[calc(2*28rem+2rem)] mx-auto rounded-xl bg-[#0B111D]/70 p-8 border-2 border-[#FF532D]">
        <div className="flex flex-col min-[1120px]:flex-row items-center justify-between gap-6">
          <div className="text-center min-[1120px]:text-left">
            <h2 className="text-textPrimary text-xl md:text-2xl font-medium leading-tight">
              {translations.CTA_text_1}
              <br />
              <span className="text-[#FF532D] font-semibold">
                {translations.CTA_text_2}
              </span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <CtaButton
              utm={
                "https://app.toptiertrader.com/buy-challenge/?el=OnePhaseChallengeLandingPageCTA=July202[…]ns=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
              }
              translation={translations.CTA}
              page={"One Phase Challenge"}
              section={"CTA Challenge card"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
