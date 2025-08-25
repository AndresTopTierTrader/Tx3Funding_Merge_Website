//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import { Suspense } from 'react';
import dynamic from "next/dynamic";
import { bgImageStyle } from "@/constants/styles"
import {STRAPI_DB_URL} from '@/constants/global';
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const MainLazyLoading = dynamic(() => import("@/components/blog/Main"), {
  ssr: true,
  loading: () => <div style={bgImageStyle} className="w-full py-44 -mt-20 mb:mt-0 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 ,b-10 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-ttblue
   ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest News...</p>
  </div>
})

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

const i18nNameSpaces = ["common", "blog_landing"];

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Expert Trading Insights and Analysis | TopTier Proprietary Trading Blogs",
  description: "Dive into our trading blogs for in-depth insights on the latest market trends, technologies, and trading strategies across stocks, forex, cryptocurrencies, and more.",
  keywords: "proprietary trading insights, trading strategies blog, market trends analysis, forex trading, stock trading, cryptocurrency insights, trading journey guidance",
  language: "en",
  subject: "In-depth Trading Analysis and Strategies",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Explore TopTier Trading Insights - Elevate Your Trading Knowledge",
    description: "Unlock the full potential of your trading with TopTier Trader blogs. Gain expert insights and strategies to navigate the financial markets confidently.",
    images: [],
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr'
    }
  }
};

const metadata_es = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Noticias y Claves de la Industria - TopTier Proprietary Trading.",
  description: "Únete a TopTier Trader, la firma líder en evaluación de trading propietario. Buscamos traders cualificados para financiar. ¡Inicia tu camino en el trading y descubre nuevas oportunidades hoy!",
  keywords: "trading propietario, prop trading, financiamiento para traders, evaluación de trading, traders experimentados, carrera en trading, mercados financieros, oportunidades de trading",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario",
    description: "¿Eres un trader cualificado? Únete a TopTier Trader para obtener financiamiento y elevar tu carrera en trading. ¡Aplica ahora y comienza a operar con nuestro capital!",
   
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_fr = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Aperçus et Analyses de Trading Experts | Blogs de Trading Propriétaire TopTier",
  description: "Plongez dans nos blogs de trading pour des aperçus approfondis sur les dernières tendances du marché, les technologies et les stratégies de trading pour les actions, le forex, les cryptomonnaies, et plus encore.",
  keywords: "aperçus de trading propriétaire, blog de stratégies de trading, analyse des tendances du marché, trading forex, trading d'actions, aperçus sur les cryptomonnaies, guide de parcours de trading",
  language: "fr",
  subject: "Analyse et Stratégies de Trading Approfondies",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Explorez les Aperçus de Trading TopTier - Élevez Vos Connaissances en Trading",
    description: "Débloquez le plein potentiel de votre trading avec les blogs de TopTier Trader. Obtenez des aperçus et des stratégies d'experts pour naviguer avec confiance sur les marchés financiers.",
   
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr'
    },
    openGraph: {
      images: {}
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

  returnedMetadata.metadataBase = new URL(
    process.env.NODE_ENV === 'production'
      ? `${ENVIRONMENT_URL}`
      : 'http://localhost:3000'
  )

  return returnedMetadata
}

async function fetchInitialData(locale) {
  const response = await fetch(`${STRAPI_DB_URL}/${locale.split('-')[0]}-blog-items?populate=image&pagination[pageSize]=100`);
  const result = await response.json();
  const data = result.data;

  return data.map((item) => ({
    image: item.attributes.image.data.length > 0 ? item.attributes.image.data[0].attributes.url : item.attributes.image.data.attributes.url,
    link: item.attributes.link,
    title: item.attributes.title,
    description: item.attributes.description,
    goesIntoCarousel: item.attributes.goesIntoCarousel,
    tags: item.attributes.tags,
    specialTag: item.attributes.specialTag,
    priorityOnCarousel: item.attributes.priorityOnCarousel
  }));
}


export default async function Products({ params: { locale } }) {
  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

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
      resourcesResourcesTitle: t('common:resources_resources_title'),
      exploreResources: t('common:explore_resource')
    }
  }

  const mainSectionTranslations = {
    titleOne: t('blog_landing:title_one'),
    titleTwo: t('blog_landing:title_two'),
    titleThree: t('blog_landing:title_three'),
    titleTrading: t('blog_landing:title_trading'),
    titleResources: t('blog_landing:title_resources'),
    content: t('blog_landing:content'),
    catAll: t('blog_landing:cat_all'),
    catMeet: t('blog_landing:cat_meet'),
    catTips: t('blog_landing:cat_tips'),
    catMarket: t('blog_landing:cat_market'),
    catUpdates: t('blog_landing:cat_updates'),
    loadMore: t('blog_landing:load_more'),
    keepReading: t('blog_landing:keep_reading'),
  }

  const initialItemList = await fetchInitialData(locale);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <MainLazyLoading
          translations={mainSectionTranslations}
          initialTranslations={mainSectionTranslations}
          initialItemList={initialItemList}
        />
        <FinalSectionLazyLoading
          translations={finalSectionTranslations}
          isResourcesVisible={false}
          locale={locale}
        />
      </Suspense>
    </TranslationsProvider>
  )
}

