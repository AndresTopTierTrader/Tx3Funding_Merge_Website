import { validateForm, hasValidationErrors } from './formHelpers';
import { FORM_STEP_CONFIG } from '../../data/constants';

// Validate fields for a specific step
export const validateStepFields = (stepNumber, formData) => {
  const stepConfig = FORM_STEP_CONFIG[stepNumber];
  if (!stepConfig) return {};

  // Extract only the fields for this step
  const stepFormData = {};
  stepConfig.fields.forEach(field => {
    stepFormData[field] = formData[field];
  });

  // Run validation on step-specific data
  const validationErrors = validateForm(stepFormData);
  
  // Return only errors for fields in this step
  const stepErrors = {};
  stepConfig.fields.forEach(field => {
    if (validationErrors[field]) {
      stepErrors[field] = validationErrors[field];
    }
  });

  return stepErrors;
};

// Check if step has validation errors
export const stepHasErrors = (stepNumber, formData) => {
  const stepErrors = validateStepFields(stepNumber, formData);
  return hasValidationErrors(stepErrors);
};

// Get all fields that need validation for a step
export const getStepRequiredFields = (stepNumber) => {
  const stepConfig = FORM_STEP_CONFIG[stepNumber];
  return stepConfig ? stepConfig.fields : [];
};

// Check if all required fields in step are filled
export const isStepComplete = (stepNumber, formData) => {
  const stepConfig = FORM_STEP_CONFIG[stepNumber];
  if (!stepConfig) return false;

  return stepConfig.fields.every(field => {
    // Check if field has a value (skip optional fields like streetAddress2)
    const isRequired = field !== 'streetAddress2';
    return !isRequired || (formData[field] && formData[field].toString().trim() !== '');
  });
};