import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentStep, totalSteps = 7 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
  };

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center w-full max-w-3xl px-4 sm:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center mb-4 sm:mb-0">
          <motion.div
            variants={itemVariants}
            className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-bold ${
              index === 0
                ? 'bg-[#111F45] text-white'
                : index < currentStep
                ? 'bg-[#111F45] text-white'
                : 'bg-[#D7E0FF] text-gray-600'
            }`}
            animate={index < currentStep ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {index === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            ) : (
              index 
            )}
          </motion.div>
          {index < totalSteps - 1 && (
            <motion.div
              variants={lineVariants}
              className={`h-1 w-6 sm:w-12 origin-left ${
                index < currentStep - 1 ? 'bg-[#111F45]' : 'bg-[#D7E0FF]'
              }`}
              animate={index === currentStep - 2 ? { scaleX: [0, 1] } : {}}
              transition={{ duration: 0.3 }}
            ></motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default ProgressBar;