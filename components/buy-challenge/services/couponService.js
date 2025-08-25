import { COUPON_CONFIG, COUPON_API } from '../data/constants';
import { validateApiKey } from '../utils/orders/orderValidation';

// Validate coupon code format
export const isValidCouponFormat = (couponCode) => {
  return couponCode && couponCode.trim().length > 0;
};

// Validate coupon data from server response
const validateCouponData = (couponData) => {
  if (!couponData || typeof couponData !== 'object') {
    throw new Error('Invalid coupon data structure');
  }

  const required = ['code', 'discountPct', 'validFrom', 'validTo'];
  for (const field of required) {
    if (!(field in couponData)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  return true;
};

// SIMPLIFIED: Only validate product data (removed email validation)
const validateInputData = (productDisplayInfo) => {

  if (!productDisplayInfo.productId) {
    throw new Error('Product information with productId is required');
  }

  return true;
};

// SIMPLIFIED: Perform client-side validation checks (removed email validation)
const performCouponValidation = (couponData, productDisplayInfo) => {

  const now = new Date();
  const validFrom = new Date(couponData.validFrom);
  const validTo = new Date(couponData.validTo);


  if (now < validFrom || now > validTo) {
    console.error('Date validation failed');
    return {
      isValid: false,
      error: COUPON_CONFIG?.ERROR_MESSAGES?.EXPIRED || 'Coupon expired or not yet valid',
    };
  }

  // Product validation (only applies if limitToProducts exists and has content)
  if (couponData.limitToProducts && Array.isArray(couponData.limitToProducts) && couponData.limitToProducts.length > 0) {
    
    const productIdNumber = Number(productDisplayInfo.productId);
    
    if (isNaN(productIdNumber)) {
      console.error('❌ Invalid product ID format');
      return {
        isValid: false,
        error: COUPON_CONFIG?.ERROR_MESSAGES?.INVALID_PRODUCT || 'Invalid product information',
      };
    }

    const isProductAllowed = couponData.limitToProducts.includes(productIdNumber);

    if (!isProductAllowed) {
      console.error('Product validation failed');
      return {
        isValid: false,
        error: COUPON_CONFIG?.ERROR_MESSAGES?.PRODUCT_NOT_ELIGIBLE || 'Product not eligible for this coupon',
      };
    }
  }

  return { isValid: true };
};

// Calculate discounted price
const calculateDiscountedPrice = (originalPrice, discountPct) => {
  const price = parseFloat(originalPrice);
  if (isNaN(price)) {
    throw new Error('Invalid price format');
  }

  const discountAmount = (price * discountPct) / 100;
  const discountedPrice = price - discountAmount;

  return {
    originalPrice: price,
    discountAmount: discountAmount,
    discountedPrice: Math.max(0, discountedPrice), // Ensure price doesn't go negative
    discountPct: discountPct
  };
};

// Fetch coupon data directly from external API
const fetchCouponFromExternalAPI = async (couponCode) => {

  try {
    // Validate API key for client-side use
    const apiKey = validateApiKey();

    const requestUrl = `${COUPON_API.ENDPOINT}/${encodeURIComponent(couponCode)}`;

    // Make the API request directly to external service
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        ...COUPON_API.HEADERS
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ External API Error Response:', errorText);
      
      if (response.status === 404) {
        throw new Error('Coupon not found');
      }
      
      throw new Error(`External API request failed with status ${response.status}: ${errorText}`);
    }

    const externalData = await response.json();

    // Validate external response structure (based on your API documentation)
    if (!externalData || externalData.Status !== 'ok' || !externalData.Data) {
      const errorMessage = externalData.Message || 'Invalid coupon or service unavailable';
      throw new Error(errorMessage);
    }

    return externalData.Data;
  } catch (error) {
    console.error('💥 Error in fetchCouponFromExternalAPI:', error);
    throw error; // Re-throw to be caught by main function
  }
};

// SIMPLIFIED: Main coupon validation function (removed billingData requirement)
export const validateCoupon = async (couponCode, billingData, productDisplayInfo) => {
 
  try {
    // Step 1: Validate input format
    if (!isValidCouponFormat(couponCode)) {
      console.error('Invalid coupon code format');
      return {
        success: false,
        error: COUPON_CONFIG?.ERROR_MESSAGES?.ENTER_CODE || 'Please enter a valid coupon code'
      };
    }

    // Step 2: Validate input data (only product info now)
    validateInputData(productDisplayInfo);

    // Step 3: Fetch coupon data from external API
    const couponData = await fetchCouponFromExternalAPI(couponCode);

    // Step 4: Validate server response structure
    validateCouponData(couponData);

    // Step 5: Perform client-side validation (no email validation)
    const validationResult = performCouponValidation(couponData, productDisplayInfo);

    if (!validationResult.isValid) {
      return {
        success: false,
        error: validationResult.error
      };
    }

    // Step 6: Calculate pricing
    const pricing = calculateDiscountedPrice(productDisplayInfo.price, couponData.discountPct);

    // Step 7: Build coupon object for UI
    const appliedCoupon = {
      code: couponData.code,
      discountValue: couponData.discountPct / 100, // Convert percentage to decimal
      description: `${couponData.discountPct}% discount`,
      validFrom: new Date(couponData.validFrom),
      validTo: new Date(couponData.validTo),
      ...pricing
    };

    console.log('Coupon validation successful:', appliedCoupon);

    return {
      success: true,
      coupon: appliedCoupon
    };

  } catch (error) {
    console.error('Coupon validation failed at error catch:', error);
    
    // Return user-friendly error messages
    const errorMessage = error.message.includes('not found') || error.message.includes('404')
      ? (COUPON_CONFIG?.ERROR_MESSAGES?.INVALID_CODE || 'Coupon code not found')
      : (COUPON_CONFIG?.ERROR_MESSAGES?.VALIDATION_FAILED || 'Failed to validate coupon. Please try again.');

    return {
      success: false,
      error: errorMessage
    };
  }
};

// Get coupon discount percentage for display (keeping your existing utility)
export const getCouponDiscountPercentage = (coupon) => {
  if (coupon.discountValue) {
    return (coupon.discountValue * 100).toFixed(0);
  }
  return '0';
};

// Check if coupon is still valid (date-wise) - keeping your existing utility
export const isCouponValid = (coupon) => {
  const now = new Date();
  return now >= coupon.validFrom && now <= coupon.validTo;
};

// Apply coupon to order (for integration with order flow)
export const applyCouponToOrder = (orderData, appliedCoupon) => {
  if (!appliedCoupon) {
    return orderData;
  }

  return {
    ...orderData,
    couponCode: appliedCoupon.code,
    originalPrice: appliedCoupon.originalPrice,
    discountAmount: appliedCoupon.discountAmount,
    finalPrice: appliedCoupon.discountedPrice,
    discountPct: appliedCoupon.discountValue * 100
  };
};