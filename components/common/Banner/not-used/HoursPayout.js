'use client'

//Functions
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import { FaArrowRight } from 'react-icons/fa';

//Assets
import img24HourPayout from './assets/img24HourPayout.svg';
import img24HourPayoutMb from './assets/img24HourPayoutMb.svg';

const backgroundStyle = {
  backgroundColor: 'hsla(212, 100%, 35%, 1)',
  backgroundImage: `
    radial-gradient(at 77% 99%, hsla(194, 100%, 63%, 0.33) 0px, transparent 50%),
    radial-gradient(at 35% 100%, hsla(194, 100%, 63%, 0.27) 0px, transparent 50%)
  `
};

function HoursPayout({ translations }) {


  return (
    <a href='https://app.toptiertrader.com/buy-challenge/?el=24HourPayout_WebsiteBannerJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=EAsAllowed&addons=maxLoss&promo=SAVE10'
      className='z-50'
      onClick={() => {
        track('Banner Clicked - 24 Hour Payout');
      }}>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          style={backgroundStyle}
          className="cursor-pointer shadow-2xl fixed bottom-0 left-0 right-0 rounded-t-2xl flex flex-row justify-start pl-3 mb:pl-0 mb:justify-center items-center h-24 mb:h-20 z-30 -mb-1 mb:mb-0"
        >
          {/* Mobile */}
          <div className="mb:hidden flex-col mb:mx-10 pt-6 mb:pt-0 w-full">
            <div className='flex flex-row items-center'>
              {/* Text Container */}
              <Image src={img24HourPayoutMb} alt='24-hour-payout' className='object-contain -ml-3 -mt-5 h-[300px] ' />
              <div className='flex flex-col text-xs font-semibold  ml-4 -mt-6'>
                <p className='text-white italic'> {translations.hourGet} {translations.hourDay}   </p>
                <div className='flex flex-row text-2xl items-center  -mt-1'>
                  <p className='text-white italica'> {translations.hourOne}</p>
                </div>
                {/* Button */}
                <div className='bg-[#0B111D] flex flex-row items-center justify-center px-4 py-2 mb:ml-6 rounded-lg hover:bg-[#0B111D] transition-all hover:scale-110'>
                  <p className='font-light text-xs text-white'>Get Funded</p>
                  <FaArrowRight className='w-3 h-3 text-white ml-2 ' />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden mb:flex flex-row items-center -ml-10">
            <div className='flex flex-row items-center text-xl font-semibold italic'>
              <p className='text-white'>{translations.hourGet} <span className='mb:mr-2' > {translations.hourDay} </span> </p>

              <p className='text-white text-4xl'> {translations.hourOne} </p>
            </div>

            <Image src={img24HourPayout} alt='24-hour-payout' className='object-contain mb:ml-4 mb:h-[80px]  ' />

            <div className='bg-[#0B111D] flex flex-row items-center px-4 py-2 mb:ml-6 rounded-lg hover:bg-[#0B111D] transition-all hover:scale-110'>
              <p className='font-light text-sm text-white'>Get Funded</p>
              <FaArrowRight className='w-3 h-3 text-white ml-2 ' />
            </div>

          </div>

        </motion.div>

      </AnimatePresence>

    </a>
  );
}

export default HoursPayout;
