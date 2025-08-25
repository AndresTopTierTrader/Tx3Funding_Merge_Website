// Calculate discounted price based on original price and coupon
export const calculateDiscountedPrice = (originalPrice, coupon) => {
    if (!coupon) return originalPrice;
    return originalPrice * (1 - coupon.discountValue);
  };
  
  // Calculate savings amount
  export const calculateSavings = (originalPrice, discountedPrice) => {
    return originalPrice - discountedPrice;
  };
  
  // Format price for display
  export const formatPrice = (price) => {
    return parseFloat(price).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  
  // Calculate discount percentage for display
  export const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice === 0) return 0;
    return ((originalPrice - discountedPrice) / originalPrice) * 100;
  };
  
  // Validate price is a valid number
  export const isValidPrice = (price) => {
    const numPrice = parseFloat(price);
    return !isNaN(numPrice) && numPrice > 0;
  };