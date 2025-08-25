"use client";

import React from "react";
import { ENVIRONMENT_URL } from "@/constants/global";

import CTA from "@/components/common/Buttons/CtaButton";

function QuizHeroSection({ translations, locale }) {
  const {
    badge,
    heroTitle1,
    heroTitle2,
    heroTitle3,
    learnButton,
    cta,
  } = translations;

  const handleLearnMoreClick = () => {
    const element = document.getElementById("learn-more");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 210;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-col px-6 sm:px-0 items-center max-w-[600px] mt-8 sm:mt-12">
      {/* Discount Badge */}
      <div className="absolute -top-8 right-0 sm:-top-8 sm:right-10 bg-[#FF532D] text-white text-[9px] sm:text-[11px] font-bold w-16 h-16 sm:w-20 sm:h-20 rounded-full transform rotate-12 shadow-lg flex items-center justify-center z-10">
        <div className="text-center leading-tight w-[2.6rem] sm:w-[4rem]">
          {badge}
        </div>
      </div>

      {/* Main Title */}
      <div className="mb-2 text-center">
        <span
          className="bg-gradient-to-r py-1 font-bold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text text-xl sm:text-2xl"
          style={{ letterSpacing: "0.15em" }}
        >
          {heroTitle1}
        </span>
      </div>

      <h1
        className="text-center text-4xl sm:text-6xl font-normal text-white leading-tight"
        style={{ lineHeight: "1.2" }}
      >
        {heroTitle2}
        <br />
        {heroTitle3}
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8 items-center justify-center w-full mx-auto">
        <div className="transition-all hover:scale-105 w-[180px] flex justify-center mx-auto sm:mx-0">
          <button
            onClick={handleLearnMoreClick}
            className="flex flex-row items-center text-sm rounded-lg bg-transparent border-2 border-white/30 hover:border-white/50 text-white transition-all py-2 px-4 scaleIn w-full justify-center"
          >
            <div className="w-3 h-3 mr-2"></div>
            {learnButton}
            <div className="w-3 h-3 ml-2"></div>
          </button>
        </div>

        <div className="w-[180px] flex justify-center mx-auto sm:mx-0 [&>a]:w-full [&>a>button]:w-full [&>a>button]:justify-center [&>a>button]:!mt-0">
          <CTA
            utm={`${ENVIRONMENT_URL}/${locale}/trader-quiz/start`}
            page="Trader Quiz LP"
            section="Hero Section"
            translation={cta}
            color="orange"
          />
        </div>
      </div>
    </div>
  );
}

export default QuizHeroSection;