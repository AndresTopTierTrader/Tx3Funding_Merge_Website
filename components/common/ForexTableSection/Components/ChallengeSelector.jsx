"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";
import {
  CHALLENGE_TYPES,
  TWO_PHASE_VARIANTS,
} from "@/constants/tableSection/tableSection.js";

const ChallengeSelector = ({
  challengeType,
  selectedChallenge,
  onChallengeSelection,
  isLATAM,
  getBadgeText,
  getChallengeTypeTexts,
}) => {
  // Determine if a challenge option is selected
  const isOptionSelected = (type, variant = null) => {
    if (type === CHALLENGE_TYPES.ONE_PHASE) {
      return challengeType === CHALLENGE_TYPES.ONE_PHASE;
    } else {
      return (
        challengeType === CHALLENGE_TYPES.TWO_PHASE &&
        selectedChallenge === variant
      );
    }
  };

  return (
    <motion.div
      className="flex flex-row items-center justify-center w-full mt-14 gap-2 sm:gap-4 px-3 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* One Phase Challenge Button */}
      <div className="flex-1 max-w-xs">
        <motion.button
          onClick={() => onChallengeSelection(CHALLENGE_TYPES.ONE_PHASE)}
          className={`w-full  py-3 md:py-4 px-2 text-sm md:text-base font-medium rounded-lg transition-all duration-200 ${
            isOptionSelected(CHALLENGE_TYPES.ONE_PHASE)
              ? "bg-forexBlue h-12 md:h-14 text-textPrimary"
              : "bg-[#181D28] border border-[#4D516A] text-textPrimary h-12 md:h-14 hover:bg-[#131927]"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <span className="truncate block">
            <span className="sm:hidden">1 phase</span>
            <span className="hidden sm:block">
              {getChallengeTypeTexts.onePhase}
            </span>
          </span>
        </motion.button>
      </div>

      {/* Two Phase Flex Button */}
      <div className="flex-1 max-w-xs relative">
        <motion.button
          onClick={() =>
            onChallengeSelection(
              CHALLENGE_TYPES.TWO_PHASE,
              TWO_PHASE_VARIANTS.FLEX
            )
          }
          className={`w-full py-3 md:py-4 px-2 sm:px-4 text-sm md:text-base font-medium rounded-lg transition-all duration-200 ${
            isOptionSelected(CHALLENGE_TYPES.TWO_PHASE, TWO_PHASE_VARIANTS.FLEX)
              ? "bg-forexBlue h-12 md:h-14 text-textPrimary"
              : "bg-[#181D28] border border-[#4D516A] text-textPrimary h-12 md:h-14 hover:bg-[#131927]"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <span className="flex items-center justify-center">
            <FaCrown className="mr-1 sm:mr-2 md:hidden text-textPrimary flex-shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">2 Phase Flex</span>
              <span className="hidden sm:block">2 Phase Flex</span>
            </span>
          </span>
        </motion.button>
        {/* Badge for Flex */}
        <div
          className={`hidden md:flex flex-row justify-center items-center bg-textPrimary absolute -top-4 left-1/2 w-20 md:w-36 transform -translate-x-1/2 text-xs text-bgDark ${
            isLATAM ? "scale-125" : ""
          } px-2 py-1 rounded-md`}
        >
          <p className="truncate">{getBadgeText}</p>
          <FaCrown className="ml-1 flex-shrink-0" />
        </div>
      </div>

      {/* Two Phase Pro Button */}
      <div className="flex-1 max-w-xs">
        <motion.button
          onClick={() =>
            onChallengeSelection(
              CHALLENGE_TYPES.TWO_PHASE,
              TWO_PHASE_VARIANTS.PRO
            )
          }
          className={`w-full py-3 md:py-4 px-2 sm:px-4 text-sm  md:text-base font-medium rounded-lg transition-all duration-200 ${
            isOptionSelected(CHALLENGE_TYPES.TWO_PHASE, TWO_PHASE_VARIANTS.PRO)
              ? "bg-gradient-to-b from-[#0052B4] to-[#167ACC] h-12 md:h-14 text-textPrimary"
              : "bg-[#181D28] border border-[#4D516A] text-textPrimary h-12 md:h-14 hover:bg-[#131927]"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <span className="truncate block">
            <span className="sm:hidden">2 Phase Pro</span>
            <span className="hidden sm:block">2 Phase Pro</span>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChallengeSelector;