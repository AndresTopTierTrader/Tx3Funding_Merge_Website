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
const blogParam = "forex-strategies"

const metadata_en = {
  title: "Mastering News Trading: Essential Forex Market Strategies for 2024",
  description: "Learn the fundamentals of news trading in Forex, including key economic indicators, strategy development, essential tools, and the pros and cons of this trading approach.",
  keywords: "Forex trading, news trading, economic indicators, trading strategy, fundamental analysis, technical analysis, risk management, economic calendar, real-time news feed, forex analysis platforms",
  language: "en",
  subject: "Forex Trading Education",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "article",
    title: "Master Forex News Trading: Essential Strategies for 2024",
    description: "Discover how to leverage economic news for successful Forex trading. Learn about key indicators, strategy development, and essential tools for news trading.",
    // Ensure you replace with actual image metadata
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
    },
    openGraph: {
      images: {}
    }
  },
  article: {
    publishedTime: "2024-01-01T00:00:00Z", // Replace with actual publish date
    modifiedTime: "2024-01-01T00:00:00Z", // Replace with actual last modified date
    section: "Forex Education",
    tag: ["Forex", "News Trading", "Economic Indicators", "Trading Strategy"]
  }
};

const metadata_es = {
  title: "Dominando el Trading de Noticias: Estrategias Esenciales del Mercado Forex para 2024",
  description: "Aprende los fundamentos del trading de noticias en Forex, incluyendo indicadores económicos clave, desarrollo de estrategias, herramientas esenciales y los pros y contras de este enfoque de trading.",
  keywords: "Trading Forex, trading de noticias, indicadores económicos, estrategia de trading, análisis fundamental, análisis técnico, gestión de riesgos, calendario económico, feed de noticias en tiempo real, plataformas de análisis forex",
  language: "es",
  subject: "Educación en Trading Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "article",
    title: "Domina el Trading de Noticias en Forex: Estrategias Esenciales para 2024",
    description: "Descubre cómo aprovechar las noticias económicas para un trading exitoso en Forex. Aprende sobre indicadores clave, desarrollo de estrategias y herramientas esenciales para el trading de noticias.",
    // Replace with actual image metadata
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
    },
    openGraph: {
      images: {}
    }
  },
  article: {
    publishedTime: "2024-01-01T00:00:00Z", // Replace with actual publish date
    modifiedTime: "2024-01-01T00:00:00Z", // Replace with actual last modified date
    section: "Educación Forex",
    tag: ["Forex", "Trading de Noticias", "Indicadores Económicos", "Estrategia de Trading"]
  }
};

