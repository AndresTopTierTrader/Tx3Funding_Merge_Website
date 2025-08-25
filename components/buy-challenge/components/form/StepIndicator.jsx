import React from 'react';
import { motion } from 'framer-motion';
import { getStepConfig, getTotalSteps } from '../../utils/form/formStepHelpers';
import { stepIndicatorVariants, progressBarVariants } from '../../utils/animations';

// Step indicator component showing current progress
function StepIndicator({ currentStep }) {
  const totalSteps = getTotalSteps();
  const currentStepConfig = getStepConfig(currentStep);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-medium text-white mb-6">
        {currentStepConfig?.title}
      </h2>
      <p className="text-slate-400 text-lg">
        {currentStepConfig?.description}
      </p>

      {/* Step Progress Indicator */}
      <div className="flex items-center mt-6 space-x-4">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <React.Fragment key={stepNumber}>
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium"
                variants={stepIndicatorVariants}
                animate={isActive ? "active" : isCompleted ? "completed" : "inactive"}
                style={{
                  backgroundColor: isActive || isCompleted ? "#45D1FF" : "#717892",
                  color: isActive || isCompleted ? "black" : "#94a3b8"
                }}
              >
                {stepNumber}
              </motion.div>
              
              {/* Progress line between steps */}
              {index < totalSteps - 1 && (
                <motion.div
                  className="h-0.5 w-12 origin-left"
                  variants={progressBarVariants}
                  initial="initial"
                  animate={isCompleted ? "complete" : "initial"}
                  style={{ 
                    backgroundColor: isCompleted ? "#45D1FF" : "#717892" 
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default StepIndicator;