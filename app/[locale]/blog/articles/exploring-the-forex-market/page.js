//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

import { bgImageStyleBlog } from "@/constants/styles"

//Lazy loading for components
import Content from "../../../../../components/blog/Content";

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  ssr: true,
  loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-white ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
  </div>
})

 

const i18nNameSpaces = ["common", "blog_landing", "article_exploring_the_forex_market"];

//Params to bring the info from the db
const blogParam = "exploring-the-forex-market"

const metadata_en = {
  title: "Exploring the Forex Market: 4 Main Players You Need to Know",
  description: "Delve into the dynamics of the forex market and understand the roles of central banks, commercial banks, hedge funds, retail traders, and large corporations in currency trading.",
  keywords: "forex market, central banks, commercial banks, hedge funds, retail traders, large corporations, currency trading",
  language: "en",
  subject: "Exploring the Forex Market: Key Players",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Exploring the Forex Market: 4 Main Players You Need to Know",
    description: "Understand the essential roles and impacts of central banks, commercial banks, hedge funds, retail traders, and large corporations in the forex market.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};

const metadata_es = {
  title: "Explorando el Mercado Forex: Los 4 Principales Actores que Debes Conocer",
  description: "Adéntrate en la dinámica del mercado forex y comprende los roles de los bancos centrales, bancos comerciales, fondos de cobertura, traders minoristas y grandes corporaciones en el comercio de divisas.",
  keywords: "mercado forex, bancos centrales, bancos comerciales, fondos de cobertura, traders minoristas, grandes corporaciones, comercio de divisas",
  language: "es",
  subject: "Explorando el Mercado Forex: Actores Clave",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Explorando el Mercado Forex: Los 4 Principales Actores que Debes Conocer",
    description: "Comprende los roles esenciales y los impactos de los bancos centrales, bancos comerciales, fondos de cobertura, traders minoristas y grandes corporaciones en el mercado forex.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};

const metadata_fr = {
  title: "Exploration du Marché Forex : 4 Acteurs Principaux que Vous Devez Connaître",
  description: "Plongez dans la dynamique du marché forex et comprenez les rôles des banques centrales, des banques commerciales, des fonds spéculatifs, des traders individuels et des grandes corporations dans le trading de devises.",
  keywords: "marché forex, banques centrales, banques commerciales, fonds spéculatifs, traders individuels, grandes corporations, trading de devises",
  language: "fr",
  subject: "Exploration du Marché Forex : Acteurs Clés",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Exploration du Marché Forex : 4 Acteurs Principaux que Vous Devez Connaître",
    description: "Comprenez les rôles essentiels et l'impact des banques centrales, des banques commerciales, des fonds spéculatifs, des traders individuels et des grandes corporations sur le marché forex.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};


//Exports the metadata depending on the language
export async function generateMetadata({ params: { locale } }) {

  let returnedMetadata = ''
  const mainLang = locale.split('-')[0]

  if (mainLang === "en") {
    returnedMetadata = metadata_en
  }
  if (mainLang === "es") {
    returnedMetadata = metadata_es
  }
  if (mainLang === "fr") {
    returnedMetadata = metadata_fr
  }
  return returnedMetadata
}
export default async function Page({ params: { locale } }) {
  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  const mainLang = locale.split('-')[0]

  const headContentTranslations = {
    home: t('blog_landing:breadcrumbs_home'),
    blog: t('blog_landing:breadcrumbs_blog'),
  }

  const finalSectionTranslations = {
    form: {
      formTitle1: t('common:form_title_1'),
      formTitle2: t('common:form_title_2'),
      formLoop: t('common:form_loop'),
      formContent1: t('common:form_content_1'),
      formContent2: t('common:form_content_2'),
      formSubmit: t('common:form_submit'),
      emailHere: t('common:email_here')
    },
    wise: {
      wiseTitle1: t('common:wise_title_1'),
      wiseTitle2: t('common:wise_title_2'),
      wiseContent: t('common:wise_content')
    },
    resources: {
      resourcesTradingTitle: t('common:resources_trading_title'),
      resourcesResourcesTitle: t('common:resources_resources_title')
    }
  }

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-10">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className='mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5'> {t('article_exploring_the_forex_market:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">


          {t('article_exploring_the_forex_market:par_one')} <br /><br />

          {t('article_exploring_the_forex_market:par_two')} <br /><br />

          {t('article_exploring_the_forex_market:par_three')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_exploring_the_forex_market:title_one')}</h3> <br />

          {t('article_exploring_the_forex_market:par_four')} <br /><br />

          {t('article_exploring_the_forex_market:par_five')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_exploring_the_forex_market:title_two')}</h3> <br />

          {t('article_exploring_the_forex_market:par_six')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_exploring_the_forex_market:title_three')}</h3><br />

          {t('article_exploring_the_forex_market:par_seven')}<br /><br />

          {t('article_exploring_the_forex_market:par_eight')}<br /><br />

          {t('article_exploring_the_forex_market:par_nine')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_exploring_the_forex_market:title_four')}</h3><br />

          {t('article_exploring_the_forex_market:par_ten')}<br /><br />

          {t('article_exploring_the_forex_market:par_eleven')}<br /><br />

          {t('article_exploring_the_forex_market:par_twelve')}

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Exploring_The_Forex_Market_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Exploring the Forex Market"
            translation='Get Your Challenge Now' />
        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

