import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { getBrokerDisplayName } from '../../utils/product/productHelpers';
import { PRODUCT_DISPLAY } from '../../data/constants';

// Broker error state component
function BrokerErrorCard({ brokerError, environmentUrl }) {
  // Generate available broker links based on configuration
  const getAvailableBrokerLinks = () => {
    const baseUrl = `${environmentUrl}/buy-challenge`;
    
    const defaultLinks = {
      matchtrader: `${baseUrl}${PRODUCT_DISPLAY.DEFAULT_BROKER_LINKS.matchtrader}`,
      ctrader: `${baseUrl}${PRODUCT_DISPLAY.DEFAULT_BROKER_LINKS.ctrader}`
    };

    if (brokerError.allowedBrokers === 'all') {
      return [
        { broker: 'matchtrader', url: defaultLinks.matchtrader },
        { broker: 'ctrader', url: defaultLinks.ctrader }
      ];
    } else if (brokerError.allowedBrokers === 'matchtrader') {
      return [{ broker: 'matchtrader', url: defaultLinks.matchtrader }];
    } else if (brokerError.allowedBrokers === 'ctrader') {
      return [{ broker: 'ctrader', url: defaultLinks.ctrader }];
    }
    
    return [];
  };

  const availableLinks = getAvailableBrokerLinks();

  return (
    <div className="bg-gradient-to-br border rounded-xl border-red-500/30 from-red-500/5 to-[#0B111D] p-8 w-full md:max-w-[1000px] mx-auto">
      <div className="flex items-center mb-4">
        <div className="text-red-400">
          <svg className="w-6 h-6 mr-3 inline" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-2xl font-light text-red-400">Platform Not Available</span>
        </div>
      </div>
      <p className="text-slate-300 text-lg font-light mb-6">
        {brokerError.error}
      </p>
      
      {availableLinks.length > 0 && (
        <div className="flex flex-col">
          <span className="text-lg font-light text-slate-300 mb-4">
            Try one of these available options:
          </span>
          <div className="flex flex-col md:flex-row gap-4">
            {availableLinks.map((link) => (
              <a
                key={link.broker}
                href={link.url}
                className="bg-gradient-to-b from-[#0052B4] to-[#167ACC] text-textPrimary font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Continue with {getBrokerDisplayName(link.broker)}
              </a>
            ))}
          </div>
          
          <a
            href={`${environmentUrl}/select-challenge`}
            className="mt-4 flex items-center justify-center text-textPrimary bg-[#FF532D] hover:bg-orange-700 transition-all py-3 px-6 rounded-lg"
          >
            <span>Choose Your Own Challenge</span>
            <FaArrowRight className="ml-2 w-3" />
          </a>
        </div>
      )}
    </div>
  );
}

export default BrokerErrorCard;