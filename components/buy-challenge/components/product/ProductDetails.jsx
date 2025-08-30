import React from 'react';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { extractChallengeAmount, translateAddons, getBrokerDisplayName } from '../../utils/product/productHelpers';

import ctrader_logo from './assets/ctrader_logo.png';
import matchtrader_logo from './assets/matchtrader_logo.png';

// Product details component displaying challenge information
function ProductDetails({ productDisplayInfo, environmentUrl }) {
  if (!productDisplayInfo) return null;

  // Function to get the appropriate broker logo
  const getBrokerLogo = (broker) => {
    switch (broker.toLowerCase()) {
      case 'ctrader':
        return ctrader_logo;
      case 'matchtrader':
        return matchtrader_logo;
      default:
        return null; // fallback to original circle if no logo found
    }
  };

  // Function to get the display name with proper formatting
  const getFormattedBrokerName = (broker) => {
    const displayName = getBrokerDisplayName(broker);
    // Check if the display name is "MatchTrader" and format it as "Match-Trader"
    if (displayName.toLowerCase() === 'matchtrader') {
      return 'Match-Trader';
    }
    return displayName;
  };

  const brokerLogo = getBrokerLogo(productDisplayInfo.broker);
  const formattedBrokerName = getFormattedBrokerName(productDisplayInfo.broker);

  return (
    <>
      {/* Header Section */}
      <section className='flex flex-row justify-between'>
        <h2 className="text-2xl font-medium text-textPrimary mb-6">Your Selected Challenge</h2>
        <a
          href={`${environmentUrl}/select-challenge`}
          className='flex flex-row items-center text-slate-300 transition-all hover:text-textPrimary hover:font-medium py-2 h-fit rounded-lg px-6 border border-slate-300'
          target='_blank'
          rel="noopener noreferrer"
        >
          Edit
          <FaEdit className='ml-2' />
        </a>
      </section>

      {/* Product Information Grid */}
      <div className="flex flex-col space-y-4 md:space-y-6">

        <section className='flex  flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8'>
          {/* Challenge Type */}
          <div className="flex flex-col space-y-2">
            <span className="text-md font-light text-slate-400">Challenge:</span>
            <span className="text-xl font-medium text-textPrimary">
              {productDisplayInfo.challengeType}
            </span>
          </div>

          {/* Challenge Amount */}
          <div className="flex flex-col space-y-2">
            <span className="text-md font-light text-slate-400">Challenge Amount:</span>
            <section className='flex flex-row'>
              <RiMoneyDollarCircleLine className='w-7 h-7 text-slate-300 mr-1' />
              <span className="text-lg font-medium text-textPrimary">
                {extractChallengeAmount(productDisplayInfo.productName)}
              </span>
            </section>
          </div>

          {/* Broker */}
          <div className="flex flex-col space-y-2">
            <span className="text-md font-light text-slate-400">Platform:</span>
            <section className='flex flex-row items-center'>
              {brokerLogo ? (
                <div className="w-7 h-7 mr-2 relative">
                  <Image
                    src={brokerLogo}
                    alt={`${formattedBrokerName} logo`}
                    fill
                    className="object-contain"
                    sizes="28px"
                  />
                </div>
              ) : (
                // Fallback to original circle if no logo found
                <div className="w-7 h-7  bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-1">
                  <span className="text-textPrimary text-xs font-bold">
                    {formattedBrokerName.charAt(0)}
                  </span>
                </div>
              )}
              <span className="text-lg font-medium text-textPrimary">
                {formattedBrokerName}
              </span>
            </section>
          </div>
        </section>

        {/* Add-ons */}
        <div className="flex flex-col space-y-2">
          <span className="text-md font-light text-slate-400">Add-ons:</span>
          <section className='flex flex-row'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              className={`w-7 h-6 transition-all duration-200 flex-shrink-0 cursor-pointer opacity-80 hover:opacity-100`}
              aria-label="Additional features available"
            >
              <path
                d="M23.1673 8.82603L22.8627 9.52675C22.8151 9.64086 22.7348 9.73833 22.632 9.80689C22.5291 9.87544 22.4082 9.91203 22.2846 9.91203C22.1609 9.91203 22.0401 9.87544 21.9372 9.80689C21.8343 9.73833 21.754 9.64086 21.7064 9.52675L21.4019 8.82603C20.8664 7.58641 19.8857 6.59252 18.6534 6.04046L17.7138 5.62076C17.5998 5.56832 17.5032 5.48429 17.4355 5.37864C17.3678 5.27298 17.3318 5.15013 17.3318 5.02465C17.3318 4.89917 17.3678 4.77632 17.4355 4.67066C17.5032 4.56501 17.5998 4.48098 17.7138 4.42854L18.6014 4.03361C19.8647 3.46582 20.8621 2.43516 21.3882 1.15395L21.7015 0.397509C21.7475 0.280334 21.8277 0.179736 21.9317 0.108831C22.0357 0.0379248 22.1587 0 22.2846 0C22.4104 0 22.5334 0.0379248 22.6374 0.108831C22.7414 0.179736 22.8217 0.280334 22.8677 0.397509L23.1809 1.15271C23.7064 2.43416 24.7034 3.46527 25.9665 4.03361L26.8554 4.42978C26.969 4.48237 27.0653 4.56638 27.1327 4.6719C27.2001 4.77742 27.236 4.90004 27.236 5.02527C27.236 5.1505 27.2001 5.27312 27.1327 5.37864C27.0653 5.48416 26.969 5.56817 26.8554 5.62076L25.9145 6.03922C24.6824 6.59183 23.7022 7.58617 23.1673 8.82603ZM12.3803 3.71543C10.371 3.71574 8.40931 4.32717 6.75567 5.46856C5.10202 6.60996 3.83465 8.22732 3.1218 10.1059C2.40895 11.9845 2.28435 14.0355 2.76454 15.9866C3.24473 17.9377 4.30699 19.6966 5.8103 21.0298C7.31361 22.363 9.18685 23.2074 11.1813 23.4509C13.1758 23.6945 15.1972 23.3256 16.9772 22.3933C18.7571 21.4611 20.2114 20.0094 21.147 18.2312C22.0825 16.453 22.4551 14.4323 22.2152 12.4374L24.674 12.1452C24.7317 12.6297 24.7606 13.1212 24.7606 13.6197C24.7606 20.4573 19.218 26 12.3803 26C5.54267 26 0 20.4573 0 13.6197C0 6.78204 5.54267 1.23937 12.3803 1.23937C13.4463 1.23937 14.4837 1.37555 15.4729 1.62935L14.8564 4.02742C14.0475 3.81944 13.2155 3.71461 12.3803 3.71543ZM13.6183 12.3817H17.3324L11.1423 21.0479V14.8577H7.42819L13.6183 6.1915V12.3817Z"
                fill="#FF532D"
              />
            </svg>

            <span className="text-lg ml-2 font-light text-textPrimary">
              {translateAddons(productDisplayInfo.addons).length > 0
                ? translateAddons(productDisplayInfo.addons).join(', ')
                : 'None'}
            </span>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;