import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FORM_SUBMISSION_DELAY, FORM_STEPS, LOG_MESSAGES } from '../../data/constants';
import { validateStepFields, stepHasErrors } from '../../utils/form/formValidationHelpers';
import { getNextStep, getPreviousStep } from '../../utils/form/formStepHelpers';
import {
  initializeFormData,
  saveFormProgress,
  prepareFormDataForSubmission,
  getDecryptedFormData,
  updateEncryptedFormData
} from '../../utils/form/formDataManager';
import { createSubmissionDelay, extractRawPhoneNumber } from '../../utils/form/formHelpers';
import { containerVariants, headerVariants } from '../../utils/animations';
import StepIndicator from './StepIndicator';
import PersonalInfoStep from './PersonalInfoStep';
import BillingAddressStep from './BillingAddressStep';

// Billing form component with encrypted state management
function BillingForm({ productDisplayInfo, formData, setFormData, onNext }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(FORM_STEPS.PERSONAL_INFO);

  // Get decrypted form data for display (memoized for performance)
  const displayFormData = useMemo(() => {
    return getDecryptedFormData(formData);
  }, [formData]);

  // Handle input changes with encryption
  const handleInputChange = (field, value) => {
    const updatedEncryptedData = updateEncryptedFormData(formData, field, value);
    setFormData(updatedEncryptedData);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Handle phone number changes with encryption
  const handlePhoneChange = (value) => {
    // Extract raw number for storage
    const rawNumber = extractRawPhoneNumber(value);
    const updatedEncryptedData = updateEncryptedFormData(formData, 'phoneNumber', rawNumber);
    setFormData(updatedEncryptedData);

    // Clear error when user starts typing
    if (errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: '' }));
    }
  };

  // Initialize with encrypted data on component mount
  useEffect(() => {
    const initialEncryptedData = initializeFormData();
    setFormData(initialEncryptedData);
    console.log('Form initialized with encrypted state');
  }, [setFormData]);

  // Handle next step from personal info to billing address
  const handleNextStep = (e) => {
    e.preventDefault();

    const stepErrors = validateStepFields(currentStep, displayFormData);
    setErrors(stepErrors);

    if (!stepHasErrors(currentStep, displayFormData)) {
      // Try to save progress (will only encrypt if complete)
      saveFormProgress(formData);
      const nextStep = getNextStep(currentStep);
      if (nextStep) {
        setCurrentStep(nextStep);
      }
    }
  };

  // Handle going back to previous step
  const handlePreviousStep = () => {
    const previousStep = getPreviousStep(currentStep);
    if (previousStep) {
      setCurrentStep(previousStep);
      setErrors({});
    }
  };

  // Handle final form submission with encrypted data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const stepErrors = validateStepFields(currentStep, displayFormData);
    setErrors(stepErrors);

    if (!stepHasErrors(currentStep, displayFormData)) {
      setIsSubmitting(true);

      await createSubmissionDelay(FORM_SUBMISSION_DELAY);

      // Save progress and prepare data for submission
      saveFormProgress(formData);
      const finalData = prepareFormDataForSubmission(formData);

      onNext(finalData);

      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br border rounded-xl border-[#717892] from-white/5 to-[#0B111D] p-8 max-w-[1000px] mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header with Step Indicator */}
      <motion.div variants={headerVariants}>
        <StepIndicator currentStep={currentStep} />
      </motion.div>

      <AnimatePresence mode="wait" custom={currentStep}>
        {/* Step 1: Personal Information */}
        {currentStep === FORM_STEPS.PERSONAL_INFO && (
          <PersonalInfoStep
            displayFormData={displayFormData}
            errors={errors}
            onInputChange={handleInputChange}
            onPhoneChange={handlePhoneChange}
            onSubmit={handleNextStep}
          />
        )}

        {/* Step 2: Billing Address */}
        {currentStep === FORM_STEPS.BILLING_ADDRESS && (
          <BillingAddressStep
            displayFormData={displayFormData}
            errors={errors}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onPrevious={handlePreviousStep}
            isSubmitting={isSubmitting}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default BillingForm;