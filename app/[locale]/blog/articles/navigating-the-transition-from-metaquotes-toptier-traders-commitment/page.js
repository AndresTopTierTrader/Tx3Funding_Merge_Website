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

const i18nNameSpaces = ["common", "blog_landing", "article_navigation_the_transition"];

//Params to bring the info from the db
const blogParam = "navigating-the-transition-from-metaquotes-toptier-traders-commitment"

const metadata_en = {
  title: "Navigating the MetaQuotes Crackdown with TopTier Trader's TradeLocker",
  description: "Uncover how TopTier Trader is addressing the MetaQuotes crackdown on prop firms with its innovative platform, TradeLocker. Explore features designed for modern trading, including SL&TP calculators, seamless TradingView integration, and more.",
  keywords: "MetaQuotes crackdown, prop trading, TradeLocker, TopTier Trader, TradingView integration, risk management, day trading platforms, proprietary trading",
  language: "en",
  subject: "Adapting to Changes in Proprietary Trading with TradeLocker",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Navigating the MetaQuotes Crackdown with TopTier Trader's TradeLocker",
    description: "Discover how TradeLocker offers a comprehensive solution amidst the shifting landscape of proprietary trading, empowering traders with advanced tools and functionalities.",
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
  title: "Navegando la Represión de MetaQuotes con TradeLocker de TopTier Trader",
  description: "Descubre cómo TopTier Trader está abordando la represión de MetaQuotes sobre las firmas prop con su plataforma innovadora, TradeLocker. Explora características diseñadas para el trading moderno, incluyendo calculadoras SL&TP, integración perfecta con TradingView y más.",
  keywords: "represión de MetaQuotes, trading prop, TradeLocker, TopTier Trader, integración con TradingView, gestión de riesgo, plataformas de trading diario, trading propietario",
  language: "es",
  subject: "Adaptándose a los Cambios en el Trading Propietario con TradeLocker",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Navegando la Represión de MetaQuotes con TradeLocker de TopTier Trader",
    description: "Descubre cómo TradeLocker ofrece una solución integral en medio del cambiante paisaje del trading propietario, empoderando a los traders con herramientas y funcionalidades avanzadas.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/bolg/articles/${blogParam}`
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
  title: "Naviguer à travers le Durcissement de MetaQuotes avec TradeLocker de TopTier Trader",
  description: "Découvrez comment TopTier Trader fait face au durcissement de MetaQuotes sur les firmes propriétaires avec sa plateforme innovante, TradeLocker. Explorez des fonctionnalités conçues pour le trading moderne, y compris des calculateurs SL&TP, une intégration transparente avec TradingView, et plus encore.",
  keywords: "durcissement de MetaQuotes, trading propriétaire, TradeLocker, TopTier Trader, intégration TradingView, gestion des risques, plateformes de day trading, trading propriétaire",
  language: "fr",
  subject: "S'adapter aux Changements dans le Trading Propriétaire avec TradeLocker",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Naviguer à travers le Durcissement de MetaQuotes avec TradeLocker de TopTier Trader",
    description: "Découvrez comment TradeLocker offre une solution complète face au paysage changeant du trading propriétaire, dotant les traders d'outils et de fonctionnalités avancés.",
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

      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-2">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className='mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5'> {t('article_navigation_the_transition:h1_title')}  </h1>
        </header>

        {/* Article Content */}
        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Jun 20 2024'} userImg={userImg} /> */}

          {t('article_navigation_the_transition:par_one')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_navigation_the_transition:title_one')} </h3><br />
          {t('article_navigation_the_transition:par_two')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_navigation_the_transition:title_two')}</h3><br />
          {t('article_navigation_the_transition:par_three')} <br /><br />

          <h3 className="font-semibold text-2xl">{t('article_navigation_the_transition:title_three')}</h3><br />
          &bull; &nbsp;{t('article_navigation_the_transition:par_four')} <br /><br />
          &bull; &nbsp;{t('article_navigation_the_transition:par_five')}<br /><br />
          &bull; &nbsp;{t('article_navigation_the_transition:par_six')}<br /><br />
          &bull; &nbsp;{t('article_navigation_the_transition:par_seven')}<br /><br />
          &bull; &nbsp;{t('article_navigation_the_transition:par_eight')}<br /><br />
          &bull; &nbsp;{t('article_navigation_the_transition:par_nine')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_navigation_the_transition:title_four')}</h3><br />
          {t('article_navigation_the_transition:par_ten')}<br /><br />

          <h3 className="font-semibold text-2xl">{t('article_navigation_the_transition:title_five')}</h3><br />
          {t('article_navigation_the_transition:par_eleven')}<br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Navigating_The_Transition_From_MetaQuotes_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Navigating the Transition from MetaQuotes"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>

      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

