//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Head from 'next/head';
import Image from "next/image";
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

//Params to bring the info from the db
const blogParam = "top-three-trading-platforms"

const metadata_en = {
  title: "Top 3 Trading Platforms: Pip Calculator, TradingView, and Tradelocker",
  description: "Discover the top 3 trading platforms—Pip Calculator, TradingView, and Tradelocker—to elevate your forex trading strategies and risk management.",
  keywords: "TopTier Academy, Pip Calculator, TradingView, Tradelocker, forex trading platforms, forex analysis, risk management, trade execution, forex tools, trading strategies",
  language: "en",
  subject: "Forex Trading Tools",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Top 3 Trading Platforms: Pip Calculator, TradingView, and Tradelocker",
    description: "Elevate your forex trading game with Pip Calculator, TradingView, and Tradelocker—top platforms for analysis, risk management, and execution.",
    image: `${ENVIRONMENT_URL}/images/top_trading_platforms.png`,
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
  title: "Top 3 Plataformas de Trading: Calculadora Pip, TradingView y Tradelocker",
  description: "Descubre las 3 mejores plataformas de trading—Calculadora Pip, TradingView y Tradelocker—para mejorar tus estrategias y gestión de riesgos en forex.",
  keywords: "TopTier Academy, Calculadora Pip, TradingView, Tradelocker, plataformas de trading forex, análisis de forex, gestión de riesgos, ejecución de operaciones, herramientas de trading, estrategias de trading",
  language: "es",
  subject: "Herramientas de Trading Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Top 3 Plataformas de Trading: Calculadora Pip, TradingView y Tradelocker",
    description: "Mejora tu forex trading con la Calculadora Pip, TradingView y Tradelocker—plataformas principales para análisis, gestión de riesgos y ejecución.",
    image: `${ENVIRONMENT_URL}/images/top_trading_platforms.png`,
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
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
  title: "Top 3 Plateformes de Trading: Pip Calculator, TradingView, et Tradelocker",
  description: "Découvrez les meilleures plateformes de trading pour améliorer votre trading forex, y compris Pip Calculator, TradingView, et Tradelocker. Améliorez votre analyse, gestion des risques et exécution des trades.",
  keywords: "Meilleures plateformes de trading, Pip Calculator, TradingView, Tradelocker, outils de trading forex, analyse forex, gestion des trades, gestion des risques",
  language: "fr",
  subject: "Meilleures Plateformes de Trading pour les Traders Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Top 3 Plateformes de Trading: Pip Calculator, TradingView, et Tradelocker",
    description: "Découvrez les meilleures plateformes de trading pour améliorer votre trading forex, y compris Pip Calculator, TradingView, et Tradelocker. Améliorez votre analyse, gestion des risques et exécution des trades.",
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

import tradeLockerImg from './assets/TradeLocker.jpg'
import pipCalculatorImg from './assets/Pip Calculator.jpg'
import tradingViewImg from './assets/TradingView.jpg'

const i18nNameSpaces = ["common", "blog_landing", "article_trading_platforms"];

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

  const translatedTexts = {
    h1_title: t('article_trading_platforms:h1_title'),
    t1: t('article_trading_platforms:t1'),
    t2: t('article_trading_platforms:t2'),
    t3: t('article_trading_platforms:t3'),
    t4: t('article_trading_platforms:t4'),
    t5: t('article_trading_platforms:t5'),
    t6: t('article_trading_platforms:t6'),
    t7: t('article_trading_platforms:t7'),
    t8: t('article_trading_platforms:t8'),
    t9: t('article_trading_platforms:t9'),
    t10: t('article_trading_platforms:t10'),
    t11: t('article_trading_platforms:t11'),
    t12: t('article_trading_platforms:t12'),
    t13: t('article_trading_platforms:t13'),
    t14: t('article_trading_platforms:t14'),
    t15: t('article_trading_platforms:t15'),
    p1: t('article_trading_platforms:p1'),
    p2: t('article_trading_platforms:p2'),
    p3: t('article_trading_platforms:p3'),
    p4: t('article_trading_platforms:p4'),
    p5_1: t('article_trading_platforms:p5_1'),
    p5_2: t('article_trading_platforms:p5_2'),
    p5_3: t('article_trading_platforms:p5_3'),
    p5_4: t('article_trading_platforms:p5_4'),
    p6: t('article_trading_platforms:p6'),
    p7: t('article_trading_platforms:p7'),
    p8: t('article_trading_platforms:p8'),
    p9: t('article_trading_platforms:p9'),
    p10: t('article_trading_platforms:p10'),
    p11: t('article_trading_platforms:p11'),
    p12: t('article_trading_platforms:p12'),
    p13: t('article_trading_platforms:p13'),
    p14: t('article_trading_platforms:p14'),
    p15: t('article_trading_platforms:p15'),
    p16: t('article_trading_platforms:p16'),
    p17: t('article_trading_platforms:p17'),
    p18_1: t('article_trading_platforms:p18_1'),
    p18_2: t('article_trading_platforms:p18_2'),
    p18_3: t('article_trading_platforms:p18_3'),
    p18_4: t('article_trading_platforms:p18_4'),
    p19: t('article_trading_platforms:p19'),
    p20: t('article_trading_platforms:p20'),
    p21_1: t('article_trading_platforms:p21_1'),
    p21_2: t('article_trading_platforms:p21_2'),
    p21_3: t('article_trading_platforms:p21_3'),
    p21_4: t('article_trading_platforms:p21_4'),
    p21_5: t('article_trading_platforms:p21_5'),
    p21_6: t('article_trading_platforms:p21_6'),
    p22: t('article_trading_platforms:p22'),
    p23: t('article_trading_platforms:p23'),
    p24: t('article_trading_platforms:p24'),
    p25: t('article_trading_platforms:p25'),
    p26_1: t('article_trading_platforms:p26_1'),
    p26_2: t('article_trading_platforms:p26_2'),
    p26_3: t('article_trading_platforms:p26_3'),
    p26_4: t('article_trading_platforms:p26_4'),
    p26_5: t('article_trading_platforms:p26_5'),
    p26_6: t('article_trading_platforms:p26_6'),
    p26_7: t('article_trading_platforms:p26_7'),
    p26_8: t('article_trading_platforms:p26_8'),
    p26_9: t('article_trading_platforms:p26_9'),
    p26_10: t('article_trading_platforms:p26_10'),
    p26_11: t('article_trading_platforms:p26_11'),
    p26_12: t('article_trading_platforms:p26_12'),
    p27: t('article_trading_platforms:p27'),
    p28: t('article_trading_platforms:p28'),
    p29: t('article_trading_platforms:p29'),
    p30_1: t('article_trading_platforms:p30_1'),
    p30_2: t('article_trading_platforms:p30_2'),
    p30_3: t('article_trading_platforms:p30_3'),
    p30_4: t('article_trading_platforms:p30_4'),
    p31: t('article_trading_platforms:p31'),
    p32: t('article_trading_platforms:p32'),
    p33_1: t('article_trading_platforms:p33_1'),
    p33_2: t('article_trading_platforms:p33_2'),
    p33_3: t('article_trading_platforms:p33_3'),
    p33_4: t('article_trading_platforms:p33_4'),
    p33_5: t('article_trading_platforms:p33_5'),
    p33_6: t('article_trading_platforms:p33_6'),
    p33_7: t('article_trading_platforms:p33_7'),
    p33_8: t('article_trading_platforms:p33_8'),
    p33_9: t('article_trading_platforms:p33_9'),
    p33_10: t('article_trading_platforms:p33_10'),
    p33_11: t('article_trading_platforms:p33_11'),
    p33_12: t('article_trading_platforms:p33_12'),
    p33_13: t('article_trading_platforms:p33_13'),
    p33_14: t('article_trading_platforms:p33_14'),
    p34: t('article_trading_platforms:p34'),
    p35: t('article_trading_platforms:p35'),
    p36: t('article_trading_platforms:p36'),
    p37: t('article_trading_platforms:p37'),
  }

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <Head>
        <link rel="alternate" hreflang="en" href={`${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`} />
        <link rel="alternate" hreflang="es" href={`${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`} />
      </Head>

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} />

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">

        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {translatedTexts.h1_title}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Sep 30 2024'} userImg={userImg} /> */}

          {translatedTexts.p1} <br /><br />
          {translatedTexts.p2} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t1}</h3><br />

          <Image alt="blog Image" src={pipCalculatorImg} className="w-full mb-6" />

          <h4 className="font-semibold text-lg">  {translatedTexts.t2}</h4><br />

          {translatedTexts.p3} <br /><br />
          {translatedTexts.p4} <br /><br />

          {translatedTexts.p5_1} <br /><br />
          <div className="pl-8">
            {translatedTexts.p5_2} <br /><br />
            {translatedTexts.p5_3} <br /><br />
            {translatedTexts.p5_4} <br /><br />
          </div>

          <h4 className="font-semibold text-lg">  {translatedTexts.t3}</h4><br />

          {translatedTexts.p6} <br /><br />
          {translatedTexts.p7} <br /><br />
          {translatedTexts.p8} <br /><br />
          {translatedTexts.p9} <br /><br />
          {translatedTexts.p10} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t4}</h3><br />

          <Image alt="blog Image" src={tradingViewImg} className="w-full mb-6" />

          {translatedTexts.p11} <br /><br />
          {translatedTexts.p12} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t5}</h4><br />

          {translatedTexts.p13} <br /><br />
          {translatedTexts.p14} <br /><br />
          {translatedTexts.p15} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t6}</h4><br />

          {translatedTexts.p16} <br /><br />
          {translatedTexts.p17} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t7}</h4><br />

          {translatedTexts.p18_1} <br /><br />
          <div className="pl-8">
            {translatedTexts.p18_2} <br /><br />
            {translatedTexts.p18_3} <br /><br />
            {translatedTexts.p18_4} <br /><br />
          </div>
          {translatedTexts.p19} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t8}</h4><br />

          {translatedTexts.p20} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t9}</h4><br />

          {translatedTexts.p21_1} <br /><br />
          <div className="pl-8">
            {translatedTexts.p21_2} <br /><br />
            {translatedTexts.p21_3} <br /><br />
            {translatedTexts.p21_4} <br /><br />
            {translatedTexts.p21_5} <br /><br />
            {translatedTexts.p21_6} <br /><br />
          </div>

          {translatedTexts.p22} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t10}</h3><br />

          <Image alt="blog Image" src={tradeLockerImg} className="w-full mb-6" />

          {translatedTexts.p23} <br /><br />
          {translatedTexts.p24} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t11}</h4><br />

          {translatedTexts.p25} <br /><br />

          {translatedTexts.p26_1} <br /><br />
          <div className="pl-8">
            {translatedTexts.p26_2} <br /><br />
            {translatedTexts.p26_3} <br /><br />
            {translatedTexts.p26_4} <br /><br />
          </div>
          {translatedTexts.p26_5} <br /><br />
          <div className="pl-8">
            {translatedTexts.p26_6} <br /><br />
            {translatedTexts.p26_7} <br /><br />
            {translatedTexts.p26_8} <br /><br />
          </div>
          {translatedTexts.p26_9} <br /><br />
          <div className="pl-8">
            {translatedTexts.p26_10} <br /><br />
            {translatedTexts.p26_11} <br /><br />
            {translatedTexts.p26_12} <br /><br />
          </div>

          <h4 className="font-semibold text-lg">  {translatedTexts.t12}</h4><br />

          {translatedTexts.p27} <br /><br />
          {translatedTexts.p28} <br /><br />
          {translatedTexts.p29} <br /><br />

          <h4 className="font-semibold text-lg">  {translatedTexts.t13}</h4><br />

          {translatedTexts.p30_1} <br /><br />
          <div className="pl-8">
            {translatedTexts.p30_2} <br /><br />
            {translatedTexts.p30_3} <br /><br />
            {translatedTexts.p30_4} <br /><br />
          </div>
          {translatedTexts.p31} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t14}</h3><br />

          {translatedTexts.p32} <br /><br />

          {translatedTexts.p33_1} <br /><br />
          <div className="pl-8">
            {translatedTexts.p33_2} <br /><br />
            {translatedTexts.p33_3} <br /><br />
          </div>
          {translatedTexts.p33_4} <br /><br />
          <div className="pl-8">
            {translatedTexts.p33_5} <br /><br />
            {translatedTexts.p33_6} <br /><br />
          </div>
          {translatedTexts.p33_7} <br /><br />
          <div className="pl-8">
            {translatedTexts.p33_8} <br /><br />
            {translatedTexts.p33_9} <br /><br />
            {translatedTexts.p33_10} <br /><br />
          </div>
          {translatedTexts.p33_11} <br /><br />
          <div className="pl-8">
            {translatedTexts.p33_12} <br /><br />
            {translatedTexts.p33_13} <br /><br />
            {translatedTexts.p33_14} <br /><br />
          </div>

          {translatedTexts.p34} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t15}</h3><br />

          {translatedTexts.p35} <br /><br />
          {translatedTexts.p36} <br /><br />
          {translatedTexts.p37} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TopThreeTradingPlatforms_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Top Three Trading Platforms"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading locale={mainLang} translations={finalSectionTranslations} isResourcesVisible={false} />
    </TranslationsProvider>
  )
}

