import CtaButton from "@/components/common/Buttons/CtaButton";
import bgOpportunity from "./assets/bgOpportunity.webp";
import Carousel from "@/components/home/LandingSection/Carousel/Carousel";
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

export function Opportunity({ translations, mainLang }) {
  const points = [translations.l1, translations.l2, translations.l3];

  return (
    <section className="flex flex-col items-center gap-2 md:gap-10 px-7 py-12 md:py-20">
      <article
        style={{ backgroundImage: `url(${bgOpportunity.src})` }}
        className="p-8 md:p-12 rounded-lg border border-secondary mx-auto max-w-4xl w-full flex flex-col gap-12 bg-cover bg-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-light text-textPrimary max-w-md">
          {translations.t3}
        </h2>

        <ul className="flex flex-col gap-6 text-textPrimary">
          {points.map((point) => (
            <li key={point} className="flex gap-4">
              <CheckIcon />
              {point}
            </li>
          ))}
        </ul>
      </article>

      <Carousel locale={mainLang} />

      <CtaButton
        utm={`https://app.toptiertrader.com/buy-challenge/?el=FlashSaleAugust_ConversionLP_CTA&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&promo=FASTFUNDING25`}
        page="Conversion LP"
        section="Your opportunity"
        translation={translations.CTA}
      />
    </section>
  );
}
