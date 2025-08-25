import { ORDER_API, ORDER_ERROR_MESSAGES } from '../data/constants';
import { getCountryCode } from '../utils/orders/countryMapping';
import { validateProductInfo, validateBillingData, validateApiKey } from '../utils/orders/orderValidation';
import { encryptFormData } from '../utils/encryption/encryptionUtils';
import { ENVIRONMENT } from '@/constants/global';

// Build order payload with encrypted billing data for PII compliance
const buildOrderPayload = (productDisplayInfo, billingData, discountCode) => {
  const countryCode = getCountryCode(billingData.country);

  // Prepare billing data for encryption
  const sensitiveData = {
    first_name: billingData.firstName,
    last_name: billingData.lastName,
    address_1: billingData.streetAddress,
    address_2: billingData.streetAddress2 || '',
    city: billingData.city,
    state: billingData.stateProvince,
    postcode: billingData.postalCode,
    country: countryCode,
    phone: `${billingData.countryCode}${billingData.phoneNumber}`,
    email: billingData.email
  };

  // Encrypt the sensitive billing information
  const encryptedBillingInfo = encryptFormData(sensitiveData);

  if (!encryptedBillingInfo) {
    console.error('❌ Failed to encrypt billing data');
    throw new Error('Failed to encrypt sensitive billing information');
  }

  // Build the payload with optional discount code
  const payload = {
    productId: parseInt(productDisplayInfo.productId),
    variationId: parseInt(productDisplayInfo.variationId),
    discountCode: discountCode,
    encryptedBillingInfo: encryptedBillingInfo,
    // Include a flag to indicate this payload contains encrypted data
    dataEncrypted: true,
    encryptionVersion: '1.0'
  };

  // Only include discountCode if it exists
  if (productDisplayInfo.discountCode) {
    payload.discountCode = productDisplayInfo.discountCode;
  }

  return payload;
};

// Create order via API with encrypted billing data
export const createOrder = async (productDisplayInfo, billingData, discountCode) => {
  // Validate all required data
  validateProductInfo(productDisplayInfo);
  validateBillingData(billingData);
  const apiKey = validateApiKey();

  // Build the order payload with encrypted billing data
  const orderPayload = buildOrderPayload(productDisplayInfo, billingData, discountCode);

  // Make the API request
  const response = await fetch(ORDER_API.ENDPOINT, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      ...ORDER_API.HEADERS
    },
    body: JSON.stringify(orderPayload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ API Error Response:', errorText);
    throw new Error(`API request failed with status ${response.status}: ${errorText}`);
  }

  const orderResult = await response.json();

  // Validate new response structure
  if (!orderResult.status || !orderResult.payment_url || !orderResult.order_id) {
    console.error('❌ Invalid order response structure:', orderResult);
    throw new Error(ORDER_ERROR_MESSAGES.INVALID_RESPONSE || 'Invalid response structure: missing required fields');
  }

  return orderResult;
};


// Utility function to redirect to payment URL
export const redirectToPayment = (paymentUrl) => {
  if (!paymentUrl) {
    console.error('❌ No payment URL provided for redirect');
    throw new Error('Payment URL is required for redirect');
  }

  window.location.href = paymentUrl;
};
