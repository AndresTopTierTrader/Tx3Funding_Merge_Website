"use client";

import { SectionLayout } from "@/components/common/SectionLayout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CheckIcon = ({ isFirstCard }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
    <path d="M9 12l2 2l4 -4" />
  </svg>
);

export function WhichIsForYou({ translations }) {
  const [account, setAccount] = useState("flex");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible on mount to trigger animations
    setIsVisible(true);
  }, []);

  const cards = {
    flex: [
      {
        phase: translations.phase_1,
        profitTarget: translations.profit_target_1,
        description: translations.p2,
        bulletPoints: [translations.p3, translations.p4, translations.p5],
      },
      {
        phase: translations.phase_2,
        profitTarget: translations.profit_target_2,
        description: translations.p6,
        bulletPoints: [translations.p7, translations.p8, translations.p9],
      },
    ],

    pro: [
      {
        phase: translations.phase_1,
        profitTarget: translations.profit_target_3,
        description: translations.p2,
        bulletPoints: [translations.p3, translations.p4, translations.p5],
      },
      {
        phase: translations.phase_2,
        profitTarget: translations.profit_target_2,
        description: translations.p6,
        bulletPoints: [translations.p7, translations.p8, translations.p9],
      },
    ],
  };

  // Animation variants
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const tabsAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const cardsContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <SectionLayout padding>
      <motion.h2
        className="text-center mx-auto text-2xl md:text-4xl text-white"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={titleAnimation}
      >
        {translations.t1_1}{" "}
        <span className="bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent">
          {translations.t1_2}
        </span>{" "}
        {translations.t1_3}
      </motion.h2>

      <motion.span
        className="grid grid-cols-2 max-w-4xl mx-auto mt-16"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={tabsAnimation}
      >
        <button
          onClick={() => setAccount("flex")}
          className={`text-xl md:text-2xl text-center w-full pb-4 relative ${
            account === "flex"
              ? "font-semibold bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent"
              : "border-b border-[#717892] font-light text-white"
          }`}
        >
          {translations.flex}
          {account === "flex" && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#45D1FF]"
              layoutId="activeTab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </button>

        <button
          onClick={() => setAccount("pro")}
          className={`text-xl md:text-2xl text-center w-full pb-4 relative ${
            account === "pro"
              ? "font-semibold bg-gradient-to-br from-[#0052B4] to-[#45D1FF] bg-clip-text text-transparent"
              : "border-b border-[#717892] font-light text-white"
          }`}
        >
          {translations.pro}
          {account === "pro" && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#45D1FF]"
              layoutId="activeTab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      </motion.span>

      <AnimatePresence mode="wait">
        <motion.div
          key={account}
          className="flex items-center gap-8 justify-center flex-wrap mt-12"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={cardsContainerAnimation}
        >
          {cards[account].map(
            ({ phase, profitTarget, description, bulletPoints }, index) => (
              <AnimatedCard
                key={`${account}-${phase}`}
                phase={phase}
                profitTarget={profitTarget}
                description={description}
                bulletPoints={bulletPoints}
                index={index}
                isFirst={index === 0}
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
    </SectionLayout>
  );
}

function AnimatedCard({
  phase,
  profitTarget,
  description,
  bulletPoints,
  index,
  isFirst,
}) {
  const cardAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2 + index * 0.2,
      },
    },
  };

  const headerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4 + index * 0.2,
      },
    },
  };

  const descriptionAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.6 + index * 0.2,
      },
    },
  };

  const listAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8 + index * 0.2,
      },
    },
  };

  const listItemAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const iconAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="max-w-md rounded-lg bg-gradient-to-br from-[#717892]/10 to-transparent p-6 flex flex-col gap-8 min-h-[407px] border border-[#717892]"
      variants={cardAnimation}
    >
      <motion.span
        className="flex items-center justify-between"
        variants={headerAnimation}
      >
        <motion.p
          className={`px-4 py-2 rounded-lg text-white bg-[#0B111D]/70 border-2 ${
            isFirst ? "border-[#FF532D]" : "border-[#45D1FF]"
          }`}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {phase}
        </motion.p>
        <p className="text-white">{profitTarget}</p>
      </motion.span>

      <motion.p className="min-h-[72px]" variants={descriptionAnimation}>
        {description}
      </motion.p>

      <motion.ul
        className="pt-6 border-t border-[#717892] flex flex-col gap-4"
        variants={listAnimation}
      >
        {bulletPoints.map((bullet) => (
          <motion.li
            key={bullet}
            className="flex gap-4"
            variants={listItemAnimation}
          >
            <motion.span
              className={`aspect-square w-[24px] -mb-2 ${
                isFirst ? "text-[#FF532D]" : "text-[#45D1FF]"
              }`}
              variants={iconAnimation}
            >
              <CheckIcon />
            </motion.span>

            {bullet}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
