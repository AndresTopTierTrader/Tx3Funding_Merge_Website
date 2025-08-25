// Form data management utilities for checkout system

import {
    loadEncryptedFormData,
    saveEncryptedFormData,
    clearEncryptedFormData,
    hasEncryptedFormData,
    isFormDataComplete,
    encryptFormData,
    decryptFormData
} from '../encryption/encryptionUtils.js';

// Default form data structure
export const getDefaultFormData = () => ({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phoneNumber: '',
    countryCode: '+1-US', // Default to US
    streetAddress: '',
    streetAddress2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: ''
});

// Initialize form data with encrypted data if available (returns encrypted state)
export const initializeFormData = () => {
    const defaultData = getDefaultFormData();

    // Try to load encrypted data
    const encryptedData = loadEncryptedFormData();

    if (encryptedData && isFormDataComplete(encryptedData)) {
        // Return encrypted version for state storage
        return encryptFormData({ ...defaultData, ...encryptedData });
    }

    // Return encrypted version of default data
    return encryptFormData(defaultData);
};

// Get decrypted form data for display in inputs
export const getDecryptedFormData = (encryptedFormData) => {
    if (!encryptedFormData) return getDefaultFormData();

    const decrypted = decryptFormData(encryptedFormData);
    return decrypted || getDefaultFormData();
};

// Update encrypted form data with new field values
export const updateEncryptedFormData = (currentEncryptedData, field, value) => {
    // Decrypt current data
    const decrypted = getDecryptedFormData(currentEncryptedData);

    // Update the specific field
    const updated = { ...decrypted, [field]: value };

    // Re-encrypt and return
    return encryptFormData(updated);
};

// Save form data progress (encrypts only when complete)
export const saveFormProgress = (encryptedFormData) => {
    const decryptedData = getDecryptedFormData(encryptedFormData);

    if (isFormDataComplete(decryptedData)) {
        const saved = saveEncryptedFormData(decryptedData);
        if (saved) {
            return true;
        }
    }
    return false;
};

// Check if user has previously saved form data
export const hasSavedFormData = () => {
    return hasEncryptedFormData();
};

// Clear all saved form data
export const clearSavedFormData = () => {
    return clearEncryptedFormData();
};

// Merge new form data with existing encrypted data
export const mergeWithEncryptedData = (newFormData) => {
    const existingData = loadEncryptedFormData();

    if (existingData) {
        const merged = { ...existingData, ...newFormData };
        return encryptFormData(merged);
    }

    return encryptFormData(newFormData);
};

// Extract phone number with country code for final submission
export const getFormattedPhoneNumber = (encryptedFormData) => {
    const formData = getDecryptedFormData(encryptedFormData);

    if (formData.countryCode && formData.phoneNumber) {
        const countryCode = formData.countryCode.split('-')[0]; // Extract +1 from "+1-US"
        return `${countryCode}${formData.phoneNumber}`;
    }
    return formData.phoneNumber;
};

// Prepare form data for final submission (returns decrypted data)
export const prepareFormDataForSubmission = (encryptedFormData) => {
    const decryptedData = getDecryptedFormData(encryptedFormData);

    return {
        ...decryptedData,
        fullPhoneNumber: getFormattedPhoneNumber(encryptedFormData),
        submissionTimestamp: new Date().toISOString()
    };
};

// Validate form data completeness for different steps
export const validateStepCompletion = (encryptedFormData, step) => {
    const formData = getDecryptedFormData(encryptedFormData);
    const personalInfoFields = ['firstName', 'lastName', 'email', 'confirmEmail', 'phoneNumber'];
    const billingAddressFields = ['streetAddress', 'city', 'stateProvince', 'postalCode', 'country'];

    switch (step) {
        case 1:
            return personalInfoFields.every(field =>
                formData[field] && formData[field].toString().trim() !== ''
            );
        case 2:
            return billingAddressFields.every(field =>
                formData[field] && formData[field].toString().trim() !== ''
            );
        default:
            return false;
    }
};