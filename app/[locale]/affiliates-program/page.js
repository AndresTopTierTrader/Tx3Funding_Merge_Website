import React from "react";
import initTranslations from "@/i18n";
import Image from "next/image";
import vipBgImage from "./assets/vipBgImg.png";

import { TierCards } from "./affiliates/TierCards";
import { HeroSection } from "./affiliates/HeroSection";

//Metadata
import { SectionLayout } from "./affiliates/SectionLayout";
import { Steps } from "./affiliates/Steps";
import { AffiliatesFAQs } from "./affiliates/AffiliatesFAQs";
import { EverySale } from "./affiliates/EverySale";

import { FaCircleCheck } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";

const metadata_en = {
  metadataBase: new URL("https://www.toptiertrader.com"),
  title: "TopTier Trader Affiliates Program",
  description:
    "Join the TopTier Trader Affiliates program and earn commissions by promoting our trading platform.",
  keywords:
    "TopTier Trader affiliates, trading affiliate program, earn commissions, promote trading platform, affiliate marketing",
  language: "en",
  subject: "Affiliate Program",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "TopTier Trader Affiliates - Join Our Program",
    description:
      "Become a TopTier Trader affiliate and earn competitive commissions by promoting our advanced trading platform.",
    // Ensure you replace with actual image metadata
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/en/affiliates-program",
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/en/affiliates-program",
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
    openGraph: {
      images: {},
    },
  },
};

const metadata_es = {
  metadataBase: new URL("https://www.toptiertrader.com"),
  title: "Programa de Afiliados de TopTier Trader",
  description:
    "Únete al programa de afiliados de TopTier Trader y gana comisiones promocionando nuestra plataforma de trading.",
  keywords:
    "afiliados de TopTier Trader, programa de afiliados de trading, ganar comisiones, promover plataforma de trading, marketing de afiliados",
  language: "es",
  subject: "Programa de Afiliados",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Afiliados de TopTier Trader - Únete a Nuestro Programa",
    description:
      "Conviértete en un afiliado de TopTier Trader y gana comisiones competitivas promocionando nuestra avanzada plataforma de trading.",
    // Replace with actual image metadata
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/es/affiliates-program",
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/es/affiliates-program",
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
    openGraph: {
      images: {},
    },
  },
};

const metadata_fr = {
  metadataBase: new URL("https://www.toptiertrader.com"),
  title: "Programme d'Affiliation TopTier Trader",
  description:
    "Rejoignez le programme d'affiliation TopTier Trader et gagnez des commissions en promouvant notre plateforme de trading.",
  keywords:
    "affiliés TopTier Trader, programme d'affiliation trading, gagner des commissions, promouvoir plateforme de trading, marketing d'affiliation",
  language: "fr",
  subject: "Programme d'Affiliation",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "website",
    title: "Affiliés TopTier Trader - Rejoignez Notre Programme",
    description:
      "Devenez un affilié TopTier Trader et gagnez des commissions compétitives en promouvant notre plateforme de trading avancée.",
    // Ensure you replace with actual image metadata
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/fr/affiliates-program",
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/fr/affiliates-program",
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
    openGraph: {
      images: {},
    },
  },
};

export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = "";
  const mainLang = locale.split("-")[0];

  if (mainLang === "en") {
    returnedMetadata = metadata_en;
  }
  if (mainLang === "es") {
    returnedMetadata = metadata_es;
  }
  if (mainLang === "fr") {
    returnedMetadata = metadata_fr;
  }
  return returnedMetadata;
}

const i18nNameSpaces = ["affiliates-program", "affiliates-faqs"];

