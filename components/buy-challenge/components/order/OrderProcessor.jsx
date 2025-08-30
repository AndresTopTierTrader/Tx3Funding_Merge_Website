import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { createOrder } from '../../services/orderService';
import { PROCESSING_STEPS, ORDER_DEFAULTS } from '../../data/constants';

// Order processing component that handles API call and loading state
function OrderProcessor({ productDisplayInfo, billingData, promoCode, onError }) {

  // Create enhanced productDisplayInfo with the promo code if needed
  const enhancedProductDisplayInfo = {
    ...productDisplayInfo,
    discountCode: productDisplayInfo?.discountCode || promoCode || null
  };

  const [isProcessing, setIsProcessing] = useState(true);
  const [processingStep, setProcessingStep] = useState(PROCESSING_STEPS.PREPARING);

  // Handle order creation process
  const handleOrderCreation = async () => {
    try {

      setProcessingStep(PROCESSING_STEPS.VALIDATING);
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay for UX
      
      setProcessingStep(PROCESSING_STEPS.CREATING);
      
      // Use the enhanced productDisplayInfo that includes the discount code
      const orderResult = await createOrder(enhancedProductDisplayInfo, billingData, enhancedProductDisplayInfo.discountCode);

      setProcessingStep(PROCESSING_STEPS.REDIRECTING);
      
      // Small delay for smooth UX, then redirect
      setTimeout(() => {
        window.location.href = orderResult.payment_url;
      }, ORDER_DEFAULTS.REDIRECT_DELAY);
      

    } catch (error) {
      console.error('❌ Order Creation Failed:', {
        message: error.message,
        stack: error.stack,
        productInfo: enhancedProductDisplayInfo,
        billingInfo: billingData,
        timestamp: new Date().toISOString()
      });
      
      setIsProcessing(false);
      onError(error);
    }
  };

  // Start order creation when component mounts and scroll to top
  useEffect(() => {
    // Scroll to top of page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    handleOrderCreation();
  }, []);

  return (
    <>
      {isProcessing ? (
        <div className="bg-gradient-to-br border rounded-xl border-[#717892] from-white/5 to-[#0B111D] p-8 max-w-[600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Animated Loading Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-[#45D1FF]/20 border-t-[#45D1FF] rounded-full"
            />

            {/* Processing Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-light text-textPrimary"
            >
              Processing Your Order
            </motion.h2>

            {/* Dynamic Processing Step */}
            <motion.p
              key={processingStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#717892] text-lg"
            >
              {processingStep}
            </motion.p>

            {/* Progress Bar Animation */}
            <div className="w-full max-w-xs bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="bg-gradient-to-r from-[#45D1FF] to-[#0052B4] h-2 rounded-full"
              />
            </div>

            {/* Pulsing Dots */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-[#45D1FF] rounded-full"
                />
              ))}
            </div>

            {/* Reassuring Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-slate-400 text-sm max-w-md"
            >
              Please do not close this window. We're securely processing your challenge purchase and will redirect you to complete payment momentarily.
            </motion.p>
          </motion.div>
        </div>
      ) : (
        <div className="bg-gradient-to-br border rounded-xl border-[#717892] from-white/5 to-[#0B111D] p-8 max-w-[600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-red-400 text-2xl"
              >
                ❌
              </motion.div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-light text-textPrimary"
            >
              Order Processing Failed
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#717892] text-lg"
            >
              There was an issue processing your order. Please try again.
            </motion.p>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default OrderProcessor;