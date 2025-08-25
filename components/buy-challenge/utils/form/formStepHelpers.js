import { FORM_STEPS, FORM_STEP_CONFIG } from '../../data/constants';

// Get configuration for a specific step
export const getStepConfig = (stepNumber) => {
  return FORM_STEP_CONFIG[stepNumber] || null;
};

// Check if step is valid
export const isValidStep = (stepNumber) => {
  return Object.values(FORM_STEPS).includes(stepNumber);
};

// Get next step number
export const getNextStep = (currentStep) => {
  const steps = Object.values(FORM_STEPS);
  const currentIndex = steps.indexOf(currentStep);
  return currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;
};

// Get previous step number
export const getPreviousStep = (currentStep) => {
  const steps = Object.values(FORM_STEPS);
  const currentIndex = steps.indexOf(currentStep);
  return currentIndex > 0 ? steps[currentIndex - 1] : null;
};

// Check if step is the first step
export const isFirstStep = (stepNumber) => {
  return stepNumber === FORM_STEPS.PERSONAL_INFO;
};

// Check if step is the last step
export const isLastStep = (stepNumber) => {
  return stepNumber === FORM_STEPS.BILLING_ADDRESS;
};

// Get total number of steps
export const getTotalSteps = () => {
  return Object.keys(FORM_STEPS).length;
};

// Calculate step progress percentage
export const getStepProgress = (currentStep) => {
  const steps = Object.values(FORM_STEPS);
  const currentIndex = steps.indexOf(currentStep);
  return ((currentIndex + 1) / steps.length) * 100;
};