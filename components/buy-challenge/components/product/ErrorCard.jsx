import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PRODUCT_DISPLAY } from '../../data/constants';
import { ENVIRONMENT_URL } from '@/constants/global';

// Error state component
function ErrorCard({ buttonStyles }) {
  return (
    <div className="bg-gradient-to-br border rounded-xl border-[#45D1FF] from-red-500/5 to-[#0B111D] p-8 w-full md:max-w-[1050px] mx-auto">
      <h2 className="text-3xl font-light text-textPrimary mb-4">
        Seems like you haven't selected your challenge yet
      </h2>
      <div className="flex flex-col">
        <span className="text-lg font-light text-slate-300">
          Let us help you - What do you prefer?
        </span>
        <section className='flex flex-col md:flex-row justify-start items-center mt-8'>
          <a
            className={`${buttonStyles?.unifiedChallenge?.unselected || 'bg-gray-600 text-textPrimary py-3 px-6 rounded-lg'} hover:bg-gradient-to-b from-[#0052B4] to-[#167ACC] transition-all`}
            href={`${ENVIRONMENT_URL}/buy-challenge${PRODUCT_DISPLAY.DEFAULT_CHALLENGE_LINKS.onePhase}`}
          >
            100K - 1 Phase
          </a>
          <a
            className={`${buttonStyles?.unifiedChallenge?.unselected || 'bg-gray-600 text-textPrimary py-3 px-6 rounded-lg'} mt-4 md:mt-0 md:ml-4 hover:bg-gradient-to-b from-[#0052B4] to-[#167ACC] transition-all`}
            href={`${ENVIRONMENT_URL}/buy-challenge${PRODUCT_DISPLAY.DEFAULT_CHALLENGE_LINKS.twoFlex}`}
          >
            100K - 2 Phase Flex
          </a>
          <a
            className={`${buttonStyles?.unifiedChallenge?.unselected || 'bg-gray-600 text-textPrimary py-3 px-6 rounded-lg'} mt-4 md:mt-0 md:ml-4 hover:bg-gradient-to-b from-[#0052B4] to-[#167ACC] transition-all`}
            href={`${ENVIRONMENT_URL}/buy-challenge${PRODUCT_DISPLAY.DEFAULT_CHALLENGE_LINKS.twoPro}`}
          >
            100K - 2 Phase Pro
          </a>
          <a
            className={`text-textPrimary w-full md:w-72 justify-center mt-4 md:mt-0 flex flex-row items-center bg-[#FF532D] py-3 px-4 rounded-md md:ml-4 text-sm md:text-base hover:bg-orange-700`}
            href={`${ENVIRONMENT_URL}/select-challenge`}
          >
            Choose Your Own Challenge
            <FaArrowRight className='ml-2 w-3' />
          </a>
        </section>
      </div>
    </div>
  );
}

export default ErrorCard;