"use client";

import CtaButton from '@/components/common/Buttons/CtaButton';
import getCurrentUTMMonth from '@/utils/misc/getCurrentUTM';
import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ translations }) => {
  const targetDate = "2025-08-14T23:59:59";

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (number) => number.toString().padStart(2, "0");

  return (
    <section className="flex flex-col items-center gap-6 md:gap-12 bg-[#0B111D] text-white py-12 md:py-20 px-7">
      <h2 className="text-4xl font-light text-center md:text-6xl max-w-5xl mx-auto">
        {/* //TODO: Replace translations before launch so it doesnt affect the current promo */}
        {translations.h1_title}
      </h2>
      <article>
        <div className="flex justify-center">
          <div className="flex flex-col items-center md:mx-2">
            <div className="mb-1 text-3xl font-light md:text-7xl text-secondary">
              {formatNumber(days)}
            </div>
            <div className="text-sm uppercase md:text-base">
              {translations.days}
            </div>
          </div>

          <span className="mx-4 -mt-1 text-3xl font-light md:text-7xl md:-mt-2 text-secondary md:mx-2">
            :
          </span>

          <div className="flex flex-col items-center md:mx-2">
            <div className="mb-1 text-3xl font-light md:text-7xl text-secondary">
              {formatNumber(hours)}
            </div>
            <div className="text-sm uppercase md:text-base">
              {translations.hours}
            </div>
          </div>

          <span className="mx-4 -mt-1 text-3xl font-light md:text-7xl md:-mt-2 text-secondary md:mx-2">
            :
          </span>

          <div className="flex flex-col items-center md:mx-2">
            <div className="mb-1 text-3xl font-light md:text-7xl text-secondary">
              {formatNumber(minutes)}
            </div>
            <div className="text-sm uppercase md:text-base">
              {translations.minutes}
            </div>
          </div>

          <span className="mx-4 -mt-1 text-3xl font-light md:text-7xl md:-mt-2 text-secondary md:mx-2">
            :
          </span>

          <div className="flex flex-col items-center md:mx-2">
            <div className="mb-1 text-3xl font-light md:text-7xl text-secondary">
              {formatNumber(seconds)}
            </div>
            <div className="text-sm uppercase md:text-base">
              {translations.seconds}
            </div>
          </div>
        </div>
      </article>
      <CtaButton
        utm={`https://app.toptiertrader.com/buy-challenge/?el=FlashSaleAugust_ConversionLP_CTA&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&promo=FASTFUNDING25`}
        page="Conversion LP"
        section="Countdown"
        translation={translations.CTA}
      />
    </section>
  );
};

export default CountDownTimer;
