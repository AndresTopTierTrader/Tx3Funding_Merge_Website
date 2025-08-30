"use client";

import React, { useEffect } from "react";
import { CHALLENGE_TYPES } from "@/constants/tableSection/tableSection.js";

const AccountAmountSelector = ({
  accountAmount,
  setAccountAmount,
  challengeType,
  isLATAM,
}) => {
  const selectStyles = {
    unselected:
      "bg-[#181D28] border border-[#4D516A] text-textPrimary hover:cursor-pointer hover:bg-[#131927] transition-all duration-200 rounded-lg",
    selected:
      "bg-gradient-to-b from-[#0052B4] to-[#167ACC] text-textPrimary font-semibold hover:cursor-pointer transition-all duration-200 rounded-lg",
  };

  // Get available account amounts based on challenge type and region
  const getAvailableAmounts = () => {
    if (challengeType === CHALLENGE_TYPES.ONE_PHASE) {
      const baseAmounts = ["5K", "10K", "25K", "50K", "100K", "200K"];
      return isLATAM ? ["2.5K", ...baseAmounts] : baseAmounts;
    } else {
      const baseAmounts = ["5K", "10K", "25K", "50K", "100K", "200K", "300K"];
      return isLATAM ? ["2.5K", ...baseAmounts] : baseAmounts;
    }
  };

  const availableAmounts = getAvailableAmounts();

  useEffect(() => {
    if (!availableAmounts.includes(accountAmount)) {
      setAccountAmount(availableAmounts[0]);
    }
  }, [
    challengeType,
    isLATAM,
    accountAmount,
    setAccountAmount,
    availableAmounts,
  ]);

  return (
    <div
      className="flex flex-col items-center mx-auto w-full"
      style={{
        width: "100%",
        maxWidth: "none",
      }}
    >
      <div
        className="w-full"
        style={{
          width: "100%",
          maxWidth: "none",
        }}
      >
        <div
          className="bg-[#0B111D] p-3 sm:p-4 rounded-xl w-full"
          style={{
            width: "100%",
            maxWidth: "none",
          }}
        >
          {/* Mobile Layout */}
          <div
            className="grid grid-cols-3 sm:hidden gap-2 w-full"
            style={{
              width: "100%",
            }}
          >
            {availableAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setAccountAmount(amount)}
                className={`${accountAmount === amount
                  ? selectStyles.selected
                  : selectStyles.unselected
                  } px-2 py-3 text-sm font-medium w-full h-[48px] flex items-center justify-center min-w-0`}
                style={{
                  width: "100%",
                }}
              >
                <span className="truncate">{amount}</span>
              </button>
            ))}
          </div>

          {/* Tablet and Desktop Layout */}
          <div className="flex flex-col items-center ">
            <div
              className="hidden  md:flex flex-row items-center md:max-w-[900px] w-full gap-2"

            >
              {availableAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setAccountAmount(amount)}
                  className={`${accountAmount === amount
                    ? selectStyles.selected
                    : selectStyles.unselected
                    } py-3 md:py-4 
        text-xs  md:text-base 
        font-medium h-[48px] md:h-[56px] flex items-center justify-center`}
                  style={{
                    width: "100%",
                    minWidth: "0",
                    maxWidth: "none",
                    boxSizing: "border-box",
                  }}
                >
                  <span className="truncate text-center w-full">{amount}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountAmountSelector;