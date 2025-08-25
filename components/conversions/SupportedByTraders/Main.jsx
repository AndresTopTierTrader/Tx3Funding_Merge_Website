import CtaButton from "@/components/common/Buttons/CtaButton";
import founders from "./assets/founders.webp";
import getCurrentUTMMonth from "../../../utils/misc/getCurrentUTM";

export function SupportedByTraders({ translations }) {
  return (
    <section className="flex flex-col items-center gap-12 md:gap-16 px-7 py-12 md:py-20">
      <h3 className="text-center text-3xl md:text-4xl font-light text-white">
        {translations.t4}
      </h3>

      <article
        style={{ backgroundImage: `url(${founders.src})` }}
        className="border border-secondary p-6 md:p-12 rounded-lg flex flex-col justify-center min-h-[380px] md:min-h-[444px] gap-12 max-w-4xl w-full mx-auto bg-cover bg-right md:bg-center"
      >
        <span className="mt-12 md:mt-0">
          <p className="font-light text-3xl md:text-4xl text-white">
            {translations.t5_1}
          </p>
          <h2 className="text-white font-light text-4xl md:text-7xl md:mt-6">
            {translations.t5_2}
          </h2>
        </span>

        <p className="px-4 py-2 rounded-lg border border-secondary text-md md:text-xl w-fit bg-gradient-to-br from-[#2F3547] via-black/50 to-black/0 text-white">
          @anthonysworld & @cuebanks
        </p>
      </article>

      <CtaButton
        utm={`https://app.toptiertrader.com/buy-challenge/?el=FlashSaleAugust_ConversionLP_CTA&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=9f760fbf-d1d6-4236-8cf9-d338961bdf90&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&promo=FASTFUNDING25`}
        page="Conversion LP"
        section="Supported by Traders"
        translation={translations.CTA}
      />
    </section>
  );
}