export default async function Page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const faqTexts = {
    f1_t: t("affiliates-faqs:f1_t"),
    f1_p: t("affiliates-faqs:f1_p"),

    f2_t: t("affiliates-faqs:f2_t"),
    f2_p: t("affiliates-faqs:f2_p"),

    f3_t: t("affiliates-faqs:f3_t"),
    f3_p: t("affiliates-faqs:f3_p"),

    f4_t: t("affiliates-faqs:f4_t"),
    f4_p: t("affiliates-faqs:f4_p"),

    f5_t: t("affiliates-faqs:f5_t"),
    f5_p: t("affiliates-faqs:f5_p"),

    f6_t: t("affiliates-faqs:f6_t"),
    f6_p: t("affiliates-faqs:f6_p"),

    f7_t: t("affiliates-faqs:f7_t"),
    f7_p: t("affiliates-faqs:f7_p"),

    f8_t: t("affiliates-faqs:f8_t"),
    f8_p: t("affiliates-faqs:f8_p"),

    f9_t: t("affiliates-faqs:f9_t"),
    f9_p: t("affiliates-faqs:f9_p"),

    f10_t: t("affiliates-faqs:f10_t"),
    f10_p: t("affiliates-faqs:f10_p"),

    f11_t: t("affiliates-faqs:f11_t"),
    f11_p: t("affiliates-faqs:f11_p"),

    f12_t: t("affiliates-faqs:f12_t"),
    f12_p: t("affiliates-faqs:f12_p"),

    f13_t: t("affiliates-faqs:f13_t"),
    f13_p: t("affiliates-faqs:f13_p"),

    f14_t: t("affiliates-faqs:f14_t"),
    f14_p: t("affiliates-faqs:f14_p"),

    f15_t: t("affiliates-faqs:f15_t"),
    f15_p: t("affiliates-faqs:f15_p"),
  };

  const vipTranslations = {
    vip_title_one: t("vip_title_one"),
    vip_title_two: t("vip_title_two"),
    vip_description_one: t("vip_description_one"),
    vip_description_two: t("vip_description_two"),
    vip_req: t("vip_req"),
    vip_req_one: t("vip_req_one"),
    vip_req_two: t("vip_req_two"),
    vip_req_three: t("vip_req_three"),
    vip_incentive: t("vip_incentive"),
    vip_incentive_one: t("vip_incentive_one"),
    vip_incentive_two: t("vip_incentive_two"),
    vip_incentive_three: t("vip_incentive_three"),
  };

  const translatedTexts = {
    t1_1: t("t1_1"),
    t1_2: t("t1_2"),
    p1: t("p1"),
    cta: t("cta"),
    t2_1: t("t2_1"),
    t2_2: t("t2_2"),
    p2: t("p2"),
    tierCards: {
      tierCard1_title: t("tierCard1_title"),
      tierCard1_p: t("tierCard1_p"),
      tierCard2_title: t("tierCard2_title"),
      tierCard2_p: t("tierCard2_p"),
      tierCard3_title: t("tierCard3_title"),
      tierCard3_p: t("tierCard3_p"),
      tierGiftOne: t("tier_gift_one"),
      tierGiftTwo: t("tier_gift_two"),
      revenue: t("revenue"),
      commissions: t("new_comission"),
      secondarySales: t("secondary_sales"),
      link: t("link"),
      need: t("need"),
      sales: t("sales"),
      tier: t("tier"),
    },
    sales: {
      salesTitleOne: t("sales_t1"),
      salesTitleTwo: t("sales_t2"),
      salesTitleThree: t("sales_t3"),
      salesAfer: t("sales_after"),
      salesSales: t("sales_sales"),
    },
    t3_1: t("t3_1"),
    t3_2: t("t3_2"),
    benefits: {
      benefit1_title: t("benefit1_title"),
      benefit1_p: t("benefit1_p"),
      benefit2_title: t("benefit2_title"),
      benefit2_p: t("benefit2_p"),
      benefit3_title: t("benefit3_title"),
      benefit3_p: t("benefit3_p"),
      benefit4_title: t("benefit4_title"),
      benefit4_p: t("benefit4_p"),
    },
    p3: t("p3"),
    p4_1: t("p4_1"),
    p4_2: t("p4_2"),
    t4_1: t("t4_1"),
    t4_2: t("t4_2"),
    steps: {
      step1_title: t("step1_title"),
      step1_p: t("step1_p"),
      step2_title: t("step2_title"),
      step2_p: t("step2_p"),
      step3_title: t("step3_title"),
      step3_p: t("step3_p"),
    },
    t5_1: t("t5_1"),
    t5_2: t("t5_2"),
    faqs: t("faqs"),
    earnings: {
      communityEarnings: {
        communityEarnings_title: t("communityEarnings_title"),
        communityEarnings_p1: t("communityEarnings_p1"),
      },
      personalEarnings: {
        personalEarnings_title: t("personalEarnings_title"),
        personalEarnings_p1: t("personalEarnings_p1"),
        personalEarnings_p2: t("personalEarnings_p2"),
      },
      fiveKchallenge: t("5kChallenge"),
      tenKchallenge: t("10kChallenge"),
      twentyFiveKchallenge: t("25kChallenge"),
      tier2And3: t("tier2And3"),
      tier2And3_p: t("tier2and3_p"),
      tier1: t("tier1"),
      tier1_p: t("tier1_p"),
      tier2: t("tier2"),
      tier3: t("tier3"),
    },
  };

  return (
    <div className="bg-[#0A101B]">
      <div className="flex flex-col max-w-[1200px] mx-auto gap-16 md:gap-36  -mt-[100px] pt-36 mb:pt-56 mb:pb-32 pb-12 md:pt-[160px] text-[#545454]">
        <HeroSection translatedTexts={translatedTexts} />

        {/* Tier Cards Section */}
        <SectionLayout className="flex flex-col items-center pt-16 bg-[#0A101B] -mt-20 md:-mt-44 rounded-2xl gap-12">
          <div>
            <h2 className="text-3xl mb:text-4xl w-full font-light text-center max-w-2xl text-white">
              {translatedTexts.t2_1} {translatedTexts.t2_2}
            </h2>
            <p className="text-center text-secondary mt-6">
              {translatedTexts.p2}
            </p>
          </div>

          <TierCards texts={translatedTexts.tierCards} />

          {/* Vip section */}
          <div className="flex flex-col items-center md:px-6 -mt-5 mb:mt-0 w-full">
            <section className="flex flex-col mb:flex-row relative bg-gradient-to-br rounded-lg from-[#014AA4] to-[#012450] items-center mb:justify-between  w-full bg-white mb:py-10 px-6 py-8 mb:px-10">
              <Image
                sc
                className="absolute bottom-0 left-0"
                width={750}
                height={750}
                src={vipBgImage}
                alt="vipBgImage"
              />

              {/* Fist Row */}
              <div className="flex flex-col items-start z-30  justify-center ">
                <p className="text-white font-extralight text-3xl">
                  {vipTranslations.vip_title_one}
                </p>
                <p className="text-white text-4xl">
                  {vipTranslations.vip_title_two}
                </p>
                <p className="text-sm mt-8 mb:max-w-sm text-slate-200">
                  {" "}
                  <span className="font-semibold">
                    {" "}
                    {vipTranslations.vip_description_one}{" "}
                  </span>
                  {vipTranslations.vip_description_two}
                </p>

                <p className="mb-4 mt-5 text-sm text-white">
                  {vipTranslations.vip_req}
                </p>

                {/* 1st */}
                <div className="flex flex-row items-start ">
                  <FaCircleCheck className="text-[#45D1FF] mt-0.5 w-3 h-3 mr-2" />
                  <p className="text-xs mb:max-w-xs text-slate-300">
                    {vipTranslations.vip_req_one} 
                  </p>
                </div>

                {/* 2nd */}
                <div className="flex flex-row mt-3 items-start ">
                  <FaCircleCheck className="text-[#45D1FF] mt-0.5 w-3 h-3 mr-2" />
                  <p className="text-xs mb:max-w-xs text-slate-300">
                    {vipTranslations.vip_req_two} 
                  </p>
                </div>

                {/* 3rd */}
                <div className="flex flex-row mt-3 items-start ">
                  <FaCircleCheck className="text-[#45D1FF] mt-0.5 w-3 h-3 mr-2" />
                  <p className="text-xs mb:max-w-xs text-slate-300">
                    {vipTranslations.vip_req_three}
                  </p>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex mt-10 mb:mt-0 flex-col mb:ml-4 bg-black/10 px-4 py-10 mb:w-fit w-full  mb:px-8 mb:py-8 border border-[#717892] rounded-lg items-center">
                <p className="text-white font-semibold">
                  {vipTranslations.vip_incentive}
                </p>

                <section className="mt-4">
                  {/* First */}
                  <div className="flex flex-row text-sm mt-2 items-start z-30 mb:-ml-4 ">
                    <RiShieldStarFill className="w-4 h-4 mt-0.5 text-ttorange" />
                    <p className="ml-2 max-w-[230px] text-slate-200">
                      {vipTranslations.vip_incentive_one}
                    </p>
                  </div>
                  {/* Second */}
                  <div className="flex flex-row text-sm mt-4 items-start z-30 mb:-ml-4 ">
                    <RiShieldStarFill className="w-4 h-4 mt-0.5 text-ttorange" />
                    <p className="ml-2 max-w-[230px] text-slate-200">
                      {vipTranslations.vip_incentive_two}
                    </p>
                  </div>
                  {/* Third */}
                  <div className="flex flex-row text-sm mt-4 items-start z-30 mb:-ml-4 ">
                    <RiShieldStarFill className="w-4 h-4 mt-0.5 text-ttorange" />
                    <p className="ml-2 max-w-[230px] text-slate-200">
                      {vipTranslations.vip_incentive_three}
                    </p>
                  </div>
                </section>
              </div>
            </section>
          </div>

          <a href="https://app.toptiertrader.com/login" target="_blank">
            <div className="flex justify-center mt-0 mb:mt-3 ">
              <button className="flex flex-row mt-5 mb:mt-0 items-center text-sm text-white rounded-lg bg-[#FF532D] hover:bg-orange-700 transition-all py-2 px-4 scaleIn">
                {translatedTexts.cta}
              </button>
            </div>
          </a>
        </SectionLayout>

        {/* Sale Section */}
        <SectionLayout>
          <EverySale translatedTexts={translatedTexts.sales} />
          <a href="https://app.toptiertrader.com/login" target="_blank">
            <div className="flex justify-center mt-10 mb:mt-16 ">
              <button className="flex flex-row mt-5 mb:mt-0 items-center text-sm text-white rounded-lg bg-[#FF532D] hover:bg-orange-700 transition-all py-2 px-4 scaleIn">
                {translatedTexts.cta}
              </button>
            </div>
          </a>
        </SectionLayout>

        <SectionLayout>
          <h4 className="text-3xl mt-16 mb:mt-0 md:text-4xl font-light text-white text-center mb-12">
            {translatedTexts.t4_1} {translatedTexts.t4_2}
          </h4>

          <Steps texts={translatedTexts.steps} />

          <a href="https://app.toptiertrader.com/login" target="_blank">
            <div className="flex justify-center mt-8 mb:mt-12">
              <button className="flex flex-row mt-5 mb:mt-0 items-center text-sm text-white rounded-lg bg-[#FF532D] hover:bg-orange-700 transition-all py-2 px-4 scaleIn">
                {translatedTexts.cta}
              </button>
            </div>
          </a>
        </SectionLayout>

        {/* Video Section */}
        <SectionLayout>
          <div className="mt-20 mb:mt-0">
            <iframe
              className="mx-auto aspect-video w-full max-w-[1270px]"
              src="https://www.youtube.com/embed/Lpdzq341eIM?si=l0vrrOxKE_aoyZMw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <a href="https://app.toptiertrader.com/login" target="_blank">
            <div className="flex justify-center mt-12">
              <button className="flex flex-row mt-5 mb:mt-0 items-center text-sm text-white rounded-lg bg-[#FF532D] hover:bg-orange-700 transition-all py-2 px-4 scaleIn">
                {translatedTexts.cta}
              </button>
            </div>
          </a>
        </SectionLayout>

        {/* Faqs Section */}
        <SectionLayout className="-mb-12">
          <h5 className="text-3xl md:text-4xl font-medium max-w-2xl text-white mb-12">
            {translatedTexts.faqs}
          </h5>
          <AffiliatesFAQs texts={faqTexts} />
        </SectionLayout>
      </div>
    </div>
  );
}
