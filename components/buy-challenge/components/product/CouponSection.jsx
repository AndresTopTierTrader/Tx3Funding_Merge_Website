import React, { useState } from 'react';
import { validateCoupon, isValidCouponFormat, getCouponDiscountPercentage } from '../../services/couponService';
import { MdOutlineWarningAmber } from "react-icons/md";

import { COUPON_CONFIG } from '../../data/constants';

// Coupon section component handling coupon input and display
function CouponSection({ promoCode, setPromoCode, onCouponApplied, onCouponRemoved, billingData, productDisplayInfo }) {
  const [couponCode, setCouponCode] = useState(promoCode || '');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [couponError, setCouponError] = useState('');

  // Handle coupon application
  const handleApplyCoupon = async () => {
    if (!isValidCouponFormat(couponCode)) {
      setCouponError(COUPON_CONFIG.ERROR_MESSAGES.ENTER_CODE);
      return;
    }

    setIsApplying(true);
    setCouponError('');

    try {
      const result = await validateCoupon(couponCode.trim(), billingData, productDisplayInfo);

      if (result.success) {
        setAppliedCoupon(result.coupon);
        setCouponError('');
        
        // Update the main promoCode state when coupon is successfully validated
        if (setPromoCode) {
          setPromoCode(result.coupon.code);
        }
        
        onCouponApplied(result.coupon);
      } else {
        setCouponError(result.error);
        setAppliedCoupon(null);
        
        // Clear promoCode if validation fails
        if (setPromoCode) {
          setPromoCode(null);
        }
      }
    } catch (error) {
      setCouponError(COUPON_CONFIG.ERROR_MESSAGES.VALIDATION_FAILED);
      setAppliedCoupon(null);
      
      // Clear promoCode if validation throws error
      if (setPromoCode) {
        setPromoCode(null);
      }
    } finally {
      setIsApplying(false);
    }
  };

  // Handle coupon removal
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
    
    // Clear the main promoCode state when coupon is removed
    if (setPromoCode) {
      setPromoCode(null);
    }
    
    onCouponRemoved();
  };

  return (
    <div className="mt-8 border-t border-[#717892]/30 pt-6">
      <div className="flex flex-col space-y-4">
        <span className="text-md font-light text-slate-400">Coupon Code:</span>

        {appliedCoupon ? (
          // Applied coupon display
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-xl font-bold">{appliedCoupon.code}</span>
                  <span className="text-green-400 text-sm">
                    ({getCouponDiscountPercentage(appliedCoupon)}% off)
                  </span>
                </div>
                {appliedCoupon.description && (
                  <span className="text-slate-300 text-sm">{appliedCoupon.description}</span>
                )}
                <div className="text-xs text-slate-400">
                  Valid until: {appliedCoupon.validTo.toLocaleDateString()}
                </div>
              </div>
              <button
                onClick={handleRemoveCoupon}
                className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          // Coupon input
          <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="flex flex-col w-full md:min-w-[400px] md:max-w-[600px]">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="w-full bg-[#0B111D] border border-[#717892] rounded-lg px-4 py-3 text-white focus:border-[#45D1FF] focus:outline-none transition-colors"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleApplyCoupon();
                  }
                }}
              />
              {couponError && (
                <div className='bg-red-500/20 w-fit flex flex-row items-center px-4 py-2 border border-red-500 rounded-md mt-2'>
                  <MdOutlineWarningAmber className='text-red-500 mr-1 w-5 h-5' />
                  <span className="text-red-100 text-sm mt-1 block">{couponError}</span>
                </div>
              )}
            </div>
            <button
              onClick={handleApplyCoupon}
              disabled={isApplying || !isValidCouponFormat(couponCode)}
              className="bg-white text-black font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed md:w-auto w-full"
            >
              {isApplying ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  Applying...
                </div>
              ) : (
                'Apply'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CouponSection;