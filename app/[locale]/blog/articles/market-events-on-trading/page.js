//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"
import { ENVIRONMENT_URL } from "@/constants/global";

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

const i18nNameSpaces = ["common", "blog_landing", "article_market_events_on_trading"];

//Params to bring the info from the db
const blogParam = "market-events-on-trading"

const metadata_en = {
  title: "Understanding the Forex Market: Key Players and Their Impact",
  description: "Gain a comprehensive understanding of the forex market and the various players that shape its dynamics. Learn how central and commercial banks, hedge funds, retail traders, and large corporations influence the forex trading landscape.",
  keywords: "forex market, central banks, commercial banks, hedge funds, retail traders, large corporations, forex trading, market players",
  language: "en",
  subject: "Forex Market Structure and Key Players",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Understanding the Forex Market: Key Players and Their Impact",
    description: "Explore the roles of central banks, commercial banks, hedge funds, retail traders, and large corporations in the forex market. Discover how each contributes to the market's dynamics and how this knowledge can help you succeed in forex trading.",
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
  title: "Entendiendo el Mercado Forex: Actores Principales y su Impacto",
  description: "Obtén un entendimiento completo del mercado forex y los diversos actores que definen su dinámica. Aprende cómo los bancos centrales, bancos comerciales, fondos de cobertura, traders minoristas y grandes corporaciones influyen en el panorama del trading de forex.",
  keywords: "mercado forex, bancos centrales, bancos comerciales, fondos de cobertura, traders minoristas, grandes corporaciones, trading de forex, actores del mercado",
  language: "es",
  subject: "Estructura del Mercado Forex y Actores Clave",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Entendiendo el Mercado Forex: Actores Principales y su Impacto",
    description: "Explora los roles de los bancos centrales, bancos comerciales, fondos de cobertura, traders minoristas y grandes corporaciones en el mercado forex. Descubre cómo cada uno contribuye a la dinámica del mercado y cómo este conocimiento puede ayudarte a tener éxito en el trading de forex.",
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
  title: "Comprendre le Marché Forex : Acteurs Clés et Leur Impact",
  description: "Obtenez une compréhension approfondie du marché forex et des différents acteurs qui façonnent sa dynamique. Apprenez comment les banques centrales, les banques commerciales, les fonds spéculatifs, les traders individuels et les grandes corporations influencent le paysage du trading forex.",
  keywords: "marché forex, banques centrales, banques commerciales, fonds spéculatifs, traders individuels, grandes corporations, trading forex, acteurs du marché",
  language: "fr",
  subject: "Structure du Marché Forex et Acteurs Clés",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Comprendre le Marché Forex : Acteurs Clés et Leur Impact",
    description: "Explorez les rôles des banques centrales, des banques commerciales, des fonds spéculatifs, des traders individuels et des grandes corporations sur le marché forex. Découvrez comment chacun contribue à la dynamique du marché et comment cette connaissance peut vous aider à réussir dans le trading forex.",
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

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-10">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className='mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5'> {t('article_market_events_on_trading:h1_title')}  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'May 27 2024'} userImg={userImg} /> */}

          {t('article_market_events_on_trading:par_one')} <br /><br />
          {t('article_market_events_on_trading:par_two')} <br /><br />
          {t('article_market_events_on_trading:par_three')} <br /><br />

          <h3 className="font-semibold text-2xl"> {t('article_market_events_on_trading:title_one')}</h3> <br />

          {t('article_market_events_on_trading:par_four')}<br /><br />

          {t('article_market_events_on_trading:par_five')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_market_events_on_trading:title_two')}</h3> <br />

          {t('article_market_events_on_trading:par_six')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_market_events_on_trading:title_three')}</h3><br />

          {t('article_market_events_on_trading:par_seven')}<br /><br />
          {t('article_market_events_on_trading:par_eight')}<br /><br />
          {t('article_market_events_on_trading:par_nine')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_market_events_on_trading:title_four')}</h3><br />

          {t('article_market_events_on_trading:par_ten')}<br /><br />
          {t('article_market_events_on_trading:par_eleven')} <br /><br />
          {t('article_market_events_on_trading:par_twelve')} <br /><br />

            <CtaButton
              utm="https://app.toptiertrader.com/buy-challenge/?el=Market_Events_On_Trading_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Market Events on Trading"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

