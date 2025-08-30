"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  getFilteredAddOns,
  formatChallengeTitle,
  calculateAddonPrice,
  MASTER_VISUAL_STYLES,
} from "../Utils/tableHelpers.js";
import { ANIMATION_VARIANTS } from "@/constants/tableSection/styles.js";
import CustomToggle from "./CustomToggle.jsx";


const LoadingSpinner = () => (
  <motion.div
    className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const AddOnsToggleBox = React.memo(
  ({
    addOns,
    onToggle,
    locale,
    challengeType,
    selectedChallenge,
    accountAmount,
    currentPriceData,
    onCTAClick,
    getCTAText,
    getCurrentChallengeUrl,
    isButtonDisabled,
  }) => {
    const addOnLabels = {
      doubleLeverage: {
        en: "Double Leverage",
        es: "Doble Apalancamiento",
        fr: "Double Levier",
      },
      tradeOnWeekends: {
        en: "Weekend Trading",
        es: "Trading de Fin de Semana",
        fr: "Trading de Weekend",
      },
      higherProfitShare: {
        en: "90/10 Profit Split",
        es: "División de ganancias 90/10",
        fr: "Répartition Profit 90/10",
      },
      maxLoss: {
        en: "8% Hybrid Max Loss / Profit Target",
        es: "8% Híbrida Pérdida Máx / Profit Target",
        fr: "8% Híbrida Perte Max Hybride/Objectif Profit",
      },
      EAsAllowed: {
        en: "EAs Allowed",
        es: "EAs Permitidos",
        fr: "EAs Autorisés",
      },
      newsTrading: {
        en: "News Trading",
        es: "Trading de Noticias",
        fr: "Trading sur Actualités",
      },
      noMinDays: {
        en: "No Min. Trading Days",
        es: "Sin Días Mín. de Trading",
        fr: "Pas de Jours Min. de Trading",
      },
    };

    const lang = locale?.split("-")[0] || "en";

    const [isLoading, setIsLoading] = useState(false);

     // Handle CTA click with loading state
     const handleCTAClick = async (e) => {
      setIsLoading(true);
      
      try {
        if (onCTAClick) {
          await onCTAClick(e);
        }
      } catch (error) {
        console.error("CTA click error:", error);
      }
      
      // Reset loading state after a short delay to allow navigation
      setTimeout(() => {
        setIsLoading(false);
      }, 6000);
    };


    // Get filtered addons for current challenge
    const filteredAddOns = getFilteredAddOns(
      addOns,
      challengeType,
      selectedChallenge
    );

    const availableAddonsCount = Object.keys(filteredAddOns).length;

    if (availableAddonsCount === 0) {
      return null;
    }

    // Dynamic display
    const challengeTitle = formatChallengeTitle(
      accountAmount,
      challengeType,
      selectedChallenge
    );
    const basePrice = currentPriceData.basePrice || "$0.00";
    const addonPrice = calculateAddonPrice(currentPriceData);
    const totalPrice = currentPriceData.price || "$0.00";

    return (
      <div
        className={`w-full mt-6 ${MASTER_VISUAL_STYLES.padding}`}
        style={{
          border: MASTER_VISUAL_STYLES.border,
          borderRadius: MASTER_VISUAL_STYLES.borderRadius,
          background: MASTER_VISUAL_STYLES.background,
        }}
      >
        <div className=" p-0">
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 29"
              fill="none"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                d="M0 0H27.6393V2.76393H24.8754V27.7499L22.6297 25.9533L20.0855 23.9191L17.8467 25.9091L16.9291 26.7245L16.0115 25.9091L13.8197 23.9591L11.6279 25.9077L10.7102 26.7231L9.79261 25.9077L7.55383 23.9177L5.00963 25.9533L2.76393 27.7499V2.76393H0V0ZM5.52786 2.76393V22.0009L6.73708 21.0335L7.6478 20.3038L8.51844 21.0777L10.7102 23.0263L12.902 21.0777L13.8197 20.2624L14.7373 21.0777L16.9291 23.0263L19.1209 21.0777L19.9915 20.3038L20.9022 21.0321L22.1115 21.9995V2.76393H5.52786ZM8.2918 6.90983H19.3475V9.67376H8.2918V6.90983ZM11.0557 12.4377H9.67376V15.2016H17.9656V12.4377H11.0557Z"
                fill="white"
              />
            </svg>
            <h2 className="text-textPrimary text-lg md:text-xl font-medium ml-2">
              Summary
            </h2>
          </div>

          <div className="mb-6 ">
            <div className="flex items-start mb-4">
              <div
                className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full text-textPrimary text-xs md:text-sm font-medium mr-3"
                style={{
                  background:
                    "linear-gradient(153deg, #1151B2 16.88%, #07234C 160.59%)",
                }}
              >
                1
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-textPrimary text-lg md:text-xl font-normal">
                    {challengeTitle}
                  </h3>
                  <span className="text-[#939BB5] text-lg md:text-xl font-normal">
                    {basePrice}
                  </span>
                </div>
                {/* Only show addon pricing if there are enabled addons */}
                {addonPrice !== "$0.00" && (
                  <div className="flex justify-between items-center -mt-2 ml-1">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="35"
                        viewBox="0 0 36 35"
                        fill="none"
                        className="w-6 h-6 md:w-8 md:h-8"
                      >
                        <path
                          d="M32.076 20.2674L31.8252 20.8443C31.786 20.9383 31.7199 21.0185 31.6352 21.075C31.5505 21.1315 31.4509 21.1616 31.3491 21.1616C31.2473 21.1616 31.1478 21.1315 31.0631 21.075C30.9784 21.0185 30.9123 20.9383 30.8731 20.8443L30.6223 20.2674C30.1814 19.2467 29.3739 18.4283 28.3592 17.9737L27.5855 17.6281C27.4917 17.585 27.4121 17.5158 27.3564 17.4288C27.3007 17.3418 27.271 17.2406 27.271 17.1373C27.271 17.034 27.3007 16.9328 27.3564 16.8458C27.4121 16.7588 27.4917 16.6896 27.5855 16.6465L28.3164 16.3213C29.3566 15.8538 30.1779 15.0051 30.6111 13.9502L30.869 13.3273C30.9069 13.2308 30.9729 13.148 31.0586 13.0896C31.1442 13.0312 31.2455 13 31.3491 13C31.4528 13 31.554 13.0312 31.6397 13.0896C31.7253 13.148 31.7914 13.2308 31.8293 13.3273L32.0872 13.9491C32.5199 15.0043 33.3408 15.8533 34.3808 16.3213L35.1127 16.6475C35.2063 16.6908 35.2856 16.76 35.3411 16.8468C35.3966 16.9337 35.4261 17.0347 35.4261 17.1378C35.4261 17.2409 35.3966 17.3419 35.3411 17.4288C35.2856 17.5157 35.2063 17.5848 35.1127 17.6281L34.338 17.9727C33.3235 18.4277 32.5164 19.2465 32.076 20.2674ZM23.194 16.0593C21.5395 16.0595 19.9242 16.563 18.5626 17.5028C17.201 18.4426 16.1575 19.7744 15.5705 21.3212C14.9835 22.8681 14.8809 24.5569 15.2763 26.1634C15.6717 27.7699 16.5464 29.2182 17.7842 30.3159C19.022 31.4137 20.5645 32.109 22.2067 32.3095C23.849 32.51 25.5134 32.2063 26.979 31.4387C28.4446 30.6711 29.6421 29.4758 30.4124 28.0116C31.1828 26.5474 31.4895 24.8836 31.292 23.2409L33.3166 23.0004C33.3641 23.3993 33.3879 23.804 33.3879 24.2145C33.3879 29.8446 28.8241 34.4084 23.194 34.4084C17.5638 34.4084 13 29.8446 13 24.2145C13 18.5843 17.5638 14.0205 23.194 14.0205C24.0717 14.0205 24.9259 14.1326 25.7404 14.3416L25.2328 16.3162C24.5667 16.1449 23.8817 16.0586 23.194 16.0593ZM24.2134 23.1951H27.2715L22.1746 30.3308V25.2339H19.1164L24.2134 18.0981V23.1951Z"
                          fill="#FF532D"
                        />
                        <path
                          d="M1.5 0V24.5H15"
                          stroke="#FF532D"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="text-[#939BB5] text-sm md:text-base mt-3 ml-2">
                        Add Ons Pack
                      </span>
                    </div>
                    <span className="text-[#939BB5] text-lg md:text-xl font-normal mt-3 min-w-[60px] text-right">
                      {addonPrice}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Add Ons section */}
          <div className="flex items-center  mb-4">
            <div
              className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full text-textPrimary text-xs md:text-sm font-medium mr-3"
              style={{
                background:
                  "linear-gradient(153deg, #1151B2 16.88%, #07234C 160.59%)",
              }}
            >
              2
            </div>
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                className="w-4 h-4 md:w-5 md:h-5 mr-2"
              >
                <path
                  d="M23.1673 8.82603L22.8627 9.52675C22.8151 9.64086 22.7348 9.73833 22.632 9.80689C22.5291 9.87544 22.4082 9.91203 22.2846 9.91203C22.1609 9.91203 22.0401 9.87544 21.9372 9.80689C21.8343 9.73833 21.754 9.64086 21.7064 9.52675L21.4019 8.82603C20.8664 7.58641 19.8857 6.59252 18.6534 6.04046L17.7138 5.62076C17.5998 5.56832 17.5032 5.48429 17.4355 5.37864C17.3678 5.27298 17.3318 5.15013 17.3318 5.02465C17.3318 4.89917 17.3678 4.77632 17.4355 4.67066C17.5032 4.56501 17.5998 4.48098 17.7138 4.42854L18.6014 4.03361C19.8647 3.46582 20.8621 2.43516 21.3882 1.15395L21.7015 0.397509C21.7475 0.280334 21.8277 0.179736 21.9317 0.108831C22.0357 0.0379248 22.1587 0 22.2846 0C22.4104 0 22.5334 0.0379248 22.6374 0.108831C22.7414 0.179736 22.8217 0.280334 22.8677 0.397509L23.1809 1.15271C23.7064 2.43416 24.7034 3.46527 25.9665 4.03361L26.8554 4.42978C26.969 4.48237 27.0653 4.56638 27.1327 4.6719C27.2001 4.77742 27.236 4.90004 27.236 5.02527C27.236 5.1505 27.2001 5.27312 27.1327 5.37864C27.0653 5.48416 26.969 5.56817 26.8554 5.62076L25.9145 6.03922C24.6824 6.59183 23.7022 7.58617 23.1673 8.82603ZM12.3803 3.71543C10.371 3.71574 8.40931 4.32717 6.75567 5.46856C5.10202 6.60996 3.83465 8.22732 3.1218 10.1059C2.40895 11.9845 2.28435 14.0355 2.76454 15.9866C3.24473 17.9377 4.30699 19.6966 5.8103 21.0298C7.31361 22.363 9.18685 23.2074 11.1813 23.4509C13.1758 23.6945 15.1972 23.3256 16.9772 22.3933C18.7571 21.4611 20.2114 20.0094 21.147 18.2312C22.0825 16.453 22.4551 14.4323 22.2152 12.4374L24.674 12.1452C24.7317 12.6297 24.7606 13.1212 24.7606 13.6197C24.7606 20.4573 19.218 26 12.3803 26C5.54267 26 0 20.4573 0 13.6197C0 6.78204 5.54267 1.23937 12.3803 1.23937C13.4463 1.23937 14.4837 1.37555 15.4729 1.62935L14.8564 4.02742C14.0475 3.81944 13.2155 3.71461 12.3803 3.71543ZM13.6183 12.3817H17.3324L11.1423 21.0479V14.8577H7.42819L13.6183 6.1915V12.3817Z"
                  fill="#FF532D"
                />
              </svg>
              <h3 className="text-textPrimary text-lg md:text-xl font-medium">
                Add Ons
              </h3>
            </div>
          </div>

          {/* Add Ons selector */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
            <div className="flex-1 bg-[#4D516A]/20 rounded-xl border border-[#4D516A] px-3 py-4 md:px-6 md:py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

                {Object.entries(filteredAddOns).map(([key, isEnabled]) => {
                  return (
                    <div
                      key={key}
                      className="flex md:max-w-[260px] items-center justify-between"
                    >
                      <span className="text-gray-300 text-sm pr-1 ">
                        {addOnLabels[key]?.[lang] ||
                          addOnLabels[key]?.en ||
                          key}
                      </span>

                      <CustomToggle
                        isEnabled={isEnabled}
                        onToggle={() => {
                          onToggle(key);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Section */}
            <div className="flex flex-col justify-end min-w-[100px] lg:min-w-[120px] mt-4 ">
              <div className="text-right">
                <div className="text-textPrimary text-sm md:text-base mb-1 md:mb-2">
                  Total
                </div>
                <div className="text-green-400 text-4xl md:text-4xl font-medium min-w-[120px] md:min-w-[160px] text-right">
                  {totalPrice}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col items-center w-full mt-6 md:mt-8"
            variants={ANIMATION_VARIANTS.item}
          >
            <div className="flex flex-col items-center w-full">
              <Link href={getCurrentChallengeUrl()}>
                <motion.button
                  className={`z-20 flex flex-row mt-3 w-full md:mt-0 items-center text-base text-textPrimary rounded-lg transition-all py-2.5 px-4 justify-center min-w-[180px] md:min-w-[200px] ${isLoading || isButtonDisabled
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-[#FF532D] hover:bg-orange-700'
                    }`}
                  variants={ANIMATION_VARIANTS.button}
                  whileHover={!isLoading && !isButtonDisabled ? "hover" : undefined}
                  whileTap={!isLoading && !isButtonDisabled ? { scale: 0.95 } : undefined}
                  disabled={isButtonDisabled || isLoading}
                  onClick={handleCTAClick}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner />
                      <span className="ml-2">Processing...</span>
                    </>
                  ) : (
                    <>
                      {getCTAText}
                      <FaArrowRight className="w-3 h-3 ml-2" />
                    </>
                  )}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);


AddOnsToggleBox.displayName = "AddOnsToggleBox";

export default AddOnsToggleBox;
