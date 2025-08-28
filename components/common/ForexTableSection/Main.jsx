"use client";


import React, { useRef, useState, useEffect, useCallback } from "react";
import { track } from "@vercel/analytics";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Components
import ChallengeSelector from "./Components/ChallengeSelector.jsx";
import AccountAmountSelector from "./Components/AccountAmountSelector.jsx";
import BrokerSelector from "./Components/BrokerSelector.jsx";
import TableWithAddons from "./Components/TableWithAddons.jsx";

// Utils and Hooks
import { isLATAMUser } from "@/utils/global.js";
import { useTableState } from "@/hooks/tableSection/useTableState.js";
import { useLocalization } from "@/hooks/tableSection/useLocalization.js";
import {
  getFilteredAddOns,
  getDefaultAddOns,
  MASTER_CONTAINER_STYLES,
} from "./Utils/tableHelpers.js";
import pricingService from "@/services/tableSection/pricingService.js";

// Constants
import { CHALLENGE_TYPES } from "@/constants/tableSection/tableSection.js";
import { ANIMATION_VARIANTS } from "@/constants/tableSection/styles.js";
import { ENVIRONMENT } from "@/constants/global.js";

// Main table section component for challenge selection
function TableSection({
  locale,
  translations,
  initial = CHALLENGE_TYPES.TWO_PHASE,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLATAM = isLATAMUser();

  const {
    accountAmount,
    setAccountAmount,
    challengeType,
    setChallengeType,
    selectedChallenge,
    setSelectedChallenge,
    selectedTable,
    selectedBroker,
    setSelectedBroker,
  } = useTableState(initial, isLATAM);

  const [isTableExpanded, setIsTableExpanded] = useState(false);

  // Add-ons state
  const [addOns, setAddOns] = useState(() => {
    const initialAddOns = {
      doubleLeverage: true,
      tradeOnWeekends: true,
      higherProfitShare: true,
      maxLoss: true,
      EAsAllowed: false,
      newsTrading: false,
      noMinDays: false,
    };
    return initialAddOns;
  });

  const {
    getBadgeText,
    getCTAText,
    getTrackingEventName,
    getAccountTypeTitle,
    getDescriptionText,
    getChallengeTypeTexts,
  } = useLocalization(locale, translations, isLATAM, accountAmount);

  useEffect(() => {
  }, [addOns]);

  const handleAddOnToggle = useCallback(
    (addOnKey) => {
      setAddOns((prev) => {
        const newAddOns = {
          ...prev,
          [addOnKey]: !prev[addOnKey],
        };

        // Debug pricing after state change
        setTimeout(() => {
          const filteredAddOns = getFilteredAddOns(
            newAddOns,
            challengeType,
            selectedChallenge
          );
          const newPriceData = pricingService.getCurrentPriceData(
            challengeType,
            selectedChallenge,
            accountAmount,
            isLATAM,
            filteredAddOns
          );
        }, 0);

        return newAddOns;
      });
    },
    [challengeType, selectedChallenge, accountAmount, isLATAM]
  );

  // Handle broker selection
  const handleBrokerChange = useCallback(
    (broker) => {
      setSelectedBroker(broker);
    },
    [setSelectedBroker]
  );

  // Handle table expansion toggle
  const handleTableExpandToggle = useCallback(() => {
    setIsTableExpanded((prev) => !prev);
  }, []);

  // Get current price data with add-ons support
  const filteredAddOnsForPricing = getFilteredAddOns(
    addOns,
    challengeType,
    selectedChallenge
  );

  const currentPriceData = pricingService.getCurrentPriceData(
    challengeType,
    selectedChallenge,
    accountAmount,
    isLATAM,
    filteredAddOnsForPricing
  );

  // Handle challenge selection
  const handleChallengeSelection = (type, variant = null) => {

    if (type === CHALLENGE_TYPES.ONE_PHASE) {
      setChallengeType(CHALLENGE_TYPES.ONE_PHASE);
      setSelectedChallenge(null);
    } else {
      setChallengeType(CHALLENGE_TYPES.TWO_PHASE);
      setSelectedChallenge(variant);
    }

    const defaultAddOns = getDefaultAddOns(type, variant);
    setAddOns(defaultAddOns);
    setIsTableExpanded(false);
  };

  // Handle CTA click with analytics tracking
  const handleCTAClick = () => {
    track(getTrackingEventName);
  };

  // Get current challenge URL with broker parameter and fallback
  const getCurrentChallengeUrl = () => {
    let baseUrl = selectedTable[accountAmount] || "#";

    const filteredAddOns = getFilteredAddOns(
      addOns,
      challengeType,
      selectedChallenge
    );
    const enabledAddOns = Object.entries(filteredAddOns)
      .filter(([key, enabled]) => enabled)
      .map(([key]) => key);

    if (baseUrl !== "#") {
      const url = new URL(baseUrl);

      // Add broker parameter
      url.searchParams.set("broker", selectedBroker);

      // Clear existing addon parameters
      url.searchParams.delete("addons");
      enabledAddOns.forEach((addon) => {
        url.searchParams.append("addons", addon);
      });

      baseUrl = url.toString();

      console.log("🔗 Final URL with broker and addons:", baseUrl);
    }

    return baseUrl;
  };

  return (
    <div
      className={`w-full bg-[#0B111D] md:pt-10 md:pb-20 pb-24 flex flex-col items-center ${MASTER_CONTAINER_STYLES.responsivePadding}`}
      id="challenges"
      ref={ref}
    >
      <motion.section
        className="w-full flex flex-col items-center"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col-reverse items-center justify-center mt-10 md:mt-2 mb:flex-row"
          variants={ANIMATION_VARIANTS.item}
        >
          <div className="flex flex-col items-center mt-8 mb:mt-0">
            <motion.h3
              className="text-3xl font-light text-center text-white mb:text-4xl mb:font-light"
              variants={ANIMATION_VARIANTS.item}
            >
              {getAccountTypeTitle}
            </motion.h3>
            <motion.p
              className="pt-5 text-center text-base font-light mb:font-normal mb:text-lg w-full text-[#717892] max-w-[350px] mb:max-w-[800px]"
              variants={ANIMATION_VARIANTS.item}
            >
              {getDescriptionText}
            </motion.p>
          </div>
        </motion.div>

        {/* Challenge Type Selection */}
        <motion.div
          className="w-full flex flex-col items-center"
          variants={ANIMATION_VARIANTS.item}
          id="challengeTable"
        >
          <ChallengeSelector
            challengeType={challengeType}
            selectedChallenge={selectedChallenge}
            onChallengeSelection={handleChallengeSelection}
            isLATAM={isLATAM}
            getBadgeText={getBadgeText}
            getChallengeTypeTexts={getChallengeTypeTexts}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={`challenge-content-${challengeType}-${selectedChallenge}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-full flex flex-col items-center"
            >
              {/* Account Amount Selector */}
              <div className="mt-3 w-full max-w-[1000px] mx-auto">
                <AccountAmountSelector
                  accountAmount={accountAmount}
                  setAccountAmount={setAccountAmount}
                  challengeType={challengeType}
                  isLATAM={isLATAM}
                />
              </div>

              {/* Broker Selection */}
              <div className="w-full">
                <BrokerSelector
                  selectedBroker={selectedBroker}
                  onBrokerChange={handleBrokerChange}
                />
              </div>

              <div className="mt-8 w-full">
                <TableWithAddons
                  challengeType={challengeType}
                  selectedChallenge={selectedChallenge}
                  accountAmount={accountAmount}
                  language={locale}
                  addOns={addOns}
                  onAddOnToggle={handleAddOnToggle}
                  locale={locale}
                  currentPriceData={currentPriceData}
                  onCTAClick={handleCTAClick}
                  getCTAText={getCTAText}
                  getCurrentChallengeUrl={getCurrentChallengeUrl}
                  isButtonDisabled={!selectedTable[accountAmount]}
                  isTableExpanded={isTableExpanded}
                  onTableExpandToggle={handleTableExpandToggle}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default TableSection;
