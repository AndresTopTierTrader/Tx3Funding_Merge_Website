//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";
import CtaButton from "@/components/common/Buttons/CtaButton";

const bgImageStyleBlog = {
  backgroundColor: "hsla(219,45%,7%,1)",
  width: "auto",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

import Content from "../../../../../components/blog/Content";

const FinalSectionLazyLoading = dynamic(
  () => import("@/components/common/FinalSection/Final-Section"),
  {
    ssr: true,
    loading: () => (
      <div className="flex flex-col items-center justify-center w-full py-10 mb:flex-row rounded-xl">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <p className="mt-5 ml-3 text-xl text-white mb:ml-5 mb:mt-0">
          Loading Latest Resources...
        </p>
      </div>
    ),
  }
);

const i18nNameSpaces = [
  "common",
  "blog_landing",
  "article_how_to_become_a_funded_trader",
];

//Params to bring the info from the db
const blogParam = "how-to-become-a-funded-trader";

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Complete Guide: How to Become a Funded Trader with TopTier Trader",
  description:
    "Master the step-by-step process to become a funded trader. Learn proven strategies, avoid costly mistakes, and start trading with capital up to $200K. Get funded today with TopTier Trader.",
  keywords:
    "funded trader, prop trading, prop firm, trading with capital, funded trading account, TopTier Trader, prop trader, trading challenge, evaluation, professional trader",
  language: "en",
  subject: "Funded Trading and Prop Trading Career Guide",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Complete Guide: How to Become a Funded Trader with TopTier Trader",
    description:
      "Master the step-by-step process to become a funded trader. Learn proven strategies, avoid costly mistakes, and start trading with capital up to $200K.",
    image: `${ENVIRONMENT_URL}/images/blog/how-to-become-funded-trader-guide.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/how-to-become-a-funded-trader`,
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`,
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
  },
};

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title:
    "Guía Completa: Cómo Convertirse en un Trader Financiado con TopTier Trader",
  description:
    "Domina el proceso paso a paso para convertirte en un trader financiado. Aprende estrategias probadas, evita errores costosos y comienza a operar con capital de hasta $200K.",
  keywords:
    "trader financiado, prop trading, firma prop, trading con capital, cuenta de trading financiada, TopTier Trader, prop trader, desafío de trading, evaluación, trader profesional",
  language: "es",
  subject: "Guía de Carrera en Trading Financiado y Prop Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title:
      "Guía Completa: Cómo Convertirse en un Trader Financiado con TopTier Trader",
    description:
      "Domina el proceso paso a paso para convertirte en un trader financiado. Aprende estrategias probadas, evita errores costosos y comienza a operar con capital de hasta $200K.",
    image: `${ENVIRONMENT_URL}/images/blog/how-to-become-funded-trader-guide.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/how-to-become-a-funded-trader`,
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`,
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
  },
};

