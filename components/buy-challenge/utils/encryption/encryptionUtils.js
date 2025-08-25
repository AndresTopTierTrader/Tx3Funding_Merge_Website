// Secure encryption utilities for form data storage

// Long encryption key for Base64 encoding/decoding
const ENCRYPTION_KEY = '0198a067-20df-75d3-b207-4c69961dfa43-0198a067-465e-761c-9e8b-6ce0aad2cfa4';

// Generate a random salt for additional security
const generateSalt = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Combine data with salt and timestamp for security
const prepareDataForEncryption = (data) => {
    const timestamp = new Date().toISOString();
    const salt = generateSalt();
    
    return {
        data: data,
        timestamp: timestamp,
        salt: salt,
        version: '1.0'
    };
};

// Encrypt form data using Base64 encoding with key
export const encryptFormData = (formData) => {
    try {
        // Prepare data with security metadata
        const secureData = prepareDataForEncryption(formData);
        
        // Convert to JSON string
        const jsonString = JSON.stringify(secureData);
        
        // Create a combined string with encryption key
        const combinedData = ENCRYPTION_KEY + '::' + jsonString + '::' + ENCRYPTION_KEY;
        
        // Encode to Base64
        const encodedData = btoa(combinedData);
        
        // Add additional layer of encoding
        const finalEncrypted = btoa(encodedData + '::ENCRYPTED::' + Date.now());
        
        return finalEncrypted;
    } catch (error) {
        console.error('Error encrypting form data:', error);
        return null;
    }
};

// Decrypt form data using Base64 decoding with key
export const decryptFormData = (encryptedData) => {
    try {
        if (!encryptedData) return null;
        
        // First layer of decoding
        const firstDecoded = atob(encryptedData);
        const [encodedData] = firstDecoded.split('::ENCRYPTED::');
        
        // Second layer of decoding
        const secondDecoded = atob(encodedData);
        const [keyStart, jsonString, keyEnd] = secondDecoded.split('::');
        
        // Verify encryption keys match
        if (keyStart !== ENCRYPTION_KEY || keyEnd !== ENCRYPTION_KEY) {
            console.error('Invalid encryption key detected');
            return null;
        }
        
        // Parse JSON data
        const secureData = JSON.parse(jsonString);
        
        // Verify data structure
        if (!secureData.data || !secureData.timestamp || !secureData.salt) {
            console.error('Invalid encrypted data structure');
            return null;
        }
        
        // Return the original form data
        return secureData.data;
    } catch (error) {
        console.error('Error decrypting form data:', error);
        return null;
    }
};

// Check if encrypted data exists in localStorage
export const hasEncryptedFormData = () => {
    const encryptedData = localStorage.getItem('tt_encrypted_form_data');
    return encryptedData !== null;
};

// Save encrypted form data to localStorage
export const saveEncryptedFormData = (formData) => {
    try {
        const encryptedData = encryptFormData(formData);
        if (encryptedData) {
            localStorage.setItem('tt_encrypted_form_data', encryptedData);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error saving encrypted form data:', error);
        return false;
    }
};

// Load and decrypt form data from localStorage
export const loadEncryptedFormData = () => {
    try {
        const encryptedData = localStorage.getItem('tt_encrypted_form_data');
        if (encryptedData) {
            const decryptedData = decryptFormData(encryptedData);
            if (decryptedData) {
                return decryptedData;
            }
        }
        return null;
    } catch (error) {
        console.error('Error loading encrypted form data:', error);
        return null;
    }
};

// Clear encrypted form data from localStorage
export const clearEncryptedFormData = () => {
    try {
        localStorage.removeItem('tt_encrypted_form_data');
        return true;
    } catch (error) {
        console.error('Error clearing encrypted form data:', error);
        return false;
    }
};

// Validate if form data is complete for encryption
export const isFormDataComplete = (formData) => {
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'confirmEmail',
        'phoneNumber',
        'countryCode',
        'streetAddress',
        'city',
        'stateProvince',
        'postalCode',
        'country'
    ];
    
    return requiredFields.every(field => 
        formData[field] && formData[field].toString().trim() !== ''
    );
};

// Auto-fill form with decrypted data
export const autoFillFormWithDecryptedData = () => {
    const decryptedData = loadEncryptedFormData();
    if (decryptedData && isFormDataComplete(decryptedData)) {
        return decryptedData;
    }
    return null;
};