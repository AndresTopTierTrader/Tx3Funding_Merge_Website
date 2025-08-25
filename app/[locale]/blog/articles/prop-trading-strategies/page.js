//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import trendChart from "./assets/trendChart.webp";
import scalpingChart from "./assets/scalpingChart.webp";
import swingChart from "./assets/swingChart.webp";

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
  "article_prop_trading_strategies",
];

//Params to bring the info from the db
const blogParam = "prop-trading-strategies";

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Prop Trading Strategies: Complete Guide for Funded Traders",
  description:
    "Master the most successful prop trading strategies. Learn trend following, scalping, swing trading, and risk management techniques that keep you funded and profitable.",
  keywords:
    "prop trading strategies, funded trading, trend following, scalping strategies, swing trading, risk management, prop firm trading, trading psychology, position sizing, drawdown management",
  language: "en",
  subject: "Prop Trading Strategies and Risk Management",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Prop Trading Strategies: Complete Guide for Funded Traders",
    description:
      "The most successful prop trading strategies prioritize consistency over spectacular gains. Learn trend following, scalping, and swing trading approaches that align with prop firm requirements.",
    image: `${ENVIRONMENT_URL}/images/blog/prop-trading-strategies-cover.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/prop-trading-strategies`,
  },
  alternates: {
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
  title: "Estrategias de Prop Trading: Guía Completa para Traders Financiados",
  description:
    "Domina las estrategias de prop trading más exitosas. Aprende seguimiento de tendencias, scalping, swing trading y técnicas de gestión de riesgo que te mantienen financiado y rentable.",
  keywords:
    "estrategias prop trading, trading financiado, seguimiento tendencias, estrategias scalping, swing trading, gestión riesgo, trading prop firm, psicología trading, dimensionamiento posiciones, gestión drawdown",
  language: "es",
  subject: "Estrategias de Prop Trading y Gestión de Riesgo",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title:
      "Estrategias de Prop Trading: Guía Completa para Traders Financiados",
    description:
      "Las estrategias de prop trading más exitosas priorizan la consistencia sobre las ganancias espectaculares. Aprende seguimiento de tendencias, scalping y swing trading alineados con los requisitos de prop firms.",
    image: `${ENVIRONMENT_URL}/images/blog/prop-trading-strategies-cover.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/prop-trading-strategies`,
  },
  alternates: {
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
  title: "Stratégies de Prop Trading 2025: Guide Complet pour Traders Financés",
  description:
    "Maîtrisez les stratégies de prop trading les plus réussies en 2025. Apprenez le suivi de tendances, le scalping, le swing trading et les techniques de gestion des risques qui vous maintiennent financé et rentable.",
  keywords:
    "stratégies prop trading, trading financé, suivi tendances, stratégies scalping, swing trading, gestion risques, trading prop firm, psychologie trading, dimensionnement positions, gestion drawdown",
  language: "fr",
  subject: "Stratégies de Prop Trading et Gestion des Risques",
  coverage: "Mondial",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title:
      "Stratégies de Prop Trading 2025: Guide Complet pour Traders Financés",
    description:
      "Les stratégies de prop trading les plus réussies privilégient la cohérence plutôt que les gains spectaculaires. Découvrez le suivi de tendances, le scalping et le swing trading alignés sur les exigences des prop firms.",
    image: `${ENVIRONMENT_URL}/images/blog/prop-trading-strategies-cover.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/prop-trading-strategies`,
  },
  alternates: {
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
    h1_title: t("article_prop_trading_strategies:h1_title"),
    t1: t("article_prop_trading_strategies:t1"),
    t2: t("article_prop_trading_strategies:t2"),
    t3: t("article_prop_trading_strategies:t3"),
    t4: t("article_prop_trading_strategies:t4"),
    t5: t("article_prop_trading_strategies:t5"),
    t6: t("article_prop_trading_strategies:t6"),
    t7: t("article_prop_trading_strategies:t7"),
    t8: t("article_prop_trading_strategies:t8"),

    p1_1: t("article_prop_trading_strategies:p1_1"),
    p1_2: t("article_prop_trading_strategies:p1_2"),
    p1_3: t("article_prop_trading_strategies:p1_3"),

    p2_1: t("article_prop_trading_strategies:p2_1"),
    p2_2: t("article_prop_trading_strategies:p2_2"),
    p2_3: t("article_prop_trading_strategies:p2_3"),
    p2_4: t("article_prop_trading_strategies:p2_4"),
    p2_5: t("article_prop_trading_strategies:p2_5"),

    p3_1: t("article_prop_trading_strategies:p3_1"),
    p3_2_bold: t("article_prop_trading_strategies:p3_2_bold"),
    p3_2: t("article_prop_trading_strategies:p3_2"),
    p3_3: t("article_prop_trading_strategies:p3_3"),
    p3_4_bold: t("article_prop_trading_strategies:p3_4_bold"),
    p3_4: t("article_prop_trading_strategies:p3_4"),
    p3_5: t("article_prop_trading_strategies:p3_5"),
    p3_6_bold: t("article_prop_trading_strategies:p3_6_bold"),
    p3_6: t("article_prop_trading_strategies:p3_6"),

    p4_1: t("article_prop_trading_strategies:p4_1"),
    p4_2_bold: t("article_prop_trading_strategies:p4_2_bold"),
    p4_2: t("article_prop_trading_strategies:p4_2"),
    p4_3: t("article_prop_trading_strategies:p4_3"),
    p4_4_bold: t("article_prop_trading_strategies:p4_4_bold"),
    p4_4: t("article_prop_trading_strategies:p4_4"),
    p4_5: t("article_prop_trading_strategies:p4_5"),
    p4_6_bold: t("article_prop_trading_strategies:p4_6_bold"),
    p4_6: t("article_prop_trading_strategies:p4_6"),

    p5_1: t("article_prop_trading_strategies:p5_1"),
    p5_2_bold: t("article_prop_trading_strategies:p5_2_bold"),
    p5_2: t("article_prop_trading_strategies:p5_2"),
    p5_3: t("article_prop_trading_strategies:p5_3"),
    p5_4_bold: t("article_prop_trading_strategies:p5_4_bold"),
    p5_4: t("article_prop_trading_strategies:p5_4"),
    p5_5: t("article_prop_trading_strategies:p5_5"),
    p5_6_bold: t("article_prop_trading_strategies:p5_6_bold"),
    p5_6: t("article_prop_trading_strategies:p5_6"),

    p6_1: t("article_prop_trading_strategies:p6_1"),
    p6_2_bold: t("article_prop_trading_strategies:p6_2_bold"),
    p6_2: t("article_prop_trading_strategies:p6_2"),
    p6_3: t("article_prop_trading_strategies:p6_3"),
    p6_4_bold: t("article_prop_trading_strategies:p6_4_bold"),
    p6_4: t("article_prop_trading_strategies:p6_4"),
    p6_5_bold: t("article_prop_trading_strategies:p6_5_bold"),
    p6_5: t("article_prop_trading_strategies:p6_5"),

    p7_1: t("article_prop_trading_strategies:p7_1"),
    p7_2_bold: t("article_prop_trading_strategies:p7_2_bold"),
    p7_2: t("article_prop_trading_strategies:p7_2"),
    p7_3: t("article_prop_trading_strategies:p7_3"),
    p7_4_bold: t("article_prop_trading_strategies:p7_4_bold"),
    p7_4: t("article_prop_trading_strategies:p7_4"),
    p7_5: t("article_prop_trading_strategies:p7_5"),
    p7_6_bold: t("article_prop_trading_strategies:p7_6_bold"),
    p7_6: t("article_prop_trading_strategies:p7_6"),

    p8_1: t("article_prop_trading_strategies:p8_1"),
    p8_2_bold: t("article_prop_trading_strategies:p8_2_bold"),
    p8_2: t("article_prop_trading_strategies:p8_2"),
    p8_3: t("article_prop_trading_strategies:p8_3"),
    p8_4_bold: t("article_prop_trading_strategies:p8_4_bold"),
    p8_4: t("article_prop_trading_strategies:p8_4"),
    p8_5_bold: t("article_prop_trading_strategies:p8_5_bold"),
    p8_5: t("article_prop_trading_strategies:p8_5"),
    
    p9_1: t("article_prop_trading_strategies:p9_1"),
    p9_2: t("article_prop_trading_strategies:p9_2"),
    p9_3_1: t("article_prop_trading_strategies:p9_3_1"),
    p9_3_link: t("article_prop_trading_strategies:p9_3_link"),
    p9_3_2: t("article_prop_trading_strategies:p9_3_2"),

    CTA: t("article_prop_trading_strategies:CTA"),
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
          
          {blogTranslations.p1_1}<br /> <br />
          {blogTranslations.p1_2}<br /> <br />
          {blogTranslations.p1_3}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t1}</h3><br />
          {blogTranslations.p2_1}<br /> <br />
          {blogTranslations.p2_2}<br /> <br />
          {blogTranslations.p2_3}<br /> <br />
          {blogTranslations.p2_4}<br /> <br />
          {blogTranslations.p2_5}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t2}</h3><br />
          {blogTranslations.p3_1}<br /> <br />
          <Image src={trendChart} alt="trend following chart" className="w-full" /> <br />
          <strong>{blogTranslations.p3_2_bold}</strong>{blogTranslations.p3_2}<br /> <br />
          {blogTranslations.p3_3}<br /> <br />
          <strong>{blogTranslations.p3_4_bold}</strong>{blogTranslations.p3_4}<br /> <br />
          {blogTranslations.p3_5}<br /> <br />
          <strong>{blogTranslations.p3_6_bold}</strong>{blogTranslations.p3_6}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t3}</h3><br />
          {blogTranslations.p4_1}<br /> <br />
          <Image src={scalpingChart} alt="scalping chart" className="w-full" /> <br />
          <strong>{blogTranslations.p4_2_bold}</strong>{blogTranslations.p4_2}<br /> <br />
          {blogTranslations.p4_3}<br /> <br />
          <strong>{blogTranslations.p4_4_bold}</strong>{blogTranslations.p4_4}<br /> <br />
          {blogTranslations.p4_5}<br /> <br />
          <strong>{blogTranslations.p4_6_bold}</strong>{blogTranslations.p4_6}<br /> <br />

          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t4}</h3><br />
          {blogTranslations.p5_1}<br /> <br />
          <Image src={swingChart} alt="swing trading chart" className="w-full" /> <br />
          <strong>{blogTranslations.p5_2_bold}</strong>{blogTranslations.p5_2}<br /> <br />
          {blogTranslations.p5_3}<br /> <br />
          <strong>{blogTranslations.p5_4_bold}</strong>{blogTranslations.p5_4}<br /> <br />
          {blogTranslations.p5_5}<br /> <br />
          <strong>{blogTranslations.p5_6_bold}</strong>{blogTranslations.p5_6}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t5}</h3><br />
          {blogTranslations.p6_1}<br /> <br />
          <strong>{blogTranslations.p6_2_bold}</strong>{blogTranslations.p6_2}<br /> <br />
          {blogTranslations.p6_3}<br /> <br />
          <strong>{blogTranslations.p6_4_bold}</strong>{blogTranslations.p6_4}<br /> <br />
          <strong>{blogTranslations.p6_5_bold}</strong>{blogTranslations.p6_5}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t6}</h3><br />
          {blogTranslations.p7_1}<br /> <br />
          <strong>{blogTranslations.p7_2_bold}</strong>{blogTranslations.p7_2}<br /> <br />
          {blogTranslations.p7_3}<br /> <br />
          <strong>{blogTranslations.p7_4_bold}</strong>{blogTranslations.p7_4}<br /> <br />
          {blogTranslations.p7_5}<br /> <br />
          <strong>{blogTranslations.p7_6_bold}</strong>{blogTranslations.p7_6}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t7}</h3><br />
          {blogTranslations.p8_1}<br /> <br />
          <strong>{blogTranslations.p8_2_bold}</strong>{blogTranslations.p8_2}<br /> <br />
          {blogTranslations.p8_3}<br /> <br />
          <strong>{blogTranslations.p8_4_bold}</strong>{blogTranslations.p8_4}<br /> <br />
          <strong>{blogTranslations.p8_5_bold}</strong>{blogTranslations.p8_5}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t8}</h3><br />
          {blogTranslations.p9_1}<br /> <br />
          {blogTranslations.p9_2}<br /> <br />
          {blogTranslations.p9_3_1}
          <a href={`${ENVIRONMENT_URL}`} className="underline">{blogTranslations.p9_3_link}</a>
          {blogTranslations.p9_3_2}<br /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Prop_Trading_Strategies_Blog_CTA&hcategory=August2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Prop Trading Strategies: Complete Guide for Funded Traders"
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
