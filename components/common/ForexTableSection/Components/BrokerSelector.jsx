"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//Logos
import ctraderlogo from "../assets/ctrader_logo.png";
import matchtraderlogo from "../assets/matchtrader_logo.png";

const BrokerSelector = React.memo(({ selectedBroker, onBrokerChange }) => {
  const getAvailableBrokers = () => {
    const brokerConfig = process.env.NEXT_PUBLIC_BROKER_CONFIG || "all";

    const allBrokers = [
      { 
        id: "matchtrader", 
        label: "Match-Trader",
        logo: matchtraderlogo 
      },
      { 
        id: "ctrader", 
        label: "CTrader",
        logo: ctraderlogo 
      },
    ];

    switch (brokerConfig) {
      case "ctrader":
        return allBrokers.filter((broker) => broker.id === "ctrader");
      case "matchtrader":
        return allBrokers.filter((broker) => broker.id === "matchtrader");
      case "all":
      default:
        return allBrokers;
    }
  };

  const availableBrokers = getAvailableBrokers();

  // Don't render if only one broker is available
  if (availableBrokers.length <= 1) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto mt-2 mb-6"
    >
      <div className="flex bg-[#0B111D] rounded-lg p-1 gap-1">
        {availableBrokers.map((broker) => (
          <button
            key={broker.id}
            onClick={() => onBrokerChange(broker.id)}
            className={`flex-1 px-4 rounded-md transition-all duration-200 flex items-center justify-center ${
              selectedBroker === broker.id
                ? "bg-gradient-to-b mx-1 md:mx-2 from-[#0052B4] to-[#167ACC]"
                : "bg-transparent border mx-1 md:mx-2 border-[#4D516A] hover:bg-[#131927]"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="relative ">
                <Image
                  src={broker.logo}
                  alt={`${broker.label} logo`}
                  className="w-28 md:w-72"
                />
              </div>

            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
});

BrokerSelector.displayName = "BrokerSelector";

export default BrokerSelector;