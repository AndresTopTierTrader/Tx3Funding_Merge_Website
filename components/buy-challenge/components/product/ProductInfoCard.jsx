import React, { useState } from 'react';
import { isValidPrice } from '../../utils/product/priceCalculations';
import ProductDetails from './ProductDetails';
import CouponSection from './CouponSection';
import PriceSection from './PriceSection';
import LoadingCard from './LoadingCard';
import BrokerErrorCard from './BrokerErrorCard';
import ErrorCard from './ErrorCard';
import NoUrlCard from './NoUrlCard';

// Product information display card component
function ProductInfoCard({ productDisplayInfo, promoCode, environmentUrl, setPromoCode }) {
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  if (!productDisplayInfo) return null;

  // Validate price
  const originalPrice = parseFloat(productDisplayInfo.price);
  if (!isValidPrice(originalPrice)) {
    console.error('Invalid price provided:', productDisplayInfo.price);
    return null;
  }

  // Handle coupon application
  const handleCouponApplied = (coupon) => {
    setAppliedCoupon(coupon);
  };

  // Handle coupon removal
  const handleCouponRemoved = () => {
    setAppliedCoupon(null);
  };


  return (
    <div className="bg-gradient-to-br border rounded-xl border-green-200 from-white/5 to-[#0B111D] p-8 w-full md:max-w-[1000px] mx-auto">
      <ProductDetails
        productDisplayInfo={productDisplayInfo}
        environmentUrl={environmentUrl}
      />

      <CouponSection
        productDisplayInfo={productDisplayInfo}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        onCouponApplied={handleCouponApplied}
        onCouponRemoved={handleCouponRemoved}
      />

      <PriceSection
        originalPrice={originalPrice}
        appliedCoupon={appliedCoupon}
      />
    </div>
  );
}

// Export all card components
export {
  LoadingCard,
  BrokerErrorCard,
  ErrorCard,
  NoUrlCard
};

export default ProductInfoCard;