"use client";

import React from "react";
import OnePhaseTable from "./OnePhaseChallenge/OnePhaseTable.jsx";
import ProTable from "./TwoPhaseChallenge/ProTable.jsx";
import FlexTable from "./TwoPhaseChallenge/FlexTable.jsx";
import ShowMoreButton from "./ShowMoreButton.jsx";
import AddOnsToggleBox from "./AddOnsToggleBox.jsx";
import { CHALLENGE_TYPES, TWO_PHASE_VARIANTS } from "@/constants/tableSection/tableSection.js";
import { MASTER_CONTAINER_STYLES } from "../Utils/tableHelpers.js";

const TableWithAddons = ({
  challengeType,
  selectedChallenge,
  accountAmount,
  addOns,
  onAddOnToggle,
  locale,
  currentPriceData,
  onCTAClick,
  getCTAText,
  getCurrentChallengeUrl,
  isButtonDisabled,
  isTableExpanded,
  onTableExpandToggle,
}) => {
  return (
    <div className={MASTER_CONTAINER_STYLES.mainWrapper}>
      <div 
        className={`${MASTER_CONTAINER_STYLES.childContainer}  flex flex-col items-center justify-center space-y-0`}
        style={{
          width: '100%',
          maxWidth: 'none',
        }}
      >
        
        {/* Table Section */}
        <div 
          className={MASTER_CONTAINER_STYLES.childContainer}
          style={{
            width: '100%',
            maxWidth: 'none',
          }}
        >
          {challengeType === CHALLENGE_TYPES.ONE_PHASE && (
            <OnePhaseTable
              accountAmount={accountAmount}
              language={locale}
              addOns={addOns}
              showOnlyTwoRows={!isTableExpanded}
            />
          )}
          {challengeType === CHALLENGE_TYPES.TWO_PHASE &&
            selectedChallenge === TWO_PHASE_VARIANTS.PRO && (
              <ProTable
                accountAmount={accountAmount}
                language={locale}
                addOns={addOns}
                showOnlyTwoRows={!isTableExpanded}
              />
            )}
          {challengeType === CHALLENGE_TYPES.TWO_PHASE &&
            selectedChallenge === TWO_PHASE_VARIANTS.FLEX && (
              <FlexTable
                accountAmount={accountAmount}
                language={locale}
                addOns={addOns}
                showOnlyTwoRows={!isTableExpanded}
              />
            )}
        </div>

        {/* Show More Button */}
        <div 
          className={MASTER_CONTAINER_STYLES.childContainer}
          style={{
            width: '100%',
            maxWidth: 'none',
          }}
        >
          <ShowMoreButton
            isExpanded={isTableExpanded}
            onToggle={onTableExpandToggle}
            locale={locale}
          />
        </div>

        {/* Addons Section */}
        <div 
          className={MASTER_CONTAINER_STYLES.childContainer}
          style={{
            width: '100%',
            maxWidth: 'none',
          }}
        >
          <AddOnsToggleBox
            addOns={addOns}
            onToggle={onAddOnToggle}
            locale={locale}
            challengeType={challengeType}
            selectedChallenge={selectedChallenge}
            accountAmount={accountAmount}
            currentPriceData={currentPriceData}
            onCTAClick={onCTAClick}
            getCTAText={getCTAText}
            getCurrentChallengeUrl={getCurrentChallengeUrl}
            isButtonDisabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default TableWithAddons;