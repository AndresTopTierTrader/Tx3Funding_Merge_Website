import { VALIDATION_PATTERNS, ERROR_MESSAGES, FORM_FIELDS } from '../../data/constants.js';

// Get required fields from FORM_FIELDS configuration
const getRequiredFields = () => {
  return Object.keys(FORM_FIELDS).filter(field => FORM_FIELDS[field].required);
};

// Validate email format using regex pattern
export const validateEmail = (email) => {
    return VALIDATION_PATTERNS.EMAIL.test(email);
};

// Format phone number for display (XXX) XXX-XXXX
export const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    if (cleaned.length < 10) {
        return cleaned;
    }
    
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    
    return cleaned;
};

// Extract raw phone number (remove formatting)
export const extractRawPhoneNumber = (formattedNumber) => {
    return formattedNumber.replace(/\D/g, '');
};

// Validate phone number length (must be exactly 10 digits)
export const validatePhoneNumber = (phoneNumber) => {
    const cleaned = extractRawPhoneNumber(phoneNumber);
    return cleaned.length === 10;
};

// Validate all form fields and return errors object
export const validateForm = (formData) => {
    const newErrors = {};
    const requiredFields = getRequiredFields();
    
    // Check required fields
    requiredFields.forEach(field => {
        if (!formData[field] || !formData[field].toString().trim()) {
            newErrors[field] = ERROR_MESSAGES.REQUIRED[field] || `${field} is required`;
        }
    });
    
    // Email format validation
    if (formData.email && !validateEmail(formData.email)) {
        newErrors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }
    
    // Email confirmation validation
    if (formData.email && formData.confirmEmail && formData.email !== formData.confirmEmail) {
        newErrors.confirmEmail = ERROR_MESSAGES.EMAIL_MISMATCH;
    }
    
    // Phone number validation
    if (formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }
    
    return newErrors;
};

// Check if form has validation errors
export const hasValidationErrors = (errors) => {
    return Object.keys(errors).length > 0;
};

// Create input change handler
export const createInputChangeHandler = (setFormData, errors, setErrors) => {
    return (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
};

// Create phone number input handler with formatting
export const createPhoneInputHandler = (setFormData, errors, setErrors) => {
    return (value) => {
        const rawNumber = extractRawPhoneNumber(value);
        setFormData(prev => ({ ...prev, phoneNumber: rawNumber }));
        
        if (errors.phoneNumber) {
            setErrors(prev => ({ ...prev, phoneNumber: '' }));
        }
    };
};

// Create form submission delay promise
export const createSubmissionDelay = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
};