const metadata_fr = {
  title: "Maîtriser le Trading sur Actualités : Stratégies Essentielles du Marché Forex pour 2024",
  description: "Apprenez les fondamentaux du trading sur actualités en Forex, y compris les indicateurs économiques clés, le développement de stratégies, les outils essentiels et les avantages et inconvénients de cette approche de trading.",
  keywords: "Trading Forex, trading sur actualités, indicateurs économiques, stratégie de trading, analyse fondamentale, analyse technique, gestion des risques, calendrier économique, flux d'actualités en temps réel, plateformes d'analyse forex",
  language: "fr",
  subject: "Éducation au Trading Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader, Inc.",
  og: {
    type: "article",
    title: "Maîtrisez le Trading sur Actualités en Forex : Stratégies Essentielles pour 2024",
    description: "Découvrez comment tirer parti des nouvelles économiques pour un trading Forex réussi. Apprenez les indicateurs clés, le développement de stratégies et les outils essentiels pour le trading sur actualités.",
    // Ensure you replace with actual image metadata
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
    },
    openGraph: {
      images: {}
    }
  },
  article: {
    publishedTime: "2024-01-01T00:00:00Z", // Replace with actual publish date
    modifiedTime: "2024-01-01T00:00:00Z", // Replace with actual last modified date
    section: "Éducation Forex",
    tag: ["Forex", "Trading sur Actualités", "Indicateurs Économiques", "Stratégie de Trading"]
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

import newspaper from './assets/newspaper.webp'
import calendar from './assets/calendar.webp'
import cellNews from './assets/cellNews.webp'
import chart from './assets/chart.webp'

const i18nNameSpaces = ["common", "blog_landing", "article_forex_strategies"];

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
    h1_title: t('article_forex_strategies:h1_title'),
    p1: t('article_forex_strategies:p1'),
    t1: t('article_forex_strategies:t1'),
    p2: t('article_forex_strategies:p2'),
    p3: t('article_forex_strategies:p3'),
    p4: t('article_forex_strategies:p4'),
    t2: t('article_forex_strategies:t2'),
    p5_1: t('article_forex_strategies:p5_1'),
    p5_2: t('article_forex_strategies:p5_2'),
    p5_3: t('article_forex_strategies:p5_3'),
    p5_4: t('article_forex_strategies:p5_4'),
    p6: t('article_forex_strategies:p6'),
    p7: t('article_forex_strategies:p7'),
    t3: t('article_forex_strategies:t3'),
    t4: t('article_forex_strategies:t4'),
    p8: t('article_forex_strategies:p8'),
    p9_1: t('article_forex_strategies:p9_1'),
    p9_2: t('article_forex_strategies:p9_2'),
    p9_3: t('article_forex_strategies:p9_3'),
    p9_4: t('article_forex_strategies:p9_4'),
    p9_5: t('article_forex_strategies:p9_5'),
    p9_6: t('article_forex_strategies:p9_6'),
    t5: t('article_forex_strategies:t5'),
    p10: t('article_forex_strategies:p10'),
    p11_1: t('article_forex_strategies:p11_1'),
    p11_2: t('article_forex_strategies:p11_2'),
    p11_3: t('article_forex_strategies:p11_3'),
    p11_4: t('article_forex_strategies:p11_4'),
    p11_5: t('article_forex_strategies:p11_5'),
    p11_6: t('article_forex_strategies:p11_6'),
    t6: t('article_forex_strategies:t6'),
    p12_1: t('article_forex_strategies:p12_1'),
    p12_2: t('article_forex_strategies:p12_2'),
    p12_3: t('article_forex_strategies:p12_3'),
    p12_4: t('article_forex_strategies:p12_4'),
    p12_5: t('article_forex_strategies:p12_5'),
    p12_6: t('article_forex_strategies:p12_6'),
    t7: t('article_forex_strategies:t7'),
    p13: t('article_forex_strategies:p13'),
    t8: t('article_forex_strategies:t8'),
    p14: t('article_forex_strategies:p14'),
    p15_1: t('article_forex_strategies:p15_1'),
    p15_2: t('article_forex_strategies:p15_2'),
    p15_3: t('article_forex_strategies:p15_3'),
    p15_4: t('article_forex_strategies:p15_4'),
    p15_5: t('article_forex_strategies:p15_5'),
    p15_6: t('article_forex_strategies:p15_6'),
    p16_1: t('article_forex_strategies:p16_1'),
    p16_2: t('article_forex_strategies:p16_2'),
    p16_3: t('article_forex_strategies:p16_3'),
    p16_4: t('article_forex_strategies:p16_4'),
    p17: t('article_forex_strategies:p17'),
    t9: t('article_forex_strategies:t9'),
    p18: t('article_forex_strategies:p18'),
    p19_1: t('article_forex_strategies:p19_1'),
    p19_2: t('article_forex_strategies:p19_2'),
    p19_3: t('article_forex_strategies:p19_3'),
    p19_4: t('article_forex_strategies:p19_4'),
    p19_5: t('article_forex_strategies:p19_5'),
    p19_6: t('article_forex_strategies:p19_6'),
    p20_1: t('article_forex_strategies:p20_1'),
    p20_2: t('article_forex_strategies:p20_2'),
    p20_3: t('article_forex_strategies:p20_3'),
    p20_4: t('article_forex_strategies:p20_4'),
    p20_5: t('article_forex_strategies:p20_5'),
    p21_1: t('article_forex_strategies:p21_1'),
    p21_2: t('article_forex_strategies:p21_2'),
    p21_3: t('article_forex_strategies:p21_3'),
    p21_4: t('article_forex_strategies:p21_4'),
    p21_5: t('article_forex_strategies:p21_5'),
    t10: t('article_forex_strategies:t10'),
    p22: t('article_forex_strategies:p22'),
    p23_1: t('article_forex_strategies:p23_1'),
    p23_2: t('article_forex_strategies:p23_2'),
    p23_3: t('article_forex_strategies:p23_3'),
    p23_4: t('article_forex_strategies:p23_4'),
    p23_5: t('article_forex_strategies:p23_5'),
    p23_6: t('article_forex_strategies:p23_6'),
    p24_1: t('article_forex_strategies:p24_1'),
    p24_2: t('article_forex_strategies:p24_2'),
    p24_3: t('article_forex_strategies:p24_3'),
    p24_4: t('article_forex_strategies:p24_4'),
    p24_5: t('article_forex_strategies:p24_5'),
    p25_1: t('article_forex_strategies:p25_1'),
    p25_2: t('article_forex_strategies:p25_2'),
    p25_3: t('article_forex_strategies:p25_3'),
    p25_4: t('article_forex_strategies:p25_4'),
    p25_5: t('article_forex_strategies:p25_5'),
    p25_6: t('article_forex_strategies:p25_6'),
    p26: t('article_forex_strategies:p26'),
    t11: t('article_forex_strategies:t11'),
    p27: t('article_forex_strategies:p27'),
    p28_1: t('article_forex_strategies:p28_1'),
    p28_2: t('article_forex_strategies:p28_2'),
    p28_3: t('article_forex_strategies:p28_3'),
    p28_4: t('article_forex_strategies:p28_4'),
    p29_1: t('article_forex_strategies:p29_1'),
    p29_2: t('article_forex_strategies:p29_2'),
    p29_3: t('article_forex_strategies:p29_3'),
    p29_4: t('article_forex_strategies:p29_4'),
    p30: t('article_forex_strategies:p30'),
    p31: t('article_forex_strategies:p31'),

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

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {translatedTexts.h1_title}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Sep 12 2024'} userImg={userImg} /> */}

          {translatedTexts.p1} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t1}</h3><br />

          <Image alt="blog image" src={newspaper} width={800} height={800} /> <br /><br />

          {translatedTexts.p2} <br /><br />
          {translatedTexts.p3} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t2}</h3><br />

          {translatedTexts.p4} <br /><br />

          <div className="pl-8">
            - {translatedTexts.p5_1} <br /><br />
            - {translatedTexts.p5_2} <br /><br />
            - {translatedTexts.p5_3} <br /><br />
            - {translatedTexts.p5_4} <br /><br />
          </div>

          {translatedTexts.p6} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t3}</h3><br />

          {translatedTexts.p7} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t4}</h3><br />

          {translatedTexts.p8} <br /><br />

          {translatedTexts.p9_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p9_2} <br /><br />
            - {translatedTexts.p9_3} <br /><br />
            - {translatedTexts.p9_4} <br /><br />
            - {translatedTexts.p9_5} <br /><br />
            - {translatedTexts.p9_6} <br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {translatedTexts.t5}</h3><br />

          {translatedTexts.p10} <br /><br />

          {translatedTexts.p11_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p11_2} <br /><br />
            - {translatedTexts.p11_3} <br /><br />
            - {translatedTexts.p11_4} <br /><br />
            - {translatedTexts.p11_5} <br /><br />
            - {translatedTexts.p11_6} <br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {translatedTexts.t6}</h3><br />

          {translatedTexts.p12_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p12_2} <br /><br />
            - {translatedTexts.p12_3} <br /><br />
            - {translatedTexts.p12_4} <br /><br />
            - {translatedTexts.p12_5} <br /><br />
            - {translatedTexts.p12_6} <br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {translatedTexts.t7}</h3><br />

          {translatedTexts.p13} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t8}</h3><br />

          {translatedTexts.p14} <br /><br />

          <Image alt="blog image" src={calendar} width={800} height={800} /> <br /><br />

          {translatedTexts.p15_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p15_2} <br /><br />
            - {translatedTexts.p15_3} <br /><br />
            - {translatedTexts.p15_4} <br /><br />
            - {translatedTexts.p15_5} <br /><br />
            - {translatedTexts.p15_6} <br /><br />
          </div>

          {translatedTexts.p16_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p16_2} <br /><br />
            - {translatedTexts.p16_3} <br /><br />
            - {translatedTexts.p16_4} <br /><br />
          </div>

          {translatedTexts.p17} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t9}</h3><br />

          {translatedTexts.p18} <br /><br />

          <Image alt="blog image" src={cellNews} width={800} height={800} /> <br /><br />

          {translatedTexts.p19_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p19_2} <br /><br />
            - {translatedTexts.p19_3} <br /><br />
            - {translatedTexts.p19_4} <br /><br />
            - {translatedTexts.p19_5} <br /><br />
            - {translatedTexts.p19_6} <br /><br />
          </div>

          {translatedTexts.p20_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p20_2} <br /><br />
            - {translatedTexts.p20_3} <br /><br />
            - {translatedTexts.p20_4} <br /><br />
            - {translatedTexts.p20_5} <br /><br />
          </div>

          {translatedTexts.p21_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p21_2} <br /><br />
            - {translatedTexts.p21_3} <br /><br />
            - {translatedTexts.p21_4} <br /><br />
            - {translatedTexts.p21_5} <br /><br />
          </div>

          <h3 className="font-semibold text-2xl">  {translatedTexts.t10}</h3><br />

          {translatedTexts.p22} <br /><br />

          <Image alt="blog image" src={chart} width={800} height={800} /> <br /><br />

          {translatedTexts.p23_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p23_2} <br /><br />
            - {translatedTexts.p23_3} <br /><br />
            - {translatedTexts.p23_4} <br /><br />
            - {translatedTexts.p23_5} <br /><br />
            - {translatedTexts.p23_6} <br /><br />
          </div>

          {translatedTexts.p24_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p24_2} <br /><br />
            - {translatedTexts.p24_3} <br /><br />
            - {translatedTexts.p24_4} <br /><br />
            - {translatedTexts.p24_5} <br /><br />
          </div>

          {translatedTexts.p25_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p25_2} <br /><br />
            - {translatedTexts.p25_3} <br /><br />
            - {translatedTexts.p25_4} <br /><br />
            -  {translatedTexts.p25_5} <br /><br />
            - {translatedTexts.p25_6} <br /><br />
          </div>

          {translatedTexts.p26} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t11}</h3><br />

          {translatedTexts.p27} <br /><br />

          {translatedTexts.p28_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p28_2} <br /><br />
            - {translatedTexts.p28_3} <br /><br />
            -  {translatedTexts.p28_4} <br /><br />
          </div>

          <p></p>
          {translatedTexts.p29_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p29_2} <br /><br />
            - {translatedTexts.p29_3} <br /><br />
            - {translatedTexts.p29_4} <br /><br />
          </div>

          {translatedTexts.p30} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Forex_Strategies_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Forex Strategies"
            translation='Start Your Challenge Today!' />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

