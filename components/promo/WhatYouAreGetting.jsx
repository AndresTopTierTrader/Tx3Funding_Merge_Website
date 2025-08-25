import CtaButton from "@/components/common/Buttons/CtaButton";
import getCurrentUTMMonth from "../../utils/misc/getCurrentUTM";

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="#45D1FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.75 12L10.58 14.83L16.25 9.17004"
      stroke="#45D1FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function WhatYouAreGetting({ translations }) {
  const points = [
    translations.f1,
    translations.f2,
    translations.f3,
    translations.f4,
    translations.f5,
    translations.f6,
  ];

  return (
    <section className="flex flex-col items-center gap-12 md:gap-20 px-7 py-12 md:py-16">
      <h2 className="text-center text-4xl md:text-4xl font-light text-white">
        {translations.t1}
      </h2>

      <ul className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 text-white">
        {points.map((point) => (
          <li key={point} className="flex gap-4 max-w-xs">
            <span className="w-6 h-6">
              <CheckIcon />
            </span>
            {point}
          </li>
        ))}
      </ul>

      <CtaButton
        utm={`https://app.toptiertrader.com/buy-challenge/?el=FlashSaleAugust_ConversionLP_CTA&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&promo=FASTFUNDING25`}
        page="Conversion LP"
        section="Key Points"
        translation={translations.CTA}
      />
    </section>
  );
}