const metadata_fr = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Guide Complet: Comment Devenir un Trader Financé avec TopTier Trader",
  description:
    "Maîtrisez le processus étape par étape pour devenir un trader financé. Apprenez des stratégies éprouvées, évitez les erreurs coûteuses et commencez à trader avec un capital jusqu'à 200K$.",
  keywords:
    "trader financé, prop trading, société prop, trading avec capital, compte de trading financé, TopTier Trader, prop trader, défi de trading, évaluation, trader professionnel",
  language: "fr",
  subject: "Guide de Carrière en Trading Financé et Prop Trading",
  coverage: "Mondial",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title:
      "Guide Complet: Comment Devenir un Trader Financé avec TopTier Trader",
    description:
      "Maîtrisez le processus étape par étape pour devenir un trader financé. Apprenez des stratégies éprouvées, évitez les erreurs coûteuses et commencez à trader avec un capital jusqu'à 200K$.",
    image: `${ENVIRONMENT_URL}/images/blog/how-to-become-funded-trader-guide.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/how-to-become-a-funded-trader`,
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`,
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr",
    },
  },
};

//Exports the metadata depending on the language
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

export default async function Page({ params: { locale } }) {
  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);
  const mainLang = locale.split("-")[0];

  const headContentTranslations = {
    home: t("blog_landing:breadcrumbs_home"),
    blog: t("blog_landing:breadcrumbs_blog"),
  };

  const finalSectionTranslations = {
    form: {
      formTitle1: t("common:form_title_1"),
      formTitle2: t("common:form_title_2"),
      formLoop: t("common:form_loop"),
      formContent1: t("common:form_content_1"),
      formContent2: t("common:form_content_2"),
      formSubmit: t("common:form_submit"),
      emailHere: t("common:email_here"),
    },
    wise: {
      wiseTitle1: t("common:wise_title_1"),
      wiseTitle2: t("common:wise_title_2"),
      wiseContent: t("common:wise_content"),
    },
    resources: {
      resourcesTradingTitle: t("common:resources_trading_title"),
      resourcesResourcesTitle: t("common:resources_resources_title"),
    },
  };

  //Translations for the blog article
  const blogTranslations = {
    h1_title: t("article_how_to_become_a_funded_trader:h1_title"),
    t1: t("article_how_to_become_a_funded_trader:t1"),
    t2: t("article_how_to_become_a_funded_trader:t2"),
    t3: t("article_how_to_become_a_funded_trader:t3"),
    t4: t("article_how_to_become_a_funded_trader:t4"),
    t5: t("article_how_to_become_a_funded_trader:t5"),
    t6: t("article_how_to_become_a_funded_trader:t6"),
    t7: t("article_how_to_become_a_funded_trader:t7"),
    t8: t("article_how_to_become_a_funded_trader:t8"),
    t9: t("article_how_to_become_a_funded_trader:t9"),
    t10: t("article_how_to_become_a_funded_trader:t10"),
    t11: t("article_how_to_become_a_funded_trader:t11"),
    t12: t("article_how_to_become_a_funded_trader:t12"),
    t13: t("article_how_to_become_a_funded_trader:t13"),
    t14: t("article_how_to_become_a_funded_trader:t14"),
    t15: t("article_how_to_become_a_funded_trader:t15"),

    p1_1: t("article_how_to_become_a_funded_trader:p1_1"),
    p1_2: t("article_how_to_become_a_funded_trader:p1_2"),

    p2_1: t("article_how_to_become_a_funded_trader:p2_1"),
    p2_2: t("article_how_to_become_a_funded_trader:p2_2"),

    p3_1: t("article_how_to_become_a_funded_trader:p3_1"),
    p3_2: t("article_how_to_become_a_funded_trader:p3_2"),
    p3_3: t("article_how_to_become_a_funded_trader:p3_3"),
    p3_4: t("article_how_to_become_a_funded_trader:p3_4"),

    p4_1: t("article_how_to_become_a_funded_trader:p4_1"),
    p4_2_1: t("article_how_to_become_a_funded_trader:p4_2_1"),
    p4_2_2: t("article_how_to_become_a_funded_trader:p4_2_2"),
    p4_2_3: t("article_how_to_become_a_funded_trader:p4_2_3"),
    p4_2_4: t("article_how_to_become_a_funded_trader:p4_2_4"),
    p4_2_5: t("article_how_to_become_a_funded_trader:p4_2_5"),
    p4_3: t("article_how_to_become_a_funded_trader:p4_3"),

    p5_1: t("article_how_to_become_a_funded_trader:p5_1"),
    p5_2: t("article_how_to_become_a_funded_trader:p5_2"),

    p6_1: t("article_how_to_become_a_funded_trader:p6_1"),
    p6_2_1: t("article_how_to_become_a_funded_trader:p6_2_1"),
    p6_2_2: t("article_how_to_become_a_funded_trader:p6_2_2"),
    p6_2_3: t("article_how_to_become_a_funded_trader:p6_2_3"),
    p6_2_4: t("article_how_to_become_a_funded_trader:p6_2_4"),
    p6_3_bold: t("article_how_to_become_a_funded_trader:p6_3_bold"),
    p6_3: t("article_how_to_become_a_funded_trader:p6_3"),
    p6_4: t("article_how_to_become_a_funded_trader:p6_4"),

    p7_1: t("article_how_to_become_a_funded_trader:p7_1"),

    p8_1: t("article_how_to_become_a_funded_trader:p8_1"),
    p8_2_1: t("article_how_to_become_a_funded_trader:p8_2_1"),
    p8_2_link: t("article_how_to_become_a_funded_trader:p8_2_link"),
    p8_2_2: t("article_how_to_become_a_funded_trader:p8_2_2"),
    p8_3: t("article_how_to_become_a_funded_trader:p8_3"),

    p9_1_bold: t("article_how_to_become_a_funded_trader:p9_1_bold"),
    p9_1: t("article_how_to_become_a_funded_trader:p9_1"),
    p9_2_bold: t("article_how_to_become_a_funded_trader:p9_2_bold"),
    p9_2: t("article_how_to_become_a_funded_trader:p9_2"),
    p9_3_bold: t("article_how_to_become_a_funded_trader:p9_3_bold"),
    p9_3: t("article_how_to_become_a_funded_trader:p9_3"),
    p9_4_bold: t("article_how_to_become_a_funded_trader:p9_4_bold"),
    p9_4: t("article_how_to_become_a_funded_trader:p9_4"),
    p9_5_bold: t("article_how_to_become_a_funded_trader:p9_5_bold"),
    p9_5: t("article_how_to_become_a_funded_trader:p9_5"),

    p10_1: t("article_how_to_become_a_funded_trader:p10_1"),
    p10_2_link: t("article_how_to_become_a_funded_trader:p10_2_link"),
    p10_2: t("article_how_to_become_a_funded_trader:p10_2"),

    p11_1_bold: t("article_how_to_become_a_funded_trader:p11_1_bold"),
    p11_1: t("article_how_to_become_a_funded_trader:p11_1"),
    p11_1_link: t("article_how_to_become_a_funded_trader:p11_1_link"),
    p11_2_bold: t("article_how_to_become_a_funded_trader:p11_2_bold"),
    p11_2: t("article_how_to_become_a_funded_trader:p11_2"),
    p11_3_bold: t("article_how_to_become_a_funded_trader:p11_3_bold"),
    p11_3: t("article_how_to_become_a_funded_trader:p11_3"),
    p11_4_bold: t("article_how_to_become_a_funded_trader:p11_4_bold"),
    p11_4: t("article_how_to_become_a_funded_trader:p11_4"),

    p12_1: t("article_how_to_become_a_funded_trader:p12_1"),
    p12_2: t("article_how_to_become_a_funded_trader:p12_2"),
    p12_3: t("article_how_to_become_a_funded_trader:p12_3"),
    p12_4: t("article_how_to_become_a_funded_trader:p12_4"),

    CTA: t("article_how_to_become_a_funded_trader:CTA"),
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <Content
        currentLanguage={i18n.language}
        params={blogParam}
        translations={headContentTranslations}
        locale={locale}
      />

      {/* Article Content */}
      <div
        style={bgImageStyleBlog}
        className="flex flex-col items-start pb-20 mb:pt-5"
      >
        <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5 ">
          {blogTranslations.h1_title}
        </h1>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">
          {blogTranslations.p1_1}
          <br /> <br />
          {blogTranslations.p1_2}
          <br /> <br /> <br />
          <h3 className="text-2xl font-semibold text-white">
            {blogTranslations.t1}
          </h3>
          <br />
          {blogTranslations.p2_1}
          <br /> <br />
          {blogTranslations.p2_2}
          <br /> <br />
          <h3 className="text-2xl font-semibold text-white">
            {blogTranslations.t2}
          </h3>
          <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t3}
          </h3>
          <br />
          {blogTranslations.p3_1}
          <br /> <br />
          {blogTranslations.p3_2}
          <br /> <br />
          {blogTranslations.p3_3}
          <br /> <br />
          {blogTranslations.p3_4}
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t4}
          </h3>
          <br />
          {blogTranslations.p4_1}
          <br /> <br />
          <ul className="flex flex-col list-disc pl-6 gap-1">
            <li>{blogTranslations.p4_2_1}</li>
            <li>{blogTranslations.p4_2_2}</li>
            <li>
              <a
                href={`${ENVIRONMENT_URL}/es/blog/articles/payouts-on-demand`}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {blogTranslations.p4_2_3}
              </a>
            </li>

            <li>{blogTranslations.p4_2_4}</li>
            <li>{blogTranslations.p4_2_5}</li>
          </ul>{" "}
          <br />
          <a href={`${ENVIRONMENT_URL}/es/two-phase-challenge`}>
            {blogTranslations.p4_3}
          </a>
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t5}
          </h3>
          <br />
          {blogTranslations.p5_1}
          <br /> <br />
          {blogTranslations.p5_2}
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t6}
          </h3>
          <br />
          {blogTranslations.p6_1}
          <br /> <br />
          <ul className="flex flex-col list-disc pl-6 gap-1">
            <li>{blogTranslations.p6_2_1}</li>
            <li>{blogTranslations.p6_2_2}</li>
            <li>{blogTranslations.p6_2_3}</li>
            <li>{blogTranslations.p6_2_4}</li>
          </ul>
          <br />
          <strong>{blogTranslations.p6_3_bold}</strong>
          {blogTranslations.p6_3}
          <br /> <br />
          {blogTranslations.p6_4}
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t7}
          </h3>
          <br />
          {blogTranslations.p7_1}
          <br /> <br />
          <h3 className="text-2xl font-semibold text-white">
            {blogTranslations.t8}
          </h3>
          <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t9}
          </h3>
          {blogTranslations.p8_1}
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t10}
          </h3>
          {blogTranslations.p8_2_1}
          <a
            href={`${ENVIRONMENT_URL}/es/blog/articles/tradezella`}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {blogTranslations.p8_2_link}
          </a>
          {blogTranslations.p8_2_2}
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t11}
          </h3>
          {blogTranslations.p8_3}
          <br /> <br />
          <h3 className="text-2xl font-semibold text-white">
            {blogTranslations.t12}
          </h3>
          <strong>{blogTranslations.p9_1_bold}</strong>
          <br />
          {blogTranslations.p9_1}
          <br /> <br />
          <strong>{blogTranslations.p9_2_bold}</strong>
          <br />
          {blogTranslations.p9_2}
          <br /> <br />
          <strong>{blogTranslations.p9_3_bold}</strong>
          <br />
          {blogTranslations.p9_3}
          <br /> <br />
          <strong>{blogTranslations.p9_4_bold}</strong>
          <br />
          {blogTranslations.p9_4}
          <br /> <br />
          <strong>{blogTranslations.p9_5_bold}</strong>
          <br />
          {blogTranslations.p9_5}
          <br /> <br />
          <h3 className="text-2xl font-semibold text-white">
            {blogTranslations.t13}
          </h3>
          <br />
          {blogTranslations.p10_1}
          <br /> <br />
          <a
            href={`${ENVIRONMENT_URL}/es/two-phase-challenge`}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {blogTranslations.p10_2_link}
          </a>
          {blogTranslations.p10_2}
          <br /> <br />
          <h3 className="text-xl font-semibold text-white">
            {blogTranslations.t14}
          </h3>
          <br />
          <strong>{blogTranslations.p11_1_bold}</strong>
          <br />
          {blogTranslations.p11_1}
          <a
            href={`${ENVIRONMENT_URL}/es/two-phase-challenge`}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {blogTranslations.p11_1_link}
          </a>
          <br /> <br />
          <strong>{blogTranslations.p11_2_bold}</strong>
          <br />
          {blogTranslations.p11_2}
          <br /> <br />
          <strong>{blogTranslations.p11_3_bold}</strong>
          <br />
          {blogTranslations.p11_3}
          <br /> <br />
          <strong>{blogTranslations.p11_4_bold}</strong>
          <br />
          {blogTranslations.p11_4}
          <br /> <br />
          <h3 className="text-2xl font-semibold text-white">
            {blogTranslations.t15}
          </h3>
          <br />
          {blogTranslations.p12_1}
          <br /> <br />
          {blogTranslations.p12_2}
          <br /> <br />
          {blogTranslations.p12_3}
          <br /> <br />
          <a
            href={`${ENVIRONMENT_URL}/es/two-phase-challenge`}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            {blogTranslations.p12_4}
          </a>
          <br /> <br />
          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=How_To_Become_A_Funded_Trader_Blog_CTA&hcategory=August2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="How to Become a Funded Trader"
            translation={blogTranslations.CTA}
          />
          <br />
        </article>
      </div>

      <FinalSectionLazyLoading
        translations={finalSectionTranslations}
        isResourcesVisible={false}
        locale={mainLang}
      />
    </TranslationsProvider>
  );
}
