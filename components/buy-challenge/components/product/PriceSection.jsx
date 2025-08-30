import React from 'react';
import { calculateDiscountedPrice, calculateSavings, formatPrice } from '../../utils/product/priceCalculations';
import { getCouponDiscountPercentage } from '../../services/couponService';

// Price section component displaying original and discounted prices
function PriceSection({ originalPrice, appliedCoupon }) {
  const discountedPrice = calculateDiscountedPrice(originalPrice, appliedCoupon);
  const savings = appliedCoupon ? calculateSavings(originalPrice, discountedPrice) : 0;

  return (
    <section className='flex flex-col justify-end md:w-full mt-8'>
      <div className='flex flex-col space-y-4'>
        {appliedCoupon && (
          <div className='flex flex-col'>
            <span className="text-lg font-light text-slate-400">Original Price:</span>
            <h2 className="text-xl font-medium text-slate-400 line-through">
              ${formatPrice(originalPrice)}
            </h2>
          </div>
        )}
        
        <div className='flex flex-col'>
          <span className="text-lg font-light text-slate-400">
            {appliedCoupon ? 'Discounted Price:' : 'Price:'}
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-green-400">
            ${formatPrice(discountedPrice)}
          </h2>
          {appliedCoupon && (
            <p className="text-green-400 text-md md:mt-2 font-medium">
              <span className='text-textPrimary font-light'>You save </span>
              ${formatPrice(savings)} ({getCouponDiscountPercentage(appliedCoupon)}%)
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PriceSection;