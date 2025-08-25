import React from "react";
import CTA from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

const statsContainerStyle = {
  borderRadius: "15px",
  border: "1px solid var(--Primary-Stone, #5F6776)",
  background:
    "linear-gradient(180deg, rgba(11, 17, 29, 0.30) 0%, rgba(11, 17, 29, 0.24) 100%)",
  backdropFilter: "blur(26.299999237060547px)",
};

const gradientTextStyle = {
  background: "linear-gradient(91deg, #0052B4 -24.21%, #45D1FF 45.02%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

function StatsSection({ translations, locale }) {
  const {
    stat1Label,
    stat1Desc,
    stat2Label,
    stat2Desc,
    stat3Desc,
    cta,
  } = translations;

  const stats = [
    {
      number: "100+",
      label: stat1Label,
      description: stat1Desc,
    },
    {
      number: "89%",
      label: stat2Label,
      description: stat2Desc,
    },
    {
      number: "100%",
      label: stat2Label,
      description: stat3Desc,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 mb-10 px-4 sm:px-6">
      <div
        style={statsContainerStyle}
        className="w-full max-w-[320px] sm:max-w-[700px] lg:max-w-[900px] min-h-[320px] sm:min-h-[280px] md:h-[300px] lg:h-[300px] mx-auto p-4 sm:p-6 lg:p-8 flex-shrink-0 relative"
      >
        <div
          className="hidden md:block absolute top-0 bottom-0 w-px bg-[#5F6776]"
          style={{ left: "calc(100% / 3)" }}
        ></div>
        <div
          className="hidden md:block absolute top-0 bottom-0 w-px bg-[#5F6776]"
          style={{ left: "calc(100% * 2 / 3)" }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 h-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center md:text-left flex flex-col h-full md:px-6 lg:px-8 md:first:pl-0 md:last:pr-0"
            >
              {/* Number */}
              <div
                style={gradientTextStyle}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-0"
              >
                {stat.number}
              </div>

              {/* Spacer*/}
              <div className="hidden md:block flex-grow"></div>

              {/* Label */}
              <div
                style={gradientTextStyle}
                className="text-xs sm:text-sm lg:text-base font-semibold mb-2 tracking-wide md:h-[1.5rem] md:flex md:items-end"
              >
                {stat.label}
              </div>

              {/* Description*/}
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed max-w-[250px] mx-auto md:mx-0 md:h-[3rem] flex items-start">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center w-full">
        <CTA
          utm={`${ENVIRONMENT_URL}/${locale}/trader-quiz/start`}
          page="Trader Quiz LP"
          section="Stats Section"
          translation={cta}
          color="orange"
        />
      </div>
    </div>
  );
}

export default StatsSection;