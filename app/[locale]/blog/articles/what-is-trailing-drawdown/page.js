//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
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
  "article_what_is_trailing_drawdown",
];

//Params to bring the info from the db
const blogParam = "what-is-trailing-drawdown";

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "What is Trailing Drawdown? Complete Guide for Prop Traders",
  description:
    "Master trailing drawdown rules with our comprehensive guide. Learn the difference between EOD vs intraday systems, static vs trailing drawdown, and avoid instant disqualification from prop trading firms.",
  keywords:
    "trailing drawdown, prop trading, risk management, drawdown rules, EOD drawdown, intraday drawdown, static drawdown, prop firm challenge, funded trader, trading evaluation",
  language: "en",
  subject: "Prop Trading Risk Management",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "What is Trailing Drawdown? Complete Guide for Prop Traders",
    description:
      "Understanding trailing drawdown is crucial for prop firm success. Learn how this dynamic risk management rule protects profits while testing disciplined trading.",
    image:
      `${ENVIRONMENT_URL}/images/blog/trailing-drawdown-guide-cover.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/what-is-trailing-drawdown`,
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
  title: "¿Qué es el Trailing Drawdown? Guía Completa para Traders Prop",
  description:
    "Domina las reglas del trailing drawdown con nuestra guía completa. Aprende la diferencia entre sistemas EOD vs intradía, drawdown estático vs trailing, y evita la descalificación instantánea de las firmas prop.",
  keywords:
    "trailing drawdown, trading prop, gestión de riesgo, reglas de drawdown, drawdown EOD, drawdown intradía, drawdown estático, desafío prop firm, trader financiado, evaluación de trading",
  language: "es",
  subject: "Gestión de Riesgo en Trading Prop",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "¿Qué es el Trailing Drawdown? Guía Completa para Traders Prop",
    description:
      "Entender el trailing drawdown es crucial para el éxito en prop firms. Aprende cómo esta regla dinámica de gestión de riesgo protege las ganancias mientras prueba el trading disciplinado.",
    image:
      `${ENVIRONMENT_URL}/images/blog/trailing-drawdown-guide-cover.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/what-is-trailing-drawdown`,
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
  title: "Qu'est-ce que le Trailing Drawdown ? Guide Complet pour Traders Prop",
  description:
    "Maîtrisez les règles du trailing drawdown avec notre guide complet. Apprenez la différence entre les systèmes EOD vs intrajournaliers, drawdown statique vs trailing, et évitez la disqualification instantanée des sociétés prop.",
  keywords:
    "trailing drawdown, trading prop, gestion des risques, règles de drawdown, drawdown EOD, drawdown intrajournalier, drawdown statique, défi prop firm, trader financé, évaluation de trading",
  language: "fr",
  subject: "Gestion des Risques en Trading Prop",
  coverage: "Mondial",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title:
      "Qu'est-ce que le Trailing Drawdown ? Guide Complet pour Traders Prop",
    description:
      "Comprendre le trailing drawdown est crucial pour le succès des prop firms. Découvrez comment cette règle dynamique de gestion des risques protège les profits tout en testant un trading discipliné.",
    image:
      `${ENVIRONMENT_URL}/images/blog/trailing-drawdown-guide-cover.jpg`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/what-is-trailing-drawdown`,
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
    h1_title: t("article_what_is_trailing_drawdown:h1_title"),
    t1: t("article_what_is_trailing_drawdown:t1"),
    t2: t("article_what_is_trailing_drawdown:t2"),
    t3: t("article_what_is_trailing_drawdown:t3"),
    t4: t("article_what_is_trailing_drawdown:t4"),
    t5: t("article_what_is_trailing_drawdown:t5"),
    t6: t("article_what_is_trailing_drawdown:t6"),
    t6: t("article_what_is_trailing_drawdown:t7"),

    p1_1: t("article_what_is_trailing_drawdown:p1_1"),
    p1_2: t("article_what_is_trailing_drawdown:p1_2"),
    p1_3: t("article_what_is_trailing_drawdown:p1_3"),

    p2_1: t("article_what_is_trailing_drawdown:p2_1"),
    p2_2: t("article_what_is_trailing_drawdown:p2_2"),
    p2_3: t("article_what_is_trailing_drawdown:p2_3"),
    p2_4: t("article_what_is_trailing_drawdown:p2_4"),
    p2_5: t("article_what_is_trailing_drawdown:p2_5"),
    p2_6: t("article_what_is_trailing_drawdown:p2_6"),

    p3_1: t("article_what_is_trailing_drawdown:p3_1"),
    p3_2: t("article_what_is_trailing_drawdown:p3_2"),
    p3_3: t("article_what_is_trailing_drawdown:p3_3"),
    p3_4: t("article_what_is_trailing_drawdown:p3_4"),
    p3_5: t("article_what_is_trailing_drawdown:p3_5"),
    p3_6: t("article_what_is_trailing_drawdown:p3_6"),
    p3_7: t("article_what_is_trailing_drawdown:p3_7"),

    p4_1: t("article_what_is_trailing_drawdown:p4_1"),
    p4_2_bold: t("article_what_is_trailing_drawdown:p4_2_bold"),
    p4_2: t("article_what_is_trailing_drawdown:p4_2"),
    p4_3: t("article_what_is_trailing_drawdown:p4_3"),
    p4_4: t("article_what_is_trailing_drawdown:p4_4"),
    p4_5: t("article_what_is_trailing_drawdown:p4_5"),
    p4_6: t("article_what_is_trailing_drawdown:p4_6"),
    p4_7: t("article_what_is_trailing_drawdown:p4_7"),
    p4_8: t("article_what_is_trailing_drawdown:p4_8"),
    p4_9: t("article_what_is_trailing_drawdown:p4_9"),

    p5_1: t("article_what_is_trailing_drawdown:p5_1"),
    p5_2: t("article_what_is_trailing_drawdown:p5_2"), 
    p5_2_bold: t("article_what_is_trailing_drawdown:p5_2_bold"), 
    p5_3: t("article_what_is_trailing_drawdown:p5_3"),
    p5_3_bold: t("article_what_is_trailing_drawdown:p5_3_bold"), 
    p5_4: t("article_what_is_trailing_drawdown:p5_4"),
    p5_4_bold: t("article_what_is_trailing_drawdown:p5_4_bold"), 
    p5_5: t("article_what_is_trailing_drawdown:p5_5"),

    p6_1: t("article_what_is_trailing_drawdown:p6_1"),
    p6_2_1: t("article_what_is_trailing_drawdown:p6_2_1"),
    p6_2_2: t("article_what_is_trailing_drawdown:p6_2_2"),
    p6_2_3: t("article_what_is_trailing_drawdown:p6_2_3"),
    p6_2_4: t("article_what_is_trailing_drawdown:p6_2_4"),
    p6_2_5: t("article_what_is_trailing_drawdown:p6_2_5"),

    p7_1: t("article_what_is_trailing_drawdown:p7_1"),
    p7_2: t("article_what_is_trailing_drawdown:p7_2"),
    p7_3: t("article_what_is_trailing_drawdown:p7_3"),
    p7_4: t("article_what_is_trailing_drawdown:p7_4"),
    p7_5: t("article_what_is_trailing_drawdown:p7_5"),

    CTA: t("article_what_is_trailing_drawdown:CTA")
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
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t1}</h3><br />
          {blogTranslations.p1_1}<br /> <br />
          {blogTranslations.p1_2}<br /> <br />
          {blogTranslations.p1_3}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t2}</h3><br />
          {blogTranslations.p2_1}<br /> <br />
          {blogTranslations.p2_2}<br /> <br />
          {blogTranslations.p2_3}<br /> <br />
          {blogTranslations.p2_4}<br /> <br />
          {blogTranslations.p2_5}<br /> <br />
          {blogTranslations.p2_6}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t3}</h3><br />
          {blogTranslations.p3_1}<br /> <br />
          {blogTranslations.p3_2}<br /> <br />
          {blogTranslations.p3_3}<br /> <br />
          {blogTranslations.p3_4}<br /> <br />
          {blogTranslations.p3_5}<br /> <br />
          {blogTranslations.p3_6}<br /> <br />
          {blogTranslations.p3_7}<br /> <br />

          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t4}</h3><br />
          {blogTranslations.p4_1}<br /> <br />
          <strong>{blogTranslations.p4_2_bold}</strong>{blogTranslations.p4_2}<br /> <br />
          {blogTranslations.p4_3}<br /> <br />
          {blogTranslations.p4_4}<br /> <br />
          {blogTranslations.p4_5}<br /> <br />
          {blogTranslations.p4_6}<br /> <br />
          {blogTranslations.p4_7}<br /> <br />
          {blogTranslations.p4_8}<br /> <br />
          {blogTranslations.p4_9}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t5}</h3><br />
          {blogTranslations.p5_1}<br /> <br />
          <strong>{blogTranslations.p5_2_bold}</strong>{blogTranslations.p5_2}<br /> <br />
          <strong>{blogTranslations.p5_3_bold}</strong>{blogTranslations.p5_3}<br /> <br />
          <strong>{blogTranslations.p5_4_bold}</strong>{blogTranslations.p5_4}<br /> <br />
          {blogTranslations.p5_5}<br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t6}</h3><br />
          {blogTranslations.p6_1}<br /> <br />
          <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>{blogTranslations.p6_2_1}</li>
                        <li>{blogTranslations.p6_2_2}</li>
                        <li>{blogTranslations.p6_2_3}</li>
                        <li>{blogTranslations.p6_2_4}</li>
                        <li>{blogTranslations.p6_2_5}</li>
                    </ul> <br /> <br />
          
          <h3 className="text-2xl font-semibold text-white">{blogTranslations.t7}</h3><br />
          {blogTranslations.p7_1}<br /> <br />
          {blogTranslations.p7_2}<br /> <br />
          {blogTranslations.p7_3}
          <a href={`${ENVIRONMENT_URL}`} className="underline">{blogTranslations.p7_4}</a>
          {blogTranslations.p7_5}<br /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Trailing_drawdown_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="What is Trailing Drawdown in Prop Trading? (EOD vs Intraday Explained)"
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
