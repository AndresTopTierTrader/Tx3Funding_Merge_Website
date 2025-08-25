import React from "react";
import Image from "next/image";
import { ENVIRONMENT_URL } from "@/constants/global";
import CTA from "@/components/common/Buttons/CtaButton";
import workImg from "../assets/workImg.svg";

const HowItWorks = ({ translations, locale }) => {
  const {
    howItWorksTitle,
    step1,
    step2,
    step3,
    step4,
    cta,
  } = translations;

  const steps = [
    { number: 1, text: step1 },
    { number: 2, text: step2 },
    { number: 3, text: step3 },
    { number: 4, text: step4 },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-4 sm:mb-8 md:mb-10 lg:mb-12 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Work Image */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[480px] lg:max-w-[580px]">
              <Image
                src={workImg}
                alt="How it works illustration"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* How it Works */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-2 lg:order-2 max-w-md sm:max-w-lg md:max-w-none mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-normal text-white text-center lg:text-left leading-tight">
              {howItWorksTitle}
            </h2>

            {/* Steps */}
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number}>
                  <div className="flex items-center space-x-4 sm:space-x-5 py-3 sm:py-4 mr-6 sm:mr-8 md:mr-12">
                    <div className="flex-shrink-0">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-0.5"
                        style={{
                          background:
                            "linear-gradient(135deg, #45D1FF 0%, #0052B4 100%)",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#0B111D" }}
                        >
                          <span className="text-white font-normal text-sm sm:text-lg">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-normal text-sm sm:text-base md:text-lg leading-relaxed text-left">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal divider line */}
                  {index < 3 && (
                    <div className="w-full">
                      <div
                        className="ml-12 sm:ml-14 mr-6 sm:mr-8 md:mr-12"
                        style={{
                          backgroundColor: "#717892",
                          height: "0.5px",
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
              <CTA
                utm={`${ENVIRONMENT_URL}/${locale}/trader-quiz/start`}
                page="Trader Quiz LP"
                section="How It Works Section"
                translation={cta}
                color="orange"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;