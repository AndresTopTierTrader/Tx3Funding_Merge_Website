import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRedo, FaArrowLeft } from 'react-icons/fa';
import {ENVIRONMENT} from '@/constants/global';

// Order error component that shows when order creation fails
function OrderError({ error, onRetry, onGoBack }) {
  
  // Get user-friendly error message
  const getUserFriendlyMessage = (error) => {
    if (!error) return 'An unexpected error occurred';
    
    const message = error.message || error.toString();
    
    // Check for common error patterns
    if (message.includes('fetch') || message.includes('network') || message.includes('Failed to fetch')) {
      return 'Network connection issue. Please check your internet connection and try again.';
    }
    
    if (message.includes('API request failed with status 4')) {
      return 'There was an issue with your order information. Please review your details and try again.';
    }
    
    if (message.includes('API request failed with status 5')) {
      return 'Our order system is temporarily unavailable. Please try again in a few moments.';
    }
    
    if (message.includes('Missing product information')) {
      return 'Product information is incomplete. Please go back and select your challenge again.';
    }
    
    if (message.includes('Missing required billing information')) {
      return 'Some required billing information is missing. Please go back and complete all fields.';
    }
    
    if (message.includes('API key not configured')) {
      return 'System configuration error. Please contact support if this persists.';
    }
    
    // Default message for any other error
    return 'We encountered an issue creating your order. Please try again or contact support if the problem persists.';
  };

  const friendlyMessage = getUserFriendlyMessage(error);

  return (
    <div className="bg-gradient-to-br border rounded-xl border-red-500/30 from-red-500/5 to-[#0B111D] p-8 max-w-[600px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-6"
      >
        {/* Error Icon with Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaExclamationTriangle className="w-8 h-8 text-red-400" />
          </motion.div>
        </motion.div>

        {/* Error Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-light text-textPrimary"
        >
          Order Creation Failed
        </motion.h2>

        {/* User-Friendly Error Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#717892] text-lg max-w-md leading-relaxed"
        >
          {friendlyMessage}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          {/* Retry Button */}
          <motion.button
            onClick={onRetry}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#0052B4] to-[#167ACC] text-textPrimary font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            <FaRedo className="w-4 h-4 mr-2" />
            Try Again
          </motion.button>

          {/* Go Back Button */}
          <motion.button
            onClick={onGoBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center bg-[#181D28] border border-[#4D516A] text-textPrimary font-medium py-3 px-6 rounded-lg hover:bg-[#131927] transition-colors"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-slate-500 text-sm max-w-md"
        >
          If you continue to experience issues, please contact our support team for assistance.
        </motion.p>

        {/* Technical Details (Collapsible) - Only in Development */}
        { ENVIRONMENT === 'development' && error && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-full max-w-md text-left"
          >
            <summary className="text-slate-400 text-sm cursor-pointer hover:text-slate-300 transition-colors">
              Technical Details (Development Only)
            </summary>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2 p-4 bg-gray-800/50 rounded-lg text-xs text-slate-300 font-mono overflow-auto max-h-40"
            >
              <pre>{JSON.stringify({
                message: error.message,
                stack: error.stack,
                timestamp: new Date().toISOString()
              }, null, 2)}</pre>
            </motion.div>
          </motion.details>
        )}
      </motion.div>
    </div>
  );
}

export default OrderError;