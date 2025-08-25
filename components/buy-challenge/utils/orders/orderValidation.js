import { ORDER_ERROR_MESSAGES } from '../../data/constants';

// Validate product information
export const validateProductInfo = (productDisplayInfo) => {
  if (!productDisplayInfo?.productId || !productDisplayInfo?.variationId) {
    throw new Error(ORDER_ERROR_MESSAGES.MISSING_PRODUCT_INFO);
  }
  return true;
};

// Validate billing information
export const validateBillingData = (billingData) => {
  if (!billingData || !billingData.email || !billingData.firstName || !billingData.lastName) {
    throw new Error(ORDER_ERROR_MESSAGES.MISSING_BILLING_INFO);
  }
  return true;
};

// Validate API key
export const validateApiKey = () => {
  const apiKey = process.env.NEXT_PUBLIC_ARIZET_API_KEY;
  if (!apiKey) {
    throw new Error(ORDER_ERROR_MESSAGES.MISSING_API_KEY);
  }
  return apiKey;
};